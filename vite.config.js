import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Necessaire pour GitHub Pages: remplacez par "/<repo>/" si le site n'est pas sur username.github.io
  base: "/Portfolio-2025/",
  server: {
    port: 3000,
    open: true
  }
})
