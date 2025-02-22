import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/ramayandeployed", // 🔥 Add your repository name here
  server: {
    host: true,
    strictPort: true,
  },
})
