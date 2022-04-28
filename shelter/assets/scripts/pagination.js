import pets from './pets.js';
import { renderCard } from './card.js';

const page = document.querySelector('[data-pagination="page"]');
const pageNum = document.querySelector('[data-pagination="page-number"]');
const btnStart = document.querySelector('[data-pagination="btn-start"]');
const btnPrev = document.querySelector('[data-pagination="btn-prev"]');
const btnNext = document.querySelector('[data-pagination="btn-next"]');
const btnFinish = document.querySelector('[data-pagination="btn-finish"]');

let countCard = 8;
if (window.innerWidth < 768) {
    countCard = 3;
} else if (window.innerWidth < 1280) {
    countCard = 6;
}

const coll = [];
coll.push(...shuffle(pets));

function shuffle(array) {
    const result = [...array];
    result.sort(() => Math.random() - 0.5);
    return result;
}

while (coll.length < 48) {
    const item = pets[Math.floor(Math.random() * 8)];
    if (coll.length < 12) {
        const arr = coll.slice(6);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 16) {
        const arr = coll.slice(8);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 18) {
        const arr = coll.slice(12);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 24) {
        const arr = coll.slice(16);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 32) {
        const arr = coll.slice(24);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 36) {
        const arr = coll.slice(30);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 40) {
        const arr = coll.slice(32);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 42) {
        const arr = coll.slice(36);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 48) {
        const arr = coll.slice(40);
        if (!arr.includes(item)) {
            coll.push(item)
        }
    }
}

const petsColl = [];
for (let i = 0; i < 48; i += countCard) {
    const item = coll.slice(i, i + countCard);
    petsColl.push(item);
}

let countPage = 0;

renderPage(countPage);

btnStart.addEventListener('click', () => {
    countPage = 0;
    renderPage(countPage);
})

btnPrev.addEventListener('click', () => {
    countPage -= 1;
    renderPage(countPage);
})

btnNext.addEventListener('click', () => {
    countPage += 1;
    renderPage(countPage);
})

btnFinish.addEventListener('click', () => {
    countPage = petsColl.length - 1;
    renderPage(countPage);
})

function renderPage(countPage) {
    if (countPage === 0) {
        btnStart.setAttribute("disabled", "disabled");
        btnPrev.setAttribute("disabled", "disabled");
        btnNext.removeAttribute("disabled", "disabled");
        btnFinish.removeAttribute("disabled", "disabled");
    } else if (countPage === petsColl.length - 1) {
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
    const arr = petsColl[countPage];
    for (let i = 0; i < arr.length; i += 1) {
        const card = renderCard(arr[i]);
        page.appendChild(card)
    }
    pageNum.innerHTML = `${countPage + 1}`;
}
console.log(coll);
console.log(petsColl)