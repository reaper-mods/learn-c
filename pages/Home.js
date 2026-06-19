import React from 'react';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          C Programming Visualizer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Master C programming fundamentals with interactive visualizations
          and hands-on practice. Perfect for beginners preparing for exams
          and placement tests.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm6 4a2 2 0 100-4 2 2 0 000 4zM5 8h14" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">C Basics</h3>
              <p className="text-sm text-gray-500">
                Learn about main function, stdio.h, platform independence,
                data types, variables, and escape sequences.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Control Flow</h3>
              <p className="text-sm text-gray-500">
                Master if-else, switch, while, do-while loops, break, and
                continue statements with visual examples.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.504-.253-2.992-.748-4.226z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Arrays & Loops</h3>
              <p className="text-sm text-gray-500">
                Visualize how arrays work in memory and practice loop
                iterations with animated examples.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 110-4 2 2 0 010 4zm-6 0a2 2 0 100-4 2 2 0 000 4zm6 4a2 2 0 100-4 2 2 0 000 4zM5 8h14" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Practice Problems</h3>
              <p className="text-sm text-gray-500">
                Solve array-based problems like finding duplicates, reversing
                arrays, finding max elements, and prime numbers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-sm text-gray-500">
                Track your learning progress and identify areas that need
                more practice.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-50 rounded-full flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 1.105 1.895 2 2 2s2-.895 2-2-1.895-2-2-2-2 .895-2 2zm0 12c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm6-4v1H13v-1a4 4 0 00-8 0v1H6a6 6 0 013.455-10.223A5.987 5.987 0 0112 4c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Exam Preparation</h3>
              <p className="text-sm text-gray-500">
                Prepare for your institute's exams with targeted practice
                and mock tests similar to the actual assessment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How This Helps You</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-indigo-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 8.93l2.293 2.293c.63.63.182 1.707-.445 1.707H4.15c-.627 0-1.075-1.077-.445-1.707L10 8.93zM9.5 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Visual Learning</h3>
              <p className="text-sm text-gray-500">
                See exactly how arrays store data in memory and how loops
                iterate through elements with animated visualizations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-indigo-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0 1 1 0 002 0zm-1 9a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Interactive Practice</h3>
              <p className="text-sm text-gray-500">
                Get instant feedback on your code solutions with hints and
                step-by-step explanations.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-indigo-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 003.576-13.792L5.207 4.793A1 1 0 004 5V3a1 1 0 00-2 0v2a1 1 0 00-1.09.895l-1.32.88a1 1 0 00-.162 1.102l.037.024a5.076 5.076 0 006.974 6.974l.024.037a1 1 0 001.102.162l.88-1.32a1 1 0 00.895-1.09H5a1 1 0 000 2h1.207l2.293 2.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Progress Tracking</h3>
              <p className="text-sm text-gray-500">
                Monitor your improvement over time and focus on topics that
                need more attention.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-12">
        <a href="/basics" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
          Start Learning C Basics
        </a>
      </div>
    </div>
  );
};

export default Home;