
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ProductDetail: React.FC = () => {

  const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('precos');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-8 pb-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">

        <div className="flex flex-col items-center gap-12">

          {/* Copy de Vendas do Produto Principal */}
          <div className="w-full text-center mt-8 md:mt-0 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-[#C4836A] uppercase tracking-[0.2em] mb-2 block">O Essencial</span>
            <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-none mb-6">
              A Diferença entre <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B6045] to-[#5d4037]">Preço e Valor</span>
            </h2>

            <p className="text-sm text-[#8d6e63] leading-relaxed mb-4 font-medium">
              Quando você manda só o preço, a cliente compara com qualquer outra e some.
            </p>

            <p className="text-sm text-[#8d6e63] leading-relaxed mb-8 font-medium">
              Quando você mostra valor — atendimentos, protocolos, cuidados e profissionalismo — ela entende por que escolher você. Este catálogo foi feito para podólogas que querem se apresentar de forma mais bonita, clara e organizada, mesmo atendendo em casa ou começando agora.
            </p>

            <ul className="space-y-4 mb-8 text-left inline-block">
              {[
                "Editável no Canva (celular ou computador)",
                "Pronto pra usar hoje",
                "Visual premium + organização profissional",
                "Ideal para cuidados com os pés, unhas e atendimentos clínicos"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C4836A] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#5d4037]">{item}</span>
                </li>
              ))}
            </ul>


          </div>

        </div>
      </div>
    </section>
  );
};
