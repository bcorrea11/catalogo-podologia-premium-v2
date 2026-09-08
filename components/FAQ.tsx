
import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-black uppercase text-brown">Dúvidas Frequentes</h2>
      </div>

      <div className="space-y-4 max-w-sm mx-auto">
        {[
          { q: "O catálogo é editável?", a: "Sim. Ele é 100% editável no Canva, pelo celular ou computador. Você pode alterar seu nome, logo, fotos, valores, textos, endereço e qualquer informação." },
          { q: "Recebo acesso na hora?", a: "Sim. Após a confirmação do pagamento, o acesso é enviado automaticamente para o seu e-mail. Você também pode receber via WhatsApp selecionando essa opção no checkout por uma taxa adicional de R$ 2,99." },
          { q: "Serve para qualquer podóloga?", a: "Sim. O catálogo foi pensado para podólogas que trabalham com atendimentos clínicos, cuidados com os pés, unhas e protocolos personalizados, mesmo atendendo em casa ou começando agora." },
          { q: "Posso alterar os valores?", a: "Sim. Você pode editar valores, textos, fotos, nome, logo, endereço e qualquer informação do catálogo de forma simples pelo Canva." },
          { q: "Vocês personalizam para mim?", a: "Não. Você recebe o modelo pronto e editável para personalizar no Canva. O material acompanha tutorial completo para facilitar a edição passo a passo." },
          { q: "Preciso pagar Canva Pro?", a: "Não. Basta usar uma conta gratuita do Canva; nenhuma assinatura Pro é necessária." },
          { q: "É impresso?", a: "Não. É um produto digital. Você recebe o acesso para editar e usar online." },
          { q: "Consigo enviar pelo WhatsApp?", a: "Sim. A ideia principal é justamente usar o catálogo para enviar para clientes pelo WhatsApp, apresentando seus atendimentos, valores e protocolos de forma profissional." },
          { q: "O acesso é vitalício?", a: "Sim. Após a compra, o acesso é imediato e vitalício — é um pagamento único, sem mensalidades ou renovações." },
          { q: "O Kit Completo inclui o quê?", a: "Inclui o Catálogo Podologia Premium, Tutorial em vídeo, Checklist de Pré-Atendimento, Guia de Cuidados Pós-Atendimento, Cartão Fidelidade, Cartão de Retorno e Pack com mais de 100 Figurinhas para Stories." }
        ].map((item, i) => (
          <details key={i} className="group bg-nude/10 border border-nude/30 rounded-3xl overflow-hidden transition-all">
            <summary className="list-none p-6 font-black text-[10px] uppercase tracking-widest cursor-pointer flex justify-between items-center select-none text-brown">
              {item.q}
              <span className="text-lg font-normal transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-xs leading-relaxed opacity-70 text-brown">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};
