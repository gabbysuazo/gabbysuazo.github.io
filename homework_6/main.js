// Select Glazing

document.getElementById("glazing-options").addEventListener("click", function() {
	let glazing = document.getElementsByName('glazing');

	for (i = 0; i < glazing.length; i++) {
		if (glazing[i].checked) {
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
	for (i = 0; i < glazing.length; i++) {
		if (glazing[i].checked) {
			glazing[i].checked = false;
		}
	}
});


// Add to Cart

productArr = []

class Product {
	constructor(flavor, glazing, quantity, price, photo) {
		this.flavor = flavor;
		this.glazing = glazing;
		this.quantity = quantity;
		this.price = price;
		this.photo = photo;
	}
}

function checkoutPageLoaded() {
	let loadedProductArr = localStorage.getItem('order');
	let productArr2 = JSON.parse(loadedProductArr);

	console.log(productArr2);

	for (let i = 0; i < productArr2.length; i++) {
		let div1 = document.createElement("DIV");
		div1.classList.add('item');
		document.getElementById('items-left').appendChild(div1);

		let xButton = document.createElement("button");
		xButton.classList.add('remove-button');
		div1.appendChild(xButton);
		xButton.innerHTML = 'X';
		xButton.style.fontFamily = "Quicksand";
		xButton.style.fontSize = "25px";
		xButton.style.padding = "2px 8px";
		xButton.style.backgroundColor = "transparent";
		xButton.style.color = "#6A8DA5";
		xButton.onmouseenter = function() {
			xButton.style.color = "#b57e59";
		};
		xButton.onmouseleave = function() {
			xButton.style.color = "#6A8DA5";
		};

		let products = [];
		for (var x = 0; x < productArr2.length; x++) {
			products.push(document.getElementsByClassName("item")[x]);
		}

		xButton.onclick = function() {
			let index = Array.prototype.indexOf.call(products, event.target.closest("div"));
			let removeItem = event.target.closest("div");
			productArr2.splice(index);
			console.log(productArr2)
			removeItem.remove();
			cartCount();
		};

		let div2 = document.createElement('DIV');
		div2.classList.add('cart-quantity');
		div1.appendChild(div2);

		let quantity = document.createElement('H3');
		quantity.innerHTML = productArr2[i].quantity;
		div2.appendChild(quantity);

		let div3 = document.createElement('DIV');
		div3.classList.add('cart-item-name-container');
		div1.appendChild(div3);

		let img = document.createElement('IMG');
		div3.appendChild(img);

		if (productArr2[i].flavor == 'original') {
			img.src = "images/detail-bun1.png";
		}
		if (productArr2[i].flavor == 'blackberry') {
			img.src = "images/detail-bun2.png";
		}
		if (productArr2[i].flavor == 'walnut') {
			img.src = "images/detail-bun3.png";
		}
		if (productArr2[i].flavor == 'original (gluten-free)') {
			img.src = "images/detail-bun4.png";
		}
		if (productArr2[i].flavor == 'pumpkin spice') {
			img.src = "images/detail-bun5.png";
		}
		if (productArr2[i].flavor == 'caramel pecan') {
			img.src = "images/detail-bun6.png";
		}

		let div4 = document.createElement('DIV');
		div4.classList.add('cart-item-name');
		div3.appendChild(div4);

		let name = document.createElement('H3');
		name.innerHTML = productArr2[i].flavor;
		div4.appendChild(name);

		let glazing = document.createElement('H5');
		glazing.innerHTML = 'glazing: ' + productArr2[i].glazing;
		div4.appendChild(glazing);

		let div5 = document.createElement('DIV');
		div5.classList.add('item-price');
		div1.appendChild(div5);

		let itemTotalCost = (parseInt(productArr2[i].quantity) * parseFloat(productArr2[i].price)).toFixed(2);

		let price = document.createElement('H3');
		price.innerHTML = '$' + itemTotalCost;
		div5.appendChild(price);
	}

	let subtotal = 0;
	let tax = 0.06;

	for (var i = 0; i < productArr2.length; i++) {
		subtotal += parseFloat(productArr2[i].price * productArr2[i].quantity);
	}

	subtotal = subtotal.toFixed(2);

	tax = subtotal * tax;
	tax = tax.toFixed(2);

	subtotal = parseFloat(subtotal);
	tax = parseFloat(tax);

	let total = subtotal + tax;
	total = total.toFixed(2);

	console.log(subtotal);
	console.log(tax);
	console.log(total);

	document.getElementById('subtotal').innerHTML = subtotal;
	document.getElementById('tax').innerHTML = tax;
	document.getElementById('total').innerHTML = total;

	document.getElementById('cart-item-amount').innerHTML = productArr2.length;
}

function addToCart() {
	let flavor = document.getElementById('product-name').innerHTML;
	let glazing = document.getElementById('bun-caption').innerHTML;
	let quantity = document.getElementById('quantity').innerHTML;
	let price = document.getElementById('bun-price').innerHTML;
	let photo = document.getElementById('product-image');

	let bun = new Product(flavor, glazing, quantity, price, photo);

	productArr.push(bun);

	console.log(productArr);
}

function goToCheckoutPage() {
	localStorage.setItem('order', JSON.stringify(productArr));

	let loadedProductArr = localStorage.getItem('order');
	let productArr2 = JSON.parse(loadedProductArr);
}

function cartCount() {
	let loadedProductArr = localStorage.getItem('order');
	let productArr2 = JSON.parse(loadedProductArr);
	document.getElementById('cart-item-amount').innerHTML = productArr2.length;
}