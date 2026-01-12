import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5173, // Default Vite port
    hmr: {
      overlay: true
    },
    proxy: {
      '/api': {
        target: process.env.API_HOST || 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})

