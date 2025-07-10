import { renderNavbar } from "./Components/Navbar.js";
import { renderHomeTab } from "./Components/Home.js";
import { renderProductsTab } from "./Components/Product.js";
import { renderAboutTab } from "./Components/About.js";
import { renderContactTab } from "./Components/Contact.js";
import { renderFooter } from "./Components/Footer.js";

// Render content based on tab
function renderContent(tab) {
    const contentArea = document.getElementById("contentArea");
    if (!contentArea) return;

    // Clear previous content
    contentArea.innerHTML = '';

    switch (tab) {
        case "home":
            renderHomeTab(contentArea);
            break;
        case "products":
            renderProductsTab(contentArea);
            break;
        case "about":
            renderAboutTab(contentArea);
            break;
        case "contact":
            renderContactTab(contentArea);
            break;
        default:
            contentArea.innerHTML = `<p class="alert alert-warning">Unknown tab: ${tab}</p>`;
    }

    // Ensure footer stays at bottom
    renderFooter();
}

// Setup navbar navigation
function setupNavbarNavigation() {
    const navLinks = [
        { id: "home-link", tab: "home" },
        { id: "products-link", tab: "products" },
        { id: "about-link", tab: "about" },
        { id: "contact-link", tab: "contact" }
    ];

    navLinks.forEach(({ id, tab }) => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                // Update active state
                navLinks.forEach(({ id }) => {
                    document.getElementById(id)?.classList.remove("active");
                });
                link.classList.add("active");
                renderContent(tab);
            });
        }
    });
}

// Initialize the application
function initApp() {
    const app = document.getElementById("app");
    if (!app) return;

    // Clear existing content
    app.innerHTML = '';

    // Render navbar
    renderNavbar("app");

    // Create content area
    const contentArea = document.createElement("div");
    contentArea.id = "contentArea";
    contentArea.className = "container-fluid py-3";
    app.appendChild(contentArea);

    // Set up navigation and render default tab
    setupNavbarNavigation();
    renderContent("home");
}

// Start the application when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);