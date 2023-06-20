import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [reactRefresh()],
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
