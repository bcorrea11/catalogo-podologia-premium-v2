
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface SaleData {
  name: string;
  location: string;
  product: string;
  timeAgo: string;
}

const NAMES = [
  "Ana Paula", "Jéssica M.", "Fernanda S.", "Larissa B.", "Bruna C.",
  "Mariana L.", "Camila R.", "Juliana O.", "Patrícia D.", "Gabriela A."
];

const LOCATIONS = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG",
  "Curitiba, PR", "Salvador, BA", "Brasília, DF", "Porto Alegre, RS"
];

const PRODUCTS = [
  "Kit Completo para Podólogas",
  "Kit Completo para Podólogas",
  "Kit Completo para Podólogas",
  "Catálogo Podologia Premium",
  "Catálogo Podologia Premium"
];

export const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<SaleData | null>(null);

  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const nextLoopTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const triggerNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const product = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      const time = Math.floor(Math.random() * 5) + 1;

      setData({
        name,
        location,
        product,
        timeAgo: `há ${time} minutos`
      });

      setIsVisible(true);

      hideTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);

        const nextInterval = Math.random() * 10000 + 10000;
        nextLoopTimerRef.current = window.setTimeout(triggerNotification, nextInterval);
      }, 5000);
    };

    showTimerRef.current = window.setTimeout(() => {
      triggerNotification();
    }, 5000);

    return () => {
      if (showTimerRef.current) clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (nextLoopTimerRef.current) clearTimeout(nextLoopTimerRef.current);
    };
  }, []);

  if (!data) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 transition-all duration-700 transform ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
    >
      <div className="bg-white/90 backdrop-blur-md border border-[#C4836A]/30 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl p-4 max-w-[300px] flex items-center gap-3">

        {/* Ícone */}
        <div className="bg-[#f9ede6] p-2.5 rounded-full flex-shrink-0 relative">
          <ShoppingBag className="w-5 h-5 text-[#5d4037]" />
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col">
          <p className="text-[11px] text-[#5d4037] leading-tight">
            <span className="font-bold">{data.name}</span> de {data.location}
          </p>
          <p className="text-[10px] text-[#8d6e63] font-medium mt-0.5">
            Comprou o <span className="text-[#C4836A] font-bold">{data.product}</span>
          </p>
          <span className="text-[9px] text-gray-400 mt-1">{data.timeAgo}</span>
        </div>

      </div>
    </div>
  );
};
