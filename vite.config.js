import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-2025/', // Remplacez par le nom de votre repository
  server: {
    port: 3000,
    open: true
  }
})
