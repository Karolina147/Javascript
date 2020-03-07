const btn = document.querySelector('button');
const names = ['Jagienka', 'Dobrosława', 'Daria', 'Asia', 'Kira', 'Marysia', 'Anastazja'];
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"];

const div = document.querySelector('div');

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() *names.length);
    // const indexPrefix = Math.floor(Math.random() *prefixs.length);

    div.innerHTML = `${prefixs[Math.floor(Math.random() *prefixs.length)]}, że najfajniejsze imię to ${names[indexName].bold()}`;
}

btn.addEventListener('click',  nameGenerator)