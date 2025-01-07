// Project data object
const projectsData = {
    'campus-sports-sphere': {
        title: 'Campus Sports Sphere',
        coverImage: 'assets/css/cover.png',
        description: 'A comprehensive Automated sports management system combining web and mobile technologies to streamline University sports activities.',
        videoPath: 'assets/projects/css/demo.mp4',
        technologies: [
            'JavaScript', 'Python', 'React', 'React Native', 'Node.js', 'Flask','Firebase', 'Express'
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
            'ReactNative', 'Firebase', 'Zustand', 
        ],
        features: [
            'Real-time order tracking system',
            'Secure payment integration',
            'Restaurant dashboard for ordering Food',
            'Customer rating and review system',
            'Dynamic menu management',
        ]
    },
    // ... other projects
};

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
    
    // Set cover image
    document.getElementById('coverImage').src = project.coverImage;
    
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
        videoContainer.innerHTML = `
            <video 
                controls 
                autoplay 
                muted 
                loop 
                class="project-video"
            >
                <source src="${project.videoPath}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);