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
  const events = [
    {id:'market-vineyards',name:'Holiday Market Sip & Shop',place:'Newport Vineyards · Middletown',lat:41.5293214,lng:-71.2726634,date:'Sun Nov 29 · 11 am–4 pm',drive:'10–15 min from downtown Newport',link:'https://www.fieldofartisans.com/schedule',kind:'market'},
    {id:'market-german',name:'Christkindlmarkt',place:'German American Cultural Society · Pawtucket',lat:41.8826101,lng:-71.3607841,date:'Sat Nov 28 · noon–5 pm',drive:'55–70 min from downtown Newport',link:'https://www.gacsri.org/christkindlmarkt',kind:'market'},
    {id:'market-galilee',name:'Small Business Saturday Market',place:'George’s of Galilee · Narragansett',lat:41.3740233,lng:-71.4986831,date:'Sat Nov 28 · noon–4 pm',drive:'40–50 min from downtown Newport',link:'https://www.fieldofartisans.com/schedule',kind:'market'},
    {id:'lights-breakers',name:'Sparkling Lights at The Breakers',place:'The Breakers · Newport',lat:41.4697373,lng:-71.2982119,date:'Nov 27–29 during your stay · 4–8 pm',drive:'5–10 min from downtown Newport',link:'https://www.newportmansions.org/events/sparkling-lights-at-the-breakers-2026/',kind:'lights'}
  ];
  const list=document.querySelector('#map-stay-list');
  list.innerHTML=points.map(p=>`<article class="map-stay ${p.reference?'map-reference':''}"><button class="map-select" data-map-id="${p.id}" aria-label="Show ${esc(p.name)} on map"><img src="${esc(p.stay.photos[0].src)}" alt="" loading="lazy"><span><strong><b class="map-number">${p.number}</b> ${esc(p.name)}</strong><small>${esc(p.stay.town)}</small><span>${esc(p.stay.price)}</span></span></button><a class="map-detail" href="#${p.id}">Photos & details →</a></article>`).join('');
  list.insertAdjacentHTML('beforebegin',`<div class="map-events"><h3>Christmas markets &amp; lights</h3><p>One market is close to Newport; the other two are optional drives. Tap an event to locate it.</p><div class="map-event-grid">${events.map(e=>`<button class="map-event-card ${e.kind}" data-event-id="${e.id}"><b>${e.kind==='market'?'MARKET':'LIGHTS'}</b><strong>${esc(e.name)}</strong><span>${esc(e.date)}</span><small>${esc(e.drive)}</small></button>`).join('')}</div></div>`);
  const toolbarKey=document.querySelector('.map-toolbar p');
  if(toolbarKey)toolbarKey.insertAdjacentHTML('beforeend',' <span class="map-key-dot event"></span> Christmas markets &amp; lights');
  list.addEventListener('click',e=>{if(e.target.closest('a'))filter('all')});
  if(!window.L){document.querySelector('#stay-map').innerHTML='<p class="map-fallback">The interactive map could not load. The listings and their location links are below.</p>';list.insertAdjacentHTML('beforeend',points.map(p=>`<p><a href="https://maps.google.com/maps?ll=${p.lat},${p.lng}&z=13" target="_blank" rel="noreferrer">${esc(p.name)} · approximate area ↗</a></p>`).join(''));document.querySelectorAll('[data-map-id]').forEach(b=>b.disabled=true);document.querySelector('#map-reset').hidden=true;return;}
  const map=L.map('stay-map',{scrollWheelZoom:false});
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const bounds=L.latLngBounds([...points,...events].map(p=>[p.lat,p.lng]));
  const markers=new Map();
  points.forEach(p=>{
    const icon=L.divIcon({className:'stay-map-icon',html:`<span class="stay-map-pin ${p.reference?'reference-pin':''}">${p.number}</span>`,iconSize:[34,34],iconAnchor:[17,17]});
    const marker=L.marker([p.lat,p.lng],{icon,title:p.name,alt:p.name}).addTo(map);
    marker.bindPopup(`<div class="stay-popup"><img src="${esc(p.stay.photos[0].src)}" alt="${esc(p.name)}"><strong>${esc(p.name)}</strong><p>${esc(p.stay.price)}<br>Taxes included${p.reference?' · Dec 2–5 only':' · Nov 26–Dec 5'}</p><small>Approximate public listing location</small><p><a href="#${p.id}">Photos & details →</a> · <a href="${esc(p.stay.links[0][1])}" target="_blank" rel="noreferrer">Airbnb ↗</a></p></div>`,{maxWidth:270});
    marker.on('popupopen',e=>{e.popup.getElement().querySelector(`a[href="#${p.id}"]`).addEventListener('click',()=>filter('all'));document.querySelectorAll('[data-map-id]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapId===p.id)))});
    markers.set(p.id,marker);
  });
  events.forEach(e=>{
    const icon=L.divIcon({className:'event-map-icon',html:`<span class="event-map-pin ${e.kind}">${e.kind==='market'?'M':'✦'}</span>`,iconSize:[38,38],iconAnchor:[19,19]});
    const marker=L.marker([e.lat,e.lng],{icon,title:e.name,alt:e.name}).addTo(map);
    marker.bindPopup(`<div class="event-popup"><b>${e.kind==='market'?'CHRISTMAS MARKET':'HOLIDAY LIGHTS'}</b><strong>${esc(e.name)}</strong><span>${esc(e.place)}</span><p>${esc(e.date)}<br>${esc(e.drive)}</p><a href="${esc(e.link)}" target="_blank" rel="noreferrer">Official details ↗</a></div>`,{maxWidth:290});
    markers.set(e.id,marker);
  });
  map.on('popupclose',()=>document.querySelectorAll('[data-map-id]').forEach(b=>b.setAttribute('aria-pressed','false')));
  const reset=()=>{map.closePopup();map.fitBounds(bounds,{padding:[35,35],maxZoom:11,animate:false})};reset();
  document.querySelector('#map-reset').addEventListener('click',reset);
  list.addEventListener('click',e=>{const b=e.target.closest('[data-map-id]');if(!b)return;const marker=markers.get(b.dataset.mapId);map.setView(marker.getLatLng(),13,{animate:false});marker.openPopup();document.querySelector('#stay-map').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})});
  document.querySelector('.map-event-grid').addEventListener('click',e=>{const b=e.target.closest('[data-event-id]');if(!b)return;const marker=markers.get(b.dataset.eventId);map.setView(marker.getLatLng(),b.dataset.eventId==='market-german'?11:13,{animate:false});marker.openPopup();document.querySelector('#stay-map').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'})});
})();
