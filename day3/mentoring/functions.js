// Multiplying a number by another! 

// event listener

// Step 1 - we identify the trigger on the page
// DOM finding methods (querying)
// DOM -> document object model - HTML elements
const button = document.querySelector('button');

function multiple(quantity, price) {
    return quantity * price;
}

// don't worry (DOM)
button.addEventListener('click', () => {
    const quantity = parseFloat(document.querySelector('input').value);
    const price = 1000000;
    const totalPrice = multiple(quantity, price);
    document.querySelector('#total-price').innerText = totalPrice;
});
// code below here