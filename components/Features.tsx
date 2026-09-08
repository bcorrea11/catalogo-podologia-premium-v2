
import React from 'react';

export const Features: React.FC = () => {
  const products = [
    {
      img: "/catalogo/checklist-atendimento.webp",
      title: "Checklist de Pré-Atendimento",
      desc: "Organize cada etapa antes de iniciar o atendimento. Um material prático para transmitir mais segurança, cuidado e profissionalismo para suas clientes."
    },
    {
      img: "/catalogo/guia-de-cuidados.webp",
      title: "Guia de Cuidados Pós-Atendimento",
      desc: "Material pronto para orientar suas clientes após o atendimento podológico. Ajuda a reforçar os cuidados com os pés e valorizar ainda mais o seu trabalho."
    },
    {
      img: "/catalogo/cartao-fidelidade.webp",
      title: "Cartão Fidelidade",
      desc: "Um modelo elegante para incentivar suas clientes a retornarem e continuarem os cuidados com você. Editável no Canva e ideal para fortalecer o relacionamento."
    },
    {
      img: "/catalogo/cartao-retorno.webp",
      title: "Cartão de Retorno",
      desc: "Ajude suas clientes a lembrar da próxima manutenção. Um cartão prático para agendar o retorno e manter a frequência dos cuidados em dia."
    },
    {
      img: "/catalogo/pack-figurinhas.webp",
      title: "Pack de Figurinhas para Stories",
      desc: "Mais de 100 artes para deixar seus stories mais bonitos, profissionais e conectados com o universo da podologia. Ideal para divulgar, engajar e reforçar sua presença online."
    }
  ];

  return (
    <section className="py-20 bg-[#fffcf9] relative z-10 rounded-[50px] mx-2 shadow-[0_0_40px_rgba(0,0,0,0.03)] border border-[#f9ede6]">
      <div className="px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-[#A86550] uppercase tracking-[0.2em] mb-2 block">No Premium você leva um</span>
          <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-none mb-4">
            Kit <br /> <span className="text-gold-metallic">Completo</span>
          </h2>
          <p className="text-xs text-[#8d6e63] max-w-xs mx-auto">
            Além do catálogo, você recebe bônus prontos para deixar seu atendimento mais profissional, organizado e encantador.
          </p>
        </div>

        <div className="space-y-6">
          {products.map((item, idx) => (
            <div key={idx} className="group relative bg-white border border-[#f0e6dd] p-4 rounded-[24px] hover:border-[#D6C0A9] transition-colors duration-300 shadow-sm">
              <div className="flex items-center gap-5">
                {/* Imagem do Mockup */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#f8f5f2] border border-[#f9ede6] shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-black text-[#5d4037] uppercase tracking-wide mb-1">{item.title}</h3>
                  <p className="text-xs text-[#8d6e63] leading-relaxed font-medium opacity-90 pr-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
