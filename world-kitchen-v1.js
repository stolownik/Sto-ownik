// Stołownik — kuchnia świata: spójne teksty i metadane v3
(function(){
  function setText(selector,text){const el=document.querySelector(selector);if(el)el.textContent=text}
  function clean(){
    document.querySelectorAll('.stats,.stat').forEach(x=>x.remove());
    document.querySelectorAll('header b,header span,header small,header div').forEach(el=>{
      const t=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();
      if(t==='50 przepisów'||t==='100% po polsku'||t.includes('50 przepisów 100% po polsku'))el.remove();
    });

    document.title='Stołownik — smaki świata po polsku';
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.setAttribute('content','Stołownik — sprawdzone przepisy i smaki z różnych stron świata, opisane prosto i apetycznie po polsku.');

    setText('.top','Odkrywaj. Gotuj. Smakuj.');
    setText('.brand','Kuchnia bez granic');
    setText('.lead','Sprawdzone smaki z różnych stron świata, podane prosto i apetycznie.');

    setText('#hubHome .welcome small','WITAJ PRZY STOLE');
    setText('#hubHome .welcome h2','Smaki, do których chce się wracać.');
    setText('#hubHome .welcome p','Odkrywaj domowe klasyki i kuchnie z różnych stron świata. Wybieraj przepisy, które naprawdę chce się ugotować.');
    document.querySelectorAll('#hubHome .welcome aside').forEach(x=>x.remove());
    const welcome=document.querySelector('#hubHome .welcome');
    if(welcome)welcome.style.gridTemplateColumns='1fr';

    setText('#hubHome .hubTiles button[data-go="food"] span','Przepisy z Polski i świata — z wyszukiwaniem, kategoriami i wygodnymi filtrami.');
    setText('#hubHome .hubTiles button[data-go="drinks"] span','Domowe napoje na zimno i na ciepło, zebrane w osobnym katalogu.');
    setText('#hubHome .hubTiles button[data-go="gallery"] span','Smaki oglądane oczami — wybierz danie ze zdjęcia i przejdź do przepisu.');
    setText('#hubHome .hubTiles button[data-go="story"] span','Poznaj pomysł na Stołownik i kierunek, w którym rozwijamy kuchnię bez granic.');

    setText('#hubHome .featured .sectionTitle small','SMAKI STOŁOWNIKA');
    setText('#hubHome .featured .sectionTitle h3','Na dobry początek');
    setText('#hubHome .manifest blockquote','„Dobry smak nie zna granic.”');
    setText('#hubHome .manifest p','Stołownik łączy domowe gotowanie z inspiracjami z kuchni całego świata.');

    setText('#hubStory .storyHero h2','Kuchnia bez granic, po polsku.');
    setText('#hubStory .storyHero p','Stołownik rozwijamy jako miejsce do odkrywania sprawdzonych smaków z różnych stron świata — prostych do ugotowania, czytelnie opisanych i podanych bez zbędnego udawania.');
    const story=document.querySelectorAll('#hubStory .storyCols article');
    if(story[0])story[0].innerHTML='<b>Smaki świata</b><p>Od polskich klasyków po dania inspirowane kuchniami Europy, Azji, obu Ameryk i innych regionów.</p>';
    if(story[1])story[1].innerHTML='<b>Prosto i czytelnie</b><p>Składniki, kroki, filtry i szczegóły przepisu mają pomagać w gotowaniu, a nie przeszkadzać.</p>';
    if(story[2])story[2].innerHTML='<b>Jakość przed ilością</b><p>Bazę rozwijamy stopniowo — wolimy mniej dopracowanych przepisów niż setki pustych pozycji.</p>';

    const footer=document.querySelector('footer .wrap');
    if(footer)footer.innerHTML='<b>Stołownik</b> — smaki świata, podane po polsku.';
  }
  clean();
  setTimeout(clean,200);
  setTimeout(clean,900);
})();