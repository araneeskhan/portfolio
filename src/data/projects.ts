// TypeScript type definitions
export interface Screenshot {
  path: string;
  type: "mobile" | "web";
  alt?: string;
}

export interface Project {
  title: string;
  coverImage: string | string[];
  description: string;
  videoPath?: string;
  videoAspectRatio?: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  screenshots?: Screenshot[];
}

// Project data object
export const projectsData: Record<string, Project> = {
  "campus-sports-sphere": {
    title: "Campus Sports Sphere",
    coverImage: "/portfolio/assets/css/cover.png",
    description:
      "A comprehensive Automated sports management system combining web and mobile technologies to streamline University sports activities.",
    videoPath: "br6cqm",
    videoAspectRatio: "9-16",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "React Native",
      "Node.js",
      "Flask",
      "Firebase",
    ],
    features: [
      "Real-time sports event management",
      "Mobile app for students and administrators",
      "Automated scheduling system",
      "Digital scoreboard and statistics",
    ],
    githubUrl: "https://github.com/araneeskhan/CampusSportsSphere",
    screenshots: [
      { path: "/portfolio/assets/css/screenshot1.png", type: "web" },
      { path: "/portfolio/assets/css/screenshot.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot2.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot3.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot7.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot9.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot10.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot11.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot12.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot13.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot14.png", type: "mobile" },
      { path: "/portfolio/assets/css/screenshot15.png", type: "mobile" },
    ]
  },
  quickbite: {
    title: "QuickBite",
    coverImage: "/portfolio/assets/quickbite/cover.png",
    description:
      "A modern food delivery platform that lets you Order FastFood, featuring real-time order History Tracking and seamless payment integration.",
    videoPath: "/assets/projects/quickbite/demo.mp4",
    technologies: ["ReactNative", "Firebase", "Zustand", "AsyncStorage"],
    features: [
      "Real-time order tracking system",
      "Secure payment integration",
      "Restaurant dashboard for ordering Food",
      "Customer rating and review system",
      "Dynamic menu management",
    ],
    githubUrl: "https://github.com/araneeskhan/QuickBite",

  },
  "ai-showcase": {
    title: "AI Showcase",
    coverImage: [
      "/portfolio/assets/ai-showcase/cover.png",
      "/assets/ai-showcase/cover1.png",
    ],
    description:
      "A modern, feature-rich AI development platform that combines multiple AI-powered tools to enhance developer productivity.",
    videoPath: "i7l7i2",
    videoAspectRatio: "16-9",
    technologies: [
      "React.js",
      "Chakra UI",
      "Framer Motion",
      "Node.js",
      "OpenAI API",
    ],
    features: [
      "🎯 AI Code Assistant - Real-time code suggestions and pair programming",
      "📝 Resume Analyzer - AI-powered resume optimization",
      "👥 Dev Community - Collaborative development environment",
      "📊 Smart Analytics - Track coding progress with AI insights",
      "☁️ Cloud Workspace - Secure, integrated development environment",
      "🔌 API Integration - Connect with your favorite dev tools",
    ],
    githubUrl: "https://github.com/araneeskhan/AiShowCase",
  },
  store: {
    title: "E-Store",
    coverImage: ["/portfolio/assets/store/cover.png"],
    description:
      "AI-Based Store is an innovative e-commerce platform that leverages to provide personalized shopping experiences. Users can browse a wide range of products, manage their shopping cart, and enjoy a seamless checkout process.",
    videoPath: "yyk79t",
    videoAspectRatio: "16-9",
    technologies: [
      "Next.js",
      "Chakra UI",
      "Framer Motion",
      "Node.js",
      "Tailwind css",
    ],
    features: [
      "User Authentication (Login/Signup)",
      "Admin Dashboard for Product Management",
      "User Dashboard for Products",
      "Product Recommendations",
      "Products Filtration",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/araneeskhan/Store",
  },

  bankee: {
    title: "Bankee - Mobile Banking App",
    coverImage: ["/portfolio/assets/bankee/cover.png"],
    description:
      "Bankee is a modern, feature-rich mobile banking application built with React Native and Expo. It provides a seamless banking experience and comprehensive financial management features.",
    videoPath: "yyk79t",
    videoAspectRatio: "16-9",
    technologies: ["React Native", "Firebase", "Expo"],
    features: [
      "🔐 Secure Authentication",
      "💳 Wallet ",
      "👥 Contacts (or Send & Receive Money)",
      "💸 Easy Transfers",
      "📊 Transaction History",
      "🔔 Real-time Notifications",
      "💰 Subscriptions",
    ],
    githubUrl: "https://github.com/araneeskhan/Bankee",
  },
  mafiaempire: {
    title: "Mafia Empire",
    coverImage: ["/portfolio/assets/mafiaempire/cover.png"],
    description:
      "Mafia Empire is a mobile game that puts you in control of your own criminal organization in a cyberpunk-themed world. Build your empire, recruit gang members, complete missions, and battle for control of territories.",
    videoPath: "yyk79t",
    videoAspectRatio: "16-9",
    technologies: ["React Native", "Firebase", "Expo", "Zustand"],
    features: [
      "Criminal Career Progression: Start as a street thug and rise to become a powerful crime lord",
      "Gang Management: Recruit and upgrade various types of gang members with unique abilities",
      "Business Empire: Purchase and upgrade businesses to generate passive income",
      "Mission System: Complete various missions to earn rewards and reputation",
      "Territory Control: Battle other players for control of valuable territories",
      "Achievement System: Complete achievements to earn special rewards",
    ],
    githubUrl: "https://github.com/araneeskhan/MafiaEmpire",
  },
};
