import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Basics from './pages/Basics';
import ControlFlow from './pages/ControlFlow';
import ArraysLoops from './pages/ArraysLoops';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link
                  to="/"
                  className="flex-shrink-0 flex items-center text-xl font-bold text-indigo-600"
                >
                  C Visualizer
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    to="/basics"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Basics
                  </Link>
                  <Link
                    to="/control-flow"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Control Flow
                  </Link>
                  <Link
                    to="/arrays-loops"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Arrays & Loops
                  </Link>
                  <Link
                    to="/practice"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Practice
                  </Link>
                  <Link
                    to="/progress"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Progress
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/control-flow" element={<ControlFlow />} />
            <Route path="/arrays-loops" element={<ArraysLoops />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;