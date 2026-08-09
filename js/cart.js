/* ========================================
   Kenven Service - Shopping Cart System
   Full Cart with localStorage
======================================== */

class CartManager {
    constructor() {
        this.cartKey = 'kenven_cart';
        this.items = this.loadCart();
        this.init();
    }

    init() {
        this.setupCartDrawer();
        this.updateUI();
        this.setupCheckoutButton();
        window.addEventListener('languageChanged', () => this.updateUI());
    }

    /* ===== LocalStorage ===== */
    loadCart() {
        try {
            const data = localStorage.getItem(this.cartKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    saveCart() {
        localStorage.setItem(this.cartKey, JSON.stringify(this.items));
    }

    /* ===== Cart Operations ===== */
    addItem(serviceId) {
        const service = window.SERVICES_DATA.find(s => s.id === serviceId);
        if (!service) return;

        const existingItem = this.items.find(item => item.id === serviceId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: service.id,
                title: { ...service.title },
                price: service.price,
                image: service.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateUI();
        this.showNotification(this.getTranslation('addedToCart'));
        this.openDrawer();
    }

    removeItem(serviceId) {
        this.items = this.items.filter(item => item.id !== serviceId);
        this.saveCart();
        this.updateUI();
    }

    updateQuantity(serviceId, quantity) {
        const item = this.items.find(i => i.id === serviceId);
        if (!item) return;

        if (quantity <= 0) {
            this.removeItem(serviceId);
            return;
        }

        item.quantity = quantity;
        this.saveCart();
        this.updateUI();
    }

    clearCart() {
        if (confirm(this.getTranslation('confirmClear'))) {
            this.items = [];
            this.saveCart();
            this.updateUI();
        }
    }

    /* ===== Calculations ===== */
    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getTax() {
        return this.getSubtotal() * 0.05; // 5% tax
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    /* ===== UI Updates ===== */
    updateUI() {
        this.updateCartCount();
        this.renderCartItems();
        this.updateCartTotals();
    }

    updateCartCount() {
        const countEl = document.getElementById('cartCount');
        if (countEl) {
            const count = this.getItemCount();
            countEl.textContent = count;
            countEl.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    renderCartItems() {
        const container = document.getElementById('cartItems');
        if (!container) return;

        const lang = this.getLang();

        if (this.items.length === 0) {
            container.innerHTML = `
                <div class="empty-cart">
                    <i class="fa-solid fa-cart-shopping" style="font-size: 48px; color: var(--light-3); margin-bottom: 16px;"></i>
                    <p>${this.getTranslation('emptyCart')}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                <div class="cart-item-info">
                    <h4>${item.title[lang]}</h4>
                    <p class="price">$${item.price}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('');

        // Attach listeners
        container.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => {
                this.removeItem(parseInt(btn.dataset.id));
            });
        });

        container.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                const item = this.items.find(i => i.id === id);
                if (!item) return;

                if (btn.dataset.action === 'increase') {
                    this.updateQuantity(id, item.quantity + 1);
                } else {
                    this.updateQuantity(id, item.quantity - 1);
                }
            });
        });
    }

    updateCartTotals() {
        const totalEl = document.getElementById('cartTotal');
        if (totalEl) {
            totalEl.textContent = `$${this.getTotal().toFixed(2)}`;
        }
    }

    /* ===== Cart Drawer ===== */
    setupCartDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const closeBtn = document.getElementById('closeCart');
        const overlay = document.getElementById('cartOverlay');
        const cartBtn = document.querySelector('.cart-btn');

        if (!drawer) return;

        if (cartBtn) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openDrawer();
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDrawer());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeDrawer());
        }

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeDrawer();
        });
    }

    openDrawer() {
        const drawer = document.getElementById('cartDrawer');
        if (drawer) drawer.classList.add('open');
    }

    closeDrawer() {
        const drawer = document.getElementById('cartDrawer');
        if (drawer) drawer.classList.remove('open');
    }

    /* ===== Checkout ===== */
    setupCheckoutButton() {
        document.addEventListener('click', (e) => {
            const checkoutBtn = e.target.closest('a[href="checkout.html"]');
            if (checkoutBtn && this.items.length === 0) {
                e.preventDefault();
                this.showNotification(this.getTranslation('cartEmpty'));
            }
        });
    }

    /* ===== Notifications ===== */
    showNotification(message) {
        const existing = document.querySelector('.cart-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fa-solid fa-check-circle"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 14px 22px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            z-index: 10000;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            notification.style.transition = 'all 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2500);
    }

    /* ===== Helpers ===== */
    getLang() {
        return document.documentElement.getAttribute('lang') || 'en';
    }

    getTranslation(key) {
        const translations = {
            en: {
                addedToCart: '✓ Added to cart successfully',
                emptyCart: 'Your cart is empty. Add some services first!',
                confirmClear: 'Are you sure you want to clear your cart?',
                cartEmpty: 'Your cart is empty'
            },
            ar: {
                addedToCart: '✓ تمت الإضافة للسلة بنجاح',
                emptyCart: 'سلتك فارغة. أضف بعض الخدمات أولاً!',
                confirmClear: 'هل أنت متأكد من إفراغ السلة؟',
                cartEmpty: 'سلتك فارغة'
            }
        };
        const lang = this.getLang();
        return translations[lang][key] || translations.en[key];
    }
}

// Initialize
window.cart = new CartManager();