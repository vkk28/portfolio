import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Code, Trophy } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I recently graduated in Electronics and Computer Engineering from{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  Thapar Institute of Engineering and Technology
                </span>{' '}
                in June 2025. My journey into web development started with a
                fascination for creating beautiful and functional things on the internet.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy tackling complex problems on platforms like
                LeetCode and GeeksforGeeks, having solved{' '}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  over 800 problems
                </span>{' '}
                combined. This problem-solving mindset translates directly into my approach
                to web development, where I strive to create elegant solutions to real-world challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    Education
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Electronics & Computer Engineering
                  <br />
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    Thapar Institute of Engineering and Technology
                  </span>
                </p>
              </div>

              <div className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                    <Code className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    Passion
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Frontend Development & UI/UX Design
                  <br />
                  <span className="text-sm text-green-600 dark:text-green-400">
                    Creating engaging user experiences
                  </span>
                </p>
              </div>

              <div className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors duration-300">
                    <Trophy className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    Achievement
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  800+ Problems Solved
                  <br />
                  <span className="text-sm text-orange-600 dark:text-orange-400">
                    LeetCode & GeeksforGeeks Combined
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;