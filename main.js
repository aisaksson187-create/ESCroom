const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.querySelector('.close-menu');
const overlay = document.querySelector('.overlay');

function openMenu(){
  mobileMenu.classList.remove('closing');
  mobileMenu.classList.add('open');
  overlay.classList.add('active');
  mobileMenu.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  hamburger.setAttribute('aria-expanded','true');
}

function closeMenu(){
  mobileMenu.classList.remove('open');
  overlay.classList.remove('active'); 
  mobileMenu.classList.add('closing');
  document.body.classList.remove('no-scroll');
  hamburger.setAttribute('aria-expanded','false');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);