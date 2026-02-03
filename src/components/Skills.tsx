import Image from "next/image";
import { useState } from "react";

interface SkillItem {
  name: string;
  icon: string;
  level?: number; // Proficiency level out of 100
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    frontend: [
      { name: "HTML", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/html.png`, level: 95 },
      { name: "CSS", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/css.jpg`, level: 90 },
      {
        name: "Tailwind CSS",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/tailwind.svg`,
        level: 92,
      },
      {
        name: "JavaScript",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/javascript.svg`,
        level: 88,
      },
      {
        name: "TypeScript",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/typescript.svg`,
        level: 85,
      },
      { name: "React", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/react.svg`, level: 90 },
      {
        name: "React Native",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/reactnative.png`,
        level: 82,
      },
      {
        name: "Next.js",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/nextjs.svg`,
        level: 88,
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/nodejs.png`,
        level: 87,
      },
      {
        name: "Express.js",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/expressjs.png`,
        level: 85,
      },
      {
        name: "MongoDB",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/mongodb.svg`,
        level: 83,
      },
      { name: "MySQL", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/mysql.svg`, level: 80 },
      {
        name: "Firebase",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/firebase.svg`,
        level: 88,
      },
      {
        name: "Supabase",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/supabase.png`,
        level: 82,
      },
      {
        name: "Python",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/python.svg`,
        level: 78,
      },
      { name: "Java", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/java.png`, level: 75 },
    ],
    other: [
      {
        name: "Github",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/github.png`,
        level: 90,
      },
      { name: "AWS", icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/aws.svg`, level: 75 },
      {
        name: "Docker",
        icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/skills/docker.svg`,
        level: 72,
      },
    ],
  };

  const categoryIcons = {
    frontend: "fa-code",
    backend: "fa-server",
    other: "fa-tools",
  };

  const categoryDescriptions = {
    frontend: "Building beautiful, responsive user interfaces",
    backend: "Creating robust server-side applications",
    other: "Tools and technologies for modern development",
  };

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-400 to-pink-600 dark:from-pink-600 dark:to-pink-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            data-aos="fade-up"
          >
            Explore My
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technical Skills
          </h1>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        {/* Category Tabs - Enhanced with better mobile responsiveness */}
        <div
          className="flex justify-center mb-12 px-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="inline-flex flex-wrap justify-center bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 gap-2">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 font-semibold text-sm md:text-base ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <i
                    className={`fas ${
                      categoryIcons[category as keyof typeof categoryIcons]
                    } text-base md:text-lg`}
                  ></i>
                  <span className="whitespace-nowrap">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </div>
                {activeCategory !== category && (
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-colors duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <p
          className="text-center text-gray-600 dark:text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {
            categoryDescriptions[
              activeCategory as keyof typeof categoryDescriptions
            ]
          }
        </p>

        {/* Skills Grid with Enhanced Animation and Centering Fix */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mx-auto justify-items-center ${
            activeCategory === "other"
              ? "lg:grid-cols-3 max-w-4xl"
              : "lg:grid-cols-4 max-w-6xl"
          }`}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].map(
            (skill, index) => (
              <div
                key={skill.name}
                className="group relative w-full"
                data-aos="zoom-in"
                data-aos-delay={500 + index * 50}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon container with animated background */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                    </div>
                    {/* Skill name */}
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 rounded-2xl transition-colors duration-500"></div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Stats Section */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
              Technologies
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
              Frameworks
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
              Projects
            </div>
          </div>
          <div className="text-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              12+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium">
              Months Exp
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
