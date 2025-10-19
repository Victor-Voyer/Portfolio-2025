// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Effet de parallaxe pour la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation ultra-moderne des cartes de compétences
const skillObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.filter = 'blur(0px)';
                    
                    // Effet de vague
                    setTimeout(() => {
                        card.style.animation = 'wave 0.6s ease forwards';
                    }, index * 50);
                }, index * 150);
            });
        }
    });
}, skillObserverOptions);

// Observer les sections de compétences
document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Animation d'apparition des cartes de compétences
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.8)';
    card.style.filter = 'blur(10px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
});

// Effet de particules pour les cartes
function createSkillParticles(card) {
    const particles = [];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'linear-gradient(45deg, var(--primary-color), var(--accent-color))';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '0';
        particle.style.transition = 'all 0.6s ease';
        
        card.appendChild(particle);
        particles.push(particle);
    }
    
    return particles;
}

// Ajouter les particules aux cartes
document.querySelectorAll('.skill-card').forEach(card => {
    const particles = createSkillParticles(card);
    
    card.addEventListener('mouseenter', () => {
        particles.forEach((particle, index) => {
            const angle = (index * 360) / particles.length;
            const radius = 80;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = '1';
        });
    });
    
    card.addEventListener('mouseleave', () => {
        particles.forEach(particle => {
            particle.style.opacity = '0';
            particle.style.transform = 'translate(0, 0)';
        });
    });
});

// Effet de parallaxe pour les icônes
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        icon.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translate(0, 0) scale(1)';
    });
});

// Animation de vague CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes wave {
        0% { transform: translateY(0) scale(1); }
        25% { transform: translateY(-10px) scale(1.02); }
        50% { transform: translateY(0) scale(1.05); }
        75% { transform: translateY(-5px) scale(1.02); }
        100% { transform: translateY(0) scale(1); }
    }
`;
document.head.appendChild(style);

// Animation des cartes de projets
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// Animation des cartes de parcours
const parcoursObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.parcours-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.filter = 'blur(0px)';
                }, index * 200);
            });
        }
    });
}, {
    threshold: 0.2
});

// Observer la section parcours
const parcoursSection = document.querySelector('.parcours');
if (parcoursSection) {
    parcoursObserver.observe(parcoursSection);
}

// Animation d'apparition des cartes de parcours
document.querySelectorAll('.parcours-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.9)';
    card.style.filter = 'blur(5px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Validation basique
        if (!name || !email || !subject || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        // Simulation d'envoi (remplacer par vraie logique d'envoi)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message envoyé avec succès ! Je vous répondrai dès que possible.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animation de frappe pour le titre
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Appliquer l'animation de frappe au titre principal
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Effet de particules dans le hero (optionnel)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.backgroundColor = '#2563eb';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
        
        hero.appendChild(particle);
    }
}

// CSS pour l'animation des particules
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Activer les particules (optionnel)
// createParticles();

// Gestion des thèmes (fonctionnalité future)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Charger le thème sauvegardé
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Lazy loading pour les images (si ajoutées plus tard)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Compteur animé pour les statistiques
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Observer pour déclencher les compteurs
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('h3');
            const target = parseInt(counter.textContent);
            if (!isNaN(target)) {
                animateCounter(counter, target);
            }
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    counterObserver.observe(stat);
});

// Gestion du scroll vers le haut
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: var(--shadow-lg);
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter des classes d'animation aux éléments
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    console.log('Portfolio de Victor Voyer chargé avec succès !');
});
