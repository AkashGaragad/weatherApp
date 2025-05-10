import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// replace with your GitHub repo name
export default defineConfig({
  base: '/weatherApp/',
  plugins: [react()],
})
