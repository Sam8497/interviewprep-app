import React from 'react';
import { BarChart3, Trophy, Clock, Target } from 'lucide-react';

const Progress = () => {
  const stats = [
    {
      icon: Trophy,
      label: 'Questions Completed',
      value: '24/50',
      color: 'text-yellow-600',
      progress: 48,
    },
    {
      icon: Clock,
      label: 'Average Response Time',
      value: '45s',
      color: 'text-blue-600',
      progress: 75,
    },
    {
      icon: Target,
      label: 'Accuracy Rate',
      value: '85%',
      color: 'text-green-600',
      progress: 85,
    },
  ];

  const categories = [
    { name: 'JavaScript', completed: 15, total: 20, score: 85 },
    { name: 'React', completed: 8, total: 15, score: 75 },
    { name: 'CSS', completed: 12, total: 15, score: 90 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="ml-3 font-medium">{stat.label}</h2>
              </div>
              <div className="text-2xl font-bold mb-2">{stat.value}</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
          Performance by Category
        </h2>
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{category.name}</span>
                <span className="text-gray-600">
                  {category.completed}/{category.total} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${(category.completed / category.total) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <span>Score: {category.score}%</span>
                <span>
                  {((category.completed / category.total) * 100).toFixed(0)}% complete
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Recommendations</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            Focus on completing React questions to improve your coverage
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            Review JavaScript concepts where accuracy is below 90%
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
            Try to improve response time in CSS questions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Progress;