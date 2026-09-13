const points = [
  {name:'Going Airbnb',kind:'local',lat:47.5162,lng:12.3315,image:'../airbnbs-austria/assets/nearby/astbergsee.jpg',line:'Your base today',detail:'Höhenleitweg 4 · local mountain day starts here.'},
  {name:'Astbergsee + Pony Alm',kind:'local',lat:47.5003,lng:12.3230,image:'../airbnbs-austria/assets/nearby/astbergsee.jpg',line:'5–10 min from base',detail:'Best before mid-afternoon; today is the final daily-operation date.'},
  {name:'Hintersteiner See',kind:'local',lat:47.5415,lng:12.2374,image:'../airbnbs-austria/assets/nearby/hintersteiner-see.jpg',line:'11 min from base',detail:'Best late-day lake alternative; short east-shore version is enough.'},
  {name:'Zell am See',kind:'transfer',lat:47.3234,lng:12.7980,image:'../austria/assets/zell-am-see.jpg',line:'1 hr 06 from Going · 25 min to hotel',detail:'The smart transfer-day bend: lake, town, boat or clear-sky summit.'},
  {name:'Naturhotel Forsthofgut',kind:'transfer',lat:47.4395,lng:12.7178,image:'../assets/alpine-family-resorts/forsthofgut-resort.jpg',line:'42 min direct from Going',detail:'Room guaranteed at 3 p.m.; earlier arrival can begin in the waldSPA.'},
  {name:'Wolfgangsee',kind:'detour',lat:47.7458,lng:13.4033,image:'../austria/assets/wolfgangsee.jpg',line:'2 hr 06 from Going · 2 hr 02 to hotel',detail:'Excellent place, wrong transfer: save it for a dedicated lake day.'},
  {name:'Hallstatt',kind:'detour',lat:47.5348,lng:13.5989,image:'../austria/assets/hallstatt.jpg',line:'2 hr 17 from Going · 1 hr 53 to hotel',detail:'The famous video opener, but more than four hours of transfer driving.'}
];
const map=L.map('map',{scrollWheelZoom:false}).setView([47.51,12.74],8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);
const icon=kind=>L.divIcon({className:'',html:`<div class="marker ${kind}"></div>`,iconSize:[34,34],iconAnchor:[17,34],popupAnchor:[0,-34]});
points.forEach(p=>L.marker([p.lat,p.lng],{icon:icon(p.kind)}).addTo(map).bindPopup(`<div class="popup"><img src="${p.image}" alt=""><div><span>${p.kind==='local'?'Today':p.kind==='transfer'?'Tomorrow':'Save it'}</span><h3>${p.name}</h3><b>${p.line}</b><p>${p.detail}</p></div></div>`,{maxWidth:260}));
L.polyline([[47.5162,12.3315],[47.4395,12.7178]],{color:'#fff',weight:4,dashArray:'8 10',opacity:.8}).addTo(map).bindTooltip('Direct · ~42 min');
L.polyline([[47.5162,12.3315],[47.3234,12.7980],[47.4395,12.7178]],{color:'#d99d45',weight:5,opacity:.92}).addTo(map).bindTooltip('Tomorrow via Zell · ~1 hr 31 driving');
map.fitBounds(L.latLngBounds(points.map(p=>[p.lat,p.lng])),{padding:[35,35]});
