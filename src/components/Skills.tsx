import React from 'react';
import { skills } from '../data/skills';
import { motion } from '../utils/motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-blue-700 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a wide range of technologies in the web development world.
            Here's a snapshot of my expertise and technical proficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.categories.map((category, index) => (
            <motion 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <span className={`p-2 rounded-lg ${category.colorClass} mr-4`}>
                  {/* Using the icon from the data */}
                  <category.icon size={24} className="text-white" />
                </span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.tools.map((tool, index) => (
            <motion
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md mb-3">
                <tool.icon size={28} className="text-blue-700 dark:text-blue-400" />
              </div>
              <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tool.name}</span>
            </motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;