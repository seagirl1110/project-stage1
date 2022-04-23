import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

let countCards = 3;
if (window.innerWidth < 768) {
    countCards = 1;
} else if (window.innerWidth < 1280) {
    countCards = 2;
}

const btnLeft = document.querySelector('[data-slider="btn-left"]');
const btnRight = document.querySelector('[data-slider="btn-right"]');
const carousel = document.querySelector('[data-slider="carousel"]')
const leftBlock = carousel.querySelector('[data-slider="block-left"]');
const activeBlock = carousel.querySelector('[data-slider="block-active"]');
const rightBlock = carousel.querySelector('[data-slider="block-right"]');

let activeColl;
let sideColl;

createActiveColl();

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
    } else {
        carousel.classList.remove("transition-right");
    }

    activeBlock.innerHTML = "";

    activeColl = sideColl;
    fillActiveBlock(activeColl);

    btnLeft.addEventListener('click', moveLeft);
    btnRight.addEventListener('click', moveRight);
})

function createActiveColl() {
    activeColl = [];
    while (activeColl.length !== countCards) {
        const item = pets[Math.floor(Math.random() * 8)];
        if (!activeColl.includes(item)) {
            activeColl.push(item);
        }
    }
    fillActiveBlock(activeColl);
}

function fillActiveBlock(activeColl) {
    for (let i = 0; i < countCards; i += 1) {
        activeBlock.appendChild(renderCard(activeColl[i]));
    }
    fillSideBlock(activeColl);
}

function fillSideBlock(activeColl) {
    sideColl = [];
    leftBlock.innerHTML = "";
    rightBlock.innerHTML = "";

    while (sideColl.length !== countCards) {
        const item = pets[Math.floor(Math.random() * 8)];
        if (!activeColl.includes(item) && !sideColl.includes(item)) {
            sideColl.push(item)
        };
    }

    for (let i = 0; i < countCards; i += 1) {
        leftBlock.appendChild(renderCard(sideColl[i]));
        rightBlock.appendChild(renderCard(sideColl[i]));
    }
}
