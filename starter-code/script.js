const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.icon-close');
const hamburgerIcon = document.querySelector('.icon-hamburger');
hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('hide');
  hamburgerIcon.classList.remove('show');
  closeIcon.classList.toggle('show');
  closeIcon.classList.remove('hide');
  navLinks.classList.toggle('active');
});
closeIcon.addEventListener('click', () => {
  closeIcon.classList.toggle('hide');
  closeIcon.classList.remove('show');
  hamburgerIcon.classList.toggle('show');
  hamburgerIcon.classList.remove('hide');
  navLinks.classList.remove('active');
});