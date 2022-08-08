import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), react()],

  build: {
    rollupOptions: {
      input: {
        vue: path.resolve(__dirname, 'index.vue.html'),
        react: path.resolve(__dirname, 'index.react.html'),
      },
    },
  },

  server: {
    port: 8080,
  },
});
