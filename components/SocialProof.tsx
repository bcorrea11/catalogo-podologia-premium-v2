
import React from 'react';

const FEEDBACK_COUNT = 15;
const FEEDBACK_IMAGES = Array.from(
  { length: FEEDBACK_COUNT },
  (_, i) => `/catalogo/feedbacks/feedback-${String(i + 1).padStart(2, '0')}.jpg`
);
// Track duplicado para o loop do marquee ficar contínuo (translateX de 0 a -50%)
const TRACK_IMAGES = [...FEEDBACK_IMAGES, ...FEEDBACK_IMAGES];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#C4836A]/5 rotate-12 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black uppercase text-[#5d4037] mb-2">Quem usa, aprova 💛</h2>
          <p className="text-[11px] text-[#8d6e63] uppercase tracking-widest font-bold">
            Depoimentos reais, direto dos destaques de feedbacks do nosso Instagram 🤎
          </p>
        </div>
      </div>

      {/* Carrossel (marquee em CSS puro) */}
      <div className="max-w-4xl mx-auto overflow-hidden">
        <div className="flex gap-4 marquee-track">
          {TRACK_IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[78vw] sm:w-[300px] rounded-[24px] overflow-hidden shadow-[0_15px_40px_-10px_rgba(93,64,55,0.25)] border-4 border-white bg-white"
            >
              <img
                src={src}
                alt="Print real de feedback de cliente no Instagram @eusounat"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
