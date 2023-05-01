const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
};

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

export default toggleMenu;