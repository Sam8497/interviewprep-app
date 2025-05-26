import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Car as Cards, BrainCircuit, LineChart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      path: '/questions',
      icon: BookOpen,
      title: 'Practice Questions',
      description: 'Access a comprehensive library of interview questions by category.',
    },
    {
      path: '/flashcards',
      icon: Cards,
      title: 'Flashcards',
      description: 'Review key concepts with interactive flashcards.',
    },
    {
      path: '/quiz',
      icon: BrainCircuit,
      title: 'Quiz Mode',
      description: 'Test your knowledge with timed quizzes.',
    },
    {
      path: '/progress',
      icon: LineChart,
      title: 'Track Progress',
      description: 'Monitor your improvement over time.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ace Your Next Interview
        </h1>
        <p className="text-lg text-gray-600">
          Prepare effectively with our comprehensive interview preparation tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.path}
              to={feature.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold ml-3">{feature.title}</h2>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Browse our collection of practice questions by category</li>
          <li>Use flashcards to memorize key concepts</li>
          <li>Test your knowledge with quizzes</li>
          <li>Track your progress and identify areas for improvement</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;