window.COURSE = {
  title: "Florida Precalculus",
  courseNumber: "1202340",
  units: [
    { number: "01", title: "Functions as change", detail: "Difference quotients, composition, inverses and function comparison", planned: 6, lessons: ["difference-quotients", "function-composition", "inverse-functions", "function-transformations", "choosing-function-models"] },
    { number: "02", title: "Advanced function models", detail: "Polynomial, rational, radical, exponential, logarithmic and piecewise models", planned: 5, lessons: ["polynomial-behavior", "rational-functions"] },
    { number: "03", title: "Sequences & series", detail: "Arithmetic and geometric sequences, finite and infinite series", planned: 4, lessons: [] },
    { number: "04", title: "Trigonometry", detail: "Radians, the unit circle, identities, equations and periodic models", planned: 9, lessons: [] },
    { number: "05", title: "Conic sections", detail: "Circles, parabolas, ellipses and hyperbolas", planned: 4, lessons: [] },
    { number: "06", title: "Complex numbers & vectors", detail: "Complex plane, polar form, vector operations and applications", planned: 4, lessons: [] },
    { number: "07", title: "Polar & parametric", detail: "Polar graphs, coordinate conversion and motion in the plane", planned: 4, lessons: [] }
  ],
  lessons: {
    "difference-quotients": {
      id: "difference-quotients",
      title: "Difference quotients",
      eyebrow: "Lesson 01 · Functions as change",
      standard: "MA.912.F.1.4",
      standardText: "Write an algebraic expression that represents the difference quotient of a function. Calculate its numerical value at a given pair of points.",
      objective: "Build, simplify and interpret a difference quotient as the slope between two points on a function.",
      estimated: "35–45 min",
      sections: [
        {
          id: "idea", label: "01", title: "See the change", kicker: "The central idea",
          body: [
            "A function takes an input and gives you an output. If the input changes from x to x + h, then the output changes from f(x) to f(x + h). The difference quotient tells us how fast the output changed.",
            "The top of the fraction is the change in output. The bottom is the change in input. Dividing them gives the average rate of change, which is also the slope of the line through the two points."
          ],
          formula: "[ f(x + h) − f(x) ] / h,   h ≠ 0",
          diagram: "secant",
          note: "Why h ≠ 0: dividing by zero is undefined. Geometrically, the two input values must be distinct.",
          check: { prompt: "If the input moves from x to x + 5, what is the change in input?", answer: "5", accept: ["5", "+5"], hint: "Subtract the old input from the new one: (x + 5) − x." }
        },
        {
          id: "substitute", label: "02", title: "Substitute carefully", kicker: "Step two",
          body: [
            "First find f(x + h). In the original function, replace every x with (x + h). Put the new input in parentheses so it stays together.",
            "Example: if f(x) = x² + 3x, then f(x + h) = (x + h)² + 3(x + h). Be careful: (x + h)² is not x² + h². It also has the middle term 2xh."
          ],
          formula: "f(x + h) = (x + h)² + 3(x + h)",
          diagram: "machine",
          note: "Habit: write parentheses first, then place the new input inside them.",
          check: { prompt: "For f(x) = 2x² − 1, write f(x + h).", answer: "2(x+h)^2-1", accept: ["2(x+h)^2-1", "2(x + h)^2 - 1", "2(x+h)²-1", "2(x + h)² − 1"], hint: "Replace each x with (x + h). Do not expand yet." }
        },
        {
          id: "expand", label: "03", title: "Expand before subtracting", kicker: "Step three",
          body: [
            "Next, expand f(x + h). Do this before subtracting f(x). Working one job at a time makes the signs easier to track.",
            "Here, (x + h)² becomes x² + 2xh + h², and 3(x + h) becomes 3x + 3h. Put those pieces together to get x² + 2xh + h² + 3x + 3h."
          ],
          formula: "x² + 2xh + h² + 3x + 3h",
          diagram: "area",
          note: "The area model shows why (x + h)² contains four pieces: x², xh, xh and h².",
          check: { prompt: "Expand (x + h)².", answer: "x^2+2xh+h^2", accept: ["x^2+2xh+h^2", "x²+2xh+h²", "x^2 + 2xh + h^2", "x² + 2xh + h²"], hint: "Multiply (x + h)(x + h), then combine the two xh terms." }
        },
        {
          id: "subtract", label: "04", title: "Distribute the minus", kicker: "Step four",
          body: [
            "Now subtract the original function. Write the whole original function in parentheses: f(x + h) − (x² + 3x).",
            "The minus sign changes both signs inside the parentheses. That gives −x² − 3x. These terms cancel the +x² and +3x already in the expression."
          ],
          formula: "2xh + h² + 3h",
          diagram: "cancel",
          note: "Most errors here are sign errors. Treat −f(x) as a multiplication by −1.",
          check: { prompt: "Simplify (x + h)² − x².", answer: "2xh+h^2", accept: ["2xh+h^2", "2xh+h²", "2xh + h^2", "2xh + h²"], hint: "Expand the first square, then cancel x² with −x²." }
        },
        {
          id: "factor", label: "05", title: "Factor, then divide", kicker: "Step five",
          body: [
            "Every term left on top contains h. Pull that shared h out: 2xh + h² + 3h = h(2x + h + 3). Now h is multiplying the entire expression.",
            "Because h is not zero, h/h equals 1. Cancel that common factor. The answer is 2x + h + 3. It gives the slope for any starting x and any nonzero change h."
          ],
          formula: "h(2x + h + 3) / h = 2x + h + 3",
          diagram: "factor",
          note: "You cancel factors, not terms. h can cancel only after it is a factor of the entire numerator.",
          check: { prompt: "Simplify (6xh + 3h² − h) / h, where h ≠ 0.", answer: "6x+3h-1", accept: ["6x+3h-1", "6x + 3h - 1", "6x+3h−1"], hint: "Factor h from all three numerator terms, then cancel the common factor." }
        },
        {
          id: "interpret", label: "06", title: "Evaluate and interpret", kicker: "Step six",
          body: [
            "After simplifying, plug in the given values. If x = 2 and h = 0.5, then 2x + h + 3 becomes 2(2) + 0.5 + 3 = 7.5.",
            "What does 7.5 mean? From x = 2 to x = 2.5, the function rises an average of 7.5 output units for every 1 input unit. It is the slope of the line joining those two points."
          ],
          formula: "2(2) + 0.5 + 3 = 7.5",
          diagram: "secant-close",
          note: "A complete interpretation names the quantity, the interval and the units when units are given.",
          check: { prompt: "If the simplified quotient is 4x + 2h − 3, find its value at x = 1 and h = 2.", answer: "5", accept: ["5"], hint: "Compute 4(1) + 2(2) − 3." }
        }
      ],
      examples: [
        { title: "Quadratic", problem: "f(x) = x² − 4x", steps: ["Substitute: f(x+h) = (x+h)² − 4(x+h)", "Expand: x² + 2xh + h² − 4x − 4h", "Subtract f(x): add −(x² − 4x)", "Cancel: 2xh + h² − 4h", "Factor and divide by h: 2x + h − 4"] },
        { title: "Linear", problem: "g(x) = 5x + 7", steps: ["Substitute: g(x+h) = 5(x+h) + 7", "Expand: 5x + 5h + 7", "Subtract g(x): −(5x + 7)", "Cancel: 5h", "Divide by h: 5. A linear function has constant rate of change."] },
        { title: "Cubic", problem: "p(x) = x³", steps: ["Substitute: p(x+h) = (x+h)³", "Expand: x³ + 3x²h + 3xh² + h³", "Subtract p(x): −x³", "Factor h: h(3x² + 3xh + h²)", "Divide by h: 3x² + 3xh + h²"] }
      ],
      practice: [
        { q: "For f(x)=x²+2x, find the simplified difference quotient.", a: "2x+h+2", accepted: ["2x+h+2", "2x + h + 2"] },
        { q: "For f(x)=3x−8, find the simplified difference quotient.", a: "3", accepted: ["3"] },
        { q: "For f(x)=x²−5, find the simplified difference quotient.", a: "2x+h", accepted: ["2x+h", "2x + h"] },
        { q: "For f(x)=2x², find the simplified difference quotient.", a: "4x+2h", accepted: ["4x+2h", "4x + 2h"] },
        { q: "For f(x)=−x²+4x, find the simplified difference quotient.", a: "-2x-h+4", accepted: ["-2x-h+4", "−2x−h+4", "-2x - h + 4"] },
        { q: "Evaluate 2x+h+1 at x=3 and h=2.", a: "9", accepted: ["9"] },
        { q: "For f(x)=x²+6x+1, find the simplified difference quotient.", a: "2x+h+6", accepted: ["2x+h+6", "2x + h + 6"] },
        { q: "For f(x)=4−2x, find the simplified difference quotient.", a: "-2", accepted: ["-2", "−2"] },
        { q: "Evaluate 3x²+3xh+h² at x=1 and h=1.", a: "7", accepted: ["7"] },
        { q: "For f(x)=5x²−3x, find the simplified difference quotient.", a: "10x+5h-3", accepted: ["10x+5h-3", "10x + 5h - 3"] },
        { q: "What restriction must be placed on h?", a: "h≠0", accepted: ["h!=0", "h≠0", "h not equal to 0", "h cannot be 0"] },
        { q: "For f(x)=x³, evaluate the quotient at x=2, h=1.", a: "19", accepted: ["19"] }
      ]
    },
    "function-composition": {
      id: "function-composition",
      title: "Function composition",
      eyebrow: "Lesson 02 · Functions as machines",
      standard: "MA.912.F.3.4",
      standardText: "Compose functions in mathematical and real-world situations. Determine the domain and range of the composite function.",
      objective: "Evaluate and write composite functions by sending the output of one function into another.",
      estimated: "35–45 min",
      sections: [
        {
          id: "meaning", label: "01", title: "One function feeds another", kicker: "The central idea",
          body: [
            "A composite function does two function rules in order. The first function produces an output. That output becomes the input of the second function.",
            "The notation (f ∘ g)(x) means f(g(x)). Read it from the inside out: do g first, then do f. The order matters, just like putting on socks before shoes."
          ],
          formula: "(f ∘ g)(x) = f(g(x))",
          diagram: "composition-machine",
          note: "Read from right to left: g acts first because g(x) is inside f.",
          check: { prompt: "In f(g(x)), which function do you use first?", answer: "g", accept: ["g", "g(x)", "function g"], hint: "Start with the function on the inside." }
        },
        {
          id: "evaluate-inner", label: "02", title: "Find the inside output", kicker: "Step two",
          body: [
            "To find f(g(3)), begin with the inside function g(3). Ignore f for a moment. If g(x) = x + 4, then g(3) = 3 + 4 = 7.",
            "Write that result down. It is the number that will go into f next. Keeping the two jobs on separate lines prevents you from mixing the rules together."
          ],
          formula: "g(3) = 3 + 4 = 7",
          diagram: "composition-step-one",
          note: "Inside first. Complete g(3) before touching the rule for f.",
          check: { prompt: "If g(x) = 2x − 1, find g(5).", answer: "9", accept: ["9"], hint: "Replace x with 5: 2(5) − 1." }
        },
        {
          id: "evaluate-outer", label: "03", title: "Send it into the outside", kicker: "Step three",
          body: [
            "Now send the inside answer into the outside function. Suppose f(x) = x². Because g(3) = 7, f(g(3)) becomes f(7).",
            "Use the rule for f: f(7) = 7² = 49. The complete result is f(g(3)) = 49."
          ],
          formula: "f(g(3)) = f(7) = 7² = 49",
          diagram: "composition-step-two",
          note: "The output 7 changes jobs: it was the output of g, then it became the input of f.",
          check: { prompt: "If f(x) = x² and g(2) = 5, find f(g(2)).", answer: "25", accept: ["25"], hint: "g(2) is already 5, so compute f(5)." }
        },
        {
          id: "build-rule", label: "04", title: "Build a composite rule", kicker: "Step four",
          body: [
            "Sometimes you need a formula instead of one numerical value. Start with the outside rule and replace its x with the entire inside function.",
            "If f(x) = x² and g(x) = x + 4, then f(g(x)) = (g(x))² = (x + 4)². Keep parentheses around g(x) before simplifying."
          ],
          formula: "f(g(x)) = (x + 4)²",
          diagram: "composition-substitute",
          note: "Replace x in the outside function with all of g(x), not just part of it.",
          check: { prompt: "If f(x)=3x+1 and g(x)=x², write f(g(x)).", answer: "3x^2+1", accept: ["3x^2+1", "3x²+1", "3x^2 + 1"], hint: "In 3x + 1, replace x with x²." }
        },
        {
          id: "order", label: "05", title: "Check the order", kicker: "Step five",
          body: [
            "Changing the order usually changes the answer. With f(x) = x² and g(x) = x + 4, f(g(x)) = (x + 4)².",
            "But g(f(x)) = g(x²) = x² + 4. These are different rules. Always copy the requested order before you begin."
          ],
          formula: "f(g(x)) = (x + 4)²   but   g(f(x)) = x² + 4",
          diagram: "composition-order",
          note: "Composition is usually not commutative: f ∘ g is usually different from g ∘ f.",
          check: { prompt: "If f(x)=x+2 and g(x)=3x, write g(f(x)).", answer: "3(x+2)", accept: ["3(x+2)", "3x+6", "3x + 6"], hint: "Do f first. Put x + 2 into every x in g." }
        },
        {
          id: "domain", label: "06", title: "Check allowed inputs", kicker: "Step six",
          body: [
            "A composite input must survive both functions. First, x must be allowed in the inside function. Then the inside output must be allowed in the outside function.",
            "For f(x) = 1/x and g(x) = x − 2, f(g(x)) = 1/(x − 2). The denominator cannot equal zero, so x cannot be 2."
          ],
          formula: "1/(x − 2),   x ≠ 2",
          diagram: "domain-gate",
          note: "Look for division by zero and even roots of negative numbers when checking a domain.",
          check: { prompt: "For 1/(x + 5), which x-value is not allowed?", answer: "-5", accept: ["-5", "−5", "x=-5", "x = -5"], hint: "Set the denominator x + 5 equal to zero." }
        }
      ],
      examples: [
        { title: "Evaluate", problem: "f(x)=2x+1, g(x)=x²; find f(g(3))", steps: ["Start inside: g(3) = 3²", "Compute the inside value: g(3) = 9", "Send 9 into f: f(9) = 2(9) + 1", "Simplify: 18 + 1", "Answer: f(g(3)) = 19"] },
        { title: "Write the rule", problem: "f(x)=x−5, g(x)=3x; find g(f(x))", steps: ["The order says f first, then g", "Write the outside rule: g(input) = 3(input)", "Replace the input with f(x): 3(x − 5)", "Distribute 3: 3x − 15", "Answer: g(f(x)) = 3x − 15"] },
        { title: "Find the domain", problem: "f(x)=1/x, g(x)=x+6; find f(g(x))", steps: ["Place g(x) into f: f(g(x)) = 1/(x + 6)", "A denominator cannot be zero", "Set x + 6 = 0", "Solve: x = −6", "Domain: all real numbers except −6"] }
      ],
      practice: [
        { q: "If f(x)=x+3 and g(x)=2x, find f(g(4)).", a: "11", accepted: ["11"] },
        { q: "If f(x)=x² and g(x)=x−1, write f(g(x)).", a: "(x-1)^2", accepted: ["(x-1)^2", "(x−1)^2", "(x-1)²"] },
        { q: "If f(x)=3x+2 and g(x)=x², write f(g(x)).", a: "3x^2+2", accepted: ["3x^2+2", "3x²+2", "3x^2 + 2"] },
        { q: "If f(x)=x+5 and g(x)=4x, write g(f(x)).", a: "4x+20", accepted: ["4x+20", "4(x+5)", "4x + 20"] },
        { q: "If g(2)=7 and f(x)=x−4, find f(g(2)).", a: "3", accepted: ["3"] },
        { q: "For f(g(x))=1/(x−3), which x-value is not allowed?", a: "3", accepted: ["3", "x=3", "x = 3"] },
        { q: "If f(x)=2x and g(x)=x+1, find g(f(5)).", a: "11", accepted: ["11"] },
        { q: "If f(x)=x²+1 and g(x)=3x, write f(g(x)).", a: "9x^2+1", accepted: ["9x^2+1", "9x²+1", "9x^2 + 1"] },
        { q: "If f(x)=x−2 and g(x)=x², write g(f(x)).", a: "(x-2)^2", accepted: ["(x-2)^2", "(x−2)^2", "(x-2)²"] },
        { q: "If f(x)=1/x and g(x)=x+4, which x-value is not allowed in f(g(x))?", a: "-4", accepted: ["-4", "−4", "x=-4"] },
        { q: "If f(x)=x+1 and g(x)=x−1, simplify f(g(x)).", a: "x", accepted: ["x"] },
        { q: "In (f∘g)(x), which function happens first?", a: "g", accepted: ["g", "g(x)", "function g"] }
      ]
    }
  }
};
