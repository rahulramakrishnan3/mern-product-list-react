import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mern-product-list-react/',
  plugins: [react()],
})
