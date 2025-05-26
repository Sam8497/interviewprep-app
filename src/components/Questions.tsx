import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const Questions = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'JavaScript Fundamentals',
      questions: [
        {
          q: 'What is the difference between let, const, and var?',
          a: 'var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.',
        },
        {
          q: 'Explain closures in JavaScript.',
          a: 'A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables in its outer scope even after the outer function has returned.',
        },
      ],
    },
    {
      name: 'React Concepts',
      questions: [
        {
          q: 'What are React hooks?',
          a: 'Hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState, useEffect, useContext, etc.',
        },
        {
          q: 'Explain the virtual DOM.',
          a: 'The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM.',
        },
      ],
    },
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Practice Questions</h1>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredCategories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
            >
              <h2 className="text-xl font-semibold">{category.name}</h2>
              {activeCategory === category.name ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            
            {activeCategory === category.name && (
              <div className="p-6 space-y-6">
                {category.questions.map((q, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-lg text-gray-900">{q.q}</h3>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded-md">{q.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;