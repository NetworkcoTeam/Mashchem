// WhatsAppButton.js - Fixed WhatsApp button component
export function renderWhatsAppButton() {
    const whatsappButton = document.createElement('div');
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.innerHTML = `
        <a href="https://wa.me/27649486557" 
           class="btn btn-success btn-lg rounded-circle shadow-lg d-flex align-items-center justify-content-center"
           target="_blank"
           aria-label="Chat on WhatsApp">
            <i class="bi bi-whatsapp fs-3"></i>
        </a>
    `;
    
    document.body.appendChild(whatsappButton);
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
            transition: all 0.3s ease;
        }
        
        .whatsapp-button:hover {
            transform: scale(1.1) translateY(-5px);
        }
        
        .whatsapp-button a {
            width: 60px;
            height: 60px;
        }
        
        @media (max-width: 768px) {
            .whatsapp-button {
                bottom: 20px;
                right: 20px;
            }
            
            .whatsapp-button a {
                width: 50px;
                height: 50px;
            }
        }
    `;
    document.head.appendChild(style);
}