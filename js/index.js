const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.add('active');  
});

const closeMenu = () => {
  menu.classList.remove('active');
};

const closeMenuBtn = document.querySelector('.nav__close-btn');
closeMenuBtn.addEventListener('click', closeMenu);

const menuItems = document.querySelectorAll('.nav__link');
menuItems.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('click', (e) => {
  const target = e.target;

  if (menu.classList.contains('active') && !target.closest('nav')) {
    closeMenu();
  }
});