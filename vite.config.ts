import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
// const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  // Force Vite to pre-optimize React and React DOM so dependencies don't bundle their own copy
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react')
    }
  }
})

