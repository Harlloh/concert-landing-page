import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPlugin from './scripts/seo-plugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoPlugin()],
})
