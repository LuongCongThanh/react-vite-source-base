import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/app/core'),
      '@feature': path.resolve(__dirname, 'src/app/features'),
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  }
});
