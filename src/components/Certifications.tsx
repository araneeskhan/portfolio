import { useState } from "react";

interface Certification {
  name: string;
  issuer: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
}

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications: Certification[] = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services - coursera",
      icon: "fab fa-aws",
      color: "orange",
      gradient: "from-orange-500 to-yellow-500",
      description:
        "Cloud computing fundamentals, AWS services, security, architecture, and pricing.",
    },
    {
      name: "TensorFlow Developer",
      issuer: "Google - coursera",
      icon: "fas fa-brain",
      color: "red",
      gradient: "from-red-500 to-orange-500",
      description:
        "Building and training neural networks, image classification, NLP, and time series forecasting.",
    },
    {
      name: "Flower Framework",
      issuer: "Flower Labs",
      icon: "fas fa-network-wired",
      color: "pink",
      gradient: "from-pink-500 to-purple-500",
      description:
        "Federated Learning framework for building privacy-preserving and decentralized AI systems.",
    },
    {
      name: "React.js",
      issuer: "Meta - coursera",
      icon: "fab fa-react",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
      description:
        "Building dynamic user interfaces, component architecture, hooks, state management, and performance optimization.",
    },
    {
      name: "React Native",
      issuer: "Meta - coursera",
      icon: "fas fa-mobile-alt",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500",
      description:
        "Cross-platform mobile app development, native modules, navigation, and mobile UI patterns.",
    },
    {
      name: "Python",
      issuer: "Python Institute - coursera",
      icon: "fab fa-python",
      color: "yellow",
      gradient: "from-yellow-500 to-green-500",
      description:
        "Core Python programming, data structures, OOP, scripting, and automation.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-600 dark:to-emerald-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-600 dark:from-orange-600 dark:to-red-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-900 rounded-full blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full"
            data-aos="fade-up"
          >
            My Credentials
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Certifications
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
            Professional certifications that validate my expertise across
            various technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden h-full">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-5">
                    <div
                      className={`w-14 h-14 flex items-center justify-center bg-gradient-to-br ${cert.gradient} rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <i className={`${cert.icon} text-white text-2xl`}></i>
                    </div>
                  </div>

                  {/* Cert name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                    <i className="fas fa-building text-xs"></i>
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Bottom divider and credential icon */}
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <i className="fas fa-certificate text-sm"></i>
                      <span className="text-xs font-medium">
                        Professional Certificate
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-gradient-to-br group-hover:${cert.gradient} transition-all duration-300`}
                    >
                      <i className="fas fa-arrow-right text-xs text-gray-400 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-500`}
                  style={{
                    borderColor:
                      hoveredCert === index ? "currentColor" : "transparent",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Workshops Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full"
              data-aos="fade-up"
            >
              Hands-On Learning
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Workshops Attended
            </h2>
            <div
              className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>

          <div
            className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Top accent gradient */}
            <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-rose-500"></div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-600 to-rose-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <i className="fas fa-cloud text-white text-2xl"></i>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Huawei Cloud Services Workshop
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded-full border border-purple-200 dark:border-purple-800">
                      <i className="fas fa-chalkboard-teacher text-[10px]"></i>
                      Workshop
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                      <i className="fas fa-building text-xs"></i>
                      Huawei
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                      <i className="fas fa-map-marker-alt text-xs"></i>
                      COMSATS University Islamabad
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    Hands-on workshop covering Huawei Cloud platforms, cloud
                    architecture, cloud-native services, and enterprise cloud
                    solutions. Gained practical experience with cloud deployment,
                    resource management, and scalable infrastructure design.
                  </p>

                  {/* Topics covered */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cloud Architecture",
                      "Huawei Cloud Services",
                      "Cloud Deployment",
                      "Infrastructure Design",
                      "Resource Management",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <i className="fas fa-certificate text-white"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {certifications.length}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Certifications
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <i className="fas fa-chalkboard-teacher text-white"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                1
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Workshop
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
              <i className="fas fa-layer-group text-white"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                5+
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Platforms
              </p>
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

export default Certifications;
