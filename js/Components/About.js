// About.js - Professional About Page Component
export function renderAboutTab(container) {
    const aboutHTML = `
    <section class="about-section py-5 bg-light">
      <div class="container">
        <div class="about-header text-center mb-5 px-3">
          <h1 class="display-5 fw-bold mb-4 text-primary">About Maschem</h1>
          <p class="lead text-muted">We manufacture powerful, affordable, and safe cleaning solutions for homes, businesses, and industries worldwide.</p>
          <div class="divider mx-auto my-4 bg-primary"></div>
        </div>

        <div class="row g-5 align-items-stretch">
          <!-- Vision Card -->
          <div class="col-lg-6">
            <div class="about-card h-100 p-0 overflow-hidden border-0 shadow-sm" data-card="1">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 me-4">
                    <i class="bi bi-eye-fill fs-3"></i>
                  </div>
                  <h2 class="card-title h4 mb-0">Our Vision</h2>
                </div>
                <p class="card-text text-secondary">To become a leading force in the cleaning industry by providing sustainable, effective, and accessible cleaning solutions that uplift communities, protect the environment, and redefine hygiene standards worldwide.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="./images/cleaning1.jpg" alt="Vision Image" class="img-fluid rounded-4 about-image shadow-sm" loading="lazy">
          </div>

          <!-- Mission Card -->
          <div class="col-lg-6 order-lg-2">
            <div class="about-card h-100 p-0 overflow-hidden border-0 shadow-sm" data-card="2">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 me-4">
                    <i class="bi bi-bullseye fs-3"></i>
                  </div>
                  <h2 class="card-title h4 mb-0">Our Mission</h2>
                </div>
                <p class="card-text text-secondary">Our mission is to develop and deliver high quality, affordable detergents and cleaning products that ensure a safer, cleaner world for all. Through continuous innovation, ethical manufacturing, and a customer-first mindset.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <img src="./images/cleaning4.jpg" alt="Mission Image" class="img-fluid rounded-4 about-image shadow-sm" loading="lazy">
          </div>

          <!-- Strategy Card -->
          <div class="col-lg-6">
            <div class="about-card h-100 p-0 overflow-hidden border-0 shadow-sm" data-card="3">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 me-4">
                    <i class="bi bi-lightning-charge-fill fs-3"></i>
                  </div>
                  <h2 class="card-title h4 mb-0">Our Strategy</h2>
                </div>
                <p class="card-text text-secondary">Maschem strategy focuses on combining science-driven innovation with local market needs. We invest in research to formulate effective and eco-friendly products, build strong distribution networks, and engage customers through education.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="./Images/cleaning.jpg" alt="Strategy Image" class="img-fluid rounded-4 about-image shadow-sm" loading="lazy">
          </div>
        </div>
      </div>
    </section>
    `;

    // Insert into container
    container.innerHTML = aboutHTML;

    // Add animations and event listeners
    setupAboutPage();
}

function setupAboutPage() {
    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .about-card {
            background: white;
            border-radius: 1rem;
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .about-image {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
            object-fit: cover;
            height: 100%;
            min-height: 300px;
            max-height: 400px;
            width: 100%;
        }
        
        .icon-box {
            transition: all 0.3s ease;
        }
        
        .about-card:hover .icon-box {
            transform: rotate(15deg);
            background: var(--bs-primary) !important;
            color: white !important;
        }
        
        .divider {
            width: 80px;
            height: 4px;
            opacity: 0.8;
        }
        
        .bg-primary-light {
            background-color: rgba(13, 110, 253, 0.1);
        }
        
        @media (max-width: 992px) {
            .about-image {
                max-height: 350px;
            }
        }
    `;
    document.head.appendChild(style);

    // Animate elements on load
    const animateElements = () => {
        const cards = document.querySelectorAll('.about-card');
        const images = document.querySelectorAll('.about-image');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });

        images.forEach((image, index) => {
            setTimeout(() => {
                image.style.opacity = '1';
                image.style.transform = 'translateY(0)';
            }, (index + 1) * 300);
        });
    };

    // Add hover effects
    const addHoverEffects = () => {
        const cards = document.querySelectorAll('.about-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
            });
        });
    };

    // Initialize
    setTimeout(() => {
        animateElements();
        addHoverEffects();
    }, 100);
}