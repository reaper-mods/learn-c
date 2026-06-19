import React, { useState, useEffect } from 'react';

const Progress = () => {
  const [topics, setTopics] = useState([
    { id: 1, name: 'C Basics', completed: false, score: 0, lastStudied: null },
    { id: 2, name: 'Control Flow', completed: false, score: 0, lastStudied: null },
    { id: 3, name: 'Arrays & Loops', completed: false, score: 0, lastStudied: null },
    { id: 4, name: 'Practice Problems', completed: false, score: 0, lastStudied: null }
  ]);

  const [exerciseStats, setExerciseStats] = useState({
    totalAttempted: 0,
    totalSolved: 0,
    successRate: 0,
    recentActivity: []
  });

  // Load progress from localStorage
  useEffect(() => {
    const savedTopics = localStorage.getItem('cProgrammingProgress_topics');
    const savedStats = localStorage.getItem('cProgrammingProgress_stats');

    if (savedTopics) {
      setTopics(JSON.parse(savedTopics));
    }
    if (savedStats) {
      setExerciseStats(JSON.parse(savedStats));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('cProgrammingProgress_topics', JSON.stringify(topics));
    localStorage.setItem('cProgrammingProgress_stats', JSON.stringify(exerciseStats));
  }, [topics, exerciseStats]);

  const markTopicComplete = (id, score) => {
    setTopics(prev =>
      prev.map(topic =>
        topic.id === id
          ? { ...topic, completed: true, score: score, lastStudied: new Date().toISOString() }
          : topic
      )
    );

    // Update exercise stats
    setExerciseStats(prev => {
      const newSolved = prev.totalSolved + (score >= 80 ? 1 : 0);
      const newAttempted = prev.totalAttempted + 1;
      return {
        ...prev,
        totalSolved: newSolved,
        totalAttempted: newAttempted,
        successRate: newAttempted > 0 ? Math.round((newSolved / newAttempted) * 100) : 0,
        recentActivity: [
          {
            id: Date.now(),
            topicId: id,
            score: score,
            date: new Date().toISOString()
          },
          ...prev.recentActivity.slice(0, 4) // Keep last 5 activities
        ]
      };
    });
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setTopics([
        { id: 1, name: 'C Basics', completed: false, score: 0, lastStudied: null },
        { id: 2, name: 'Control Flow', completed: false, score: 0, lastStudied: null },
        { id: 3, name: 'Arrays & Loops', completed: false, score: 0, lastStudied: null },
        { id: 4, name: 'Practice Problems', completed: false, score: 0, lastStudied: null }
      ]);
      setExerciseStats({
        totalAttempted: 0,
        totalSolved: 0,
        successRate: 0,
        recentActivity: []
      });
    }
  };

  const overallProgress = topics.reduce((acc, topic) => acc + (topic.completed ? 1 : 0), 0);
  const progressPercentage = Math.round((overallProgress / topics.length) * 100);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Learning Progress</h1>
        <button
          onClick={resetProgress}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg"
        >
          Reset Progress
        </button>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Progress</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Completion Rate</h3>
              <p className="text-2xl font-bold text-indigo-600">
                {progressPercentage}%
              </p>
            </div>
            <div className="w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36" circumference="113.04">
                <path
                  stroke="#eee"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.084a15.916 15.916 0 010 31.831"
                />
                <path
                  stroke={`url(#progressGradient)`}
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${progressPercentage * 1.13} 113.04`}
                  d="M18 2.084a15.916 15.916 0 010 31.831"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.5s"
                    fill="freeze"
                  />
                </path>
              </svg>
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              {overallProgress} out of {topics.length} topics completed
            </p>
          </div>
        </div>
      </div>

      {/* Topic Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Topic Progress</h2>

        <div className="space-y-4">
          {topics.map(topic => (
            <div key={topic.id} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{topic.name}</h3>
                  <p className="text-sm text-gray-500">
                    {topic.lastStudied ?
                      `Last studied: ${new Date(topic.lastStudied).toLocaleDateString()}` :
                      'Not started yet'
                    }
                  </p>
                </div>
                <div className="text-right space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    topic.completed ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {topic.completed ? 'Completed' : 'In Progress'}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    Score: {topic.score}%
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className={`bg-indigo-600 h-2.5 rounded-full transition-all duration-500`}
                  style={{ width: `${topic.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <h3 className="font-semibold text-gray-900 mb-3">Mark Topic as Complete</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map(topic => (
              <div key={topic.id} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{topic.name}</h4>
                <div className="flex space-x-3">
                  {[60, 70, 80, 90, 100].map(score => (
                    <button
                      key={score}
                      onClick={() => markTopicComplete(topic.id, score)}
                      className={`px-3 py-1 text-xs rounded ${
                        topic.score >= score ? 'bg-indigo-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      }`}
                    >
                      {score}%
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise Statistics */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Exercise Statistics</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Overall Performance</h3>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-indigo-600">
                {exerciseStats.successRate}%
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="grid gap-2 text-sm text-gray-600">
              <div>Problems Attempted</div>
              <div className="text-right">{exerciseStats.totalAttempted}</div>
              <div>Problems Solved</div>
              <div className="text-right">{exerciseStats.totalSolved}</div>
              <div>Remaining</div>
              <div className="text-right">
                {Math.max(0, exerciseStats.totalAttempted - exerciseStats.totalSolved)}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Recent Activity</h3>
            {exerciseStats.recentActivity.length > 0 ? (
              <div className="space-y-3">
                {exerciseStats.recentActivity.map(activity => (
                  <div key={activity.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Topic {activity.topicId}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right space-x-2">
                      <span className={`font-medium ${
                        activity.score >= 80 ? 'text-green-600' : activity.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {activity.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                No recent activity. Start solving problems to see your progress here!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Study Recommendations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Study Recommendations</h2>

        <div className="space-y-4">
          {!topics.some(t => t.completed) && (
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800">Getting Started</h3>
              <p className="text-sm text-gray-600">
                Begin with the C Basics topic to build your foundation, then move
                to Control Flow before tackling Arrays and Loops.
              </p>
            </div>
          )}

          {topics.some(t => !t.completed) && (
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800">Next Steps</h3>
              <p className="text-sm text-gray-600">
                {() => {
                  const incomplete = topics.find(t => !t.completed);
                  if (!incomplete) return '';
                  return `Focus on completing "${incomplete.name}" next. ` +
                         `Your current score is ${incomplete.score}%. ` +
                         `Aim for at least 80% to mark it as complete.`;
                }}()
              </p>
            </div>
          )}

          {topics.every(t => t.completed) && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Congratulations!</h3>
              <p className="text-sm text-gray-600">
                You've completed all core topics! Now focus on solving practice
                problems to strengthen your skills and prepare for your exams.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t">
          <h3 className="font-semibold text-gray-900 mb-3">Study Tips</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
            <li>Practice coding daily for at least 30 minutes</li>
            <li>Visualize how data moves through arrays and loops</li>
            <li>Start with simple problems before moving to complex ones</li>
            <li>Review your mistakes and understand why they happened</li>
            <li>Use the visualizer to understand complex concepts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Progress;