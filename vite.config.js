import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page lives at https://<user>.github.io/tnm_ai_readiness/
// Use that base for production builds; keep dev at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/tnm_ai_readiness/' : '/',
  plugins: [react()],
  server: { port: 5173, open: true },
}))
