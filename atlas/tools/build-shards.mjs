#!/usr/bin/env node
// Split a validated Atlas catalog into a small search index and lazy-loaded detail shards.
import fs from 'node:fs';import path from 'node:path';
const [input='catalog.json',dir='catalog',sizeArg='400']=process.argv.slice(2),size=Number(sizeArg);
if(!Number.isInteger(size)||size<100||size>2000)throw Error('Shard size must be an integer between 100 and 2000');
const records=JSON.parse(fs.readFileSync(input,'utf8'));
if(!Array.isArray(records)||records.some(x=>!x.bundled||!x.idMeal||!x.strMeal||!x.strMealThumb||!x.sourceUrl||!x.photoLicense||!x.steps?.length||!x.ingredients?.length))throw Error('Input must be a validated Atlas catalog with source, image, ingredients and steps.');
const ids=new Set(records.map(x=>x.idMeal));if(ids.size!==records.length)throw Error('Duplicate recipe IDs');
fs.mkdirSync(dir,{recursive:true});const shards=[],index=[];
for(let start=0;start<records.length;start+=size){const n=Math.floor(start/size),file=`recipes-${String(n).padStart(5,'0')}.json`,part=records.slice(start,start+size);fs.writeFileSync(path.join(dir,file),JSON.stringify(part));shards.push({file,count:part.length});for(const x of part)index.push({idMeal:x.idMeal,strMeal:x.strMeal,strArea:x.strArea,strCategory:x.strCategory,strMealThumb:x.strMealThumb,servings:x.servings??null,sourceName:x.sourceName,sourceUrl:x.sourceUrl,photoSourceUrl:x.photoSourceUrl,photoAuthor:x.photoAuthor,ingredients:x.ingredients.map(i=>({name:i.name})),bundled:true,shard:file})}
fs.writeFileSync(path.join(dir,'catalog-index.json'),JSON.stringify(index));fs.writeFileSync('catalog-manifest.json',JSON.stringify({schema:1,count:records.length,index:'catalog-index.json',base:dir,shards}));
console.log(`Built ${records.length} recipes in ${shards.length} shards; lazy detail loading enabled.`);
