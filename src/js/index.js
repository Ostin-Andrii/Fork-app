const menuButton = document.querySelector('.head-menu-button');
console.log(menuButton);
const dropMenu = document.querySelector('.nav__drop-menu');
dropMenu.hidden = true;
menuButton.addEventListener('click', toggleMenu);

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
