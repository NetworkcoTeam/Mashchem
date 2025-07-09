// Footer.js
export function renderFooter() {
    const footerHTML = `
    <footer class="bg-light py-3 border-top mt-auto"  style="background-color: #2c3e50">
      <div class="container text-center">
        <small class="text-muted">TheNetworkCo © ${new Date().getFullYear()}</small>
      </div>
    </footer>
    `;
    
    const app = document.getElementById("app");
    if (app) {
        // Remove existing footer if any
        const existingFooter = app.querySelector('footer');
        if (existingFooter) existingFooter.remove();
        
        // Add new footer
        app.insertAdjacentHTML('beforeend', footerHTML);
    }
}