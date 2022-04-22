import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const sliderWrapper = document.querySelector('[data-slider="wrapper"]');
const btnLeft = document.querySelector('[data-slider="btn-left"]');
const btnRight = document.querySelector('[data-slider="btn-right"]');

const cards = [];
pets.forEach(pet => {
    const card = renderCard(pet);
    cards.push(card);
});

createSlider();
function createSlider() {
    const leftColl = [];
    const activeColl = [];
    const rightColl = [];

    while (activeColl.length !== 3) {
        const item = pets[Math.floor(Math.random() * 8)];
        if (!activeColl.includes(item)) {
            activeColl.push(item);
        }
    }

    while (leftColl.length !== 3) {
        const item = pets[Math.floor(Math.random() * 8)];
        if (!activeColl.includes(item) && !leftColl.includes(item)) {
            leftColl.push(item)
        };
    }

    while (rightColl.length !== 3) {
        const item = pets[Math.floor(Math.random() * 8)];
        if (!activeColl.includes(item) && !rightColl.includes(item)) {
            rightColl.push(item)
        };
    }

    const sliderInner = document.createElement('div');
    sliderInner.classList.add('pets-slider__inner');
    sliderInner.innerHTML = `<div class="pets-slider__block pets-slider__block--left"></div>
    <div class="pets-slider__block pets-slider__block--active"></div>
    <div class="pets-slider__block pets-slider__block--right"></div>`;
    const leftBlock = sliderInner.querySelector('.pets-slider__block--left');
    const activeBlock = sliderInner.querySelector('.pets-slider__block--active');
    const rightBlock = sliderInner.querySelector('.pets-slider__block--right');
    for (let i = 0; i < 3; i += 1) {
        leftBlock.appendChild(renderCard(leftColl[i]));
        activeBlock.appendChild(renderCard(activeColl[i]));
        rightBlock.appendChild(renderCard(rightColl[i]));
    }
    sliderWrapper.appendChild(sliderInner);
}
