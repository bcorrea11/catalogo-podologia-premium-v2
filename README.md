# Catálogo Podologia Premium — V2

Segunda versão, independente e mobile-first, da página de vendas do Catálogo Podologia Premium.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm ci
npm run dev
```

## Compilar

```bash
npm run build
```

O resultado de produção é gerado em `dist/`.

## Estrutura da oferta

- Catálogo avulso por R$ 19,90.
- Kit Completo por R$ 34,90.
- Os links de checkout preservam os parâmetros UTM recebidos pela página.
- As rotas institucionais continuam disponíveis pelos hashes do rodapé.
