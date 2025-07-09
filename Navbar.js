// Navbar.js - Navigation Component
export function renderNavbar(containerId = "app") {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#" id="logo">
          <img src="images/Maschem-logo.png" alt="Maschem Logo" class="maschem-logo"/>
          Maschem
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" id="home-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="products-link">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="about-link">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="contact-link">Contact</a>
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