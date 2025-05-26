import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      question: 'What is the output of typeof null?',
      options: ['null', 'undefined', 'object', 'number'],
      correct: 2,
    },
    {
      question: 'Which hook is used for side effects in React?',
      options: ['useState', 'useEffect', 'useContext', 'useReducer'],
      correct: 1,
    },
    {
      question: 'What does CSS stand for?',
      options: [
        'Counter Style Sheets',
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Creative Style Sheets',
      ],
      correct: 2,
    },
  ];

  useEffect(() => {
    let interval: number | null = null;
    if (isActive && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const startQuiz = () => {
    setIsActive(true);
    setTimeLeft(30);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }
    setTimeout(handleNextQuestion, 1000);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
    } else {
      setIsActive(false);
      setShowResults(true);
    }
  };

  if (!isActive && !showResults) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Quiz Mode</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl mb-4">Ready to test your knowledge?</h2>
          <p className="text-gray-600 mb-6">
            You'll have 30 seconds per question. Good luck!
          </p>
          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Quiz Results</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-4">
            You scored {score} out of {questions.length}
          </h2>
          <p className="text-gray-600 mb-6">
            {score === questions.length
              ? 'Perfect score! Amazing job! 🎉'
              : score > questions.length / 2
              ? 'Good job! Keep practicing! 👍'
              : 'Keep studying and try again! 💪'}
          </p>
          <button
            onClick={startQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-medium">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex items-center text-gray-600">
            <Timer className="w-5 h-5 mr-2" />
            <span>{timeLeft}s</span>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-6">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-md transition-colors ${
                selectedAnswer === null
                  ? 'hover:bg-gray-100'
                  : selectedAnswer === index
                  ? index === questions[currentQuestion].correct
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                  : index === questions[currentQuestion].correct
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              <div className="flex items-center">
                {selectedAnswer !== null &&
                  index === questions[currentQuestion].correct && (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  )}
                {selectedAnswer === index &&
                  index !== questions[currentQuestion].correct && (
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  )}
                {option}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;