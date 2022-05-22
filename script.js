const form = document.getElementById('form');

const nameOfProduct = document.getElementById('name');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(nameOfProduct.value);
    console.log(quantity.value);
    console.log(price.value);

    let item = {
        nameOfProduct: nameOfProduct.value,
        quantity: quantity.value,
        price: price.value
    };

    addToLocalStorage(item);
});

function addToLocalStorage(item) {
    localStorage.setItem(item.nameOfProduct, JSON.stringify(item))
}