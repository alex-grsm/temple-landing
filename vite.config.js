import { defineConfig } from 'vite';
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import legacy from '@vitejs/plugin-legacy';
import htmlMinifier from 'vite-plugin-html-minifier-terser';
// import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = path.extname(assetInfo.name).toLowerCase();
          const name = path.basename(assetInfo.name, ext);

          if (['.png', '.jpg', '.jpeg', '.svg', '.gif', '.tiff', '.bmp', '.ico', '.webp', '.mp4'].includes(ext)) {
            return `assets/img/${name}${ext}`;
          }
          if (['.woff', '.woff2', '.eot', '.ttf', '.otf'].includes(ext)) {
            return `assets/fonts/${name}${ext}`;
          }
          if (ext === '.css') {
            return `assets/css/${name}${ext}`;
          }
          return `assets/js/${name}${ext}`; // Остальные файлы → в `js`
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
    legacy({
        targets: ['defaults', 'not IE 11'],
    }),
    htmlMinifier({
        minify: true
    }),
    // visualizer(),
  ],
});