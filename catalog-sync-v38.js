// Stołownik v39 — Desery i Napoje mają dokładnie ten sam układ filtrów co Dania
(function(){'use strict';
function addStyle(){if(document.getElementById('catalogSameV39'))return;const s=document.createElement('style');s.id='catalogSameV39';s.textContent=`
body[data-stolownik-view="desserts"] #dessertCatalog,body[data-stolownik-view="drinks"] #drinkCatalog{max-width:none!important;width:100%!important;margin:0!important;padding:0 0 70px!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important}
body[data-stolownik-view="desserts"] #dessertCatalog>.dessertHead,body[data-stolownik-view="drinks"] #drinkCatalog>.section-head{display:none!important}
#dessertCatalog .mirrorV37,#drinkCatalog .mirrorV37{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
#dessertCatalog .mirrorWorld,#drinkCatalog .mirrorWorld{width:100%!important;max-width:none!important;box-sizing:border-box!important;margin:0 0 10px!important;border-radius:0!important;padding:12px 10px!important;background:#fffaf1!important;border-top:1px solid #d7b995!important;border-bottom:1px solid #d7b995!important}
#dessertCatalog .mirrorWorldTop,#drinkCatalog .mirrorWorldTop{display:flex!important;justify-content:space-between!important;align-items:flex-start!important}
#dessertCatalog .mirrorWorld h3,#drinkCatalog .mirrorWorld h3{margin:0!important;font:italic 700 18px Georgia,serif!important;color:#3a241c!important}
#dessertCatalog .mirrorWorld small,#drinkCatalog .mirrorWorld small{font-size:9px!important;color:#7d7168!important}
#dessertCatalog .mirrorCountry,#drinkCatalog .mirrorCountry{display:block!important;width:100%!important;box-sizing:border-box!important;margin:10px 0 8px!important;padding:10px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fff!important}
#dessertCatalog .mirrorCountryList,#drinkCatalog .mirrorCountryList{display:flex!important;gap:5px!important;overflow-x:auto!important;white-space:nowrap!important;padding:0 0 6px!important}
#dessertCatalog .mirrorCountryList button,#drinkCatalog .mirrorCountryList button{flex:0 0 auto!important;padding:7px 9px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fffaf2!important;color:#49372d!important;font-weight:700!important;font-size:11px!important}
#dessertCatalog .mirrorAll,#drinkCatalog .mirrorAll{padding:9px 13px!important;border:0!important;border-radius:8px!important;background:#8b3f2a!important;color:#fff!important;font-weight:900!important}
#dessertCatalog .mirrorCats,#drinkCatalog .mirrorCats{width:680px!important;max-width:calc(100% - 24px)!important;margin:12px auto 14px!important;display:flex!important;gap:7px!important;flex-wrap:wrap!important}
#dessertCatalog .mirrorCats .cat,#drinkCatalog .mirrorCats .cat{padding:8px 11px!important;border:1px solid #d8b995!important;border-radius:999px!important;background:#fffaf2!important;color:#4d392d!important;font-size:10px!important;font-weight:800!important}
#dessertCatalog .mirrorCats .cat.active,#drinkCatalog .mirrorCats .cat.active{background:#8b3f2a!important;color:#fff!important;border-color:#8b3f2a!important}
#dessertCatalog .mirrorFilters,#drinkCatalog .mirrorFilters{width:680px!important;max-width:calc(100% - 24px)!important;box-sizing:border-box!important;margin:0 auto!important;padding:14px!important;background:#efddc4!important;border:1px solid #d6b78f!important;border-radius:11px!important}
#dessertCatalog .mirrorFilters .filtertop h3,#drinkCatalog .mirrorFilters .filtertop h3{margin:0 0 12px!important;font:italic 16px Georgia,serif!important;color:#3a2b22!important}
#dessertCatalog .mirrorFilters .filtergrid,#drinkCatalog .mirrorFilters .filtergrid{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:8px!important}
#dessertCatalog .mirrorFilters .filterbox,#drinkCatalog .mirrorFilters .filterbox{display:block!important;padding:9px!important;background:#fffaf2!important;border:1px solid #e0c8aa!important;border-radius:7px!important}
#dessertCatalog .mirrorFilters .filterbox>span,#drinkCatalog .mirrorFilters .filterbox>span{display:block!important;margin-bottom:7px!important;font-size:9px!important;color:#4e4138!important}
#dessertCatalog .mirrorFilters .range,#drinkCatalog .mirrorFilters .range{display:flex!important;align-items:center!important;gap:7px!important}
#dessertCatalog .mirrorFilters .range input,#drinkCatalog .mirrorFilters .range input{width:0!important;min-width:0!important;flex:1 1 0!important;box-sizing:border-box!important;padding:9px!important;border:1px solid #d8b995!important;border-radius:5px!important;background:#fff!important}
#dessertCatalog .mirrorFilters .range i,#drinkCatalog .mirrorFilters .range i{font-style:normal!important;color:#76685d!important}
#dessertCatalog .mirrorFilters .filterhint,#drinkCatalog .mirrorFilters .filterhint{margin:9px 0!important;font-size:8px!important;color:#8a7b70!important}
#dessertCatalog .mirrorFilters .filteractions,#drinkCatalog .mirrorFilters .filteractions{display:flex!important;justify-content:flex-end!important;gap:8px!important}
#dessertCatalog .mirrorFilters .filteractions button,#drinkCatalog .mirrorFilters .filteractions button{padding:11px 15px!important;border:0!important;border-radius:7px!important;color:#fff!important;font-weight:900!important}
#dessertCatalog .mirrorReset,#drinkCatalog .mirrorReset{background:#8b3f2a!important}#dessertCatalog .mirrorApply,#drinkCatalog .mirrorApply{background:#294b36!important}
#dessertCatalog .mirrorCount,#drinkCatalog .mirrorCount{width:680px!important;max-width:calc(100% - 24px)!important;margin:12px auto!important;font-weight:800!important}
@media(max-width:760px){#dessertCatalog .mirrorFilters .filtergrid,#drinkCatalog .mirrorFilters .filtergrid{grid-template-columns:1fr!important}}
`;document.head.appendChild(s)}
function rebuild(kind){const sec=document.getElementById(kind==='desserts'?'dessertCatalog':'drinkCatalog');if(!sec)return;if(sec.querySelector('.mirrorV37'))return;if(typeof window.stolownikShowCatalog==='function')window.stolownikShowCatalog(kind)}
function sync(){addStyle();const view=document.body.dataset.stolownikView;if(view==='desserts')rebuild('desserts');if(view==='drinks')rebuild('drinks')}
function bind(){document.querySelectorAll('.hubLinks [data-go="desserts"],.hubLinks [data-go="drinks"]').forEach(b=>{if(b.dataset.sync39)return;b.dataset.sync39='1';b.addEventListener('click',()=>{setTimeout(sync,0);setTimeout(sync,80);setTimeout(sync,250)},true)})}
function boot(){if(!document.body||!document.querySelector('.hubLinks'))return setTimeout(boot,80);addStyle();bind();sync();const main=document.querySelector('main');if(main)new MutationObserver(()=>{bind();setTimeout(sync,0)}).observe(main,{childList:true,subtree:true});new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view']});setTimeout(sync,300);setTimeout(sync,800)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();