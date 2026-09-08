
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-4 px-6 overflow-hidden">

      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-white/40 blur-[80px] rounded-full -z-10"></div>

      <div className="flex flex-col items-center text-center">

        {/* LOGO */}
        <div className="mb-10 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-1">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#9B6045]"></div>
            <h2 className="text-xl font-medium tracking-[0.3em] text-[#9B6045] uppercase">Catálogo</h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#9B6045]"></div>
          </div>
          <h1 className="text-4xl font-black text-[#5d4037] tracking-tighter uppercase leading-none">
            Podologia <span className="text-gold-metallic drop-shadow-sm">Premium</span>
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-3xl leading-tight font-black text-[#5d4037] uppercase tracking-tight mb-6 max-w-md">
          Apresente seus atendimentos com mais <span className="relative inline-block z-10 before:absolute before:inset-0 before:bg-[#C4836A]/20 before:-skew-y-2 before:-z-10 px-1">profissionalismo</span>
        </h2>

        <p className="text-sm font-medium text-[#8d6e63] leading-relaxed max-w-xs mb-4">
          Chega de mandar preço solto no WhatsApp. Com este catálogo digital editável no Canva, você apresenta seus serviços de podologia com mais credibilidade, organização e valor.
        </p>

        {/* Seta indicativa discreta para encorajar o scroll */}
        <div className="animate-bounce mt-4 text-[#C4836A]/50">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>
    </section>
  );
};
