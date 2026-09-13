// Stołownik: poprawki zgodności zdjęć i pełnej obsługi porcji
(function(){
  const exactImages={
    1:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Jajecznica_i_kanapki.jpg?width=1200',
    25:'https://commons.wikimedia.org/wiki/Special:Redirect/file/2023_Sernik_polski_(2).jpg?width=1200'
  };
  function apply(){
    if(typeof R==='undefined') return setTimeout(apply,50);
    Object.entries(exactImages).forEach(([id,url])=>{const r=R.find(x=>x.id===Number(id));if(r)r.img=url});
    // Nie pokazujemy przypadkowego zdjęcia innego dania przy błędzie źródła.
    window.img=function(r){return `<img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('no-photo')">`};
    const style=document.createElement('style');
    style.textContent=`.pic.no-photo{min-height:225px;display:grid;place-items:center;background:#f4eadc}.pic.no-photo:after{content:'Zdjęcie w przygotowaniu';color:#756c63;font-weight:700}.portion-input{width:88px;padding:8px 10px;border:1px solid #d9c8b3;border-radius:10px;background:#fff}`;
    document.head.appendChild(style);
    const oldOpen=window.openR;
    window.openR=function(id){oldOpen(id);setTimeout(()=>{const s=document.getElementById('portions');if(!s)return;const inp=document.createElement('input');inp.type='number';inp.id='portions';inp.className='portion-input';inp.min='1';inp.max='50';inp.step='1';inp.value='2';inp.setAttribute('aria-label','Liczba porcji');inp.oninput=()=>{let v=Math.max(1,Math.min(50,parseInt(inp.value)||1));if(String(v)!==inp.value&&inp.value!=='')inp.value=v;renderRecipe()};s.replaceWith(inp);renderRecipe()},0)};
    const oldRender=window.renderRecipe;
    window.renderRecipe=function(){if(!current)return;let el=document.getElementById('portions');let p=Math.max(1,Math.min(50,parseInt(el&&el.value)||2));let n=N[current.id]||[0,0,0,0,0],mins=M[current.id]||current.steps.map(()=>Math.max(1,Math.round(current.time/current.steps.length)));document.getElementById('ingTitle').textContent=`Składniki — ${p} ${p===1?'porcja':p<5?'porcje':'porcji'}`;document.getElementById('ming').innerHTML=current.ingredients.map(x=>`<li>${scaleIngredient(x,p)}</li>`).join('');document.getElementById('totalTime').textContent=current.time+' min';document.getElementById('nutrition').innerHTML=[['Kalorie',n[0],'kcal'],['Białko',n[1],'g'],['Tłuszcz',n[2],'g'],['Węglowodany',n[3],'g'],['Błonnik',n[4],'g']].map(x=>`<div class="nut"><b>${x[1]} ${x[2]}</b><span>${x[0]}</span></div>`).join('');document.getElementById('mst').innerHTML=current.steps.map((x,i)=>`<div class="step"><span class="stepmin">${mins[i]||1} min</span><div class="steptext"><b>Krok ${i+1}.</b> ${x}</div></div>`).join('')};
    draw();
    const hero=document.getElementById('heroArt');if(hero)hero.innerHTML=[R[0],R[3],R[23],R[24]].map(r=>img(r)).join('');
  }
  apply();
})();