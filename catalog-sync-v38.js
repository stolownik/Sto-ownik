// Stołownik v41 — wspólna kompatybilność Wyszukaj / Wyczyść dla Dania, Desery, Napoje
(function(){'use strict';
function click(el){if(el&&typeof el.click==='function')el.click()}
function resetFood(){
 const q=document.getElementById('q');if(q){q.value='';q.dispatchEvent(new Event('input',{bubbles:true}))}
 document.querySelectorAll('#advancedFilters input,.foodfilters input').forEach(x=>x.value='');
 if(typeof window.stolownikResetCountryFilter==='function')window.stolownikResetCountryFilter();
 if(typeof window.stolownikResetCategoryFilter==='function')window.stolownikResetCategoryFilter();
 if(typeof window.setCat==='function')window.setCat('Wszystkie');
 if(typeof window.draw==='function')window.draw();
 if(typeof window.stolownikApplyCountryFilter==='function')setTimeout(window.stolownikApplyCountryFilter,0);
}
function searchFood(){
 if(typeof window.stolownikApplyCountryFilter==='function')window.stolownikApplyCountryFilter();
 else if(typeof window.draw==='function')window.draw();
}
function resetMirror(p){
 if(!p)return;p.dataset.kind='Wszystkie';p.dataset.country='Wszystkie';
 p.querySelectorAll('input').forEach(x=>x.value='');
 p.querySelectorAll('[data-kind]').forEach(x=>x.classList.toggle('active',x.dataset.kind==='Wszystkie'));
 p.querySelectorAll('[data-country]').forEach(x=>{x.hidden=false;x.classList.remove('selected')});
 const all=p.querySelector('.mirrorAll');if(all)click(all);else click(p.querySelector('[data-kind="Wszystkie"]'));
 setTimeout(()=>click(p.querySelector('.mirrorApply')),0);
}
function bindMirror(sec){if(!sec)return;const p=sec.querySelector('.mirrorV37');if(!p)return;
 const apply=p.querySelector('.mirrorApply'),reset=p.querySelector('.mirrorReset');
 if(apply&&!apply.dataset.compat41){apply.dataset.compat41='1';apply.addEventListener('click',()=>{},false)}
 if(reset&&!reset.dataset.compat41){reset.dataset.compat41='1';reset.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();resetMirror(p)},true)}
 p.querySelectorAll('.mirrorCountry,.range input').forEach(inp=>{if(inp.dataset.enter41)return;inp.dataset.enter41='1';inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();click(apply)}})});
}
function bindFood(){
 const reset=document.querySelector('#advancedFilters .resetfilters,#advancedFilters [data-reset],.foodfilters .resetfilters');
 const apply=document.querySelector('#advancedFilters .applyfilters,#advancedFilters [data-apply],.foodfilters .applyfilters');
 if(reset&&!reset.dataset.compat41){reset.dataset.compat41='1';reset.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();resetFood()},true)}
 if(apply&&!apply.dataset.compat41){apply.dataset.compat41='1';apply.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();searchFood()},true)}
}
function enforceCatalogs(){const v=document.body.dataset.stolownikView,d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(v==='desserts'){if(d)d.style.setProperty('display','block','important');if(n)n.style.setProperty('display','none','important')}if(v==='drinks'){if(n)n.style.setProperty('display','block','important');if(d)d.style.setProperty('display','none','important')}}
function sync(){enforceCatalogs();bindFood();bindMirror(document.getElementById('dessertCatalog'));bindMirror(document.getElementById('drinkCatalog'))}
function boot(){if(!document.body)return setTimeout(boot,60);sync();new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-stolownik-view']});document.addEventListener('click',e=>{if(e.target.closest('.hubLinks [data-go]'))setTimeout(sync,30)},true);setTimeout(sync,250);setTimeout(sync,800)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();