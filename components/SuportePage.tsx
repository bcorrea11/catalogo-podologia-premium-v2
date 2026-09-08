
import React from 'react';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';

export const SuportePage: React.FC = () => {
  return (
    <div className="min-h-screen marble-bg px-6 py-12">
      <div className="max-w-2xl mx-auto">

        <a
          href="#"
          onClick={() => { window.location.hash = ''; }}
          className="inline-flex items-center gap-2 text-[#9B6045] text-xs font-bold uppercase tracking-widest mb-10 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </a>

        <div className="mb-10">
          <span className="text-[10px] font-bold text-[#C4836A] uppercase tracking-[0.2em] mb-2 block">Atendimento</span>
          <h1 className="text-3xl font-black text-[#5d4037] uppercase leading-none">Suporte <br /><span className="text-gold-metallic">ao Cliente</span></h1>
        </div>

        <p className="text-sm text-[#8d6e63] leading-relaxed mb-10">
          Estamos aqui para te ajudar. Escolha o canal de atendimento de sua preferência e entraremos em contato o mais breve possível.
        </p>

        <div className="space-y-4">

          {/* WhatsApp */}
          <a
            href="https://wa.me/message/LBM22JXSDL3DJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 bg-white border border-[#f0e6dd] rounded-[24px] p-6 hover:border-[#D6C0A9] transition-colors shadow-sm group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#e8f5e9] flex items-center justify-center group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6 text-[#2e7d32]" />
            </div>
            <div>
              <p className="text-xs font-black text-[#5d4037] uppercase tracking-wide mb-0.5">WhatsApp</p>
              <p className="text-sm text-[#8d6e63] font-medium">Clique para conversar no WhatsApp</p>
              <p className="text-[10px] text-[#C4836A] uppercase tracking-widest font-bold mt-1">Resposta mais rápida</p>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:suporte@eusounat.com.br"
            className="flex items-center gap-5 bg-white border border-[#f0e6dd] rounded-[24px] p-6 hover:border-[#D6C0A9] transition-colors shadow-sm group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#f9ede6] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6 text-[#9B6045]" />
            </div>
            <div>
              <p className="text-xs font-black text-[#5d4037] uppercase tracking-wide mb-0.5">E-mail</p>
              <p className="text-sm text-[#8d6e63] font-medium">suporte@eusounat.com.br</p>
              <p className="text-[10px] text-[#bcaaa4] uppercase tracking-widest font-bold mt-1">Respondemos em até 24h</p>
            </div>
          </a>

        </div>

        <div className="mt-12 p-6 bg-white/50 rounded-2xl border border-[#e6d6c9]">
          <p className="text-xs font-bold text-[#5d4037] mb-1">Quer solicitar reembolso?</p>
          <p className="text-xs text-[#8d6e63] leading-relaxed">
            Você tem <strong className="text-[#5d4037]">7 dias de garantia</strong> a partir da compra. Preencha o <a href="#/reembolso" className="text-[#5d4037] font-bold underline">formulário de reembolso</a> ou entre em contato por qualquer um dos canais acima informando seu e-mail de cadastro e o motivo. Processamos o reembolso sem burocracia.
          </p>
        </div>

      </div>
    </div>
  );
};
