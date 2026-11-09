import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is published from a user GitHub Pages repository
// (lyniezelricardel1.github.io), so it is served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
