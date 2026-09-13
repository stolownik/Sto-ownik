// Stołownik — restauracyjny portal v7: nowy układ, te same funkcje
(function(){
function boot(){
  if(typeof R==='undefined'||!document.querySelector('main'))return setTimeout(boot,120);
  document.getElementById('siteHub')?.remove();
  const main=document.querySelector('main');
  [...main.children].forEach(x=>x.dataset.original='1');

  if(!document.getElementById('stolownikFonts')){
    const l=document.createElement('link');l.id='stolownikFonts';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap';document.head.appendChild(l);
  }

  const hub=document.createElement('div');hub.id='siteHub';
  const wanted=['Spaghetti bolognese','Sałatka grecka','Kurczak curry','Quesadilla z serem i warzywami','Zupa krem z dyni','Łosoś pieczony'];
  const picks=wanted.map(n=>R.find(r=>r.name===n)).filter(Boolean);
  R.forEach(r=>{if(picks.length<6&&!picks.includes(r))picks.push(r)});
  const hero=picks.slice(0,3);

  hub.innerHTML=`
  <nav class="hubNav" aria-label="Główna nawigacja">
    <button class="hubBrand" data-go="home"><span>Stołownik</span><small>kuchnia bez granic</small></button>
    <div class="hubLinks"><button data-go="home">Start</button><button data-go="food">Przepisy</button><button data-go="drinks">Napoje</button><button data-go="gallery">Galeria</button><button data-go="story">O nas</button></div>
  </nav>

  <section id="hubHome" class="hubPage">
    <section class="restaurantHero">
      <div class="heroCopy">
        <span class="eyebrow">JESIENNY STÓŁ · SMAKI ŚWIATA</span>
        <h1>Smaki, do których chce się wracać.</h1>
        <p>Przepisy z różnych stron świata podane po polsku — czytelnie, apetycznie i bez zbędnego chaosu.</p>
        <div class="heroActions"><button data-go="food">Odkryj przepisy</button><button class="ghost" data-go="drinks">Zobacz napoje</button></div>
        <div class="heroNotes"><span>Domowe klasyki</span><i></i><span>Kuchnia świata</span><i></i><span>Prosto po polsku</span></div>
      </div>
      <div class="heroMosaic">
        ${hero.map((r,i)=>`<button class="heroPhoto heroPhoto${i+1}" data-recipe="${r.id}"><img src="${r.img}" alt="${r.name}"><span><b>${r.name}</b><small>${r.time} min</small></span></button>`).join('')}
      </div>
    </section>

    <section class="quickSection">
      <div class="sectionIntro"><span class="eyebrow">WSZYSTKO POD RĘKĄ</span><h2>Wybierz, na co masz dziś ochotę</h2><p>Najważniejsze części Stołownika są od razu widoczne i prowadzą prosto tam, gdzie chcesz.</p></div>
      <div class="hubTiles">
        <button data-go="food"><span>01</span><b>Przepisy</b><em>Wyszukiwarka, kategorie, filtry i wszystkie dania.</em><strong>Przeglądaj →</strong></button>
        <button data-go="drinks"><span>02</span><b>Napoje</b><em>Domowe napoje na zimno i ciepło.</em><strong>Otwórz katalog →</strong></button>
        <button data-go="gallery"><span>03</span><b>Galeria</b><em>Wybieraj dania oczami i przechodź prosto do przepisu.</em><strong>Zobacz zdjęcia →</strong></button>
        <button data-go="story"><span>04</span><b>O nas</b><em>Poznaj pomysł na Stołownik i kierunek rozwoju.</em><strong>Czytaj więcej →</strong></button>
      </div>
    </section>

    <section class="featured">
      <div class="sectionTitle"><span class="eyebrow">WYBRANE SMAKI</span><h2>Z różnych stron stołu</h2><p>Klasyki i inspiracje, które najlepiej pokazują charakter Stołownika.</p></div>
      <div class="featureGrid">${picks.slice(0,6).map(r=>`<button data-recipe="${r.id}"><img src="${r.img}" alt="${r.name}" loading="lazy"><div><b>${r.name}</b><small>${r.time} min</small><strong>Zobacz przepis →</strong></div></button>`).join('')}</div>
    </section>

    <section class="manifest"><span class="eyebrow">STOŁOWNIK</span><blockquote>Dobry smak nie zna granic.</blockquote><p>Jesienny klimat, restauracyjna estetyka i przepisy, które da się naprawdę ugotować.</p></section>
  </section>

  <section id="hubGallery" class="hubPage" hidden><div class="sectionTitle galleryTitle"><span class="eyebrow">GALERIA</span><h2>Najpierw jedzą oczy</h2><p>Wybierz danie ze zdjęcia i przejdź bezpośrednio do przepisu.</p></div><div class="galleryGrid">${R.slice(0,24).map(r=>`<button data-recipe="${r.id}"><img src="${r.img}" alt="${r.name}" loading="lazy"><span>${r.name}</span></button>`).join('')}</div></section>

  <section id="hubStory" class="hubPage" hidden><div class="storyHero"><span class="eyebrow">O STOŁOWNIKU</span><h2>Kuchnia bez granic, po polsku.</h2><p>Stołownik łączy domowe klasyki z inspiracjami z różnych stron świata. Ma być piękny, prosty i naprawdę wygodny podczas gotowania.</p></div><div class="storyCols"><article><span>01</span><b>Smaki świata</b><p>Polska, Europa, Azja, obie Ameryki i kolejne regiony — rozwijane stopniowo.</p></article><article><span>02</span><b>Wygodnie</b><p>Składniki, kroki, porcje, filtry i wyszukiwarka mają prowadzić do celu bez bałaganu.</p></article><article><span>03</span><b>Jakość</b><p>Lepsza mniejsza, dopracowana baza niż setki przypadkowych pozycji.</p></article></div></section>`;

  main.prepend(hub);
  const st=document.createElement('style');st.id='siteHubStyle';st.textContent=`
  body>header{display:none!important}
  body{font-family:Manrope,system-ui,sans-serif!important;background:linear-gradient(180deg,#f4eadc 0,#ead8c1 100%)!important}
  body>.top{font-family:Manrope,system-ui,sans-serif!important;background:#211814!important;color:#e8d4bd!important;padding:10px 16px!important;letter-spacing:.18em!important;font-size:10px!important;text-transform:uppercase!important}
  h1,h2,h3,.hubBrand span,.card h3,.drinkBody h3,.inside h2{font-family:'Cormorant Garamond',Georgia,serif!important}
  main{max-width:none!important;padding:0 0 70px!important}
  #siteHub{max-width:1280px;margin:0 auto 68px;padding:18px 24px 0}
  .hubNav{position:sticky;top:10px;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:28px;padding:12px 14px 12px 20px;background:#241a16f2;backdrop-filter:blur(18px);border:1px solid #6d4b37;border-radius:18px;margin-bottom:20px;box-shadow:0 18px 45px #2b1b112b}
  .hubBrand{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:1px!important;border:0!important;background:transparent!important;color:#fff3df!important;padding:3px 8px!important}.hubBrand span{font-size:31px!important;font-weight:700!important;line-height:.9!important;letter-spacing:-.03em}.hubBrand small{font:700 8px/1.2 Manrope,sans-serif!important;letter-spacing:.17em!important;text-transform:uppercase!important;color:#cda887!important}
  .hubLinks{display:flex;gap:5px;flex-wrap:wrap}.hubLinks button{border:1px solid transparent;background:transparent;color:#f0dfcb;padding:10px 15px;border-radius:999px;font-weight:700;transition:.2s}.hubLinks button:hover,.hubLinks button.active{background:#8d472f;border-color:#a96849;color:#fff}
  .hubPage{overflow:hidden;background:#fffaf1;border:1px solid #d7b995;border-radius:22px;box-shadow:0 30px 85px #51331f18}
  .restaurantHero{min-height:650px;display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center;padding:60px clamp(36px,5vw,70px);background:radial-gradient(circle at 15% 8%,#cf8a5622,transparent 28%),linear-gradient(125deg,#3a2921 0,#503526 52%,#70452f 100%);color:#fff4e6;position:relative}
  .restaurantHero:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,#ffffff05 0 1px,transparent 1px 88px);pointer-events:none}.heroCopy,.heroMosaic{position:relative;z-index:1}.eyebrow{display:block;font:800 10px/1 Manrope,sans-serif;letter-spacing:.19em;text-transform:uppercase;color:#bd774f}.restaurantHero .eyebrow{color:#dfb187}.restaurantHero h1{font-size:clamp(62px,7vw,96px)!important;line-height:.84!important;letter-spacing:-.055em!important;margin:18px 0 24px!important;color:#fff1dc!important;max-width:680px}.restaurantHero p{font-size:18px;line-height:1.75;color:#e2cdbc;max-width:590px;margin:0}.heroActions{display:flex;gap:11px;margin-top:30px;flex-wrap:wrap}.heroActions button{border:1px solid #9d5636;background:#9d5636;color:#fff8ef;border-radius:11px;padding:14px 20px;font-weight:800;box-shadow:0 10px 24px #1f120c35;transition:.2s}.heroActions button:hover{transform:translateY(-2px);background:#b46640}.heroActions .ghost{background:transparent;border-color:#b98d70;color:#f5dfcb;box-shadow:none}.heroActions .ghost:hover{background:#ffffff10}
  .heroNotes{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:34px;color:#cdb49e;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}.heroNotes i{width:4px;height:4px;border-radius:50%;background:#a85a38}
  .heroMosaic{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:260px 210px;gap:13px}.heroPhoto{position:relative;border:0;padding:0;overflow:hidden;border-radius:14px;background:#2f211b;box-shadow:0 20px 45px #1a0f0a45}.heroPhoto1{grid-row:1/3}.heroPhoto img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.9) contrast(1.04);transition:.4s}.heroPhoto:hover img{transform:scale(1.035)}.heroPhoto span{position:absolute;left:0;right:0;bottom:0;padding:48px 16px 15px;background:linear-gradient(transparent,#1d120de6);text-align:left;color:#fff}.heroPhoto b{display:block;font:700 20px/1.05 'Cormorant Garamond',serif}.heroPhoto small{display:block;margin-top:4px;color:#e6cdb8;font-size:11px}
  .quickSection{padding:64px 34px 54px;background:#fbf3e7}.sectionIntro,.sectionTitle{max-width:760px;margin-bottom:28px}.sectionIntro h2,.sectionTitle h2{font-size:clamp(42px,5vw,62px)!important;line-height:.95!important;letter-spacing:-.035em!important;color:#33231c!important;margin:10px 0 12px!important}.sectionIntro p,.sectionTitle p{color:#776356;font-size:16px;line-height:1.7;margin:0}.hubTiles{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.hubTiles button{text-align:left;border:1px solid #dbc1a1;background:#fffaf1;padding:24px;min-height:220px;border-radius:14px;display:flex;flex-direction:column;transition:.22s;box-shadow:0 8px 22px #50331f0c}.hubTiles button:hover{transform:translateY(-5px);border-color:#bc8b67;box-shadow:0 18px 35px #50331f18}.hubTiles span{font-size:11px;font-weight:800;color:#a45a35;letter-spacing:.13em}.hubTiles b{font:700 31px/1 'Cormorant Garamond',serif;color:#34241d;margin:18px 0 9px}.hubTiles em{font-style:normal;color:#786457;line-height:1.6;font-size:13px}.hubTiles strong{margin-top:auto;padding-top:24px;color:#7d3c27;font-size:12px}
  .featured{padding:64px 34px 68px;border-top:1px solid #ead7bf;background:#fffaf1}.featureGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.featureGrid button{border:1px solid #dbc3a5;background:#f5e7d5;padding:0;text-align:left;border-radius:14px;overflow:hidden;transition:.22s}.featureGrid button:hover{transform:translateY(-5px);box-shadow:0 18px 34px #4b2e1d1d}.featureGrid img{width:100%;height:235px;object-fit:cover;display:block}.featureGrid div{padding:17px}.featureGrid b{display:block;font:700 24px/1.05 'Cormorant Garamond',serif;color:#35241c}.featureGrid small{display:block;color:#856957;margin:6px 0 13px}.featureGrid strong{font-size:11px;color:#8c422a;text-transform:uppercase;letter-spacing:.08em}
  .manifest{padding:72px 30px;text-align:center;background:radial-gradient(circle at 20% 0,#d3aa7115,transparent 34%),linear-gradient(125deg,#2c4233,#3b5740);color:#f4e7d6}.manifest .eyebrow{color:#d8af86}.manifest blockquote{font:700 clamp(38px,5vw,60px)/1 'Cormorant Garamond',serif;margin:10px 0 15px}.manifest p{max-width:700px;margin:auto;color:#dccbb8;font-size:16px;line-height:1.7}
  .galleryTitle{padding:55px 34px 10px}.galleryGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;padding:12px 34px 48px}.galleryGrid button{border:1px solid #dcc4a6;background:#f2e4d2;padding:0;text-align:left;border-radius:13px;overflow:hidden;transition:.2s}.galleryGrid button:hover{transform:translateY(-4px);box-shadow:0 15px 30px #50331f18}.galleryGrid img{width:100%;height:210px;object-fit:cover;display:block}.galleryGrid span{display:block;padding:13px 14px;font-weight:800;color:#493629}
  .storyHero{padding:80px clamp(34px,7vw,90px);background:radial-gradient(circle at 85% 10%,#b8794930,transparent 30%),linear-gradient(120deg,#33251e,#4d3326);color:#f4e8d8}.storyHero .eyebrow{color:#dca97d}.storyHero h2{font-size:clamp(52px,7vw,82px)!important;line-height:.9!important;margin:12px 0 20px!important;color:#fff0dc!important}.storyHero p{font-size:18px;line-height:1.8;max-width:790px;color:#dccbbb}.storyCols{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#d5bfa3}.storyCols article{padding:38px;background:#fff9ef}.storyCols article span{font-size:11px;font-weight:800;color:#a35937}.storyCols b{display:block;font:700 29px 'Cormorant Garamond',serif;color:#3d2b22;margin:12px 0 8px}.storyCols p{color:#725e4e;line-height:1.68}
  .hubHidden{display:none!important}
  #siteHub~.searchbox,#siteHub~.daybox,#siteHub~.section-head,#siteHub~.cats,#siteHub~.count,#siteHub~.grid,#siteHub~.foodfilters{max-width:1100px!important;margin-left:auto!important;margin-right:auto!important}
  #siteHub~.searchbox{margin-top:28px!important}
  @media(max-width:980px){.restaurantHero{grid-template-columns:1fr;min-height:auto}.heroMosaic{max-width:760px}.hubTiles{grid-template-columns:repeat(2,1fr)}.featureGrid{grid-template-columns:repeat(2,1fr)}.galleryGrid{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:760px){#siteHub{padding:10px 12px 0}.hubNav{position:static;align-items:flex-start;flex-direction:column}.hubLinks{width:100%}.hubLinks button{flex:1;padding:9px 8px}.restaurantHero{padding:48px 23px;gap:34px}.restaurantHero h1{font-size:58px!important}.heroMosaic{grid-template-columns:1fr 1fr;grid-template-rows:220px 170px}.quickSection,.featured{padding:46px 19px}.galleryGrid{grid-template-columns:repeat(2,1fr);padding-left:18px;padding-right:18px}.storyCols{grid-template-columns:1fr}}
  @media(max-width:520px){.hubTiles,.featureGrid,.galleryGrid{grid-template-columns:1fr}.heroMosaic{grid-template-columns:1fr;grid-template-rows:230px 190px 190px}.heroPhoto1{grid-row:auto}.heroActions{flex-direction:column}.heroActions button{width:100%}.restaurantHero h1{font-size:50px!important}.sectionIntro h2,.sectionTitle h2{font-size:44px!important}}
  `;document.head.appendChild(st);

  function originals(show){[...main.children].filter(x=>x.dataset.original==='1').forEach(x=>x.classList.toggle('hubHidden',!show))}
  function page(name){
    document.querySelectorAll('.hubPage').forEach(x=>x.hidden=true);
    document.querySelectorAll('.hubLinks button').forEach(x=>x.classList.toggle('active',x.dataset.go===name));
    const drinks=document.getElementById('drinkCatalog');
    if(name==='home'){originals(false);if(drinks)drinks.classList.remove('show');main.style.display='block';hubHome.hidden=false}
    if(['gallery','story'].includes(name)){originals(false);if(drinks)drinks.classList.remove('show');main.style.display='block';document.getElementById('hub'+name[0].toUpperCase()+name.slice(1)).hidden=false}
    if(name==='food'){originals(true);if(drinks)drinks.classList.remove('show');main.style.display='block';window.scrollTo({top:document.querySelector('.searchbox')?.offsetTop||0,behavior:'smooth'})}
    if(name==='drinks'){originals(false);main.style.display='block';document.getElementById('drinkTab')?.click();setTimeout(()=>document.getElementById('drinkCatalog')?.scrollIntoView({behavior:'smooth',block:'start'}),80)}
  }
  hub.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>page(b.dataset.go));
  hub.querySelectorAll('[data-recipe]').forEach(b=>b.onclick=()=>typeof openR==='function'&&openR(+b.dataset.recipe));
  page('home');
}
boot()})();