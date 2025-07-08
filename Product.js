function renderProductCards(products) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="row">
      ${products.map(product => `
        <div class="col-md-4 mb-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.packaging}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function loadProducts() {
  fetch("products.json")
    .then(response => response.json())
    .then(data => renderProductCards(data))
    .catch(error => {
      console.error("Failed to load products:", error);
    });
}
