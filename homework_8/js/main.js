// Header Scroll
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $(".g").addClass("black-stroke");
            $(".line").addClass("black-stroke");
            $("#black-fill").addClass("black-fill");
            $("#black-stroke").addClass("black-stroke");
            $("#header-eye").attr("src", "images/lusid-eye-black.svg");
            $(".device-only-arrow").addClass("arrow-none");
            $("#footer-logo").attr("src", "images/lusid-logo-black.svg");
            $("#footer-ig").addClass("black-fill");
        } else {
            $(".header").removeClass("active");
            $(".g").removeClass("black-stroke");
            $(".line").removeClass("black-stroke");
            $("#black-fill").removeClass("black-fill");
            $("#black-stroke").removeClass("black-stroke");
            $("#header-eye").attr("src", "images/lusid-eye.svg");
            $(".device-only-arrow").removeClass("arrow-none");
            $("#footer-logo").attr("src", "images/lusid-logo-white.svg");
            $("#footer-ig").removeClass("black-fill");
        }
    });

    /******************************************************************************************/

    // Menu Nav Mobile
    $(document).on("click", function () {
        if ($('#menu-checkbox').prop('checked') == true) {

            $("#menu").addClass("active");

            $('#menu').css({
                '-webkit-transform': 'translate(0, 0)',
                '-moz-transform': 'translate(0, 0)',
                '-ms-transform': 'translate(0, 0)',
                '-o-transform': 'translate(0, 0)',
                'transform': 'translate(0, 0)'
            })
        } if ($('#menu-checkbox').prop('checked') == false) {

            $("#menu").removeClass("active");


            $('#menu').css({
                '-webkit-transform': 'translate(0, -100%)',
                '-moz-transform': 'translate(0, -100%)',
                '-ms-transform': 'translate(0, -100%',
                '-o-transform': 'translate(0, -100%)',
                'transform': 'translate(0, -100%)'
            })
        } else {
            return;
        }
    });

    /******************************************************************************************/

    // Menu Nav Desktop
    $(document).on("click", function () {
        if ($('#menu-checkbox').prop('checked') == true) {
            $('#desktop-menu').css({
                '-webkit-transform': 'translate(0, 0)',
                '-moz-transform': 'translate(0, 0)',
                '-ms-transform': 'translate(0, 0)',
                '-o-transform': 'translate(0, 0)',
                'transform': 'translate(0, 0)'
            })
        } if ($('#menu-checkbox').prop('checked') == false) {
            $('#desktop-menu').css({
                '-webkit-transform': 'translate(-100%, 0)',
                '-moz-transform': 'translate(-100%, 0)',
                '-ms-transform': 'translate(-100%, 0',
                '-o-transform': 'translate(-100%, 0)',
                'transform': 'translate(-100%, 0)'
            })
        } else {
            return;
        }
    });

    /******************************************************************************************/

    // Close Menu Nav
    $("#close-menu").on("click", function () {
        $('#menu-checkbox').prop('checked', false);
    });

    // $(window).click(function () {
    //     $('#menu-checkbox').prop('checked', false);
    // });

    $('#menu-nav').click(function (event) {
        event.stopPropagation();
    });

    $("#desktop-close-menu").on("click", function () {
        $('#menu-checkbox').prop('checked', false);
    });

    // $(window).click(function () {
    //     $('#menu-checkbox').prop('checked', false);
    // });

    $('#desktop-menu-nav').click(function (event) {
        event.stopPropagation();
    });

    /******************************************************************************************/

    // Fixed Product Option Buttons
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            $(".product-buttons").removeClass("fixed-product-buttons");
        } else {
            $(".product-buttons").addClass("fixed-product-buttons");
        }
    });

    /******************************************************************************************/

    // Splashscreen Auto Slideshow
    $(document).ready(function () {
        setInterval(function () {
            $('.slidenav__item--next').trigger('click');
        }, 3000);
    });

    $(document).ready(function () {
        if (sessionStorage.getItem('splash') !== 'true') {
            $('#splashscreen').show();

            $('#home').css({
                overflow: 'hidden',
            });

            $('#enter-button').click(function () {
                $('#splashscreen').fadeOut(2000);
                $('#home').css({
                    overflow: 'auto',
                });
                sessionStorage.setItem('splash', 'true');
                $(".slidenav__item--next").stop();
            });
        }
        else {
            $('#splashscreen').hide();
            $('#home').fadeIn();
            $('#home').css({
                overflow: 'auto',
            });
        }
    });

    $('.shopping-bag').on("click", function () {
        $('#cart-container').css({
            'transform': 'translate(0, 0)',
            'visibility': 'visible'
        });

        var windowWidth = $(window).width();
        if (windowWidth < 500) {
            $('body').css({
                'overflow': 'hidden'
            });
        }
    })

    $('#close-cart').on("click", function () {
        $('#cart-container').css({
            'transform': 'translate(0, -100%)',
            'visibility': 'hidden',
        });

        var windowWidth = $(window).width();
        if (windowWidth < 500) {
            $('body').css({
                'overflow': ''
            });
        }
    });

    $('#menuToggle').mouseenter(function () {
        $(this).find('path').css({
            'stroke': "#2A9D8F",
            'transition': '0.2s'
        });
    });
    $('#menuToggle').mouseleave(function () {
        $(this).find('path').css({
            'stroke': "",
            'transition': '0.2s'
        });
    });

    $('.search').mouseenter(function () {
        $('#Group_26191').children().css({
            'stroke': "#2A9D8F",
            'transition': '0.2s'
        });
    });
    $('.search').mouseleave(function () {
        $('#Group_26191').children().css({
            'stroke': "",
            'transition': '0.2s'
        });
    });

    $('.shopping-bag').mouseenter(function () {
        $('#Group_26105').children().css({
            'stroke': "#2A9D8F",
            'transition': '0.2s'
        });
        $('#Path_38').children().eq(1).css({
            'fill': "#2A9D8F",
            'transition': '0.2s'
        });
    });
    $('.shopping-bag').mouseleave(function () {
        $('#Group_26105').children().css({
            'stroke': "",
            'transition': '0.2s'
        });
        $('#Path_38').children().eq(1).css({
            'fill': "",
            'transition': '0.2s'
        });
    });
});

/******************************************************************************************/

// Size Dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;

for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");

    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");

    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {

            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;

                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }

                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }

    x[i].appendChild(b);

    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;

    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }

    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/******************************************************************************************/

// Cart Functionality
let cart = localStorage.getItem("cart");
cart = cart ? JSON.parse(cart) : [];

let cartContainer = document.getElementsByClassName(".cart-items")[0];

updateCartCount();
addToCart();
displayCart();


// Add Products to Cart
function addToCart() {
    let cartClick = document.getElementById("id");
    let cartAside = document.getElementById("cart-container");

    if (cartClick) {
        cartClick.addEventListener("click", () => {
            createProduct();
            storeCart();
            updateCartCount();
            displayCart();

            cartAside.style.transform = "translate(0, 0)";
            cartAside.style.visibility = "visible";
            document.body.style.overflow = "hidden";
        });
    }
}


// Increase # of Items in Cart
function cartCount() {
    let cartCount = 0;
    let cartItems = localStorage.getItem("cart");

    if (!cartItems) {
        return cartCount;
    } else {
        cartItems = JSON.parse(cartItems);
        cartItems.forEach((item) => {
            cartCount = cartCount + 1;
        });

        return cartCount;
    }
}

function updateCartCount() {
    let cartNum = cartCount();
    document.getElementById("update-cart").innerHTML = ` (${cartNum})`;
}

// Put Cart Into Local Storage
function storeCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// Create Product
class Product {
    constructor(title, price, color, size, id) {
        this.title = title;
        this.price = price;
        this.color = color;
        this.size = size;
        this.id = id;
    }
}

function createProduct() {
    let title = document.getElementById("title").innerHTML;

    let price = document.getElementById("price").innerHTML;

    let color = document.querySelector('#color');
    color = color.options[color.selectedIndex].value;

    let size = document.querySelector('#size');
    size = size.options[size.selectedIndex].value;

    let id = document.getElementById('id').dataset.id;

    let clothing = new Product(title, price, color, size, id);

    cart.push(clothing);
}

// Display Products In Cart
function displayCart() {
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
    let cartContainer = document.getElementById("cart-items");
    let cartCheckout = document.querySelector(".cart-buttons");

    if (cartItems && cartContainer) {
        cartContainer.innerHTML = ``;
        cartCheckout.innerHTML = ``;

        Object.values(cartItems).map((item, index) => {
            cartContainer.innerHTML += `
            <div class="single-item">
                <div class="item-image">
                    <a href="product-${item.id}.html">
                        <figure>
                            <img src="images/products/product-${item.id}.jpg" title="${item.title}" alt="${item.title}">
                        </figure>
                    </a>
                </div>
                <div class="item-info">
                    <div class="item-name">
                        <a href="product-${item.id}.html">
                            <p>${item.title}</p>
                        </a>
                    </div>
                    <div class="item-options">
                        <p>${item.color}</p>
                        <p class="item-options-divider">/</p>
                        <p>${item.size}</p>
                    </div>      
                </div>
                <div class="item-cost">
                    <p>${item.price}</p>
                    <p class="remove-item">Remove</p>
                </div>
            </div>
        `;
        });

        cartCheckout.innerHTML += `
        <div class="checkout-button">
            <a href="#">
                <p>checkout</p>
            </a>
        </div>
        <div>
            <a href="products.html">
                <p>continue shopping</p>
            </a>
        </div>
    `;

        removeItem();
        storeCart();


    } else {
        cartContainer.innerHTML += `
            <div class="no-cart">
                <p>You don't have any items in your cart.</p>
            </div>
        `;
    }
}

// Remove Items from Cart
function removeItem() {
    let removeButton = document.querySelectorAll(".remove-item");

    removeButton.forEach((element, index) => {
        element.addEventListener("click", () => {
            cart.splice(index, 1);
            storeCart();
            displayCart();
        });
    });

    updateCartCount();
    updateSubtotal();
    storeCart();
}

// Update Subtotal
function updateSubtotal() {
    let subtotal = 0;
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);

    for (x = 0; x < cartItems.length; x++) {
        let itemPrice = cartItems[x].price;
        itemPrice = parseFloat(itemPrice.replace('$', ''))

        subtotal = subtotal + itemPrice;
    }

    document.getElementById("cart-total").innerHTML = `$${subtotal.toFixed(2)}`;
}

updateSubtotal();

// Update Cart on "Add to Cart" Click
let cartClick = document.getElementById('id');

if (cartClick) {
    cartClick.addEventListener("click", () => {
        displayCart();
        updateSubtotal();
    });
}


