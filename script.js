const form = document.getElementById('form');

const container = document.getElementById('container');

const nameOfProduct = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');

const add = document.getElementById('add');
const list = document.getElementById('list');

let storage;

if (localStorage.key('storage')) {
    storage = JSON.parse(localStorage.getItem('storage'));
} else {
    storage = [];
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let item = {
        nameOfProduct: nameOfProduct.value,
        quantity: quantity.value,
        price: price.value
    };

    storage.push(item)

    updateLocalStorage(storage);
});

function updateLocalStorage(item) {
    localStorage.setItem('storage', JSON.stringify(storage))
}

list.addEventListener('click', showList);
add.addEventListener('click', showAdd);

function showList() {

    const localStorageItems = JSON.parse(localStorage.getItem('storage'));

    let result = ``;
    for (let line of localStorageItems) {
        result += `<tr>`;
        result += `<td>${line.nameOfProduct}</td><td>${line.quantity}</td><td>${line.price}</td>`;
        result += `</tr>`;
    }

    container.innerHTML = `
    <table border="1">
        <thead>
            <th>Name</th>
            <th>Quantitie</th>
            <th>Price</th>
        </thead>
        ${result}
    </table>
    `
}

function showAdd() {
    container.innerHTML = `
        <form id="form">
            <input type="text" id="name" required>
            <input type="number" id="quantity" required>
            <input type="number" id="price" required>
            <input type="submit">
        </form>
    `;
}