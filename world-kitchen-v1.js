// Stołownik — kuchnia świata: mocna marka i zachęcający hero v5
(function(){
  function setText(selector,text){const el=document.querySelector(selector);if(el)el.textContent=text}
  function clean(){
    document.querySelectorAll('.stats,.stat').forEach(x=>x.remove());
    document.title='Stołownik — smaki świata po polsku';
    const meta=document.querySelector('meta[name="description"]');
    if(meta)meta.setAttribute('content','Stołownik — sprawdzone przepisy i smaki z różnych stron świata, opisane prosto i apetycznie po polsku.');
    setText('.top','Odkrywaj. Gotuj. Smakuj.');
    setText('.brand','Kuchnia bez granic');
    setText('.lead','Sprawdzone smaki z różnych stron świata, podane prosto i apetycznie.');

    const heroCopy=document.querySelector('#hubHome .heroCopy');
    if(heroCopy){
      let name=heroCopy.querySelector('.mainSiteName');
      if(!name){name=document.createElement('div');name.className='mainSiteName';heroCopy.prepend(name)}
      name.innerHTML='<span>Stołownik</span><small>KUCHNIA BEZ GRANIC</small>';
      const eyebrow=heroCopy.querySelector('.eyebrow');if(eyebrow)eyebrow.textContent='JESIENNY STÓŁ · SMAKI ŚWIATA';
      const h1=heroCopy.querySelector('h1');if(h1)h1.textContent='Znajdź smak, na który masz dziś ochotę.';
      const p=heroCopy.querySelector('p');if(p)p.textContent='Sprawdzone przepisy, apetyczne zdjęcia i smaki z różnych stron świata — zebrane w jednym miejscu, żeby gotowanie było prostsze i przyjemniejsze.';
      const notes=heroCopy.querySelector('.heroNotes');if(notes)notes.innerHTML='<span>Sprawdzone przepisy</span><i></i><span>Smaki świata</span><i></i><span>Proste gotowanie</span>';
    }

    if(!document.getElementById('brandHeroV5')){
      const s=document.createElement('style');s.id='brandHeroV5';s.textContent=`
      #hubHome .restaurantHero{min-height:620px!important;grid-template-columns:1.08fr .92fr!important;background:radial-gradient(circle at 8% 10%,#b9693830,transparent 32%),radial-gradient(circle at 88% 85%,#7d3d2538,transparent 35%),linear-gradient(125deg,#2b1c17 0%,#4b2e22 48%,#70412b 100%)!important}
      #hubHome .heroCopy{padding:8px 0!important}
      .mainSiteName{display:flex;flex-direction:column;align-items:flex-start;margin:0 0 34px;padding-bottom:25px;border-bottom:1px solid #c58a605e;max-width:530px}
      .mainSiteName span{font-family:"Cormorant Garamond",Georgia,serif;font-size:clamp(82px,8vw,126px);font-weight:700;line-height:.68;letter-spacing:-.065em;color:#fff2da;text-shadow:0 15px 36px #160c0848}
      .mainSiteName small{font:800 11px/1 Manrope,sans-serif;letter-spacing:.28em;color:#d6a478;margin-top:25px}
      #hubHome .restaurantHero h1{font-size:clamp(45px,4.8vw,68px)!important;line-height:.94!important;letter-spacing:-.035em!important;max-width:610px!important;margin:18px 0 20px!important}
      #hubHome .restaurantHero p{font-size:19px!important;line-height:1.72!important;max-width:620px!important;color:#ead7c6!important}
      #hubHome .heroActions{margin-top:34px!important}
      #hubHome .heroActions button{font-size:16px!important;padding:16px 23px!important;border-radius:10px!important}
      #hubHome .heroActions button:first-child{background:linear-gradient(135deg,#ad5934,#8c3e27)!important;border-color:#c3754d!important;box-shadow:0 14px 30px #1c0e093d!important}
      #hubHome .heroNotes{font-size:12px!important;margin-top:35px!important;color:#dcc4ad!important}
      #hubHome .heroPhoto{border:1px solid #d6a77d45!important;box-shadow:0 24px 55px #160c0852!important}
      #hubHome .heroPhoto b{font-size:23px!important}.hubBrand span{font-size:35px!important}.hubBrand small{font-size:9px!important}
      @media(max-width:760px){.mainSiteName span{font-size:clamp(72px,20vw,100px)}.mainSiteName{margin-bottom:27px}.mainSiteName small{font-size:9px}#hubHome .restaurantHero h1{font-size:46px!important}#hubHome .restaurantHero p{font-size:17px!important}}
      `;document.head.appendChild(s);
    }

    setText('#hubStory .storyHero h2','Kuchnia bez granic, po polsku.');
    setText('#hubStory .storyHero p','Stołownik to miejsce do odkrywania dopracowanych smaków z różnych stron świata — prostych do ugotowania, czytelnie opisanych i podanych apetycznie.');
    const footer=document.querySelector('footer .wrap');if(footer)footer.innerHTML='<b>Stołownik</b> — odkrywaj, gotuj i wracaj po więcej.';
  }
  clean();setTimeout(clean,180);setTimeout(clean,800);
})();