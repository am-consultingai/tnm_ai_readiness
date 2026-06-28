import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at the root of the custom domain (tnm-ai-readiness.amconsultingai.com),
// so the base path is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 5173, open: true },
})
