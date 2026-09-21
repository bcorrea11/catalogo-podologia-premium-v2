
import React from 'react';
import { X, Tag } from 'lucide-react';
import { addUTMParams } from '../utils/utm';

interface UpsellPopupProps {
  onClose: () => void;
}

export const UpsellPopup: React.FC<UpsellPopupProps> = ({ onClose }) => {

  const CHECKOUT_DISCOUNT = "https://seguro.eusounat.com.br/checkout/011aced65fab"; // R$ 29,90
  const CHECKOUT_BASIC = "https://seguro.eusounat.com.br/checkout/95ab7b11c54f"; // R$ 19,90

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      {/* Overlay Escuro com Blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />

      {/* Container do Card - Max Height para telas pequenas */}
      <div className="relative w-full max-w-[340px] max-h-[90vh] flex flex-col transform transition-all animate-in zoom-in duration-300">

        {/* Card Principal - Estilo Dark Premium */}
        <div className="bg-[#2a1e16] rounded-[30px] shadow-2xl border border-[#C4836A]/30 relative flex flex-col overflow-hidden">

          {/* Botão Fechar (X) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 p-2 bg-white/5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Conteúdo Interno com Scroll se necessário */}
          <div className="bg-gradient-to-b from-[#3e2b22] to-[#1a110d] p-6 text-center relative flex-1 overflow-y-auto">

            {/* Glow effect no fundo */}
            <div className="absolute top-0 left-0 w-full h-32 bg-[#C4836A] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>

            <div className="mt-2 mb-1 flex justify-center">
              <div className="bg-[#ef4444] text-white px-3 py-1 rounded-full shadow-lg border border-[#2a1e16] flex items-center gap-1 animate-pulse">
                <Tag className="w-3 h-3 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-wider">R$ 8,00 OFF Agora</span>
              </div>
            </div>

            <h2 className="text-3xl font-black text-white uppercase leading-none mb-2 drop-shadow-md">
              Espera!
            </h2>

            <p className="text-[11px] text-[#d7ccc8] font-medium leading-relaxed mb-6 px-1 opacity-90">
              Não feche essa página! Liberamos uma condição exclusiva para você levar o <span className="text-[#C4836A] font-bold">Kit Completo</span> com desconto agora.
            </p>

            {/* Box de Preço Compacto */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 relative">
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#3e2b22] px-3 text-[9px] uppercase text-[#C4836A] font-black tracking-widest border border-white/10 rounded-full">
                Oferta Única
              </div>

              <div className="flex flex-col items-center mt-1">
                <span className="text-white/30 text-[10px] font-bold line-through mb-0.5">de R$ 37,90</span>
                <div className="flex items-baseline gap-1 justify-center text-[#F2E3D5]">
                  <span className="text-base font-bold text-[#C4836A]">R$</span>
                  <span className="text-5xl font-black tracking-tighter drop-shadow-lg">29,90</span>
                </div>
                <p className="text-[9px] text-white/40 mt-1">Catálogo + Bônus Completos</p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-3">
              <a
                href={addUTMParams(CHECKOUT_DISCOUNT)}
                className="block w-full btn-gold py-3.5 rounded-xl font-black text-xs uppercase tracking-wide shadow-[0_0_20px_rgba(197,160,131,0.4)] hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-center"
              >
                Quero Kit Completo com Desconto
              </a>

              <a
                href={addUTMParams(CHECKOUT_BASIC)}
                className="block w-full py-3.5 rounded-xl border-2 border-white/25 bg-white/10 text-[11px] text-white/70 font-black uppercase tracking-wider hover:bg-white/20 hover:text-white hover:border-white/40 transition-all text-center"
              >
                Quero apenas o catálogo mesmo
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
