export function renderProductsTab(container) {
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      const categories = {};
      products.forEach(product => {
        const category = product.category || "Uncategorized";
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(product);
      });

      let output = `
        <div class="products-heading">
          <h1>Products</h1>
        </div>
      `;

      for (const category in categories) {
        output += `
          <h2 class="category-title">${category}</h2>
          <div class="row product-row">
            ${categories[category].map(product => `
              <div class="col-md-4 mb-4 d-flex">
                <div class="product-card">

                  <div class="product-name">
                    <h5>${product.name}</h5>
                  </div>

                  <img src="${product.image}" alt="${product.name}" class="product-image">

                  <div class="packaging-container">
                    <div class="packaging-badge">${product.packaging}</div>
                  </div>

                  <div class="description-container">
                    <p>${product.description}</p>
                  </div>

                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      container.innerHTML = output;
    })
    .catch(error => {
      console.error("Failed to load products:", error);
      container.innerHTML = `<p class="error-text">Failed to load products.</p>`;
    });
}
