const viewer=document.getElementById('photo-viewer');
const allShots=[...document.querySelectorAll('.shot button')];
let shots=[];
let active=0,opener=null;
function showPhoto(index){active=(index+shots.length)%shots.length;const button=shots[active];const photo=button.querySelector('img');document.getElementById('large-photo').src=photo.src;document.getElementById('large-photo').alt=photo.alt;document.getElementById('photo-caption').textContent=button.dataset.caption;document.getElementById('photo-source').href=button.dataset.source;document.getElementById('photo-count').textContent=button.dataset.album+' · '+(active+1)+' / '+shots.length;}
allShots.forEach(button=>button.addEventListener('click',()=>{opener=button;shots=allShots.filter(s=>s.dataset.album===button.dataset.album);showPhoto(shots.indexOf(button));viewer.showModal();}));
document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
document.getElementById('prev-photo').addEventListener('click',()=>showPhoto(active-1));
document.getElementById('next-photo').addEventListener('click',()=>showPhoto(active+1));
viewer.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(active+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(active-1);}});
viewer.addEventListener('close',()=>opener?.focus({preventScroll:true}));
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
let touchX=0;const stage=document.querySelector('.lightbox-stage');stage.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});stage.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;if(Math.abs(delta)>60)showPhoto(active+(delta<0?1:-1));},{passive:true});
const nav=[...document.querySelectorAll('.tabs a')];if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)nav.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('.album').forEach(s=>observer.observe(s));}
