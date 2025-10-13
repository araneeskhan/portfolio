import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            data-aos="fade-up"
          >
            Get To Know More
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Me
          </h1>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          {/* Main content card with glassmorphism effect */}
          <div
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Introduction text with better typography */}
              <div className="mb-12 space-y-6">
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                  👋 I'm a passionate{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Full-Stack Developer
                  </span>{" "}
                  with a focus on creating responsive and user-friendly web
                  applications. My journey in software development began with a
                  curiosity about how websites work, which evolved into a deep
                  passion for building digital experiences that solve real-world
                  problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                  I specialize in both frontend and backend technologies, with
                  expertise in{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    React, Next.js, Node.js
                  </span>
                  , and various database systems. I'm constantly learning and
                  adapting to new technologies to stay at the forefront of
                  development.
                </p>
              </div>

              {/* Stats cards with improved design */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div
                  className="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-200/50 dark:border-blue-700/50"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="absolute top-4 right-4 w-16 h-16 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-laptop-code text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Experience
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      12 Months
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Professional Development
                    </p>
                  </div>
                </div>

                <div
                  className="group relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-purple-200/50 dark:border-purple-700/50"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="absolute top-4 right-4 w-16 h-16 bg-purple-600/10 dark:bg-purple-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-graduation-cap text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      Bachelor's Degree
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Computer Science
                    </p>
                  </div>
                </div>
              </div>

              {/* What I Do section with enhanced cards */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  What I Do
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: "fa-code",
                      title: "Web Development",
                      description: "Building responsive, accessible websites",
                      color: "blue",
                      delay: "500",
                    },
                    {
                      icon: "fa-mobile-alt",
                      title: "Mobile Development",
                      description:
                        "Creating cross-platform mobile applications",
                      color: "green",
                      delay: "600",
                    },
                    {
                      icon: "fa-server",
                      title: "Backend Development",
                      description: "Building APIs and server-side applications",
                      color: "orange",
                      delay: "700",
                    },
                    {
                      icon: "fa-database",
                      title: "Database Design",
                      description: "Creating efficient database structures",
                      color: "purple",
                      delay: "800",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-gray-700/50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-600"
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                    >
                      <div
                        className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/40 dark:to-${item.color}-800/40 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i
                          className={`fas ${item.icon} text-${item.color}-600 dark:text-${item.color}-400 text-xl`}
                        ></i>
                      </div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                      {/* Hover effect border */}
                      <div
                        className={`absolute inset-0 border-2 border-${item.color}-400 dark:border-${item.color}-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div
            className="flex justify-center mt-12"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
