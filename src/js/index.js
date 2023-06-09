'use strict';

const menuButton = document.querySelector('.drop-menu-button__image');
const dropMenu = document.querySelector('.nav__drop-menu');
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('click', hideMenu);

function toggleMenu (e) {
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    e.target.src = e.target.src.replace('button', 'button-close');
    dropMenu.classList.remove('nav__hidden');
  } else {
    e.target.classList.add('active');
    e.target.src = e.target.src.replace('button-close', 'button');
    dropMenu.classList.add('nav__hidden');
  }
}

function hideMenu (e) {
  if (e.target !== menuButton &&
  e.target !== dropMenu &&
  !e.target.classList.contains('nav__drop-menu-link')
  ) {
    dropMenu.classList.add('nav__hidden');
    menuButton.classList.add('active');
    menuButton.src = menuButton.src.replace('button-close', 'button');
  }
}
