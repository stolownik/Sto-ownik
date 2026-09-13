// Stołownik — poprawka zdjęć kart
(function(){
const FIXIMG={13:'https://www.polana.com/cdn/shop/files/POLISH_Golabki_-_Stuffed_Cabbage_with_Rice_Mushroom_Topped_with_Tomato_Sauce.png?v=1751050224',16:'https://i.lezzet.com.tr/images-xxlarge-recipe/zapiekanka-9540b125-2c23-4cd2-947c-3cfc00efce10.jpg'};
function apply(){if(typeof R==='undefined'||typeof draw!=='function')return setTimeout(apply,50);Object.entries(FIXIMG).forEach(([id,url])=>{const r=R.find(x=>x.id===+id);if(r)r.img=url});draw();const hero=document.getElementById('heroArt');if(hero&&typeof img==='function')hero.innerHTML=[R[0],R[3],R[23],R[24]].map(r=>img(r)).join('');}
apply();
})();