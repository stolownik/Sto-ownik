// Stołownik — zdjęcia przepisów 51–100 v15
// Każdy nowy przepis dostaje fotografię konkretnej potrawy z Wikimedia Commons.
(function(){
const VERIFIED={
51:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pierogi%20ruskie%20ze%20skwarkami%20-%2019.08.2026.jpg?width=1200',
52:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Zurek%20Sour%20Rye%20Soup%2C%20Warsaw.jpg?width=1200',
55:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Barszcz%20czysty%20czerwony.jpg?width=1200'
};
const ALIAS={51:'pierogi ruskie',52:'zurek sour rye soup',53:'kotlet schabowy',54:'golabki Polish cabbage rolls',55:'barszcz czerwony borscht',56:'spaghetti carbonara',57:'lasagne alla bolognese',58:'risotto ai funghi mushroom risotto',59:'pizza margherita',60:'minestrone',61:'guacamole',62:'chilaquiles rojos',63:'chicken enchiladas',64:'beef tacos',65:'sopa de tortilla',66:'butter chicken',67:'chana masala',68:'palak paneer',69:'dal tadka',70:'chicken biryani',71:'chicken teriyaki',72:'ramen',73:'gyoza',74:'okonomiyaki',75:'onigiri',76:'pad thai',77:'thai green curry',78:'tom yum',79:'mango sticky rice',80:'som tam',81:'moussaka',82:'souvlaki',83:'spanakopita',84:'tzatziki',85:'greek salad',86:'ratatouille',87:'quiche lorraine',88:'croque monsieur',89:'crepes',90:'french onion soup',91:'paella',92:'tortilla espanola',93:'gazpacho',94:'patatas bravas',95:'churros',96:'hamburger',97:'mac and cheese',98:'pancakes',99:'buffalo wings',100:'apple pie'};
function api(q){return 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch='+encodeURIComponent(q)+'&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*'}
function good(p){const i=p&&p.imageinfo&&p.imageinfo[0],u=i&&(i.thumburl||i.url);if(!u)return null;const t=(p.title||'').toLowerCase();if(/logo|map|flag|icon|drawing|diagram|package|poster|menu/.test(t))return null;return u}
async function findPhoto(r){if(VERIFIED[r.id])return VERIFIED[r.id];const qs=[ALIAS[r.id],r.name+' food',r.name+' '+(r.country||'')].filter(Boolean);for(const q of qs){try{const d=await fetch(api(q),{mode:'cors'}).then(x=>x.ok?x.json():Promise.reject());const pages=Object.values(d.query?.pages||{});for(const p of pages){const u=good(p);if(u)return u}}catch(e){}}return null}
function redraw(){if(typeof draw==='function')draw();else if(typeof filt==='function')filt()}
async function boot(){if(typeof R==='undefined')return setTimeout(boot,120);const recipes=R.filter(r=>r.id>=51&&r.id<=100);if(recipes.length<45)return setTimeout(boot,160);
// Nie pokazuj starego sztucznego talerza jako zdjęcia potrawy.
recipes.forEach(r=>{if(VERIFIED[r.id])r.img=VERIFIED[r.id];else if((r.img||'').startsWith('data:image/svg'))r.img=''});redraw();
let pos=0;async function worker(){while(pos<recipes.length){const r=recipes[pos++];if(VERIFIED[r.id])continue;const u=await findPhoto(r);if(u){r.img=u;try{localStorage.setItem('stolownik-photo-'+r.id,u)}catch(e){}}else{try{const old=localStorage.getItem('stolownik-photo-'+r.id);if(old)r.img=old}catch(e){}}}}
await Promise.all([worker(),worker(),worker(),worker()]);redraw();setTimeout(redraw,400);
}
boot();
})();