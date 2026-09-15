// Stołownik v54 — wymusza widoczną personalizację Deserów i Napojów w tej samej skali co Dania
(function(){'use strict';
function style(){let s=document.getElementById('catalogV54');if(!s){s=document.createElement('style');s.id='catalogV54';document.head.appendChild(s)}s.textContent=`
#dessertCatalog,#drinkCatalog{width:100%!important;max-width:none!important;margin:0!important;padding:12px 0 55px!important;border:0!important;background:transparent!important;box-shadow:none!important}
#dessertCatalog .dessertHead,#drinkCatalog .section-head{width:680px!important;max-width:calc(100% - 24px)!important;margin:0 auto 10px!important;padding:8px 0!important}
#dessertCatalog .mirrorV37,#drinkCatalog .mirrorV37{width:100%!important;margin:0!important}
#dessertCatalog .mirrorWorld{width:680px!important;max-width:calc(100% - 24px)!important;box-sizing:border-box!important;margin:0 auto 10px!important;padding:8px 10px!important;border:1px solid #d7b995!important;border-radius:7px!important;background:#fffaf1!important;overflow:hidden!important}
#drinkCatalog .mirrorWorld{display:none!important}
#dessertCatalog .mirrorCountryList{display:flex!important;flex-wrap:nowrap!important;gap:4px!important;overflow-x:auto!important;padding-bottom:4px!important}
#dessertCatalog .mirrorCountryList button{flex:0 0 auto!important;width:auto!important;height:25px!important;padding:4px 7px!important;border:1px solid #d8b995!important;border-radius:5px!important;background:#fffaf2!important;font-size:8px!important}
#dessertCatalog .mirrorCats,#drinkCatalog .mirrorCats{width:680px!important;max-width:calc(100% - 24px)!important;margin:7px auto 10px!important;display:flex!important;flex-wrap:wrap!important;gap:5px!important}
#dessertCatalog .mirrorCats .cat,#drinkCatalog .mirrorCats .cat{padding:5px 8px!important;border:1px solid #d8b995!important;border-radius:999px!important;background:#fffaf2!important;font-size:8px!important}
#dessertCatalog .mirrorCats .cat.active,#drinkCatalog .mirrorCats .cat.active{background:#8b3f2a!important;color:#fff!important}
#dessertCatalog .mirrorFilters,#drinkCatalog .mirrorFilters{display:none!important}
#dessertCatalog .v52panel,#drinkCatalog .v52panel{display:block!important;visibility:visible!important;opacity:1!important;position:relative!important;z-index:2!important;width:680px!important;max-width:calc(100% - 24px)!important;box-sizing:border-box!important;margin:0 auto 12px!important;padding:9px!important;background:#efddc4!important;border:1px solid #d6b78f!important;border-radius:7px!important;color:#4a382d!important;box-shadow:none!important}
#dessertCatalog .v52panel h3,#drinkCatalog .v52panel h3{margin:0 0 6px!important;font:italic 700 12px Georgia,serif!important}
#dessertCatalog .v52grid,#drinkCatalog .v52grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:5px!important}
#dessertCatalog .v52box,#drinkCatalog .v52box{display:block!important;padding:6px!important;border:1px solid #e0c8aa!important;border-radius:5px!important;background:#fffaf2!important}
#dessertCatalog .v52box b,#drinkCatalog .v52box b{display:block!important;margin:0 0 3px!important;font:700 7px Arial,sans-serif!important;color:#665143!important}
#dessertCatalog .v52range,#drinkCatalog .v52range{display:flex!important;align-items:center!important;gap:4px!important}
#dessertCatalog .v52range input,#drinkCatalog .v52range input{width:0!important;min-width:0!important;flex:1 1 0!important;height:26px!important;box-sizing:border-box!important;padding:4px 6px!important;border:1px solid #d9b28a!important;border-radius:5px!important;background:#fff!important;font-size:9px!important;font-weight:700!important}
#dessertCatalog .v52range span,#drinkCatalog .v52range span{font-size:8px!important}
#dessertCatalog .v52panel>p,#drinkCatalog .v52panel>p{margin:5px 0!important;font-size:7px!important;color:#8b7869!important}
#dessertCatalog .v52actions,#drinkCatalog .v52actions{display:flex!important;justify-content:flex-end!important;gap:5px!important;margin-top:5px!important}
#dessertCatalog .v52actions button,#drinkCatalog .v52actions button{width:auto!important;height:auto!important;padding:7px 10px!important;border:0!important;border-radius:5px!important;color:#fff!important;font-size:8px!important;font-weight:800!important}
#dessertCatalog .v52clear,#drinkCatalog .v52clear{background:#8b3f2a!important}#dessertCatalog .v52search,#drinkCatalog .v52search{background:#294b36!important}
#dessertCatalog .mirrorCount,#drinkCatalog .mirrorCount{width:680px!important;max-width:calc(100% - 24px)!important;margin:7px auto!important;font-size:8px!important}
@media(max-width:760px){#dessertCatalog .v52grid,#drinkCatalog .v52grid{grid-template-columns:1fr!important}}
`;}
function sync(){style();const v=document.body.dataset.stolownikView,d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(v==='desserts'){d?.style.setProperty('display','block','important');n?.style.setProperty('display','none','important')}else if(v==='drinks'){n?.style.setProperty('display','block','important');d?.style.setProperty('display','none','important')}}
function boot(){if(!document.body)return setTimeout(boot,50);sync();new MutationObserver(sync).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['data-stolownik-view']});setTimeout(sync,100);setTimeout(sync,400);setTimeout(sync,1000)}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();})();