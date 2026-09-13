// Stołownik — uporządkowany portal v6: bez nowych funkcji, spójny układ
(function(){
function boot(){
  if(typeof R==='undefined'||!document.querySelector('main'))return setTimeout(boot,120);
  document.getElementById('siteHub')?.remove();
  const main=document.querySelector('main');
  [...main.children].forEach(x=>x.dataset.original='1');
  const hub=document.createElement('div');hub.id='siteHub';
  const wanted=['Spaghetti bolognese','Sałatka grecka','Kurczak curry','Quesadilla z serem i warzywami','Zupa krem z dyni','Łosoś pieczony'];
  const picks=wanted.map(n=>R.find(r=>r.name===n)).filter(Boolean);
  R.forEach(r=>{if(picks.length<6&&!picks.includes(r))picks.push(r)});
  hub.innerHTML=`
  <nav class="hubNav" aria-label="Główna nawigacja">
    <button class="hubBrand" data-go="home">Stołownik</button>
    <div class="hubLinks"><button data-go="home">Start</button><button data-go="food">Przepisy</button><button data-go="drinks">Napoje</button><button data-go="gallery">Galeria</button><button data-go="story">O nas</button></div>
  </nav>
  <section id="hubHome" class="hubPage">
    <div class="welcome">
      <small>WITAJ PRZY STOLE</small>
      <h2>Smaki, do których chce się wracać.</h2>
      <p>Domowe klasyki i inspiracje z różnych stron świata — opisane po polsku, prosto i bez zbędnego udawania.</p>
      <div class="welcomeBtns"><button data-go="food">Przeglądaj przepisy</button><button class="light" data-go="drinks">Zobacz napoje</button></div>
    </div>
    <div class="homeStrip"><span>Kuchnia bez granic</span><i></i><span>Odkrywaj · Gotuj · Smakuj</span></div>
    <div class="hubTiles">
      <button data-go="food"><span class="tileKicker">PRZEPISY</span><b>Znajdź coś na dziś</b><span>Wyszukuj po nazwie i składnikach, korzystaj z kategorii i filtrów.</span></button>
      <button data-go="drinks"><span class="tileKicker">NAPOJE</span><b>Coś do szklanki</b><span>Domowe napoje na zimno i na ciepło w osobnym katalogu.</span></button>
      <button data-go="gallery"><span class="tileKicker">GALERIA</span><b>Najpierw jedzą oczy</b><span>Przeglądaj dania wizualnie i przechodź prosto do przepisu.</span></button>
      <button data-go="story"><span class="tileKicker">O NAS</span><b>Pomysł na Stołownik</b><span>Jakość przed ilością i kuchnia świata podana po polsku.</span></button>
    </div>
    <section class="featured">
      <div class="sectionTitle"><small>WYBRANE SMAKI</small><h3>Z różnych stron stołu</h3><p>Klasyki i inspiracje, które dobrze pokazują kierunek Stołownika.</p></div>
      <div class="featureGrid">${picks.slice(0,6).map(r=>`<button data-recipe="${r.id}"><img src="${r.img}" alt="${r.name}" loading="lazy"><span><b>${r.name}</b><small>${r.time} min</small></span></button>`).join('')}</div>
    </section>
    <section class="manifest"><small>STOŁOWNIK</small><blockquote>„Dobry smak nie zna granic.”</blockquote><p>Rozwijamy bazę stopniowo: prawdziwe dania, czytelne przepisy i zdjęcia, które mają pasować do tego, co naprawdę gotujesz.</p></section>
  </section>
  <section id="hubGallery" class="hubPage" hidden><div class="sectionTitle galleryTitle"><small>GALERIA</small><h2>Najpierw jedzą oczy</h2><p>Wybierz danie ze zdjęcia i otwórz jego przepis.</p></div><div class="galleryGrid">${R.slice(0,24).map(r=>`<button data-recipe="${r.id}"><img src="${r.img}" alt="${r.name}" loading="lazy"><span>${r.name}</span></button>`).join('')}</div></section>
  <section id="hubStory" class="hubPage" hidden><div class="storyHero"><small>O STOŁOWNIKU</small><h2>Kuchnia bez granic, po polsku.</h2><p>Stołownik to miejsce na domowe klasyki i smaki z różnych stron świata. Przepisy mają być czytelne, apetyczne i możliwe do ugotowania bez przekopywania się przez zbędne treści.</p></div><div class="storyCols"><article><b>Smaki świata</b><p>Polska, Europa, Azja, obie Ameryki i kolejne regiony — dodawane stopniowo.</p></article><article><b>Prosto i czytelnie</b><p>Składniki, kroki, porcje i informacje o daniu mają pomagać w gotowaniu.</p></article><article><b>Jakość przed ilością</b><p>Wolimy mniejszą, dopracowaną bazę niż setki pustych lub przypadkowych pozycji.</p></article></div></section>`;
  main.prepend(hub);
  const st=document.createElement('style');st.id='siteHubStyle';st.textContent=`
  #siteHub{max-width:1220px;margin:18px auto 58px;padding:0 18px}
  .hubNav{position:sticky;top:10px;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:22px;padding:11px 14px 11px 20px;background:#2e241eeb;backdrop-filter:blur(14px);border:1px solid #684c3a;border-radius:12px;margin-bottom:20px;box-shadow:0 14px 36px #24160e24}
  .hubBrand{font:700 25px Georgia,serif!important;letter-spacing:-.02em}.hubNav button{border:0;background:transparent;color:#f7ead8;padding:9px 11px;cursor:pointer}.hubLinks{display:flex;gap:4px;flex-wrap:wrap}.hubLinks button{border-radius:7px}.hubLinks button.active,.hubLinks button:hover{background:#934b30}
  .hubPage{background:#fffaf2;border:1px solid #d8bea0;border-radius:13px;overflow:hidden;box-shadow:0 24px 70px #51331f12}
  .welcome{padding:clamp(46px,7vw,92px);background:radial-gradient(circle at 92% 15%,#be74422b,transparent 28%),linear-gradient(120deg,#fff8ed,#efddc3);text-align:center}
  .welcome>small,.sectionTitle>small,.storyHero>small,.manifest>small{font-weight:900;letter-spacing:.16em;color:#95492f}.welcome h2{font:700 clamp(46px,7vw,78px)/.98 Georgia,serif;margin:12px auto 20px;color:#33251e;max-width:850px;letter-spacing:-.045em}.welcome p{font-size:18px;line-height:1.75;max-width:720px;margin:0 auto;color:#6b5748}.welcomeBtns{display:flex;justify-content:center;gap:10px;margin-top:28px}.welcomeBtns button{border:0;background:#354b37;color:#fff;padding:13px 19px;border-radius:7px;font-weight:800}.welcomeBtns .light{background:#e4cdb0;color:#3d2b22}
  .homeStrip{display:flex;align-items:center;justify-content:center;gap:18px;padding:15px 30px;background:#392c24;color:#eadbc8;font-size:11px;letter-spacing:.13em;text-transform:uppercase}.homeStrip i{width:70px;height:1px;background:#8c6b55}
  .hubTiles{display:grid;grid-template-columns:repeat(4,1fr);padding:30px;gap:12px}.hubTiles button{text-align:left;border:1px solid #ddc7aa;background:#f6ead9;padding:24px;min-height:174px;border-radius:8px;transition:.2s}.hubTiles button:hover{transform:translateY(-3px);background:#f1dfc8;border-color:#bd9875}.hubTiles .tileKicker{font-size:10px;letter-spacing:.14em;color:#9b4c2f;font-weight:900}.hubTiles b{display:block;font:700 25px Georgia,serif;margin:15px 0 8px;color:#392820}.hubTiles span:last-child{line-height:1.55;color:#725e4e}
  .featured{padding:42px 30px 52px;border-top:1px solid #eadbc8}.sectionTitle{margin-bottom:22px}.sectionTitle h2,.sectionTitle h3{font:700 40px Georgia,serif;margin:6px 0 7px;color:#392820;letter-spacing:-.025em}.sectionTitle p{margin:0;color:#7a6657}.featureGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.featureGrid button{border:1px solid #dec8ad;background:#f1e2cf;padding:0;text-align:left;border-radius:8px;overflow:hidden;transition:.22s}.featureGrid button:hover{transform:translateY(-4px)}.featureGrid img{width:100%;height:205px;object-fit:cover;display:block}.featureGrid span{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px}.featureGrid b{font:700 18px Georgia,serif;color:#392820}.featureGrid small{white-space:nowrap;color:#806653}
  .manifest{padding:58px max(28px,8vw);background:#334738;color:#f5ead9;text-align:center}.manifest>small{color:#d9b88f}.manifest blockquote{font:italic 700 clamp(29px,4vw,44px) Georgia,serif;margin:9px auto 15px}.manifest p{max-width:720px;margin:auto;color:#dfd0bd;line-height:1.7}
  .hubPage>.galleryTitle{padding:42px 30px 10px}.galleryGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:0 30px 38px}.galleryGrid button{border:1px solid #dec8ad;background:#f2e4d2;padding:0;text-align:left;border-radius:7px;overflow:hidden}.galleryGrid img{width:100%;height:180px;object-fit:cover;display:block}.galleryGrid span{display:block;padding:11px 12px;font-weight:800;color:#493629}
  .storyHero{padding:68px max(30px,9vw);background:#392b23;color:#f4e8d8}.storyHero h2{font:700 clamp(40px,6vw,66px) Georgia,serif;margin:8px 0 15px}.storyHero p{font-size:18px;line-height:1.75;max-width:790px;color:#dccbbb}.storyCols{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#d5bfa3}.storyCols article{padding:34px;background:#fff9ef}.storyCols b{font:700 23px Georgia,serif;color:#3d2b22}.storyCols p{color:#725e4e;line-height:1.65}
  .hubHidden{display:none!important}
  @media(max-width:820px){.hubNav{position:static;align-items:flex-start;flex-direction:column}.hubTiles,.featureGrid,.galleryGrid{grid-template-columns:repeat(2,1fr)}.storyCols{grid-template-columns:1fr}.welcome{padding:52px 25px}}
  @media(max-width:540px){.hubTiles,.featureGrid,.galleryGrid{grid-template-columns:1fr}.welcomeBtns{flex-direction:column}.homeStrip{gap:10px}.homeStrip i{width:30px}.hubLinks{width:100%}.hubLinks button{flex:1}.welcome h2{font-size:44px}}
  `;document.head.appendChild(st);
  function originals(show){[...main.children].filter(x=>x.dataset.original==='1').forEach(x=>x.classList.toggle('hubHidden',!show))}
  function page(name){document.querySelectorAll('.hubPage').forEach(x=>x.hidden=true);document.querySelectorAll('.hubLinks button').forEach(x=>x.classList.toggle('active',x.dataset.go===name));if(name==='home'){originals(false);hubHome.hidden=false}if(['gallery','story'].includes(name)){originals(false);document.getElementById('hub'+name[0].toUpperCase()+name.slice(1)).hidden=false}if(name==='food'){originals(true);const d=document.getElementById('drinkCatalog');if(d)d.classList.remove('show');main.style.display='block';window.scrollTo({top:document.querySelector('.searchbox')?.offsetTop||0,behavior:'smooth'})}if(name==='drinks'){originals(true);document.getElementById('drinkTab')?.click()}}
  hub.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>page(b.dataset.go));hub.querySelectorAll('[data-recipe]').forEach(b=>b.onclick=()=>typeof openR==='function'&&openR(+b.dataset.recipe));page('home')
}
boot()})();