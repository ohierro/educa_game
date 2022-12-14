import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/educa_game/',
  css: {
    postcs: {
      plugins: ['postcss',
                'postcss-nested',
                'postcss-url',
                'postcss-import',
                'postcss-custom-properties',
                'tailwindcss',
                'autoprefixer',
                'daisyui']
    }
  },
})
