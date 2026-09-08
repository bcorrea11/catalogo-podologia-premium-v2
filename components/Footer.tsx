
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-[#f9ede6]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="text-xl font-serif font-bold tracking-tight text-[#5d4037]">
            PODOLOGIA<span className="text-gold-metallic ml-1">PREMIUM</span>
          </div>
          <div className="flex gap-6 text-[10px] uppercase font-bold text-[#8d6e63] tracking-widest">
            <a href="#/privacidade" className="hover:text-[#5d4037] transition-colors">Privacidade</a>
            <a href="#/termos" className="hover:text-[#5d4037] transition-colors">Termos</a>
            <a href="#/suporte" className="hover:text-[#5d4037] transition-colors">Suporte</a>
            <a href="#/reembolso" className="hover:text-[#5d4037] transition-colors">Reembolso</a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#f9ede6] mb-8 max-w-xs mx-auto"></div>

        <div className="text-[10px] text-[#bcaaa4] uppercase tracking-widest w-full flex flex-col items-center gap-1">
          <span>© 2026 Catálogo Podologia Premium.</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
