function renderProductCards(products) {
  const app = document.getElementById("app");

  const categories = {};
  products.forEach(product => {
    const category = product.category || "Uncategorized";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(product);
  });

  let output = `
    <div class="bg-success text-white py-3 px-4 mb-5">
      <h1 class="m-0">Products</h1>
    </div>
  `;

  for (const category in categories) {
    output += `
      <h2 class="text-secondary mt-4 mb-3">${category}</h2>
      <div class="row">
        ${categories[category].map(product => `
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm h-100">
              <div class="card-header fw-bold">${product.name}</div>
              <img src="${product.image}" class="card-img-top object-fit-contain" alt="${product.name}" style="max-height: 200px; object-fit: contain;">
              <div class="card-body d-flex flex-column">
                <div class="mb-3">
                  <span class="badge bg-primary">${product.packaging}</span>
                </div>
                <p class="card-text flex-grow-1">${product.description}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  app.innerHTML = output;
}

function loadProducts() {
  fetch("products.json")
    .then(response => response.json())
    .then(data => renderProductCards(data))
    .catch(error => {
      console.error("Failed to load products:", error);
    });
}


