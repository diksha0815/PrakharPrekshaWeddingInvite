const hero = document.getElementById('hero');
const openInvite = document.getElementById('openInvite');
const content = document.getElementById('content');
const scrollTopBtn = document.getElementById('scrollTop');

function openInvitation(){
  if(hero.classList.contains('open')) return;
  hero.classList.add('open');
  setTimeout(() => {
    content.classList.add('show');
    content.scrollIntoView({behavior:'smooth'});
    revealItems();
  }, 1250);
}

openInvite.addEventListener('click', openInvitation);
openInvite.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' ') openInvitation();
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.14});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function revealItems(){
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    setTimeout(()=>el.classList.add('visible'), i*180);
  });
}

window.addEventListener('scroll', ()=>{
  scrollTopBtn.classList.toggle('show', window.scrollY > 700);
});
scrollTopBtn.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
