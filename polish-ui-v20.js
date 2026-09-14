// Stołownik — polish UI v20: typografia, animacje, przyciski i bezpieczne testy runtime.
(function(){
'use strict';
const css=`
:root{--ease-out:cubic-bezier(.22,1,.36,1);--ring:#d4875a66}
body{font-kerning:normal;text-rendering:optimizeLegibility}
button,a,.card,.drinkCard,.worldCard,.galleryItem,.featuredDish,.hubTiles button{transition:transform .24s var(--ease-out),box-shadow .24s var(--ease-out),border-color .24s ease,background-color .24s ease,opacity .2s ease!important}
button{position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}
button:not(:disabled):active{transform:translateY(1px) scale(.985)!important}
button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--ring)!important;outline-offset:3px!important}
.hubLinks button:after,.heroActions button:after,.homeFinal button:after,.worldAll:after,.open:after,.drinkOpen:after,.surprise:after,.daybtn:after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 25%,#fff3 48%,transparent 72%);transform:translateX(-130%);transition:transform .55s var(--ease-out);pointer-events:none}
.hubLinks button:hover:after,.heroActions button:hover:after,.homeFinal button:hover:after,.worldAll:hover:after,.open:hover:after,.drinkOpen:hover:after,.surprise:hover:after,.daybtn:hover:after{transform:translateX(130%)}
.hubLinks button:hover,.heroActions button:hover,.homeFinal button:hover,.worldAll:hover,.open:hover,.drinkOpen:hover,.surprise:hover,.daybtn:hover{transform:translateY(-2px)!important;box-shadow:0 13px 27px #35190f2b!important}
.card:hover,.drinkCard:hover,.worldCard:hover,.galleryItem:hover,.hubTiles button:hover{transform:translateY(-6px)!important;box-shadow:0 22px 44px #4c2c1b24!important}
.card img,.drinkCard img,.galleryItem img,.worldPhoto img,.featuredDish img{transition:transform .55s var(--ease-out),filter .4s ease!important}
.card:hover img,.drinkCard:hover img,.galleryItem:hover img,.worldCard:hover img{transform:scale(1.035)!important}
.featuredDish{isolation:isolate}.featuredDish:after{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px #fff2;pointer-events:none;z-index:4}.featuredDish:hover{transform:translateY(-3px)!important;box-shadow:0 34px 64px #1a0d0759!important}.featuredDish:hover img{transform:scale(1.018)!important}
.featuredLabel{backdrop-filter:blur(10px);box-shadow:0 8px 20px #26130d22}.featuredInfo h2{letter-spacing:-.025em!important;text-wrap:balance}.restaurantHero h1,.sectionIntro h2,.worldHead h2,.homeQuote blockquote,.homeFinal h2{text-wrap:balance}
.eyebrow{letter-spacing:.2em!important}.card h3,.drinkBody h3{letter-spacing:-.025em!important}.card p,.drinkBody p,.worldBody p{line-height:1.68!important}
.hubNav{transition:box-shadow .3s ease,background .3s ease!important}.hubNav:hover{box-shadow:0 20px 48px #24150d42!important}
@keyframes stolownikRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
#hubHome .heroCopy,#hubHome .featuredDish{animation:stolownikRise .7s var(--ease-out) both}#hubHome .featuredDish{animation-delay:.08s}
.worldCard,.hubTiles button{animation:stolownikRise .5s var(--ease-out) both}.worldCard:nth-child(2),.hubTiles button:nth-child(2){animation-delay:.05s}.worldCard:nth-child(3),.hubTiles button:nth-child(3){animation-delay:.1s}.worldCard:nth-child(4),.hubTiles button:nth-child(4){animation-delay:.15s}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
@media(max-width:760px){.hubLinks{width:100%;overflow-x:auto;flex-wrap:nowrap!important;padding-bottom:3px;scrollbar-width:none}.hubLinks::-webkit-scrollbar{display:none}.hubLinks button{flex:0 0 auto}.restaurantHero h1{line-height:1!important}.featuredInfo h2{font-size:34px!important}}
`;
function style(){if(document.getElementById('polishUiV20Style'))return;const s=document.createElement('style');s.id='polishUiV20Style';s.textContent=css;document.head.appendChild(s)}
function runtimeCheck(){const problems=[];if(!document.querySelector('#siteHub'))problems.push('siteHub');if(!document.querySelector('.hubNav'))problems.push('navigation');if(typeof R==='undefined'||!Array.isArray(R)||!R.length)problems.push('recipes');if(document.body.dataset.stolownikView!=='food'&&document.querySelector('main>.grid:not([hidden])'))problems.push('recipe-grid-outside-food');const daily=document.querySelector('#hubHome .featuredDish');if(!daily)problems.push('daily-dish-card');if(problems.length)console.warn('[Stołownik test]',problems.join(', '));else console.info('[Stołownik test] podstawowe elementy OK')}
function boot(){style();setTimeout(runtimeCheck,900);setTimeout(runtimeCheck,2500)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();