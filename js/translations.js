/* ========================================
   Kenven Service - Translation System
   Bilingual Support (AR/EN)
======================================== */

class TranslationManager {
    constructor() {
        this.currentLang = localStorage.getItem('kenven_lang') || 'en';
        this.init();
    }

    init() {
        this.applyLanguage();
        this.setupListeners();
        this.updateLangButton();
    }

    applyLanguage() {
        const html = document.documentElement;

        if (this.currentLang === 'ar') {
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }

        this.translateElements();
    }

    translateElements() {
        const elements = document.querySelectorAll('[data-en][data-ar]');

        elements.forEach(el => {
            const text = el.getAttribute(`data-${this.currentLang}`);
            if (text) {
                el.textContent = text;
            }
        });

        // Translate placeholders
        const inputs = document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]');
        inputs.forEach(input => {
            const placeholder = input.getAttribute(`data-placeholder-${this.currentLang}`);
            if (placeholder) {
                input.setAttribute('placeholder', placeholder);
            }
        });

        // Translate titles
        const titledElements = document.querySelectorAll('[data-title-en][data-title-ar]');
        titledElements.forEach(el => {
            const title = el.getAttribute(`data-title-${this.currentLang}`);
            if (title) {
                el.setAttribute('title', title);
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('kenven_lang', this.currentLang);
        this.applyLanguage();
        this.updateLangButton();

        // Trigger custom event for other scripts
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLang }
        }));

        // Show notification
        this.showNotification(
            this.currentLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English'
        );
    }

    updateLangButton() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            const span = langBtn.querySelector('span');
            if (span) {
                span.textContent = this.currentLang === 'en' ? 'AR' : 'EN';
            }
        }
    }

    setupListeners() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', () => this.toggleLanguage());
        }

        // Keyboard shortcut (Ctrl + Shift + L)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'L') {
                e.preventDefault();
                this.toggleLanguage();
            }
        });
    }

    showNotification(message) {
        // Remove existing notification
        const existing = document.querySelector('.lang-notification');
        if (existing) existing.remove();

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'lang-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1, #ec4899);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: 600;
            font-size: 14px;
            animation: slideInRight 0.3s ease;
            font-family: ${this.currentLang === 'ar' ? 'Cairo' : 'Poppins'};
        `;

        if (this.currentLang === 'ar') {
            notification.style.right = 'auto';
            notification.style.left = '20px';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            notification.style.transition = 'all 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Get current language
    getLanguage() {
        return this.currentLang;
    }

    // Check if Arabic
    isArabic() {
        return this.currentLang === 'ar';
    }

    // Check if English
    isEnglish() {
        return this.currentLang === 'en';
    }
}

// Export
window.TranslationManager = TranslationManager;