import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sass from 'sass';
import path from 'path';
import postcss from 'postcss';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  plugins: [
    reactRefresh(), // Plugin hỗ trợ HMR cho React
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass, // Sử dụng sass làm preprocessor cho SCSS
      },
      postcss: {
        plugins: [postcss],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/app/pages'),
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
