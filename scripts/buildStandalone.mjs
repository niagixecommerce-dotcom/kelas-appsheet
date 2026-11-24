import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist-standalone');
const jsPath = path.join(distDir, 'bundle.js');
const cssPath = path.join(distDir, 'bundle.css');

const jsCode = fs.readFileSync(jsPath, 'utf8').replace(/<\/script>/gi, '<\\/script>');
const cssCode = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

const standaloneHtml = `<!doctype html>
<html lang="ms">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AppSheet Studio Academy — Platform Pembelajaran Lengkap Google AppSheet</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>${cssCode}</style>
  </head>
  <body class="bg-[#FCFCFD] text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
    <div id="root"></div>
    <script>${jsCode}</script>
  </body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), standaloneHtml, 'utf8');
console.log('Berjaya menjana index.html kendiri (standalone) — boleh terus dibuka dengan double-click!');
