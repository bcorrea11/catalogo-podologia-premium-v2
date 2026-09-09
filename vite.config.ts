
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Inlines the generated CSS bundle directly into index.html at build time.
// The app's own stylesheet is tiny, but it lives behind the same slow shared
// host as the document — a separate <link rel="stylesheet"> request pays that
// latency twice and blocks first paint. Inlining removes that round-trip.
function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        const cssAssets = Object.values(bundle).filter(
          (chunk): chunk is typeof chunk & { type: 'asset'; fileName: string; source: string | Uint8Array } =>
            chunk.type === 'asset' && chunk.fileName.endsWith('.css'),
        )

        let result = html
        for (const asset of cssAssets) {
          const source = typeof asset.source === 'string' ? asset.source : new TextDecoder().decode(asset.source)
          const linkRegex = new RegExp(`<link[^>]*href="[^"]*${asset.fileName.split('/').pop()}"[^>]*>`)
          result = result.replace(linkRegex, `<style>${source}</style>`)
          delete bundle[asset.fileName]
        }
        return result
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/catalogo/',
  plugins: [react(), inlineCss()],
})
