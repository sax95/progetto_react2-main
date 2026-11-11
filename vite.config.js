import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5174,
    strictPort: true //se la porta è occupata, genera un errore
  }
})