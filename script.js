const nav=document.getElementById('navbar'),links=document.getElementById('navLinks'),ham=document.getElementById('hamburger'),glow=document.getElementById('cursorGlow')
addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',scrollY>20)
  let cur=''
  document.querySelectorAll('section[id]').forEach(s=>{
    if(scrollY>=s.offsetTop-140) cur=s.id
  })
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur)
  })
},{passive:true})
ham.onclick=()=>{
  ham.classList.toggle('open')
  links.classList.toggle('open')
}
document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>{
  ham.classList.remove('open');links.classList.remove('open')
})
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href')
    if(id.length>1){
      e.preventDefault()
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'})
    }
  })
})
let mx=0,my=0,tx=0,ty=0,shown=false
addEventListener('mousemove',e=>{
  tx=e.clientX;ty=e.clientY
  if(!shown){glow.style.opacity='1';shown=true}
})
;(function raf(){
  mx+=(tx-mx)*0.12;my+=(ty-my)*0.12
  glow.style.left=mx+'px';glow.style.top=my+'px'
  requestAnimationFrame(raf)
})()
addEventListener('mouseleave',()=>glow.style.opacity='0')
const obs=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting) e.target.classList.add('in')})
},{threshold:.12,rootMargin:'0px 0px -40px 0px'})
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))
const lb=document.createElement('div');lb.className='lightbox';lb.innerHTML='<span class="lightbox-close">×</span><img alt=""><span class="lightbox-cap"></span>';document.body.appendChild(lb);const lbImg=lb.querySelector('img'),lbCap=lb.querySelector('.lightbox-cap');function openLb(src,cap){lbImg.src=src;lbCap.textContent=cap||'';lbCap.style.display=cap?'block':'none';lb.classList.add('open');document.body.style.overflow='hidden'}function closeLb(){lb.classList.remove('open');document.body.style.overflow=''}lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('lightbox-close')||e.target===lbImg) closeLb()});addEventListener('keydown',e=>{if(e.key==='Escape') closeLb()});document.querySelectorAll('.dance-item').forEach(el=>{el.addEventListener('click',()=>{const img=el.querySelector('img');const cap=el.querySelector('figcaption')?.textContent||img.alt;openLb(img.src,cap)})});
const form=document.getElementById('contactForm'),msg=document.getElementById('formMsg')
if(form){form.onsubmit=e=>{
  e.preventDefault()
  const fd=new FormData(form)
  const name=fd.get('name').trim(),email=fd.get('email').trim(),message=fd.get('message').trim()
  let ok=true
  form.querySelectorAll('input,textarea').forEach(el=>el.classList.remove('invalid'))
  if(name.length<2){form.name.classList.add('invalid');ok=false}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){form.email.classList.add('invalid');ok=false}
  if(message.length<8){form.message.classList.add('invalid');ok=false}
  if(!ok){msg.textContent='Please fix highlighted fields.';msg.className='form-msg err';return}
  msg.textContent='Message sent! (demo — no backend). I will reply soon, Kris.';msg.className='form-msg ok'
  form.reset()
  setTimeout(()=>msg.textContent='',4000)
}}
const dropdowns=document.querySelectorAll('.dropdown')
function closeAllDropdowns(){
  dropdowns.forEach(d=>{
    d.querySelector('.dropdown-menu').classList.remove('show')
    d.querySelector('.dropdown-btn').classList.remove('open')
  })
}
dropdowns.forEach(d=>{
  const btn=d.querySelector('.dropdown-btn'),menu=d.querySelector('.dropdown-menu')
  btn.addEventListener('click',e=>{
    e.stopPropagation()
    const wasOpen=menu.classList.contains('show')
    closeAllDropdowns()
    if(!wasOpen){menu.classList.toggle('show');btn.classList.toggle('open')}
  })
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('show');btn.classList.remove('open')
  }))
})
document.addEventListener('click',e=>{
  if(!e.target.closest('.dropdown')) closeAllDropdowns()
})
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeAllDropdowns()})
