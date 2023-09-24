import { resolve } from 'path';

import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    server: { port: 8003 },
    plugins: [qwikCity({ trailingSlash: false }), qwikVite(), tsconfigPaths()],
    resolve: {
      alias: [{ find: '@app', replacement: resolve(__dirname, 'src') }]
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600'
      }
    }
  };
});
