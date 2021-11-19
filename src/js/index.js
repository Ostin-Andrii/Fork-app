const menuButton = document.querySelector('.drop-menu-button__image');
const dropMenu = document.querySelector('.nav__drop-menu');
dropMenu.hidden = true;
menuButton.addEventListener('click', toggleMenu);
window.addEventListener('click', hideMenu);

function toggleMenu (e) {
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    e.target.src = e.target.src.replace('button', 'button-close');
    dropMenu.hidden = false;
  } else {
    e.target.classList.add('active');
    e.target.src = e.target.src.replace('button-close', 'button');
    dropMenu.hidden = true;
  }
}

function hideMenu (e) {
  if (e.target != menuButton &&
  e.target != dropMenu) {
    dropMenu.hidden = true;
    menuButton.classList.add('active');
    menuButton.src = menuButton.src.replace('button-close', 'button');
  }
}
