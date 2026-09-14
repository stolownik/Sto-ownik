// Stołownik — Menu v15: osobne Dania / Desery / Napoje w głównej nawigacji
(function(){
function boot(){
 if(!document.getElementById('siteHub')||!document.querySelector('.hubLinks'))return setTimeout(boot,120);
 document.getElementById('hubMenu')?.remove();document.getElementById('menuPopover')?.remove();
 const nav=document.querySelector('.hubLinks');
 const food=nav.querySelector('[data-go="food"]');if(food)food.textContent='Dania';
 nav.querySelectorAll('[data-go="desserts"],[data-go="dessert"]').forEach(x=>x.remove());
 const desserts=document.createElement('button');desserts.dataset.go='desserts';desserts.textContent='Desery';
 const drinks=nav.querySelector('[data-go="drinks"]');nav.insertBefore(desserts,drinks||null);
 document.querySelectorAll('.hubLinks [data-go="menu"]').forEach(x=>x.remove());
 const menu=document.createElement('button');menu.dataset.go='menu';menu.textContent='Menu';nav.insertBefore(menu,food||nav.children[1]||null);
 const pop=document.createElement('div');pop.id='menuPopover';pop.hidden=true;pop.innerHTML=`<div class="menuPopHead"><b>Menu</b><small>Wybierz kategorię</small></div><div class="menuPopChoices"><button data-target="food">🍽️<span>Dania</span></button><button data-target="desserts">🍰<span>Desery</span></button><button data-target="drinks">🥤<span>Napoje</span></button></div>`;document.body.appendChild(pop);
 function go(target){if(typeof window.stolownikPage==='function'){window.stolownikPage(target);return}document.body.dataset.stolownikView=target;if(target==='desserts')document.getElementById('dessertCatalog')?.scrollIntoView({behavior:'smooth',block:'start'});else nav.querySelector(`[data-go="${target}"]`)?.click()}
 desserts.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();go('desserts')});
 function place(){const r=menu.getBoundingClientRect();pop.style.top=(r.bottom+10+scrollY)+'px';pop.style.left=Math.min(Math.max(12,r.left+scrollX),innerWidth-pop.offsetWidth-12)+'px'}
 menu.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();pop.hidden=!pop.hidden;if(!pop.hidden)requestAnimationFrame(place)});document.addEventListener('click',e=>{if(!pop.contains(e.target)&&e.target!==menu)pop.hidden=true});addEventListener('resize',()=>{if(!pop.hidden)place()});
 pop.addEventListener('click',e=>{const x=e.target.closest('[data-target]');if(!x)return;pop.hidden=true;go(x.dataset.target)});
 const s=document.createElement('style');s.id='menuPopStyle';s.textContent=`#menuPopover{position:absolute;z-index:9999;width:310px;padding:14px;background:#fff8ed;border:1px solid #d4b18a;border-radius:15px;box-shadow:0 22px 55px #29170f40;font-family:Manrope,system-ui,sans-serif}#menuPopover[hidden]{display:none!important}.menuPopHead{padding:4px 5px 12px;border-bottom:1px solid #ead5bc}.menuPopHead b{display:block;font:700 28px/1 'Cormorant Garamond',Georgia,serif;color:#38261e}.menuPopHead small{color:#8a705e}.menuPopChoices{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding-top:11px}.menuPopChoices button{min-height:82px;border:1px solid #dfc5a5;background:#f5e5d0;border-radius:10px;color:#4a3328;font-size:25px;cursor:pointer}.menuPopChoices button:hover{background:#8c472f;color:#fff;border-color:#8c472f}.menuPopChoices span{display:block;margin-top:6px;font-size:11px;font-weight:800}@media(max-width:600px){#menuPopover{position:fixed;width:auto;left:12px!important;right:12px;top:76px!important}}`;document.getElementById('menuPopStyle')?.remove();document.head.appendChild(s);
}
boot();
})();