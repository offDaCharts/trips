const filters=[...document.querySelectorAll('[data-filter]')];
function filter(area){filters.forEach(b=>{const on=b.dataset.filter===area;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});let count=0;document.querySelectorAll('.stay').forEach(c=>{c.hidden=area!=='all'&&c.dataset.area!==area;if(!c.hidden)count++});document.querySelector('#count').textContent=`Showing ${count} ${count===1?'stay':'stays'}`}
filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
document.querySelectorAll('.area a').forEach(a=>a.addEventListener('click',()=>filter('all')));
const dialog=document.querySelector('#lightbox');let opener;
document.querySelectorAll('[data-image]').forEach(b=>b.addEventListener('click',()=>{opener=b;document.querySelector('#large').src=b.dataset.image;document.querySelector('#large').alt=b.dataset.caption;document.querySelector('#caption').textContent=b.dataset.caption;dialog.showModal()}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>opener?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
