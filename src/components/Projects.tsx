import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import SectionHeader from "@/components/SectionHeader";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = Object.entries(projectsData).map(([id, project]) => ({
    id,
    ...project,
  }));

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <SectionHeader
          label="Browse My Recent"
          title="Projects"
          description="Showcasing my latest work and creative solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Project Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Image Container with Overlay */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      Array.isArray(project.coverImage)
                        ? project.coverImage[0]
                        : project.coverImage
                    )
                  }
                >
                  <Image
                    src={
                      Array.isArray(project.coverImage)
                        ? project.coverImage[0]
                        : project.coverImage
                    }
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* View Image Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <i className="fas fa-expand text-blue-600 dark:text-blue-400"></i>
                    </div>
                  </div>

                  {/* Case Study badge — visible on the image so it's impossible to miss */}
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-10"
                    >
                      <i className="fas fa-microscope text-xs"></i>
                      Case Study
                    </Link>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title with gradient on hover */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <i className="fas fa-eye mr-2"></i>
                        View Details
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    </Link>

                    <a
                      href={project.githubUrl}
                      className="group/btn px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-gray-900 dark:text-white text-sm font-medium rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Code"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>

                  {/* Case Study link — full width, below main buttons */}
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      className="group/cs mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-300 dark:border-amber-700 hover:border-amber-500 dark:hover:border-amber-500 text-amber-700 dark:text-amber-400 text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-md"
                    >
                      <i className="fas fa-microscope text-sm"></i>
                      Read Case Study
                      <i className="fas fa-arrow-right text-xs group-hover/cs:translate-x-1 transition-transform duration-300"></i>
                    </Link>
                  )}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 dark:group-hover:border-blue-500 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal for full-screen image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors z-10 flex items-center gap-2 text-sm font-medium"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <span>Close</span>
              <div className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300">
                <i className="fas fa-times text-xl"></i>
              </div>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4">
              <Image
                src={selectedImage}
                alt="Project full view"
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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

export default Projects;
