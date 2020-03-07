const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');

const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

let indexText = 0;
const time = 40;
const addLetter = () => {
    spnText.textContent += txt[indexText]; // dodajemy litery do spana
    indexText++
    if (indexText == txt.length) clearInterval(indexTypying); // zatrzymanie setInterval
}
const indexTypying = setInterval(addLetter, time); // funckja i interał jako argumenty


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400)