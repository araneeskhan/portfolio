import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { projectsData } from '@/data/projects';
import { useState } from 'react'; // Add this import

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Project Not Found</h2>
          <button 
            onClick={() => router.push('/')} 
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${project.title} | Project Details`}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{project.title}</h1>
          
          <div 
            className="relative h-[400px] mb-8 rounded-xl overflow-hidden cursor-pointer"
            onClick={() => handleImageClick(Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage)}
          >
            <Image
              src={Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fab fa-github mr-2"></i> View Code
              </a>
              {/* Removed the Back to Projects button */}
            </div>
          </div>
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
    </Layout>
  );
}