import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-center">
            <Code className="text-blue-400" size={20} />
            <span className="text-lg">
              Designed & Built by{' '}
              <span className="font-semibold text-blue-400">Varun Kashyap</span>
            </span>
            <Heart className="text-red-500 animate-pulse" size={20} />
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p>© {currentYear} Varun Kashyap. All rights reserved.</p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Frontend Developer</span>
            <span>•</span>
            <span>React Specialist</span>
            <span>•</span>
            <span>Problem Solver</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;