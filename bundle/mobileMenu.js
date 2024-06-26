const hamburger = document.getElementById('hamburger');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

export const closeMenu = () => {
  mobileMenu.classList.add('hide');
};

export const openMenu = () => {
  mobileMenu.classList.remove('hide');
};

hamburger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});