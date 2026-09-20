'use strict';
const gallery=document.querySelector('#lightbox');
let currentStay=null,currentIndex=0,opener=null;
function showPhoto(){const p=currentStay.images[currentIndex];document.querySelector('#photo-title').textContent=currentStay.name;const image=document.querySelector('#full-photo');image.src=p.src;image.alt=p.caption;document.querySelector('#photo-caption').textContent=`${currentIndex+1} / ${currentStay.images.length} · ${p.caption}`;}
function advance(step){currentIndex=(currentIndex+step+currentStay.images.length)%currentStay.images.length;showPhoto();}
document.querySelectorAll('.shot').forEach(button=>button.addEventListener('click',()=>{opener=button;currentStay=window.CHRISTMAS_STAYS.find(s=>s.key===button.dataset.stay);currentIndex=Number(button.dataset.index);showPhoto();gallery.showModal();}));
document.querySelector('#close').addEventListener('click',()=>gallery.close());
document.querySelector('#prev').addEventListener('click',()=>advance(-1));
document.querySelector('#next').addEventListener('click',()=>advance(1));
gallery.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();advance(-1)}if(event.key==='ArrowRight'){event.preventDefault();advance(1)}});
gallery.addEventListener('click',event=>{if(event.target===gallery){const r=gallery.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)gallery.close();}});
gallery.addEventListener('close',()=>opener?.focus());
