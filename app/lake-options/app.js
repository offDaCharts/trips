const places=[
  {name:'Going',kind:'base',lat:47.5162,lng:12.3315,img:'../airbnbs-austria/assets/nearby/astbergsee.jpg',time:'Your base',note:'Start: Höhenleitweg 4'},
  {name:'Naturhotel Forsthofgut',kind:'base',lat:47.4395,lng:12.7178,img:'../assets/alpine-family-resorts/forsthofgut-resort.jpg',time:'Tomorrow’s hotel',note:'Leogang · check-in from 3 p.m.'},
  {name:'Hintersteiner See',kind:'go',lat:47.5415,lng:12.2374,img:'./assets/hintersteiner-see.jpg',time:'11m from Going · 50m to hotel',note:'The easy local lake'},
  {name:'Achensee',kind:'go',lat:47.443,lng:11.704,img:'./assets/achensee.jpg',time:'57m from Going · 1h 36 to hotel',note:'Best substantial lake day'},
  {name:'Obernberger See',kind:'maybe',lat:47.016,lng:11.421,img:'./assets/obernberger-see.jpg',time:'1h 41 from Going · 2h 21 to hotel',note:'High valley + chapel; approach walk'},
  {name:'Piburger See',kind:'maybe',lat:47.188,lng:10.887,img:'./assets/piburger-see.jpg',time:'1h 54 from Going · 2h 33 to hotel',note:'Quiet, forested and intimate'},
  {name:'Plansee',kind:'no',lat:47.472,lng:10.807,img:'./assets/plansee.jpg',time:'2h 31 from Going · 3h 11 to hotel',note:'Beautiful but decisively west'},
  {name:'Lünersee',kind:'no',lat:47.06,lng:9.754,img:'./assets/lunersee.jpg',time:'3h 09 from Going · 3h 47 to hotel',note:'A separate Vorarlberg expedition'}
];
const map=L.map('map',{scrollWheelZoom:false}).setView([47.35,11.4],8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);
const icon=kind=>L.divIcon({className:'',html:`<div class="marker ${kind}"></div>`,iconSize:[32,32],iconAnchor:[16,32],popupAnchor:[0,-31]});
places.forEach(p=>L.marker([p.lat,p.lng],{icon:icon(p.kind)}).addTo(map).bindPopup(`<div class="popup"><img src="${p.img}" alt=""><div><span>${p.note}</span><h3>${p.name}</h3><p>${p.time}</p></div></div>`,{maxWidth:240}));
L.polyline([[47.5162,12.3315],[47.4395,12.7178]],{color:'#fff',weight:4,dashArray:'8 10',opacity:.85}).addTo(map).bindTooltip('Direct transfer · 42 min');
map.fitBounds(L.latLngBounds(places.map(p=>[p.lat,p.lng])),{padding:[35,35]});
