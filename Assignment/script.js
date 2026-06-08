const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("error");
const productsElement = document.getElementById("products");

async function fetchProducts() {
    try {
        loadingElement.classList.remove("hidden");
        errorElement.classList.add("hidden");

        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products.");
        }

        const products = await response.json();

        displayProducts(products);
    } catch (error) {
        errorElement.textContent =
            "Error: " + error.message;

        errorElement.classList.remove("hidden");
    } finally {
        loadingElement.classList.add("hidden");
    }
}

function displayProducts(products) {
    productsElement.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;

        productsElement.appendChild(card);
    });
}

fetchProducts();
