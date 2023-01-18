import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/app.ts'),
      name: 'CodexSurveys',
    },
  },
  rollupOutputOptions: {
    entryFileNames: '[name].js',
  },
  plugins: [cssInjectedByJsPlugin()],
});
