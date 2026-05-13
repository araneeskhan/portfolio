import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { useState } from "react";

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
    description:
      "Gathered and documented all functional and non-functional requirements through stakeholder interviews with university sports coordinators, student athletes, and IT staff. Produced a formal Software Requirements Specification (SRS) covering use cases, user stories, and system constraints.",
    icon: "fa-file-alt",
    color: "blue",
  },
  {
    number: "02",
    title: "System Design",
    subtitle: "SRD & Architecture",
    description:
      "Designed the full system architecture including microservice separation (Node.js API + Python ML service), Firebase real-time data model, and mobile/web client communication flows. Documented in a Software Requirements Document (SRD) with ER diagrams, sequence diagrams, and API contracts.",
    icon: "fa-drafting-compass",
    color: "purple",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Iterative Sprints",
    description:
      "Built the system in iterative sprints — starting with the core Firebase data layer and Node.js API, then the React web dashboard, then the React Native mobile app, and finally integrating the Flask-based automated scheduling service.",
    icon: "fa-code",
    color: "green",
  },
  {
    number: "04",
    title: "Testing & QA",
    subtitle: "Formal Test Plans",
    description:
      "Executed structured testing across unit tests (individual modules), integration tests (API + database layer), and User Acceptance Testing (UAT) with real students and coordinators. Documented all test cases, results, and defect resolutions in formal test reports.",
    icon: "fa-vial",
    color: "orange",
  },
  {
    number: "05",
    title: "Deployment",
    subtitle: "Production Release",
    description:
      "Deployed the Node.js API and Flask service independently, enabling each to scale and update without downtime. The React Native app was packaged for both iOS and Android. Firebase handled production-grade real-time sync and authentication.",
    icon: "fa-rocket",
    color: "pink",
  },
];

const challenges = [
  {
    challenge: "Real-time sync across web and mobile simultaneously",
    solution:
      "Leveraged Firebase's onSnapshot listeners on both React and React Native clients — any score or event update propagates to all connected clients within milliseconds without polling.",
    icon: "fa-bolt",
  },
  {
    challenge: "Automated scheduling with complex university constraints",
    solution:
      "Built a dedicated Python/Flask microservice that takes venue availability, team rosters, and event priorities as inputs and returns conflict-free schedules using constraint satisfaction. Kept this separate from the Node.js API so the ML logic can be iterated independently.",
    icon: "fa-calendar-check",
  },
  {
    challenge: "Consistent UX between the web admin dashboard and mobile app",
    solution:
      "Defined a shared design language — same color tokens, spacing scale, and component patterns — applied to both React (web) and React Native (mobile). This reduced design drift and made the two platforms feel like one product.",
    icon: "fa-layer-group",
  },
  {
    challenge: "Handling multi-role access (student vs admin vs coordinator)",
    solution:
      "Implemented Firebase custom claims for role assignment with Node.js middleware that validates the token's role on every protected endpoint, keeping authorization logic server-side rather than client-enforced.",
    icon: "fa-shield-alt",
  },
];

export default function CampusSportsSphereCaseStudy() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + screenshots.length) % screenshots.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % screenshots.length : null
    );

  return (
    <Layout
      title="Campus Sports Sphere — Case Study | Anees Ur Rehman"
      description="A deep-dive into the design, architecture, and development of Campus Sports Sphere — an automated university sports management platform built with React, React Native, Node.js, Python, and Firebase."
    >
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* ── HERO ─────────────────────────────────────────── */}
        <div className="relative pt-28 pb-20 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 -left-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Back */}
              <Link
                href="/projects/campus-sports-sphere"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group mb-10 font-medium"
              >
                <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                Back to Project
              </Link>

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <i className="fas fa-microscope mr-2"></i>
                Case Study
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Campus Sports Sphere
              </h1>
              <p className="text-xl text-blue-200 max-w-3xl mb-10 leading-relaxed">
                An automated university sports management system — combining a
                React web dashboard, a React Native mobile app, a Node.js API,
                and a Python/ML scheduling service into one unified platform.
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "fa-user", label: "Role", value: "Full-Stack Developer" },
                  { icon: "fa-layer-group", label: "Type", value: "Web + Mobile" },
                  { icon: "fa-code-branch", label: "Stack", value: "React · RN · Node · Python" },
                  { icon: "fa-database", label: "Data", value: "Firebase Real-time" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <i className={`fas ${item.icon} text-blue-400 text-sm`}></i>
                    <div>
                      <p className="text-blue-300 text-xs font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 max-w-5xl">
          {/* ── OVERVIEW ─────────────────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 rounded-xl mr-4 shadow-lg">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    The Problem
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  University sports departments relied on manual, paper-based
                  systems to manage events, schedules, and scores. This led to
                  scheduling conflicts, delayed score updates, poor communication
                  with students, and significant administrative overhead for
                  coordinators.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mr-4 shadow-lg">
                    <i className="fas fa-lightbulb text-white"></i>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    The Solution
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A full-stack platform with a React web dashboard for
                  administrators and coordinators, a React Native mobile app for
                  students and athletes, and a Python/ML microservice that
                  automates conflict-free scheduling — all backed by Firebase
                  for real-time data sync.
                </p>
              </div>
            </div>
          </section>

          {/* ── TECH STACK ───────────────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tech Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Each technology was chosen for a specific reason — not as
              defaults, but as the best fit for that layer of the system.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="relative w-12 h-12 mb-3">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {tech.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── KEY FEATURES ─────────────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Key Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Four core capabilities that define the system — each solving a
              distinct pain point identified during requirements gathering.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "fa-calendar-alt",
                  title: "Real-time Sports Event Management",
                  gradient: "from-blue-500 to-cyan-500",
                  description:
                    "Administrators can create, update, and cancel sports events from the web dashboard. Changes propagate to all connected mobile clients in real time via Firebase onSnapshot listeners — no refresh needed, no polling.",
                },
                {
                  icon: "fa-robot",
                  title: "Automated Scheduling System",
                  gradient: "from-purple-500 to-violet-500",
                  description:
                    "A Python/Flask microservice takes venue availability, team rosters, and event priorities as inputs and returns a conflict-free schedule using constraint satisfaction algorithms. Coordinators go from hours of manual planning to seconds.",
                },
                {
                  icon: "fa-mobile-alt",
                  title: "Dual-Platform Mobile App",
                  gradient: "from-green-500 to-emerald-500",
                  description:
                    "A single React Native codebase targets both iOS and Android. Students can browse upcoming events, view live scores, and receive push notifications. Admins have an elevated view with management controls — role determined by Firebase custom claims.",
                },
                {
                  icon: "fa-chart-bar",
                  title: "Digital Scoreboard & Statistics",
                  gradient: "from-orange-500 to-amber-500",
                  description:
                    "Live score updates display in both the web dashboard and mobile app simultaneously. Historical statistics are aggregated and visualised per sport, per team, and per player — giving coordinators data to report to university management.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-6 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div
                    className={`w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`fas ${feature.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── DEVELOPMENT PROCESS ──────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
              The project followed a structured software engineering lifecycle —
              from formal requirements documentation through deployment.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

              <div className="space-y-8">
                {phases.map((phase, i) => {
                  const colorMap: Record<string, string> = {
                    blue: "from-blue-500 to-cyan-500",
                    purple: "from-purple-500 to-violet-500",
                    green: "from-green-500 to-emerald-500",
                    orange: "from-orange-500 to-amber-500",
                    pink: "from-pink-500 to-rose-500",
                  };
                  return (
                    <div
                      key={i}
                      className="md:pl-20 relative"
                      data-aos="fade-up"
                      data-aos-delay={i * 80}
                    >
                      {/* Circle on timeline */}
                      <div
                        className={`hidden md:flex absolute left-0 top-4 w-16 h-16 items-center justify-center bg-gradient-to-br ${colorMap[phase.color]} rounded-2xl shadow-lg`}
                      >
                        <i
                          className={`fas ${phase.icon} text-white text-lg`}
                        ></i>
                      </div>

                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`text-xs font-bold px-3 py-1 bg-gradient-to-r ${colorMap[phase.color]} text-white rounded-full`}
                          >
                            Phase {phase.number}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {phase.subtitle}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── DOCUMENTATION ────────────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mr-4 shadow-lg">
                  <i className="fas fa-books text-white text-lg"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Formal Documentation
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Engineering-first approach
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This project was developed with formal documentation at every
                stage — not as an afterthought, but as the foundation for
                implementation decisions. Each document served a concrete
                purpose in the engineering process.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: "fa-file-alt",
                    title: "SRS",
                    full: "Software Requirements Specification",
                    desc: "Functional & non-functional requirements, use cases, user stories, system constraints.",
                    color: "blue",
                  },
                  {
                    icon: "fa-drafting-compass",
                    title: "SRD",
                    full: "Software Requirements Document",
                    desc: "System architecture, ER diagrams, sequence diagrams, API contracts, data flow.",
                    color: "purple",
                  },
                  {
                    icon: "fa-vial",
                    title: "Test Plan",
                    full: "Testing Documentation",
                    desc: "Unit test cases, integration test results, UAT sessions, defect logs, and resolutions.",
                    color: "green",
                  },
                ].map((doc) => {
                  const colorMap: Record<string, string> = {
                    blue: "from-blue-500 to-cyan-500",
                    purple: "from-purple-500 to-violet-500",
                    green: "from-green-500 to-emerald-500",
                  };
                  const bgMap: Record<string, string> = {
                    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
                    purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
                    green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
                  };
                  return (
                    <div
                      key={doc.title}
                      className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center bg-gradient-to-br ${colorMap[doc.color]} rounded-lg mb-3 shadow`}
                      >
                        <i
                          className={`fas ${doc.icon} text-white text-sm`}
                        ></i>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded ${bgMap[doc.color]}`}
                        >
                          {doc.title}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {doc.full}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── CHALLENGES & SOLUTIONS ───────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Challenges & Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              The hard problems — and the specific decisions made to solve them.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {challenges.map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow">
                      <i className={`fas ${item.icon} text-white text-sm`}></i>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-red-500 dark:text-red-400 uppercase tracking-wider mb-1">
                        Challenge
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm mb-4">
                        {item.challenge}
                      </p>
                      <div className="flex items-start gap-2">
                        <i className="fas fa-check-circle text-green-500 text-sm mt-0.5 flex-shrink-0"></i>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── GALLERY ──────────────────────────────────────── */}
          <section className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Screenshots
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Click any image to open the full-screen gallery.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ aspectRatio: s.type === "mobile" ? "9/16" : "16/9" }}
                >
                  <Image
                    src={s.path}
                    alt={s.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <i className="fas fa-expand text-white text-xl"></i>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium text-center">
                      {s.label}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* ── LINKS ────────────────────────────────────────── */}
          <section data-aos="fade-up">
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/araneeskhan/CampusSportsSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <i className="fab fa-github mr-3 text-lg"></i>
                View Source Code
              </a>
              <Link
                href="/#projects"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <i className="fas fa-th-large mr-3"></i>
                All Projects
              </Link>
            </div>
          </section>
        </div>

        {/* ── LIGHTBOX ─────────────────────────────────────── */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Counter */}
              <div className="absolute top-4 left-4 z-10 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full border border-white/20">
                {lightboxIndex + 1} / {screenshots.length}
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close"
              >
                <i className="fas fa-times text-white"></i>
              </button>

              {/* Image */}
              <div className="flex items-center justify-center bg-gray-900/50 rounded-2xl p-4">
                <Image
                  src={screenshots[lightboxIndex].path}
                  alt={screenshots[lightboxIndex].label}
                  width={900}
                  height={700}
                  className="object-contain max-h-[80vh] rounded-lg shadow-2xl"
                />
              </div>

              <p className="text-center text-gray-300 text-sm mt-3 font-medium">
                {screenshots[lightboxIndex].label}
              </p>

              {/* Prev / Next */}
              <button
                type="button"
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <i className="fas fa-chevron-left text-white"></i>
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <i className="fas fa-chevron-right text-white"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
