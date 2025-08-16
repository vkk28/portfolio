import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Eye, Github, Linkedin, Code, Brain } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello, I'm Varun Kashyap";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Replace with actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/varun-kashyap-a06486323/',
      color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/vkk28',
      color: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
    },
    { 
      name: 'LeetCode', 
      icon: Code, 
      href: 'https://leetcode.com/u/kashyap2808/',
      color: 'text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300'
    },
    { 
      name: 'GeeksforGeeks', 
      icon: Brain, 
      href: 'https://www.geeksforgeeks.org/user/vkashyapbe21/',
      color: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500 dark:bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
                <img 
                  src="/avatar.jpg" 
                  alt="Varun Kashyap" 
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onLoad={(e) => {
                    console.log('Avatar image loaded successfully');
                  }}
                  onError={(e) => {
                    console.log('Avatar image failed to load, using fallback');
                    // Fallback to a more polished placeholder if image doesn't load
                    e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
                          </linearGradient>
                        </defs>
                        <rect width="160" height="160" fill="url(#grad)"/>
                        <text x="80" y="95" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">VK</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block h-16 sm:h-20">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Frontend Developer | React.js Specialist | Problem Solver
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build engaging and user-friendly web experiences with a passion for clean code and creative design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Eye className="mr-2" size={20} />
              View My Work
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="group inline-flex items-center px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${link.color}`}
                title={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 dark:text-gray-600" size={32} />
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
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;