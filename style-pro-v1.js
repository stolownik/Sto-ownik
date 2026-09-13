// Stołownik — mobilna poprawka przepisu v7
(function(){
  const css=`
  @media(max-width:760px){
    body{overflow-x:hidden!important}
    .card,.drinkCard{border-radius:16px!important}
    .card .pad,.drinkBody{padding:18px!important}
    .card h3,.drinkBody h3{font-size:31px!important;line-height:1.02!important}
    .card p{font-size:16px!important;line-height:1.6!important}
    .card .open{display:block!important;width:100%!important;min-height:52px!important;margin-top:14px!important;padding:14px 16px!important;font-size:16px!important;text-align:center!important;position:relative!important;z-index:2!important}

    .modal{padding:0!important;align-items:stretch!important;justify-content:stretch!important;background:#1b110ddd!important;z-index:9999!important;overscroll-behavior:contain!important}
    .modal.show{display:flex!important}
    .sheet{width:100%!important;max-width:none!important;height:100dvh!important;max-height:100dvh!important;margin:0!important;border:0!important;border-radius:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;background:#fff9ef!important;overscroll-behavior:contain!important}
    .sheet>img{width:100%!important;height:230px!important;min-height:230px!important;object-fit:cover!important;display:block!important}
    .close{position:fixed!important;right:14px!important;top:calc(12px + env(safe-area-inset-top))!important;width:48px!important;height:48px!important;z-index:10002!important;border:1px solid #d8b994!important;background:#fff9eff2!important;color:#35231b!important;font-size:29px!important;line-height:1!important;box-shadow:0 8px 24px #1d100b42!important}
    .inside{padding:24px 18px calc(42px + env(safe-area-inset-bottom))!important}
    .inside h2{font-size:clamp(39px,11vw,50px)!important;line-height:.96!important;margin:12px 0 13px!important}
    .inside>p,#md{font-size:16px!important;line-height:1.65!important;color:#6e5849!important}
    .recipebar{display:grid!important;grid-template-columns:1fr!important;gap:10px!important;padding:15px!important;margin:20px 0!important}
    .recipebar label{font-size:15px!important}.recipebar input,.recipebar select{width:100%!important;min-height:48px!important;font-size:17px!important;padding:10px 12px!important}
    .nutrition{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;margin-bottom:22px!important}
    .nut{min-width:0!important;padding:12px 8px!important}.nut b{font-size:18px!important}.nut span{font-size:11px!important}
    .cols{display:grid!important;grid-template-columns:1fr!important;gap:18px!important}
    .inside h3{font-size:31px!important;line-height:1!important;margin:22px 0 14px!important}
    #ming{padding-left:21px!important;margin:0!important}#ming li{font-size:16px!important;line-height:1.55!important;margin-bottom:9px!important}
    .step{display:grid!important;grid-template-columns:58px minmax(0,1fr)!important;gap:11px!important;margin-bottom:16px!important;align-items:start!important}
    .stepmin{font-size:11px!important;padding:6px 5px!important;white-space:nowrap!important}.steptext{font-size:16px!important;line-height:1.6!important;padding-top:1px!important;overflow-wrap:anywhere!important}
  }
  @media(max-width:390px){
    .sheet>img{height:205px!important;min-height:205px!important}.inside{padding-left:15px!important;padding-right:15px!important}.inside h2{font-size:38px!important}.nutrition{grid-template-columns:1fr 1fr!important}.step{grid-template-columns:52px minmax(0,1fr)!important;gap:9px!important}
  }
  `;
  const s=document.createElement('style');s.id='mobileRecipeFixV7';s.textContent=css;document.head.appendChild(s);

  document.addEventListener('click',function(e){
    const btn=e.target.closest&&e.target.closest('.card .open');
    if(!btn)return;
    setTimeout(()=>{const m=document.getElementById('modal');if(m&&m.classList.contains('show')){document.body.dataset.recipeScroll=String(window.scrollY);document.body.style.overflow='hidden';const sh=m.querySelector('.sheet');if(sh)sh.scrollTop=0}},0);
  },true);

  const closeObserver=new MutationObserver(()=>{const m=document.getElementById('modal');if(!m||m.classList.contains('show'))return;if(document.body.style.overflow==='hidden'){document.body.style.overflow='';delete document.body.dataset.recipeScroll}});
  const modal=document.getElementById('modal');if(modal)closeObserver.observe(modal,{attributes:true,attributeFilter:['class']});
})();