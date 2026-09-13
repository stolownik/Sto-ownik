// Stołownik — czysty nagłówek i lepsze teksty v2
(function(){function clean(){
  document.querySelectorAll('.stats,.stat').forEach(x=>x.remove());
  document.querySelectorAll('header b,header span,header small,header div').forEach(el=>{const t=(el.textContent||'').replace(/\s+/g,' ').trim().toLowerCase();if(t==='50 przepisów'||t==='100% po polsku'||t.includes('50 przepisów 100% po polsku'))el.remove()});
  const top=document.querySelector('.top');if(top)top.textContent='Odkrywaj. Gotuj. Smakuj.';
  const brand=document.querySelector('.brand');if(brand)brand.textContent='Kuchnia bez granic';
  const lead=document.querySelector('.lead');if(lead)lead.textContent='Sprawdzone smaki z różnych stron świata, podane prosto i apetycznie.';
  const welcome=document.querySelector('#hubHome .welcome p');if(welcome)welcome.textContent='Znajdź coś wyjątkowego na dziś — od domowych klasyków po inspiracje z kuchni całego świata.';
  const title=document.querySelector('#hubHome .welcome h2');if(title)title.textContent='Smaki, do których chce się wracać.';
  const small=document.querySelector('#hubHome .welcome small');if(small)small.textContent='WITAJ PRZY STOLE';
  document.querySelectorAll('#hubHome .welcome aside').forEach(x=>x.remove());
  const w=document.querySelector('#hubHome .welcome');if(w)w.style.gridTemplateColumns='1fr';
}clean();setTimeout(clean,200);setTimeout(clean,900)})();