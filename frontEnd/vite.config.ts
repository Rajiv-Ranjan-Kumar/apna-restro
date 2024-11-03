import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.razorpay.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});

