(function(){
function init(){
 if(typeof R==='undefined'||typeof openR!=='function')return setTimeout(init,80);
 const tips={
  1:'Zdejmij jajecznicę z ognia, gdy jest jeszcze lekko kremowa — dojdzie od ciepła patelni.',
  2:'Makaron trzymaj osobno i dodawaj do talerza, wtedy zupa nie zgęstnieje po nocy.',
  3:'Farsz do pierogów powinien być całkiem zimny przed lepieniem.',
  4:'Panieruj schabowego tuż przed smażeniem, żeby panierka została chrupiąca.',
  5:'Rosół tylko lekko mruga — mocne gotowanie zrobi go mętnym.',
  6:'Leczo smakuje jeszcze lepiej po kilkunastu minutach odpoczynku.',
  7:'Po upieczeniu daj kurczakowi 8–10 minut odpocząć przed krojeniem.',
  8:'Pierwszy naleśnik potraktuj jako test temperatury patelni.',
  9:'Sos bolognese zyskuje na smaku, gdy gotuje się spokojnie i bez pośpiechu.',
  10:'Fetę dodaj na końcu i mieszaj delikatnie, żeby nie zamieniła się w pastę.',
  11:'Żurek po dodaniu zakwasu podgrzewaj łagodnie i próbuj przed doprawieniem.',
  12:'Odciskaj starte ziemniaki, jeśli puściły dużo wody — placki będą bardziej chrupiące.',
  13:'Gołąbki układaj ciasno łączeniem w dół, wtedy nie rozwiną się podczas duszenia.',
  14:'Wołowinę obsmażaj partiami, aby się rumieniła zamiast gotować.',
  15:'Curry doprawiaj stopniowo; ostrość łatwo dodać, trudniej ją cofnąć.',
  16:'Zapiekankę dopiekaj chwilę wyżej w piekarniku, jeśli chcesz mocniej zrumieniony ser.',
  17:'Nie ugniataj zbyt długo masy na mielone — kotlety pozostaną delikatniejsze.',
  18:'Ogórki kiszone dodaj pod koniec, żeby zachować ich wyraźny smak.',
  19:'Barszczu po dodaniu zakwaszającego składnika nie gotuj gwałtownie.',
  20:'Łososia wyjmij, gdy środek jest jeszcze soczysty; dopiecze się od własnego ciepła.',
  21:'Rozgnieciony banan naturalnie zagęści i osłodzi owsiankę.',
  22:'Najlepsze są lekko czerstwe, grubsze kromki — nie rozpadają się po namoczeniu.',
  23:'Ciasto na racuchy powinno wyraźnie urosnąć przed smażeniem.',
  24:'Szarlotkę krój po przestudzeniu, wtedy nadzienie nie wypłynie.',
  25:'Sernik studź stopniowo w uchylonym piekarniku, żeby ograniczyć pękanie.'
 };
 R.forEach(r=>{if(!tips[r.id])tips[r.id]='Przeczytaj cały przepis przed startem i przygotuj składniki wcześniej — gotowanie będzie szybsze i spokojniejsze.'});
 const css=document.createElement('style');css.textContent='.recipeextras{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:0 0 22px}.rex{background:#fff;border:1px solid #e7d8c5;border-radius:14px;padding:11px}.rex b{display:block;color:#365d45}.tipbox{background:#fff3d9;border:1px solid #ead5a5;border-radius:16px;padding:14px 16px;margin:0 0 22px}.recipeactions{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 18px}.recipeactions button{border:1px solid #d9c8b3;background:#fff;border-radius:11px;padding:9px 12px;font-weight:700}@media(max-width:620px){.recipeextras{grid-template-columns:1fr}}';document.head.appendChild(css);
 const old=openR;window.openR=function(id){old(id);setTimeout(()=>{
   const r=R.find(x=>x.id===id);if(!r)return;const inside=document.querySelector('.inside');if(!inside)return;
   inside.querySelectorAll('.recipeextras,.tipbox,.recipeactions').forEach(x=>x.remove());
   const bar=inside.querySelector('.recipebar');
   const difficulty=r.time<=20?'Łatwy':r.time<=60?'Łatwy / średni':'Średni';
   const ex=document.createElement('div');ex.className='recipeextras';ex.innerHTML='<div class="rex"><b>⏱ '+r.time+' min</b><span>czas całości</span></div><div class="rex"><b>👨‍🍳 '+difficulty+'</b><span>poziom trudności</span></div><div class="rex"><b>🧾 '+r.ingredients.length+' składników</b><span>do przygotowania</span></div>';
   const tip=document.createElement('div');tip.className='tipbox';tip.innerHTML='<b>💡 Wskazówka Stołownika</b><br>'+tips[id];
   const act=document.createElement('div');act.className='recipeactions';act.innerHTML='<button type="button" id="copyIng">📋 Kopiuj składniki</button><button type="button" id="printRec">🖨️ Drukuj przepis</button>';
   bar.insertAdjacentElement('afterend',ex);ex.insertAdjacentElement('afterend',tip);tip.insertAdjacentElement('afterend',act);
   document.getElementById('copyIng').onclick=()=>{const p=Number(document.getElementById('portions').value||2);const text=r.name+' — składniki\n'+r.ingredients.map(x=>'• '+(typeof scaleIngredient==='function'?scaleIngredient(x,p):x)).join('\n');navigator.clipboard&&navigator.clipboard.writeText(text);const b=document.getElementById('copyIng');b.textContent='✓ Skopiowano';setTimeout(()=>b.textContent='📋 Kopiuj składniki',1400)};
   document.getElementById('printRec').onclick=()=>window.print();
 },0)};
}
init();
})();