import React from 'react';
import { experiences } from '../data/experience';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from '../utils/motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="text-blue-700 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey as a frontend developer, showcasing my growth, 
            responsibilities, and achievements.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-900 transform md:translate-x-[-0.5px]"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <motion
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-start relative ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full mt-2 sm:mt-0">
                        {experience.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium text-blue-700 dark:text-blue-400 mb-2">
                      {experience.company}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    {experience.achievements && (
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Empty div for layout on alternating sides */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;