// Add this at the beginning of the file, before projectsData
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Add theme initialization to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    loadProjectDetails();
});

// Project data object
const projectsData = {
    'campus-sports-sphere': {
        title: 'Campus Sports Sphere',
        coverImage: 'assets/css/cover.png',
        description: 'A comprehensive Automated sports management system combining web and mobile technologies to streamline University sports activities.',
        videoPath: 'br6cqm',
        videoAspectRatio: '9-16',
        technologies: [
            'JavaScript', 'Python', 'React', 'React Native', 'Node.js', 'Flask','Firebase'
        ],
        features: [
            'Real-time sports event management',
            'Mobile app for students and administrators',
            'Automated scheduling system',
            'Digital scoreboard and statistics',
        ]
    },
    'quickbite': {
        title: 'QuickBite',
        coverImage: 'assets/quickbite/cover.png',
        description: 'A modern food delivery platform that lets you Order FastFood, featuring real-time order History Tracking and seamless payment integration.',
        videoPath: 'assets/projects/quickbite/demo.mp4',
        technologies: [
            'ReactNative', 'Firebase', 'Zustand', 'AsyncStorage'
        ],
        features: [
            'Real-time order tracking system',
            'Secure payment integration',
            'Restaurant dashboard for ordering Food',
            'Customer rating and review system',
            'Dynamic menu management',
        ]
    },
    'ai-showcase': {
        title: 'AI Showcase',
        
        coverImage: [
            'assets/ai-showcase/cover.png',
            'assets/ai-showcase/cover1.png'
        ],
        description: 'A modern, feature-rich AI development platform that combines multiple AI-powered tools to enhance developer productivity.',
        videoPath: 'i7l7i2',
        videoAspectRatio: '16-9',
        technologies: [
            'React.js', 'Chakra UI', 'Framer Motion', 'Node.js', 'OpenAI API'
        ],
        features: [
            '🎯 AI Code Assistant - Real-time code suggestions and pair programming',
            '📝 Resume Analyzer - AI-powered resume optimization',
            '👥 Dev Community - Collaborative development environment',
            '📊 Smart Analytics - Track coding progress with AI insights',
            '☁️ Cloud Workspace - Secure, integrated development environment',
            '🔌 API Integration - Connect with your favorite dev tools'
        ]
    },
    // ... other projects
};

function createFullscreenIndicator() {
    return `
        <div class="fullscreen-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3h7v2H5v5H3V3m18 0h-7v2h5v5h2V3M3 21h7v-2H5v-5H3v7m18 0h-7v-2h5v-5h2v7"/>
            </svg>
            Click to expand
        </div>
    `;
}

// Load project details based on URL parameter
function loadProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData[projectId];

    if (!project) {
        window.location.href = 'index.html#projects';
        return;
    }

    // Set project title
    document.getElementById('projectTitle').textContent = project.title;
    
    // Add fullscreen overlay to the body
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    document.body.appendChild(overlay);

    // Handle click events for both single image and slider cases
    if (Array.isArray(project.coverImage)) {
        const coverImageContainer = document.getElementById('coverImage').parentElement;
        coverImageContainer.innerHTML = `
            <div class="slider-container">
                <div class="slider">
                    ${project.coverImage.map(img => `
                        <div class="slide-wrapper">
                            <img src="${img}" alt="Project Cover Image" class="slide">
                            ${createFullscreenIndicator()}
                        </div>
                    `).join('')}
                </div>
                <button class="slider-btn prev">❮</button>
                <button class="slider-btn next">❯</button>
                <div class="slider-dots">
                    ${project.coverImage.map((_, index) => `
                        <span class="dot${index === 0 ? ' active' : ''}" data-index="${index}"></span>
                    `).join('')}
                </div>
            </div>
        `;

        // Initialize slider
        initializeSlider();

        // Add click handlers to slides
        document.querySelectorAll('.slide').forEach(slide => {
            slide.addEventListener('click', () => {
                showFullscreen(slide.src);
            });
        });
    } else {
        const coverImageContainer = document.getElementById('coverImage').parentElement;
        coverImageContainer.innerHTML = `
            <div class="image-wrapper">
                <img id="coverImage" src="${project.coverImage}" alt="Project Cover Image">
                ${createFullscreenIndicator()}
            </div>
        `;

        // Add click handler to single image
        document.getElementById('coverImage').addEventListener('click', (e) => {
            showFullscreen(e.target.src);
        });
    }
    
    // Set description
    document.getElementById('projectDescription').textContent = project.description;

    // Load technologies
    const techStack = document.getElementById('techStack');
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.classList.add('tech-badge');
        badge.textContent = tech;
        techStack.appendChild(badge);
    });

    // Load features
    const featuresList = document.getElementById('featuresList');
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Load video
    if (project.videoPath) {
        const videoContainer = document.getElementById('videoContainer');
        const aspectRatioClass = `aspect-${project.videoAspectRatio}`;
        
        videoContainer.className = `video-container ${aspectRatioClass}`;
        
        // Different padding-bottom for different aspect ratios
        const paddingBottom = project.videoAspectRatio === '16-9' ? '56.25%' : '177.778%';
        
        videoContainer.innerHTML = `
            <div style="position:relative; width:100%; height:0px; padding-bottom:${paddingBottom}">
                <iframe 
                    src="https://streamable.com/e/${project.videoPath}?autoplay=1"
                    frameborder="0"
                    width="100%"
                    height="100%"
                    allowfullscreen
                    allow="autoplay"
                    style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"
                ></iframe>
            </div>
        `;
    }
}

function initializeSlider() {
    let currentSlide = 0;
    const slider = document.querySelector('.slider');
    const slideWrappers = document.querySelectorAll('.slide-wrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideWrappers.length;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideWrappers.length) % slideWrappers.length;
        updateSlider();
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Initial state
    updateSlider();
}

function showFullscreen(imageSrc) {
    const overlay = document.querySelector('.fullscreen-overlay');
    overlay.innerHTML = `<img src="${imageSrc}" class="fullscreen-image" alt="Fullscreen Image">`;
    overlay.classList.add('active');

    // Close on click
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    // Close on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
}