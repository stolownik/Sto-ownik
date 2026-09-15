// Stołownik v40 — kompaktowe Desery/Napoje + twarde rozdzielenie katalogów
(function(){'use strict';
function css(){if(document.getElementById('catalogFixV40'))return;document.getElementById('catalogSameV39')?.remove();const s=document.createElement('style');s.id='catalogFixV40';s.textContent=`
#dessertCatalog,#drinkCatalog{box-sizing:border-box!important}
body[data-stolownik-view="desserts"] #dessertCatalog{display:block!important}body[data-stolownik-view="desserts"] #drinkCatalog{display:none!important}
body[data-stolownik-view="drinks"] #drinkCatalog{display:block!important}body[data-stolownik-view="drinks"] #dessertCatalog{display:none!important}
body[data-stolownik-view="desserts"] main>.grid,body[data-stolownik-view="desserts"] main>.cats,body[data-stolownik-view="desserts"] main>.count,body[data-stolownik-view="desserts"] #advancedFilters,body[data-stolownik-view="desserts"] #countryFilter{display:none!important}
body[data-stolownik-view="drinks"] main>.grid,body[data-stolownik-view="drinks"] main>.cats,body[data-stolownik-view="drinks"] main>.count,body[data-stolownik-view="drinks"] #advancedFilters,body[data-stolownik-view="drinks"] #countryFilter{display:none!important}
#dessertCatalog .mirrorV37,#drinkCatalog .mirrorV37{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
#dessertCatalog .mirrorWorld,#drinkCatalog .mirrorWorld{width:100%!important;box-sizing:border-box!important;margin:0 0 14px!important;padding:10px 12px!important;background:#fffaf1!important;border:1px solid #d7b995!important;border-radius:10px!important}
#dessertCatalog .mirrorWorldTop,#drinkCatalog .mirrorWorldTop{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important}
#dessertCatalog .mirrorWorld h3,#drinkCatalog .mirrorWorld h3{margin:0!important;font:italic 700 18px Georgia,serif!important}
#dessertCatalog .mirrorWorld small,#drinkCatalog .mirrorWorld small{font-size:9px!important}
#dessertCatalog .mirrorCountry,#drinkCatalog .mirrorCountry{width:100%!important;box-sizing:border-box!important;margin:8px 0!important;padding:9px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fff!important}
#dessertCatalog .mirrorCountryList,#drinkCatalog .mirrorCountryList{display:flex!important;gap:5px!important;overflow-x:auto!important;white-space:nowrap!important;padding-bottom:5px!important}
#dessertCatalog .mirrorCountryList button,#drinkCatalog .mirrorCountryList button{flex:0 0 auto!important;padding:7px 9px!important;font-size:10px!important;border:1px solid #d8b995!important;border-radius:7px!important;background:#fffaf2!important}
#dessertCatalog .mirrorAll,#drinkCatalog .mirrorAll{padding:8px 12px!important;border:0!important;border-radius:7px!important;background:#8b3f2a!important;color:white!important;font-weight:800!important}
#dessertCatalog .mirrorCats,#drinkCatalog .mirrorCats{width:680px!important;max-width:calc(100% - 24px)!important;margin:10px auto 14px!important;display:flex!important;flex-wrap:wrap!important;gap:6px!important}
#dessertCatalog .mirrorCats .cat,#drinkCatalog .mirrorCats .cat{padding:7px 10px!important;font-size:10px!important;border:1px solid #d8b995!important;border-radius:999px!important;background:#fffaf2!important}
#dessertCatalog .mirrorCats .cat.active,#drinkCatalog .mirrorCats .cat.active{background:#8b3f2a!important;color:#fff!important}
#dessertCatalog .mirrorFilters,#drinkCatalog .mirrorFilters{width:680px!important;max-width:calc(100% - 24px)!important;box-sizing:border-box!important;margin:0 auto!important;padding:12px!important;background:#efddc4!important;border:1px solid #d6b78f!important;border-radius:10px!important}
#dessertCatalog .filtergrid,#drinkCatalog .filtergrid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important}
#dessertCatalog .filterbox,#drinkCatalog .filterbox{padding:8px!important;background:#fffaf2!important;border:1px solid #e0c8aa!important;border-radius:7px!important}
#dessertCatalog .filterbox>span,#drinkCatalog .filterbox>span{display:block!important;margin-bottom:5px!important;font-size:9px!important}
#dessertCatalog .range,#drinkCatalog .range{display:flex!important;align-items:center!important;gap:5px!important}
#dessertCatalog .range input,#drinkCatalog .range input{width:0!important;min-width:0!important;flex:1!important;padding:8px!important;box-sizing:border-box!important}
#dessertCatalog .filteractions,#drinkCatalog .filteractions{display:flex!important;justify-content:flex-end!important;gap:7px!important;margin-top:8px!important}
#dessertCatalog .filteractions button,#drinkCatalog .filteractions button{padding:10px 13px!important;border:0!important;border-radius:7px!important;color:#fff!important;font-weight:800!important}
#dessertCatalog .mirrorReset,#drinkCatalog .mirrorReset{background:#8b3f2a!important}#dessertCatalog .mirrorApply,#drinkCatalog .mirrorApply{background:#294b36!important}
#dessertCatalog .mirrorCount,#drinkCatalog .mirrorCount{width:680px!important;max-width:calc(100% - 24px)!important;margin:10px auto!important}
@media(max-width:760px){#dessertCatalog .filtergrid,#drinkCatalog .filtergrid{grid-template-columns:1fr!important}}
`;document.head.appendChild(s)}
function clean(view){const d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(view==='desserts'){if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}if(d){d.classList.add('show');d.style.setProperty('display','block','important')}}else if(view==='drinks'){if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}if(n){n.classList.add('show');n.style.setProperty('display','block','important')}}}
function sync(){css();const v=document.body.dataset.stolownikView;clean(v);if((v==='desserts'||v==='drinks')){const sec=document.getElementById(v==='desserts'?'dessertCatalog':'drinkCatalog');if(sec&&!sec.querySelector('.mirrorV37')&&typeof window.stolownikShowCatalog==='function')setTimeout(()=>window.stolownikShowCatalog(v),0)}}
function boot(){if(!document.body)return setTimeout(boot,60);css();sync();document.querySelectorAll('.hubLinks [data-go]').forEach(b=>b.addEventListener('click',()=>setTimeout(sync,20),true));new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view']});setTimeout(sync,250)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();