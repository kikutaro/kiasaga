// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = 'ja';
        this.init();
    }

    init() {
        // Get language buttons
        this.jaBtn = document.getElementById('lang-ja');
        this.enBtn = document.getElementById('lang-en');
        
        // Add event listeners
        this.jaBtn.addEventListener('click', () => this.switchLanguage('ja'));
        this.enBtn.addEventListener('click', () => this.switchLanguage('en'));
        
        // Check if there's a saved language preference
        const savedLang = localStorage.getItem('kiasaga-language');
        if (savedLang) {
            this.switchLanguage(savedLang);
        } else {
            // Default to Japanese
            this.switchLanguage('ja');
        }
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update button states
        this.jaBtn.classList.toggle('active', lang === 'ja');
        this.enBtn.classList.toggle('active', lang === 'en');
        
        // Update all text elements
        this.updateTexts(lang);
        
        // Save language preference
        localStorage.setItem('kiasaga-language', lang);
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update page title
        document.title = lang === 'ja' ? 
            'きあらちゃんをさがせ | kiasaga - Looking for Kiara-chan' :
            'kiasaga - Looking for Kiara-chan | きあらちゃんをさがせ';
    }

    updateTexts(lang) {
        // Get all elements with language data attributes
        const elements = document.querySelectorAll('[data-ja][data-en]');
        
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }
}

// Smooth scroll animation for internal links
function initSmoothScroll() {
    // Add smooth scrolling for any future internal links
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const gameScreen = document.querySelector('.game-screen');
    
    if (!hero || !gameScreen) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (scrolled < window.innerHeight) {
            gameScreen.style.transform = `perspective(1000px) rotateY(-5deg) translateY(${rate}px)`;
        }
    });
}

// Add floating particles effect
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);

    const particles = ['💖', '⭐', '✨', '🌸', '💫'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 10}px;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: float 8s linear infinite;
            opacity: 0.7;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Add CSS for float animation
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.7;
                }
                90% {
                    opacity: 0.7;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Create particles periodically
    setInterval(createParticle, 3000);
}

// Game screen hover effect
function initGameScreenEffect() {
    const gameScreen = document.querySelector('.game-screen');
    const gameScreenshot = document.querySelector('.game-screenshot');
    
    if (!gameScreen || !gameScreenshot) return;

    gameScreen.addEventListener('mouseenter', () => {
        gameScreenshot.style.filter = 'brightness(1.1) saturate(1.2)';
    });

    gameScreen.addEventListener('mouseleave', () => {
        gameScreenshot.style.filter = 'none';
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language switcher
    new LanguageSwitcher();
    
    // Initialize other features
    initSmoothScroll();
    initScrollAnimations();
    initParallax();
    initGameScreenEffect();
    
    // Add floating particles after a short delay
    setTimeout(createFloatingParticles, 1000);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Recalculate any size-dependent features if needed
    // This is a placeholder for future responsive features
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close any modals (future feature)
    if (e.key === 'Escape') {
        // Handle escape key if needed
    }
    
    // Add accessibility improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add CSS for keyboard navigation
const keyboardNavStyle = document.createElement('style');
keyboardNavStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 3px solid #ff69b4 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardNavStyle);