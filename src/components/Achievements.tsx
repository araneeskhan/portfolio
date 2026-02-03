import Image from "next/image";
import { useState } from "react";

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const achievements = [
    {
      id: 1,
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/achievement-1.jpg`,
      position: "1st Position",
      title: "Career Expo 2024",
      category: "Hybrid Category",
      description:
        'Secured first position in the Hybrid category at Career Expo 2024 for the project "Campus Sports Sphere" - a comprehensive Automated sports management system combining web and mobile technologies to streamline University sports activities.',
      date: "2024",
      icon: "fa-trophy",
      color: "blue",
      badge: "🥇",
    },
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="achievements"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-600 dark:from-yellow-600 dark:to-orange-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            data-aos="fade-up"
          >
            Check Out My
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Achievements
          </h1>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Celebrating milestones and recognitions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500">
                {/* Achievement Card */}
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image Section */}
                  <div
                    className="relative h-80 sm:h-96 lg:h-[500px] lg:col-span-3 cursor-pointer overflow-hidden"
                    onClick={() => handleImageClick(achievement.image)}
                  >
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-black/40 lg:to-transparent"></div>

                    {/* Expand Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                        <i className="fas fa-expand text-blue-600 dark:text-blue-400 text-xl"></i>
                      </div>
                    </div>

                    {/* Mobile Badge */}
                    <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{achievement.badge}</span>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                          {achievement.position}
                        </span>
                      </div>
                      <h3 className="text-white text-2xl font-bold">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">
                        {achievement.category}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                    {/* Desktop Badge */}
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <span className="text-5xl">{achievement.badge}</span>
                      <div>
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg mb-2">
                          {achievement.position}
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {achievement.date}
                        </p>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {achievement.title}
                    </h3>

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-6 w-fit">
                      <i className={`fas ${achievement.icon}`}></i>
                      <span>{achievement.category}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                      {achievement.description}
                    </p>

                    {/* Stats/Features */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-award text-blue-600 dark:text-blue-400 mr-2"></i>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Recognition
                          </span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          Winner
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center mb-2">
                          <i className="fas fa-calendar text-purple-600 dark:text-purple-400 mr-2"></i>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Year
                          </span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400 dark:group-hover:border-yellow-500 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}

          {/* Decorative Award Icons */}
          <div
            className="flex justify-center items-center gap-6 mt-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="group w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
              <i className="fas fa-trophy text-white text-3xl group-hover:scale-125 transition-transform duration-300"></i>
            </div>
            <div className="group w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:-rotate-12 transition-all duration-300 cursor-pointer">
              <i className="fas fa-medal text-white text-3xl group-hover:scale-125 transition-transform duration-300"></i>
            </div>
            <div className="group w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer">
              <i className="fas fa-award text-white text-3xl group-hover:scale-125 transition-transform duration-300"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10 flex items-center gap-2 text-sm font-medium"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <span>Close</span>
              <div className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fas fa-times text-xl"></i>
              </div>
            </button>

            <div className="relative w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4">
              <Image
                src={selectedImage}
                alt="Achievement full view"
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Achievements;
