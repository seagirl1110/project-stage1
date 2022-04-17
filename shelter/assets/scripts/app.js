// burger-menu
const burger = document.querySelector('[data-js="burger"]');
const nav = document.querySelector('[data-js="nav"]');
const overlay = document.querySelector('[data-js="overlay"]');


burger.addEventListener('click', toggleMenu);

function toggleMenu() {
    burger.classList.toggle('burger--open');
    nav.classList.toggle('nav--open');
    overlay.classList.toggle('overlay--active')

}