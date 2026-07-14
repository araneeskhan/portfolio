import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const screenshots = [
  { path: "/assets/css/screenshot1.png", type: "web", label: "Web Dashboard" },
  { path: "/assets/css/screenshot.png", type: "mobile", label: "Home Screen" },
  { path: "/assets/css/screenshot2.png", type: "mobile", label: "Events List" },
  { path: "/assets/css/screenshot3.png", type: "mobile", label: "Event Detail" },
  { path: "/assets/css/screenshot7.png", type: "mobile", label: "Schedule View" },
  { path: "/assets/css/screenshot9.png", type: "mobile", label: "Scoreboard" },
  { path: "/assets/css/screenshot10.png", type: "mobile", label: "Team Stats" },
  { path: "/assets/css/screenshot11.png", type: "mobile", label: "Admin Panel" },
  { path: "/assets/css/screenshot12.png", type: "mobile", label: "User Profile" },
  { path: "/assets/css/screenshot13.png", type: "mobile", label: "Notifications" },
  { path: "/assets/css/screenshot14.png", type: "mobile", label: "Live Score" },
  { path: "/assets/css/screenshot15.png", type: "mobile", label: "Settings" },
];

const techStack = [
  { name: "React", role: "Web Frontend", icon: "/assets/skills/react.svg" },
  { name: "React Native", role: "Mobile App", icon: "/assets/skills/reactnative.png" },
  { name: "Node.js", role: "Main API Server", icon: "/assets/skills/nodejs.png" },
  { name: "Python", role: "ML Microservice", icon: "/assets/skills/python.svg" },
  { name: "Flask", role: "ML API Layer", icon: "/assets/skills/expressjs.png" },
  { name: "Firebase", role: "Real-time DB", icon: "/assets/skills/firebase.svg" },
  { name: "JavaScript", role: "Core Language", icon: "/assets/skills/javascript.svg" },
];

const phases = [
  {
    number: "01",
    title: "Requirements Engineering",
    subtitle: "SRS Documentation",
    description: "Gathered and documented all functional and non-functional requirements through stakeholder interviews with university sports coordinators, student athletes, and IT staff. Produced a formal Software Requirements Specification (SRS) covering use cases, user stories, and system constraints.",
    icon: "fa-file-alt",
  },
  {
    number: "02",
    title: "System Design",
    subtitle: "SRD & Architecture",
    description: "Designed the full system architecture including microservice separation (Node.js API + Python ML service), Firebase real-time data model, and mobile/web client communication flows. Documented in a Software Requirements Document (SRD) with ER diagrams, sequence diagrams, and API contracts.",
    icon: "fa-drafting-compass",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Iterative Sprints",
    description: "Built the system in iterative sprints — starting with the core Firebase data layer and Node.js API, then the React web dashboard, then the React Native mobile app, and finally integrating the Flask-based automated scheduling service.",
    icon: "fa-code",
  },
  {
    number: "04",
    title: "Testing & QA",
    subtitle: "Formal Test Plans",
    description: "Executed structured testing across unit tests (individual modules), integration tests (API + database layer), and User Acceptance Testing (UAT) with real students and coordinators. Documented all test cases, results, and defect resolutions in formal test reports.",
    icon: "fa-vial",
  },
  {
    number: "05",
    title: "Deployment",
    subtitle: "Production Release",
    description: "Deployed the Node.js API and Flask service independently, enabling each to scale and update without downtime. The React Native app was packaged for both iOS and Android. Firebase handled production-grade real-time sync and authentication.",
    icon: "fa-rocket",
  },
];

const challenges = [
  {
    challenge: "Real-time sync across web and mobile simultaneously",
    solution: "Leveraged Firebase's onSnapshot listeners on both React and React Native clients — any score or event update propagates to all connected clients within milliseconds without polling.",
    icon: "fa-bolt",
  },
  {
    challenge: "Automated scheduling with complex university constraints",
    solution: "Built a dedicated Python/Flask microservice that takes venue availability, team rosters, and event priorities as inputs and returns conflict-free schedules using constraint satisfaction. Kept this separate from the Node.js API so the ML logic can be iterated independently.",
    icon: "fa-calendar-check",
  },
  {
    challenge: "Consistent UX between the web admin dashboard and mobile app",
    solution: "Defined a shared design language — same color tokens, spacing scale, and component patterns — applied to both React (web) and React Native (mobile). This reduced design drift and made the two platforms feel like one product.",
    icon: "fa-layer-group",
  },
  {
    challenge: "Handling multi-role access (student vs admin vs coordinator)",
    solution: "Implemented Firebase custom claims for role assignment with Node.js middleware that validates the token's role on every protected endpoint, keeping authorization logic server-side rather than client-enforced.",
    icon: "fa-shield-alt",
  },
];

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function CampusSportsSphereCaseStudy() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<typeof screenshots[0] | null>(null);

  const prev = () => {
    if (!selectedScreenshot) return;
    const currentIndex = screenshots.indexOf(selectedScreenshot);
    const prevIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
    setSelectedScreenshot(screenshots[prevIndex]);
  };

  const next = () => {
    if (!selectedScreenshot) return;
    const currentIndex = screenshots.indexOf(selectedScreenshot);
    const nextIndex = (currentIndex + 1) % screenshots.length;
    setSelectedScreenshot(screenshots[nextIndex]);
  };

  return (
    <Layout
      title="Campus Sports Sphere — Case Study | Anees Ur Rehman"
      description="A deep-dive into the design, architecture, and development of Campus Sports Sphere."
    >
      <div className="relative min-h-screen overflow-hidden bg-canvas-50 dark:bg-canvas-950">
        
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-canvas-200/20 dark:border-white/5">
          {/* Futuristic Glowing Orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent-500/20 blur-[120px]" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-40 -left-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" 
            />
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center md:text-left">
              <Link
                href="/#projects"
                className="font-display inline-flex items-center text-sm font-medium text-canvas-500 hover:text-accent-500 dark:text-canvas-400 dark:hover:text-accent-400 transition-colors mb-12 group"
              >
                <i className="fas fa-arrow-left mr-3 group-hover:-translate-x-1 transition-transform"></i>
                Back to Projects
              </Link>

              <motion.div initial="hidden" animate="show" variants={staggerContainer} className="flex flex-col md:items-start items-center">
                <motion.div variants={fadeUp} className="font-display inline-flex items-center px-5 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full text-accent-500 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(var(--color-accent-500),0.2)]">
                  <i className="fas fa-microscope mr-3"></i>
                  Deep Dive Case Study
                </motion.div>

                <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-canvas-950 dark:text-white mb-6">
                  Campus Sports Sphere
                </motion.h1>
                
                <motion.p variants={fadeUp} className="font-display text-lg md:text-xl text-canvas-500 dark:text-canvas-300 max-w-3xl mb-12 leading-relaxed">
                  An automated university sports management system — combining a React web dashboard, a React Native mobile app, a Node.js API, and a Python/ML scheduling service into one unified platform.
                </motion.p>

                {/* Meta chips */}
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center md:justify-start gap-4">
                  {[
                    { icon: "fa-user", label: "Role", value: "Full-Stack Dev" },
                    { icon: "fa-layer-group", label: "Type", value: "Web + Mobile" },
                    { icon: "fa-code-branch", label: "Stack", value: "React · RN · Node" },
                    { icon: "fa-database", label: "Data", value: "Firebase Real-time" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 px-5 py-3.5 bg-white/50 dark:bg-canvas-900/50 backdrop-blur-md rounded-2xl border border-canvas-200/50 dark:border-white/10 shadow-lg hover:border-accent-500/30 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div className="text-left">
                        <p className="font-display text-[10px] font-bold uppercase tracking-widest text-canvas-400">
                          {item.label}
                        </p>
                        <p className="font-display text-sm font-bold text-canvas-950 dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-container py-24 max-w-5xl">
          
          {/* ── OVERVIEW ─────────────────────────────────────── */}
          <motion.section 
            className="mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="surface-card p-10 group hover:border-red-500/30 dark:hover:border-red-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-red-500/10 text-red-500 rounded-2xl mr-5 group-hover:scale-110 transition-transform duration-500">
                    <i className="fas fa-exclamation-triangle text-xl"></i>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-canvas-950 dark:text-white">The Problem</h2>
                </div>
                <p className="font-display text-canvas-600 dark:text-canvas-300 leading-relaxed text-lg">
                  University sports departments relied on manual, paper-based systems to manage events, schedules, and scores. This led to scheduling conflicts, delayed score updates, poor communication, and heavy administrative overhead.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="surface-card p-10 group hover:border-emerald-500/30 dark:hover:border-emerald-500/30">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/10 text-emerald-500 rounded-2xl mr-5 group-hover:scale-110 transition-transform duration-500">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-canvas-950 dark:text-white">The Solution</h2>
                </div>
                <p className="font-display text-canvas-600 dark:text-canvas-300 leading-relaxed text-lg">
                  A full-stack platform with a React dashboard for admins, a React Native app for students, and a Python/ML microservice that automates conflict-free scheduling — backed by Firebase for instantaneous sync.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* ── TECH STACK ───────────────────────────────────── */}
          <motion.section 
            className="mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-10 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-950 dark:text-white mb-4">Architecture Stack</h2>
              <p className="font-display text-canvas-500 dark:text-canvas-400 max-w-2xl text-lg">
                Each technology was chosen as the precise best fit for its specific layer of the system.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  variants={fadeUp}
                  className="surface-card p-6 flex flex-col items-center text-center group hover:bg-canvas-100/50 dark:hover:bg-white/[0.03]"
                >
                  <div className="relative w-14 h-14 mb-4 transition-transform duration-500 group-hover:scale-110">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                  </div>
                  <p className="font-display font-bold text-canvas-950 dark:text-white">{tech.name}</p>
                  <p className="font-display text-[10px] uppercase tracking-widest font-bold text-canvas-400 mt-2">{tech.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── KEY FEATURES ─────────────────────────────────── */}
          <motion.section 
            className="mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-950 dark:text-white mb-4">Core Capabilities</h2>
              <p className="font-display text-canvas-500 dark:text-canvas-400 max-w-2xl text-lg">
                Four defining features that solved distinct organizational pain points.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "fa-calendar-alt", title: "Real-time Event Mgmt", desc: "Admins create events on the web dashboard. Changes propagate to all mobile clients in milliseconds via Firebase onSnapshot listeners." },
                { icon: "fa-robot", title: "Automated Scheduling", desc: "A Python/Flask microservice computes conflict-free schedules using constraint satisfaction algorithms, replacing hours of manual planning." },
                { icon: "fa-mobile-alt", title: "Dual-Platform App", desc: "A single React Native codebase targets iOS and Android. Role-based access controls reveal management features to admins automatically." },
                { icon: "fa-chart-bar", title: "Digital Scoreboard", desc: "Live score updates and historical statistics are aggregated and visualised per sport, team, and player for deep performance analytics." },
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeUp} className="surface-card p-8 group">
                  <div className="w-16 h-16 flex items-center justify-center bg-accent-500/10 text-accent-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(var(--color-accent-500),0.15)]">
                    <i className={`fas ${feature.icon} text-2xl`}></i>
                  </div>
                  <h3 className="font-display text-xl font-bold text-canvas-950 dark:text-white mb-3">{feature.title}</h3>
                  <p className="font-display text-canvas-600 dark:text-canvas-300 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── DEVELOPMENT PROCESS ──────────────────────────── */}
          <motion.section 
            className="mb-32 relative"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-950 dark:text-white mb-4">Development Lifecycle</h2>
              <p className="font-display text-canvas-500 dark:text-canvas-400 max-w-2xl text-lg">
                Structured software engineering from formal requirements to deployment.
              </p>
            </motion.div>

            <div className="relative">
              {/* Glowing Timeline Line */}
              <div className="absolute left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent-500/50 via-blue-500/50 to-purple-500/50 hidden md:block rounded-full"></div>

              <div className="space-y-12">
                {phases.map((phase, i) => (
                  <motion.div key={i} variants={fadeUp} className="md:pl-28 relative group">
                    {/* HUD Node */}
                    <div className="hidden md:flex absolute left-6 top-6 w-5 h-5 bg-canvas-950 dark:bg-canvas-50 border-4 border-accent-500 rounded-full z-10 shadow-[0_0_15px_rgba(var(--color-accent-500),0.8)] group-hover:scale-150 transition-transform duration-500"></div>

                    <div className="surface-card p-8 group-hover:border-accent-500/30 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-display text-[10px] font-black tracking-widest px-3 py-1.5 bg-accent-500/10 text-accent-500 uppercase rounded-md border border-accent-500/20">
                          Phase {phase.number}
                        </span>
                        <span className="font-display text-sm font-semibold text-canvas-400 uppercase tracking-widest">
                          {phase.subtitle}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-canvas-950 dark:text-white mb-3">{phase.title}</h3>
                      <p className="font-display text-canvas-600 dark:text-canvas-300 leading-relaxed text-sm md:text-base">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ── DOCUMENTATION ────────────────────────────────── */}
          <motion.section 
            className="mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="surface-card p-10 border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-500/20 text-blue-500 rounded-2xl mr-5 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <i className="fas fa-books text-xl"></i>
                </div>
                <div>
                  <h2 className="font-display text-3xl font-bold text-canvas-950 dark:text-white">Formal Documentation</h2>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-canvas-400 mt-1">Engineering-first approach</p>
                </div>
              </div>
              <p className="font-display text-canvas-600 dark:text-canvas-300 leading-relaxed text-lg mb-10">
                This project was developed with formal documentation at every stage — not as an afterthought, but as the foundation for implementation decisions. Each document served a concrete purpose in the engineering process.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "fa-file-alt", title: "SRS", full: "Software Requirements Specification", desc: "Functional & non-functional requirements, use cases, user stories, system constraints.", color: "blue" },
                  { icon: "fa-drafting-compass", title: "SRD", full: "Software Requirements Document", desc: "System architecture, ER diagrams, sequence diagrams, API contracts, data flow.", color: "purple" },
                  { icon: "fa-vial", title: "Test Plan", full: "Testing Documentation", desc: "Unit test cases, integration test results, UAT sessions, defect logs, and resolutions.", color: "emerald" },
                ].map((doc, i) => (
                  <div key={i} className="bg-white/50 dark:bg-canvas-900/50 backdrop-blur-md rounded-2xl p-6 border border-canvas-200/50 dark:border-white/10 hover:-translate-y-1 transition-transform">
                    <div className={`w-10 h-10 flex items-center justify-center bg-${doc.color}-500/20 text-${doc.color}-500 rounded-xl mb-4`}>
                      <i className={`fas ${doc.icon}`}></i>
                    </div>
                    <div className="mb-3">
                      <span className={`font-display text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-${doc.color}-500/10 text-${doc.color}-500 rounded border border-${doc.color}-500/20 mr-2`}>{doc.title}</span>
                      <span className="font-display text-xs font-semibold text-canvas-500">{doc.full}</span>
                    </div>
                    <p className="font-display text-sm text-canvas-600 dark:text-canvas-400 leading-relaxed">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── CHALLENGES & SOLUTIONS ───────────────────────── */}
          <motion.section 
            className="mb-32"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-950 dark:text-white mb-4">Challenges & Solutions</h2>
              <p className="font-display text-canvas-500 dark:text-canvas-400 max-w-2xl text-lg">
                The hard problems — and the specific engineering decisions made to solve them.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="surface-card p-8 group hover:border-accent-500/30">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-red-500/10 text-red-500 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <div>
                      <p className="font-display text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">Challenge</p>
                      <h3 className="font-display text-lg font-bold text-canvas-950 dark:text-white mb-4 leading-tight">{item.challenge}</h3>
                      <div className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-4">
                        <i className="fas fa-check-circle text-emerald-500 mt-1"></i>
                        <p className="font-display text-sm text-canvas-600 dark:text-canvas-300 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── GALLERY ──────────────────────────────────────── */}
          <motion.section 
            className="mb-24"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-10 text-center md:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-canvas-950 dark:text-white mb-4">System Gallery</h2>
              <p className="font-display text-canvas-500 dark:text-canvas-400 text-lg">
                Click any interface to expand the high-resolution view.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {screenshots.map((s, i) => (
                <motion.button
                  key={s.path}
                  variants={fadeUp}
                  type="button"
                  onClick={() => setSelectedScreenshot(s)}
                  className="group relative rounded-2xl overflow-hidden surface-card border border-canvas-200/20 dark:border-white/5 hover:border-accent-500/40 dark:hover:border-accent-500/40 cursor-zoom-in"
                  style={{ aspectRatio: s.type === "mobile" ? "9/16" : "16/9" }}
                >
                  <motion.div layoutId={`screenshot-${s.path}`} className="absolute inset-0 h-full w-full">
                    <Image src={s.path} alt={s.label} fill className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                  </motion.div>
                  <div className="absolute inset-0 bg-canvas-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl">
                      <i className="fas fa-expand text-white text-lg"></i>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-canvas-950/90 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-display text-white text-xs font-bold tracking-widest uppercase text-center">{s.label}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* ── LIGHTBOX ─────────────────────────────────────── */}
          <AnimatePresence>
            {selectedScreenshot && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas-950/95 backdrop-blur-2xl p-4 sm:p-8"
                onClick={() => setSelectedScreenshot(null)}
              >
                <motion.div className="relative w-full max-w-5xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  
                  {/* Controls */}
                  <div className="absolute -top-16 left-0 right-0 flex justify-between items-center text-white/50 w-full">
                    <span className="font-display text-xs font-bold tracking-widest uppercase bg-white/10 px-4 py-2 rounded-full border border-white/10">
                      {screenshots.indexOf(selectedScreenshot) + 1} / {screenshots.length}
                    </span>
                    <button onClick={() => setSelectedScreenshot(null)} className="font-display flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                      Close <i className="fas fa-times text-lg"></i>
                    </button>
                  </div>

                  {/* Shared Element Image */}
                  <motion.div 
                    layoutId={`screenshot-${selectedScreenshot.path}`}
                    className="relative flex items-center justify-center w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 250, damping: 25 }}
                  >
                    <Image
                      src={selectedScreenshot.path}
                      alt={selectedScreenshot.label}
                      width={1200}
                      height={900}
                      className="max-h-[80vh] w-auto object-contain rounded-xl"
                      priority
                    />
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="font-display text-white text-sm font-bold tracking-widest uppercase mt-6 bg-white/5 px-6 py-3 rounded-full border border-white/10"
                  >
                    {selectedScreenshot.label}
                  </motion.p>

                  {/* Navigation Arrows */}
                  <button onClick={prev} className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-md">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button onClick={next} className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-md">
                    <i className="fas fa-chevron-right"></i>
                  </button>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── LINKS ────────────────────────────────────────── */}
          <section className="text-center mt-20">
            <Link href="/#projects" className="btn-primary font-display px-8 py-4 text-sm inline-flex items-center gap-3">
              <i className="fas fa-th-large"></i>
              Back to All Projects
            </Link>
          </section>

        </div>
      </div>
    </Layout>
  );
}
