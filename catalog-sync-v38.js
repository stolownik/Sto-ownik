// Stołownik v38 — wymusza pełny panel filtrów w Deserach i Napojach po każdym przebudowaniu katalogu
(function(){'use strict';
function rebuild(kind){
  const sec=document.getElementById(kind==='desserts'?'dessertCatalog':'drinkCatalog');
  if(!sec)return;
  const has=sec.querySelector('.mirrorV37');
  if(has)return;
  // catalog-mirror-v29 instaluje panele podczas wejścia do widoku; wymuszamy ponowne wejście po przebudowie DOM.
  if(typeof window.stolownikShowCatalog==='function') window.stolownikShowCatalog(kind);
}
function sync(){
  const view=document.body.dataset.stolownikView;
  if(view==='desserts') rebuild('desserts');
  if(view==='drinks') rebuild('drinks');
}
function bind(){
  document.querySelectorAll('.hubLinks [data-go="desserts"],.hubLinks [data-go="drinks"]').forEach(b=>{
    if(b.dataset.sync38)return;b.dataset.sync38='1';
    b.addEventListener('click',()=>{setTimeout(sync,0);setTimeout(sync,80);setTimeout(sync,250)},true);
  });
}
function boot(){
  if(!document.body||!document.querySelector('.hubLinks'))return setTimeout(boot,80);
  bind();sync();
  const main=document.querySelector('main');
  if(main)new MutationObserver(()=>{bind();setTimeout(sync,0)}).observe(main,{childList:true,subtree:true});
  new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view']});
  setTimeout(sync,300);setTimeout(sync,800);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();