import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default {
  rollupOutputOptions: {
    entryFileNames: '[name].js',
  },
  plugins: [cssInjectedByJsPlugin()],
};
