export function renderProductsTab(container) {
  container.className = "products-page";
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
        <div class="products-header text-center py-5 bg-white">
          <div class="container">
            <h1 class="display-4 fw-bold text-primary mb-3">Our Products</h1>
            <p class="lead text-muted max-w-800 mx-auto">Premium cleaning solutions for industrial, commercial and residential needs</p>
            <div class="divider mx-auto my-4 bg-primary"></div>
          </div>
        </div>
      `;

      let categoryCounter = 0;
      for (const category in categories) {
        const bgClass = categoryCounter % 2 === 0 ? 'bg-light' : 'bg-white';
        output += `
          <section class="category-section ${bgClass} py-5">
            <div class="container">
              <div class="category-header d-flex align-items-center mb-5 px-3">
                <div class="category-icon-bg bg-primary-light rounded-circle p-3 me-4">
                  <i class="bi bi-tags-fill fs-2 text-primary"></i>
                </div>
                <div>
                  <h2 class="category-title mb-1">${category}</h2>
                  <div class="category-divider bg-primary"></div>
                </div>
              </div>
              <div class="row g-4">
                ${categories[category].map(product => `
                  <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="product-card h-100 border-0 shadow-sm rounded-3 overflow-hidden transition-all">
                      <div class="product-image-container position-relative">
                        <img src="${product.image}" alt="${product.name}" class="product-image w-100" loading="lazy">
                        <div class="packaging-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 m-2 rounded-pill small fw-medium">
                          ${product.packaging}
                        </div>
                      </div>
                      <div class="card-body p-4">
                        <h3 class="h5 mb-3 fw-semibold">${product.name}</h3>
                        <p class="text-muted mb-0">${product.description}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
        categoryCounter++;
      }

      container.innerHTML = output;
      addProductCardInteractions();
      addProductsStyles();
    })
    .catch(error => {
      console.error("Failed to load products:", error);
      container.innerHTML = `
        <div class="alert alert-danger text-center py-4">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          Failed to load products. Please try again later.
        </div>
      `;
    });
}

function addProductCardInteractions() {
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

function addProductsStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .products-page {
      --category-divider-width: 60px;
      --category-divider-height: 3px;
    }
    
    .products-header {
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    
    .max-w-800 {
      max-width: 800px;
    }
    
    .category-section {
      position: relative;
      padding: 4rem 0;
    }
    
    .category-header {
      position: relative;
    }
    
    .category-icon-bg {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .category-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: #2c3e50;
      position: relative;
      padding-bottom: 10px;
    }
    
    .category-divider {
      width: var(--category-divider-width);
      height: var(--category-divider-height);
      opacity: 0.8;
      transition: width 0.3s ease;
    }
    
    .category-header:hover .category-divider {
      width: calc(var(--category-divider-width) + 20px);
    }
    
    .category-header:hover .category-icon-bg {
      transform: rotate(15deg);
      background-color: rgba(13, 110, 253, 0.2);
    }
    
    .product-card {
      transition: all 0.3s ease;
      background: white;
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .product-image {
      height: 200px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    
    .product-card:hover .product-image {
      transform: scale(1.05);
    }
    
    .packaging-badge {
      font-size: 0.75rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .bg-primary-light {
      background-color: rgba(13, 110, 253, 0.1);
    }
    
    @media (max-width: 992px) {
      .category-title {
        font-size: 1.5rem;
      }
      
      .category-icon-bg {
        width: 50px;
        height: 50px;
      }
    }
    
    @media (max-width: 768px) {
      .product-image {
        height: 180px;
      }
      
      .category-section {
        padding: 3rem 0;
      }
    }
    
    @media (max-width: 576px) {
      .category-title {
        font-size: 1.3rem;
      }
      
      .category-icon-bg {
        width: 44px;
        height: 44px;
        padding: 0.75rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}