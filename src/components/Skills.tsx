import Image from 'next/image';
import { useState } from 'react';

interface SkillItem {
  name: string;
  icon: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'HTML', icon: '/portfolio/assets/skills/html.png' },
      { name: 'CSS', icon: '/portfolio/assets/skills/css.jpg' },
      { name: 'Tailwind CSS', icon: '/portfolio/assets/skills/tailwind.svg' },
      { name: 'JavaScript', icon: '/portfolio/assets/skills/javascript.svg' },
      { name: 'React', icon: '/portfolio/assets/skills/react.svg' },
      { name: 'React Native', icon: '/portfolio/assets/skills/reactnative.png' },
      { name: 'Next Js', icon: '/portfolio/assets/skills/nextjs.svg' },
    ],
    backend: [
      { name: 'Node.js', icon: '/portfolio/assets/skills/nodejs.png' },
      { name: 'Express.js', icon: '/portfolio/assets/skills/expressjs.png' },
      { name: 'MongoDB', icon: '/portfolio/assets/skills/mongodb.svg' },
      { name: 'Firebase', icon: '/portfolio/assets/skills/firebase.svg' },
      { name: 'Python', icon: '/portfolio/assets/skills/python.svg' },
      { name: 'Java', icon: '/portfolio/assets/skills/java.png' },
    ],
    other: [
      { name: 'Github', icon: '/portfolio/assets/skills/github.png' },
      { name: 'AWS', icon: '/portfolio/assets/skills/aws.svg' },
      { name: 'Docker', icon: '/portfolio/assets/skills/docker.svg' },
    ]
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-subtitle text-center" data-aos="fade-up">
          Explore My
        </p>
        <h1 className="section-title text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          Skills
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-lg">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with Animation */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 50}
            >
              <div className="relative w-16 h-16 mb-4 overflow-hidden">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Update all skill image paths
const skillsData = [
  {
    name: "HTML",
    icon: "/assets/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/portfolio/assets/skills/css.jpg",
  },
  {
    name: "Tailwind",
    icon: "/portfolio/assets/skills/tailwind.svg",
  },
  {
    name: "Next.js",
    icon: "/portfolio/assets/skills/nextjs.svg",
  },
  {
    name: "JavaScript",
    icon: "/portfolio/assets/skills/javascript.svg",
  },
  {
    name: "React",
    icon: "/portfolio/assets/skills/react.svg",
  },
  {
    name: "React Native",
    icon: "/portfolio/assets/skills/reactnative.png",
  }
]