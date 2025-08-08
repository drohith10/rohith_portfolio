// Reveal animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
    }
  });
},{threshold:0.12});

revealElements.forEach(el=>observer.observe(el));

// Floating hero image
const hero = document.querySelector('.hero-image');
if(hero){
  document.addEventListener('mousemove',(e)=>{
    const x = (e.clientX - window.innerWidth/2)/40;
    const y = (e.clientY - window.innerHeight/2)/60;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle && navToggle.addEventListener('click', ()=>{
  if(navLinks.style.display === 'flex') navLinks.style.display = '';
  else navLinks.style.display = 'flex';
});
