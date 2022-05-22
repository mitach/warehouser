const form = document.getElementById('form');

const nameOfProduct = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');

console.log(JSON.parse(localStorage.getItem('storage')));

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