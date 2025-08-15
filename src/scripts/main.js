class FocusManager {
    constructor() {
        this.focusableElements = null;
        this.defaultPrimary = null;
        this.currentPrimary = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        try {
            this.focusableElements = document.querySelectorAll('.focusable');
            this.defaultPrimary = document.querySelector('.content-article');
            
            if (!this.defaultPrimary) {
                console.warn('FocusManager: Default primary element not found');
                return;
            }

            this.bindEvents();
            this.setPrimary(this.defaultPrimary);
        } catch (error) {
            console.error('FocusManager setup failed:', error);
        }
    }

    setPrimary(element) {
        if (!element || element === this.currentPrimary) return;
        
        this.focusableElements.forEach(el => el.classList.remove('primary'));
        element.classList.add('primary');
        this.currentPrimary = element;
    }

    bindEvents() {
        this.focusableElements.forEach(element => {
            element.addEventListener('mouseenter', () => this.setPrimary(element), { passive: true });
            element.addEventListener('mouseleave', () => this.setPrimary(this.defaultPrimary), { passive: true });
            
            element.addEventListener('focus', () => this.setPrimary(element), { passive: true });
            element.addEventListener('blur', () => this.setPrimary(this.defaultPrimary), { passive: true });
        });
    }
}

new FocusManager();