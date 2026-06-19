import React, { useState } from 'react';

const Practice = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      title: "Find Duplicate Values",
      description: "Given an array of integers, find all duplicate values.",
      difficulty: "Easy",
      type: "array",
      starterCode: `int findDuplicates(int arr[], int n) {\n    // Write your code here\n    return 0;\n}`,
      testCases: [
        { input: "[1, 2, 3, 2, 4, 5, 1]", expected: "[1, 2]" },
        { input: "[5, 5, 5, 5]", expected: "[5]" },
        { input: "[1, 2, 3, 4, 5]", expected: "[]" }
      ]
    },
    {
      id: 2,
      title: "Reverse Print Array",
      description: "Print the array elements in reverse order.",
      difficulty: "Easy",
      type: "array",
      starterCode: `void reversePrint(int arr[], int n) {\n    // Write your code here\n}`,
      testCases: [
        { input: "[1, 2, 3, 4, 5]", expected: "[5, 4, 3, 2, 1]" },
        { input: "[10, 20, 30]", expected: "[30, 20, 10]" }
      ]
    },
    {
      id: 3,
      title: "Find Largest Element",
      description: "Find the largest element in the array.",
      difficulty: "Easy",
      type: "array",
      starterCode: `int findLargest(int arr[], int n) {\n    // Write your code here\n    return 0;\n}`,
      testCases: [
        { input: "[3, 7, 2, 9, 4]", expected: "9" },
        { input: "[-1, -5, -3]", expected: "-1" }
      ]
    },
    {
      id: 4,
      title: "Find Prime Numbers Up to Max",
      description: "Find all prime numbers up to the largest element in the array.",
      difficulty: "Medium",
      type: "array",
      starterCode: `void findPrimesUpToMax(int arr[], int n) {\n    // Write your code here\n}`,
      testCases: [
        { input: "[3, 7, 2, 9, 4]", expected: "[2, 3, 5, 7]" },
        { input: "[10, 15, 20]", expected: "[2, 3, 5, 7, 11, 13, 17, 19]" }
      ]
    },
    {
      id: 5,
      title: "Check if Array is Sorted",
      description: "Determine if the array is sorted in ascending order.",
      difficulty: "Easy",
      type: "array",
      starterCode: `int isSorted(int arr[], int n) {\n    // Write your code here\n    return 0;\n}`,
      testCases: [
        { input: "[1, 2, 3, 4, 5]", expected: "1" },
        { input: "[1, 3, 2, 4, 5]", expected: "0" },
        { input: "[5, 4, 3, 2, 1]", expected: "0" }
      ]
    }
  ]);

  const [currentExerciseId, setCurrentExerciseId] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);

  // Initialize with first exercise
  React.useEffect(() => {
    if (currentExerciseId === null && exercises.length > 0) {
      setCurrentExerciseId(exercises[0].id);
      const exercise = exercises.find(e => e.id === currentExerciseId);
      setUserCode(exercise ? exercise.starterCode : '');
    }
  }, [currentExerciseId, exercises]);

  const currentExercise = exercises.find(ex => ex.id === currentExerciseId);

  const handleExerciseChange = (e) => {
    setCurrentExerciseId(parseInt(e.target.value));
    const exercise = exercises.find(e => e.id === currentExerciseId);
    setUserCode(exercise ? exercise.starterCode : '');
    setOutput('');
    setTestResults([]);
    setIsRunning(false);
  };

  const handleCodeChange = (e) => {
    setUserCode(e.target.value);
    setOutput('');
    setTestResults([]);
    setIsRunning(false);
  };

  const runTests = () => {
    if (!currentExercise) return;

    setIsRunning(true);
    setOutput('Running tests...');

    // Simulate test running (in a real app, this would compile and run the code)
    setTimeout(() => {
      const results = currentExercise.testCases.map((testCase, index) => {
        // Simple mock evaluation - in reality, you'd compile and run the user's code
        const passed = Math.random() > 0.3; // 70% pass rate for demo
        return {
          testCaseIndex: index,
          input: testCase.input,
          expected: testCase.expected,
          actual: passed ? testCase.expected : "Wrong Answer",
          passed: passed,
          error: passed ? null : "Output does not match expected result"
        };
      });

      setTestResults(results);
      setIsRunning(false);

      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        setOutput('All tests passed! 🎉');
      } else {
        setOutput(`${results.filter(r => r.passed).length}/${results.length} tests passed. Keep trying!`);
      }
    }, 2000);
  };

  const resetExercise = () => {
    setUserCode(currentExercise ? currentExercise.starterCode : '');
    setOutput('');
    setTestResults([]);
    setIsRunning(false);
  };

  if (!currentExercise) {
    return <div className="p-6">Loading exercises...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Practice Problems</h1>
        <div className="flex space-x-3">
          <button
            onClick={resetExercise}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg"
          >
            Reset Code
          </button>
          <button
            onClick={runTests}
            disabled={isRunning}
            className={`px-4 py-2 bg-${isRunning ? 'gray-500' : 'indigo-600'} hover:bg-${isRunning ? 'gray-600' : 'indigo-700'} text-white font-medium rounded-lg ${isRunning ? 'cursor-not-allowed' : ''}`}
          >
            {isRunning ? 'Running...' : 'Run Tests'}
          </button>
        </div>
      </div>

      {/* Exercise Selector */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Exercise</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <select
            value={currentExerciseId}
            onChange={handleExerciseChange}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            {exercises.map(exercise => (
              <option key={exercise.id} value={exercise.id}>
                [{exercise.id}] {exercise.title} ({exercise.difficulty})
              </option>
            ))}
          </select>

          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <span className="text-sm text-gray-600">Difficulty:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              currentExercise.difficulty === 'Easy'
                ? 'bg-green-100 text-green-800'
                : currentExercise.difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {currentExercise.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Exercise Details */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{currentExercise.title}</h2>
          <p className="text-gray-700">{currentExercise.description}</p>

          <div className="flex items-center space-x-4 pt-3 border-t">
            <span className="text-sm text-gray-500">Type:</span>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-800 text-xs rounded-full">{currentExercise.type}</span>
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Code Editor</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">Language:</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-800 text-xs rounded-full">C</span>
            </div>
            <div className="text-sm text-gray-500">
              Line 1 • Col 1
            </div>
          </div>

          <textarea
            value={userCode}
            onChange={handleCodeChange}
            className="w-full h-96 font-mono text-sm bg-gray-50 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            placeholder="// Write your C code here..."
          />
        </div>
      </div>

      {/* Test Results */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Test Results</h2>

        {isRunning ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="mt-4 text-gray-600">Running tests...</p>
          </div>
        ) : (
          <>
            <div className="mb-4 p-3 rounded-lg bg-gray-50 text-center font-medium">
              {output}
            </div>

            {testResults.length > 0 && (
              <div className="space-y-3">
                {testResults.map((result, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    result.passed ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-lg font-medium ${
                          result.passed ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {result.passed ? '✓' : '✗'}
                        </span>
                        <span>Test Case {result.testCaseIndex + 1}</span>
                      </div>
                      <span className={`text-xs ${
                        result.passed ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {result.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600">
                      <div className="flex space-x-2 mb-1">
                        <span className="font-medium">Input:</span>
                        <span className="font-mono">{result.input}</span>
                      </div>
                      <div className="flex space-x-2 mb-1">
                        <span className="font-medium">Expected:</span>
                        <span className="font-mono">{result.expected}</span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="font-medium">Actual:</span>
                        <span className="font-mono text-${
                          result.passed ? 'green-600' : 'red-600'
                        }">{result.actual}</span>
                      </div>

                      {!result.passed && result.error && (
                        <div className="mt-2 text-xs text-red-600">
                          Error: {result.error}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Hints and Solutions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h2>
        <div className="space-y-4">
          <button
            onClick={() => alert('Hint: Use nested loops to compare each element with every other element')}
            className="w-full text-left px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-medium rounded-lg"
          >
            Get Hint
          </button>

          <button
            onClick={() =>
              alert(`Solution for ${currentExercise.title}:\n\n${currentExercise.id === 1 ?
                'int findDuplicates(int arr[], int n) {\n    printf("Duplicates: ");\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            if (arr[i] == arr[j]) {\n                printf("%d ", arr[i]);\n                break;\n            }\n        }\n    }\n    printf("\\n");\n}' :
                currentExercise.id === 2 ?
                'void reversePrint(int arr[], int n) {\n    printf("Reversed: ");\n    for (int i = n - 1; i >= 0; i--) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}' :
                currentExercise.id === 3 ?
                'int findLargest(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    return max;\n}' :
                currentExercise.id === 4 ?
                'void findPrimesUpToMax(int arr[], int n) {\n    int max = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n    }\n    printf("Primes up to %d: ", max);\n    for (int i = 2; i <= max; i++) {\n        int isPrime = 1;\n        for (int j = 2; j * j <= i; j++) {\n            if (i % j == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n        if (isPrime) printf("%d ", i);\n    }\n    printf("\\n");\n}' :
                'int isSorted(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        if (arr[i] > arr[i + 1]) {\n            return 0;\n        }\n    }\n    return 1;\n}'}`)}
            className="w-full text-left px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-medium rounded-lg"
          >
            Show Solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;