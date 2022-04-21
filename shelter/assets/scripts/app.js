// burger-menu
const body = document.body;
const burger = document.querySelector('[data-js="burger"]');
const nav = document.querySelector('[data-js="nav"]');
const overlay = document.querySelector('[data-js="overlay"]');

burger.addEventListener('click', toggleMenu);

nav.addEventListener('click', (event) => {
    if (event.target.dataset.js === 'menu-link'){ closeMenu()};
});

overlay.addEventListener('click', closeMenu);

function toggleMenu() {
    burger.classList.toggle('burger--open');
    nav.classList.toggle('nav--open');
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--overflow');
}

function closeMenu() {
    burger.classList.remove('burger--open');
    nav.classList.remove('nav--open');
    overlay.classList.remove('overlay--active');
    body.classList.remove('body--overflow');
}