// Stołownik — zdjęcia przepisów 51–100 v16
// Statyczne zdjęcia mają pierwszeństwo; dynamiczne wyszukiwanie nigdy nie nadpisuje ich jednym przypadkowym wynikiem.
(function(){
const FIXED={
51:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pierogi%20ruskie%20ze%20skwarkami%20-%2019.08.2026.jpg?width=1200',
52:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Zurek%20Sour%20Rye%20Soup%2C%20Warsaw.jpg?width=1200',
55:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Barszcz%20czysty%20czerwony.jpg?width=1200',
56:'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=85',
57:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=85',
58:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=85',
59:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85',
61:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
64:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=85',
66:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85',
76:'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85',
86:'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=1200&q=85',
91:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tortilla%20Espa%C3%B1ola.jpg?width=1200',
93:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Patatas%20Bravas.JPG?width=1200',
94:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pa%20amb%20tom%C3%A0quet%20-%20001.jpg?width=1200',
96:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
97:'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1200&q=85',
98:'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=85',
99:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=85',
100:'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=1200&q=85'
};
const ALIAS={53:'kotlet schabowy',54:'golabki Polish cabbage rolls',60:'minestrone soup',62:'chilaquiles rojos',63:'chicken enchiladas',65:'sopa de tortilla soup',67:'chana masala',68:'dal tadka',69:'aloo gobi',70:'palak paneer',71:'chicken teriyaki',72:'miso soup tofu',73:'yakisoba noodles',74:'oyakodon',75:'onigiri tuna',77:'thai green curry chicken',78:'tom yum shrimp',79:'mango sticky rice',80:'pad kra pao',81:'moussaka',82:'chicken souvlaki',83:'tzatziki',84:'spanakopita',85:'fasolada',87:'quiche lorraine',88:'croque monsieur',89:'french onion soup',90:'crepes',92:'gazpacho',95:'pollo al ajillo'};
function api(q){return 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch='+encodeURIComponent(q)+'&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*'}
function valid(p,q){const i=p&&p.imageinfo&&p.imageinfo[0],u=i&&(i.thumburl||i.url);if(!u)return null;const t=(p.title||'').toLowerCase();if(/logo|map|flag|icon|drawing|diagram|package|poster|menu|restaurant|building/.test(t))return null;const words=q.toLowerCase().split(/\s+/).filter(x=>x.length>3);if(words.length&&!words.some(w=>t.includes(w)))return null;return u}
async function search(q){try{const d=await fetch(api(q)).then(x=>x.ok?x.json():Promise.reject());for(const p of Object.values(d.query?.pages||{})){const u=valid(p,q);if(u)return u}}catch(e){}return ''}
function redraw(){if(typeof draw==='function')draw();else if(typeof filt==='function')filt()}
async function boot(){if(typeof R==='undefined')return setTimeout(boot,120);const rs=R.filter(r=>r.id>=51&&r.id<=100);if(rs.length<45)return setTimeout(boot,150);
// Usuń stary cache, który powodował powtarzanie jednego burgera przy różnych potrawach.
try{Object.keys(localStorage).filter(k=>k.startsWith('stolownik-photo-')).forEach(k=>localStorage.removeItem(k))}catch(e){}
rs.forEach(r=>{if(FIXED[r.id])r.img=FIXED[r.id];else r.img=''});redraw();
let i=0;async function worker(){while(i<rs.length){const r=rs[i++];if(FIXED[r.id])continue;const q=ALIAS[r.id]||r.name;const u=await search(q);if(u)r.img=u;redraw()}}
await Promise.all([worker(),worker(),worker()]);redraw();}
boot();
})();