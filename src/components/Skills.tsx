import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Wrench, 
  Brain,
  FileCode,
  Database,
  Globe,
  Cpu
} from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages & Frontend',
      icon: Code2,
      color: 'blue',
      skills: ['HTML', 'CSS', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Responsive Design']
    },
    {
      title: 'UI/UX & Design Tools',
      icon: Palette,
      color: 'green',
      skills: ['Figma', 'Sketch', 'Design Systems', 'UI/UX Collaboration', 'WCAG Standards', 'Performance Optimization']
    },
    {
      title: 'Tools & Practices',
      icon: Wrench,
      color: 'purple',
      skills: ['Git & Version Control', 'Code Reviews', 'Agile & Scrum', 'Testing & Debugging', 'Scalable UI', 'Modern JS Frameworks']
    },
    {
      title: 'Professional Skills',
      icon: Brain,
      color: 'orange',
      skills: ['Problem-Solving', 'Attention to Detail', 'Communication Skills', 'Industry Trends', 'Portfolio Development']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        hoverBg: 'group-hover:bg-blue-200 dark:group-hover:bg-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        badge: 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900',
        hoverBg: 'group-hover:bg-green-200 dark:group-hover:bg-green-800',
        icon: 'text-green-600 dark:text-green-400',
        badge: 'bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        hoverBg: 'group-hover:bg-purple-200 dark:group-hover:bg-purple-800',
        icon: 'text-purple-600 dark:text-purple-400',
        badge: 'bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900',
        hoverBg: 'group-hover:bg-orange-200 dark:group-hover:bg-orange-800',
        icon: 'text-orange-600 dark:text-orange-400',
        badge: 'bg-orange-50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and solving complex problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div
                  key={category.title}
                  className={`group p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'animate-fade-in-up' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 ${colorClasses.bg} ${colorClasses.hoverBg} rounded-lg transition-colors duration-300`}>
                      <category.icon className={colorClasses.icon} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 ${colorClasses.badge} rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;