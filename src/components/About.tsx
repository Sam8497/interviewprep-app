import React from 'react';
import { Award, BookOpen, Coffee, Heart, Rocket } from 'lucide-react';
import { motion } from '../utils/motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-blue-700 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me beyond the code – my journey, passions, and what drives me as a developer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-2xl transform rotate-3 scale-105 opacity-20 dark:opacity-30"></div>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5256140/pexels-photo-5256140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Developer working"
                className="w-full h-auto rounded-xl"
              />
              
              <div className="absolute -right-6 bottom-20 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Coffee size={20} className="text-yellow-600" />
                  <span className="font-bold">253+ Coffees</span>
                </div>
              </div>
              
              <div className="absolute -left-6 top-14 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Rocket size={20} className="text-blue-600" />
                  <span className="font-bold">50+ Projects</span>
                </div>
              </div>
            </div>
          </motion>
          
          {/* Content Section */}
          <motion
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI Enthusiast</h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Alex, a passionate Frontend Developer with 5 years of experience creating modern web applications. My journey in web development began during college when I built my first website from scratch. That initial excitement of bringing designs to life has only grown stronger over time.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              What truly drives me is the intersection of beautiful design and clean, efficient code. I believe that a great user experience starts with thoughtful UI design and is perfected with optimized, accessible implementation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-medium">BSc Computer Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">UC Berkeley, 2018</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Google UX Certification</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2020</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Heart size={20} className="text-red-500" />
              When I'm not coding
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              Outside of work, I'm an avid photographer, a coffee enthusiast, and love hiking in nature. I also enjoy contributing to open-source projects and mentoring new developers. These activities help me maintain a creative perspective that I bring back to my development work.
            </p>
          </motion>
        </div>
      </div>
    </section>
  );
};

export default About;