import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, MessageSquare, FileText } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Gemini Clone',
      description: 'A dynamic SPA that clones Google\'s Gemini with real-time messaging, chat history, and collapsible sidebar powered by Gemini REST API.',
      image: '/Gemini-Clone.png',
      icon: MessageSquare,
      technologies: ['React', 'TypeScript', 'Gemini API', 'Context API', 'CSS'],
      github: 'https://github.com/vkk28/gemini-clone',
      live: 'https://clone-gemini.vercel.app/',
      color: 'blue'
    },
    {
      title: 'CDP ChatBot Assistant',
      description: 'AI-powered Q&A platform for Customer Data Platforms with keyword-based intent recognition and feature comparison capabilities.',
      image: '/CDP chatbot.png',
      icon: Code,
      technologies: ['React', 'TypeScript', 'AI/ML', 'Intent Recognition', 'CSS'],
      github: 'https://github.com/vkk28/CDP-Chatbot-Assistant',
      live: 'https://gorgeous-genie-2706cb.netlify.app/',
      color: 'green'
    },
    {
      title: 'Bloggerz',
      description: 'Modern blogging platform for creating and managing blog posts with clean UI and robust content management system.',
      image: '/Bloggerz.png',
      icon: FileText,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
      github: 'https://github.com/vkk28/bloggers',
      live: 'https://bloggers-lemon.vercel.app/',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-blue-600',
        iconBg: 'bg-blue-100 dark:bg-blue-900',
        icon: 'text-blue-600 dark:text-blue-400',
        tag: 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300',
        button: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
      },
      green: {
        gradient: 'from-green-500 to-green-600',
        iconBg: 'bg-green-100 dark:bg-green-900',
        icon: 'text-green-600 dark:text-green-400',
        tag: 'bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300',
        button: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600'
      },
      purple: {
        gradient: 'from-purple-500 to-purple-600',
        iconBg: 'bg-purple-100 dark:bg-purple-900',
        icon: 'text-purple-600 dark:text-purple-400',
        tag: 'bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
        button: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, featuring modern web applications built with cutting-edge technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              return (
                <div
                  key={project.title}
                  className={`group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${colorClasses.gradient}`}></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a gradient background if image doesn't load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.style.background = `linear-gradient(135deg, ${project.color === 'blue' ? '#3B82F6, #1D4ED8' : project.color === 'green' ? '#10B981, #059669' : '#8B5CF6, #7C3AED'})`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 ${colorClasses.iconBg} rounded-lg`}>
                        <project.icon className={colorClasses.icon} size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white ml-3">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 ${colorClasses.tag} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-3 py-2 ${colorClasses.button} text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                      >
                        <ExternalLink size={14} className="mr-1.5" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        <Github size={14} className="mr-1.5" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;