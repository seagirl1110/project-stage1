import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';


const petsContainer = document.querySelector('[data-js="pets-container"]');


pets.forEach(pet => {
    const card = renderCard(pet);
    
    petsContainer.appendChild(card);
})