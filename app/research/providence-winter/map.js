(() => {
  // Public Airbnb map centers, inspected October 4, 2026. Approximate, not arrival addresses.
  const points = [
    {id:'coast-sails',name:'Sails Up Sea Cottage',lat:41.623,lng:-71.2239},
    {id:'coast-cove',name:'Cove-Cottage',lat:41.63036,lng:-71.2293},
    {id:'coast-lincoln',name:'25 Lincoln · Jamestown',lat:41.49558,lng:-71.36808},
    {id:'coast-salty',name:'The Salty Dog',lat:41.64454,lng:-71.21891},
    {id:'coast-harborloft',name:'Newport Lofts',lat:41.47786,lng:-71.31525},
    {id:'coast-reference',name:'Your reference cottage',lat:41.5851,lng:-71.243,reference:true}
  ].map((p,i)=>({...p,number:i+1,stay:stays.find(s=>s.id===p.id)}));
  const list=document.querySelector('#map-stay-list');
  list.innerHTML=points.map(p=>`<article class="map-stay ${p.reference?'map-reference':''}"><button class="map-select" data-map-id="${p.id}" aria-label="Show ${esc(p.name)} on map"><img src="${esc(p.stay.photos[0].src)}" alt="" loading="lazy"><span><strong><b class="map-number">${p.number}</b> ${esc(p.name)}</strong><small>${esc(p.stay.town)}</small><span>${esc(p.stay.price)}</span></span></button><a class="map-detail" href="#${p.id}">Photos & details →</a></article>`).join('');
  list.addEventListener('click',e=>{if(e.target.closest('a'))filter('all')});
  if(!window.L){document.querySelector('#stay-map').innerHTML='<p class="map-fallback">The interactive map could not load. The listings and their location links are below.</p>';list.insertAdjacentHTML('beforeend',points.map(p=>`<p><a href="https://maps.google.com/maps?ll=${p.lat},${p.lng}&z=13" target="_blank" rel="noreferrer">${esc(p.name)} · approximate area ↗</a></p>`).join(''));document.querySelectorAll('[data-map-id]').forEach(b=>b.disabled=true);document.querySelector('#map-reset').hidden=true;return;}
  const map=L.map('stay-map',{scrollWheelZoom:false});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const bounds=L.latLngBounds(points.map(p=>[p.lat,p.lng]));
  const markers=new Map();
  points.forEach(p=>{
    const icon=L.divIcon({className:'stay-map-icon',html:`<span class="stay-map-pin ${p.reference?'reference-pin':''}">${p.number}</span>`,iconSize:[34,34],iconAnchor:[17,17]});
    const marker=L.marker([p.lat,p.lng],{icon,title:p.name,alt:p.name}).addTo(map);
    marker.bindPopup(`<div class="stay-popup"><img src="${esc(p.stay.photos[0].src)}" alt="${esc(p.name)}"><strong>${esc(p.name)}</strong><p>${esc(p.stay.price)}<br>Taxes included${p.reference?' · Dec 2–5 only':' · Nov 26–Dec 5'}</p><small>Approximate public listing location</small><p><a href="#${p.id}">Photos & details →</a> · <a href="${esc(p.stay.links[0][1])}" target="_blank" rel="noreferrer">Airbnb ↗</a></p></div>`,{maxWidth:270});
    marker.on('popupopen',e=>{e.popup.getElement().querySelector(`a[href="#${p.id}"]`).addEventListener('click',()=>filter('all'));document.querySelectorAll('[data-map-id]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapId===p.id)))});
    markers.set(p.id,marker);
  });
  map.on('popupclose',()=>document.querySelectorAll('[data-map-id]').forEach(b=>b.setAttribute('aria-pressed','false')));
  const reset=()=>{map.closePopup();map.fitBounds(bounds,{padding:[35,35],maxZoom:11,animate:false})};reset();
  document.querySelector('#map-reset').addEventListener('click',reset);
  list.addEventListener('click',e=>{const b=e.target.closest('[data-map-id]');if(!b)return;const marker=markers.get(b.dataset.mapId);map.setView(marker.getLatLng(),13,{animate:false});marker.openPopup();document.querySelector('#stay-map').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})});
})();
