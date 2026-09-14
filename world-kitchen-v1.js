// Stołownik — kuchnie krajowe v6
(function(){
function setText(selector,text){const el=document.querySelector(selector);if(el)el.textContent=text}
function clean(){
 document.querySelectorAll('.stats,.stat').forEach(x=>x.remove());
 document.title='Stołownik — smaki świata po polsku';
 const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Stołownik — sprawdzone przepisy i smaki z różnych stron świata, opisane prosto i apetycznie po polsku.');
 setText('.top','Odkrywaj. Gotuj. Smakuj.');setText('.brand','Kuchnia bez granic');setText('.lead','Sprawdzone smaki z różnych stron świata, podane prosto i apetycznie.');
 const heroCopy=document.querySelector('#hubHome .heroCopy');if(heroCopy){let name=heroCopy.querySelector('.mainSiteName');if(!name){name=document.createElement('div');name.className='mainSiteName';heroCopy.prepend(name)}name.innerHTML='<span>Stołownik</span><small>KUCHNIA BEZ GRANIC</small>';const eyebrow=heroCopy.querySelector('.eyebrow');if(eyebrow)eyebrow.textContent='JESIENNY STÓŁ · SMAKI ŚWIATA';const h1=heroCopy.querySelector('h1');if(h1)h1.textContent='Znajdź smak, na który masz dziś ochotę.';const p=heroCopy.querySelector('p');if(p)p.textContent='Sprawdzone przepisy, apetyczne zdjęcia i smaki z różnych stron świata — zebrane w jednym miejscu, żeby gotowanie było prostsze i przyjemniejsze.'}
 addCountries();
 setText('#hubStory .storyHero h2','Kuchnia bez granic, po polsku.');setText('#hubStory .storyHero p','Stołownik to miejsce do odkrywania dopracowanych smaków z różnych stron świata — prostych do ugotowania, czytelnie opisanych i podanych apetycznie.');const footer=document.querySelector('footer .wrap');if(footer)footer.innerHTML='<b>Stołownik</b> — odkrywaj, gotuj i wracaj po więcej.';
}
function addCountries(){
 if(typeof R==='undefined')return;
 const home=document.getElementById('hubHome');if(!home||document.getElementById('countryKitchen'))return;
 const countries=[
  ['🇵🇱','Polska',['Polskie klasyki','Żurek','Pierogi','Bigos','Kopytka','Krupnik','Fasolka po bretońsku']],
  ['🇮🇹','Włochy',['Spaghetti','Bolognese','Pesto','Makaron','Lasagne','Risotto','Pizza']],
  ['🇲🇽','Meksyk',['Quesadilla','Tortilla','Chili','Tacos','Guacamole']],
  ['🇮🇳','Indie',['Curry','Butter chicken','Chana masala']],
  ['🇬🇷','Grecja',['Sałatka grecka','Moussaka','Souvlaki']],
  ['🇯🇵','Japonia',['Teriyaki','Ramen','Sushi']],
  ['🇹🇭','Tajlandia',['Pad thai','Tajskie','Thai']],
  ['🇫🇷','Francja',['Ratatouille','Quiche','Francuska']],
  ['🇪🇸','Hiszpania',['Paella','Tortilla española','Hiszpańska']],
  ['🇺🇸','USA',['Burger','Pancakes','Brownie','Mac & cheese']]
 ];
 const sec=document.createElement('section');sec.id='countryKitchen';sec.className='countryKitchen';sec.innerHTML='<div class="countryIntro"><span class="eyebrow">KUCHNIE ŚWIATA</span><h2>Podróżuj smakiem</h2><p>Wybierz kuchnię kraju i zobacz pasujące przepisy, które są już w Stołowniku.</p></div><div class="countryGrid">'+countries.map(c=>{const count=R.filter(r=>{const hay=(r.name+' '+(r.cats||[]).join(' ')).toLowerCase();return c[2].some(k=>hay.includes(k.toLowerCase()))}).length;return '<button class="countryCard" data-country="'+c[1]+'" data-keys="'+c[2].join('|')+'"><span class="countryFlag" aria-hidden="true">'+c[0]+'</span><span class="countryText"><b>'+c[1]+'</b><small>'+(count?count+' '+(count===1?'przepis':'przepisy'):'wkrótce')+'</small></span><span class="countryArrow">→</span></button>'}).join('')+'</div>';
 const featured=home.querySelector('.featured');if(featured)home.insertBefore(sec,featured);else home.appendChild(sec);
 sec.addEventListener('click',e=>{const b=e.target.closest('.countryCard');if(!b)return;const keys=b.dataset.keys.split('|').map(x=>x.toLowerCase());const q=document.getElementById('q');if(q){const existing=R.filter(r=>{const hay=(r.name+' '+(r.cats||[]).join(' ')).toLowerCase();return keys.some(k=>hay.includes(k))});q.value=existing.length?(existing[0].cats||[]).find(c=>keys.some(k=>c.toLowerCase().includes(k)))||keys[0]:'';q.dispatchEvent(new Event('input',{bubbles:true}))}const foodBtn=document.querySelector('[data-go="food"]');if(foodBtn)foodBtn.click()});
 if(!document.getElementById('countryKitchenStyle')){const s=document.createElement('style');s.id='countryKitchenStyle';s.textContent=`
 .countryKitchen{padding:62px 32px 66px;background:linear-gradient(180deg,#f1dfc7,#f8ecdc);border-top:1px solid #dfc29f;border-bottom:1px solid #dfc29f}.countryIntro{max-width:760px;margin-bottom:30px}.countryIntro h2{font:italic 600 clamp(45px,5vw,64px)/.94 'Cormorant Garamond',Georgia,serif;color:#34241d;margin:9px 0 12px}.countryIntro p{max-width:650px;color:#735d4e;font-size:16px;line-height:1.7}.countryGrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.countryCard{min-width:0;min-height:116px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:13px;text-align:left;padding:18px 16px;border:1px solid #d5b58f;border-radius:14px;background:#fff9ef;color:#34241d;box-shadow:0 8px 20px #51331f0d;transition:.2s}.countryCard:hover{transform:translateY(-4px);border-color:#b97b55;box-shadow:0 17px 30px #51331f18}.countryFlag{font-size:35px;line-height:1;filter:saturate(.9)}.countryText{min-width:0}.countryText b{display:block;font:italic 700 26px/1 'Cormorant Garamond',Georgia,serif}.countryText small{display:block;margin-top:7px;color:#8b6c58;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.countryArrow{font-size:19px;color:#985034}.countryCard[data-country="Polska"]{background:linear-gradient(145deg,#fffaf1,#f7e7d2)}
 @media(max-width:1050px){.countryGrid{grid-template-columns:repeat(3,1fr)}}@media(max-width:700px){.countryKitchen{padding:44px 18px 48px}.countryGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.countryCard{min-height:100px;padding:14px 12px;gap:9px}.countryFlag{font-size:29px}.countryText b{font-size:23px}.countryArrow{display:none}}@media(max-width:390px){.countryGrid{grid-template-columns:1fr}.countryCard{min-height:84px}}
 `;document.head.appendChild(s)}
}
clean();setTimeout(clean,180);setTimeout(clean,800);
})();