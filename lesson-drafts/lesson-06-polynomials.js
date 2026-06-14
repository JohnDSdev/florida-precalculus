window.COURSE.lessons["polynomial-behavior"] = {
  id: "polynomial-behavior",
  title: "Polynomial behavior",
  eyebrow: "Lesson 06 · Advanced function models",
  standard: "MA.912.AR.6.5",
  standardText: "Sketch a rough graph of a polynomial function of degree 3 or higher using zeros, multiplicity and knowledge of end behavior.",
  objective: "Sketch a polynomial graph from factored form by finding its zeros, deciding whether the graph crosses or touches at each zero, and determining both ends.",
  estimated: "40–50 min",
  sections: [
    {
      id: "read-factors", label: "01", title: "Read the factored form", kicker: "Start with the map",
      body: [
        "Factored form gives you the most useful information for sketching a polynomial. A factor such as (x − 3) tells you where the graph meets the x-axis. An exponent on a factor tells you how the graph behaves there.",
        "For P(x) = −2(x + 1)²(x − 3), the leading number is −2. The factors are (x + 1)² and (x − 3). The degree is the sum of their exponents: 2 + 1 = 3. Keep these three facts separate: leading coefficient −2, degree 3, and two distinct factors."
      ],
      formula: "P(x) = −2(x + 1)²(x − 3)   →   leading coefficient −2, degree 3",
      diagram: "polynomial-factor-map",
      note: "A missing exponent is 1. The number of distinct factors is not always the degree because a repeated factor counts more than once.",
      check: { prompt: "What is the degree of Q(x) = 4(x − 2)³(x + 5)²?", answer: "5", accept: ["5", "degree 5"], hint: "Add the factor exponents: 3 + 2." }
    },
    {
      id: "find-zeros", label: "02", title: "Find and plot the zeros", kicker: "Step two",
      body: [
        "A zero is an x-value that makes the function equal 0. A product is 0 when at least one factor is 0, so set each variable factor equal to 0 and solve. These zeros become x-intercepts on the graph.",
        "For P(x) = −2(x + 1)²(x − 3), solve x + 1 = 0 to get x = −1, and solve x − 3 = 0 to get x = 3. Plot (−1, 0) and (3, 0). Notice the sign change when solving: x + 1 gives the zero −1, not 1."
      ],
      formula: "x + 1 = 0 → x = −1      x − 3 = 0 → x = 3",
      diagram: "polynomial-zero-number-line",
      note: "Fast rule: a factor (x − a) gives zero a. A factor (x + a) gives zero −a.",
      check: { prompt: "List the zeros of R(x) = (x − 4)(x + 2)², from least to greatest.", answer: "-2,4", accept: ["-2,4", "-2, 4", "−2,4", "−2, 4", "x=-2,4", "x = -2, 4"], hint: "Set x − 4 = 0 and x + 2 = 0. Then order the answers." }
    },
    {
      id: "multiplicity", label: "03", title: "Use multiplicity at each zero", kicker: "Step three",
      body: [
        "Multiplicity is the exponent on the factor that creates a zero. An odd multiplicity makes the graph cross the x-axis because the function changes sign. An even multiplicity makes the graph touch the x-axis and turn around because the sign stays the same.",
        "At x = −1, the factor (x + 1)² has multiplicity 2, which is even, so P touches and turns. At x = 3, the factor (x − 3) has multiplicity 1, which is odd, so P crosses. Larger multiplicities flatten the graph near the zero: multiplicity 3 crosses with a flat bend, while multiplicity 4 touches with a flatter turn."
      ],
      formula: "odd multiplicity → cross      even multiplicity → touch and turn",
      diagram: "polynomial-multiplicity-comparison",
      note: "Multiplicity tells you local behavior right at a zero. It does not by itself tell you whether the graph is above or below the axis elsewhere.",
      check: { prompt: "At x = 2, does y = (x − 2)⁴(x + 1) cross or touch the x-axis?", answer: "touch", accept: ["touch", "touches", "touch and turn", "touches and turns", "bounce", "bounces"], hint: "The zero x = 2 has even multiplicity 4." }
    },
    {
      id: "end-behavior", label: "04", title: "Determine the end behavior", kicker: "Step four",
      body: [
        "Far to the left and right, the leading term controls a polynomial. You only need two facts: whether the degree is even or odd, and whether the leading coefficient is positive or negative.",
        "An odd degree sends the ends in opposite directions; an even degree sends them in the same direction. A positive leading coefficient makes the right end rise, while a negative leading coefficient makes the right end fall. P has odd degree 3 and a negative leading coefficient, so its left end rises and its right end falls."
      ],
      formula: "x → −∞, P(x) → ∞      x → ∞, P(x) → −∞",
      diagram: "polynomial-end-behavior-grid",
      note: "Start with the right end: positive leading coefficient means right rises; negative means right falls. Then use the degree parity to place the left end.",
      check: { prompt: "For S(x) = 3(x + 2)²(x − 1)², what do both ends do?", answer: "rise", accept: ["rise", "both rise", "up", "both up", "left up right up"], hint: "The degree is 4, which is even, and the leading coefficient is positive." }
    },
    {
      id: "connect", label: "05", title: "Connect the graph in order", kicker: "Step five",
      body: [
        "Now combine the clues from left to right. Start P high on the left. Move toward x = −1, where the graph must touch the axis and turn. Because it only touches, it stays on the same side of the axis. Then move toward x = 3, where it crosses to the other side, and finish low on the right.",
        "A polynomial graph is one smooth, unbroken curve. Do not draw corners, gaps, or vertical jumps. Your sketch does not need exact turning-point coordinates, but it must show the correct zeros, crossing or touching behavior, and end directions."
      ],
      formula: "left up → touch at −1 → cross at 3 → right down",
      diagram: "polynomial-assembled-sketch",
      note: "Work from the leftmost zero to the rightmost zero. This keeps you from accidentally crossing at an even-multiplicity zero.",
      check: { prompt: "Complete the path: left down → cross at −2 → touch at 1 → right ___.", answer: "up", accept: ["up", "rise", "rises", "right up"], hint: "Crossing changes the side of the axis. Touching does not. Track the curve from left to right." }
    },
    {
      id: "verify", label: "06", title: "Verify with a quick sign check", kicker: "Step six",
      body: [
        "Use one easy test x-value in each interval between the zeros. You do not need the exact output; determine only whether the product is positive or negative. A positive result means the graph is above the x-axis, and a negative result means it is below.",
        "For P, try x = 0 between −1 and 3: P(0) = −2(1)²(−3), which is positive, so the graph is above the axis there. Try x = 4 to the right of 3: P(4) = −2(5)²(1), which is negative, so the graph is below. These signs agree with touching at −1, crossing at 3, and falling to the right."
      ],
      formula: "P(0) > 0 → above the axis      P(4) < 0 → below the axis",
      diagram: "polynomial-sign-chart",
      note: "A sign chart is a check, not a new graphing method. If its signs disagree with your sketch, revisit multiplicity or end behavior.",
      check: { prompt: "For T(x) = (x + 2)(x − 1), is T(0) above or below the x-axis?", answer: "below", accept: ["below", "below the x-axis", "negative", "-"], hint: "T(0) = (2)(−1), which has what sign?" }
    }
  ],
  examples: [
    {
      title: "Odd degree with a repeated zero",
      problem: "Sketch f(x) = (x + 2)²(x − 1)",
      steps: [
        "Find the degree and leading sign: 2 + 1 = 3, and the leading coefficient is positive.",
        "Find the zeros: x = −2 and x = 1. Plot (−2, 0) and (1, 0).",
        "Read multiplicities: −2 has multiplicity 2, so the graph touches and turns. The zero 1 has multiplicity 1, so the graph crosses.",
        "Set the ends: odd degree means opposite ends. Positive leading coefficient means left down and right up.",
        "Connect smoothly: begin low on the left, touch and turn at −2, remain below the axis, cross at 1, and finish high on the right.",
        "Check x = 0: f(0) = (2)²(−1) = −4, so the graph should be below the axis between −2 and 1."
      ]
    },
    {
      title: "Even degree with three zeros",
      problem: "Sketch g(x) = −(x + 3)(x − 1)²(x − 4)",
      steps: [
        "Find the degree and leading sign: 1 + 2 + 1 = 4, and the leading coefficient is negative.",
        "Find and order the zeros: x = −3, 1, and 4.",
        "Read multiplicities: cross at −3, touch and turn at 1, and cross at 4.",
        "Set the ends: even degree means the ends match. A negative leading coefficient makes both ends fall.",
        "Connect from left to right: start low, cross at −3, touch at 1 without changing sides, cross at 4, and finish low.",
        "Check x = 0: g(0) = −(3)(1)(−4), which is positive, so the graph is above the axis from −3 through the touch at 1 to 4."
      ]
    },
    {
      title: "A flattened crossing",
      problem: "Sketch h(x) = 2(x + 1)(x − 2)³",
      steps: [
        "Find the degree and leading sign: 1 + 3 = 4, and the leading coefficient is positive.",
        "Find the zeros: x = −1 has multiplicity 1, and x = 2 has multiplicity 3.",
        "Both multiplicities are odd, so the graph crosses at both zeros. At x = 2, draw a flatter S-shaped crossing because the multiplicity is 3.",
        "Set the ends: even degree and positive leading coefficient mean both ends rise.",
        "Connect smoothly: start high, cross at −1, stay below until 2, cross with a flat bend, and finish high.",
        "Check x = 0: h(0) = 2(1)(−2)³ = −16, confirming that the graph is below the axis between the zeros."
      ]
    }
  ],
  practice: [
    { q: "What is the degree of f(x) = 3(x − 1)²(x + 4)³?", a: "5", accepted: ["5", "degree 5"] },
    { q: "What are the zeros of f(x) = (x + 3)(x − 2), from least to greatest?", a: "-3,2", accepted: ["-3,2", "-3, 2", "−3,2", "−3, 2"] },
    { q: "At x = 4, does f(x) = (x − 4)²(x + 1) cross or touch?", a: "touch", accepted: ["touch", "touches", "touch and turn", "touches and turns", "bounce", "bounces"] },
    { q: "At x = −2, does f(x) = (x + 2)³(x − 5) cross or touch?", a: "cross", accepted: ["cross", "crosses", "cross the axis", "crosses the axis"] },
    { q: "For a positive polynomial of odd degree, what does the right end do?", a: "rise", accepted: ["rise", "rises", "up", "goes up"] },
    { q: "For a negative polynomial of even degree, what do both ends do?", a: "fall", accepted: ["fall", "both fall", "down", "both down"] },
    { q: "Give the multiplicity of zero x = 1 in p(x) = (x − 1)⁴(x + 2).", a: "4", accepted: ["4", "multiplicity 4"] },
    { q: "For p(x) = −2(x + 1)²(x − 3), is p(0) positive or negative?", a: "positive", accepted: ["positive", "+", "above", "above the x-axis"] },
    { q: "What zero comes from the factor (x + 7)?", a: "-7", accepted: ["-7", "−7", "x=-7", "x = -7"] },
    { q: "What zero comes from the factor (x − 6)³?", a: "6", accepted: ["6", "x=6", "x = 6"] },
    { q: "For f(x) = (x + 2)²(x − 1)², what do both ends do?", a: "rise", accepted: ["rise", "both rise", "up", "both up"] },
    { q: "For f(x) = −(x + 2)(x − 1)², what does the right end do?", a: "fall", accepted: ["fall", "falls", "down", "goes down"] },
    { q: "List the zeros of q(x) = 5x(x − 3)², from least to greatest.", a: "0,3", accepted: ["0,3", "0, 3", "x=0,3", "x = 0, 3"] },
    { q: "Does q(x) = 5x(x − 3)² cross or touch at x = 3?", a: "touch", accepted: ["touch", "touches", "touch and turn", "touches and turns", "bounce", "bounces"] },
    { q: "A polynomial has degree 7 and a negative leading coefficient. Describe its ends as left ___, right ___.", a: "up,down", accepted: ["up,down", "up, down", "left up right down", "rise,fall", "rises,falls"] },
    { q: "A graph crosses at x = −1 with a flat bend. Which multiplicity is more likely: 2 or 3?", a: "3", accepted: ["3", "multiplicity 3"] }
  ]
};
