const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%';});
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelector('.menu').addEventListener('click',()=>{const nav=document.querySelector('.nav nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#0b0b0b';nav.style.flexDirection='column';});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')},{threshold:.12});
document.querySelectorAll('section').forEach(s=>{s.style.transition='opacity .8s ease,transform .8s ease';s.style.opacity='0';s.style.transform='translateY(18px)';io.observe(s);});
const style=document.createElement('style');style.textContent='section.in{opacity:1!important;transform:none!important}';document.head.appendChild(style);
