const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords = ['user', 'wiosna', 'Ania'];
const messages = ['Wyjechałam na zawsze', 'piękna pora roku', 'fajny styl masz'];

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;
    //console.log(text);

    passwords.forEach((password, index) => { // pierwsza zmienna to kolejne wartości elementów tablicy, druga to indeksy tablicy
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
            
        } 

    })

})




// input.addEventListener('input', (e) => { // można też użyć 'keyup' - na podniesienie klawisza, jest też 'change' pokaże zmiany w polu, ale ne dla tego zadania
//     // console.log(e.target.value); // element e. (event), wykonuje się na inpucie i wartość, 
//     if (password === e.target.value) { // wczesniej był const password - nie passwords - bo jedna zmienna
//         div.textContent = message;
//         e.target.value = '';

//     } else {
//         div.textContent='';
//     }
// })

input.addEventListener('focus', (e) => {
    e.target.classList.add('active'); //można użyć toggle
}
)

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active'); //można użyć
}
)
