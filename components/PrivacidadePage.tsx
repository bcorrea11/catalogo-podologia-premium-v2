
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const PrivacidadePage: React.FC = () => {
  return (
    <div className="min-h-screen marble-bg px-6 py-12">
      <div className="max-w-2xl mx-auto">

        <a
          href="#"
          onClick={() => { window.location.hash = ''; }}
          className="inline-flex items-center gap-2 text-[#9B6045] text-xs font-bold uppercase tracking-widest mb-10 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </a>

        <div className="mb-10">
          <span className="text-[10px] font-bold text-[#C4836A] uppercase tracking-[0.2em] mb-2 block">Legal</span>
          <h1 className="text-3xl font-black text-[#5d4037] uppercase leading-none">Política de <br /><span className="text-gold-metallic">Privacidade</span></h1>
        </div>

        <div className="space-y-8 text-sm text-[#8d6e63] leading-relaxed">

          <p className="text-xs text-[#bcaaa4] uppercase tracking-widest">Última atualização: fevereiro de 2026</p>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">1. Quem somos</h2>
            <p>Somos responsáveis pela venda do <strong className="text-[#5d4037]">Catálogo Podologia Premium</strong>, produto digital comercializado sob a marca <strong className="text-[#5d4037]">eusounat</strong>. Esta política descreve como tratamos os dados coletados durante a navegação e a compra em nosso site.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">2. Dados que coletamos</h2>
            <ul className="space-y-2 list-none">
              {[
                "Nome e endereço de e-mail (fornecidos no checkout)",
                "Número de telefone/WhatsApp (quando informado)",
                "Dados de navegação e origem do acesso (via UTM e pixels de rastreamento)",
                "Informações de pagamento — processadas exclusivamente pela plataforma de checkout parceira, não armazenadas por nós"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C4836A] font-bold mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">3. Como usamos seus dados</h2>
            <ul className="space-y-2 list-none">
              {[
                "Entregar o produto adquirido via e-mail ou WhatsApp",
                "Enviar comunicações relacionadas ao pedido (confirmação, suporte)",
                "Melhorar nossa experiência de marketing e anúncios",
                "Cumprir obrigações legais quando necessário"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#C4836A] font-bold mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">4. Compartilhamento de dados</h2>
            <p>Não vendemos nem alugamos seus dados a terceiros. Podemos compartilhá-los com plataformas de entrega do produto, processadores de pagamento e ferramentas de análise (como pixels de rastreamento), estritamente para viabilizar a operação.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">5. Seus direitos (LGPD)</h2>
            <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a acessar, corrigir ou solicitar a exclusão dos seus dados pessoais. Para exercer esses direitos, entre em contato pelo e-mail <strong className="text-[#5d4037]">suporte@eusounat.com.br</strong>.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">6. Cookies e rastreamento</h2>
            <p>Utilizamos scripts de rastreamento (UTMify) para mensurar o desempenho das nossas campanhas. Esses scripts podem coletar informações sobre sua origem de acesso e comportamento de navegação de forma agregada e anônima.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">7. Contato</h2>
            <p>Dúvidas sobre esta política? Fale conosco: <strong className="text-[#5d4037]">suporte@eusounat.com.br</strong></p>
          </section>

        </div>
      </div>
    </div>
  );
};
