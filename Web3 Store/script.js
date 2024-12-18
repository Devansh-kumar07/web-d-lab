
const apiUrl = "https://www.freetestapi.com/api/v1/politicians";

let products = [];


async function loadProducts() {
  try {
    const response = await fetch(apiUrl);
    products = await response.json(); 
    displayProducts(products); 
  } catch (error) {
    console.error("Error loading products:", error);
  }
}


function displayProducts(filteredProducts) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; 

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-content">
        <div class="card-title">${product.title}</div>
        <div class="card-category">Category: ${product.category}</div>
        <div class="card-price">$${product.price.toFixed(2)} USD</div>
        <button>View Details</button>
      </div>
    `;

    container.appendChild(card);
  });
}


function filterProducts(event) {
  const searchQuery = event.target.value.toLowerCase(); 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );
  displayProducts(filteredProducts);
}


document.getElementById("search-bar").addEventListener("input", filterProducts);

loadProducts();
