export function renderNavbar(containerId = "app") {
    const navbarHTML = `
    <nav class="custom-navbar">
      <div class="navbar-container">
        <a class="navbar-brand" href="#">Maschem</a>
        <ul class="navbar-links">
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
    </nav>
    `;

    // Insert navbar at the top of the container
    const container = document.getElementById(containerId);
    if (container) {
        container.insertAdjacentHTML('afterbegin', navbarHTML);
    }
}