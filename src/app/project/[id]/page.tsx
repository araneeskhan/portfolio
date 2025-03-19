'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData[id as keyof typeof projectsData];
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/#projects" className="btn-primary">
            <i className="fas fa-arrow-left mr-2"></i> Back to Projects
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const openFullScreen = (image: string) => {
    setFullScreenImage(image);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-white dark:bg-gray-900 pt-24 pb-20 overflow-hidden">
        {/* Background decoration - similar to home/about screens */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline">
              <i className="fas fa-arrow-left mr-2"></i> Back to Projects
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>
            
            <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
              {Array.isArray(project.coverImage) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.coverImage.map((img: string, i: number) => (
                    <div 
                      key={i} 
                      className="relative h-64 md:h-80 group cursor-pointer" 
                      onClick={() => openFullScreen(img)}
                    >
                      <Image 
                        src={img} 
                        alt={`${project.title} screenshot ${i+1}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                        <div className="transform scale-0 group-hover:scale-100 transition-transform">
                          <i className="fas fa-expand text-white text-2xl"></i>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div 
                  className="relative h-64 md:h-96 group cursor-pointer" 
                  onClick={() => openFullScreen(project.coverImage)}
                >
                  <Image 
                    src={project.coverImage} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform">
                      <i className="fas fa-expand text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {project.videoPath && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Demo Video</h2>
                <div className={`aspect-w-16 aspect-h-9 rounded-xl overflow-hidden`}>
                  {project.videoPath.includes('/') ? (
                    <video 
                      src={project.videoPath} 
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={`https://player.vimeo.com/video/${project.videoPath}?autoplay=0&loop=0&title=0&byline=0&portrait=0`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
              </div>
            )}
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About the Project</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">
                      <i className="fas fa-check-circle mt-1"></i>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={project.githubUrl} 
                className="btn-secondary flex-1 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github mr-2"></i> View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeFullScreen}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-blue-400 transition-colors z-10"
              onClick={closeFullScreen}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="relative w-full h-[80vh]">
              <Image 
                src={fullScreenImage} 
                alt="Full screen view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}