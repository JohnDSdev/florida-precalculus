window.COURSE.lessons["function-transformations"] = {
  id: "function-transformations",
  title: "Transformations and function comparisons",
  eyebrow: "Lesson 04 · Functions in different forms",
  standard: "MA.912.F.2.2 · MA.912.F.1.7",
  standardText: "Identify the effect of two or more transformations on a function's graph, and compare key features of functions represented by equations, graphs, tables or written descriptions.",
  objective: "Read a transformed function from the inside out, locate its key features, and compare those features across equations, graphs, tables and descriptions.",
  estimated: "40–50 min",
  sections: [
    {
      id: "parent-function",
      label: "01",
      title: "Start with the parent graph",
      kicker: "Find the unchanged shape",
      body: [
        "A transformation moves, flips or stretches a graph without changing the basic family it belongs to. The simplest graph in a family is called the parent function. For example, f(x) = x² is the parent quadratic. Its vertex is (0, 0), it opens upward and it is symmetric about the y-axis.",
        "Before reading any changes, name a few easy points on the parent. For y = x², use (−2, 4), (−1, 1), (0, 0), (1, 1) and (2, 4). Those anchor points make each later movement visible instead of mysterious."
      ],
      formula: "parent: f(x) = x²   transformed: g(x) = a(x − h)² + k",
      diagram: "quadratic-parent-anchor-points",
      note: "Always identify the parent family first. A transformed quadratic is still quadratic, and a transformed absolute-value graph is still V-shaped.",
      check: {
        prompt: "What is the vertex of the parent function f(x) = x²?",
        answer: "(0,0)",
        accept: ["(0,0)", "(0, 0)", "0,0", "0, 0"],
        hint: "The parent parabola reaches its lowest point where the two axes meet."
      }
    },
    {
      id: "vertical-changes",
      label: "02",
      title: "Read changes outside the function",
      kicker: "Outside changes y",
      body: [
        "A number added outside f changes every output, so the whole graph moves vertically. In g(x) = f(x) + k, a positive k moves every point up k units. A negative k moves every point down |k| units.",
        "A number multiplying outside f changes the distance of every y-value from the x-axis. In g(x) = af(x), |a| > 1 makes a vertical stretch and 0 < |a| < 1 makes a vertical compression. If a is negative, the y-values also change sign, so the graph reflects across the x-axis."
      ],
      formula: "g(x) = af(x) + k   means multiply y by a, then add k",
      diagram: "outside-vertical-shift-stretch-reflection",
      note: "Outside follows the written sign: +3 is up 3 and −3 is down 3.",
      check: {
        prompt: "Describe the changes from f(x) to g(x) = −2f(x) + 3.",
        answer: "reflect across x-axis, stretch by 2, up 3",
        accept: ["reflect across x-axis, stretch by 2, up 3", "reflection over the x-axis, vertical stretch by 2, up 3", "reflect x axis stretch 2 up 3", "reflect over x-axis; vertical stretch by 2; shift up 3"],
        hint: "Read the outside multiplication first, including its negative sign, and then read +3."
      }
    },
    {
      id: "horizontal-changes",
      label: "03",
      title: "Read changes inside the function",
      kicker: "Inside changes x",
      body: [
        "A change inside the function affects the input, so it moves or scales the graph horizontally. The direction looks opposite to the sign: g(x) = f(x − h) moves right h units, while g(x) = f(x + h) moves left h units.",
        "For g(x) = f(bx), compare an old input u with the new input x by solving bx = u. Then x = u/b, so horizontal coordinates are divided by b. If |b| > 1 the graph is horizontally compressed; if 0 < |b| < 1 it is stretched. A negative b also reflects the graph across the y-axis."
      ],
      formula: "g(x) = f(b(x − h))   means divide x-distances by |b|, then shift right h",
      diagram: "inside-horizontal-shift-and-scale",
      note: "Inside uses the opposite direction because you are changing which input produces the old output.",
      check: {
        prompt: "How does g(x) = f(x + 4) move the graph of f?",
        answer: "left 4",
        accept: ["left 4", "4 left", "left four", "shift left 4 units", "4 units left"],
        hint: "Inside movement is opposite the sign you see."
      }
    },
    {
      id: "combined-transformations",
      label: "04",
      title: "Apply several changes in order",
      kicker: "Map an old point to a new point",
      body: [
        "For g(x) = af(b(x − h)) + k, use a point (u, v) on the parent graph. To keep the same inside input, solve b(x − h) = u. This gives the new x-coordinate x = u/b + h. The outside changes give the new y-coordinate y = av + k.",
        "This point rule handles every change without guessing: (u, v) becomes (u/b + h, av + k). For g(x) = −2f(x − 3) + 1, b = 1, so the parent vertex (0, 0) becomes (3, 1). A parent point (1, 1) becomes (4, −1)."
      ],
      formula: "(u, v) → (u/b + h, av + k)",
      diagram: "combined-transformation-point-mapping",
      note: "Keep the horizontal work with x-coordinates and the vertical work with y-coordinates. Do not multiply h or k by the stretch factors.",
      check: {
        prompt: "Under g(x) = 3f(x − 2) − 4, where does the point (1, 5) on f move?",
        answer: "(3,11)",
        accept: ["(3,11)", "(3, 11)", "3,11", "3, 11"],
        hint: "Move x right 2. Multiply y by 3, then subtract 4."
      }
    },
    {
      id: "key-features",
      label: "05",
      title: "Find features in every representation",
      kicker: "Translate each form into facts",
      body: [
        "Key features include intercepts, extrema, intervals where a function increases or decreases, domain, range and end behavior. An equation may show some features immediately. For y = −2(x − 3)² + 5, vertex form shows a maximum at (3, 5), an axis of symmetry x = 3 and a downward-opening graph.",
        "On a graph, read coordinates from the axes. In a table, look for where outputs change direction, where y = 0 and how y changes as x increases. In a written description, translate phrases carefully: ‘starts at 20 and loses 3 each hour’ gives a y-intercept of 20 and a decreasing rate of −3."
      ],
      formula: "equation ⇄ graph ⇄ table ⇄ written description",
      diagram: "four-representations-key-feature-reader",
      note: "Compare the same feature with the same feature. A y-intercept should be compared with another y-intercept, not with a maximum.",
      check: {
        prompt: "For y = −(x − 6)² + 8, what is the maximum value?",
        answer: "8",
        accept: ["8", "y=8", "y = 8", "maximum is 8"],
        hint: "The negative coefficient makes the vertex the highest point. In vertex form, k is the vertex's y-value."
      }
    },
    {
      id: "compare-functions",
      label: "06",
      title: "Make a direct comparison",
      kicker: "Use one feature at a time",
      body: [
        "First decide which feature the question asks about. Then extract that feature from each representation and write both values before comparing them. Suppose A(x) = (x − 2)² − 1 and a table for B has its smallest output, −3, at x = 4. Function A has minimum −1 at x = 2; function B has minimum −3 at x = 4.",
        "Now state the comparison in a complete sentence: B has the lower minimum because −3 < −1, and B reaches its minimum two units farther right. This method works even when one function is an equation and the other is a graph, table or description."
      ],
      formula: "extract A's feature → extract B's feature → compare values and locations",
      diagram: "equation-versus-table-feature-comparison",
      note: "Include both the feature's value and where it occurs when the location matters.",
      check: {
        prompt: "A has minimum −2. B has minimum 1. Which function has the lower minimum?",
        answer: "A",
        accept: ["A", "a", "function A", "function a", "A has the lower minimum"],
        hint: "On a number line, −2 is below 1."
      }
    }
  ],
  examples: [
    {
      title: "Transform a quadratic",
      problem: "Describe and graph the key features of g(x) = −2(x − 3)² + 4 from f(x) = x².",
      steps: [
        "Recognize the parent: f(x) = x² has vertex (0, 0) and opens upward.",
        "Read x − 3 inside: shift the graph right 3 units.",
        "Read the outside factor −2: reflect across the x-axis and vertically stretch by a factor of 2.",
        "Read +4 outside: shift the graph up 4 units. The vertex is now (3, 4).",
        "Map nearby parent points: (1, 1) → (4, 2) and (−1, 1) → (2, 2). Draw a downward-opening parabola through these points. Its maximum is 4, its axis is x = 3 and its range is y ≤ 4."
      ]
    },
    {
      title: "Map a point through every change",
      problem: "The point (6, −2) lies on f. Find the corresponding point on g(x) = 3f(2(x − 1)) − 5.",
      steps: [
        "Match g(x) to af(b(x − h)) + k: a = 3, b = 2, h = 1 and k = −5.",
        "Transform the x-coordinate with u/b + h: 6/2 + 1 = 4.",
        "Transform the y-coordinate with av + k: 3(−2) − 5 = −11.",
        "Keep the coordinates together: the old point (6, −2) maps to (4, −11).",
        "Check the inside input at x = 4: 2(4 − 1) = 6, so f receives the original input as required."
      ]
    },
    {
      title: "Compare an equation with a table",
      problem: "A(x) = (x + 1)² − 4. For B, the table contains (0, 3), (1, 0), (2, −1), (3, 0), (4, 3). Compare their minima and axes of symmetry.",
      steps: [
        "Read A from vertex form: (x + 1)² = (x − (−1))², so A has vertex (−1, −4).",
        "Because A's leading coefficient is positive, its vertex is a minimum. A's minimum is −4 and its axis is x = −1.",
        "Scan B's table: the outputs fall to −1 and then rise, so B's minimum is −1 at x = 2.",
        "The equal outputs on opposite sides of x = 2 show B's axis of symmetry is x = 2.",
        "Compare: A has the lower minimum because −4 < −1. B's axis lies 3 units to the right of A's axis."
      ]
    }
  ],
  practice: [
    { q: "From f(x) to g(x)=f(x−5)+2, state the horizontal shift.", a: "right 5", accepted: ["right 5"], choices: ["left 5", "right 5", "up 5", "down 5"] },
    { q: "From f(x) to g(x)=f(x−5)+2, state the vertical shift.", a: "up 2", accepted: ["up 2"], choices: ["left 2", "right 2", "up 2", "down 2"] },
    { q: "Describe the reflection in g(x)=−f(x).", a: "across the x-axis", accepted: ["across the x-axis"], choices: ["across the x-axis", "across the y-axis", "across y = x", "no reflection"] },
    { q: "What vertical scale change occurs in g(x)=0.25f(x)?", a: "compression by 1/4", accepted: ["compression by 1/4"], choices: ["compression by 1/4", "stretch by 1/4", "compression by 4", "stretch by 4"] },
    { q: "What horizontal scale change occurs in g(x)=f(3x)?", a: "compression by 1/3", accepted: ["compression by 1/3"], choices: ["compression by 1/3", "stretch by 1/3", "compression by 3", "stretch by 3"] },
    { q: "What reflection occurs in g(x)=f(−x)?", a: "across the y-axis", accepted: ["across the y-axis"], choices: ["across the x-axis", "across the y-axis", "across y = x", "no reflection"] },
    { q: "The point (2,7) is on f. Where does it move under g(x)=f(x−4)−3?", a: "(6,4)", accepted: ["(6,4)", "(6, 4)", "6,4", "6, 4"] },
    { q: "The point (8,3) is on f. Where does it move under g(x)=2f(2x)+1?", a: "(4,7)", accepted: ["(4,7)", "(4, 7)", "4,7", "4, 7"] },
    { q: "Find the vertex of y=(x−6)^2−9.", a: "(6,-9)", accepted: ["(6,-9)", "(6,−9)", "(6, -9)", "6,-9", "6, −9"] },
    { q: "Find the maximum value of y=−3(x+2)^2+5.", a: "5", accepted: ["5", "y=5", "y = 5", "maximum 5"] },
    { q: "Find the axis of symmetry of y=2(x−4)^2+1.", a: "x=4", accepted: ["x=4", "x = 4", "4"] },
    { q: "Function A has minimum −6. Function B has minimum −2. Which has the lower minimum?", a: "A", accepted: ["A", "a", "function A", "function a"] },
    { q: "A table has outputs 5, 2, 1, 2, 5 at consecutive x-values −1, 0, 1, 2, 3. At what x-value is the minimum?", a: "1", accepted: ["1", "x=1", "x = 1"] },
    { q: "A graph has y-intercept 7. The function B(x)=3x−2 has what y-intercept?", a: "-2", accepted: ["-2", "−2", "(0,-2)", "(0,−2)", "(0, -2)"] }
  ]
};
