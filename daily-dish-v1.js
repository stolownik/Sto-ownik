// Stołownik — Danie dnia v1. Zmiana codziennie o 09:00 czasu polskiego.
(function(){
  function polishNowParts(){
    const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Warsaw',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
    const o={}; parts.forEach(p=>o[p.type]=p.value); return o;
  }
  function activeDayKey(){
    const p=polishNowParts();
    let d=new Date(Date.UTC(+p.year,+p.month-1,+p.day));
    if(+p.hour<9)d.setUTCDate(d.getUTCDate()-1);
    return d.toISOString().slice(0,10);
  }
  function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
  function choose(){
    if(typeof R==='undefined')return null;
    const dishes=R.filter(r=>r&&r.img&&r.name&&!/koktajl|napój|lemoniada|kawa|herbata/i.test(r.name));
    if(!dishes.length)return null;
    return dishes[hash('stolownik-'+activeDayKey())%dishes.length];
  }
  function apply(){
    const card=document.querySelector('#hubHome .featuredDish');
    if(!card)return setTimeout(apply,120);
    const dish=choose(); if(!dish)return;
    const label=card.querySelector('.featuredLabel'),img=card.querySelector('img'),info=card.querySelector('.featuredInfo');
    if(label)label.textContent='DANIE DNIA';
    if(img){img.src=dish.img;img.alt=dish.name}
    if(info){
      const small=info.querySelector('span'),title=info.querySelector('h2'),desc=info.querySelector('p');
      if(small)small.textContent='Codziennie nowe · zmiana o 09:00';
      if(title)title.textContent=dish.name;
      if(desc)desc.textContent=(dish.time?dish.time+' min · ':'')+'dzisiejsza propozycja Stołownika';
    }
  }
  function scheduleNine(){
    const p=polishNowParts();
    const nowMinutes=(+p.hour)*60+(+p.minute);
    let waitMinutes=9*60-nowMinutes;
    if(waitMinutes<=0)waitMinutes+=24*60;
    setTimeout(()=>{apply();scheduleNine()},waitMinutes*60000+1500);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{apply();scheduleNine()});else{apply();scheduleNine()}
})();