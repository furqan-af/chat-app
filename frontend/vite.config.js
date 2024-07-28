import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true, // Optional: If your backend server requires it
        secure: false, // Optional: If your backend server uses self-signed certificates
      },
    },
  },
  plugins: [react()],
});
