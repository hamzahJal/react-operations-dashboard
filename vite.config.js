import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production'


export default defineConfig({
  plugins: [react()],
  base: isProd ? '/react-operations-dashboard/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  }
});
