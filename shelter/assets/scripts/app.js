import pets from './pets.json' assert { type: 'json' };

const body = document.body;
const burger = body.querySelector('[data-js="burger"]');
const nav = body.querySelector('[data-js="nav"]');
const overlay = body.querySelector('[data-js="overlay"]');
const petsContainer = body.querySelector('[data-js="pets-container"]');
const popup = body.querySelector('[data-js="popup"]');

// burger-menu

burger.addEventListener('click', toggleMenu);

nav.addEventListener('click', (event) => {
    if (event.target.dataset.js === 'menu-link') { closeMenu() };
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

// render card

pets.forEach(pet => {
    const card = renderCard(pet);
    petsContainer.appendChild(card);
    card.addEventListener('click', openPopup(pet));
})

function renderCard(pet) {
    const card = document.createElement('article');
    card.classList.add('pets-slider__item', 'pets-item');
    card.innerHTML = `<img src="${pet.img}" alt="pet" class="pets-item__img" width="270" height="270">
                    <h4 class="pets-item__title">${pet.name}</h4>
                    <button class="pets-item__btn">Learn more</button>`
    return card;
}



// popup

function openPopup(pet) {
    createPopup(pet);
    popup.classList.add('popup--open');
    body.classList.add('body--overflow');
}

function createPopup(pet) {
    const img = popup.querySelector('[data-pet="img"]');
    const name = popup.querySelector('[data-pet="name"]');
    name.textContent = pet.name;
    const type = popup.querySelector('[data-pet="type"]');
    const breed = popup.querySelector('[data-pet="breed"]');
    const description = popup.querySelector('[data-pet="description"]');
    const age = popup.querySelector('[data-pet="age"]');
    const inoculations = popup.querySelector('[data-pet="inoculations"]');
    const diseases = popup.querySelector('[data-pet="diseases"]');
    const parasites = popup.querySelector('[data-pet="parasites"]');
}