import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Relative routing for backend api
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("frontend", "./src"),
    },
  },
});
