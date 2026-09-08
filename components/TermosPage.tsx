
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const TermosPage: React.FC = () => {
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
          <h1 className="text-3xl font-black text-[#5d4037] uppercase leading-none">Termos de <br /><span className="text-gold-metallic">Uso</span></h1>
        </div>

        <div className="space-y-8 text-sm text-[#8d6e63] leading-relaxed">

          <p className="text-xs text-[#bcaaa4] uppercase tracking-widest">Última atualização: fevereiro de 2026</p>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">1. Aceitação dos termos</h2>
            <p>Ao realizar uma compra neste site, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Caso não concorde, não realize a compra.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">2. Sobre o produto</h2>
            <p>O <strong className="text-[#5d4037]">Catálogo Podologia Premium</strong> é um produto digital (arquivo para edição no Canva), entregue eletronicamente após a confirmação do pagamento. Por se tratar de produto digital, não há envio físico.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">3. Entrega</h2>
            <p>O acesso ao produto é enviado automaticamente para o e-mail cadastrado no checkout, imediatamente após a confirmação do pagamento. Verifique também a caixa de spam caso não receba em até 30 minutos. Para envio via WhatsApp, pode ser cobrada uma taxa adicional informada no checkout.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">4. Garantia de 7 dias</h2>
            <p>Oferecemos <strong className="text-[#5d4037]">7 dias de garantia incondicional</strong> a partir da data da compra. Se por qualquer motivo você não ficar satisfeita, basta nos contatar dentro desse prazo para receber o reembolso integral, sem burocracia.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">5. Licença de uso</h2>
            <p>A compra concede ao comprador uma <strong className="text-[#5d4037]">licença pessoal e intransferível</strong> de uso do produto. É proibido revender, redistribuir, compartilhar ou disponibilizar o arquivo para terceiros, seja gratuitamente ou de forma comercial. O descumprimento pode resultar em medidas legais.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">6. Propriedade intelectual</h2>
            <p>Todo o conteúdo deste site e do produto — textos, layouts, imagens e elementos gráficos — é de propriedade exclusiva dos criadores e está protegido pela legislação brasileira de direitos autorais.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">7. Limitação de responsabilidade</h2>
            <p>Não nos responsabilizamos por resultados financeiros decorrentes do uso do produto, nem por alterações nas plataformas de terceiros (como o Canva) que possam afetar a edição dos arquivos.</p>
          </section>

          <section>
            <h2 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-3">8. Contato</h2>
            <p>Para dúvidas, solicitações de reembolso ou suporte, entre em contato: <strong className="text-[#5d4037]">suporte@eusounat.com.br</strong></p>
          </section>

        </div>
      </div>
    </div>
  );
};
