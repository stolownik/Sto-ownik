// Stołownik v42 — tylko synchronizacja widoków; logika filtrów zostaje w katalogach
(function(){'use strict';
function sync(){
 const v=document.body.dataset.stolownikView;
 const d=document.getElementById('dessertCatalog');
 const n=document.getElementById('drinkCatalog');
 if(v==='desserts'){
  if(d){d.classList.add('show');d.style.setProperty('display','block','important')}
  if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}
 }else if(v==='drinks'){
  if(n){n.classList.add('show');n.style.setProperty('display','block','important')}
  if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}
 }else{
  if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}
  if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}
 }
}
function boot(){if(!document.body)return setTimeout(boot,60);sync();new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view']});document.addEventListener('click',e=>{if(e.target.closest('.hubLinks [data-go]'))setTimeout(sync,30)},true)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();