// Contact.js - Contact Page Component
export function renderContactTab(container) {  // Changed parameter name to match products tab
    const contactHTML = `
    <section class="contact-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="section-title mb-4">Contact Us</h2>
            <p class="mb-5">Have questions or need more information? Reach out to our team and we'll get back to you as soon as possible.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <form id="contact-form" class="contact-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone (optional)</label>
                <input type="tel" class="form-control" id="phone">
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
          
          <div class="col-lg-6">
            <div class="contact-info">
              <h4 class="mb-4">Our Information</h4>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="bi bi-geo-alt-fill me-2"></i>
                  <span>123 Industrial Park, Chemical City, CC 12345</span>
                </li>
                <li class="mb-3">
                  <i class="bi bi-telephone-fill me-2"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li class="mb-3">
                  <i class="bi bi-envelope-fill me-2"></i>
                  <span>info@maschem.com</span>
                </li>
                <li class="mb-3">
                  <i class="bi bi-clock-fill me-2"></i>
                  <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
              
              <div class="social-links mt-4">
                <h5 class="mb-3">Follow Us</h5>
                <a href="#" class="text-decoration-none me-3">
                  <i class="bi bi-facebook fs-4"></i>
                </a>
                <a href="#" class="text-decoration-none me-3">
                  <i class="bi bi-twitter fs-4"></i>
                </a>
                <a href="#" class="text-decoration-none me-3">
                  <i class="bi bi-linkedin fs-4"></i>
                </a>
                <a href="#" class="text-decoration-none">
                  <i class="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
    
    // Changed to use the passed container directly
    if (container) {
        container.innerHTML = contactHTML;
        
        // Add form submission handler
        const contactForm = container.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const message = form.querySelector('#message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, phone, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    form.reset();
}