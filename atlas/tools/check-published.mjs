import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const deployed=path.join(site,'..','index.html');
const html=fs.readFileSync(deployed,'utf8');const js=fs.readFileSync(path.join(site,'app.js'),'utf8');const css=fs.readFileSync(path.join(site,'style.css'),'utf8');
assert.match(html,/<!doctype html>/i);assert.ok(html.includes('<style>'+css+'</style>'),'Embedded CSS differs from source');assert.ok(html.includes('<script>'+js.replaceAll('</script','<\\/script')+'</script>'),'Embedded script differs from source');
new vm.Script(js);assert.equal(fs.readFileSync(path.join(site,'sw-pages.js'),'utf8').trim(),fs.readFileSync(path.join(site,'..','sw.js'),'utf8').trim());
console.log('Published page matches source, script syntax and service worker.');
