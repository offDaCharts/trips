(() => {
  const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
  const params='check_in=2026-09-12&check_out=2026-09-14&adults=2&infants=1';
  for(const city of ['bolzano','vipiteno','innsbruck']){
    document.getElementById(`${city}-stays`).innerHTML=pivotData.stays[city].map(s=>`<article class="stay-card"><a class="stay-photo" href="https://www.airbnb.com/rooms/${s.id}?${params}" target="_blank" rel="noopener noreferrer"><img src="${s.photo}" alt="${s.title}" loading="lazy"><span>${s.badge}</span></a><div class="stay-copy"><p class="kicker">${s.type}</p><h4>${s.title}</h4><div class="price"><strong>${money(s.price)}</strong><span>for 2 nights · all fees included</span>${s.original?`<del>${money(s.original)}</del>`:''}</div><p>${s.beds}</p><p>★ ${s.rating}</p><p class="cancel ${s.cancel?'yes':''}">${s.cancel?'Free cancellation shown':'Free cancellation not shown in search result'}</p><a class="button" href="https://www.airbnb.com/rooms/${s.id}?${params}" target="_blank" rel="noopener noreferrer">Check live listing ↗</a></div></article>`).join('');
  }
})();
