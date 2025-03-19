import Image from 'next/image';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <p className="section-subtitle text-center" data-aos="fade-up">
          Check Out My
        </p>
        <h1 className="section-title text-center mb-12" data-aos="fade-up" data-aos-delay="100">
          Achievements
        </h1>

        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            {/* Full width image on mobile, side-by-side on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Achievement Image - Now takes 3/5 of the space on desktop */}
              <div className="relative h-80 sm:h-96 lg:h-[500px] lg:col-span-3">
                <Image 
                  src="/assets/achievement-1.jpg"
                  alt="Career Expo 2024 - 1st Position"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-2">
                    1st Position
                  </span>
                  <h3 className="text-white text-xl font-bold">Career Expo 2024</h3>
                </div>
              </div>
              
              {/* Achievement Content - Now takes 2/5 of the space on desktop */}
              <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                <div className="hidden lg:block mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    1st Position
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Career Expo 2024
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Secured first position in the Hybrid category at Career Expo 2024 for the project
                  "Campus Sports Sphere" - a comprehensive Automated sports management system combining web and
                  mobile technologies to streamline University sports activities.
                </p>
                
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <i className="fas fa-trophy mr-2 text-yellow-500"></i>
                  <span>Hybrid Category Winner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add a decorative element */}
          <div className="flex justify-center mt-12">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform duration-300">
              <i className="fas fa-award text-blue-600 dark:text-blue-400 text-2xl transform -rotate-45 hover:rotate-0 transition-transform duration-300"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;