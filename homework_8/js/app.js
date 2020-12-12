const cartBtn = document.querySelector(".shopping-bag");
const closeCartBtn = document.querySelector("#close-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector("#cart-container");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-all");


class Products {
    async getProducts() {
        try {
            let result = await fetch('js/products.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                const link = item.link;
                return { title, price, id, image, link }
            })
            return products
        } catch (error) {
            console.log(error);
        }
    }
}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
                <div class="products-single">
                    <a id="product-details-link data-id="${product.id}" href="${product.link}">
                        <figure class="product-img">
                            <img src=${product.image} title="${product.title}" alt="${product.title}">
                        </figure>
                        <div class="product-info">
                            <h5>${product.title}</h5>
                            <h6>$${product.price}</h6>
                        </div>
                    </a>
                </div>
            `;
        });
        productsDOM.innerHTML = result;
    }
}

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products)
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(() => {
        ui.getBagButtons
    });
});