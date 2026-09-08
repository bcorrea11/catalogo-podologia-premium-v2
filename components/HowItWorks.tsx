
import React from 'react';
import { CheckCircle2, Video, Smartphone, MessageCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">

        {/* Label + Título */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-[#C4836A] uppercase tracking-[0.25em] mb-3 block">
            Como funciona na prática
          </span>
          <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-tight mb-4">
            Pronto para usar.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B6045] to-[#C4836A]">
              Fácil de editar.
            </span>
          </h2>
          <p className="text-sm text-[#8d6e63] font-medium leading-relaxed max-w-sm mx-auto">
            Você não cria nada do zero. O catálogo já chega estruturado, bonito e profissional — só adapte para a sua marca.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">

          {/* Step 01 */}
          <div className="bg-[#fffcf9] border border-[#f0e6dd] rounded-[24px] p-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">01</span>
              <div>
                <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                  Receba o modelo pronto
                </h3>
                <p className="text-xs text-[#8d6e63] font-medium leading-relaxed">
                  Após a compra, você acessa um catálogo completo, exatamente no estilo apresentado aqui no site. Nada de arquivo em branco, nada de criação do zero.
                </p>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-[#fffcf9] border border-[#f0e6dd] rounded-[24px] p-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">02</span>
              <div className="w-full">
                <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                  Ajuste o básico para sua marca
                </h3>
                <p className="text-xs text-[#8d6e63] font-medium leading-relaxed mb-4">
                  São apenas quatro informações que você troca para o catálogo ficar com a sua identidade:
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {["Nome", "Foto", "Endereço", "Valores dos serviços"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C4836A] flex-shrink-0" />
                      <span className="text-xs font-bold text-[#5d4037]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-[#fffcf9] border border-[#f0e6dd] rounded-[24px] p-6">
            <div className="flex items-start gap-4">
              <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">03</span>
              <div>
                <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                  Quer ir além? Personalize o que quiser
                </h3>
                <p className="text-xs text-[#8d6e63] font-medium leading-relaxed">
                  Se quiser deixar ainda mais com a sua cara, o modelo é 100% editável no Canva. Você pode mudar cores, fotos, textos, procedimentos, ordem das páginas — o que preferir. Mas não é obrigatório: o catálogo já fica ótimo só com os ajustes básicos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#fffcf9] border border-[#f0e6dd] rounded-[20px] p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-[#f9ede6] flex items-center justify-center mx-auto mb-3">
              <Video className="w-5 h-5 text-[#9B6045]" />
            </div>
            <p className="text-[10px] font-black text-[#5d4037] uppercase tracking-wide mb-1">Tutorial em vídeo</p>
            <p className="text-[10px] text-[#8d6e63] font-medium">Incluído para guiar a edição</p>
          </div>

          <div className="bg-[#fffcf9] border border-[#f0e6dd] rounded-[20px] p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-[#f9ede6] flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-5 h-5 text-[#9B6045]" />
            </div>
            <p className="text-[10px] font-black text-[#5d4037] uppercase tracking-wide mb-1">Sem exigir Canva Pro</p>
            <p className="text-[10px] text-[#8d6e63] font-medium">Sem necessidade de plano pago</p>
          </div>
        </div>

        {/* Suporte Bar */}
        <div className="flex items-center gap-3 bg-[#fffcf9] border border-[#f0e6dd] rounded-[20px] p-4">
          <div className="w-8 h-8 rounded-full bg-[#f9ede6] flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4 text-[#9B6045]" />
          </div>
          <p className="text-[11px] text-[#5d4037] font-medium leading-snug">
            <span className="font-black">Suporte de seg. a sáb. pelo WhatsApp</span> — ficou com dúvida em qualquer etapa? É só chamar.
          </p>
        </div>

      </div>
    </section>
  );
};
