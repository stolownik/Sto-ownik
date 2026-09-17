#!/usr/bin/env node
// Convert a licensed JSON Lines feed into the Atlas static catalog.
// This validates declarations and structure; human rights and editorial checks remain required.
import fs from 'node:fs';
const [input,output='catalog.json']=process.argv.slice(2);
if(!input){console.error('Usage: node tools/import-catalog.mjs licensed-recipes.jsonl [catalog.json]');process.exit(2)}
const rows=fs.readFileSync(input,'utf8').split(/\r?\n/).filter(Boolean),seen=new Set(),out=[],issues=[];
const https=x=>{try{return new URL(x).protocol==='https:'}catch{return false}};
for(let n=0;n<rows.length;n++){
  try{
    const x=JSON.parse(rows[n]);const required=['id','name','category','area','photoUrl','photoSourceUrl','sourceUrl','sourceName','recipeLicense','photoLicense','recipeLicenseUrl','photoLicenseUrl','photoAuthor','rightsProofUrl'];
    const missing=required.filter(k=>!String(x[k]||'').trim());
    if(missing.length)throw Error('Missing: '+missing.join(', '));
    if(seen.has(String(x.id)))throw Error('Duplicate id');
    if(!Array.isArray(x.ingredients)||!x.ingredients.length||x.ingredients.some(i=>!i.name))throw Error('Ingredients missing or malformed');
    if(!Array.isArray(x.steps)||!x.steps.length||x.steps.some(v=>!String(v).trim()))throw Error('Steps missing or malformed');
    for(const k of ['photoUrl','photoSourceUrl','sourceUrl','recipeLicenseUrl','photoLicenseUrl','rightsProofUrl'])if(!https(x[k]))throw Error(k+' must be HTTPS');
    if(!['CC0','CC BY 4.0','CC BY-SA 4.0','direct permission'].includes(x.recipeLicense)||!['CC0','CC BY 4.0','CC BY-SA 4.0','direct permission'].includes(x.photoLicense))throw Error('License requires review');
    if(x.servings!=null&&(!Number.isInteger(x.servings)||x.servings<1||x.servings>1000))throw Error('Invalid servings');
    if(x.nutrition!=null){if(!x.servings||!https(x.nutrition.sourceUrl)||['kcal','proteinG','fatG','carbsG'].some(k=>typeof x.nutrition[k]!=='number'||!Number.isFinite(x.nutrition[k])||x.nutrition[k]<0))throw Error('Nutrition needs known servings, nonnegative values per source serving and HTTPS source');}
    if(x.allergens!=null){if(!Array.isArray(x.allergens.items)||x.allergens.items.some(v=>typeof v!=='string'||!v.trim())||!https(x.allergens.sourceUrl))throw Error('Allergen disclosure needs names and HTTPS source');}
    if(x.costEstimate!=null){const c=x.costEstimate;if(typeof c.amount!=='number'||!Number.isFinite(c.amount)||c.amount<0||!Number.isInteger(c.servings)||c.servings<1||!/^\d{4}-\d{2}-\d{2}$/.test(c.checkedAt||'')||Number.isNaN(Date.parse(c.checkedAt))||!/^([A-Z]{3})$/.test(c.currency||'')||!String(c.market||'').trim()||!https(c.sourceUrl))throw Error('Cost estimate needs amount, currency, market, date, servings and HTTPS basis');}
    seen.add(String(x.id));out.push({idMeal:'licensed-'+String(x.id),strMeal:String(x.name).trim(),strCategory:String(x.category),strArea:String(x.area),strMealThumb:x.photoUrl,servings:x.servings??null,nutrition:x.nutrition??null,allergens:x.allergens??null,costEstimate:x.costEstimate??null,sourceUrl:x.sourceUrl,sourceName:x.sourceName,photoSourceUrl:x.photoSourceUrl,photoLicense:x.photoLicense,photoLicenseUrl:x.photoLicenseUrl,photoAuthor:x.photoAuthor,recipeLicense:x.recipeLicense,recipeLicenseUrl:x.recipeLicenseUrl,rightsProofUrl:x.rightsProofUrl,ingredients:x.ingredients.map(i=>({name:String(i.name),amount:String(i.amount||'')})),steps:x.steps.map(String),bundled:true});
  }catch(e){issues.push(`line ${n+1}: ${e.message}`)}
}
if(issues.length){console.error(issues.slice(0,30).join('\n'));console.error(`${issues.length} rejected rows; output not written.`);process.exit(1)}
fs.writeFileSync(output,JSON.stringify(out));console.log(`Validated ${out.length} unique structured recipes. Rights declarations still require editorial review.`);
