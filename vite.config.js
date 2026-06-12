import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portafolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true,
    sourcemap: false
  }
});
