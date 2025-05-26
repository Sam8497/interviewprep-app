import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Frontend Developer';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 -z-10"></div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-700 dark:text-blue-400">Alex Smith</span>
          </h1>
          <div className="h-12 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
              <span>{typedText}</span>
              <span className={`inline-block w-1 h-8 ml-1 bg-blue-700 dark:bg-blue-400 ${
                isTypingComplete ? 'animate-blink' : ''
              }`}></span>
            </h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            I create beautiful, responsive web applications with clean code and exceptional user experiences, leveraging modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={18} />
            </button>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-600 dark:to-teal-600 absolute blur-3xl opacity-20 dark:opacity-30 animate-pulse"></div>
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl relative z-10 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4064838/pexels-photo-4064838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Developer profile"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-xl z-0 blur-sm opacity-50 dark:opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-red-400 dark:bg-red-500 rounded-lg z-0 blur-sm opacity-50 dark:opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;