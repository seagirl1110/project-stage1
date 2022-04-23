import pets from './pets.json' assert { type: 'json' };
import { renderCard } from './card.js';

const page = document.querySelector('[data-pagination="page"]');
const pageNum = document.querySelector('[data-pagination="page-number"]');
const btnStart = document.querySelector('[data-pagination="btn-start"]');
const btnPrev = document.querySelector('[data-pagination="btn-prev"]');
const btnNext = document.querySelector('[data-pagination="btn-next"]');
const btnFinish = document.querySelector('[data-pagination="btn-finish"]');

let count = 0;

let petsColl = [];

const coll = [];
while (coll.length < 48) {
    const item = pets[Math.floor(Math.random() * 8)];
    if (coll.length < 8) {
        if (!coll.includes(item)) {
            coll.push(item)
        }
    } else if (coll.length < 12) {
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

for (let i = 0; i < 48; i += 8) {
    const item = coll.slice(i, i + 8);
    petsColl.push(item);
}

console.log(petsColl)

if (window.innerWidth < 768) {
    petsColl = [];

} else if (window.innerWidth < 1280) {
    petsColl = [];

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