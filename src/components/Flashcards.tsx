import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Repeat } from 'lucide-react';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentDeck, setCurrentDeck] = useState('javascript');

  const decks = {
    javascript: [
      {
        question: 'What is hoisting in JavaScript?',
        answer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of their scope before code execution.',
      },
      {
        question: 'What is the event loop?',
        answer: 'The event loop is a programming construct that waits for and dispatches events in a program.',
      },
    ],
    react: [
      {
        question: 'What is JSX?',
        answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.',
      },
      {
        question: 'What is the purpose of useEffect?',
        answer: 'useEffect is a React Hook that lets you synchronize a component with an external system or handle side effects.',
      },
    ],
  };

  const currentCards = decks[currentDeck as keyof typeof decks];

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % currentCards.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + currentCards.length) % currentCards.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Flashcards</h1>

      <div className="mb-6 flex space-x-4">
        <button
          onClick={() => {
            setCurrentDeck('javascript');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className={`px-4 py-2 rounded-md ${
            currentDeck === 'javascript'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setCurrentDeck('react');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className={`px-4 py-2 rounded-md ${
            currentDeck === 'react'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          React
        </button>
      </div>

      <div className="relative h-80 mb-6">
        <div
          className={`w-full h-full perspective-1000 ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="relative w-full h-full cursor-pointer transition-transform duration-500 transform-style-preserve-3d">
            <div className={`absolute w-full h-full backface-hidden ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="w-full h-full bg-white rounded-xl shadow-lg p-8 flex items-center justify-center">
                <p className="text-xl text-center">
                  {currentCards[currentIndex].question}
                </p>
              </div>
            </div>
            <div className={`absolute w-full h-full backface-hidden transform rotate-y-180 ${
              isFlipped ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-full h-full bg-blue-50 rounded-xl shadow-lg p-8 flex items-center justify-center">
                <p className="text-xl text-center">
                  {currentCards[currentIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevCard}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {currentCards.length}
        </span>
        <button
          onClick={nextCard}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <Repeat className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Flashcards;