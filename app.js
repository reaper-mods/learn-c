const concepts = [
  {
    title: "What does main() do?",
    body: "main() is the starting point of a C program. When you run the program, execution begins inside main. Returning 0 usually means the program ended successfully.",
    bullets: ["Syntax: int main()", "Statements run from top to bottom", "return 0 sends success to the operating system"]
  },
  {
    title: "What is stdio.h?",
    body: "stdio.h is a header file. It gives declarations for input and output functions like printf and scanf.",
    bullets: ["#include <stdio.h>", "printf prints output", "scanf reads input"]
  },
  {
    title: "Is C platform dependent?",
    body: "C source code is mostly portable, but the compiled executable is platform dependent. A Windows .exe will not directly run on Linux.",
    bullets: ["Source code can be recompiled", "Compiled machine code depends on OS and CPU", "Compiler converts C into machine code"]
  },
  {
    title: "Variables and data types",
    body: "A variable is a named memory location. A data type tells C what kind of value is stored and how much memory may be needed.",
    bullets: ["int for whole numbers", "float for decimal values", "char for single characters"]
  },
  {
    title: "Arrays",
    body: "An array stores multiple values of the same type in continuous memory. Index starts from 0, so a[0] is the first element.",
    bullets: ["int a[5] stores 5 integers", "Last index is size - 1", "Use loops to visit each element"]
  },
  {
    title: "for loop",
    body: "A for loop is best when you know how many times to repeat. It has initialization, condition, and update in one line.",
    bullets: ["for (int i = 0; i < n; i++)", "Check condition before each repeat", "Commonly used with arrays"]
  },
  {
    title: "while vs do while",
    body: "while checks the condition first. do while runs the body once and checks the condition after that.",
    bullets: ["while may run zero times", "do while runs at least once", "Use do while for menu-style repetition"]
  },
  {
    title: "if else vs switch",
    body: "if else is flexible and can check ranges or complex conditions. switch is clean when comparing one value with fixed cases.",
    bullets: ["if (mark >= 25)", "switch(choice)", "switch usually uses break after each case"]
  },
  {
    title: "break and continue",
    body: "break stops the loop immediately. continue skips the rest of the current loop round and moves to the next round.",
    bullets: ["break exits", "continue skips", "Both are common inside conditions"]
  },
  {
    title: "Escape sequences",
    body: "Escape sequences are special characters written with backslash inside strings.",
    bullets: ["\\n means new line", "\\t means tab space", "\\\\ prints a backslash"]
  },
  {
    title: "Argument vs parameter",
    body: "A parameter is the variable in the function definition. An argument is the actual value passed when calling the function.",
    bullets: ["void show(int x) has parameter x", "show(10) passes argument 10", "Arguments fill parameters"]
  },
  {
    title: "Exam mindset",
    body: "For array questions, first write input, then loop, then condition, then output. Do not try to solve everything in your head at once.",
    bullets: ["Draw indexes 0 to n-1", "Trace with small values", "Print only after logic is clear"]
  }
];

const questions = [
  {
    id: "reverse",
    title: "Reverse print an array",
    level: "basic",
    prompt: "Read n values and print them from last index to first index.",
    idea: "The last valid index is n - 1. Start there and decrease i until 0.",
    code: `#include <stdio.h>
int main() {
  int n, a[100];
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", &a[i]);
  for (int i = n - 1; i >= 0; i--) printf("%d ", a[i]);
  return 0;
}`
  },
  {
    id: "largest",
    title: "Find largest element",
    level: "basic",
    prompt: "Find the biggest number in an array.",
    idea: "Assume a[0] is largest. Compare every other element with it.",
    code: `#include <stdio.h>
int main() {
  int n, a[100], largest;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", &a[i]);
  largest = a[0];
  for (int i = 1; i < n; i++) {
    if (a[i] > largest) largest = a[i];
  }
  printf("%d", largest);
  return 0;
}`
  },
  {
    id: "duplicate",
    title: "Print duplicate values",
    level: "exam",
    prompt: "Print values that appear more than once in an array.",
    idea: "Compare each element with elements after it. Use a small flag to avoid printing the same duplicate repeatedly.",
    code: `#include <stdio.h>
int main() {
  int n, a[100];
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", &a[i]);

  for (int i = 0; i < n; i++) {
    int alreadyPrinted = 0;
    for (int k = 0; k < i; k++) {
      if (a[k] == a[i]) alreadyPrinted = 1;
    }
    if (alreadyPrinted) continue;

    for (int j = i + 1; j < n; j++) {
      if (a[i] == a[j]) {
        printf("%d ", a[i]);
        break;
      }
    }
  }
  return 0;
}`
  },
  {
    id: "prime-largest",
    title: "Prime numbers till largest",
    level: "pap",
    prompt: "Find the largest element in the array and print all prime numbers up to that largest value.",
    idea: "First solve largest. Then for each number from 2 to largest, check if it has a divisor.",
    code: `#include <stdio.h>
int main() {
  int n, a[100], largest;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", &a[i]);

  largest = a[0];
  for (int i = 1; i < n; i++) {
    if (a[i] > largest) largest = a[i];
  }

  for (int num = 2; num <= largest; num++) {
    int isPrime = 1;
    for (int d = 2; d * d <= num; d++) {
      if (num % d == 0) {
        isPrime = 0;
        break;
      }
    }
    if (isPrime) printf("%d ", num);
  }
  return 0;
}`
  },
  {
    id: "sum",
    title: "Sum of array elements",
    level: "basic",
    prompt: "Read n values and print their total.",
    idea: "Start sum at 0. Add every element while looping.",
    code: `#include <stdio.h>
int main() {
  int n, a[100], sum = 0;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &a[i]);
    sum += a[i];
  }
  printf("%d", sum);
  return 0;
}`
  },
  {
    id: "even-odd",
    title: "Count even and odd",
    level: "exam",
    prompt: "Count how many even and odd numbers are present in an array.",
    idea: "A number is even when num % 2 == 0.",
    code: `#include <stdio.h>
int main() {
  int n, a[100], even = 0, odd = 0;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &a[i]);
    if (a[i] % 2 == 0) even++;
    else odd++;
  }
  printf("Even=%d Odd=%d", even, odd);
  return 0;
}`
  },
  {
    id: "search",
    title: "Search an element",
    level: "exam",
    prompt: "Check whether a given key exists in an array.",
    idea: "Use a found flag. If any element equals key, set found to 1.",
    code: `#include <stdio.h>
int main() {
  int n, a[100], key, found = 0;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", &a[i]);
  scanf("%d", &key);

  for (int i = 0; i < n; i++) {
    if (a[i] == key) {
      found = 1;
      break;
    }
  }
  if (found) printf("Found");
  else printf("Not found");
  return 0;
}`
  },
  {
    id: "second-largest",
    title: "Second largest element",
    level: "pap",
    prompt: "Find the second largest distinct value in an array.",
    idea: "Track largest and second largest separately.",
    code: `#include <stdio.h>
#include <limits.h>
int main() {
  int n, a[100], largest = INT_MIN, second = INT_MIN;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &a[i]);
    if (a[i] > largest) {
      second = largest;
      largest = a[i];
    } else if (a[i] > second && a[i] != largest) {
      second = a[i];
    }
  }
  printf("%d", second);
  return 0;
}`
  }
];

const quizBank = [
  { q: "Which function is the entry point of a C program?", a: "main()", options: ["main()", "printf()", "scanf()"] },
  { q: "What does stdio.h provide?", a: "Input/output function declarations", options: ["Input/output function declarations", "Array memory", "The compiler"] },
  { q: "What is the first index of an array?", a: "0", options: ["0", "1", "n"] },
  { q: "Which loop is best when the number of repetitions is known?", a: "for loop", options: ["for loop", "goto", "switch"] },
  { q: "Which statement exits a loop immediately?", a: "break", options: ["break", "continue", "case"] },
  { q: "Which statement skips to the next loop iteration?", a: "continue", options: ["continue", "break", "return 0"] },
  { q: "What is \\n?", a: "New line escape sequence", options: ["New line escape sequence", "Integer data type", "Array index"] },
  { q: "while and do while differ because:", a: "do while runs at least once", options: ["do while runs at least once", "while has no condition", "while is only for arrays"] },
  { q: "In show(10), 10 is called:", a: "Argument", options: ["Argument", "Parameter", "Header"] },
  { q: "A compiled C executable is:", a: "Platform dependent", options: ["Platform dependent", "Always platform independent", "A header file"] }
];

const plan = [
  { id: "p1", title: "Hour 1: write loop templates", body: "Write forward loop, reverse loop, and nested loop five times each without looking." },
  { id: "p2", title: "Hour 2: arrays only", body: "Practice reverse, sum, largest, search, even/odd. Trace index values on paper." },
  { id: "p3", title: "Hour 3: duplicate logic", body: "Understand i, j, and k loops. First detect duplicates, then avoid repeated printing." },
  { id: "p4", title: "Hour 4: prime logic", body: "Practice isPrime using divisors from 2 while d * d <= number." },
  { id: "p5", title: "Hour 5: theory answers", body: "Say each answer aloud in simple English. Keep answers short and clear." },
  { id: "p6", title: "Exam rule", body: "When tension comes, write input first, then one loop, then the condition. Small steps bring memory back." }
];

const state = {
  progress: JSON.parse(localStorage.getItem("cSprintProgress") || '{"solved":[],"quizBest":0,"checks":[]}' ),
  loopIndex: 0,
  playing: null
};

function save() {
  localStorage.setItem("cSprintProgress", JSON.stringify(state.progress));
  renderStats();
}

function renderStats() {
  document.querySelector("#solvedCount").textContent = state.progress.solved.length;
  document.querySelector("#quizBest").textContent = `${state.progress.quizBest}%`;
  document.querySelector("#streakCount").textContent = state.progress.checks.length;
}

function renderConcepts() {
  document.querySelector("#conceptGrid").innerHTML = concepts.map((item) => `
    <article class="concept-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <ul>${item.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderQuestions() {
  const term = document.querySelector("#searchBox").value.toLowerCase();
  const level = document.querySelector("#difficultyFilter").value;
  const filtered = questions.filter((q) => {
    const text = `${q.title} ${q.prompt} ${q.level}`.toLowerCase();
    return text.includes(term) && (level === "all" || q.level === level);
  });

  document.querySelector("#questionGrid").innerHTML = filtered.map((q) => {
    const done = state.progress.solved.includes(q.id);
    return `
      <article class="question-card ${done ? "done" : ""}">
        <div>
          <h3>${q.title}</h3>
          <div class="tag-row">
            <span class="tag">${q.level}</span>
            <span class="tag">array</span>
          </div>
          <p>${q.prompt}</p>
          <p><strong>Thinking:</strong> ${q.idea}</p>
        </div>
        <button class="button ghost" data-solution="${q.id}">Show solution</button>
        <button class="button primary" data-done="${q.id}">${done ? "Solved" : "Mark solved"}</button>
        <div class="solution" id="solution-${q.id}">
          <pre>${escapeHtml(q.code)}</pre>
        </div>
      </article>
    `;
  }).join("");
}

function renderPlan() {
  document.querySelector("#planGrid").innerHTML = plan.map((item) => {
    const done = state.progress.checks.includes(item.id);
    return `
      <article class="plan-card ${done ? "done" : ""}">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <button class="button ${done ? "ghost" : "primary"}" data-check="${item.id}">
          ${done ? "Done" : "Mark done"}
        </button>
      </article>
    `;
  }).join("");
}

function getArrayValues() {
  return document.querySelector("#arrayInput").value
    .split(",")
    .map((v) => Number(v.trim()))
    .filter((v) => Number.isFinite(v))
    .slice(0, 10);
}

function renderArray(active = -1, matches = []) {
  const values = getArrayValues();
  document.querySelector("#arrayRow").innerHTML = values.map((value, index) => `
    <div class="cell ${index === active ? "active" : ""} ${matches.includes(index) ? "match" : ""}" data-index="${index}">
      ${value}
    </div>
  `).join("");
}

function codeForMode(mode, n) {
  const snippets = {
    forward: `for (int i = 0; i < ${n}; i++) {\n  printf("%d ", a[i]);\n}`,
    reverse: `for (int i = ${n - 1}; i >= 0; i--) {\n  printf("%d ", a[i]);\n}`,
    largest: `largest = a[0];\nfor (int i = 1; i < ${n}; i++) {\n  if (a[i] > largest) largest = a[i];\n}`,
    duplicate: `for (int i = 0; i < ${n}; i++) {\n  for (int j = i + 1; j < ${n}; j++) {\n    if (a[i] == a[j]) printf("%d ", a[i]);\n  }\n}`
  };
  return snippets[mode];
}

function stepLoop() {
  const values = getArrayValues();
  const mode = document.querySelector("#loopMode").value;
  if (!values.length) return;

  let active = state.loopIndex % values.length;
  let message = "";
  let matches = [];

  if (mode === "reverse") {
    active = values.length - 1 - (state.loopIndex % values.length);
    message = `i = ${active}. Print a[${active}] which is ${values[active]}. Then i-- moves left.`;
  } else if (mode === "largest") {
    const seen = values.slice(0, active + 1);
    const largest = Math.max(...seen);
    matches = values.map((v, i) => i <= active && v === largest ? i : -1).filter((i) => i >= 0);
    message = `Checking index ${active}. Largest seen so far is ${largest}.`;
  } else if (mode === "duplicate") {
    const current = values[active];
    matches = values.map((v, i) => v === current ? i : -1).filter((i) => i >= 0);
    message = matches.length > 1
      ? `${current} appears again. Duplicate found by comparing indexes.`
      : `${current} has no match yet. Keep comparing with later indexes.`;
  } else {
    message = `i = ${active}. Print a[${active}] which is ${values[active]}. Then i++ moves right.`;
  }

  renderArray(active, matches);
  document.querySelector("#loopStatus").textContent = message;
  document.querySelector("#loopCode").textContent = codeForMode(mode, values.length);
  state.loopIndex++;
}

function resetLoop() {
  state.loopIndex = 0;
  renderArray();
  const values = getArrayValues();
  const mode = document.querySelector("#loopMode").value;
  document.querySelector("#loopStatus").textContent = "Press Step to watch the loop visit array indexes.";
  document.querySelector("#loopCode").textContent = codeForMode(mode, values.length || 0);
}

function newQuiz() {
  const selected = [...quizBank].sort(() => Math.random() - 0.5).slice(0, 5);
  document.querySelector("#quizQuestions").innerHTML = selected.map((item, index) => `
    <article class="quiz-card" data-answer="${escapeHtml(item.a)}">
      <h3>${index + 1}. ${item.q}</h3>
      ${item.options.sort(() => Math.random() - 0.5).map((option) => `
        <label>
          <input type="radio" name="q${index}" value="${escapeHtml(option)}" />
          ${option}
        </label>
      `).join("")}
    </article>
  `).join("");
  document.querySelector("#quizResult").textContent = "";
}

function submitQuiz() {
  const cards = [...document.querySelectorAll(".quiz-card")];
  let correct = 0;
  cards.forEach((card, index) => {
    const chosen = card.querySelector(`input[name="q${index}"]:checked`);
    if (chosen && chosen.value === card.dataset.answer) correct++;
  });
  const score = Math.round((correct / cards.length) * 100);
  state.progress.quizBest = Math.max(state.progress.quizBest, score);
  save();
  document.querySelector("#quizResult").textContent = `Score: ${correct}/${cards.length} (${score}%). Best: ${state.progress.quizBest}%.`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

document.addEventListener("click", (event) => {
  const solutionId = event.target.dataset.solution;
  const doneId = event.target.dataset.done;
  const checkId = event.target.dataset.check;

  if (solutionId) {
    document.querySelector(`#solution-${solutionId}`).classList.toggle("open");
  }

  if (doneId && !state.progress.solved.includes(doneId)) {
    state.progress.solved.push(doneId);
    save();
    renderQuestions();
  }

  if (checkId && !state.progress.checks.includes(checkId)) {
    state.progress.checks.push(checkId);
    save();
    renderPlan();
  }
});

document.querySelector("#searchBox").addEventListener("input", renderQuestions);
document.querySelector("#difficultyFilter").addEventListener("change", renderQuestions);
document.querySelector("#arrayInput").addEventListener("input", resetLoop);
document.querySelector("#loopMode").addEventListener("change", resetLoop);
document.querySelector("#stepLoop").addEventListener("click", stepLoop);
document.querySelector("#resetLoop").addEventListener("click", resetLoop);
document.querySelector("#playLoop").addEventListener("click", () => {
  if (state.playing) {
    clearInterval(state.playing);
    state.playing = null;
    document.querySelector("#playLoop").textContent = "Auto run";
    return;
  }
  document.querySelector("#playLoop").textContent = "Pause";
  state.playing = setInterval(stepLoop, 900);
});
document.querySelector("#newQuiz").addEventListener("click", newQuiz);
document.querySelector("#submitQuiz").addEventListener("click", submitQuiz);
document.querySelector("#resetProgress").addEventListener("click", () => {
  state.progress = { solved: [], quizBest: 0, checks: [] };
  save();
  renderQuestions();
  renderPlan();
});

renderConcepts();
renderQuestions();
renderPlan();
renderStats();
resetLoop();
newQuiz();
