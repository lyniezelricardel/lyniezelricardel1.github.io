import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const distDirectory = resolve('dist')
const indexFile = resolve(distDirectory, 'index.html')
const fallbackFile = resolve(distDirectory, '404.html')

if (!existsSync(indexFile)) {
  console.error('dist/index.html was not found. Run the Vite build first.')
  process.exit(1)
}

// GitHub Pages serves 404.html for unknown paths. Using a copy of the
// built index.html lets React Router resolve deep links such as /about.
copyFileSync(indexFile, fallbackFile)
console.log('Created dist/404.html for the GitHub Pages SPA fallback.')
