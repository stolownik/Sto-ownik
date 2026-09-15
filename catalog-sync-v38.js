// Stołownik v45 — kompaktowe Desery jak Dania + klikalny wybór krajów; Napoje bez krajów
(function(){'use strict';
function addStyle(){let s=document.getElementById('catalogV45Style');if(!s){s=document.createElement('style');s.id='catalogV45Style';document.head.appendChild(s)}s.textContent=`
#dessertCatalog{max-width:1360px!important;width:calc(100% - 32px)!important;margin:0 auto!important;padding:20px 0 60px!important;border:0!important;background:transparent!important;box-shadow:none!important}
#dessertCatalog .dessertHead{max-width:760px!important;margin:0 auto 12px!important;padding:10px 0!important}
#dessertCatalog .dessertHead h2{font-size:42px!important;margin:4px 0 10px!important}
#dessertCatalog .mirrorV37{width:100%!important;max-width:100%!important;margin:0 auto!important}
#dessertCatalog .mirrorWorld{width:100%!important;box-sizing:border-box!important;margin:0 0 14px!important;padding:10px!important;background:#fffaf1!important;border:1px solid #d7b995!important;border-radius:9px!important;overflow:hidden!important}
#dessertCatalog .mirrorWorldTop{display:flex!important;justify-content:space-between!important;align-items:center!important;gap:10px!important}
#dessertCatalog .mirrorWorld h3{margin:0!important;font:italic 700 17px Georgia,serif!important;color:#38251d!important}
#dessertCatalog .mirrorWorld small{font-size:9px!important;color:#7d6b5d!important}
#dessertCatalog .mirrorCountry{display:block!important;width:100%!important;height:34px!important;box-sizing:border-box!important;margin:8px 0!important;padding:7px 9px!important;border:1px solid #d8b995!important;border-radius:6px!important;background:#fff!important;font-size:11px!important}
#dessertCatalog .mirrorCountryList{display:flex!important;flex-wrap:nowrap!important;gap:5px!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;overflow-y:hidden!important;white-space:nowrap!important;padding:0 0 5px!important;scrollbar-width:thin!important}
#dessertCatalog .mirrorCountryList button{display:inline-flex!important;flex:0 0 auto!important;width:auto!important;min-width:0!important;height:29px!important;align-items:center!important;padding:5px 8px!important;margin:0!important;border:1px solid #d8b995!important;border-radius:6px!important;background:#fffaf2!important;font-size:9px!important;line-height:1!important;cursor:pointer!important}
#dessertCatalog .mirrorCountryList button.selected{background:#294b36!important;color:#fff!important;border-color:#294b36!important}
#dessertCatalog .mirrorAll{height:30px!important;padding:6px 10px!important;border:0!important;border-radius:6px!important;background:#8b3f2a!important;color:#fff!important;font-size:10px!important;font-weight:800!important;cursor:pointer!important}
#dessertCatalog .mirrorCats{width:680px!important;max-width:100%!important;margin:8px auto 12px!important;display:flex!important;flex-wrap:wrap!important;gap:5px!important}
#dessertCatalog .mirrorCats .cat{padding:6px 9px!important;border:1px solid #d8b995!important;border-radius:999px!important;background:#fffaf2!important;font-size:9px!important;cursor:pointer!important}
#dessertCatalog .mirrorCats .cat.active{background:#8b3f2a!important;color:#fff!important}
#dessertCatalog .mirrorFilters{width:680px!important;max-width:100%!important;box-sizing:border-box!important;margin:0 auto!important;padding:10px!important;background:#efddc4!important;border:1px solid #d6b78f!important;border-radius:9px!important}
#dessertCatalog .filtertop h3{font-size:14px!important;margin:0 0 7px!important}
#dessertCatalog .filtergrid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:6px!important}
#dessertCatalog .filterbox{padding:7px!important;background:#fffaf2!important;border:1px solid #e0c8aa!important;border-radius:6px!important}
#dessertCatalog .filterbox>span{display:block!important;margin-bottom:4px!important;font-size:8px!important}
#dessertCatalog .range{display:flex!important;align-items:center!important;gap:4px!important}#dessertCatalog .range input{min-width:0!important;width:0!important;flex:1!important;height:29px!important;padding:5px 7px!important;box-sizing:border-box!important;font-size:10px!important}
#dessertCatalog .filterhint{font-size:8px!important;margin:7px 0!important}.filteractions{gap:6px!important}
#dessertCatalog .filteractions{display:flex!important;justify-content:flex-end!important;margin-top:7px!important}#dessertCatalog .filteractions button{padding:8px 11px!important;border:0!important;border-radius:6px!important;color:#fff!important;font-size:9px!important;font-weight:800!important;cursor:pointer!important}#dessertCatalog .mirrorReset{background:#8b3f2a!important}#dessertCatalog .mirrorApply{background:#294b36!important}
#dessertCatalog .mirrorCount{width:680px!important;max-width:100%!important;margin:8px auto!important;font-size:10px!important}
#dessertCatalog #dessertGrid{max-width:1360px!important;margin:0 auto!important;gap:12px!important}
#drinkCatalog .mirrorWorld{display:none!important}
@media(max-width:760px){#dessertCatalog{width:calc(100% - 16px)!important}#dessertCatalog .filtergrid{grid-template-columns:1fr!important}}
`;}
function fixCountryClicks(){const p=document.querySelector('#dessertCatalog .mirrorV37');if(!p||p.dataset.v45country==='1')return;p.dataset.v45country='1';const apply=()=>p.querySelector('.mirrorApply')?.click();p.querySelectorAll('.mirrorCountryList [data-country]').forEach(b=>{b.addEventListener('click',()=>{p.dataset.country=b.dataset.country||'Wszystkie';const q=p.querySelector('.mirrorCountry');if(q)q.value=b.dataset.country||'';p.querySelectorAll('.mirrorCountryList [data-country]').forEach(x=>x.classList.toggle('selected',x===b));apply()})});}
function sync(){addStyle();fixCountryClicks();const v=document.body.dataset.stolownikView,d=document.getElementById('dessertCatalog'),n=document.getElementById('drinkCatalog');if(v==='desserts'){if(d){d.classList.add('show');d.style.setProperty('display','block','important')}if(n){n.classList.remove('show');n.style.setProperty('display','none','important')}}else if(v==='drinks'){if(n){n.classList.add('show');n.style.setProperty('display','block','important')}if(d){d.classList.remove('show');d.style.setProperty('display','none','important')}}}
function boot(){if(!document.body)return setTimeout(boot,60);sync();new MutationObserver(()=>setTimeout(sync,0)).observe(document.body,{attributes:true,attributeFilter:['data-stolownik-view'],childList:true,subtree:true});setTimeout(sync,200);setTimeout(sync,700)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();