import React, { useState, useMemo } from 'react';
import { ArrowLeft, ShieldCheck, UploadCloud, CheckCircle2, AlertCircle, MessageCircle, HelpCircle } from 'lucide-react';

// Webhook do n8n compartilhado pelos 7 catálogos — o campo "catalogo" abaixo identifica a origem.
const WEBHOOK_URL = 'https://lowticket-n8n.9ajfub.easypanel.host/webhook/reembolso';
const CATALOGO = 'Catálogo Podologia Premium';

const PRODUTOS = [
  'Catálogo Podologia Premium (Essencial) (R$ 19,90)',
  'Kit Completo para Podólogas',
  'Kit Completo para Podólogas - Oferta Especial',
  'Não sei / não lembro',
];

const MOTIVO_MIN = 30;
const ARQUIVO_MAX_MB = 5;
const TIPOS_ACEITOS = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];

// Palavras que indicam dúvida de uso (não insatisfação com o produto em si).
// Nesses casos, sugerimos o suporte como alternativa — sem bloquear o envio.
const PALAVRAS_DUVIDA_USO = [
  'nao sei usar', 'nao sei mexer', 'nao sei como', 'nao entendi', 'nao consegui usar',
  'nao consegui acessar', 'nao consegui abrir', 'nao abre', 'dificuldade', 'dificil',
  'complicado', 'confuso', 'confusa', 'como funciona', 'nao sei aplicar',
];

const normalizar = (texto: string) =>
  texto.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const pareceDuvidaDeUso = (motivo: string): boolean => {
  const normalizado = normalizar(motivo);
  return PALAVRAS_DUVIDA_USO.some((palavra) => normalizado.includes(palavra));
};

// Detecta texto "enrolado" só pra bater os 30 caracteres mínimos
// (ex: "aaaaaaaaaa" ou "asdf asdf asdf"), sem travar textos curtos legítimos.
const pareceTextoAleatorio = (motivo: string): boolean => {
  const limpo = motivo.trim();

  // Muitos caracteres iguais em sequência (ex: "aaaaaaa", "kkkkkkk")
  if (/(.)\1{4,}/i.test(limpo)) return true;

  const palavras = limpo.split(/\s+/).filter((p) => p.length >= 2);
  if (palavras.length < 3) return true;

  const letras = normalizar(limpo).replace(/[^a-z]/g, '');
  if (letras.length === 0) return true;

  const vogais = (letras.match(/[aeiou]/g) || []).length;
  return vogais / letras.length < 0.25;
};

interface FormState {
  nome: string;
  email: string;
  whatsapp: string;
  produto: string;
  motivo: string;
  pix: string;
  consentimento: boolean;
  website: string; // honeypot
}

const INITIAL_STATE: FormState = {
  nome: '',
  email: '',
  whatsapp: '',
  produto: '',
  motivo: '',
  pix: '',
  consentimento: false,
  website: '',
};

export const ReembolsoPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [comprovante, setComprovante] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState | 'comprovante', string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const startedAt = React.useRef<number>(Date.now());

  const sugerirSuporte = useMemo(() => pareceDuvidaDeUso(form.motivo), [form.motivo]);

  const linkWhatsAppSuporte = useMemo(() => {
    const mensagem = `Olá! Eu ia pedir reembolso do ${CATALOGO}, mas acho que só preciso de uma ajuda para usar. `
      + `O que eu descrevi foi: "${form.motivo.trim()}". Será que vocês conseguem me ajudar a usar antes?`;
    return `https://wa.me/message/LBM22JXSDL3DJ1?text=${encodeURIComponent(mensagem)}`;
  }, [form.motivo]);

  const handleBack = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const next: typeof errors = {};

    if (!form.nome.trim()) next.nome = 'Informe seu nome.';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Informe um e-mail válido.';
    if (form.whatsapp.replace(/\D/g, '').length < 10) next.whatsapp = 'Informe um WhatsApp válido com DDD.';
    if (!form.produto) next.produto = 'Selecione o produto comprado.';
    if (form.motivo.trim().length < MOTIVO_MIN) {
      next.motivo = `Escreva pelo menos ${MOTIVO_MIN} caracteres.`;
    } else if (pareceTextoAleatorio(form.motivo)) {
      next.motivo = 'Conte com suas palavras o que aconteceu — precisamos entender o motivo real.';
    }
    if (!form.pix.trim()) next.pix = 'Informe a chave PIX para o reembolso.';
    if (!form.consentimento) next.consentimento = 'É necessário autorizar o uso dos dados para prosseguir.';

    if (!comprovante) {
      next.comprovante = 'Anexe o comprovante de pagamento.';
    } else if (comprovante.size > ARQUIVO_MAX_MB * 1024 * 1024) {
      next.comprovante = `O arquivo deve ter até ${ARQUIVO_MAX_MB}MB.`;
    } else if (!TIPOS_ACEITOS.includes(comprovante.type)) {
      next.comprovante = 'Formato inválido. Envie uma imagem (JPG, PNG, WEBP) ou PDF.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Bots preenchem e enviam formulários muito rápido; humanos legítimos
    // não conseguem passar em todas as validações em menos de 3s. A checagem
    // vem depois do validate() para que erros de campo sempre apareçam.
    if (Date.now() - startedAt.current < 3000) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = new FormData();
      payload.append('catalogo', CATALOGO);
      payload.append('nome', form.nome.trim());
      payload.append('email', form.email.trim());
      payload.append('whatsapp', form.whatsapp.trim());
      payload.append('produto', form.produto);
      payload.append('motivo', form.motivo.trim());
      payload.append('pix', form.pix.trim());
      payload.append('website', form.website); // honeypot
      if (comprovante) payload.append('comprovante', comprovante);

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Não foi possível enviar sua solicitação. Tente novamente em instantes.');
      }

      setStatus('success');
      setForm(INITIAL_STATE);
      setComprovante(null);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen marble-bg text-neutral-800">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f9ede6]">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-[#8d6e63] hover:text-[#5d4037] transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-black text-[#5d4037] uppercase tracking-widest">Eu sou a Nat</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f9ede6] border border-[#D6C0A9] mb-6">
            <ShieldCheck className="w-7 h-7 text-[#9B6045]" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#9B6045]"></div>
            <span className="text-[10px] font-bold text-[#9B6045] uppercase tracking-[0.3em]">Eu sou a Nat</span>
            <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#9B6045]"></div>
          </div>
          <h1 className="text-3xl font-black text-[#5d4037] uppercase tracking-tight mb-4">
            Solicitar <span className="text-gold-metallic">Reembolso</span>
          </h1>
          <p className="text-sm text-[#8d6e63] font-medium max-w-sm mx-auto">
            Você tem 7 dias corridos a partir da compra para pedir reembolso.
            Preencha os dados abaixo para agilizar o processo.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white border border-[#f0e6dd] rounded-[24px] p-10 text-center shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-[#9B6045] mx-auto mb-4" />
            <h2 className="text-lg font-black text-[#5d4037] uppercase tracking-wide mb-2">
              Solicitação enviada!
            </h2>
            <p className="text-sm text-[#8d6e63] font-medium max-w-sm mx-auto">
              Recebemos seu pedido de reembolso e vamos analisar o comprovante enviado.
              Você receberá um retorno em até 2 dias úteis pelo e-mail informado.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-[#f0e6dd] rounded-[24px] p-8 shadow-sm space-y-6" noValidate>
            {/* Honeypot - invisível para humanos */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Não preencha este campo</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => updateField('website', e.target.value)}
              />
            </div>

            <Field label="Nome completo" error={errors.nome}>
              <input
                type="text"
                value={form.nome}
                onChange={(e) => updateField('nome', e.target.value)}
                className={inputClass(!!errors.nome)}
                placeholder="Seu nome completo"
              />
            </Field>

            <Field label="E-mail usado na compra" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={inputClass(!!errors.email)}
                placeholder="seuemail@exemplo.com"
              />
            </Field>

            <Field label="WhatsApp" error={errors.whatsapp}>
              <input
                type="tel"
                value={form.whatsapp}
                onChange={(e) => updateField('whatsapp', e.target.value)}
                className={inputClass(!!errors.whatsapp)}
                placeholder="(11) 91234-5678"
              />
            </Field>

            <Field label="Produto comprado" error={errors.produto}>
              <select
                value={form.produto}
                onChange={(e) => updateField('produto', e.target.value)}
                className={inputClass(!!errors.produto)}
              >
                <option value="">Selecione...</option>
                {PRODUTOS.map((produto) => (
                  <option key={produto} value={produto}>{produto}</option>
                ))}
              </select>
            </Field>

            <Field
              label="Motivo do reembolso"
              error={errors.motivo}
              hint={`${form.motivo.trim().length}/${MOTIVO_MIN} caracteres mínimos`}
            >
              <textarea
                value={form.motivo}
                onChange={(e) => updateField('motivo', e.target.value)}
                className={`${inputClass(!!errors.motivo)} min-h-[110px] resize-y`}
                placeholder="Conte o que aconteceu para que possamos entender melhor..."
              />
            </Field>

            {sugerirSuporte && (
              <div className="flex items-start gap-3 bg-[#f8f5f2] border border-[#eaddcf] rounded-2xl p-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#D6C0A9] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-[#9B6045]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#5d4037] font-bold mb-1">Ainda quer aproveitar o material?</p>
                  <p className="text-xs text-[#8d6e63] font-medium leading-relaxed mb-3">
                    Se você ainda tem interesse em usar, nosso suporte pode te ajudar a tirar as dúvidas e explicar
                    como funciona, passo a passo — na maioria das vezes a gente resolve rapidinho. Temos atendimento
                    pelo WhatsApp de segunda a sábado justamente pra isso, e estamos à disposição pra te ajudar.
                    Isso não muda seu prazo de reembolso: ele conta a partir de agora, mesmo que a gente converse
                    depois. Se preferir, pode seguir com a solicitação normalmente.
                  </p>
                  <a
                    href={linkWhatsAppSuporte}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-black text-[#9B6045] uppercase tracking-widest hover:text-[#5d4037] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            )}

            <Field label="Comprovante de pagamento" error={errors.comprovante}>
              <label className="flex items-center gap-3 border border-dashed border-[#D6C0A9] rounded-xl px-4 py-4 cursor-pointer hover:bg-[#f8f5f2] transition-colors">
                <UploadCloud className="w-5 h-5 text-[#9B6045] flex-shrink-0" />
                <span className="text-xs text-[#8d6e63] font-medium truncate">
                  {comprovante ? comprovante.name : 'Clique para anexar (JPG, PNG ou PDF, até 5MB)'}
                </span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  className="hidden"
                  onChange={(e) => setComprovante(e.target.files?.[0] ?? null)}
                />
              </label>
            </Field>

            <Field label="Chave PIX para o reembolso" error={errors.pix}>
              <input
                type="text"
                value={form.pix}
                onChange={(e) => updateField('pix', e.target.value)}
                className={inputClass(!!errors.pix)}
                placeholder="CPF, e-mail, telefone ou chave aleatória"
              />
            </Field>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consentimento}
                  onChange={(e) => updateField('consentimento', e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#9B6045]"
                />
                <span className="text-xs text-[#8d6e63] font-medium leading-relaxed">
                  Autorizo o uso dos meus dados exclusivamente para processar esta solicitação de reembolso,
                  conforme a <a href="#/privacidade" className="text-[#9B6045] underline">Política de Privacidade</a>.
                </span>
              </label>
              {errors.consentimento && <p className="text-[11px] text-red-500 font-medium mt-1">{errors.consentimento}</p>}
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl p-4">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full btn-gold py-4 rounded-2xl font-black text-xs uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </form>
        )}
      </div>

      <div className="py-8 border-t border-[#f9ede6] text-center">
        <p className="text-[10px] text-[#bcaaa4] uppercase tracking-widest">© 2026 Eu sou a Nat. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm text-[#5d4037] placeholder:text-[#bcaaa4] focus:outline-none focus:ring-2 focus:ring-[#D6C0A9] transition-colors ${
    hasError ? 'border-red-300' : 'border-[#eaddcf]'
  }`;

const Field: React.FC<{ label: string; error?: string; hint?: string; children: React.ReactNode }> = ({
  label,
  error,
  hint,
  children,
}) => (
  <div>
    <label className="block text-[11px] font-black text-[#5d4037] uppercase tracking-widest mb-2">{label}</label>
    {children}
    <div className="flex items-center justify-between mt-1.5">
      {error ? (
        <p className="text-[11px] text-red-500 font-medium">{error}</p>
      ) : <span />}
      {hint && <p className="text-[10px] text-[#bcaaa4] font-medium">{hint}</p>}
    </div>
  </div>
);
