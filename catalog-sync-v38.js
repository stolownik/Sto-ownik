// Stołownik v43 — pełne panele Desery/Napoje, bez starego formularza
(function(){'use strict';
function active(){return document.body.dataset.stolownikView}
function clean(sec,type){if(!sec)return;const mirror=sec.querySelector('.mirrorV37');if(mirror){
 if(type==='desserts')sec.querySelector('.dessertControls')?.style.setProperty('display','none','important');
 if(type==='drinks'){sec.querySelector('#drinkQ')?.style.setProperty('display','none','important');sec.querySelector('.drinkPills')?.style.setProperty('display','none','important')}
}}
function rebuild(type){const sec=document.getElementById(type==='desserts'?'dessertCatalog':'drinkCatalog');if(!sec)return;clean(sec,type);if(!sec.querySelector('.mirrorV37')&&typeof window.stolownikShowCatalog==='function'){window.stolownikShowCatalog(type);setTimeout(()=>clean(sec,type),0)}}
function sync(){const v=active(),d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(v==='desserts'){if(d){d.classList.add('show');d.style.setProperty('display','block','important')}if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}rebuild('desserts')}else if(v==='drinks'){if(n){n.classList.add('show');n.style.setProperty('display','block','important')}if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}rebuild('drinks')}else{if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}}}
function boot(){if(!document.body)return setTimeout(boot,60);sync();new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view']});document.addEventListener('click',e=>{if(e.target.closest('.hubLinks [data-go]'))setTimeout(sync,60)},true);setTimeout(sync,400)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();