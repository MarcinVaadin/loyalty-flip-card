import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as {
  version: string;
};

export default defineConfig({
  root: 'dev',
  publicDir: false,
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    target: 'es2022',
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'oxc',
    lib: {
      entry: fileURLToPath(new URL('./src/loyalty-flip-card.ts', import.meta.url)),
      formats: ['es'],
      fileName: () => 'loyalty-flip-card.js',
    },
  },
});
