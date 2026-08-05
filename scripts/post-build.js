import fs from 'fs';
import path from 'path';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const clientDir = path.join(process.cwd(), 'dist', 'client');

async function generateClientEntry() {
  console.log('Building code-split static production bundle for Vercel deployment...');

  try {
    // Build static client production bundle from root index.html with automatic code splitting
    await build({
      configFile: false,
      plugins: [tsconfigPaths(), react(), tailwindcss()],
      define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': '{}',
        'global': 'window',
      },
      build: {
        outDir: clientDir,
        emptyOutDir: false,
        rollupOptions: {
          input: path.join(process.cwd(), 'index.html'),
        },
      },
    });

    console.log('Successfully generated optimized Vercel production build with code splitting!');
  } catch (err) {
    console.error('Error generating Vercel client build:', err);
  }
}

generateClientEntry();
