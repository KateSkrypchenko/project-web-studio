import { refs } from './refs.js';

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.menuList.addEventListener('click', removeMenu);

function toggleMenu() {
  refs.menu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function removeMenu() {
  refs.menu.classList.add('is-hidden');
}
