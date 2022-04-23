import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const page = document.querySelector('[data-pagination="page"]');
const pageNum = document.querySelector('[data-pagination="page-number"]');
const btnStart = document.querySelector('[data-pagination="btn-start"]');
const btnPrev = document.querySelector('[data-pagination="btn-prev"]');
const btnNext = document.querySelector('[data-pagination="btn-next"]');
const btnFinish = document.querySelector('[data-pagination="btn-finish"]');

let count = 0;

const petsColl = [];
for (let i = 0; i < 6; i += 1) {
    petsColl.push(shuffle(pets));
}

renderPage(count);

function shuffle(array) {
    const result = [...array];
    result.sort(() => Math.random() - 0.5);
    return result;
}

function renderPage(count) {
    page.innerHTML = "";
    const arr = petsColl[count];
    for (let i = 0; i < arr.length; i += 1) {
        const card = renderCard(arr[i]);
        page.appendChild(card)
    }
}