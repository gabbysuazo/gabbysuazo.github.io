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
    var glazing = document.getElementsByName('glazing'); 
      
    for(i = 0; i < glazing.length; i++) { 
        if(glazing[i].checked) 
        document.getElementById("bun-caption").innerHTML = "glazing: "+glazing[i].value; 
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