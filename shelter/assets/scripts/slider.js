import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const btnLeft = document.querySelector('[data-slider="btn-left"]');
const btnRight = document.querySelector('[data-slider="btn-right"]');
const carousel = document.querySelector('[data-slider="carousel"]')
const leftBlock = carousel.querySelector('[data-slider="block-left"]');
const activeBlock = carousel.querySelector('[data-slider="block-active"]');
const rightBlock = carousel.querySelector('[data-slider="block-right"]');

createSlider();

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

function moveLeft() {
    carousel.classList.add('transition-left');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

function moveRight() {
    carousel.classList.add('transition-right');
    btnLeft.removeEventListener('click', moveLeft);
    btnRight.removeEventListener('click', moveRight);
}

carousel.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        carousel.classList.remove("transition-left");
        activeBlock.innerHTML = leftBlock.innerHTML;
    } else {
        carousel.classList.remove("transition-right");
        activeBlock.innerHTML = rightBlock.innerHTML;
    }

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
})

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

    for (let i = 0; i < 3; i += 1) {
        leftBlock.appendChild(renderCard(leftColl[i]));
        activeBlock.appendChild(renderCard(activeColl[i]));
        rightBlock.appendChild(renderCard(rightColl[i]));
    }
}
