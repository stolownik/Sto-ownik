// Stołownik v44 — Desery jak Dania; Napoje bez krajów pochodzenia
(function(){'use strict';
function addStyle(){if(document.getElementById('catalogV44Style'))return;const s=document.createElement('style');s.id='catalogV44Style';s.textContent=`
#dessertCatalog{max-width:none!important;width:100%!important;margin:0!important;padding:0 0 70px!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
#dessertCatalog .dessertHead{max-width:1280px;margin:20px auto 10px;padding:20px 24px 0;box-sizing:border-box}
#dessertCatalog .mirrorV37{width:100%!important;max-width:none!important;margin:0!important}
#dessertCatalog .mirrorWorld{width:100%!important;box-sizing:border-box!important;margin:0 0 16px!important;padding:12px!important;background:#fffaf1!important;border:1px solid #d7b995!important;border-radius:10px!important}
#dessertCatalog .mirrorWorldTop{display:flex!important;justify-content:space-between!important;align-items:center!important;gap:12px!important}
#dessertCatalog .mirrorWorld h3{margin:0!important;font:italic 700 18px Georgia,serif!important;color:#38251d!important}
#dessertCatalog .mirrorWorld small{font-size:9px!important;color:#7d6b5d!important}
#dessertCatalog .mirrorCountry{display:block!important;width:100%!important;box-sizing:border-box!important;margin:9px 0!important;padding:10px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fff!important}
#dessertCatalog .mirrorCountryList{display:flex!important;flex-wrap:nowrap!important;gap:5px!important;width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;white-space:nowrap!important;padding:0 0 6px!important}
#dessertCatalog .mirrorCountryList button{flex:0 0 auto!important;width:auto!important;padding:7px 9px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fffaf2!important;font-size:10px!important}
#dessertCatalog .mirrorAll{padding:8px 12px!important;border:0!important;border-radius:7px!important;background:#8b3f2a!important;color:#fff!important;font-weight:800!important}
#dessertCatalog .mirrorCats{width:680px!important;max-width:calc(100% - 24px)!important;margin:10px auto 14px!important;display:flex!important;flex-wrap:wrap!important;gap:6px!important}
#dessertCatalog .mirrorCats .cat{padding:7px 10px!important;border:1px solid #d8b995!important;border-radius:999px!important;background:#fffaf2!important;font-size:10px!important}
#dessertCatalog .mirrorCats .cat.active{background:#8b3f2a!important;color:#fff!important}
#dessertCatalog .mirrorFilters{width:680px!important;max-width:calc(100% - 24px)!important;box-sizing:border-box!important;margin:0 auto!important;padding:12px!important;background:#efddc4!important;border:1px solid #d6b78f!important;border-radius:10px!important}
#dessertCatalog .filtergrid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important}
#dessertCatalog .filterbox{padding:8px!important;background:#fffaf2!important;border:1px solid #e0c8aa!important;border-radius:7px!important}
#dessertCatalog .filterbox>span{display:block!important;margin-bottom:5px!important;font-size:9px!important}
#dessertCatalog .range{display:flex!important;align-items:center!important;gap:5px!important}#dessertCatalog .range input{min-width:0!important;width:0!important;flex:1!important;padding:8px!important;box-sizing:border-box!important}
#dessertCatalog .filteractions{display:flex!important;justify-content:flex-end!important;gap:7px!important;margin-top:8px!important}#dessertCatalog .filteractions button{padding:10px 13px!important;border:0!important;border-radius:7px!important;color:#fff!important;font-weight:800!important}#dessertCatalog .mirrorReset{background:#8b3f2a!important}#dessertCatalog .mirrorApply{background:#294b36!important}
#dessertCatalog .mirrorCount{width:680px!important;max-width:calc(100% - 24px)!important;margin:10px auto!important}
#drinkCatalog .mirrorWorld{display:none!important}
@media(max-width:760px){#dessertCatalog .filtergrid{grid-template-columns:1fr!important}}
`;document.head.appendChild(s)}
function sync(){addStyle();const v=document.body.dataset.stolownikView,d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(v==='desserts'){if(d){d.classList.add('show');d.style.setProperty('display','block','important')}if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}}else if(v==='drinks'){if(n){n.classList.add('show');n.style.setProperty('display','block','important')}if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}}}
function boot(){if(!document.body)return setTimeout(boot,60);sync();new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view'],childList:true,subtree:true});setTimeout(sync,300)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();