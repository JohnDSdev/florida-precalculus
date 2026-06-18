window.COURSE.lessons["radical-power-functions"] = {
  id: "radical-power-functions",
  title: "Radical and power functions",
  eyebrow: "Lesson 08 · Advanced function models",
  standard: "MA.912.AR.7.1-7.3; MA.912.NSO.1.1, 1.3",
  standardText: "Solve one-variable radical equations and identify extraneous solutions; graph square-root and cube-root functions and determine key features; use rational exponents and equivalent radical forms.",
  objective: "Rewrite rational exponents, compare power and radical families, determine domain and range, graph transformations, and solve radical equations while checking for extraneous solutions.",
  estimated: "50-60 min",
  sections: [
    {
      id: "rational-exponents",
      label: "01",
      title: "Read a rational exponent",
      kicker: "The central idea",
      body: [
        "A rational exponent is a fraction in the exponent. In x^(m/n), the denominator n names the root and the numerator m names the power. Read x^(2/3) as: take the cube root, then square. You may also square first and then take the cube root when both forms are defined.",
        "The denominator controls which real inputs are allowed. An even root, such as a square root, needs a nonnegative radicand. An odd root, such as a cube root, accepts every real radicand. For example, 16^(3/4) = (fourth root of 16)^3 = 2^3 = 8, while (-8)^(2/3) = (cube root of -8)^2 = (-2)^2 = 4.",
        "A negative exponent means reciprocal, not a negative answer. Thus x^(-1/2) = 1/x^(1/2) = 1/sqrt(x). Over the reals, x must be positive: x cannot be negative because of the square root, and x cannot be zero because it is in the denominator."
      ],
      formula: "x^(m/n) = nth root of (x^m) = (nth root of x)^m",
      diagram: "radical-rational-exponent-representation",
      note: "Reduce the exponent fraction when appropriate, and keep domain restrictions in view. Equivalent-looking forms can hide restrictions if you work only symbolically.",
      check: {
        prompt: "Evaluate 27^(2/3).",
        answer: "9",
        format: "9",
        accept: ["9", "9.0", "3^2", "3²"],
        hint: "The denominator 3 means cube root: cube root of 27 is 3. Then apply the numerator 2 by squaring."
      }
    },
    {
      id: "families",
      label: "02",
      title: "Recognize the power families",
      kicker: "Step two",
      body: [
        "A power function has the form f(x) = ax^p, where a and p are constants. Familiar examples include x^2, x^3, sqrt(x) = x^(1/2), and cube root of x = x^(1/3). The exponent tells you the broad shape, while a changes the vertical scale and may reflect the graph.",
        "Positive even integer powers, such as x^2 and x^4, are symmetric about the y-axis and have matching upward ends when a is positive. Positive odd integer powers, such as x^3 and x^5, are symmetric about the origin and pass from the lower left to the upper right when a is positive.",
        "Radical parents grow more slowly. y = sqrt(x) starts at (0, 0) and extends right. y = cube root of x extends in both directions and passes through the origin. Useful anchor points come from perfect powers: sqrt(x) uses (0,0), (1,1), (4,2), and (9,3); cube root uses (-8,-2), (-1,-1), (0,0), (1,1), and (8,2)."
      ],
      formula: "power function: f(x) = ax^p",
      diagram: "radical-power-family-feature-comparison",
      note: "Family shape is a starting point. Domain, coefficient sign, and transformations determine the final graph.",
      check: {
        prompt: "Which parent function accepts every real x and has origin symmetry: sqrt(x) or cube root of x?",
        answer: "cube root of x",
        format: "cube root of x",
        accept: ["cube root of x", "the cube root function", "cube root", "x^(1/3)", "x^1/3", "∛x"],
        hint: "Odd roots accept negative, zero, and positive radicands."
      }
    },
    {
      id: "domain-range",
      label: "03",
      title: "Find domain and range from the radicand",
      kicker: "Step three",
      body: [
        "For a square-root function, require the entire radicand to be at least zero. In f(x) = sqrt(2x - 6), solve 2x - 6 >= 0. Add 6 to both sides to keep equivalent inequalities: 2x >= 6. Divide by positive 2, so the inequality direction stays the same: x >= 3. The domain is [3, infinity).",
        "A basic square root cannot produce a negative output. Therefore f(x) = sqrt(2x - 6) has range [0, infinity). If the rule is g(x) = -sqrt(2x - 6) + 4, the negative sign reflects outputs and +4 raises them, so the greatest output is 4 and the range is (-infinity, 4].",
        "Cube roots have no even-root restriction. For h(x) = cube root of (x + 5) - 2, both domain and range are all real numbers. In a real-world model, apply contextual limits too; a formula may allow a negative input algebraically even when time, length, or population cannot be negative."
      ],
      formula: "square root: radicand >= 0   |   cube root: any real radicand",
      diagram: "radical-domain-range-representation",
      note: "Solve the radicand inequality for the domain. Find range from the parent outputs and the outside transformations, not by copying the domain.",
      check: {
        prompt: "State the domain of f(x) = sqrt(x + 4) in interval notation.",
        answer: "[-4,infinity)",
        format: "[-4,infinity) or x>=-4",
        accept: ["[-4,infinity)", "[-4, infinity)", "[-4,∞)", "[-4, ∞)", "x>=-4", "x >= -4", "x≥-4", "x ≥ -4"],
        hint: "Require x + 4 >= 0, then subtract 4 from both sides."
      }
    },
    {
      id: "transformations",
      label: "04",
      title: "Transform from an anchor point",
      kicker: "Step four",
      body: [
        "Use y = a sqrt(x - h) + k or y = a cube root of (x - h) + k. The point (h, k) is the square-root endpoint or the cube-root center. The expression x - h shifts right h units; x + 3 is x - (-3), so it shifts left 3 units.",
        "The outside coefficient a multiplies every parent y-value. If |a| > 1, outputs move farther from the horizontal line y = k, creating a vertical stretch. If 0 < |a| < 1, outputs move closer to y = k. If a is negative, the graph also reflects across the x-axis before the vertical shift.",
        "For g(x) = -2sqrt(x - 1) + 3, begin at the endpoint (1, 3). Map parent points using (u, v) -> (u + 1, -2v + 3): (0,0) becomes (1,3), (1,1) becomes (2,1), and (4,2) becomes (5,-1). The graph starts at (1,3) and decreases to the right."
      ],
      formula: "y = a root(x - h) + k: anchor (h,k), output rule y = av + k",
      diagram: "radical-transformation-point-mapping",
      note: "Read horizontal shifts with the opposite sign inside the radicand. Read vertical shifts with the same sign outside.",
      check: {
        prompt: "Give the endpoint of y = 3sqrt(x + 2) - 5.",
        answer: "(-2,-5)",
        format: "(-2,-5)",
        accept: ["(-2,-5)", "(-2, -5)", "(-2,−5)", "endpoint (-2,-5)", "x=-2,y=-5"],
        hint: "Rewrite x + 2 as x - (-2). The outside shift is -5."
      }
    },
    {
      id: "solve-equations",
      label: "05",
      title: "Isolate the radical before raising powers",
      kicker: "Step five",
      body: [
        "To solve a radical equation, first isolate one radical expression. Undo addition or subtraction outside the radical, then undo any multiplication outside it. Only after the radical stands alone should you raise both sides to the matching power.",
        "For sqrt(x + 1) + 2 = 6, subtract 2 from both sides because subtraction undoes the added 2: sqrt(x + 1) = 4. Square both sides because squaring undoes the principal square root: x + 1 = 16. Subtract 1 to obtain x = 15.",
        "For cube root of (2x - 3) = -3, cube both sides. Cubing preserves the sign, so 2x - 3 = -27. Add 3 to get 2x = -24, then divide by 2 to get x = -12. Odd-root equations do not have the same sign restriction as square-root equations, but every solution should still be checked."
      ],
      formula: "isolate radical -> raise both sides to matching power -> solve -> check",
      diagram: "radical-equation-model-steps",
      note: "If two radicals remain, isolate one, raise powers, simplify, isolate the remaining radical, and raise powers again. Keep the original equation for the final check.",
      check: {
        prompt: "Solve sqrt(3x - 2) = 5.",
        answer: "9",
        format: "x=9 or 9",
        accept: ["9", "x=9", "x = 9", "9.0"],
        hint: "Square both sides to get 3x - 2 = 25. Then add 2 and divide by 3."
      }
    },
    {
      id: "extraneous",
      label: "06",
      title: "Check for extraneous solutions",
      kicker: "Step six",
      body: [
        "Raising both sides to an even power can create an equation with more solutions than the original. For example, 3 and -3 both square to 9, but sqrt(9) means the principal, nonnegative value 3. A candidate produced after squaring is not automatically a solution.",
        "Consider sqrt(x + 2) = x. Squaring gives x + 2 = x^2, so x^2 - x - 2 = 0. Factor to (x - 2)(x + 1) = 0, which gives candidates x = 2 and x = -1. Substitute into the original equation: x = 2 gives sqrt(4) = 2, which is true. The candidate x = -1 gives sqrt(1) = -1, or 1 = -1, which is false.",
        "Therefore x = -1 is extraneous and the solution set is {2}. Check by substituting into the original equation, not just the squared equation. In context, also reject answers that violate stated conditions such as positive time or a restricted measurement interval."
      ],
      formula: "candidate from transformed equation + true in original equation = solution",
      diagram: "radical-extraneous-solution-representation",
      note: "An extraneous solution is not a small arithmetic error. It is a value that solves a transformed equation but fails the original equation or its context.",
      check: {
        prompt: "For sqrt(x + 6) = x, squaring gives candidates x = 3 and x = -2. Which candidate is extraneous?",
        answer: "-2",
        format: "x=-2 or -2",
        accept: ["-2", "−2", "x=-2", "x = -2", "-2 is extraneous", "x=-2 is extraneous"],
        hint: "Test both in the original equation. A principal square root cannot equal a negative right-hand side."
      }
    }
  ],
  examples: [
    {
      title: "Rewrite and evaluate a rational exponent",
      problem: "Evaluate 81^(3/4) and explain the operations.",
      steps: [
        "Use the denominator 4 as the root index: 81^(3/4) = (fourth root of 81)^3.",
        "Find the principal fourth root. Because 3^4 = 81, the fourth root of 81 is 3.",
        "Use the numerator 3 as the power: 3^3 = 3 * 3 * 3.",
        "Multiply: 3 * 3 * 3 = 27.",
        "Therefore 81^(3/4) = 27. The answer is positive because the principal even root is nonnegative."
      ]
    },
    {
      title: "Analyze a transformed radical function",
      problem: "Analyze f(x) = -2sqrt(x - 4) + 1.",
      steps: [
        "Match the rule to a sqrt(x - h) + k. Here a = -2, h = 4, and k = 1.",
        "The endpoint is (h, k) = (4, 1). The graph shifts right 4 and up 1.",
        "Require the radicand to be nonnegative: x - 4 >= 0, so x >= 4. The domain is [4, infinity).",
        "The parent sqrt(x) has outputs at least 0. Multiplying by -2 makes them at most 0, and adding 1 makes them at most 1. The range is (-infinity, 1].",
        "Map parent point (1, 1): move right 4 to x = 5, multiply the y-value by -2, then add 1. This gives (5, -1).",
        "Map parent point (4, 2) the same way to get (8, -3). Plot (4,1), (5,-1), and (8,-3), then draw the decreasing square-root curve to the right."
      ]
    },
    {
      title: "Solve and reject an extraneous candidate",
      problem: "Solve sqrt(2x + 3) = x.",
      steps: [
        "The radical is already isolated. Because the left side is nonnegative, any solution must also satisfy x >= 0.",
        "Square both sides: (sqrt(2x + 3))^2 = x^2, so 2x + 3 = x^2.",
        "Move every term to one side by subtracting 2x + 3: x^2 - 2x - 3 = 0.",
        "Factor: x^2 - 2x - 3 = (x - 3)(x + 1).",
        "Set each factor equal to zero. The candidates are x = 3 and x = -1.",
        "Check x = 3 in the original: sqrt(2(3) + 3) = sqrt(9) = 3, so x = 3 works.",
        "Check x = -1 in the original: sqrt(2(-1) + 3) = sqrt(1) = 1, not -1. It is extraneous. The solution set is {3}."
      ]
    }
  ],
  practice: [
    { q: "Rewrite x^(3/5) in radical language.", a: "fifth root of x, then cube", accepted: ["fifth root of x then cube", "fifth root of x, then cube", "the fifth root of x cubed", "fifth root of x^3", "(fifth root of x)^3", "5th root of x cubed", "root5(x^3)"] },
    { q: "Evaluate 64^(2/3).", a: "16", accepted: ["16", "16.0", "4^2", "4²"] },
    { q: "Evaluate 16^(-1/2).", a: "1/4", accepted: ["1/4", "0.25", ".25", "one fourth"] },
    { q: "Which parent has domain [0,infinity): sqrt(x) or cube root of x?", a: "sqrt(x)", accepted: ["sqrt(x)", "square root of x", "square root", "the square root function", "x^(1/2)", "√x"] },
    { q: "State the domain of f(x)=sqrt(x-7) in interval notation.", a: "[7,infinity)", accepted: ["[7,infinity)", "[7, infinity)", "[7,∞)", "[7, ∞)", "x>=7", "x >= 7", "x≥7", "x ≥ 7"] },
    { q: "State the domain of f(x)=cube root of (x+2).", a: "all real numbers", accepted: ["all real numbers", "all reals", "real numbers", "(-infinity,infinity)", "(-∞,∞)", "(-∞, ∞)", "r", "R"] },
    { q: "State the range of f(x)=-sqrt(x)+5 in interval notation.", a: "(-infinity,5]", accepted: ["(-infinity,5]", "(-infinity, 5]", "(-∞,5]", "(-∞, 5]", "y<=5", "y <= 5", "y≤5", "y ≤ 5"] },
    { q: "Give the endpoint of f(x)=sqrt(x-3)+4.", a: "(3,4)", accepted: ["(3,4)", "(3, 4)", "endpoint (3,4)", "x=3,y=4"] },
    { q: "Describe the horizontal shift in f(x)=cube root of (x+6).", a: "left 6", accepted: ["left 6", "6 left", "left 6 units", "shift left 6", "shifted left 6 units"] },
    { q: "For f(x)=-3sqrt(x), name the reflection.", a: "across the x-axis", accepted: ["across the x-axis", "over the x-axis", "x-axis", "reflection across x-axis", "reflected over the x axis"] },
    { q: "Solve sqrt(x+5)=4.", a: "11", accepted: ["11", "x=11", "x = 11", "11.0"] },
    { q: "Solve cube root of (x-1)=3.", a: "28", accepted: ["28", "x=28", "x = 28", "28.0"] },
    { q: "Solve 2sqrt(x)-1=7.", a: "16", accepted: ["16", "x=16", "x = 16", "16.0"] },
    { q: "For sqrt(x+6)=x, which candidate is extraneous: 3 or -2?", a: "-2", accepted: ["-2", "−2", "x=-2", "x = -2", "-2 is extraneous"] },
    { q: "Solve sqrt(2x+3)=x. Give only the valid solution.", a: "3", accepted: ["3", "x=3", "x = 3", "{3}", "solution 3"] },
    { q: "True or false: every value found after squaring a radical equation is automatically a solution.", a: "false", accepted: ["false", "f", "no", "not true"] },
    { q: "State the domain of f(x)=1/sqrt(x-2) in interval notation.", a: "(2,infinity)", accepted: ["(2,infinity)", "(2, infinity)", "(2,∞)", "(2, ∞)", "x>2", "x > 2"] },
    { q: "For f(x)=2sqrt(x-1)-3, find f(5).", a: "1", accepted: ["1", "1.0", "f(5)=1", "f(5) = 1"] }
  ]
};
