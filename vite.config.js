import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import * as path from 'path';
import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === 'production';

/**
 * Set building options due to environment
 */
const createConfig = () => {
  let config = {
    plugins: [cssInjectedByJsPlugin()],
    define: {
      global: {},
    },
  };

  if (isProd) {
    config.build = {
      lib: {
        entry: path.resolve(__dirname, 'src/app.ts'),
        name: 'CodeXSurveys',
        fileName: 'index',
      },
    };
  }

  return config;
};

export default defineConfig(createConfig());
