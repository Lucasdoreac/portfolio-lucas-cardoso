/**
 * Portfolio JavaScript
 * Handles theme switching, smooth scrolling, and interactive features
 */

class PortfolioManager {
    constructor() {
        this.themeKey = 'portfolio-theme';
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupAnimations();
    }

    // Theme Management
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        if (!themeToggle || !themeIcon) return;

        // Set initial icon based on current theme
        this.updateThemeIcon();

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition disable class temporarily
        document.body.classList.add('theme-transition-disable');
        
        // Set new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(this.themeKey, newTheme);
        
        // Update icon
        this.updateThemeIcon();
        
        // Remove transition disable class after a brief delay
        setTimeout(() => {
            document.body.classList.remove('theme-transition-disable');
        }, 50);
    }

    updateThemeIcon() {
        const themeIcon = document.getElementById('themeIcon');
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        
        if (currentTheme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        // Handle navbar links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Scroll Effects
    setupScrollEffects() {
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar-custom');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                navbar.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
                navbar.style.background = 'rgba(var(--bg-primary-rgb), 0.95)';
            } else {
                navbar.style.transform = 'translateY(0)';
                navbar.style.background = 'var(--bg-primary)';
            }
            
            lastScrollY = currentScrollY;
        });

        // Parallax effect for hero section
        const heroSection = document.querySelector('.hero-section');
        const codeWindow = document.querySelector('.code-window');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (heroSection && scrolled < heroSection.offsetHeight) {
                if (codeWindow) {
                    codeWindow.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                }
            }
        });

        // Reveal animations on scroll
        this.setupScrollReveal();
    }

    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-card, .project-card, .contact-method, .skill-category').forEach(el => {
            observer.observe(el);
        });
    }

    // Animations
    setupAnimations() {
        // Typing effect for hero subtitle
        this.setupTypingEffect();
        
        // Floating animation for code window
        this.setupFloatingAnimation();
        
        // Add CSS for animations
        this.addAnimationStyles();
    }

    setupTypingEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const originalText = subtitle.textContent;
        const words = originalText.split(' ');
        let currentWordIndex = 0;
        let currentText = '';

        subtitle.textContent = '';

        const typeWord = () => {
            if (currentWordIndex < words.length) {
                currentText += (currentWordIndex > 0 ? ' ' : '') + words[currentWordIndex];
                subtitle.textContent = currentText;
                currentWordIndex++;
                setTimeout(typeWord, 300);
            }
        };

        // Start typing effect after a delay
        setTimeout(typeWord, 1000);
    }

    setupFloatingAnimation() {
        const codeWindow = document.querySelector('.code-window');
        if (!codeWindow) return;

        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            const y = Math.sin(progress * 0.001) * 10;
            codeWindow.style.transform = `translateY(${y}px)`;
            
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }

    addAnimationStyles() {
        const styles = `
            <style>
                /* Animation styles */
                .skill-card, .project-card, .contact-method, .skill-category {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s ease;
                }
                
                .skill-card.animate-in, .project-card.animate-in, 
                .contact-method.animate-in, .skill-category.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                /* Staggered animation delay */
                .skill-card:nth-child(1) { transition-delay: 0.1s; }
                .skill-card:nth-child(2) { transition-delay: 0.2s; }
                .skill-card:nth-child(3) { transition-delay: 0.3s; }
                .skill-card:nth-child(4) { transition-delay: 0.4s; }
                
                .skill-category:nth-child(1) { transition-delay: 0.1s; }
                .skill-category:nth-child(2) { transition-delay: 0.2s; }
                .skill-category:nth-child(3) { transition-delay: 0.3s; }
                .skill-category:nth-child(4) { transition-delay: 0.4s; }
                
                .contact-method:nth-child(1) { transition-delay: 0.1s; }
                .contact-method:nth-child(2) { transition-delay: 0.2s; }
                .contact-method:nth-child(3) { transition-delay: 0.3s; }
                
                /* Code highlighting animation */
                .code-content {
                    animation: codeGlow 3s ease-in-out infinite alternate;
                }
                
                @keyframes codeGlow {
                    from { box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.1); }
                    to { box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.2); }
                }
                
                /* Hover effects */
                .hero-social a {
                    position: relative;
                    overflow: hidden;
                }
                
                .hero-social a::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .hero-social a:hover::before {
                    left: 100%;
                }
                
                /* Loading animation for initial page load */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .hero-content > * {
                    animation: fadeInUp 0.8s ease forwards;
                    opacity: 0;
                }
                
                .hero-greeting { animation-delay: 0.1s; }
                .hero-title { animation-delay: 0.2s; }
                .hero-subtitle { animation-delay: 0.3s; }
                .hero-description { animation-delay: 0.4s; }
                .hero-actions { animation-delay: 0.5s; }
                .hero-social { animation-delay: 0.6s; }
                
                /* Navbar animation */
                .navbar-custom {
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                
                /* Button hover effects */
                .btn {
                    position: relative;
                    overflow: hidden;
                }
                
                .btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .btn:hover::before {
                    left: 100%;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Utility Functions
const utils = {
    // Debounce function for scroll events
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Smooth scroll to element
    scrollToElement(element, offset = 0) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle window resize
window.addEventListener('resize', utils.debounce(() => {
    // Recalculate any position-dependent elements
    console.log('Window resized, recalculating positions...');
}, 250));

// Export for global access
window.PortfolioManager = PortfolioManager;
window.utils = utils;