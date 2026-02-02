import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/Layout";
import { projectsData } from "@/data/projects";
import { useState } from "react";
import Link from "next/link";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    // Find the index of the clicked image in screenshots
    if (project?.screenshots) {
      const index = project.screenshots.findIndex((s) => s.path === image);
      setCurrentImageIndex(index >= 0 ? index : 0);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (
      project?.screenshots &&
      currentImageIndex < project.screenshots.length - 1
    ) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(project.screenshots[nextIndex].path);
    }
  };

  const prevImage = () => {
    if (project?.screenshots && currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(project.screenshots[prevIndex].path);
    }
  };

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-900 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative z-10 text-center">
            <div className="mb-8">
              <i className="fas fa-folder-open text-8xl text-blue-600 dark:text-blue-400 opacity-50"></i>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Project Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The project you're looking for doesn't exist or has been moved.
            </p>
            <button
              onClick={() => router.push("/")}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-home mr-2"></i>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${project.title} | Project Details`}>
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto mb-8" data-aos="fade-right">
            <Link
              href="/#projects"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
              Back to Projects
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Project Header */}
            <div className="mb-12" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                  Featured Project
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Main Image */}
            <div
              className="relative h-[400px] md:h-[500px] lg:h-[600px] mb-12 rounded-2xl overflow-hidden cursor-pointer shadow-2xl group"
              onClick={() =>
                handleImageClick(
                  Array.isArray(project.coverImage)
                    ? project.coverImage[0]
                    : project.coverImage
                )
              }
              data-aos="zoom-in"
            >
              <Image
                src={
                  Array.isArray(project.coverImage)
                    ? project.coverImage[0]
                    : project.coverImage
                }
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Expand Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <i className="fas fa-expand text-blue-600 dark:text-blue-400 text-xl"></i>
                </div>
              </div>
            </div>

            {/* View More Photos Button */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-12" data-aos="fade-up">
                <button
                  onClick={() => {
                    // Open first screenshot in modal as a preview
                    if (project.screenshots && project.screenshots.length > 0) {
                      handleImageClick(project.screenshots[0].path);
                    }
                  }}
                  className="group relative w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3"
                >
                  <i className="fas fa-images text-2xl"></i>
                  <span className="text-lg">
                    View More Photos ({project.screenshots.length})
                  </span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Overview */}
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                  data-aos="fade-up"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <i className="fas fa-info-circle text-blue-600 dark:text-blue-400 mr-3"></i>
                    Project Overview
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Key Features - if you want to add later */}
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <i className="fas fa-star text-blue-600 dark:text-blue-400 mr-3"></i>
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Technologies */}
                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24"
                  data-aos="fade-left"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <i className="fas fa-code text-blue-600 dark:text-blue-400 mr-2"></i>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className="space-y-3"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <i className="fab fa-github mr-2 text-lg"></i>
                      View Source Code
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery Modal */}
        {selectedImage && project?.screenshots && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative max-w-7xl max-h-[95vh] w-full animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group border-2 border-white/20 hover:border-white/40"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <i className="fas fa-times text-white text-2xl group-hover:rotate-90 transition-transform duration-300"></i>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 z-50 text-white text-sm font-semibold bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-white/20">
                {currentImageIndex + 1} / {project.screenshots.length}
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4">
                <Image
                  src={selectedImage}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
                />

                {/* Previous Button */}
                {currentImageIndex > 0 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Previous image"
                  >
                    <i className="fas fa-chevron-left text-white text-xl group-hover:-translate-x-0.5 transition-transform"></i>
                  </button>
                )}

                {/* Next Button */}
                {currentImageIndex < project.screenshots.length - 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Next image"
                  >
                    <i className="fas fa-chevron-right text-white text-xl group-hover:translate-x-0.5 transition-transform"></i>
                  </button>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setSelectedImage(screenshot.path);
                    }}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex
                        ? "ring-2 ring-blue-500 scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={screenshot.path}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
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

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </Layout>
  );
}
