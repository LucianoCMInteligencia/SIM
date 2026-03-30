// ============================================
// Common Scripts for All Pages
// ============================================

// 1. DOM Ready Function
function onDOMReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// 2. Utility Functions
const Utils = {
    getElement: (id) => document.getElementById(id),
    getElements: (className) => document.querySelectorAll(`.${className}`),
    addEventListener: (element, event, callback) => {
        if (element) element.addEventListener(event, callback);
    },
    hide: (element) => { if (element) element.style.display = 'none'; },
    show: (element) => { if (element) element.style.display = 'block'; },
    addClass: (element, className) => { if (element) element.classList.add(className); },
    removeClass: (element, className) => { if (element) element.classList.remove(className); },
    setText: (element, text) => { if (element) element.textContent = text; }
};

// 3. Navigation Handler
const Navigation = {
    init: function() {
        const navToggle = Utils.getElement('nav-toggle');
        const navMenu = Utils.getElement('nav-menu');
        
        if (navToggle) {
            Utils.addEventListener(navToggle, 'click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }
};

// 4. Initialize on page load
onDOMReady(function() {
    Navigation.init();
    console.log('Page initialized');
});

// ============================================
// FULLSCREEN IMAGE VIEWER (CORRECTO)
// ============================================

const overlay = document.getElementById("fullscreen-overlay");
const fullscreenImg = document.getElementById("fullscreen-img");

// Todas las imágenes clicables
document.querySelectorAll(".img-conclusiones").forEach(img => {
    img.addEventListener("click", () => {
        fullscreenImg.src = img.src;   // Carga la imagen clicada
        overlay.classList.add("active");
    });
});

// Cerrar fullscreen al hacer clic
overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    fullscreenImg.src = "";
});
