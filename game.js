const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0 // remisy
}

const game = {
    playerHand: '',
    aiHand: '' // wybór komputera
}

const hands = [...document.querySelectorAll('.select img')]; //[...] zamienia nodeList na tablicę

// PIERWSZA FUNKCJA - ramka do obrazka

function handSelection() {
    // console.log(this.dataset);
    game.playerHand = this.dataset.option // czyta wartość z HTMLa data - w naszym wypadku: data-otion
    // console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = ''); // czyścimy boxShadow dla wszytskich obrazków - żeby tylko jeden się mógł podświetlać na raz
    this.style.boxShadow = '0 0 4px red'; //boxShadow tworzy obramówkę (przesunięcie na osi x, rozmycie, grubość,), ale nie zmienia wymiarów obrazka tak jak border
}

// ALTRERNATYWA przy użyciu funkcji strzałkowej (która nie tworzy this) aby pobrać konkretny element
// const handSelection =(e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

// funkcja wyboru komputera =- użyta w funkcji sterującej

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// funckja sprawdzająca kto wygrał

function checkResult(player, ai) {
    // console.log(player,ai);
    if (player === ai) {
        // console.log('remis')
        return 'draw'
    } else if ((player === 'papier' && ai === 'kamień') ||
        (player === 'kamień' && ai === 'nożyczki') ||
        (player === 'nożyczki' && ai === 'papier')) {
        // console.log('wygrałeś')
        return 'win';
    } else { return 'loss' }
}

// publikacja wyniku

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers; // inkrementujemy licznik

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = 'grey';
    }

}

function endGame() {
    document.querySelector(`[data-option = '${game.playerHand}']`).style.boxShadow = ''; // czyszczenie boxShadow - szukamy data-option równego wart. game.playerHand
    game.playerHand = ''; // czyścimy wybór gracza po zakończeniu rozgrywki
    game.aiHand = ''; //i tak ją napiszemy w aiChoice() ale dla przejrzystości czyścimy
}


// FUNKCJA STERUJĄCA

function startGame() {
    if (!game.playerHand) { // jeśli nie wybrano obrazka - bez nawiasów blokowych, skrócony zapi, return kończy funkcję żeby gra nie szła dalej
        return alert('Wybierz dłoń!');
    }
    game.aiHand = aiChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand); // przekazujemy argumenty do funkcji - wybór gracza i komputera
    console.log(gameResult)
    publishResult(game.playerHand, game.aiHand, gameResult); // przekazujemy wybór gracza, komputera i wynik
    endGame();

}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)
