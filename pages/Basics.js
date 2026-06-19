import React from 'react';

const Basics = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">C Programming Basics</h1>
        <a href="/practice" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
          Go to Practice
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Main Function */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">1. What does the main() function do in C?</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              The <code className="bg-gray-50 px-1 rounded">main()</code> function is the entry point of every C program.
              When you execute a C program, the operating system calls the main() function to start program execution.
            </p>
            <div className="bg-indigo-50 rounded-lg p-4">
              <code className="text-indigo-800 font-mono">
                #include &lt;stdio.h&gt;<br />
                int main() {<br />
                &nbsp;&nbsp;printf("Hello, World!{'\n'}");<br />
                &nbsp;&nbsp;return 0;<br />
                {'}'}
              </code>
            </div>
            <p className="text-sm text-gray-500">
              <strong>Key Points:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Must return an integer value (usually 0 for success)</li>
              <li>Can accept command-line arguments (int main(int argc, char *argv[]))</li>
              <li>Program execution starts and ends here</li>
              <li>Without main(), the program won't execute</li>
            </ul>
          </div>
        </div>

        {/* stdio.h */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">2. What is stdio.h?</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <code className="bg-gray-50 px-1 rounded">stdio.h</code> stands for Standard Input Output Header.
              It's a header file that contains declarations for input and output functions like
              <code className="bg-gray-50 px-1 rounded">printf()</code>, <code className="bg-gray-50 px-1 rounded">scanf()</code>,
              <code className="bg-gray-50 px-1 rounded">getchar()</code>, etc.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-indigo-800 font-mono">
                #include &lt;stdio.h&gt;<br /><br />
                int main() {<br />
                &nbsp;&nbsp;int num;<br />
                &nbsp;&nbsp;printf("Enter a number: ");<br />
                &nbsp;&nbsp;scanf("%d", &num);<br />
                &nbsp;&nbsp;printf("You entered: %d{'\n'}", num);<br />
                &nbsp;&nbsp;return 0;<br />
                {'}'}
              </code>
            </div>
            <p className="text-sm text-gray-500">
              <strong>Common Functions:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li><code className="bg-gray-50 px-1 rounded">printf()</code> - Output formatted text</li>
              <li><code className="bg-gray-50 px-1 rounded">scanf()</code> - Input formatted text</li>
              <li><code className="bg-gray-50 px-1 rounded">getchar()/putchar()</code> - Character I/O</li>
              <li><code className="bg-gray-50 px-1 rounded">fopen()/fclose()</code> - File operations</li>
            </ul>
          </div>
        </div>

        {/* Platform Independence */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Is C platform dependent or independent?</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              C is considered <strong>platform-dependent</strong> at the executable level but
              <strong>platform-independent</strong> at the source code level.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Source Code Level (Platform-Independent):</strong><br />
                The same C source code can be compiled on different platforms (Windows, Linux, macOS)
                without changes, as long as it follows the C standard.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Executable Level (Platform-Dependent):</strong><br />
                The compiled executable (.exe on Windows, no extension on Linux/macOS)
                is specific to the operating system and processor architecture it was compiled for.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4 mt-2">
              <p className="text-sm font-medium text-indigo-800">
                Example: A C program compiled on Windows won't run on macOS without recompiling.
              </p>
            </div>
          </div>
        </div>

        {/* Escape Sequences */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">4. What are escape sequences?</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Escape sequences are special characters in C that are preceded by a backslash (\\)
              and have special meaning. They allow you to represent characters that are difficult
              or impossible to type directly.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Escape Sequence</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Meaning</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\n</td>
                    <td className="px-4 py-2 text-sm">New Line</td>
                    <td className="px-4 py-2 text-sm">printf("Hello\\nWorld");</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\t</td>
                    <td className="px-4 py-2 text-sm">Horizontal Tab</td>
                    <td className="px-4 py-2 text-sm">printf("Name:\\tAge");</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\r</td>
                    <td className="px-4 py-2 text-sm">Carriage Return</td>
                    <td className="px-4 py-2 text-sm">Used in Windows line endings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\\\</td>
                    <td className="px-4 py-2 text-sm">Backslash</td>
                    <td className="px-4 py-2 text-sm">printf("C:\\\\Users");</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\'</td>
                    <td className="px-4 py-2 text-sm">Single Quote</td>
                    <td className="px-4 py-2 text-sm">printf(\\'It\\'s cool\\');</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\\"</td>
                    <td className="px-4 py-2 text-sm">Double Quote</td>
                    <td className="px-4 py-2 text-sm">printf(\\"He said \\"Hello\\"\\");</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-mono">\\0</td>
                    <td className="px-4 py-2 text-sm">Null Character</td>
                    <td className="px-4 py-2 text-sm">String terminator in C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* While vs Do-While */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Difference between while and do-while loops</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Both are looping constructs, but they differ in when the condition is checked.
            </p>

            <div className="grid gap-4">
              {/* While Loop */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">While Loop (Pre-test Loop)</h3>
                <p className="text-sm text-gray-600">
                  Condition is checked <strong>before</strong> each iteration.
                  If condition is false initially, loop body never executes.
                </p>
                <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                  int i = 0;<br />
                  while (i &lt; 5) {<br />
                  &nbsp;&nbsp;printf("%d ", i);<br />
                  &nbsp;&nbsp;i++;<br />
                  }<br />
                  // Output: 0 1 2 3 4
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Flow:</strong> Check Condition → Execute Body → Update → Repeat
                </p>
              </div>

              {/* Do-While Loop */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">Do-While Loop (Post-test Loop)</h3>
                <p className="text-sm text-gray-600">
                  Condition is checked <strong>after</strong> each iteration.
                  Loop body executes at least once, even if condition is false initially.
                </p>
                <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                  int i = 0;<br />
                  do {<br />
                  &nbsp;&nbsp;printf("%d ", i);<br />
                  &nbsp;&nbsp;i++;<br />
                  } while (i &lt; 5);<br />
                  // Output: 0 1 2 3 4
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Flow:</strong> Execute Body → Update → Check Condition → Repeat
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-700">
                Key Difference:
              </p>
              <p className="text-sm text-gray-600 ml-4">
                Use <strong>while</strong> when you might not need to execute the loop body at all.<br />
                Use <strong>do-while</strong> when you need to execute the loop body at least once
                (like menu-driven programs).
              </p>
            </div>
          </div>
        </div>

        {/* If-Else vs Switch */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Difference between if-else and switch</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Both are conditional statements used for decision making, but they differ in syntax,
              performance, and use cases.
            </p>

            <div className="grid gap-4">
              {/* If-Else */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">If-Else Statement</h3>
                <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                  int score = 85;<br />
                  if (score &gt;= 90) {<br />
                  &nbsp;&nbsp;printf("Grade: A");<br />
                  } else if (score &gt;= 80) {<br />
                  &nbsp;&nbsp;printf("Grade: B");<br />
                  } else if (score &gt;= 70) {<br />
                  &nbsp;&nbsp;printf("Grade: C");<br />
                  } else {<br />
                  &nbsp;&nbsp;printf("Grade: F");<br />
                  }
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Best for:</strong> Complex conditions, ranges, Boolean expressions
                </p>
              </div>

              {/* Switch */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">Switch Statement</h3>
                <div className="bg-gray-50 px-3 py-2 font-mono text-sm">
                  int day = 3;<br />
                  switch (day) {<br />
                  case 1:<br />
                  &nbsp;&nbsp;printf("Monday");<br />
                  &nbsp;&nbsp;break;<br />
                  case 2:<br />
                  &nbsp;&nbsp;printf("Tuesday");<br />
                  &nbsp;&nbsp;break;<br />
                  case 3:<br />
                  &nbsp;&nbsp;printf("Wednesday");<br />
                  &nbsp;&nbsp;break;<br />
                  default:<br />
                  &nbsp;&nbsp;printf("Invalid day");<br />
                  }
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  <strong>Best for:</strong> Multiple discrete values, menu-driven programs
                </p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-700">
                Key Differences:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-4">
                <li>Switch works with integral types (int, char, enum), if-else works with any type</li>
                <li>Switch can be faster for many discrete values (jump table)</li>
                <li>If-else is more flexible for complex conditions</li>
                <li>Switch requires break statements to prevent fall-through</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parameters vs Arguments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Difference between parameter and argument</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              These terms are often confused but have distinct meanings in function definitions and calls.
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <code className="text-indigo-800 font-mono">
                // Function definition - parameters<br />
                void printSum(int a, int b) {<br />
                &nbsp;&nbsp;printf("Sum: %d\\n", a + b);<br />
                }<br /><br />
                // Function call - arguments<br />
                int main() {<br />
                &nbsp;&nbsp;printSum(5, 3); // 5 and 3 are arguments<br />
                &nbsp;&nbsp;return 0;<br />
                }
              </code>
            </div>

            <div className="grid gap-4">
              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">Parameters</h3>
                <p className="text-sm text-gray-600">
                  Variables listed in the function definition that receive values when the function is called.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>In the example above:</strong> a and b are parameters
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-800 mb-2">Arguments</h3>
                <p className="text-sm text-gray-600">
                  Actual values passed to the function when it is invoked.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>In the example above:</strong> 5 and 3 are arguments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;