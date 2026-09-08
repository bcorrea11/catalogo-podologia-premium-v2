
import React from 'react';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';
import { addUTMParams } from '../utils/utm';

interface DownsellPageProps {
    onClose: () => void;
}

export const DownsellPage: React.FC<DownsellPageProps> = ({ onClose }) => {

    const CHECKOUT_DISCOUNT = "https://seguro.eusounat.com.br/checkout/011aced65fab"; // R$ 27,40

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto animate-in fade-in duration-500">

            {/* Background Overlay */}
            <div className="fixed inset-0 bg-[#f9ede6]/97 backdrop-blur-sm">
                <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/white-marble.png')" }}></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#C4836A]/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#9B6045]/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Botão Fechar */}
            <button
                onClick={onClose}
                className="fixed top-5 right-5 z-[110] p-2 bg-white/70 hover:bg-white rounded-full text-[#9B6045] transition-all shadow-sm border border-[#e8d5c8]"
            >
                <X className="w-4 h-4" />
            </button>

            <div className="min-h-screen flex items-center justify-center p-4 relative z-[105]">

                <div className="relative w-full max-w-md bg-white rounded-[36px] shadow-[0_30px_70px_-15px_rgba(155,96,69,0.2)] border border-[#edd9cd] overflow-hidden">

                    {/* Cabeçalho */}
                    <div className="relative pt-6 pb-5 px-6 text-center overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #C98568 0%, #E8C4B0 60%, #C4836A 100%)' }}>

                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')" }}></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-16 bg-white/20 rounded-full blur-[30px]"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-1.5 bg-white/25 border border-white/40 text-white px-3 py-1 rounded-full mb-3">
                                <Sparkles className="w-3 h-3" />
                                <span className="text-[8px] font-black uppercase tracking-[0.2em]">Oferta Exclusiva Desbloqueada</span>
                            </div>

                            <h2 className="text-2xl font-black text-white uppercase leading-tight tracking-wide drop-shadow-sm">
                                Não vá embora <br />
                                <span className="text-white/80">sem o seu kit</span>
                            </h2>
                        </div>
                    </div>

                    {/* Corpo */}
                    <div className="px-6 pt-5 pb-6">

                        <p className="text-center text-[#8d6e63] text-xs font-medium leading-relaxed mb-4">
                            O sistema liberou um <span className="text-[#5d4037] font-bold">desconto único de 25%</span> para você não perder essa transformação.
                        </p>

                        {/* Box de Preço */}
                        <div className="relative bg-gradient-to-br from-[#fff8f5] to-[#f9ede6] border border-[#e8d0c2] rounded-2xl p-4 mb-4 text-center">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ef4444] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                                Expira em instantes
                            </div>

                            <div className="flex flex-col items-center mt-1">
                                <span className="text-[#bcaaa4] text-xs font-bold line-through mb-0.5">de R$ 34,90</span>
                                <div className="flex items-baseline justify-center gap-1 text-[#5d4037]">
                                    <span className="text-base font-bold">R$</span>
                                    <span className="text-5xl font-black tracking-tighter">27,40</span>
                                </div>
                                <p className="text-[10px] text-[#C4836A] font-black uppercase tracking-[0.15em] mt-1">
                                    Kit Completo para Podólogas
                                </p>
                            </div>
                        </div>

                        {/* Benefícios */}
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mb-5">
                            {["Catálogo Podologia", "Checklist Pré-Atendimento", "Guia de Cuidados", "Cartão Fidelidade", "Cartão de Retorno", "Pack Figurinhas"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <Check className="w-3 h-3 text-[#C4836A]" />
                                    <span className="text-[10px] font-bold text-[#5d4037] uppercase tracking-wide">{tag}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href={addUTMParams(CHECKOUT_DISCOUNT)}
                            className="block w-full btn-gold py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-[#3e2723] flex items-center justify-center gap-2 group transition-transform hover:-translate-y-0.5 relative overflow-hidden shadow-[0_8px_24px_-6px_rgba(196,131,106,0.5)] whitespace-nowrap"
                        >
                            <span className="relative z-10">Quero Aproveitar a Oferta</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] animate-[shimmer_2s_infinite]"></div>
                        </a>

                        <button
                            onClick={onClose}
                            className="w-full mt-3 text-[10px] font-bold text-[#bcaaa4] uppercase tracking-widest hover:text-[#8d6e63] transition-colors"
                        >
                            Prefiro perder o desconto e sair
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
