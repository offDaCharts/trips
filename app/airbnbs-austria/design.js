/* Presentation enhancements for the current comparison and nearby guides. */
(() => {
  const escape = nearbyEscape;
  const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n);
  const picks = [
    {number:1,label:'The value pick',title:'A cabin of your own',photo:0},
    {number:3,label:'The wellness pick',title:'Room to unwind',photo:0},
    {number:6,label:'The biggest reduction',title:'A little alpine luxury',photo:0}
  ];
  document.getElementById('editor-picks').innerHTML=picks.map(p=>{
    const s=austriaStays.find(s=>s.number===p.number);
    return `<a class="editor-pick" href="#stay-${s.id}"><div class="pick-image"><img src="${escape(s.photos[p.photo].src)}" alt="${escape(s.photos[p.photo].label)}" loading="lazy"><span class="pick-tag">${p.label}</span></div><div class="pick-content"><span class="eyebrow">${escape(s.place)} · ${escape(s.host)}</span><h3>${p.title}</h3><div class="pick-bottom"><div><strong>${money(s.total)} <small>/ 2 nights</small></strong><small>${money(s.total/2)} per night</small></div><span class="pick-arrow" aria-hidden="true">↗</span></div></div></a>`;
  }).join('');
  document.querySelectorAll('#price-rows tr').forEach((row,i)=>{
    const s=austriaStays[i];const a=row.querySelector('td a');if(!a)return;
    const img=document.createElement('img');img.className='table-thumb';img.src=s.photos[0].src;img.alt='';img.loading='lazy';a.before(img);a.classList.add('table-property');
  });
  function enhanceCards(){
    document.querySelectorAll('#cards .card-body').forEach(body=>{
      if(body.querySelector('.host-details'))return;
      const detail=document.createElement('details');detail.className='host-details';
      const summary=document.createElement('summary');summary.textContent='Host reply & offer details';detail.append(summary);
      const reply=body.querySelector('.reply');if(!reply)return;reply.before(detail);
      for(const selector of ['.reply','.note','.deadline']){const e=body.querySelector(selector);if(e)detail.append(e);}
    });
  }
  enhanceCards();new MutationObserver(enhanceCards).observe(document.getElementById('cards'),{childList:true});
  document.querySelectorAll('#area-index>a').forEach((link,i)=>{
    const area=austriaAreas[i];const img=document.createElement('img');img.className='area-index-photo';img.src=nearbyPhoto(area.activities[0]);img.alt='';img.loading='lazy';link.prepend(img);
  });
  document.querySelectorAll('.area-section').forEach((section,i)=>{
    const area=austriaAreas[i];const details=document.createElement('details');details.className='area-disclosure';details.open=i===0;
    const summary=document.createElement('summary');summary.innerHTML=`<img class="area-summary-thumb" src="${nearbyPhoto(area.activities[0])}" alt="" loading="lazy"><span><small>${area.stays.map(n=>'STAY '+n).join(' + ')} · ${area.activities.length} OUTING IDEAS</small><h3>${escape(area.name)}</h3></span>`;
    const content=document.createElement('div');content.className='area-detail-content';while(section.firstChild)content.append(section.firstChild);details.append(summary,content);section.append(details);
  });
  function revealArea(hash){if(!hash.startsWith('#nearby-'))return;const section=document.getElementById(hash.slice(1));const details=section?.querySelector('details');if(details)details.open=true;}
  document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#nearby-"]');if(a)revealArea(a.getAttribute('href'));});
  window.addEventListener('hashchange',()=>revealArea(location.hash));revealArea(location.hash);
  const top=document.createElement('a');top.href='#';top.className='scroll-top';top.textContent='↑';top.setAttribute('aria-label','Back to top');top.hidden=true;document.body.append(top);window.addEventListener('scroll',()=>{top.hidden=window.scrollY<900;},{passive:true});
})();
