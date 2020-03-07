const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault(); // powstrzymanie przed domyślnym działaniem
    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value.length) { // to samo co input.value.length>0
        for (name of names) { // pętla for...of; name odwołuje się do kolejnych elementów tablicy names
            if(name === newName) {
                alert("to imię już jest w tabeli")
                return
            }
        } 
        names.push(newName); // dodawanie do tablicy
        div.textContent += newName + ', ';
        input.value ='';
    }
}
document.querySelector('button').addEventListener('click', addName)