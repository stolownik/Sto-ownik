// Usuwa pozostałości starego menu po wcześniejszych modułach.
(function clean(){
  const wanted=['moja kuchnia','inspiracje'];
  document.querySelectorAll('button,a').forEach(el=>{
    const t=(el.textContent||'').trim().toLowerCase();
    if(wanted.includes(t)) el.remove();
  });
  const fridge=document.getElementById('fridgeBox');
  if(fridge) fridge.remove();
  const ideas=document.getElementById('hubIdeas');
  if(ideas) ideas.remove();
  setTimeout(clean,500);
})();