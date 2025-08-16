import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
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

  const responsibilities = [
    'Developed a complete user authentication interface from scratch using React.js, including phone number and OTP verification',
    'Engineered the front-end logic for the OTP form, improving UX with features like a resend timer and auto-forwarding inputs',
    'Integrated the UI with a backend REST API to handle asynchronous OTP requests and verification',
    'Utilized the React Context API for global state management of user authentication'
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            {/* Experience entry */}
            <div className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      SDE Intern
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
                      <Briefcase size={20} className="mr-2" />
                      Techlive Solutions
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Calendar size={16} className="mr-2" />
                      Jan 2025 - July 2025
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin size={16} className="mr-2" />
                      Remote
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Current Role
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities:
                  </h4>
                  {responsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-500 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                        isVisible ? 'animate-slide-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="flex-shrink-0 text-green-500 mt-0.5" size={18} />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex flex-wrap gap-3">
                    {['React.js', 'JavaScript', 'REST API', 'Context API', 'UI/UX Design'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Experience;