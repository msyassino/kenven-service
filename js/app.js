/* ========================================
   Kenven Service - Main Application Logic
======================================== */

class KenvenApp {
    constructor() {
        this.translation = new TranslationManager();
        this.init();
    }

    init() {
        window.addEventListener('load', () => this.onLoad());
        this.setupPreloader();
        this.setupNavbar();
        this.setupMobileMenu();
        this.setupScrollTop();
        this.setupThemeToggle();
        this.setupStatsCounter();
        this.setupTestimonialsSlider();
        this.setupScrollReveal();
        this.renderServices();
        this.renderTestimonials();
        this.setupLanguageChangeListener();
    }

    /* ===== Page Load ===== */
    onLoad() {
        document.body.classList.add('loaded');
        // Hide preloader after content loads
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) preloader.classList.add('hidden');
        }, 800);
    }

    /* ===== Preloader ===== */
    setupPreloader() {
        // Fallback: hide preloader after 3 seconds even if load event doesn't fire
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) preloader.classList.add('hidden');
        }, 3000);
    }

    /* ===== Navbar Scroll Effect ===== */
    setupNavbar() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    /* ===== Mobile Menu ===== */
    setupMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    /* ===== Scroll to Top Button ===== */
    setupScrollTop() {
        const scrollTopBtn = document.getElementById('scrollTop');
        if (!scrollTopBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ===== Theme Toggle (Dark/Light) ===== */
    setupThemeToggle() {
        const themeBtn = document.getElementById('themeBtn');
        if (!themeBtn) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('kenven_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);

        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('kenven_theme', newTheme);
            this.updateThemeIcon(newTheme);
        });
    }

    updateThemeIcon(theme) {
        const themeBtn = document.getElementById('themeBtn');
        if (!themeBtn) return;
        const icon = themeBtn.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }

    /* ===== Stats Counter Animation ===== */
    setupStatsCounter() {
        const counters = document.querySelectorAll('[data-count]');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                el.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };

        update();
    }

    /* ===== Testimonials Slider ===== */
    setupTestimonialsSlider() {
        this.currentTestimonial = 0;
        this.autoSlideInterval = null;
    }

    renderTestimonials() {
        const slider = document.getElementById('testimonialsSlider');
        const dotsContainer = document.querySelector('.slider-dots');
        if (!slider || !dotsContainer || !window.TESTIMONIALS_DATA) return;

        slider.innerHTML = '';
        dotsContainer.innerHTML = '';

        window.TESTIMONIALS_DATA.forEach((t, index) => {
            const card = document.createElement('div');
            card.className = 'testimonial-card' + (index === 0 ? ' active' : '');
            card.innerHTML = `
                <div class="quote-icon"><i class="fa-solid fa-quote-right"></i></div>
                <p class="testimonial-text" data-en="${this.escapeHtml(t.text.en)}" data-ar="${this.escapeHtml(t.text.ar)}">
                    ${this.translation.currentLang === 'ar' ? t.text.ar : t.text.en}
                </p>
                <div class="testimonial-author">
                    <img src="${t.image}" alt="${this.translation.currentLang === 'ar' ? t.name.ar : t.name.en}">
                    <div>
                        <h4>${this.translation.currentLang === 'ar' ? t.name.ar : t.name.en}</h4>
                        <span>${this.translation.currentLang === 'ar' ? t.role.ar : t.role.en}</span>
                    </div>
                </div>
                <div class="rating">
                    ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
                </div>
            `;
            slider.appendChild(card);

            const dot = document.createElement('span');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => this.goToTestimonial(index));
            dotsContainer.appendChild(dot);
        });

        // Auto slide
        this.startAutoSlide();

        // Pause on hover
        slider.addEventListener('mouseenter', () => clearInterval(this.autoSlideInterval));
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    startAutoSlide() {
        if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = setInterval(() => {
            const total = window.TESTIMONIALS_DATA ? window.TESTIMONIALS_DATA.length : 3;
            const next = (this.currentTestimonial + 1) % total;
            this.goToTestimonial(next);
        }, 5000);
    }

    goToTestimonial(index) {
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');
        if (!cards.length) return;

        cards[this.currentTestimonial]?.classList.remove('active');
        dots[this.currentTestimonial]?.classList.remove('active');

        this.currentTestimonial = index;

        cards[this.currentTestimonial]?.classList.add('active');
        dots[this.currentTestimonial]?.classList.add('active');
    }

    /* ===== Scroll Reveal Animation ===== */
    setupScrollReveal() {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        reveals.forEach(el => observer.observe(el));
    }

    /* ===== Render Services on Homepage ===== */
    renderServices() {
        const grid = document.getElementById('servicesGrid');
        if (!grid || !window.SERVICES_DATA) return;

        grid.innerHTML = '';
        const services = window.SERVICES_DATA.slice(0, 6);

        services.forEach((service, index) => {
            const card = this.createServiceCard(service);
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('reveal', 'fade-in');
            grid.appendChild(card);
        });

        // Re-observe new elements
        this.setupScrollReveal();
    }

    createServiceCard(service) {
        const card = document.createElement('div');
        card.className = 'service-card reveal';
        card.setAttribute('data-delay', '1');

        const lang = this.translation.currentLang;
        const title = service.title[lang];
        const category = service.category[lang];
        const shortDesc = service.shortDesc[lang];
        const features = service.features[lang].slice(0, 3);

        card.innerHTML = `
            <div class="service-image" style="background-image: url('${service.image}')">
                ${service.popular ? `<span class="service-category badge-warning" style="background: var(--accent); color: white;">Popular</span>` : `<span class="service-category">${category}</span>`}
            </div>
            <div class="service-content">
                <h3>${title}</h3>
                <p>${shortDesc}</p>
                <ul class="service-features">
                    ${features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <div class="service-footer">
                    <div class="service-price">
                        <span class="price-label">Starting at</span>
                        <span class="price-value">$${service.price}</span>
                    </div>
                    <div class="service-actions">
                        <a href="service-detail.html?id=${service.id}" class="btn btn-outline icon-action">
                            <i class="fa-solid fa-eye"></i>
                        </a>
                        <button class="btn btn-primary add-to-cart" data-service-id="${service.id}">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add to cart listener
        const addBtn = card.querySelector('.add-to-cart');
        if (addBtn) {
            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.cart) window.cart.addItem(service.id);
            });
        }

        return card;
    }

    /* ===== Language Change Listener ===== */
    setupLanguageChangeListener() {
        window.addEventListener('languageChanged', () => {
            this.renderServices();
            this.renderTestimonials();
        });
    }

    /* ===== Helpers ===== */
    escapeHtml(str) {
        return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.kenvenApp = new KenvenApp();
});