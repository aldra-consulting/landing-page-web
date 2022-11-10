import { resolve } from 'path';

import { qwikCity } from '@builder.io/qwik-city/vite';
import { qwikReact } from '@builder.io/qwik-react';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({ trailingSlash: false }),
      qwikVite(),
      tsconfigPaths(),
      qwikReact()
    ],
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
