// About Page with 3 Cards - Pure JavaScript Implementation
class AboutPage {
    constructor() {
        this.cardsData = [
            {
                id: 1,
                title: 'Our Vision',
                description: 'To become a leading force in the cleaning industry by providing sustainable, effective, and accessible cleaning solutions that uplift communities, protect the environment, and redefine hygiene standards worldwide.',
                stats: []
            },
            {
                id: 2,
                title: 'Our Mission',
                description: 'Our mission is to develop and deliver high quality, affordable detergents and cleaning products that ensure a safer, cleaner world for all. Through continuous innovation, ethical manufacturing, and a customer-first mindset, we aim to make cleanliness a reachable reality for every household and organization.',
                stats: []
            },
            {
                id: 3,
                title: 'Our Strategy',
                description: 'Muschem strategy focuses on combining science driven innovation with local market needs. We invest in research to formulate effective and eco-friendly products, build strong distribution networks to ensure availability, and engage our customers through education and support. By empowering our team and listening to our clients, we aim for growth that is both impactful and responsible.',
                stats: []
            }
        ];
        
        this.init();
    }

    init() {
        this.createStyles();
        this.createHTML();
        this.bindEvents();
        this.animateOnLoad();
    }

    createStyles() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: rgb(213, 227, 220);
                min-height: 100vh;
                padding: 20px;
                color: #333;
            }

            .about-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 40px 20px;
            }

            .about-header {
                text-align: center;
                margin-bottom: 60px;
                color: white;
                background:rgba(50, 190, 97, 0.95);
                border-radius: 20px;
            }

            .about-header h1 {
                font-size: 3rem;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(252, 247, 247, 0.3);
                opacity: 0;
                animation: fadeInUp 1s ease-out forwards;
                color: white;
            }

            .about-header p {
                font-size: 1.2rem;
                opacity: 0;
                animation: fadeInUp 1s ease-out 0.3s forwards;
                color: white;
                padding-bottom: 30px;
            }

            .cards-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 30px;
                margin-top: 40px;
            }

            .card-row {
                display: flex;
                align-items: center;
                gap: 20px;
                width: 100%;
            }

            .card-row.reverse {
                flex-direction: row-reverse;
            }

            .card[data-card="1"] {
                width: 50%;
                height: 150px;
                padding-left: 20px;
            }

            .card[data-card="2"] {
                width: 50%;
                height: 200px;
                padding-left: 20px;
            }

            .card[data-card="3"] {
                width: 50%;
                height: 220px;
                padding-left: 20px;
            }

            .card {
                background: rgba(50, 190, 97, 0.95);
                border-radius: 20px;
                padding: 20px;
                box-shadow: 0 15px 35px rgba(247, 233, 233, 0.88);
                transform: translateY(50px);
                opacity: 0;
                transition: all 0.3s ease;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                height: 270px;
            }

            .card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(238, 226, 226, 0.4), transparent);
                transition: left 0.5s ease;
            }

            .card:hover::before {
                left: 100%;
            }

            .card:hover {
                transform: translateY(-10px);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
            }

            .card.animate {
                transform: translateY(0);
                opacity: 1;
            }

            .card h2 {
                color: white;
                margin-bottom: 15px;
                font-size: 1.5rem;
            }

            .card p {
                color: white;
                line-height: 1.6;
                margin-bottom: 20px;
            }

            .card-stats {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #eee;
            }

            .stat {
                text-align: center;
            }

            .stat-number {
                font-size: 1.5rem;
                font-weight: bold;
                color: #333;
                display: block;
            }

            .stat-label {
                font-size: 0.9rem;
                color: #666;
                margin-top: 5px;
            }

            .card-image {
                width: 500px;
                height: 250px;
                object-fit: cover;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.3s ease;
            }

            .card-image.animate {
                opacity: 1;
                transform: translateY(0);
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(5deg); }
                100% { transform: translateY(0px) rotate(0deg); }
            }

            @media (max-width: 768px) {
                .cards-container {
                    flex-direction: column;
                }
                
                .card-row {
                    flex-direction: column !important;
                    align-items: center;
                    
                }
                
                .card[data-card="1"], 
                .card[data-card="2"], 
                .card[data-card="3"] {
                    width: 100% !important;
                    align-self: stretch !important;
                }
                
                .card-image {
                    width: 100%;
                    margin-top: 20px;
                }
                
                .about-header h1 {
                    font-size: 2rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    createHTML() {
        // Clear existing body content
        document.body.innerHTML = '';

        // Create main container
        const container = document.createElement('div');
        container.className = 'about-container';

        // Create header
        const header = document.createElement('div');
        header.className = 'about-header';
        header.innerHTML = `
            <h1>About Our Company</h1>
            <p>At Maschem, we manufacture powerful, affordable, and safe cleaning solutions designed for homes, businesses, and industries alike. Whether you're scrubbing surfaces or sanitizing entire spaces, every drop of our products is engineered to deliver sparkling, hygienic results. Backed by innovation and a commitment to quality, Maschem brings cleanliness, confidence, and care to every corner.</p>
        `;

        // Create cards container
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container';

        // Generate cards with images
        this.cardsData.forEach((cardData, index) => {
            if (cardData.id === 1) {
                // Card 1: Image next to card
                const cardRow = document.createElement('div');
                cardRow.className = 'card-row';
                
                const card = this.createCard(cardData);
                const image = this.createImage('./image-folder/cleaning1.jpg', 'Vision Image');
                
                cardRow.appendChild(card);
                cardRow.appendChild(image);
                cardsContainer.appendChild(cardRow);
                
            } else if (cardData.id === 2) {
                // Card 2: Image next to card
                const cardRow = document.createElement('div');
                cardRow.className = 'card-row reverse';
                
                const card = this.createCard(cardData);
                const image = this.createImage('./image-folder/cleaning4.jpg', 'Mission Image');
                
                cardRow.appendChild(card);
                cardRow.appendChild(image);
                cardsContainer.appendChild(cardRow);
                
            } else if (cardData.id === 3) {
                // Card 3: Image next to card
                const cardRow = document.createElement('div');
                cardRow.className = 'card-row';
                
                const card = this.createCard(cardData);
                const image = this.createImage('./image-folder/cleaning.jpg', 'Strategy Image');
                
                cardRow.appendChild(card);
                cardRow.appendChild(image);
                cardsContainer.appendChild(cardRow);
            }
        });

        container.appendChild(header);
        container.appendChild(cardsContainer);
        document.body.appendChild(container);
    }

    createCard(data) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.card = data.id;

        // Create card title
        const title = document.createElement('h2');
        title.textContent = data.title;

        // Create card description
        const description = document.createElement('p');
        description.textContent = data.description;

        // Create stats container
        const statsContainer = document.createElement('div');
        statsContainer.className = 'card-stats';

        data.stats.forEach(stat => {
            const statDiv = document.createElement('div');
            statDiv.className = 'stat';
            statDiv.innerHTML = `
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            `;
            statsContainer.appendChild(statDiv);
        });

        // Append all elements to card
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(statsContainer);

        return card;
    }

    createImage(src, alt) {
        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        image.className = 'card-image';
        return image;
    }

    bindEvents() {
        // Add click event listeners to cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px)';
                }, 100);
            });
        });

        // Intersection Observer for counter animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    setTimeout(() => this.animateCounters(), 500);
                }
            });
        });

        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    }

    animateOnLoad() {
        const cards = document.querySelectorAll('.card');
        const images = document.querySelectorAll('.card-image');
        
        // Animate cards with staggered delay
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        });

        // Animate images with staggered delay
        images.forEach((image, index) => {
            setTimeout(() => {
                image.classList.add('animate');
            }, (index + 1) * 300);
        });
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = counter.textContent;
            const isNumber = /^\d+$/.test(target);
            
            if (isNumber) {
                const targetNum = parseInt(target);
                counter.textContent = '0';
                
                const increment = targetNum / 50;
                const timer = setInterval(() => {
                    const current = parseInt(counter.textContent);
                    if (current < targetNum) {
                        counter.textContent = Math.min(current + increment, targetNum);
                    } else {
                        counter.textContent = target;
                        clearInterval(timer);
                    }
                }, 30);
            }
        });
    }
}

// Initialize the About Page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});

// Alternative: Initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AboutPage();
    });
} else {
    new AboutPage();
}

