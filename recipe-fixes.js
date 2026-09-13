// Stołownik — zgodne zdjęcia, dowolne porcje i szacunkowy koszt
(function(){
const exactImages={
1:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jajecznica_i_kanapki.jpg?width=1200',
4:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Camera%27lna_Restaurant%2C_Bochnia%2C_2026%2C_08.jpg?width=1200',
8:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nalesniki.jpg?width=1200',
9:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Spaghetti_bolognese_in_Poland.jpg?width=1200',
10:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Klasycznie_podana_sa%C5%82atka_grecka%2C_Ateny_2017_.jpg?width=1200',
12:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Placki_ziemniaczane_-_17.01.2026.jpg?width=1200',
17:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Kotlety_mielone_z_ziemniakami_-_09.03.2026.jpg?width=1200',
21:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana_oatmeal_2.jpg?width=1200',
22:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Brioche_French_toast_with_strawberries.jpg?width=1200',
23:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Racuchy_z_jab%C5%82kami_-_28.08.2026.jpg?width=1200',
24:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Szarlotka.JPG?width=1200',
25:'https://commons.wikimedia.org/wiki/Special:Redirect/file/2023_Sernik_polski_(2).jpg?width=1200'};
// Szacunkowy koszt całego przepisu bazowego (2 porcje; ciasta = cała forma). To nie są ceny na żywo.
const COST={1:12,2:15,3:22,4:31,5:30,6:19,7:29,8:18,9:29,10:23,11:28,12:14,13:31,14:43,15:29,16:19,17:27,18:16,19:22,20:42,21:12,22:17,23:13,24:28,25:38};
function apply(){if(typeof R==='undefined')return setTimeout(apply,50);
Object.entries(exactImages).forEach(([id,url])=>{let r=R.find(x=>x.id===+id);if(r)r.img=url});
let st=document.createElement('style');st.textContent='.portion-input{width:90px;padding:8px 10px;border:1px solid #d9c8b3;border-radius:10px;background:#fff}.costbox{background:#fff;border:1px solid #d9c8b3;border-radius:12px;padding:8px 12px;font-weight:800;color:#365d45}.no-photo{min-height:225px;display:grid;place-items:center;background:#f4eadc}.no-photo:after{content:"Zdjęcie niedostępne";color:#756c63;font-weight:700}';document.head.appendChild(st);
window.img=function(r){return `<img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('no-photo')">`};
const baseOpen=window.openR;window.openR=function(id){baseOpen(id);setTimeout(()=>{let old=document.getElementById('portions');if(old&&old.tagName==='SELECT'){let inp=document.createElement('input');inp.type='number';inp.id='portions';inp.className='portion-input';inp.min='1';inp.max='50';inp.step='1';inp.value='2';inp.oninput=()=>renderRecipe();old.replaceWith(inp)}let bar=document.querySelector('.recipebar');if(bar&&!document.getElementById('cost')){let c=document.createElement('span');c.id='cost';c.className='costbox';bar.appendChild(c)}renderRecipe()},0)};
window.renderRecipe=function(){if(!current)return;let e=document.getElementById('portions'),p=Math.max(1,Math.min(50,parseInt(e&&e.value)||2));if(e)e.value=p;let n=N[current.id]||[0,0,0,0,0],mins=M[current.id]||current.steps.map(()=>Math.max(1,Math.round(current.time/current.steps.length)));document.getElementById('ingTitle').textContent=`Składniki — ${p} ${p===1?'porcja':p<5?'porcje':'porcji'}`;document.getElementById('ming').innerHTML=current.ingredients.map(x=>`<li>${scaleIngredient(x,p)}</li>`).join('');document.getElementById('totalTime').textContent=current.time+' min';document.getElementById('nutrition').innerHTML=[['Kalorie',n[0],'kcal'],['Białko',n[1],'g'],['Tłuszcz',n[2],'g'],['Węglowodany',n[3],'g'],['Błonnik',n[4],'g']].map(x=>`<div class="nut"><b>${x[1]} ${x[2]}</b><span>${x[0]}</span></div>`).join('');document.getElementById('mst').innerHTML=current.steps.map((x,i)=>`<div class="step"><span class="stepmin">${mins[i]||1} min</span><div class="steptext"><b>Krok ${i+1}.</b> ${x}</div></div>`).join('');let c=document.getElementById('cost');if(c){let total=(COST[current.id]||0)*p/2;c.textContent=`Szacunkowy koszt: ${total.toFixed(2).replace('.',',')} zł · ${(total/p).toFixed(2).replace('.',',')} zł/os.`}}
draw();let h=document.getElementById('heroArt');if(h)h.innerHTML=[R[0],R[3],R[23],R[24]].map(r=>img(r)).join('')}
apply();})();