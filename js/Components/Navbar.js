// Navbar.js - Navigation Component with Icons
export function renderNavbar(containerId = "app") {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#" id="logo">
          <img src="images/Maschem-logo.png" alt="Maschem Logo" class="maschem-logo me-2"/>
          <span class="fw-bold">Maschem</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active d-flex align-items-center" id="home-link" href="#">
                <i class="bi bi-house-door me-2"></i>
                <span>Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center" href="#" id="products-link">
                <i class="bi bi-box-seam me-2"></i>
                <span>Products</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center" href="#" id="about-link">
                <i class="bi bi-building me-2"></i>
                <span>About Us</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center" href="#" id="contact-link">
                <i class="bi bi-telephone me-2"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
    
    // Insert navbar at the top of the container
    const container = document.getElementById(containerId);
    if (container) {
        container.insertAdjacentHTML('afterbegin', navbarHTML);
    }
}