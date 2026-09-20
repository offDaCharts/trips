(() => {
  const cards = [...document.querySelectorAll('.hotel')];
  const key = 'nyc-parade-ideas-2026';
  let saved = new Set(), filter = 'all';
  try { const value = JSON.parse(localStorage.getItem(key) || '[]'); if (Array.isArray(value)) saved = new Set(value.filter(id => cards.some(c => c.id === id))); } catch {}
  const refresh = () => {
    let visible = 0;
    cards.forEach(card => {
      const selected = saved.has(card.id), button = card.querySelector('.save');
      button.setAttribute('aria-pressed', String(selected));
      button.textContent = selected ? '♥ Saved' : '♡ Save idea';
      card.hidden = !(filter === 'all' || (filter === 'saved' ? selected : card.dataset.kind === filter));
      if (!card.hidden) visible++;
    });
    document.querySelector('#save-count').textContent = saved.size;
    document.querySelector('#result-count').textContent = `${visible} ${visible === 1 ? 'idea' : 'ideas'}`;
    document.querySelector('#empty').hidden = visible !== 0;
  };
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    refresh();
  }));
  document.querySelectorAll('.save').forEach(button => button.addEventListener('click', () => {
    saved.has(button.dataset.id) ? saved.delete(button.dataset.id) : saved.add(button.dataset.id);
    try { localStorage.setItem(key, JSON.stringify([...saved])); } catch {}
    refresh();
  }));
  cards.forEach(card => card.querySelectorAll('.thumb').forEach(button => button.addEventListener('click', () => {
    const img = card.querySelector('.main-photo');
    img.src = '../../assets/nyc-thanksgiving/' + button.dataset.image;
    img.alt = button.dataset.caption;
    card.querySelector('.caption').textContent = button.dataset.caption;
    card.querySelectorAll('.thumb').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  })));
  const dialog = document.querySelector('#photo-dialog');
  const enlarge = (img, caption) => {
    dialog.querySelector('img').src = img.src;
    dialog.querySelector('img').alt = caption;
    dialog.querySelector('p').textContent = caption;
    dialog.showModal();
  };
  cards.forEach(card => card.querySelector('.zoom').addEventListener('click', () => enlarge(card.querySelector('.main-photo'), card.querySelector('.caption').textContent)));
  document.querySelectorAll('.gallery-zoom').forEach(button => button.addEventListener('click', () => enlarge(button.querySelector('img'), button.dataset.caption)));
  document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if(e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }});
  refresh();
})();
