function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
// Theme toggle functionality
function toggleTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon visibility
    document.getElementById('theme-light').style.display = 
        theme === 'dark' ? 'block' : 'none';
    document.getElementById('theme-dark').style.display = 
        theme === 'light' ? 'block' : 'none';
}

// Set initial theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(savedTheme);
});

// Initialize AOS with custom settings
AOS.init({
    duration: 800,
    offset: 100,
    once: false,
    mirror: true,
    easing: 'ease-out-cubic'
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.8,
    lerp: 0.1,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

// Parallax effect for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${-yPercent}deg)
            rotateY(${xPercent}deg)
            translateZ(10px)
        `;
        
        const image = card.querySelector('.project-image img');
        if (image) {
            image.style.transform = `
                scale(1.1)
                translateX(${-xPercent * 0.5}px)
                translateY(${-yPercent * 0.5}px)
            `;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
        const image = card.querySelector('.project-image img');
        if (image) {
            image.style.transform = 'none';
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            scroll.scrollTo(target, {
                offset: -100,
                duration: 1000,
                easing: [0.25, 0.1, 0.25, 1]
            });
        }
    });
});

// Intersection Observer for revealing elements
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .section__text__p1, .title').forEach(el => {
    observer.observe(el);
});

// Add magnetic effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 40;
        const yPercent = (y / rect.height - 0.5) * 40;
        
        btn.style.transform = `
            translate(${xPercent}px, ${yPercent}px)
            scale(1.1)
        `;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'none';
    });
});
  