import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="section-subtitle" data-aos="fade-up">
          Get To Know More
        </p>
        <h1 className="section-title" data-aos="fade-up" data-aos-delay="100">
          About Me
        </h1>

        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer with a focus on creating
              responsive and user-friendly web applications. My journey in
              software development began with a curiosity about how websites
              work, which evolved into a deep passion for building digital
              experiences that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              I specialize in both frontend and backend technologies, with
              expertise in React, Next.js, Node.js, and various database
              systems. I'm constantly learning and adapting to new technologies
              to stay at the forefront of development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <i className="fas fa-laptop-code text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Experience
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      12 months Experience
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                    <i className="fas fa-graduation-cap text-blue-600 dark:text-blue-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Bachelor's Degree <br />
                  Computer Science
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <i className="fas fa-code text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Web Development
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Building responsive, accessible websites
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <i className="fas fa-mobile-alt text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Mobile Development
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Creating cross-platform mobile applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <i className="fas fa-server text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Backend Development
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Building APIs and server-side applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <i className="fas fa-database text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Database Design
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Creating efficient database structures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
