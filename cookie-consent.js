/**
 * Cookie Consent Banner - RGPD/GDPR Compliance
 * Gestiona el consentimiento de cookies del usuario
 */

class CookieConsent {
    constructor() {
        this.cookieName = 'sim-cookie-consent';
        this.cookieValue = 'accepted';
        this.cookieExpireDays = 365;
        this.bannerId = 'cookie-consent-banner';
        
        // Verificar si ya hay consentimiento previo
        if (!this.hasConsent()) {
            this.showBanner();
        } else {
            this.enableAnalytics();
        }
    }

    /**
     * Verificar si el usuario ya ha dado consentimiento
     */
    hasConsent() {
        return this.getCookie(this.cookieName) === this.cookieValue;
    }

    /**
     * Obtener el valor de una cookie
     */
    getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    }

    /**
     * Establecer una cookie
     */
    setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    /**
     * Mostrar el banner de consentimiento
     */
    showBanner() {
        const banner = document.createElement('div');
        banner.id = this.bannerId;
        banner.innerHTML = `
            <div class="cookie-consent-container">
                <div class="cookie-consent-content">
                    <div class="cookie-consent-text">
                        <h3>🍪 Aviso de Cookies</h3>
                        <p>Utilizamos cookies para mejorar tu experiencia de navegación y para analizar el tráfico de la web. Conforme al <strong>RGPD</strong>, necesitamos tu consentimiento explícito.</p>
                        <p>
                            <a href="politica-cookies.html" target="_blank" class="cookie-link">📋 Leer política de cookies</a>
                        </p>
                    </div>
                    <div class="cookie-consent-buttons">
                        <button id="cookie-reject" class="cookie-btn cookie-btn-reject">Rechazar</button>
                        <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Aceptar</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => this.acceptCookies());
        document.getElementById('cookie-reject').addEventListener('click', () => this.rejectCookies());
    }

    /**
     * Aceptar cookies
     */
    acceptCookies() {
        this.setCookie(this.cookieName, this.cookieValue, this.cookieExpireDays);
        this.removeBanner();
        this.enableAnalytics();
    }

    /**
     * Rechazar cookies (pero mantener funcionalidad básica)
     */
    rejectCookies() {
        this.setCookie(this.cookieName, 'rejected', this.cookieExpireDays);
        this.removeBanner();
        console.log('Cookies de análisis rechazadas por el usuario.');
    }

    /**
     * Remover el banner de la pantalla
     */
    removeBanner() {
        const banner = document.getElementById(this.bannerId);
        if (banner) {
            banner.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    /**
     * Habilitar Google Analytics u otros servicios de análisis
     */
    enableAnalytics() {
        // Aquí puedes agregar código de Google Analytics, Hotjar, etc.
        // Ejemplo con Google Analytics:
        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
        */
        console.log('Analytics habilitado');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});
