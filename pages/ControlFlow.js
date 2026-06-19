import React from 'react';

const ControlFlow = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Control Flow Statements</h1>
        <a href="/basics" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
          ← Back to Basics
        </a>
      </div>

      {/* Break and Continue */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Break and Continue Statements</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Break and continue are jump statements used to alter the normal flow of loops.
          </p>

          <div className="grid gap-4">
            {/* Break */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2">Break Statement</h3>
              <p className="text-sm text-gray-600">
                Terminates the loop immediately and transfers control to the statement
                immediately following the loop.
              </p>
              <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                for (int i = 1; i &lt;= 10; i++) {<br />
                &nbsp;&nbsp;if (i == 5) {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;break; // Exit loop when i equals 5<br />
                &nbsp;&nbsp;}<br />
                &nbsp;&nbsp;printf("%d ", i);<br />
                }<br />
                // Output: 1 2 3 4
              </div>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Use Case:</strong> Early exit when a condition is met (searching, validation)
              </p>
            </div>

            {/* Continue */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2">Continue Statement</h3>
              <p className="text-sm text-gray-600">
                Skips the remaining code in the current iteration and moves to the next iteration.
              </p>
              <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                for (int i = 1; i &lt;= 10; i++) {<br />
                &nbsp;&nbsp;if (i % 2 == 0) {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;continue; // Skip even numbers<br />
                &nbsp;&nbsp;}<br />
                &nbsp;&nbsp;printf("%d ", i);<br />
                }<br />
                // Output: 1 3 5 7 9
              </div>
              <p className="mt-2 text-sm text-gray-500">
                <strong>Use Case:</strong> Skip certain iterations (filtering data)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nested Loops */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Nested Loops</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            A loop inside another loop. The inner loop executes completely for each iteration
            of the outer loop.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <code className="text-indigo-800 font-mono text-sm">
              // Print a 3x3 grid<br />
              for (int i = 0; i &lt; 3; i++) {<br />
              &nbsp;&nbsp;for (int j = 0; j &lt; 3; j++) {<br />
              &nbsp;&nbsp;&nbsp;&nbsp;printf("(%d,%d) ", i, j);<br />
              &nbsp;&nbsp;}<br />
              &nbsp;&nbsp;printf("\\n"); // New line after each row<br />
              }<br />
              // Output:<br />
              // (0,0) (0,1) (0,2)<br />
              // (1,0) (1,1) (1,2)<br />
              // (2,0) (2,1) (2,2)
            </code>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-700">
              Common Applications:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
              <li>Multi-dimensional array traversal</li>
              <li>Matrix operations</li>
              <li>Printing patterns (triangles, pyramids)</li>
              <li>Grid-based games</li>
            </ul>
          </div>
        </div>
      </

      {/* Infinite Loops */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Infinite Loops</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Loops that run indefinitely until interrupted by a break statement or
            external intervention (like Ctrl+C).
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <code className="text-indigo-800 font-mono text-sm">
              // Method 1: while(1)<br />
              while (1) {<br />
              &nbsp;&nbsp;printf("Running forever...\\n");<br />
              &nbsp;&nbsp;sleep(1); // Wait 1 second<br />
              }<br /><br />
              // Method 2: for(;;)<br />
              for (;;) {<br />
              &nbsp;&nbsp;printf("Also infinite...\\n");<br />
              &nbsp;&nbsp;sleep(1);<br />
              }<br /><br />
              // Method 3: with break condition<br />
              int count = 0;<br />
              while (1) {<br />
              &nbsp;&nbsp;printf("Count: %d\\n", count);<br />
              &nbsp;&nbsp;count++;<br />
              &nbsp;&nbsp;if (count >= 5) break; // Exit after 5 iterations<br />
              }
            </code>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-700">
              Use Cases:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
              <li>Event-driven programs (waiting for user input)</li>
              <li>Servers waiting for client connections</li>
              <li>Games main loop</li>
              <li>Embedded systems monitoring sensors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlFlow;