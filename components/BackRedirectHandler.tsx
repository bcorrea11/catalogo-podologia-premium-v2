
import React, { useEffect, useRef } from 'react';

interface BackRedirectHandlerProps {
  onTrigger: () => void;
}

export const BackRedirectHandler: React.FC<BackRedirectHandlerProps> = ({ onTrigger }) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    // Empurra um estado nulo para o histórico
    // Usamos null ao invés de objeto para evitar erros de serialização em scripts de terceiros
    window.history.pushState(null, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      // Impede o usuário de voltar, empurrando o estado novamente
      window.history.pushState(null, "", window.location.href);

      // Dispara a função que vai abrir a página de Downsell
      onTrigger();
    };

    // Adiciona listener para o botão voltar
    window.addEventListener('popstate', handlePopState);

    // Adiciona listener para Exit Intent (Mouse saindo da tela por cima - Desktop)
    const handleMouseOut = (e: MouseEvent) => {
      // Detecta quando o mouse sai pela parte superior da página
      // relatedTarget === null significa que o mouse saiu do documento completamente
      if (e.clientY <= 0 && e.relatedTarget === null) {
        onTrigger();
      }
    };
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onTrigger]);

  return null;
};
