'use strict';
const daily = Number(document.body.dataset.day || 0);
const base = daily ? '../' : './';
const assets = daily ? '../../../assets/nyc-thanksgiving/' : '../../assets/nyc-thanksgiving/';
const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
for(const button of document.querySelectorAll('[data-filter]')) button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  document.querySelectorAll('.stay-card').forEach(card=>{const f=button.dataset.filter;card.hidden=!(f==='all'||card.dataset.kind===f||(f==='view'&&card.dataset.kind==='luxury'));});
});
// Anchor navigation always reveals the requested hotel, even after filtering.
function revealHotel(){if(location.hash.startsWith('#stay-')){const card=document.getElementById(location.hash.slice(1));if(card?.hidden){document.querySelector('[data-filter="all"]')?.click();card.scrollIntoView();}}}
window.addEventListener('hashchange',revealHotel);revealHotel();
const form=document.getElementById('budget-form');
if(form){
  const value=id=>Math.max(0,Number(document.getElementById(id).value)||0);
  const update=()=>{
    const nights=Math.max(1,Math.min(14,value('nights'))), rate=value('nightly');
    const room=rate*nights,tax=room*.1475+nights*3.5;
    const entries=[['Room subtotal',room],['Modeled hotel taxes',tax],['Two adult flights',value('airfare')],['Baggage',value('baggage')],['Transfers + local',value('transport-cost')],['Meals + tips',value('food')],['Activities',value('activities')],['Fees / buffer',value('buffer')],['Optional Rue seat',value('child-seat')]];
    document.getElementById('total').textContent=money(entries.reduce((s,x)=>s+x[1],0));
    document.getElementById('budget-context').textContent=`${nights} nights · ${money(rate)} room rate · estimated family total`;
    document.getElementById('budget-lines').innerHTML=entries.map(([label,total])=>`<div><dt>${label}</dt><dd>${money(total)}</dd></div>`).join('');
    const warn=document.getElementById('minimum-warning');
    const hilton=[1095.5,1560,3250].includes(rate);warn.hidden=!(hilton&&nights<4);
    warn.textContent='This Hilton parade category has a four-night minimum. The shorter calculation is not a bookable package.';
  };
  document.getElementById('scenario').addEventListener('change',e=>{document.getElementById('nightly').value=e.target.value;update();});
  form.addEventListener('input',update);form.addEventListener('submit',e=>e.preventDefault());update();
}
const dialog=document.getElementById('lightbox');
if(dialog){
 const show=image=>{dialog.querySelector('img').src=image.src;dialog.querySelector('img').alt=image.alt;dialog.querySelector('p').textContent=image.closest('figure')?.querySelector('figcaption')?.textContent||image.alt;dialog.showModal();};
 document.querySelectorAll('figure img').forEach(img=>{
   if(img.closest('a'))return;
   img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label',`Enlarge photo: ${img.alt}`);img.addEventListener('click',()=>show(img));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(img);}});
 });
 document.getElementById('close-photo').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
}
(async()=>{
 const el=document.getElementById('trip-map');if(!el)return;
 try{
  if(!window.L)throw new Error('Map library unavailable');
  const response=await fetch(base+'data.json');if(!response.ok)throw new Error('Map data unavailable');const data=await response.json();
  const map=L.map(el,{scrollWheelZoom:false}).setView([40.767,-73.979],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const route=[[40.7794,-73.9732],[40.7678,-73.9819],[40.7676,-73.9815],[40.7673,-73.9809],[40.7675,-73.9797],[40.7652,-73.9743],[40.7498,-73.9876],[40.7509,-73.9901]];
  L.polyline(route,{color:'#b48745',weight:5,opacity:.85}).addTo(map).bindPopup('Traditional parade route. Final 2026 route and public access require official confirmation.');
  data.hotels.forEach(h=>L.marker([h.lat,h.lng],{icon:L.divIcon({className:'map-marker hotel-marker',html:'H',iconSize:[25,25]})}).addTo(map).bindPopup(`<b>${h.name}</b><br><a href="${base}#stay-${h.id}">Hotel comparison →</a>`));
  data.days.filter(d=>!daily||d.num===daily).forEach(d=>{
   const marker=L.marker(d.coords,{icon:L.divIcon({className:'map-marker',html:String(d.num),iconSize:[32,32]})}).addTo(map).bindPopup(`<b>Day ${d.num} · ${d.title}</b><br>${d.date}<img src="${assets+d.image}.jpg" alt="Day ${d.num} neighborhood"><a href="${base}day-${String(d.num).padStart(2,'0')}/">Full daily plan →</a>`);
   if(daily){map.setView(d.coords,14);marker.openPopup();}
  });
  if(!daily)map.fitBounds([[40.748,-73.991],[40.783,-73.967]],{padding:[25,25]});
 }catch(error){el.innerHTML='<div style="padding:35px"><h3>Map unavailable right now</h3><p>Use the location links on each hotel card and the official parade route linked below. The rest of the trip guide works without the map.</p></div>';}
})();
