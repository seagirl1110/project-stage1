import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const pages = document.querySelector('[data-js="pages"]');

pets.forEach(pet => {
    const card = renderCard(pet);

    pages.appendChild(card)
})
