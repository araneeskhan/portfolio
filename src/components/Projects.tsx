import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Convert the object to an array for easier mapping
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <p className="section-subtitle" data-aos="fade-up">
          Browse My Recent
        </p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => handleImageClick(Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage)}>
                <Image
                  src={
                    Array.isArray(project.coverImage)
                      ? project.coverImage[0]
                      : project.coverImage
                  }
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <Link
                     href={`/projects/${project.id}`} // Remove the /portfolio prefix since it's handled by Next.js basePath
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.githubUrl}
                    className="btn-secondary text-sm px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-2"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-screen image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Project full view"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh] rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;