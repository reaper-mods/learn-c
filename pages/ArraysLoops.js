import React, { useState } from 'react';

const ArraysLoops = () => {
  const [arrayData, setArrayData] = useState([5, 2, 8, 1, 9, 3]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loopType, setLoopType] = useState('for');
  const [visualizationSpeed, setVisualizationSpeed] = useState(1000);

  // Array visualization data
  const arrayElements = arrayData.map((value, index) => ({
    value,
    index,
    isCurrent: index === currentIndex,
    isAccessed: index <= currentIndex && currentIndex !== -1
  }));

  // Handle array modification
  const handleArrayChange = (e) => {
    const values = e.target.value
      .split(',')
      .map(v => parseInt(v.trim()))
      .filter(v => !isNaN(v));
    if (values.length > 0) {
      setArrayData(values);
      setCurrentIndex(-1);
      setIsPlaying(false);
    }
  };

  // Reset visualization
  const resetVisualization = () => {
    setCurrentIndex(-1);
    setIsPlaying(false);
  };

  // Start/stop visualization
  const toggleVisualization = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentIndex === arrayData.length - 1) {
      setCurrentIndex(-1);
    }
  };

  // Change loop type
  const handleLoopTypeChange = (e) => {
    setLoopType(e.target.value);
    resetVisualization();
  };

  // Change speed
  const handleSpeedChange = (e) => {
    setVisualizationSpeed(parseInt(e.target.value));
  };

  // Simulate different loop types
  const simulateLoop = () => {
    if (isPlaying) {
      if (currentIndex < arrayData.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }
  };

  // Set up interval for visualization
  React.useEffect(() => {
    let intervalId = null;
    if (isPlaying) {
      intervalId = setInterval(simulateLoop, visualizationSpeed);
    } else if (!isPlaying && intervalId !== null) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, visualizationSpeed]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Arrays and Loops Visualizer</h1>
        <a href="/practice" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
          Go to Practice
        </a>
      </div>

      {/* Array Input */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Array Setup</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Enter comma-separated values to create an array for visualization.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <input
              type="text"
              value={arrayData.join(', ')}
              onChange={handleArrayChange}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter numbers like: 5, 2, 8, 1, 9, 3"
            />
            <button
              onClick={() => {
                setArrayData([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
                resetVisualization();
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg"
            >
              Random Array
            </button>
          </div>
        </div>
      </div>

      {/* Array Visualization */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Array Memory Visualization</h2>
        <div className="space-y-4">
          <p className="text-gray-700 mb-2">
            See how arrays store elements in contiguous memory locations.
          </p>

          {/* Array Legend */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 bg-indigo-500"></div>
              <span>Current Element</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 bg-indigo-200"></div>
              <span>Accessed Elements</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-4 h-4 bg-gray-200"></div>
              <span>Unaccessed Elements</span>
            </div>
          </div>

          {/* Array Blocks */}
          <div className="flex overflow-x-auto space-x-2">
            {arrayElements.map((element, index) => (
              <div
                key={index}
                className={`flex items-end space-x-1 transition-all duration-500 ${
                  element.isCurrent
                    ? 'transform scale-110'
                    : ''
                }`}
              >
                <div className={`relative w-10 h-24 bg-gray-200 ${
                  element.isCurrent
                    ? 'bg-indigo-500'
                    : element.isAccessed
                    ? 'bg-indigo-200'
                    : 'bg-gray-300'
                } rounded-md`}>
                  <div className={`absolute bottom-0 left-0 right-0 bg-black/20 text-white text-xs text-center font-mono ${
                    element.isCurrent ? 'animate-pulse' : ''
                  }`}>
                    {element.value}
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">
                  a[{index}]
                </div>
              </div>
            ))}
          </div>

          {/* Memory Address Visualization */}
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Memory Representation:</p>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
              Base Address: 0x1000<br />
              {arrayElements.map((elem, index) => {
                const address = 0x1000 + (index * 4); // Assuming 4 bytes per int
                return (
                  <div key={index} className={`flex items-center ${
                    elem.isCurrent
                      ? 'bg-indigo-50'
                      : ''
                  } px-2 py-1`}>
                  <span className="w-16">0x{address.toString(16).toUpperCase()}</span>
                  <span className="flex-1 text-sm">{elem.value}</span>
                  <span className="w-16">{elem.isCurrent ? '← Current' : ''}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Loop Visualization */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Loop Visualization</h2>
        <div className="space-y-4">
          <p className="text-gray-700 mb-2">
            See how different loop types iterate through array elements.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-700">Loop Type:</label>
              <select
                value={loopType}
                onChange={handleLoopTypeChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="for">For Loop</option>
                <option value="while">While Loop</option>
                <option value="doWhile">Do-While Loop</option>
                <option value="forEach">For-Each Style</option>
                <option value="reverse">Reverse Loop</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium text-gray-700">Speed:</label>
              <select
                value={visualizationSpeed}
                onChange={handleSpeedChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="200">Fast (200ms)</option>
                <option value="500">Medium (500ms)</option>
                <option value="1000">Slow (1000ms)</option>
                <option value="2000">Very Slow (2000ms)</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleVisualization}
                className={`px-4 py-2 bg-${isPlaying ? 'red-600' : 'indigo-600'} hover:bg-${isPlaying ? 'red-700' : 'indigo-700'} text-white font-medium rounded-lg transition-colors`}
              >
                {isPlaying ? 'Pause' : 'Start Visualization'}
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={resetVisualization}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Code Display */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Code Example:</h3>
            <div className="font-mono text-sm bg-white p-3 rounded-lg overflow-x-auto">
              {/* Generate code based on loop type */}
              {loopType === 'for' && (
                <code>
                  for (int i = 0; i &lt; n; i++) {<br />
                  &nbsp;&nbsp;// Access array[i]<br />
                  &nbsp;&nbsp;printf("%d ", array[i]);<br />
                  }
                </code>
              )}
              {loopType === 'while' && (
                <code>
                  int i = 0;<br />
                  while (i &lt; n) {<br />
                  &nbsp;&nbsp;// Access array[i]<br />
                  &nbsp;&nbsp;printf("%d ", array[i]);<br />
                  &nbsp;&nbsp;i++;<br />
                  }
                </code>
              )}
              {loopType === 'doWhile' && (
                <code>
                  int i = 0;<br />
                  do {<br />
                  &nbsp;&nbsp;// Access array[i]<br />
                  &nbsp;&nbsp;printf("%d ", array[i]);<br />
                  &nbsp;&nbsp;i++;<br />
                  } while (i &lt; n);
                </code>
              )}
              {loopType === 'forEach' && (
                <code>
                  for (int i = 0; i &lt; n; i++) {<br />
                  &nbsp;&nbsp;int element = array[i];<br />
                  &nbsp;&nbsp;// Process element<br />
                  &nbsp;&nbsp;printf("%d ", element);<br />
                  }
                </code>
              )}
              {loopType === 'reverse' && (
                <code>
                  for (int i = n - 1; i &gt;= 0; i--) {<br />
                  &nbsp;&nbsp;// Access array[i]<br />
                  &nbsp;&nbsp;printf("%d ", array[i]);<br />
                  }
                </code>
              )}
            </div>
          </div>

          {/* Loop Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-700">Status:</span>
              <span className={`font-mono text-lg ${
                isPlaying
                  ? currentIndex < arrayData.length - 1
                    ? 'text-indigo-600 animate-pulse'
                    : 'text-green-600'
                  : currentIndex === -1
                  ? 'text-gray-500'
                  : 'text-blue-600'
              }`}>
                {isPlaying
                  ? currentIndex < arrayData.length - 1
                    ? `Processing index ${currentIndex}`
                    : 'Visualization Complete!'
                  : currentIndex === -1
                  ? 'Ready to start'
                  : `Completed: Processed ${currentIndex + 1} elements`}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span>Current Index: {currentIndex}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span>Array Length: {arrayData.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-200 rounded-full"></span>
                <span>Accessed: {currentIndex >= 0 ? currentIndex + 1 : 0}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Array Operations */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Array Operations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Find Max */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Find Maximum Element</h3>
            <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
              int max = arr[0];<br />
              for (int i = 1; i &lt; n; i++) {<br />
              &nbsp;&nbsp;if (arr[i] &gt; max) {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;max = arr[i];<br />
              &nbsp;&nbsp;}<br />
              }<br />
              printf("Max: %d", max);
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Time Complexity: O(n)<br />
              Space Complexity: O(1)
            </p>
          </div>

          {/* Find Duplicates */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Find Duplicate Elements</h3>
            <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
              for (int i = 0; i &lt; n; i++) {<br />
              &nbsp;&nbsp;for (int j = i + 1; j &lt; n; j++) {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (arr[i] == arr[j]) {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("Duplicate: %d ", arr[i]);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;}<br />
              &nbsp;&nbsp;}<br />
              }
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Time Complexity: O(n²)<br />
              Space Complexity: O(1)
            </p>
          </div>

          {/* Reverse Array */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Reverse Array</h3>
            <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
              for (int i = 0; i &lt; n / 2; i++) {<br />
              &nbsp;&nbsp;int temp = arr[i];<br />
              &nbsp;&nbsp;arr[i] = arr[n - 1 - i];<br />
              &nbsp;&nbsp;arr[n - 1 - i] = temp;<br />
              }
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Time Complexity: O(n)<br />
              Space Complexity: O(1)<br />
              (In-place reversal)
            </p>
          </div>

          {/* Sum of Elements */}
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Sum of Array Elements</h3>
            <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
              int sum = 0;<br />
              for (int i = 0; i &lt; n; i++) {<br />
              &nbsp;&nbsp;sum += arr[i];<br />
              }<br />
              printf("Sum: %d", sum);
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Time Complexity: O(n)<br />
              Space Complexity: O(1)
            </p>
          </div>
        </div>
      </div>

      {/* Array Properties */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Important Array Properties</h2>
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800">Contiguous Memory</h3>
              <p className="text-sm text-gray-600">
                Array elements are stored in adjacent memory locations,
                allowing efficient index-based access.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800">Zero-Based Indexing</h3>
              <p className="text-sm text-gray-600">
                First element is at index 0, last element at index n-1.
                Accessing arr[n] leads to undefined behavior.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800">Fixed Size</h3>
              <p className="text-sm text-gray-600">
                Array size is fixed at compile time (unless using dynamic allocation).
                Cannot resize after creation.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800">Element Access</h3>
              <p className="text-sm text-gray-600">
                Access time is O(1) - constant time regardless of array size.
                Direct memory calculation: base_address + (index × element_size)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArraysLoops;