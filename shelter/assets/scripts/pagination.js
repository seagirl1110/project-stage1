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

btnStart.addEventListener('click', () => {
    count = 0;
    renderPage(count);
})

btnPrev.addEventListener('click', () => {
    count -= 1;
    renderPage(count);
})

btnNext.addEventListener('click', () => {
    count += 1;
    renderPage(count);
})

btnFinish.addEventListener('click', () => {
    count = petsColl.length - 1;
    renderPage(count);
})

function shuffle(array) {
    const result = [...array];
    result.sort(() => Math.random() - 0.5);
    return result;
}

function renderPage(count) {
    if (count === 0) {
        btnStart.setAttribute("disabled", "disabled");
        btnPrev.setAttribute("disabled", "disabled");
        btnNext.removeAttribute("disabled", "disabled");
        btnFinish.removeAttribute("disabled", "disabled");
    } else if (count === petsColl.length - 1) {
        btnStart.removeAttribute("disabled", "disabled");
        btnPrev.removeAttribute("disabled", "disabled");
        btnNext.setAttribute("disabled", "disabled");
        btnFinish.setAttribute("disabled", "disabled");
    } else {
        btnStart.removeAttribute("disabled", "disabled");
        btnPrev.removeAttribute("disabled", "disabled");
        btnNext.removeAttribute("disabled", "disabled");
        btnFinish.removeAttribute("disabled", "disabled");
    }
    page.innerHTML = "";
    const arr = petsColl[count];
    for (let i = 0; i < arr.length; i += 1) {
        const card = renderCard(arr[i]);
        page.appendChild(card)
    }
    pageNum.innerHTML = `${count + 1}`;

}