import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/filemanger-vite-frontend', // Set your desired base URL path
  plugins: [react()],
  server: {
    port: 1234 // Replace 1234 with your desired port number
  }
})
