export interface Screenshot {
  path: string;
  type: "mobile" | "web";
  alt?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  coverImage: string | string[];
  description: string;
  shortDescription?: string;
  category?: string;
  status?: string;
  role?: string;
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  videoPath?: string;
  videoAspectRatio?: string;
  technologies: string[];
  features: string[];
  highlights?: string[];
  metrics?: ProjectMetric[];
  githubUrl: string;
  caseStudyUrl?: string;
  screenshots?: Screenshot[];
}

export const projectsData: Record<string, Project> = {
  "recover-care": {
    title: "RecoverCare",
    coverImage: "/assets/recovercare/cover-recover_care.png",
    shortDescription:
      "A hospital post-surgery recovery app with check-ins, care-team messaging, medication tracking, and intelligent alerting.",
    category: "HealthTech",
    status: "Full-Stack Mobile",
    role: "Product engineer",
    year: "2026",
    featured: true,
    description:
      "RecoverCare bridges the gap between surgical discharge and full recovery. Patients submit daily health check-ins, track medications, message their care team, review recovery trends, and trigger smart alerts when dangerous symptom patterns appear.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "JWT",
    ],
    features: [
      "Recovery dashboard with progress, vitals, milestones, and upcoming tasks",
      "Daily guided check-ins for mood, pain, symptoms, vitals, and review",
      "Secure care-team messaging with read receipts and online status",
      "Medication tracker with dose schedules, progress bars, and PRN support",
      "Four-tier alert engine for critical, high, medium, and low severity risks",
      "Wound photo journal, symptom glossary, appointments, and health reports",
    ],
    highlights: [
      "Designed a complete mobile-plus-API healthcare workflow around post-surgical recovery",
      "Built a Dockerized Express and PostgreSQL backend with Prisma models and seeded demo data",
      "Implemented clinical-style alert rules that escalate risky symptom combinations",
    ],
    metrics: [
      { label: "Severity Engine", value: "4 Tiers" },
      { label: "Stack", value: "Mobile + API" },
    ],
    githubUrl: "https://github.com/araneeskhan/recover-care",
    screenshots: [
      {
        path: "https://raw.githubusercontent.com/araneeskhan/recover-care/main/docs/screenshots/home.png",
        type: "mobile",
        alt: "RecoverCare home dashboard",
      },
      {
        path: "https://raw.githubusercontent.com/araneeskhan/recover-care/main/docs/screenshots/checkin.png",
        type: "mobile",
        alt: "RecoverCare daily check-in flow",
      },
      {
        path: "https://raw.githubusercontent.com/araneeskhan/recover-care/main/docs/screenshots/messages.png",
        type: "mobile",
        alt: "RecoverCare secure messaging screen",
      },
      {
        path: "https://raw.githubusercontent.com/araneeskhan/recover-care/main/docs/screenshots/medications.png",
        type: "mobile",
        alt: "RecoverCare medications tracker",
      },
      {
        path: "https://raw.githubusercontent.com/araneeskhan/recover-care/main/docs/screenshots/recovery.png",
        type: "mobile",
        alt: "RecoverCare recovery trends screen",
      },
    ],
  },
  "campus-sports-sphere": {
    title: "Campus Sports Sphere",
    coverImage: "/assets/css/cover.png",
    shortDescription:
      "A university sports operating system for events, teams, scoring, scheduling, and mobile access.",
    category: "Sports Management",
    status: "Award Winning",
    role: "Full-stack and mobile developer",
    year: "2024",
    featured: true,
    description:
      "A comprehensive automated sports management system combining web and mobile technologies to streamline university sports activities.",
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
    highlights: [
      "Built separate web and mobile experiences for university sports operations",
      "Designed workflows for events, teams, match updates, and administrative control",
      "Won 1st position in Career Expo 2024 hybrid category",
    ],
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Award", value: "1st Place" },
      { label: "Screens", value: "12+" },
    ],
    githubUrl: "https://github.com/araneeskhan/CampusSportsSphere",
    caseStudyUrl: "/case-studies/campus-sports-sphere",
    screenshots: [
      { path: "/assets/css/screenshot1.png", type: "web" },
      { path: "/assets/css/screenshot.png", type: "mobile" },
      { path: "/assets/css/screenshot2.png", type: "mobile" },
      { path: "/assets/css/screenshot3.png", type: "mobile" },
      { path: "/assets/css/screenshot7.png", type: "mobile" },
      { path: "/assets/css/screenshot9.png", type: "mobile" },
      { path: "/assets/css/screenshot10.png", type: "mobile" },
      { path: "/assets/css/screenshot11.png", type: "mobile" },
      { path: "/assets/css/screenshot12.png", type: "mobile" },
      { path: "/assets/css/screenshot13.png", type: "mobile" },
      { path: "/assets/css/screenshot14.png", type: "mobile" },
      { path: "/assets/css/screenshot15.png", type: "mobile" },
    ],
  },
  docuforge: {
    title: "DocuForge",
    coverImage: "/assets/docuforge/cover.png",
    shortDescription:
      "An offline document formatting engine that converts messy text and Word files into polished DOCX/PDF outputs.",
    category: "Document Automation",
    status: "AI-Independent Engine",
    role: "Full-stack developer",
    year: "2026",
    featured: true,
    description:
      "DocuForge is a professional document formatting engine that works locally without paid AI APIs. It standardizes raw text or badly formatted DOC/DOCX files into publication-ready DOCX and PDF exports using deterministic Python rules.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "Python",
      "python-docx",
      "ReportLab",
      "spaCy",
    ],
    features: [
      "Offline, API-free document processing with no external model dependency",
      "Rule-based formatting for headings, typography, spacing, smart quotes, and justification",
      "DOCX and PDF export generation",
      "Robust parsing for TXT, DOC, and DOCX inputs",
      "FastAPI backend with a modern React and TypeScript frontend",
    ],
    highlights: [
      "Built a deterministic formatting pipeline instead of relying on unpredictable AI output",
      "Separated document parsing, formatting rules, and export generation into a maintainable backend",
      "Designed for privacy-sensitive workflows where documents should stay local",
    ],
    metrics: [
      { label: "API Cost", value: "$0" },
      { label: "Exports", value: "DOCX/PDF" },
      { label: "Mode", value: "Offline" },
    ],
    githubUrl: "https://github.com/araneeskhan/docuforge",
    screenshots: [{ path: "/assets/docuforge/cover.png", type: "web" }],
  },
  quickbite: {
    title: "QuickBite",
    coverImage: "/assets/quickbite/cover.png",
    shortDescription:
      "A mobile-first food ordering experience with order history, menu flows, and persistent state.",
    category: "Food Delivery",
    status: "Mobile App",
    role: "React Native developer",
    year: "2025",
    description:
      "A modern food delivery platform for fast food ordering, featuring order history tracking, dynamic menus, and persistent mobile state.",
    technologies: ["React Native", "Firebase", "Zustand", "AsyncStorage"],
    features: [
      "Real-time order tracking system",
      "Secure payment integration",
      "Restaurant dashboard for ordering food",
      "Customer rating and review system",
      "Dynamic menu management",
    ],
    githubUrl: "https://github.com/araneeskhan/QuickBite",
    screenshots: [{ path: "/assets/quickbite/cover.png", type: "web" }],
  },
  "ai-showcase": {
    title: "AI Showcase",
    coverImage: ["/assets/ai-showcase/cover.png", "/assets/ai-showcase/cover1.png"],
    shortDescription:
      "A developer productivity platform combining AI assistance, resume analysis, community, and analytics.",
    category: "AI Platform",
    status: "AI Product",
    role: "Full-stack developer",
    year: "2025",
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
      "AI Code Assistant - Real-time code suggestions and pair programming",
      "Resume Analyzer - AI-powered resume optimization",
      "Dev Community - Collaborative development environment",
      "Smart Analytics - Track coding progress with AI insights",
      "Cloud Workspace - Secure, integrated development environment",
      "API Integration - Connect with developer tools",
    ],
    githubUrl: "https://github.com/araneeskhan/AiShowCase",
    screenshots: [
      { path: "/assets/ai-showcase/cover.png", type: "web" },
      { path: "/assets/ai-showcase/cover1.png", type: "web" },
    ],
  },
  store: {
    title: "E-Store",
    coverImage: ["/assets/store/cover.png"],
    shortDescription:
      "An e-commerce platform with dashboards, product management, filtering, and recommendations.",
    category: "E-Commerce",
    status: "Web App",
    role: "Full-stack developer",
    year: "2025",
    description:
      "AI-Based Store is an e-commerce platform for personalized shopping experiences. Users can browse products, manage carts, filter items, and move through a seamless checkout flow.",
    technologies: [
      "Next.js",
      "Chakra UI",
      "Framer Motion",
      "Node.js",
      "Tailwind CSS",
    ],
    features: [
      "User authentication",
      "Admin dashboard for product management",
      "User dashboard for products",
      "Product recommendations",
      "Product filtration",
      "Responsive design",
    ],
    githubUrl: "https://github.com/araneeskhan/Store",
    screenshots: [
      { path: "/assets/store/cover.png", type: "web" },
      { path: "/assets/store/01.png", type: "web" },
      { path: "/assets/store/02.png", type: "web" },
      { path: "/assets/store/03.png", type: "web" },
      { path: "/assets/store/04.png", type: "web" },
      { path: "/assets/store/05.png", type: "web" },
    ],
  },
  bankee: {
    title: "Bankee - Modern Mobile Banking",
    coverImage: ["/assets/bankee/cover.png"],
    shortDescription:
      "A premium dark-themed mobile banking app with biometric auth, card controls, split bills, expense analytics, savings vaults, and real-time P2P transfers.",
    category: "Fintech",
    status: "Mobile App",
    role: "React Native developer",
    year: "2025",
    description:
      "Bankee is a state-of-the-art mobile banking application built with React Native, Expo SDK 54, and Firebase. It delivers a premium dark-themed banking experience featuring biometric Face ID and fingerprint authentication, interactive virtual card management with freeze/unfreeze controls, group split bill payments, categorized expense analytics with time-period filters, goal-based savings vaults, QR code transfers, digital receipt export, and subscription and utility bill payments — all powered by Firebase Firestore ACID transactions for guaranteed accuracy.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Firestore",
      "TypeScript",
      "React Navigation",
      "AsyncStorage",
    ],
    features: [
      "Face ID and fingerprint biometric authentication with encrypted local credentials",
      "Interactive virtual cards with freeze/unfreeze and biometric-guarded CVV reveal",
      "Group split bill payments with per-person calculation and payment request tracking",
      "Categorized expense analytics with weekly, monthly, and yearly time-period filters",
      "Goal-based savings vaults with live visual progress tracking",
      "P2P transfers via account number, IBAN, or QR code scanning",
      "Digital receipt export and native sharing",
      "Subscription management for Netflix, Spotify, Amazon Prime, and more",
      "Utility bill payments for electricity, water, gas, and internet",
    ],
    highlights: [
      "Built atomic P2P transfer flows using Firebase Firestore ACID transactions",
      "Implemented biometric-guarded sensitive data reveal for card numbers and CVV codes",
      "Designed a comprehensive expense analytics engine with category breakdowns and smart saving tips",
    ],
    metrics: [
      { label: "SDK", value: "Expo 54" },
      { label: "Auth", value: "Biometric" },
      { label: "Transactions", value: "ACID" },
    ],
    githubUrl: "https://github.com/araneeskhan/Bankee",
    screenshots: [{ path: "/assets/bankee/cover.png", type: "mobile" }],
  },
  mafiaempire: {
    title: "Mafia Empire",
    coverImage: ["/assets/mafiaempire/cover.png"],
    shortDescription:
      "A mobile strategy game with progression, business management, missions, territories, and achievements.",
    category: "Mobile Game",
    status: "Game Prototype",
    role: "React Native developer",
    year: "2025",
    description:
      "Mafia Empire is a mobile game that puts players in control of a criminal organization in a cyberpunk-themed world. Players build their empire, recruit members, complete missions, and battle for territory control.",
    technologies: ["React Native", "Firebase", "Expo", "Zustand"],
    features: [
      "Career progression from street-level character to crime lord",
      "Gang member recruitment and upgrades",
      "Business empire purchasing and passive income",
      "Mission system for rewards and reputation",
      "Territory control battles",
      "Achievement system with rewards",
    ],
    githubUrl: "https://github.com/araneeskhan/MafiaEmpire",
    screenshots: [{ path: "/assets/mafiaempire/cover.png", type: "mobile" }],
  },
};
