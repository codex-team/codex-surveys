import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/app.ts'),
      name: 'Codex-surveys',
    }
  },
  rollupOutputOptions: {
    entryFileNames: '[name].js',
  },
  plugins: [cssInjectedByJsPlugin()],
};
