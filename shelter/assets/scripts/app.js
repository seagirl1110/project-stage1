import pets from './pets.json' assert { type: 'json' };

const body = document.body;
const burger = body.querySelector('[data-js="burger"]');
const nav = body.querySelector('[data-js="nav"]');
const overlay = body.querySelector('[data-js="overlay"]');
const petsContainer = body.querySelector('[data-js="pets-container"]');

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
    card.addEventListener('click', () => {
        openPopup(pet);
    });
    petsContainer.appendChild(card);
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
    const popup = createPopup(pet);
    body.appendChild(popup);
    body.classList.add('body--overflow');
}

function createPopup(pet) {
        const popup = document.createElement('div');
        popup.classList.add('popup', 'popup--open')
        popup.innerHTML = `<button class="popup__btn">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" /></svg>
       </button>
       <div class="popup__pet pet">
           <img src="${pet.img}" alt="pet" class="pet__img" width="500" height="500" data-pet="img">
           <div class="pet__content">
               <h3 class="pet__name" data-pet="name">${pet.name}</h3>
               <h4 class="pet__type-wrapper">
                    <span class="pet__type" data-pet="type">${pet.type}</span>
                    <span class="pet__type-element"> - </span>
                    <span class="pet__breed" data-pet="breed">${pet.breed}</span>
               </h4>
               <p class="pet__description" data-pet="description">${pet.description}</p>
               <ul class="pet__characteristics">
                   <li class="pet__item pet-item">Age: <span class="pet-item__value" data-pet="age">${pet.age}</span></li>
                   <li class="pet__item pet-item">Inoculations: <span class="pet-item__value" data-pet="inoculations">${pet.inoculations}</span></li>
                   <li class="pet__item pet-item">Diseases: <span class="pet-item__value" data-pet="diseases">${pet.diseases}</span></li>
                   <li class="pet__item pet-item">Parasites: <span class="pet-item__value" data-pet="parasites">${pet.parasites}</span></li>
               </ul>
           </div>
       </div>`
       return popup;
}