import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base to match your repo name
export default defineConfig({
  base: '/UX/',
  plugins: [react()],
})
