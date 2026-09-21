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

## Antes de publicar: pré-renderização

Este app é uma SPA renderizada no cliente — sem esse passo, o servidor entrega
`<div id="root"></div>` vazio e o navegador só pinta algo depois de baixar e
executar todo o JS, o que penaliza bastante LCP/FCP no PageSpeed. O script
`scripts/prerender.mjs` sobe um preview local, captura o HTML já renderizado do
estado inicial e o injeta em `dist/index.html`; o React segue montando
normalmente por cima no cliente.

Ele depende do pacote `playwright` (não incluso nas dependências do projeto
para não pesar o `npm ci` do dia a dia). Para rodar:

```bash
npm run build
npm exec --package=playwright -- node scripts/prerender.mjs
```

Rode isso sempre que o conteúdo do hero/above-the-fold mudar, antes de subir o
`dist/` para produção.

## Estrutura da oferta

- Catálogo avulso por R$ 19,90.
- Kit Completo por R$ 37,90.
- Os links de checkout preservam os parâmetros UTM recebidos pela página.
- As rotas institucionais continuam disponíveis pelos hashes do rodapé.
