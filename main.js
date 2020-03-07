const  div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + "px";
div.style.top = `${divY}px`;


let drawActive = false; // bololean dla rysowania

let insertDivX;
let insertDivY;


div.addEventListener('mousedown', (e) => { // reakcja na wciśnięcie, insertDivy będą zależały od e
    div.style.backgroundColor = 'grey';
    drawActive = true;
    
    insertDivX = e.offsetX; // odległość od miejsca kliknięcia do naszego elementu (wewnątrz elementu)
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);
})

div.addEventListener('mousemove', (e) => { // ruszanie myszką, zależne od parametru e
    if(drawActive) {
        divX = e.clientX - insertDivX; // e.clientX - informacja o tym gdzie kliknęliśmy względem krawędzi przeglądarki, czli odległośc od przeglądarki - odl. wewnątrz kwadratu
        divY = e.clientY - insertDivY;

        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => { // puszczony klawisz mysz
    div.style.backgroundColor = "black";
    drawActive = false; // to samo co drawActive != drawActive;
})