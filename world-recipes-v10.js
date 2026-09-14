// Stołownik — naprawa zdjęć światowych przepisów v11
// Dane przepisów 51–100 pozostają w poprzedniej wersji; ta wersja usuwa widoczny placeholder
// i pobiera zdjęcia przed ponownym renderem kart.
(function(){
const PHOTO={
51:'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=1200&q=85',
52:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=85',
53:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
56:'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=85',
57:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=85',
58:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=85',
59:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85',
61:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85',
64:'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=85',
66:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85',
71:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
76:'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=85',
81:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
82:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=85',
86:'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=1200&q=85',
90:'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=85',
96:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
97:'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1200&q=85',
98:'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=85',
99:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=85',
100:'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=1200&q=85'
};
function ready(){if(typeof R==='undefined')return setTimeout(ready,100);const recipes=R.filter(r=>r.id>=51&&r.id<=100);if(!recipes.length)return setTimeout(ready,120);
recipes.forEach(r=>{if(PHOTO[r.id])r.img=PHOTO[r.id]});
let pending=recipes.filter(r=>!PHOTO[r.id]);let pos=0;
async function worker(){while(pos<pending.length){const r=pending[pos++];try{const q=encodeURIComponent('intitle:'+r.name);const api='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch='+q+'&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*';const data=await fetch(api).then(x=>x.ok?x.json():Promise.reject());const pages=Object.values(data.query?.pages||{});const hit=pages.find(p=>p.imageinfo?.[0]?.thumburl);if(hit)r.img=hit.imageinfo[0].thumburl}catch(e){}}}
Promise.all([worker(),worker()]).finally(()=>{if(typeof draw==='function')draw();else if(typeof filt==='function')filt();setTimeout(()=>{document.querySelectorAll('.grid .card img').forEach(img=>{img.loading='lazy';img.decoding='async'})},100)});
}
ready();
})();