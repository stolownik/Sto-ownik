// Stołownik — pewne zdjęcia właściwych dań
(function(){
const FIXIMG={13:'https://upload.wikimedia.org/wikipedia/commons/2/24/Golabki_jacek.jpg',16:'https://upload.wikimedia.org/wikipedia/commons/2/28/Polish_%22Zapiekanka%22.jpg'};
function apply(){if(typeof R==='undefined'||typeof draw!=='function')return setTimeout(apply,50);Object.entries(FIXIMG).forEach(([id,url])=>{const r=R.find(x=>x.id===+id);if(r)r.img=url});draw();}
apply();
})();