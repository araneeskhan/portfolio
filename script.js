function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');
    
    if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Set initial theme
document.addEventListener('DOMContentLoaded', () => {
    // Set light as default if no theme is stored
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update icon visibility based on current theme
    updateThemeIcon(savedTheme);
});

// Smooth scroll for navigation links
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

// Initialize AOS with custom settings
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        offset: 0,
        once: true,
        mirror: false,
        startEvent: 'load',
        disable: 'mobile'
    });
});
  