import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  FileCheck2,
  Gift,
  HeartHandshake,
  Infinity as InfinityIcon,
  MessageCircle,
  Palette,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import { addUTMParams } from './utils/utm';
import { PrivacidadePage } from './components/PrivacidadePage';
import { TermosPage } from './components/TermosPage';
import { SuportePage } from './components/SuportePage';
import { ReembolsoPage } from './components/ReembolsoPage';

const PREMIUM_CHECKOUT = 'https://seguro.eusounat.com.br/checkout/f4df038e28ce';
const BASIC_CHECKOUT = 'https://seguro.eusounat.com.br/checkout/95ab7b11c54f';
const DOWNSELL_CHECKOUT = 'https://seguro.eusounat.com.br/checkout/011aced65fab';
const VIDEO_URL = 'https://pub-74df1c9f20a84a93bb06992597f2abb7.r2.dev/V%C3%ADdeo%20LP%20Podologia.mp4';

const catalogPages = [
  { src: '/catalogo/catalogo/pagina-1.webp', label: 'Capa do catálogo' },
  { src: '/catalogo/catalogo/pagina-2.webp', label: 'Página Sobre mim' },
  { src: '/catalogo/catalogo/pagina-3.webp', label: 'Visão geral dos cuidados' },
  { src: '/catalogo/catalogo/pagina-4.webp', label: 'Avaliação podológica' },
  { src: '/catalogo/catalogo/pagina-5.webp', label: 'Serviços de podologia preventiva' },
  { src: '/catalogo/catalogo/pagina-7.webp', label: 'Unhas e correções' },
  { src: '/catalogo/catalogo/pagina-9.webp', label: 'Micoses e alterações' },
  { src: '/catalogo/catalogo/pagina-13.webp', label: 'Pacotes e protocolos' },
  { src: '/catalogo/catalogo/pagina-16.webp', label: 'Formas de pagamento' },
];

const bonusItems = [
  { slug: 'checklist', img: '/catalogo/kit/checklist.webp', alt: 'Mockup do Checklist de Pré-Atendimento Podológico' },
  { slug: 'guia', img: '/catalogo/kit/guia-cuidados.webp', alt: 'Mockup do Guia de Cuidados Pós-Atendimento' },
  { slug: 'fidelidade', img: '/catalogo/kit/cartao-fidelidade.webp', alt: 'Mockup do Cartão Fidelidade Podológico' },
  { slug: 'retorno', img: '/catalogo/kit/cartao-retorno.webp', alt: 'Mockup do Cartão de Retorno Podológico' },
  { slug: 'figurinhas', img: '/catalogo/kit/pack-figurinhas.webp', alt: 'Mockup do Pack com mais de 100 figurinhas para Stories' },
];

const kitBenefits = [
  {
    title: 'Checklist de pré-atendimento',
    product: 'Organize antes de começar',
    description: 'Organize cada etapa antes do atendimento com um material prático que transmite mais segurança, cuidado e profissionalismo às suas clientes.',
  },
  {
    title: 'Guia de cuidados pós-atendimento',
    product: 'Oriente depois da sessão',
    description: 'Entregue orientações prontas após o atendimento, reforce os cuidados com os pés e valorize ainda mais o seu trabalho.',
  },
  {
    title: 'Cartão fidelidade',
    product: 'Incentive a continuidade',
    description: 'Use um modelo elegante para incentivar suas clientes a retornarem, continuarem os cuidados com você e fortalecer o relacionamento.',
  },
  {
    title: 'Cartão de retorno',
    product: 'Mantenha a frequência',
    description: 'Ajude suas clientes a lembrar da próxima manutenção com um cartão prático para agendar o retorno e manter os cuidados em dia.',
  },
  {
    title: 'Pack de figurinhas para Stories',
    product: 'Fortaleça sua presença online',
    description: 'Use mais de 100 figurinhas para criar Stories mais profissionais, divulgar seus serviços, engajar e reforçar sua presença online.',
  },
];

const feedbackImages = [1, 4, 5, 6, 7, 9, 11, 12, 14, 15].map(
  (number) => `/catalogo/feedbacks/feedback-${String(number).padStart(2, '0')}.webp`,
);

const faqs = [
  {
    question: 'O catálogo é realmente editável?',
    answer: 'Sim. Você pode alterar nome, foto, logo, cores, textos, serviços, valores, endereço e a ordem das páginas diretamente no Canva.',
  },
  {
    question: 'Preciso ter Canva Pro?',
    answer: 'Não. Basta usar uma conta gratuita do Canva, pelo celular ou computador; nenhuma assinatura Pro é necessária.',
  },
  {
    question: 'Quanto tempo levo para deixar pronto?',
    answer: 'Se quiser manter o modelo como está, basta trocar suas informações principais. As alterações básicas podem ser feitas em poucos minutos, com o apoio do tutorial.',
  },
  {
    question: 'Recebo o acesso na hora?',
    answer: 'Sim. Após a confirmação do pagamento, o acesso é enviado automaticamente para o e-mail informado na compra.',
  },
  {
    question: 'É um produto físico ou impresso?',
    answer: 'É um produto 100% digital. Você recebe o modelo para editar, baixar e compartilhar com suas clientes pelo WhatsApp ou pelas redes sociais.',
  },
  {
    question: 'Consigo trocar os preços e procedimentos?',
    answer: 'Sim. Todos os valores, nomes dos serviços, imagens e descrições podem ser substituídos para combinar com a sua forma de trabalhar.',
  },
  {
    question: 'O acesso vence?',
    answer: 'Não. O pagamento é único e o acesso ao material é vitalício, sem mensalidades ou renovação automática.',
  },
  {
    question: 'O que vem no Kit Completo?',
    answer: 'Catálogo Podologia Premium, tutorial em vídeo, checklist de pré-atendimento, guia de cuidados pós-atendimento, cartão fidelidade, cartão de retorno e pack com mais de 100 figurinhas para Stories.',
  },
  {
    question: 'E se eu tiver dificuldade para editar?',
    answer: 'Você recebe um tutorial em vídeo e pode falar com o suporte pelo WhatsApp, de segunda a sábado.',
  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const DemoVideo: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demonstracao" className="section section-demo">
      <div className="content-grid demo-grid">
        <div className="section-copy demo-copy">
          <span className="eyebrow eyebrow-dark"><Eye size={15} aria-hidden="true" /> Veja antes de comprar</span>
          <h2>Conheça o catálogo por dentro em 51 segundos.</h2>
          <p>Assista às páginas em sequência, veja como os procedimentos são apresentados e imagine o seu nome, sua foto e seus valores nesse material.</p>
          <ul className="check-list demo-benefits" aria-label="Características do catálogo">
            <li><CheckCircle2 aria-hidden="true" /> 17 páginas em formato perfeito para o celular</li>
            <li><CheckCircle2 aria-hidden="true" /> Textos e estrutura já organizados</li>
            <li><CheckCircle2 aria-hidden="true" /> Editável usando a versão gratuita do Canva</li>
          </ul>
          <button className="text-link desktop-only" onClick={() => scrollTo('paginas')}>Ver algumas páginas com mais detalhes <ChevronRight size={18} aria-hidden="true" /></button>
        </div>
        <div className="video-stage" ref={wrapperRef}>
          <div className="video-label"><PlayCircle size={16} /> Demonstração real</div>
          {shouldLoad ? (
            <video
              src={VIDEO_URL}
              poster="/catalogo/video-lp-poster.webp"
              autoPlay
              muted
              loop
              playsInline
              controls
              controlsList="nodownload"
              aria-label="Demonstração das 17 páginas do Catálogo Podologia Premium"
            />
          ) : (
            <img src="/catalogo/video-lp-poster.webp" alt="Prévia das páginas do Catálogo Podologia Premium" />
          )}
        </div>
      </div>
    </section>
  );
};

interface DownsellOfferModalProps {
  basicLink: string;
  discountLink: string;
  onClose: () => void;
}

const DownsellOfferModal: React.FC<DownsellOfferModalProps> = ({ basicLink, discountLink, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;

    document.body.classList.add('modal-open');
    dialog?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialog) return;

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === dialog)) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="downsell-overlay" onClick={(event) => event.target === event.currentTarget && onClose()}>
      <div
        ref={dialogRef}
        className="downsell-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="downsell-title"
        aria-describedby="downsell-description"
        tabIndex={-1}
      >
        <button type="button" className="downsell-close" onClick={onClose} aria-label="Fechar oferta e continuar na página">
          <X aria-hidden="true" />
        </button>

        <div className="downsell-content">
          <span className="downsell-badge"><Sparkles aria-hidden="true" /> R$ 7,50 de desconto</span>
          <h2 id="downsell-title">Leve o Kit Completo por só <em>R$ 7,50 a mais.</em></h2>
          <p id="downsell-description">Você estava escolhendo somente o catálogo. Nesta condição, por R$ 27,40 no total, você também recebe os cinco materiais extras.</p>

          <div className="downsell-products" aria-label="Cinco materiais extras incluídos no Kit Completo">
            {bonusItems.map((item) => <img key={item.slug} src={item.img} alt="" aria-hidden="true" />)}
          </div>

          <ul className="downsell-benefits">
            <li><CheckCircle2 aria-hidden="true" /> Checklist + guia de cuidados</li>
            <li><CheckCircle2 aria-hidden="true" /> Cartões fidelidade e de retorno</li>
            <li><CheckCircle2 aria-hidden="true" /> Mais de 100 figurinhas para Stories</li>
          </ul>

          <div className="downsell-price-box" aria-label="Kit Completo de R$ 34,90 por R$ 27,40">
            <span>Kit Completo de <s>R$ 34,90</s> por</span>
            <div><small>R$</small><strong>27,40</strong></div>
            <b>Condição especial liberada</b>
          </div>

          <a className="button button-primary button-large downsell-primary" href={discountLink} data-cta="downsell-discount-checkout">
            Quero o Kit Completo por R$ 27,40 <ArrowRight size={19} aria-hidden="true" />
          </a>
          <a className="downsell-basic-link" href={basicLink} data-cta="downsell-basic-checkout">
            <span>Não, quero apenas o catálogo por R$ 19,90</span><ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="downsell-assurance"><ShieldCheck aria-hidden="true" /> Pagamento único · acesso imediato · 7 dias de garantia</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [selectedPage, setSelectedPage] = useState<(typeof catalogPages)[number] | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [isDownsellOpen, setIsDownsellOpen] = useState(false);

  const closeDownsell = useCallback(() => setIsDownsellOpen(false), []);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const purchaseSections = ['kit-completo', 'oferta'];
      const purchaseSectionIsVisible = purchaseSections.some((id) => {
        const bounds = document.getElementById(id)?.getBoundingClientRect();
        return Boolean(bounds && bounds.top < window.innerHeight && bounds.bottom > 0);
      });

      setShowStickyCta(window.scrollY > 720 && !purchaseSectionIsVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!selectedPage) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPage(null);
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedPage]);

  if (currentHash === '#/privacidade') return <PrivacidadePage />;
  if (currentHash === '#/termos') return <TermosPage />;
  if (currentHash === '#/suporte') return <SuportePage />;
  if (currentHash === '#/reembolso') return <ReembolsoPage />;

  const premiumLink = addUTMParams(PREMIUM_CHECKOUT);
  const basicLink = addUTMParams(BASIC_CHECKOUT);
  const discountedKitLink = addUTMParams(DOWNSELL_CHECKOUT);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="topbar">
        <a href="#topo" className="brand" aria-label="Catálogo Podologia Premium — início">
          <span>Catálogo</span><strong>Podologia Premium</strong>
        </a>
        <button className="topbar-link" onClick={() => scrollTo('oferta')}>Ver oferta</button>
      </header>

      <main id="conteudo">
        <section id="topo" className="hero">
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow"><Sparkles size={15} aria-hidden="true" /> Feito para podólogas</span>
              <h1>Transforme um preço solto em uma apresentação que <em>valoriza o seu trabalho.</em></h1>
              <p className="hero-lead">Um catálogo digital pronto e editável no Canva para apresentar seus serviços, valores e cuidados com mais profissionalismo no WhatsApp.</p>
              <div className="hero-actions">
                <button className="button button-primary button-large" onClick={() => scrollTo('oferta')}>Ver opções a partir de R$ 19,90 <ArrowRight size={20} aria-hidden="true" /></button>
                <button className="button-link" onClick={() => scrollTo('demonstracao')}><PlayCircle size={19} aria-hidden="true" /> Ver o catálogo por dentro</button>
              </div>
              <div className="hero-assurance" aria-label="Condições da oferta">
                <span><Zap size={15} /> Acesso imediato</span>
                <span><InfinityIcon size={15} /> Acesso vitalício</span>
                <span><ShieldCheck size={15} /> 7 dias de garantia</span>
              </div>
            </div>
            <div className="hero-visual" aria-label="Páginas reais do Catálogo Podologia Premium">
              <div className="catalog-card catalog-card-left" aria-hidden="true"><img src="/catalogo/catalogo/pagina-5.webp" alt="" /></div>
              <div className="phone-mockup phone-main"><span className="phone-speaker" aria-hidden="true" /><img src="/catalogo/catalogo/pagina-1.webp" alt="Capa real do Catálogo Podologia Premium" loading="eager" /></div>
              <div className="catalog-card catalog-card-right" aria-hidden="true"><img src="/catalogo/catalogo/pagina-13.webp" alt="" /></div>
              <div className="page-count"><strong>17</strong><span>páginas<br />editáveis</span></div>
            </div>
          </div>
        </section>

        <section className="quick-proof" aria-label="Resumo do produto">
          <div><Smartphone aria-hidden="true" /><span><strong>Edite pelo celular</strong> ou computador</span></div>
          <div><Palette aria-hidden="true" /><span><strong>Funciona no Canva</strong> sem precisar do Pro</span></div>
          <div><Clock3 aria-hidden="true" /><span><strong>Pronto em minutos</strong> com tutorial</span></div>
          <div><MessageCircle aria-hidden="true" /><span><strong>Feito para enviar</strong> no WhatsApp</span></div>
        </section>

        <DemoVideo />

        <section className="section section-value">
          <div className="section-heading centered narrow">
            <span className="eyebrow eyebrow-light">Não é só estética</span>
            <h2>Sua cliente precisa perceber o valor antes de comparar o preço.</h2>
            <p>O catálogo organiza a conversa e apresenta o seu atendimento com o cuidado que ele merece.</p>
          </div>
          <div className="comparison-grid">
            <article className="comparison-card comparison-before">
              <span className="comparison-tag">Sem catálogo</span><h3>“Quanto custa?”</h3>
              <p>Um número isolado facilita a comparação e não mostra o que existe por trás do atendimento.</p>
            </article>
            <ArrowRight className="comparison-arrow" aria-hidden="true" />
            <article className="comparison-card comparison-after">
              <span className="comparison-tag">Com o catálogo</span><h3>Serviço, cuidado e valor.</h3>
              <p>Sua cliente entende as opções, conhece seu trabalho e recebe tudo de forma clara e profissional.</p>
            </article>
          </div>
        </section>

        <section id="paginas" className="section section-gallery">
          <div className="section-heading centered">
            <span className="eyebrow eyebrow-light"><FileCheck2 size={15} /> Páginas reais</span>
            <h2>Veja algumas das páginas do nosso catálogo.</h2>
            <p>Conheça a apresentação profissional, os serviços, os protocolos e as formas de pagamento. Toque em uma página para ampliar.</p>
          </div>
          <div className="catalog-gallery" aria-label="Prévia das páginas do catálogo">
            {catalogPages.map((page, index) => (
              <button key={page.src} className="gallery-card" onClick={() => setSelectedPage(page)} aria-label={`Ampliar ${page.label}`}>
                <img src={page.src} alt={page.label} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
                <span><Eye size={15} /> Ampliar</span>
              </button>
            ))}
          </div>
          <p className="gallery-note">Imagens e informações demonstrativas. Você pode trocar todos os textos, fotos, serviços e valores.</p>
        </section>

        <section className="section section-how">
          <div className="content-grid how-grid">
            <div className="section-copy">
              <span className="eyebrow eyebrow-dark">Simples de personalizar</span>
              <h2>Você não precisa criar nada do zero.</h2>
              <p>Mantenha o visual pronto e altere somente o essencial. Se quiser, personalize cada detalhe para combinar com a sua marca.</p>
            </div>
            <ol className="steps-list">
              <li>
                <span>01</span>
                <div>
                  <strong>Acesse o catálogo</strong>
                  <p>Após a compra, você recebe o catálogo praticamente pronto, exatamente igual ao que você viu no vídeo acima. Só falta colocar as suas informações.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Ajuste o básico para a sua marca</strong>
                  <p>São apenas quatro informações que você troca — o restante pode manter como está:</p>
                  <ul className="step-checklist">
                    <li><Check size={14} aria-hidden="true" /> Seu nome</li>
                    <li><Check size={14} aria-hidden="true" /> Sua foto</li>
                    <li><Check size={14} aria-hidden="true" /> Seus valores</li>
                    <li><Check size={14} aria-hidden="true" /> Seu endereço</li>
                  </ul>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Quer ir além? Personalize o que quiser</strong>
                  <p>O modelo é 100% editável no Canva. Você pode mudar cores, fotos, textos, serviços e ordem das páginas. Mas não é obrigatório: em menos de 10 minutos já está pronto para enviar.</p>
                </div>
              </li>
            </ol>
            <div className="how-highlights">
              <div><PlayCircle aria-hidden="true" /><div><strong>Tutorial em vídeo</strong><span>Incluído para guiar a edição</span></div></div>
              <div><Smartphone aria-hidden="true" /><div><strong>Canva gratuito</strong><span>Sem necessidade de plano pago</span></div></div>
              <div><MessageCircle aria-hidden="true" /><div><strong>Suporte de segunda a sábado</strong><span>Dúvidas pelo WhatsApp a qualquer momento</span></div></div>
            </div>
          </div>
          <div className="inline-cta">
            <div><span>Pagamento único</span><strong>A partir de R$ 19,90</strong></div>
            <button className="button button-primary" onClick={() => scrollTo('oferta')}>Ver as duas opções <ArrowRight size={19} /></button>
          </div>
        </section>

        <section className="section section-social">
          <div className="section-heading centered narrow">
            <span className="eyebrow eyebrow-light"><BadgeCheck size={15} /> Feedbacks reais</span>
            <h2>Quem usa nossos catálogos sente a diferença.</h2>
            <p>Relatos compartilhados por clientes da Eu Sou a Nat. Arraste para o lado e leia.</p>
          </div>
          <div className="feedback-gallery" aria-label="Feedbacks de clientes">
            {feedbackImages.map((src, index) => (
              <figure className="feedback-card" key={src}><img src={src} alt={`Feedback real de cliente ${index + 1}`} loading="lazy" decoding="async" /></figure>
            ))}
          </div>
        </section>

        <section id="kit-completo" className="section section-bonuses">
          <div className="kit-hero">
            <div className="kit-copy">
              <span className="eyebrow"><Gift size={15} /> O Kit Completo</span>
              <h2>Por só R$ 15 a mais, leve muito mais que o catálogo.</h2>
              <p>Você recebe cinco materiais extras para organizar o pré-atendimento, orientar os cuidados, incentivar o retorno e manter sua presença profissional nos Stories.</p>
              <div className="kit-price-bridge" aria-label="Comparação de preço entre o catálogo avulso e o Kit Completo">
                <div className="kit-price-start"><span>Catálogo avulso</span><strong>R$ 19,90</strong></div>
                <ArrowRight className="kit-price-arrow" aria-hidden="true" />
                <div className="kit-price-total"><small>apenas + R$ 15</small><span>Kit Completo</span><strong>R$ 34,90</strong></div>
              </div>
            </div>
            <div className="kit-showcase" aria-label="Mockups dos cinco materiais extras do Kit Completo">
              {bonusItems.map((item) => (
                <img key={item.slug} className={`kit-mockup kit-mockup-${item.slug}`} src={item.img} alt={item.alt} loading="lazy" decoding="async" />
              ))}
              <div className="kit-count-badge" aria-hidden="true"><strong>5</strong><span>materiais<br />extras</span></div>
            </div>
          </div>
          <div className="kit-benefit-grid">
            {kitBenefits.map((benefit) => (
              <article className="kit-benefit-card" key={benefit.title}>
                <CheckCircle2 aria-hidden="true" />
                <div><span>{benefit.product}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
              </article>
            ))}
          </div>
          <div className="kit-purchase-card">
            <div><span>Você recebe tudo isso</span><strong>Catálogo + tutorial em vídeo + 5 materiais extras</strong><p>Pagamento único · acesso imediato · materiais editáveis no Canva</p></div>
            <a className="button button-primary button-large" href={premiumLink} data-cta="kit-section-premium-checkout">Quero o Kit Completo por R$ 34,90 <ArrowRight size={20} /></a>
          </div>
          <button className="kit-compare-link" onClick={() => scrollTo('oferta')}>Comparar as duas versões <ChevronRight size={18} /></button>
        </section>

        <section id="oferta" className="section section-offer">
          <div className="section-heading centered offer-heading">
            <span className="eyebrow eyebrow-light">Nossa recomendação</span>
            <h2>Acreditamos que o Kit Completo pode fazer mais sentido para a sua rotina.</h2>
            <p>Além do catálogo, ele inclui 5 materiais extras pensados para ajudar você a organizar o atendimento, orientar suas clientes, incentivar o retorno e divulgar o seu trabalho.</p>
            <a className="offer-extras-link" href="#kit-completo" aria-label="Conhecer os cinco materiais extras incluídos no Kit Completo">
              <Gift size={17} aria-hidden="true" /> Conhecer os 5 materiais extras <ChevronRight size={17} aria-hidden="true" />
            </a>
            <p className="offer-alternative">Mas, se neste momento você quiser somente o catálogo, tudo bem. A opção de <strong>R$ 19,90</strong> está logo abaixo.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card price-card-premium">
              <div className="popular-badge"><Sparkles size={14} /> Mais escolhido</div>
              <p className="plan-kicker">Experiência completa</p><h3>Kit Completo para Podólogas</h3>
              <p className="price-context">Por apenas R$ 15 a mais que o catálogo avulso</p>
              <div className="price"><small>R$</small><strong>34,90</strong></div><p className="payment-note">pagamento único</p>
              <ul className="offer-list">
                <li><Check /> Catálogo Podologia Premium — 17 páginas</li><li><Check /> Tutorial completo em vídeo</li>
                <li><MessageCircle /> Suporte pelo WhatsApp de segunda a sábado</li>
                <li><Gift /> Checklist de pré-atendimento</li><li><Gift /> Guia de cuidados pós-atendimento</li>
                <li><Gift /> Cartão fidelidade</li><li><Gift /> Cartão de retorno</li><li><Gift /> +100 figurinhas para Stories</li>
              </ul>
              <a className="button button-primary button-large" href={premiumLink} data-cta="premium-checkout">Quero o Kit Completo <ArrowRight size={20} /></a>
              <p className="secure-note"><ShieldCheck size={15} /> Compra segura · Acesso imediato</p>
            </article>
            <article className="price-card price-card-basic">
              <p className="plan-kicker">Só o essencial</p><h3>Catálogo Podologia Premium</h3>
              <p className="price-context">Para quem quer somente o catálogo editável</p>
              <div className="price"><small>R$</small><strong>19,90</strong></div><p className="payment-note">pagamento único</p>
              <ul className="offer-list">
                <li><Check /> Catálogo editável com 17 páginas</li><li><Check /> Tutorial completo em vídeo</li>
                <li><MessageCircle /> Suporte pelo WhatsApp de segunda a sábado</li><li><Check /> Acesso vitalício</li><li><Check /> Entrega imediata por e-mail</li>
              </ul>
              <button type="button" className="button button-secondary button-large" onClick={() => setIsDownsellOpen(true)} data-cta="basic-plan-downsell-open">Quero apenas o catálogo <ArrowRight size={19} /></button>
            </article>
          </div>
        </section>

        <section className="section section-guarantee">
          <div className="guarantee-card">
            <div className="guarantee-icon"><ShieldCheck aria-hidden="true" /></div>
            <div><span className="eyebrow eyebrow-dark">Compra protegida</span><h2>Você conhece o material antes de comprar.</h2>
              <p>As páginas e o vídeo deste site mostram como o catálogo funciona para você conhecer o material antes da compra. Ainda assim, se depois de receber você não gostar ou perceber que ele não corresponde ao que esperava, poderá solicitar o reembolso em até 7 dias corridos a partir da compra.</p>
              <a href="#/termos" className="text-link">Consultar os termos da compra <ChevronRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="section section-faq">
          <div className="section-heading centered narrow"><span className="eyebrow eyebrow-light">Dúvidas frequentes</span><h2>Tudo o que você precisa saber antes de comprar.</h2></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className="final-cta">
          <div className="final-cta-icon"><HeartHandshake /></div><span className="eyebrow">Seu trabalho merece ser valorizado</span>
          <h2>Chega de enviar apenas um preço.</h2><p>Apresente uma experiência profissional desde a primeira conversa no WhatsApp.</p>
          <button className="button button-primary button-large" onClick={() => scrollTo('oferta')}>Escolher minha opção <ArrowRight size={20} /></button>
          <div className="final-assurance"><span><Check /> Acesso imediato</span><span><Check /> Sem precisar do Canva Pro</span><span><Check /> Pagamento único</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><span>Catálogo</span><strong>Podologia Premium</strong></div>
        <nav aria-label="Links institucionais"><a href="#/privacidade">Privacidade</a><a href="#/termos">Termos</a><a href="#/suporte">Suporte</a><a href="#/reembolso">Reembolso</a></nav>
        <p>© 2026 Catálogo Podologia Premium. Todos os direitos reservados.</p>
      </footer>

      <aside className={`sticky-cta ${showStickyCta ? 'sticky-cta-visible' : ''}`} aria-label="Atalho para compra">
        <div><span>A partir de</span><strong>R$ 19,90</strong></div><button onClick={() => scrollTo('oferta')}>Ver opções <ArrowRight size={18} /></button>
      </aside>

      {selectedPage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={selectedPage.label} onClick={() => setSelectedPage(null)}>
          <button className="modal-close" onClick={() => setSelectedPage(null)} aria-label="Fechar imagem"><X /></button>
          <figure onClick={(event) => event.stopPropagation()}><img src={selectedPage.src} alt={selectedPage.label} /><figcaption>{selectedPage.label} · conteúdo demonstrativo e editável</figcaption></figure>
        </div>
      )}

      {isDownsellOpen && <DownsellOfferModal basicLink={basicLink} discountLink={discountedKitLink} onClose={closeDownsell} />}
    </div>
  );
};

export default App;
