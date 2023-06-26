import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@core': '/src/app/core',
      '@features': '/src/app/features',
      '@shared': '/src/app/shared',
      '@stylesheet': '/src/stylesheet',
      '@assets': '/src/assets'
    }
  }
});
