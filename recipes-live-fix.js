(function(){
function run(){
  if(typeof R==='undefined') return setTimeout(run,60);
  const verified={
    26:'https://commons.wikimedia.org/wiki/Special:FilePath/Omelette_de_verduras.jpg?width=1200',
    27:'https://commons.wikimedia.org/wiki/Special:FilePath/Egg_salad_sandwich.jpg?width=1200',
    29:'https://commons.wikimedia.org/wiki/Special:FilePath/Pumpkin_soup.jpg?width=1200',
    30:'https://commons.wikimedia.org/wiki/Special:FilePath/Cream_of_broccoli_soup.jpg?width=1200',
    32:'https://commons.wikimedia.org/wiki/Special:FilePath/Fasolka_po_breto%C5%84sku_2020_%C5%9Bl%C4%85sk_02.jpg?width=1200',
    33:'https://commons.wikimedia.org/wiki/Special:FilePath/Bigos_-_19.03.2026.jpg?width=1200',
    34:'https://commons.wikimedia.org/wiki/Special:FilePath/Kopytka_ze_skwarkami_-_14.08.2026.jpg?width=1200'
  };
  R.forEach(r=>{ if(verified[r.id]) r.img=verified[r.id]; });
  const hc=document.getElementById('heroCount'); if(hc) hc.textContent=R.length;
  if(typeof filt==='function'){ try{ filt(); }catch(e){} }
  else if(typeof render==='function'){ try{ render(R); }catch(e){} }
  setTimeout(()=>{ const hc2=document.getElementById('heroCount'); if(hc2) hc2.textContent=R.length; if(typeof filt==='function') try{filt();}catch(e){} },250);
}
run();
})();