/// <reference types="vavite/vite-config" />

import { defineConfig } from 'vite';
import { angular } from '@nitedani/vite-plugin-angular/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import vavite from 'vavite';

export default defineConfig({
  buildSteps: [
    {
      name: 'client',
    },
    {
      name: 'server',
      config: {
        build: {
          ssr: true,
        },
      },
    },
  ],
  plugins: [
    angular(),
    vavite({
      serverEntry: '/src/server/main.ts',
      serveClientAssetsInDev: true,
    }),
    tsconfigPaths(),
  ],
});
