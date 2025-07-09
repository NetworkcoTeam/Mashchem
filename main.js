import { renderNavbar } from "./Navbar.js";
// Import your tab components here
 import { renderHomeTab } from "./Home.js";
import { renderProductsTab } from "./Product.js";
 //import { renderAboutTab } from "./About.js";
import { renderContactTab } from "./Contact.js";

// Render content based on tab
function renderContent(tab) {
    const contentArea = document.getElementById("contentArea");
    if (!contentArea) return;

    switch (tab) {
        case "home":
             renderHomeTab(contentArea);
            break;
        case "products":
             renderProductsTab(contentArea);
            break;
       // case "about":
             //renderAboutTab(contentArea);
            break;
        case "contact":
             renderContactTab(contentArea);
            break;
        default:
            contentArea.innerHTML = `<p>Unknown tab: ${tab}</p>`;
    }
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
                // Remove "active" from all nav links
                navLinks.forEach(({ id }) => {
                    const l = document.getElementById(id);
                    if (l) l.classList.remove("active");
                });
                // Add "active" to clicked link
                link.classList.add("active");
                renderContent(tab);
            });
        }
    });
}

// Wait for the DOM to be fully loaded before rendering the navbar and setting up navigation
document.addEventListener("DOMContentLoaded", () => {
    renderNavbar("app");

    // Add a content area if not present
    let contentArea = document.getElementById("contentArea");
    if (!contentArea) {
        contentArea = document.createElement("div");
        contentArea.id = "contentArea";
        contentArea.className = "mt-4";
        const app = document.getElementById("app");
        if (app) app.appendChild(contentArea);
    }

    setupNavbarNavigation();
    renderContent("home"); // Default tab
});



