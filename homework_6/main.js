// Select Glazing

document.getElementById("glazing-options").addEventListener("click", function() { 
    let glazing = document.getElementsByName('glazing'); 
      
    for(i = 0; i < glazing.length; i++) { 
        if(glazing[i].checked) {
            document.getElementById("bun-caption").innerHTML = glazing[i].value;
        }
    }
});


// Select Quantity

let quantityString = document.getElementById("quantity").innerHTML;
let quantityInt = parseInt(quantityString);

document.getElementById("plus").addEventListener("click", function() {
    if (quantityInt < 12) {
        quantityInt = ++quantityInt;
        quantityString = quantityInt.toString();
        document.getElementById("quantity").innerHTML = quantityString;
    }
});

document.getElementById("minus").addEventListener("click", function() {
    if (quantityInt > 0) {
        quantityInt = --quantityInt;
        quantityString = quantityInt.toString();
        document.getElementById("quantity").innerHTML = quantityString;
    }
});


// Submit Selections

let cartItemCountString = document.getElementById("cart-item-amount").innerHTML;
let cartItemCountInt = parseInt(cartItemCountString);

document.getElementById("add-cart-button").addEventListener("click", function() {
    cartItemCountInt = cartItemCountInt + quantityInt
    cartItemCountString = cartItemCountInt.toString();
    document.getElementById("cart-item-amount").innerHTML = cartItemCountString;

    let glazing = document.getElementsByName('glazing'); 
    for(i = 0; i < glazing.length; i++) { 
        if(glazing[i].checked) {
            glazing[i].checked = false;
        }
    }
});


// Add to Cart

let carts = document.querySelectorAll('#add-cart-button');

let products = [
    {
        name: 'Original',
        tag: 'original',
        price: 2.49,
        inCart: 0
    },
    {
        name: 'Blackberry',
        tag: 'blackberry',
        price: 2.49,
        inCart: 0
    },
    {
        name: 'Walnut',
        tag: 'walnut',
        price: 2.49,
        inCart: 0
    },
]


for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        location.reload();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('#cart-item-amount').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + cartItemCountInt)
    } else {
        localStorage.setItem('cartNumbers', cartItemCountInt);
    }
}

onLoadCartNumbers()