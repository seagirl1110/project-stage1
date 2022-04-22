import {openPopup} from './popup.js'

function renderCard(pet) {
    const card = document.createElement('article');
    card.classList.add('pets-slider__item', 'pets-item');
    card.innerHTML = `<img src="${pet.img}" alt="pet" class="pets-item__img" width="270" height="270">
                    <h4 class="pets-item__title">${pet.name}</h4>
                    <button class="pets-item__btn">Learn more</button>`;
    card.addEventListener('click', () => {
        openPopup(pet);
    });
    return card;
}

export { renderCard };