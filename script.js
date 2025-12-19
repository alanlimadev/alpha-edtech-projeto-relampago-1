// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.mobile-menu .nav-links a');

// Toggle menu ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Fechar menu ao clicar no botão X
closeMenu.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
