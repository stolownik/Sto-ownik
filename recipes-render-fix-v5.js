(function(){
const IM={
4:'https://obiadystaroprzygodzka.pl/zdj/dania/377_1773999822_a0a3adc0.jpg',
13:'https://www.polana.com/cdn/shop/files/POLISH_Golabki_-_Stuffed_Cabbage_with_Rice_Mushroom_Topped_with_Tomato_Sauce.png?v=1751050224',
16:'https://i.lezzet.com.tr/images-xxlarge-recipe/zapiekanka-9540b125-2c23-4cd2-947c-3cfc00efce10.jpg',
26:'https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/omelette_with_vegetables.jpg',
27:'https://sandwichstand.ca/cdn/shop/products/ScreenShot2021-09-13at5.02.11PM.png?v=1669655027',
28:'https://www.intermarche.be/files/uploads/2022/08/recettes_belges_2016_06-1.jpg',
29:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
30:'https://i.lezzet.com.tr/images-800x600/c4be2b25-dffa-4d2e-b925-494b284d88be-52a42693-07f0-4970-afb2-1b2f6ec2b1ed',
31:'https://wineflavorguru.com/wp-content/uploads/2025/08/Barley-Soup-with-Carrots-and-Celery.jpg',
32:'https://m1.quebecormedia.com/emp/cdp_prod/coup_de_pouce-_-535e40fa20b0fe3d7875be1fca9cd1fce6aef359-_-ragout.jpg?height=1500&impolicy=resize&width=1500',
33:'https://cdn-ru.bitrix24.ru/b21530842/landing/e75/e752083b7982e7bfc7dd1bb97e4f41e8/sausage_and_cabbage_stew_bigos_2_1x.jpg',
34:'https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/1306/kopytka.jpg',
35:'https://cocoastone.com/cdn-cgi/image/fit%3Dcontain%2Cwidth%3D768%2Cquality%3D80%2Cformat%3Dauto/assets/images/1766207079447-ne3x2qwv.webp',
36:'https://itsonly.recipes/images/recipeimages/pesto-pasta.webp',
37:'https://tb-static.uber.com/prod/image-proc/processed_images/a5f838a6ddce9c4610b2e1fed79f1c25/5143f1e218c67c20fe5a4cd33d90b07b.jpeg',
38:'https://www.cucinabyelena.com/wp-content/uploads/2020/09/Polpette-Traditional-Italian-Meatballs-28.jpg',
39:'https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chicken_with_creamy_mushroom_sauce.jpg',
40:'https://media.hellofresh.com/q_100%2Cw_3840%2Cf_auto%2Cc_limit%2Cfl_lossy/recipes/image/HF_Y24_R14_BW49_SE_C32882-1_Main_low-6f04a653.jpg',
41:'https://img.toprecept.sk/fotorecept/1x1/Zdravy-kuraci-salat-s-jogurtovym-dresingom-68ca9d7c67804_thumb.png',
42:'https://topassiette.com/assets/images/1739800102994-9ulf23j9.webp',
43:'https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/tortilla_wrap.jpg',
44:'https://itsonly.recipes/images/recipeimages/vegetable-quesadillas.webp',
45:'https://cdn.stoneline.de/thumbnail/cd/43/2a/1772800651/kartoffelgratin-mit-brokkoli-einfaches-ofengericht_1920x1920.jpg?ts=1772800652',
46:'https://www.mashed.com/img/gallery/3-bean-vegetarian-chili/enjoy-this-meal-tonight-and-bonus-it-makes-great-leftovers-1605637609.jpg',
47:'https://sidssauce.co.nz/cdn/shop/files/FluffyBananaPancakes.jpg?v=1724375201&width=1445',
48:'https://cdn.reishunger.com/milchreis-apfel-zimt.jpg?height=1200&quality=90&width=1800',
49:'https://www.sprinklesbakeandparty.co.za/cdn/shop/files/American_Brownie_Mix_1kg_1200x1200.png?v=1754409495',
50:'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/6072372857e95da01ca47468934e27e4.jpg'
};
function apply(){
 if(typeof R==='undefined') return setTimeout(apply,80);
 if(R.length<50) return setTimeout(apply,80);
 R.forEach(r=>{if(IM[r.id])r.img=IM[r.id]});
 const h=document.getElementById('heroCount'); if(h)h.textContent=R.length;
 if(typeof drawCats==='function')drawCats();
 if(typeof draw==='function')draw();
}
apply();
})();