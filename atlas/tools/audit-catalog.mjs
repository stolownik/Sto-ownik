#!/usr/bin/env node
// Report actual completeness; never substitute the number of possible variations.
import fs from 'node:fs';
const file=process.argv[2]||'catalog.json';
const rows=JSON.parse(fs.readFileSync(file,'utf8'));
if(!Array.isArray(rows))throw Error('Catalog must be an array');
const ids=new Set(),ingredients=new Set(),categories={},issues=[];
const report={recipes:rows.length,uniqueIngredients:0,withPhoto:0,withRecipeSource:0,withPhotoCredit:0,withRightsProof:0,withKnownServings:0,withNutrition:0,withAllergenDisclosure:0,withCostEstimate:0,categories,issues:0};
for(const [index,r] of rows.entries()){
 if(!r.idMeal||ids.has(r.idMeal))issues.push(`row ${index+1}: duplicate or missing id`);ids.add(r.idMeal);
 if(!r.strMeal||!r.steps?.length||!r.ingredients?.length)issues.push(`row ${index+1}: missing content`);
 for(const i of r.ingredients||[])if(i.name)ingredients.add(i.name.trim().toLocaleLowerCase());
 categories[r.strCategory||'unknown']=(categories[r.strCategory||'unknown']||0)+1;
 if(r.strMealThumb)report.withPhoto++;
 if(r.sourceUrl)report.withRecipeSource++;
 if(r.photoAuthor&&r.photoSourceUrl)report.withPhotoCredit++;
 if(r.rightsProofUrl)report.withRightsProof++;
 if(Number.isInteger(r.servings)&&r.servings>0)report.withKnownServings++;
 if(r.nutrition?.sourceUrl)report.withNutrition++;
 if(r.allergens?.sourceUrl)report.withAllergenDisclosure++;
 if(r.costEstimate?.sourceUrl)report.withCostEstimate++;
}
report.uniqueIngredients=ingredients.size;report.issues=issues.length;
console.log(JSON.stringify(report,null,2));
if(issues.length){console.error(issues.slice(0,20).join('\n'));process.exitCode=1}
