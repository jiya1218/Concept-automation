import fs from 'fs';
import path from 'path';

const clientDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));
  const routesJs = files.find(f => f.startsWith('routes-') && f.endsWith('.js'));
  const indexJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const footerJs = files.find(f => f.startsWith('Footer-') && f.endsWith('.js'));

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
  ${footerJs ? `<script type="module" src="/assets/${footerJs}"></script>` : ''}
  ${routesJs ? `<script type="module" src="/assets/${routesJs}"></script>` : ''}
  ${indexJs ? `<script type="module" src="/assets/${indexJs}"></script>` : ''}
</body>
</html>`;

  fs.writeFileSync(path.join(clientDir, 'index.html'), html);
  console.log('Successfully generated dist/client/index.html for Vercel static deployment!');
} else {
  console.error('dist/client/assets directory not found!');
}
