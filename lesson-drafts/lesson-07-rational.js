window.COURSE.lessons["rational-functions"] = {
  id: "rational-functions",
  title: "Rational functions",
  eyebrow: "Lesson 07 · Advanced function models",
  standard: "MA.912.AR.8.3",
  standardText: "Solve and graph mathematical and real-world problems modeled with rational functions. Interpret key features, including domain, intercepts, end behavior and asymptotes, and determine constraints.",
  objective: "Find the domain, holes, vertical and horizontal asymptotes, intercepts and branch behavior of a rational function, then use those features to sketch its graph.",
  estimated: "45–55 min",
  sections: [
    {
      id: "domain",
      label: "01",
      title: "Start with the denominator",
      kicker: "The central idea",
      body: [
        "A rational function is one polynomial divided by another polynomial. The denominator controls which inputs are allowed because division by zero is undefined.",
        "To find the domain, set the original denominator equal to zero and solve. Exclude every answer. For f(x) = (x + 1)/(x − 3), the denominator is zero at x = 3, so the domain is every real number except 3. In interval notation, that is (−∞, 3) ∪ (3, ∞)."
      ],
      formula: "f(x) = P(x)/Q(x),   Q(x) ≠ 0",
      diagram: "rational-domain-number-line",
      note: "Use the original denominator. A factor that cancels later still creates a forbidden input.",
      check: {
        prompt: "Find the excluded x-values for r(x) = 2/[(x − 4)(x + 1)].",
        answer: "x=4,-1",
        parts: [
          { label: "Excluded x-values (list both)", placeholder: "a,b", accept: ["x=4,-1", "x = 4, -1", "4,-1", "-1,4", "x=-1,4", "x = -1, 4"] }
        ],
        accept: ["x=4,-1", "x = 4, -1", "4,-1", "-1,4", "x=-1,4", "x = -1, 4"],
        hint: "Set each denominator factor equal to zero: x − 4 = 0 and x + 1 = 0."
      }
    },
    {
      id: "factor",
      label: "02",
      title: "Factor before you classify",
      kicker: "Step two",
      body: [
        "Factor the numerator and denominator completely. Matching factors tell you about holes. Denominator factors that remain tell you about vertical asymptotes.",
        "For g(x) = (x² − 4)/(x² − x − 6), factor to get (x − 2)(x + 2)/[(x − 3)(x + 2)]. The factor x + 2 cancels, but x = −2 is still excluded from the original function. The simplified rule is (x − 2)/(x − 3), with x ≠ −2 and x ≠ 3."
      ],
      formula: "[(x − 2)(x + 2)] / [(x − 3)(x + 2)] = (x − 2)/(x − 3)",
      diagram: "rational-factor-map",
      note: "Cancel factors, not separate terms. You cannot cancel the x in (x + 2)/(x + 5).",
      check: {
        prompt: "Simplify (x² − 9)/(x² + 5x + 6), while keeping the original restrictions.",
        answer: "(x-3)/(x+2),x!=-3,-2",
        parts: [
          { label: "Simplified expression", placeholder: "(x-a)/(x+b)", accept: ["(x-3)/(x+2)", "(x−3)/(x+2)", "(x - 3)/(x + 2)"] },
          { label: "Original excluded x-values", placeholder: "a,b", accept: ["-3,-2", "-2,-3", "x!=-3,-2", "x != -3, -2", "x=-3,-2 excluded", "-3 and -2"] }
        ],
        accept: ["(x-3)/(x+2),x!=-3,-2", "(x−3)/(x+2), x≠−3,−2", "(x-3)/(x+2), x != -3, -2", "(x-3)/(x+2);x=-3,-2 excluded"],
        hint: "Factor: x² − 9 = (x − 3)(x + 3) and x² + 5x + 6 = (x + 2)(x + 3)."
      }
    },
    {
      id: "discontinuities",
      label: "03",
      title: "Tell a hole from an asymptote",
      kicker: "Step three",
      body: [
        "A canceled denominator factor creates a hole, also called a removable discontinuity. The graph is missing one point there. To find the hole's y-coordinate, substitute its x-value into the simplified function.",
        "A denominator factor that does not cancel creates a vertical asymptote. The graph approaches that vertical line but never reaches the forbidden x-value. In the previous example, x = −2 gives a hole. Using (x − 2)/(x − 3), the y-value is (−4)/(−5) = 4/5, so the hole is (−2, 4/5). The remaining factor gives the vertical asymptote x = 3."
      ],
      formula: "hole: canceled factor   |   vertical asymptote: remaining denominator factor",
      diagram: "rational-hole-versus-asymptote",
      note: "Both x-values are outside the domain, but their graphs behave differently: one missing point versus an unbounded break.",
      check: {
        prompt: "For h(x) = [(x − 5)(x + 1)]/[(x − 5)(x − 2)], identify the hole x-value and the vertical asymptote.",
        answer: "hole x=5; VA x=2",
        parts: [
          { label: "Hole x-value only", placeholder: "number only", accept: ["5", "x=5", "x = 5", "hole x=5", "hole=5"] },
          { label: "Vertical asymptote x-value only", placeholder: "number only", accept: ["2", "x=2", "x = 2", "va x=2", "vertical asymptote x=2", "va=2"] }
        ],
        accept: ["hole x=5; va x=2", "hole: x=5, vertical asymptote: x=2", "hole 5, va 2", "x=5 hole;x=2 asymptote", "hole=5,va=2", "hole = 5, va = 2", "5,2", "5;2"],
        hint: "The canceled factor x − 5 gives the hole. The factor x − 2 remains below the fraction bar."
      }
    },
    {
      id: "horizontal",
      label: "04",
      title: "Compare degrees for end behavior",
      kicker: "Step four",
      body: [
        "A horizontal asymptote describes what y approaches far to the left and right. Compare the highest powers in the simplified numerator and denominator.",
        "If the numerator degree is smaller, the horizontal asymptote is y = 0. If the degrees are equal, divide the leading coefficients. For (2x² + 1)/(x² − 4), the leading coefficients are 2 and 1, so the horizontal asymptote is y = 2. If the numerator degree is larger, there is no horizontal asymptote; a later lesson can examine slant or polynomial asymptotes."
      ],
      formula: "top degree < bottom: y=0   |   equal degrees: y=(leading coefficient ratio)",
      diagram: "rational-end-behavior",
      note: "A graph may cross a horizontal asymptote. The asymptote only describes behavior as x moves very far from zero.",
      check: {
        prompt: "Find the horizontal asymptote of k(x) = (6x² − 1)/(3x² + 5x).",
        answer: "y=2",
        parts: [
          { label: "Horizontal asymptote equation", placeholder: "y=number", accept: ["y=2", "y = 2", "2"] }
        ],
        accept: ["y=2", "y = 2", "2"],
        hint: "The degrees match, so divide the leading coefficients: 6/3."
      }
    },
    {
      id: "intercepts-behavior",
      label: "05",
      title: "Place intercepts and branches",
      kicker: "Step five",
      body: [
        "For x-intercepts, set the simplified numerator equal to zero. A canceled zero is a hole, not an intercept. For the y-intercept, substitute x = 0 if zero is in the domain.",
        "Then use one test x-value in each interval separated by holes and vertical asymptotes. The sign of the output tells whether that branch is above or below the x-axis. Values close to a vertical asymptote show whether a branch rises toward positive infinity or falls toward negative infinity."
      ],
      formula: "x-intercept: numerator = 0   |   y-intercept: f(0)",
      diagram: "rational-sign-intervals",
      note: "Build the graph from evidence: asymptotes first, then holes, intercepts and one or two test points per interval.",
      check: {
        prompt: "For p(x) = (x − 4)/(x + 2), give the x-intercept and y-intercept.",
        answer: "(4,0),(0,-2)",
        parts: [
          { label: "x-intercept point", placeholder: "(a,0)", accept: ["(4,0)", "(4, 0)", "4,0", "x=4", "4"] },
          { label: "y-intercept point", placeholder: "(0,b)", accept: ["(0,-2)", "(0, -2)", "0,-2", "y=-2", "-2"] }
        ],
        accept: ["(4,0),(0,-2)", "(4, 0), (0, -2)", "x-int (4,0); y-int (0,-2)", "x=4,y=-2"],
        hint: "Set x − 4 = 0 for the x-intercept. Then compute p(0) = −4/2."
      }
    },
    {
      id: "graph",
      label: "06",
      title: "Assemble the whole graph",
      kicker: "Step six",
      body: [
        "Use the same order every time: factor, record the original restrictions, simplify, classify holes and vertical asymptotes, find the horizontal asymptote, find intercepts, and test each interval. This order keeps a canceled factor from disappearing from your domain work.",
        "For q(x) = (x² − 1)/(x² − x − 2), factoring gives (x − 1)(x + 1)/[(x − 2)(x + 1)]. There is a hole at x = −1 and a vertical asymptote at x = 2. The simplified rule (x − 1)/(x − 2) puts the hole at (−1, 2/3), gives x-intercept (1, 0), y-intercept (0, 1/2), and horizontal asymptote y = 1. Plot those guides, then draw smooth branches that follow the tested behavior."
      ],
      formula: "factor → restrict → classify → find asymptotes → find intercepts → test → sketch",
      diagram: "rational-complete-graph",
      note: "Do not draw through a hole or across a vertical asymptote. Use an open circle for the hole and a dashed guide for each asymptote.",
      check: {
        prompt: "For q(x) above, what are the hole and vertical asymptote?",
        answer: "hole (-1,2/3); VA x=2",
        parts: [
          { label: "Hole point", placeholder: "(a,b)", accept: ["(-1,2/3)", "(-1, 2/3)", "(-1,0.6667)", "(-1, 0.6667)", "-1,2/3"] },
          { label: "Vertical asymptote x-value only", placeholder: "number only", accept: ["2", "x=2", "x = 2", "va x=2", "vertical asymptote x=2", "va=2"] }
        ],
        accept: ["hole (-1,2/3); va x=2", "(-1,2/3), x=2", "hole: (-1, 2/3), vertical asymptote: x=2", "hole (-1,0.6667);va 2"],
        hint: "The canceled x + 1 factor gives the hole. The remaining denominator x − 2 gives the vertical asymptote."
      }
    }
  ],
  examples: [
    {
      title: "A hole and a vertical asymptote",
      problem: "Analyze f(x) = (x² + x − 6)/(x² − 4).",
      steps: [
        "Factor both polynomials: f(x) = [(x + 3)(x − 2)]/[(x − 2)(x + 2)].",
        "Record restrictions from the original denominator: x ≠ 2 and x ≠ −2.",
        "Cancel x − 2 to get the simplified rule (x + 3)/(x + 2). The canceled factor creates a hole at x = 2.",
        "Find the hole's height with the simplified rule: (2 + 3)/(2 + 2) = 5/4. The hole is (2, 5/4).",
        "The remaining denominator is zero at x = −2, so the vertical asymptote is x = −2.",
        "The simplified degrees are equal and the leading coefficients are both 1, so the horizontal asymptote is y = 1.",
        "The x-intercept is (−3, 0). The y-intercept is (0, 3/2). Plot these features and test points on each side of x = −2."
      ]
    },
    {
      title: "Two vertical asymptotes",
      problem: "Analyze g(x) = (2x + 1)/(x² − 9).",
      steps: [
        "Factor the denominator: x² − 9 = (x − 3)(x + 3).",
        "No factor cancels with 2x + 1, so there are no holes.",
        "The domain excludes x = −3 and x = 3. These produce vertical asymptotes x = −3 and x = 3.",
        "The numerator degree 1 is smaller than the denominator degree 2, so the horizontal asymptote is y = 0.",
        "Set 2x + 1 = 0 to get x = −1/2, so the x-intercept is (−1/2, 0).",
        "Compute g(0) = 1/(−9) = −1/9, so the y-intercept is (0, −1/9).",
        "Test one point in each interval (−∞, −3), (−3, −1/2), (−1/2, 3), and (3, ∞) to place the branches."
      ]
    },
    {
      title: "Inverse variation in context",
      problem: "The time to travel 120 miles is T(v) = 120/v hours, where v is speed in miles per hour.",
      steps: [
        "The denominator cannot be zero, so the algebraic rule excludes v = 0.",
        "In context, speed must be positive. The practical domain is v > 0, not every nonzero real number.",
        "The vertical asymptote v = 0 means travel time grows without bound as positive speed approaches zero.",
        "The horizontal asymptote T = 0 means travel time approaches zero as speed becomes extremely large; the model never gives exactly zero time.",
        "At v = 40, T(40) = 120/40 = 3 hours.",
        "At v = 60, T(60) = 120/60 = 2 hours. Increasing speed lowers time, so this branch is decreasing."
      ]
    }
  ],
  practice: [
    { q: "Find the excluded x-value for f(x)=5/(x−7).", a: "7", accepted: ["7", "x=7", "x = 7"] },
    { q: "Find the excluded x-values for f(x)=1/(x²−9).", a: "-3,3", accepted: ["-3,3", "−3,3", "3,-3", "x=-3,3", "x = -3, 3"] },
    { q: "For f(x)=(x+4)/[(x−1)(x+4)], what x-value gives the hole?", a: "-4", accepted: ["-4", "−4", "x=-4", "x = -4"] },
    { q: "For f(x)=(x+4)/[(x−1)(x+4)], what is the vertical asymptote?", a: "x=1", accepted: ["x=1", "x = 1", "1"] },
    { q: "For f(x)=(x²−4)/(x−2), give the hole as an ordered pair.", a: "(2,4)", accepted: ["(2,4)", "(2, 4)"] },
    { q: "Find the horizontal asymptote of f(x)=(3x+1)/(x²+4).", a: "y=0", accepted: ["y=0", "y = 0", "0"] },
    { q: "Find the horizontal asymptote of f(x)=(8x²−1)/(2x²+3).", a: "y=4", accepted: ["y=4", "y = 4", "4"] },
    { q: "Does f(x)=(x³+1)/(x²+1) have a horizontal asymptote? Answer yes or no.", a: "no", accepted: ["no", "no horizontal asymptote"] },
    { q: "Find the x-intercept of f(x)=(x−6)/(x+1).", a: "(6,0)", accepted: ["(6,0)", "(6, 0)", "x=6", "6"] },
    { q: "Find the y-intercept of f(x)=(x−6)/(x+1).", a: "(0,-6)", accepted: ["(0,-6)", "(0, −6)", "(0, -6)", "-6", "y=-6"] },
    { q: "For f(x)=(x²−1)/(x²−x−2), what is the hole's x-value?", a: "-1", accepted: ["-1", "−1", "x=-1"] },
    { q: "For f(x)=(x²−1)/(x²−x−2), what is the vertical asymptote?", a: "x=2", accepted: ["x=2", "x = 2", "2"] },
    { q: "For f(x)=(x²−1)/(x²−x−2), what is the horizontal asymptote?", a: "y=1", accepted: ["y=1", "y = 1", "1"] },
    { q: "State the domain of f(x)=1/(x+5) in interval notation.", a: "(-infinity,-5)U(-5,infinity)", accepted: ["(-infinity,-5)u(-5,infinity)", "(-∞,-5)∪(-5,∞)", "(-∞, -5) ∪ (-5, ∞)"] },
    { q: "A 100-mile trip is modeled by T(v)=100/v with v>0. Find T(50).", a: "2", accepted: ["2", "2 hours", "2 hr"] },
    { q: "For f(x)=[(x−3)(x+2)]/[(x−3)(x+5)], is x=3 a hole or a vertical asymptote?", a: "hole", accepted: ["hole", "a hole", "removable discontinuity"] }
  ]
};
