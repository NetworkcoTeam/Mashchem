// Home.js - Homepage Component

// Hero Section Component
function renderHeroSection() {
  return `
    <section class="hero-section">
      <div class="hero-content">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-text">
                <h1 class="hero-title">
                  Welcome <span class="text-primary">to</span> Maschem
                </h1>
                <p class="hero-subtitle">
                  <span class="text-success">Trusted</span> Cleaning, 
                  <span class="text-success">Proven</span> Results
                </p>
                <button class="btn btn-success btn-lg mt-4" id="exploreBtn">
                  Explore Our Range
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Features Section Component
function renderFeaturesSection() {
  return `
    <div class="home-content">
      <div class="container">
        <div class="row mt-5">
          <div class="col-12 text-center">
            <h2 class="section-title">Our Cleaning Solutions</h2>
            <p class="section-description">
              Discover our range of professional cleaning products designed for excellence.
            </p>
          </div>
        </div>
        
        <div class="row mt-4">
          <div class="col-md-4 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h4>Trusted Quality</h4>
              <p>Our products are tested and proven to deliver consistent, reliable results.</p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-leaf"></i>
              </div>
              <h4>Eco-Friendly</h4>
              <p>Environmentally responsible cleaning solutions that protect your space.</p>
            </div>
          </div>
          
          <div class="col-md-4 mb-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Expert Support</h4>
              <p>Professional guidance and support for all your cleaning needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize Hero Section Event Listeners
function initializeHero() {
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function() {
      // Trigger products navigation
      const productsLink = document.getElementById('products-link');
      if (productsLink) {
        productsLink.click();
      }
    });
  }
}

// Main export function - renders home tab content
export function renderHomeTab(contentArea) {
  if (!contentArea) return;
  
  contentArea.innerHTML = `
    ${renderHeroSection()}
    ${renderFeaturesSection()}
  `;
  
  // Initialize hero section after rendering
  initializeHero();
}
