// productArr = []

// class Product {
//     constructor(bunFlavor, glazing, quantity, price) {
//         this.bunFlavor = bunFlavor
//         this.glazing = glazing
//         this.quantity = quantity
//         this.price = price
//     }
// }


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

    document.getElementById("quantity").innerHTML = "0";
});