
import React from 'react';
import { Check, ShieldCheck, Gift } from 'lucide-react';
import { addUTMParams } from '../utils/utm';

interface PricingProps {
  onBasicClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBasicClick }) => {

  const CHECKOUT_PREMIUM = "https://seguro.eusounat.com.br/checkout/f4df038e28ce";

  return (
    <section id="precos" className="py-24 px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black uppercase text-[#5d4037] leading-none mb-4">Escolha <br />seu Plano</h2>
        <p className="text-xs uppercase tracking-widest text-[#8d6e63]">Investimento único • Acesso vitalício</p>
      </div>

      <div className="space-y-8 max-w-sm mx-auto md:max-w-3xl md:grid md:grid-cols-2 md:gap-8 md:space-y-0 md:items-start">

        {/* === PLANO BÁSICO (1º) === */}
        <div className="relative mt-12 md:mt-0">
          {/* BADGE ENTRADA */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-max">
            <div className="bg-[#f9ede6] py-2 px-6 rounded-full shadow-lg border-2 border-white">
              <p className="text-[10px] font-black text-[#9B6045] uppercase tracking-[0.2em]">Entrada</p>
            </div>
          </div>

          <div className="bg-white border-2 border-[#f9ede6] rounded-[30px] p-8 relative">
            <div className="text-center mb-6">
              <p className="text-[#5d4037] font-bold text-sm">Catálogo Podologia Premium (Essencial)</p>
            </div>

            <div className="flex items-baseline justify-center gap-1 text-[#5d4037] mb-8">
              <span className="text-sm font-bold">R$</span>
              <span className="text-5xl font-black">19,90</span>
            </div>

            <div className="space-y-3 mb-8 px-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#f9ede6] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
                <span className="text-xs font-bold text-[#5d4037]">Catálogo Podologia editável</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#f9ede6] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
                <span className="text-xs font-bold text-[#5d4037]">Tutorial em vídeo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#f9ede6] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
                <span className="text-xs font-bold text-[#5d4037]">100% Personalizável no Canva</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#f9ede6] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
                <span className="text-xs font-bold text-[#5d4037]">Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#f9ede6] p-1 rounded-full"><Check className="w-3 h-3 text-[#5d4037]" /></div>
                <span className="text-xs font-bold text-[#5d4037]">Entrega Imediata</span>
              </div>

              {/* Separador */}
              <div className="border-t border-[#f9ede6] my-4"></div>

              {/* Itens não incluídos */}
              <div className="flex items-center gap-3 opacity-50">
                <div className="border border-red-300 p-1 rounded-full bg-red-50"><span className="text-[10px] text-red-500 font-bold">✕</span></div>
                <span className="text-xs text-[#8d6e63] font-medium">Bônus Exclusivos (5 itens)</span>
              </div>
            </div>

            <button
              onClick={onBasicClick}
              className="w-full py-4 bg-[#f8f5f2] border border-[#eaddcf] rounded-xl text-[10px] font-black uppercase tracking-widest text-[#9B6045] hover:bg-[#eaddcf] transition-colors"
            >
              Quero Apenas o Catálogo
            </button>
          </div>
        </div>

        {/* === PLANO PREMIUM (2º - DESTAQUE) === */}
        <div className="relative mt-12 md:mt-0">
          {/* BADGE */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-max">
            <div className="bg-gold-metallic py-2 px-6 rounded-full shadow-lg border-2 border-white">
              <p className="text-[10px] font-black text-[#3e2723] uppercase tracking-[0.2em]">Mais Vendido</p>
            </div>
          </div>

          <div className="relative bg-[#2a1e16] rounded-[40px] p-1 text-center card-premium-shadow overflow-hidden">
            <div className="bg-gradient-to-b from-[#3e2b22] to-[#1a110d] rounded-[36px] pt-8 pb-6 px-6 relative">

              {/* Champagne Accents */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C4836A] opacity-10 blur-[60px] rounded-full"></div>

              <h3 className="text-gold-metallic text-sm font-black uppercase tracking-[0.2em] mb-1 mt-3">Kit Completo para Podólogas</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-6">Experiência Completa</p>

              {/* Preço */}
              <div className="flex flex-col items-center justify-center mb-6 border-y border-white/5 py-4">
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-lg font-bold">R$</span>
                  <span className="text-7xl font-black tracking-tighter">34,90</span>
                </div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Kit Completo</p>
              </div>

              {/* Lista */}
              <ul className="text-left space-y-2.5 mb-5 pl-2">
                {[
                  { text: "Catálogo Podologia Premium", isBonus: false },
                  { text: "Tutorial em vídeo", isBonus: false },
                  { text: "Checklist de Pré-Atendimento", isBonus: true },
                  { text: "Guia de Cuidados Pós-Atendimento", isBonus: true },
                  { text: "Cartão Fidelidade", isBonus: true },
                  { text: "Cartão de Retorno", isBonus: true },
                  { text: "Pack de Figurinhas para Stories", isBonus: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-xs font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#C4836A]/20 flex items-center justify-center flex-shrink-0">
                      {item.isBonus ? (
                        <Gift className="w-3 h-3 text-[#C4836A]" />
                      ) : (
                        <Check className="w-3 h-3 text-[#C4836A]" />
                      )}
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a
                href={addUTMParams(CHECKOUT_PREMIUM)}
                className="block w-full btn-gold py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(197,160,131,0.3)] animate-pulse hover:scale-[1.02] transition-transform text-center"
              >
                Quero o Kit Completo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Garantia */}
      <div className="flex items-center justify-center gap-4 opacity-60 pt-12 mt-8">
        <ShieldCheck className="w-5 h-5 text-[#5d4037]" />
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5d4037]">7 Dias de Garantia Incondicional</p>
      </div>

    </section>
  );
};
