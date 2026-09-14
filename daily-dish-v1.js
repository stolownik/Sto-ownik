// Stołownik — Danie dnia + kierunki dnia v2. Zmiana codziennie o 09:00 czasu polskiego.
(function(){
  function polishNowParts(){
    const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
    const o={}; parts.forEach(p=>o[p.type]=p.value); return o;
  }
  function activeDayKey(){
    const p=polishNowParts(); let d=new Date(Date.UTC(+p.year,+p.month-1,+p.day));
    if(+p.hour<9)d.setUTCDate(d.getUTCDate()-1); return d.toISOString().slice(0,10);
  }
  function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function chooseDish(){
    if(typeof R==='undefined')return null;
    const dishes=R.filter(r=>r&&r.img&&r.name&&!/koktajl|napój|lemoniada|kawa|herbata/i.test(r.name));
    return dishes.length?dishes[hash('stolownik-dish-'+activeDayKey())%dishes.length]:null;
  }
  const countries=[
    ['🇵🇱','Polska','Domowe klasyki, zupy i tradycyjne smaki'],['🇮🇹','Włochy','Makarony, risotto i śródziemnomorskie klasyki'],['🇲🇽','Meksyk','Tacos, salsa i wyraziste dodatki'],['🇮🇳','Indie','Aromatyczne curry, dal i bogactwo przypraw'],['🇯🇵','Japonia','Harmonia, ryż, makarony i umami'],['🇹🇭','Tajlandia','Ostre, kwaśne i słodkie smaki w równowadze'],['🇬🇷','Grecja','Oliwa, świeże zioła i warzywa'],['🇫🇷','Francja','Klasyka bistro, sosy i wypieki'],['🇪🇸','Hiszpania','Tapas, pomidory i słoneczne smaki'],['🇺🇸','USA','Comfort food i kultowe domowe klasyki']
  ];
  function chooseCountries(){
    const pool=[...countries], out=[]; let seed=hash('stolownik-countries-'+activeDayKey());
    while(out.length<4&&pool.length){seed=(Math.imul(seed,1664525)+1013904223)>>>0;out.push(pool.splice(seed%pool.length,1)[0])} return out;
  }
  function apply(){
    const card=document.querySelector('#hubHome .featuredDish');
    if(card){const dish=chooseDish();if(dish){const label=card.querySelector('.featuredLabel'),img=card.querySelector('img'),info=card.querySelector('.featuredInfo');if(label)label.textContent='DANIE DNIA';if(img){img.src=dish.img;img.alt=dish.name}if(info){const small=info.querySelector('span'),title=info.querySelector('h2'),desc=info.querySelector('p');if(small)small.textContent='Codziennie nowe · zmiana o 09:00';if(title)title.textContent=dish.name;if(desc)desc.textContent=(dish.time?dish.time+' min · ':'')+'dzisiejsza propozycja Stołownika'}}}
    }
    const cards=[...document.querySelectorAll('#hubHome .worldCard')], chosen=chooseCountries();
    cards.slice(0,4).forEach((card,i)=>{const c=chosen[i];if(!c)return;const flag=card.querySelector(':scope > span'),box=card.querySelector('div'),name=box?.querySelector('b'),desc=box?.querySelector('p');if(flag)flag.textContent=c[0];if(name)name.textContent=c[1];if(desc)desc.textContent=c[2]});
    const intro=document.querySelector('#hubHome .worldSection .sectionIntro p');if(intro)intro.textContent='Codziennie cztery inne kierunki kulinarnej podróży · zmiana o 09:00.';
  }
  function scheduleNine(){const p=polishNowParts(),now=(+p.hour)*60+(+p.minute);let wait=540-now;if(wait<=0)wait+=1440;setTimeout(()=>{apply();scheduleNine()},wait*60000+1500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{apply();scheduleNine()});else{apply();scheduleNine()}
})();