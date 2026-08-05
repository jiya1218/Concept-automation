import fs from 'fs';
import path from 'path';
import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

async function generateClientEntry() {
  console.log('Building standalone client bundle for static Vercel deployment...');

  try {
    // Compile src/main.tsx to dist/client/assets/main.js with process.env polyfills
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
        lib: {
          entry: path.join(process.cwd(), 'src', 'main.tsx'),
          formats: ['es'],
          fileName: () => 'assets/main.js',
        },
        rollupOptions: {
          external: [],
        },
      },
    });

    const files = fs.readdirSync(assetsDir);
    const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Concept Automation Technologies | PLC, HMI & VFD Supplier</title>
  <meta name="description" content="Exporter, importer, trader and supplier of factory automation hardware — Siemens, Mitsubishi, Allen Bradley, Omron, Delta, Schneider PLC, HMI, VFD and servo systems in Ahmedabad.">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" href="/favicon.png">
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}">` : ''}
</head>
<body class="bg-background text-foreground antialiased">
  <div id="root"></div>
  <script type="module" src="/assets/main.js"></script>
</body>
</html>`;

    fs.writeFileSync(path.join(clientDir, 'index.html'), html);
    console.log('Successfully created dist/client/index.html & dist/client/assets/main.js for Vercel!');
  } catch (err) {
    console.error('Error generating client entry:', err);
  }
}

generateClientEntry();
