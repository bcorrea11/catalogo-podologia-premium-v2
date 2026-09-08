import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronRight, Star, Video, Smartphone, MessageCircle } from 'lucide-react';

export const VideoSection: React.FC = () => {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    // Só começa a baixar o vídeo quando a seção estiver perto de entrar na tela —
    // autoPlay força o carregamento imediato do <video>, então sem isso o vídeo
    // competia com o resto da página logo no primeiro carregamento.
    useEffect(() => {
        const el = videoContainerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const scrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const pricingSection = document.getElementById('precos');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 px-6 bg-[#f9ede6]">
            <div className="container mx-auto max-w-xl">
                <div className="flex flex-col items-center text-center">

                    {/* Label + Título */}
                    <span className="text-[10px] font-bold text-[#C4836A] uppercase tracking-[0.25em] mb-3 block">
                        Como funciona na prática
                    </span>
                    <h2 className="text-3xl font-black text-[#5d4037] uppercase leading-tight mb-4">
                        Pronto para usar. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9B6045] to-[#5d4037]">
                            Fácil de editar.
                        </span>
                    </h2>
                    <div className="max-w-sm text-sm text-[#8d6e63] font-medium leading-relaxed space-y-4 mb-10">
                        <p>Você não precisa criar nada do zero.</p>
                        <p>Sabemos que montar um catálogo profissional sozinha levaria dias — ou até semanas — entre escolher imagens, montar páginas, escrever textos e organizar tudo.</p>
                        <p>Por isso, já deixamos praticamente tudo pronto para você.</p>
                        <p>Cada página foi pensada estrategicamente para valorizar seus procedimentos e economizar seu tempo.</p>
                    </div>

                    {/* Vídeo */}
                    <div ref={videoContainerRef} className="w-full max-w-[280px] mb-12 rounded-[30px] overflow-hidden shadow-[0_20px_50px_-10px_rgba(93,64,55,0.3)]">
                        {shouldLoadVideo ? (
                            <video
                                src="https://pub-74df1c9f20a84a93bb06992597f2abb7.r2.dev/V%C3%ADdeo%20LP%20Podologia.mp4"
                                poster="/catalogo/video-lp-poster.jpg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: '100%', display: 'block' }}
                            />
                        ) : (
                            <img src="/catalogo/video-lp-poster.jpg" alt="Prévia do vídeo demonstrativo" style={{ width: '100%', display: 'block' }} />
                        )}
                    </div>

                    {/* Steps */}
                    <div className="w-full space-y-4 mb-8 text-left">

                        {/* Step 01 */}
                        <div className="bg-white/70 border border-[#edddd4] rounded-[24px] p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">01</span>
                                <div>
                                    <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                                        Acesse o catálogo
                                    </h3>
                                    <p className="text-xs text-[#8d6e63] font-medium leading-relaxed">
                                        Após a compra, você acessa o catálogo praticamente pronto, exatamente igual ao que você viu no vídeo acima. Só falta colocar as suas informações.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="bg-white/70 border border-[#edddd4] rounded-[24px] p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">02</span>
                                <div className="w-full">
                                    <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                                        Ajuste o básico para sua marca
                                    </h3>
                                    <p className="text-xs text-[#8d6e63] font-medium leading-relaxed mb-4">
                                        São apenas quatro informações que você troca — o restante pode manter como está:
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                        {["Seu nome", "Sua foto", "Seus valores", "Seu endereço"].map((item, i) => (
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
                        <div className="bg-white/70 border border-[#edddd4] rounded-[24px] p-6">
                            <div className="flex items-start gap-4">
                                <span className="text-[11px] font-black text-[#C4836A]/60 tracking-widest mt-0.5 flex-shrink-0">03</span>
                                <div>
                                    <h3 className="text-xs font-black text-[#5d4037] uppercase tracking-wider mb-2">
                                        Quer ir além? Personalize o que quiser
                                    </h3>
                                    <p className="text-xs text-[#8d6e63] font-medium leading-relaxed">
                                        O modelo é 100% editável no Canva. Você pode mudar cores, fotos, textos, procedimentos e ordem das páginas. Mas não é obrigatório: em menos de 10 minutos já está pronto para enviar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="w-full grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/70 border border-[#edddd4] rounded-[20px] p-4 text-center">
                            <div className="w-10 h-10 rounded-full bg-[#f9ede6] flex items-center justify-center mx-auto mb-3">
                                <Video className="w-5 h-5 text-[#9B6045]" />
                            </div>
                            <p className="text-[10px] font-black text-[#5d4037] uppercase tracking-wide mb-1">Tutorial em vídeo</p>
                            <p className="text-[10px] text-[#8d6e63] font-medium">Incluído para guiar a edição</p>
                        </div>

                        <div className="bg-white/70 border border-[#edddd4] rounded-[20px] p-4 text-center">
                            <div className="w-10 h-10 rounded-full bg-[#f9ede6] flex items-center justify-center mx-auto mb-3">
                                <Smartphone className="w-5 h-5 text-[#9B6045]" />
                            </div>
                            <p className="text-[10px] font-black text-[#5d4037] uppercase tracking-wide mb-1">Sem exigir Canva Pro</p>
                            <p className="text-[10px] text-[#8d6e63] font-medium">Sem necessidade de plano pago</p>
                        </div>
                    </div>

                    {/* Suporte Bar */}
                    <div className="w-full flex items-center gap-3 bg-white/70 border border-[#edddd4] rounded-[20px] p-4 mb-10">
                        <div className="w-8 h-8 rounded-full bg-[#f9ede6] flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-4 h-4 text-[#9B6045]" />
                        </div>
                        <p className="text-[11px] text-[#5d4037] font-medium leading-snug text-left">
                            <span className="font-black">Suporte de seg. a sáb. pelo WhatsApp</span> — ficou com dúvida em qualquer etapa? É só chamar.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="w-full pt-6 border-t border-[#d7ccc8]/40">
                        <p className="text-[10px] uppercase tracking-widest text-[#8d6e63] mb-4">
                            A partir de <span className="font-black text-[#5d4037]">R$ 19,90</span>
                        </p>
                        <div className="w-full space-y-3 max-w-md mx-auto">
                            <a
                                href="#precos"
                                onClick={scrollToPricing}
                                className="w-full btn-gold py-4 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
                            >
                                QUERO MEU CATÁLOGO
                                <ChevronRight className="w-5 h-5" />
                            </a>
                            <div className="flex items-center justify-center gap-2 text-[#8d6e63] text-[10px] font-bold uppercase tracking-wider">
                                <Star className="w-3 h-3 text-[#C4836A] fill-[#C4836A]" />
                                Compra 100% Segura
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
