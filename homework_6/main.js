// productArr = []

// class Product {
//     constructor(bunFlavor, glazing, quantity, price) {
//         this.bunFlavor = bunFlavor
//         this.glazing = glazing
//         this.quantity = quantity
//         this.price = price
//     }
// }

document.getElementById("glazing-options").addEventListener("click", function() { 
    var glazing = document.getElementsByName('glazing'); 
      
    for(i = 0; i < glazing.length; i++) { 
        if(glazing[i].checked) 
        document.getElementById("bun-caption").innerHTML = "glazing: "+glazing[i].value; 
    } 
});