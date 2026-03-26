import { defineConfig } from 'vite'
<<<<<<< HEAD
import { fileURLToPath, URL } from 'node:url'
=======
import path from 'path'
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

<<<<<<< HEAD
  base: '/Weddinginvitation/', // 👈 🔥 CLAVE PARA GITHUB PAGES

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
=======
  // 👇 ESTA LÍNEA ES OBLIGATORIA PARA GITHUB PAGES
  base: "/Weddinginvitation/",

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
<<<<<<< HEAD
})
=======
})
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
