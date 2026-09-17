#!/usr/bin/env node
// Produce the exact, dependency-free root page used for the GitHub Pages release.
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.resolve(process.argv[2]||path.join(root,'..','Stolownik-Atlas.html'));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');
const js=fs.readFileSync(path.join(root,'app.js'),'utf8');
const icon=fs.readFileSync(path.join(root,'icon.svg'),'utf8');
const built=html.replace('<link rel="manifest" href="manifest.webmanifest">','').replace('<link rel="icon" href="icon.svg" type="image/svg+xml">',`<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(icon)}" type="image/svg+xml">`).replace('<link rel="stylesheet" href="style.css">',`<style>${css}</style>`).replace('<script src="app.js" defer></script>',`<script>${js.replaceAll('</script','<\\/script')}</script>`);
if(built===html||built.includes('src="app.js"')||built.includes('href="style.css"'))throw Error('Standalone build failed');
fs.writeFileSync(output,built);console.log(`Built ${output} (${Buffer.byteLength(built)} bytes)`);
