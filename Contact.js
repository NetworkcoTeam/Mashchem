// Contact.js - Contact Page Component with Working Google Maps
export function renderContactTab(container) {
    const contactHTML = `
    <section class="contact-section py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8 text-center">
            <h2 class="display-5 fw-bold mb-3 text-primary">Visit Our Stores</h2>
            <p class="lead text-muted">Find us at these locations across Limpopo</p>
            <div class="divider mx-auto my-4 bg-primary"></div>
          </div>
        </div>
        
        <div class="row g-5">
          <!-- Polokwane Store -->
          <div class="col-lg-6">
            <div class="store-card p-4 p-lg-5 rounded-4 shadow-sm bg-white h-100">
              <h3 class="h4 mb-4 d-flex align-items-center">
                <i class="bi bi-shop fs-3 text-primary me-3"></i>
                Polokwane Store
              </h3>
              <div class="mb-4">
                <div class="map-container rounded-3 overflow-hidden mb-3" style="height: 250px;">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.692331693012!2d29.4486233150288!3d-23.8964978847349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d9d9d9d9d9d9%3A0x1ec6d9d9d9d9d9d9!2s56%20Schoeman%20St%2C%20Polokwane%2C%200699!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <i class="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <p class="mb-1 fw-medium">Address:</p>
                    <p class="text-muted mb-0">56 Schoeman Street, Polokwane, Limpopo</p>
                  </div>
                </div>
              </div>
              <div class="d-grid">
                <a href="https://www.google.com/maps/dir//56+Schoeman+St,+Polokwane,+0699" 
                   class="btn btn-outline-primary" 
                   target="_blank">
                  <i class="bi bi-arrow-up-right-circle me-2"></i>Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <!-- Louis Trichardt Store -->
          <div class="col-lg-6">
            <div class="store-card p-4 p-lg-5 rounded-4 shadow-sm bg-white h-100">
              <h3 class="h4 mb-4 d-flex align-items-center">
                <i class="bi bi-shop fs-3 text-primary me-3"></i>
                Louis Trichardt Store
              </h3>
              <div class="mb-4">
                <div class="map-container rounded-3 overflow-hidden mb-3" style="height: 250px;">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.692331693012!2d29.4486233150288!3d-23.8964978847349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d9d9d9d9d9d9%3A0x1ec6d9d9d9d9d9d9!2sPlot+30+Rondebosch,+Louis+Trichardt,+0920!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <div class="d-flex align-items-start">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-2 me-3 flex-shrink-0">
                    <i class="bi bi-geo-alt-fill fs-5"></i>
                  </div>
                  <div>
                    <p class="mb-1 fw-medium">Address:</p>
                    <p class="text-muted mb-0">Plot 30, Rondebosch, Louis Trichardt, Limpopo, 0920</p>
                  </div>
                </div>
              </div>
              <div class="d-grid">
                <a href="https://www.google.com/maps/dir//Plot+30+Rondebosch,+Louis+Trichardt,+0920" 
                   class="btn btn-outline-primary" 
                   target="_blank">
                  <i class="bi bi-arrow-up-right-circle me-2"></i>Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="row mt-5">
          <div class="col-lg-8 mx-auto">
            <div class="contact-info-card p-4 p-lg-5 rounded-4 shadow-sm bg-white text-center">
              <h3 class="h4 mb-4">Contact Information</h3>
              <div class="row g-4">
                <div class="col-md-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 mx-auto mb-3">
                    <i class="bi bi-telephone-fill fs-4"></i>
                  </div>
                  <h5 class="h6 mb-1">Call Us</h5>
                  <p class="text-muted mb-0">+27 (0)64 948 6557</p>
                   <p class="text-muted mb-0">+27 (0)71 105 5378</p>
                    <p class="text-muted mb-0">+27 (0)72 516 5827</p>
                </div>
                <div class="col-md-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 mx-auto mb-3">
                    <i class="bi bi-whatsapp fs-4"></i>
                  </div>
                  <h5 class="h6 mb-1">WhatsApp</h5>
                  <a href="https://wa.me/27649486557" class="btn btn-sm btn-success mt-2">
                    <i class="bi bi-whatsapp me-1"></i>Chat Now
                  </a>
                </div>
                <div class="col-md-4">
                  <div class="icon-box bg-primary-light text-primary rounded-circle p-3 mx-auto mb-3">
                    <i class="bi bi-clock-fill fs-4"></i>
                  </div>
                  <h5 class="h6 mb-1">Business Hours</h5>
                  <p class="text-muted mb-0">Mon-Fri: 8AM-5PM</p>
                </div>
              </div>
              
              <div class="social-section mt-5 pt-4 border-top">
                <h5 class="h6 mb-3">Follow Us</h5>
                <div class="d-flex justify-content-center gap-3">
                  <a href="https://www.facebook.com/maschem.co.za" class="social-icon bg-facebook text-white rounded-circle p-2">
                    <i class="bi bi-facebook fs-5"></i>
                  </a>
                  <a href="#" class="social-icon bg-instagram text-white rounded-circle p-2">
                    <i class="bi bi-instagram fs-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
    
    container.innerHTML = contactHTML;
    setupContactPage();
}

function setupContactPage() {
    // Add dynamic styles
    const style = document.createElement('style');
    style.textContent = `
        .store-card,
        .contact-info-card {
            border: 1px solid rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }
        
        .store-card:hover,
        .contact-info-card:hover {
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            transform: translateY(-5px);
        }
        
        .map-container {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        
        .map-container iframe {
            filter: grayscale(20%) contrast(1.1);
            transition: filter 0.3s ease;
        }
        
        .map-container:hover iframe {
            filter: grayscale(0%) contrast(1);
        }
        
        .divider {
            width: 80px;
            height: 4px;
            opacity: 0.8;
        }
        
        .bg-primary-light {
            background-color: rgba(13, 110, 253, 0.1);
        }
        
        .bg-facebook { background-color: #3b5998; }
        .bg-instagram { background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d); }
        
        .social-icon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            transform: translateY(-3px) scale(1.1);
        }
        
        .icon-box {
            transition: transform 0.3s ease;
        }
        
        .store-card:hover .icon-box,
        .contact-info-card:hover .icon-box {
            transform: rotate(15deg);
        }
    `;
    document.head.appendChild(style);
}