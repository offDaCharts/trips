/* Extend the existing static comparison; no booking or listing data changed. */
const nearbyEscape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nearbyAreaFor = stay => austriaAreas.find(area => area.stays.includes(stay.number));
const nearbyPhoto = activity => activity.photo ? `./assets/nearby/${activity.photo}.jpg` : `../austria/assets/${activity.video}.jpg`;
const nearbyExternal = (url, label) => `<a href="${nearbyEscape(url)}" target="_blank" rel="noopener noreferrer">${nearbyEscape(label)} ↗</a>`;
function attachNearbyLinks() {
  austriaStays.forEach(stay => {
    const card = document.getElementById(`stay-${stay.id}`);
    const area = nearbyAreaFor(stay);
    if (!card || !area) return;
    const link = document.createElement('a');
    link.className = 'stay-nearby';
    link.href = `#nearby-${area.id}`;
    link.innerHTML = `<span>Things to do around this stay</span><strong>${nearbyEscape(area.activities.slice(0,2).map(a=>a.name).join(' · '))} →</strong>`;
    card.querySelector('.card-body').append(link);
  });
}
(() => {
  const e = nearbyEscape;
  document.getElementById('area-index').innerHTML = austriaAreas.map(area => `<a href="#nearby-${area.id}"><span class="eyebrow">Airbnb ${area.stays.map(n=>'#'+n).join(' + ')}</span><h3>${e(area.name)}</h3><p>${e(area.tagline)}</p><span class="area-index-link">See walks & outings ↓</span></a>`).join('');
  function photoCredit(activity) {
    if (activity.video) return `${nearbyExternal(`https://www.youtube.com/watch?v=tl223Zu09CE&t=${activity.seconds}s`,'Ryan Shirley · video frame')} · from your existing Austria guide`;
    const [creator, license, licenseUrl, source] = austriaNearbyCredits[activity.photo];
    return `${nearbyExternal(source,creator)} · ${nearbyExternal(licenseUrl,license)} · resized; card display cropped, full photo unchanged`;
  }
  document.getElementById('nearby-content').innerHTML = austriaAreas.map(area => `<article class="area-section" id="nearby-${area.id}">
    <div class="area-heading"><div><p class="eyebrow">${area.stays.map(n=>`Airbnb #${n}`).join(' + ')}</p><h3>${e(area.name)}</h3><p class="area-tagline">${e(area.tagline)}</p></div><div class="area-stays">${area.stays.map(n=>{const s=austriaStays.find(s=>s.number===n);return `<a href="#stay-${s.id}">#${n} ${e(s.host)} · view stay ↑</a>`;}).join('')}</div></div>
    <p class="area-summary">${e(area.summary)}</p>
    <div class="area-context"><div><h4>Immediately around the area</h4><p>${e(area.immediate)}</p></div><div><h4>A realistic two-night version</h4><p>${e(area.plan)}</p></div></div>
    <div class="date-note"><h4>For your September 12–14 dates</h4><p>${e(area.seasonal)}</p><div class="activity-links">${area.seasonalLinks.map(([label,url])=>nearbyExternal(url,label)).join('')}</div></div>
    <div class="activity-grid">${area.activities.map((activity,index)=>`<article class="activity-card">
      <button class="activity-photo" data-area="${area.id}" data-activity="${index}" aria-label="Enlarge photo of ${e(activity.name)}"><img src="${nearbyPhoto(activity)}" alt="${e(activity.alt || activity.name+' — Ryan Shirley video frame')}" loading="lazy" decoding="async" width="1280" height="853"><span>Enlarge photo ↗</span></button>
      <div class="activity-body"><p class="activity-origin">${activity.video?'From Ryan’s video':'More to do nearby'}</p><h4>${e(activity.name)}</h4><p class="activity-access">${e(activity.access)}</p><p class="activity-duration">Time to allow: ${e(activity.duration)}</p><p>${e(activity.description)}</p><p class="activity-family"><strong>With your infant:</strong> ${e(activity.family)}</p><div class="activity-links">${nearbyExternal(activity.official,'Official details')}${nearbyExternal('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(activity.query),'Find on map')}${activity.video?`<a href="../austria/#place-${activity.video}">Video guide →</a>${nearbyExternal('https://www.youtube.com/watch?v=tl223Zu09CE&t='+activity.seconds+'s','Watch this part')}`:''}</div><p class="photo-credit">${photoCredit(activity)}</p></div>
    </article>`).join('')}</div>
    ${area.extra?`<aside class="area-extra"><h4>${e(area.extraTitle)}</h4><p>${e(area.extra)}</p>${nearbyExternal(area.extraLink,'Official information')}</aside>`:''}
    <a class="back-to-areas" href="#area-index">↑ Compare the six areas</a>
  </article>`).join('');
})();
