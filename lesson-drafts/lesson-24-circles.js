window.COURSE.lessons["circles-conic-sections"] = {
  id: "circles-conic-sections",
  title: "Circles",
  eyebrow: "Lesson 24 · Circles",
  standard: "MA.912.GR.7.2 · MA.912.GR.7.3",
  standardText: "Derive and create equations of circles using key features. Graph and solve mathematical and real-world problems modeled by equations of circles, and interpret key features in context.",
  objective: "Write, rewrite, graph, and interpret equations of circles in standard form and general form.",
  estimated: "45-55 min",
  sections: [
    {
      id: "definition-standard-form",
      label: "01",
      title: "Start with the definition",
      kicker: "Every point is the same distance away",
      body: [
        "A circle is the set of all points that are the same distance from one fixed point. The fixed point is the center. The distance from the center to any point on the circle is the radius.",
        "If the center is (h, k) and a point on the circle is (x, y), the horizontal distance is x - h and the vertical distance is y - k. Those two distances form a right triangle with radius r as the hypotenuse.",
        "The Pythagorean Theorem gives (x - h)^2 + (y - k)^2 = r^2. This is the standard form of a circle. The signs inside the parentheses are opposite of the center coordinates because they measure distance from the center."
      ],
      formula: "(x - h)^2 + (y - k)^2 = r^2",
      diagram: "circle-conics-definition-standard-form",
      note: "The right side is r^2, not r. If the equation says r^2 = 25, then the radius is 5.",
      check: {
        prompt: "What is the center of (x - 4)^2 + (y + 3)^2 = 16?",
        answer: "(4,-3)",
        accept: ["(4,-3)", "(4, -3)", "4,-3", "4, -3", "center (4,-3)", "center is (4,-3)", "h=4,k=-3"],
        hint: "Use opposite signs inside the parentheses: x - 4 means h = 4, and y + 3 means k = -3."
      }
    },
    {
      id: "read-center-radius",
      label: "02",
      title: "Read the center and radius",
      kicker: "Pull features from standard form",
      body: [
        "To read a circle quickly, match it to (x - h)^2 + (y - k)^2 = r^2. The center is (h, k), and the radius is the positive square root of the number on the right.",
        "For (x + 2)^2 + (y - 5)^2 = 49, the center is (-2, 5) and the radius is 7. The x-coordinate is -2 because x + 2 is the same as x - (-2).",
        "Sometimes the right side is not a perfect square. If (x - 1)^2 + (y + 4)^2 = 20, the radius is sqrt(20) = 2sqrt(5). Keep that exact value unless a decimal is requested. If you check it with a calculator, no angle mode is involved because there are no trigonometric functions."
      ],
      formula: "center = (h, k),   radius = sqrt(r^2)",
      diagram: "circle-conics-read-center-radius",
      note: "Radius is a distance, so it is always positive. The equation cannot represent a real circle if r^2 is negative.",
      check: {
        prompt: "Find the radius of (x + 1)^2 + (y - 6)^2 = 45.",
        answer: "3sqrt(5)",
        accept: ["3sqrt(5)", "3 sqrt(5)", "3√5", "sqrt(45)", "√45", "radius 3sqrt(5)", "r=3sqrt(5)", "r = 3√5"],
        hint: "The radius is the square root of 45. Simplify sqrt(45) by factoring out 9."
      }
    },
    {
      id: "write-from-features",
      label: "03",
      title: "Write an equation from features",
      kicker: "Put the center in first",
      body: [
        "When the center and radius are given, start with the standard form template. Put h and k into the parentheses, then square the radius for the right side.",
        "If the center is (3, -1) and the radius is 6, write (x - 3)^2 + (y - (-1))^2 = 6^2. Clean up the double negative to get (x - 3)^2 + (y + 1)^2 = 36.",
        "If a point on the circle is given instead of the radius, use the distance formula from the center to that point. For center (1, 2) and point (4, 6), the radius is sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(25) = 5, so r^2 = 25."
      ],
      formula: "center (h,k), radius r -> (x - h)^2 + (y - k)^2 = r^2",
      diagram: "circle-conics-write-from-features",
      note: "You may not need to find r itself. The equation uses r^2, so the squared distance from the center to a point can go directly on the right side.",
      check: {
        prompt: "Write the circle with center (-2, 5) and radius 4.",
        answer: "(x+2)^2+(y-5)^2=16",
        accept: ["(x+2)^2+(y-5)^2=16", "(x + 2)^2 + (y - 5)^2 = 16", "(x-(-2))^2+(y-5)^2=16", "(y-5)^2+(x+2)^2=16", "(x+2)²+(y-5)²=16"],
        hint: "Use opposite signs for the center coordinates and square the radius: 4^2 = 16."
      }
    },
    {
      id: "general-form",
      label: "04",
      title: "Recognize general form",
      kicker: "Expanded circles hide their features",
      body: [
        "A circle may be written in general form: x^2 + y^2 + Dx + Ey + F = 0. This is just standard form after the squares have been expanded and like terms have been collected.",
        "To be a circle in this form, the x^2 and y^2 coefficients must match and have the same sign, and there is no xy term. In this lesson we use equations where those squared coefficients are both 1 after any needed division.",
        "General form does not show the center and radius directly. The x-linear term helps build the x square, and the y-linear term helps build the y square. Completing the square turns the equation back into standard form."
      ],
      formula: "x^2 + y^2 + Dx + Ey + F = 0",
      diagram: "circle-conics-general-form",
      note: "If x^2 and y^2 have different coefficients, the graph is not a circle. It may be another conic section.",
      check: {
        prompt: "Which equation is in circle general form: x^2 + y^2 - 6x + 8y - 11 = 0 or x^2 + 4y^2 = 16?",
        answer: "x^2+y^2-6x+8y-11=0",
        accept: ["x^2+y^2-6x+8y-11=0", "x^2 + y^2 - 6x + 8y - 11 = 0", "the first", "first", "1st", "x²+y²-6x+8y-11=0"],
        hint: "A circle's x^2 and y^2 terms have matching coefficients."
      }
    },
    {
      id: "complete-square",
      label: "05",
      title: "Complete the square",
      kicker: "Build two perfect-square trinomials",
      body: [
        "To convert general form to standard form, group the x terms and y terms, move the constant to the other side, and complete the square twice.",
        "For x^2 + y^2 - 6x + 4y - 12 = 0, group first: (x^2 - 6x) + (y^2 + 4y) = 12. Half of -6 is -3, and (-3)^2 is 9. Half of 4 is 2, and 2^2 is 4.",
        "Add those numbers to both sides: (x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4. Factor the perfect squares: (x - 3)^2 + (y + 2)^2 = 25. Now the center is (3, -2) and the radius is 5."
      ],
      formula: "x^2 + bx -> add (b/2)^2",
      diagram: "circle-conics-complete-square",
      note: "Whatever you add inside the x and y groups must also be added to the other side. That keeps the equation balanced.",
      check: {
        prompt: "What number completes the square for x^2 - 10x?",
        answer: "25",
        accept: ["25", "+25", "add 25", "(−5)^2", "(-5)^2", "5^2"],
        hint: "Take half of -10, then square it."
      }
    },
    {
      id: "graph-and-interpret",
      label: "06",
      title: "Graph and interpret",
      kicker: "Use center, radius, domain, and range",
      body: [
        "To graph a circle, plot the center first. Then move radius units right, left, up, and down to mark four anchor points. Draw a smooth round curve through those points.",
        "For (x - 2)^2 + (y + 1)^2 = 9, the center is (2, -1) and the radius is 3. The anchor points are (5, -1), (-1, -1), (2, 2), and (2, -4).",
        "The domain is the set of x-values the circle reaches: from h - r to h + r. The range is the set of y-values it reaches: from k - r to k + r. Here the domain is -1 <= x <= 5 and the range is -4 <= y <= 2. In a real-world problem, interpret the center and radius using the context, such as the center and reach of a sprinkler or signal."
      ],
      formula: "domain: h - r <= x <= h + r   |   range: k - r <= y <= k + r",
      diagram: "circle-conics-graph-and-interpret",
      note: "Circle graphs are not functions because most x-values inside the circle hit two y-values. That is okay; conic equations can describe relations, not only functions.",
      check: {
        prompt: "For a circle with center (2, -1) and radius 3, what is the domain?",
        answer: "-1<=x<=5",
        accept: ["-1<=x<=5", "-1 <= x <= 5", "[-1,5]", "[-1, 5]", "x from -1 to 5", "between -1 and 5", "-1 to 5"],
        hint: "Use h - r and h + r for the x-values: 2 - 3 and 2 + 3."
      }
    }
  ],
  examples: [
    {
      title: "Read and graph from standard form",
      problem: "Find the center, radius, anchor points, domain, and range of (x + 4)^2 + (y - 2)^2 = 36.",
      steps: [
        "Match the equation to (x - h)^2 + (y - k)^2 = r^2.",
        "The x part is x + 4, so h = -4. The y part is y - 2, so k = 2.",
        "The center is (-4, 2).",
        "The right side is 36, so r = sqrt(36) = 6.",
        "Move 6 units from the center: right (2, 2), left (-10, 2), up (-4, 8), and down (-4, -4).",
        "Domain: -4 - 6 <= x <= -4 + 6, so -10 <= x <= 2.",
        "Range: 2 - 6 <= y <= 2 + 6, so -4 <= y <= 8."
      ]
    },
    {
      title: "Complete the square from general form",
      problem: "Rewrite x^2 + y^2 + 8x - 10y + 16 = 0 in standard form. Then identify the center and radius.",
      steps: [
        "Group the variable terms and move the constant: (x^2 + 8x) + (y^2 - 10y) = -16.",
        "Complete the x square: half of 8 is 4, and 4^2 = 16.",
        "Complete the y square: half of -10 is -5, and (-5)^2 = 25.",
        "Add 16 and 25 to both sides: (x^2 + 8x + 16) + (y^2 - 10y + 25) = -16 + 16 + 25.",
        "Factor the perfect squares: (x + 4)^2 + (y - 5)^2 = 25.",
        "Read the features: center (-4, 5), radius sqrt(25) = 5.",
        "Because the radius is exact and positive, no calculator is needed."
      ]
    },
    {
      title: "Write an equation from geometric information",
      problem: "A circle has diameter endpoints A(-3, 7) and B(5, 1). Write its equation.",
      steps: [
        "The center is the midpoint of the diameter.",
        "Average the x-coordinates: (-3 + 5)/2 = 1.",
        "Average the y-coordinates: (7 + 1)/2 = 4, so the center is (1, 4).",
        "Use the squared distance from the center to one endpoint for r^2: (-3 - 1)^2 + (7 - 4)^2.",
        "Compute: (-4)^2 + 3^2 = 16 + 9 = 25.",
        "Place the center and r^2 into standard form: (x - 1)^2 + (y - 4)^2 = 25.",
        "The radius would be 5, which is half the diameter length."
      ]
    }
  ],
  practice: [
    { q: "Find the center of (x - 6)^2 + (y + 2)^2 = 81.", a: "(6,-2)", accepted: ["(6,-2)", "(6, -2)", "6,-2", "6, -2", "center (6,-2)", "h=6,k=-2"] },
    { q: "Find the radius of (x - 6)^2 + (y + 2)^2 = 81.", a: "9", accepted: ["9", "r=9", "radius 9"] },
    { q: "Write the circle with center (0, 0) and radius 5.", a: "x^2+y^2=25", accepted: ["x^2+y^2=25", "x²+y²=25", "y^2+x^2=25", "x^2 + y^2 = 25"] },
    { q: "Write the circle with center (3, -4) and radius 2.", a: "(x-3)^2+(y+4)^2=4", accepted: ["(x-3)^2+(y+4)^2=4", "(x - 3)^2 + (y + 4)^2 = 4", "(y+4)^2+(x-3)^2=4", "(x-3)²+(y+4)²=4"] },
    { q: "Find the center of (x + 7)^2 + (y - 1)^2 = 12.", a: "(-7,1)", accepted: ["(-7,1)", "(-7, 1)", "-7,1", "-7, 1", "center (-7,1)", "h=-7,k=1"] },
    { q: "Find the exact radius of (x + 7)^2 + (y - 1)^2 = 12.", a: "2sqrt(3)", accepted: ["2sqrt(3)", "2 sqrt(3)", "2√3", "sqrt(12)", "√12", "r=2sqrt(3)", "radius 2√3"] },
    { q: "For x^2 + y^2 - 4x + 6y - 12 = 0, what number completes the x square?", a: "4", accepted: ["4", "+4", "add 4", "2^2"] },
    { q: "For x^2 + y^2 - 4x + 6y - 12 = 0, what number completes the y square?", a: "9", accepted: ["9", "+9", "add 9", "3^2", "(-3)^2"] },
    { q: "Rewrite x^2 + y^2 - 4x + 6y - 12 = 0 in standard form.", a: "(x-2)^2+(y+3)^2=25", accepted: ["(x-2)^2+(y+3)^2=25", "(x - 2)^2 + (y + 3)^2 = 25", "(y+3)^2+(x-2)^2=25", "(x-2)²+(y+3)²=25"] },
    { q: "Find the center of x^2 + y^2 - 4x + 6y - 12 = 0.", a: "(2,-3)", accepted: ["(2,-3)", "(2, -3)", "2,-3", "2, -3", "center (2,-3)", "h=2,k=-3"] },
    { q: "Find the radius of x^2 + y^2 - 4x + 6y - 12 = 0.", a: "5", accepted: ["5", "r=5", "radius 5"] },
    { q: "What is the general form of (x - 1)^2 + (y + 2)^2 = 16?", a: "x^2+y^2-2x+4y-11=0", accepted: ["x^2+y^2-2x+4y-11=0", "x^2 + y^2 - 2x + 4y - 11 = 0", "x²+y²-2x+4y-11=0", "y^2+x^2+4y-2x-11=0"] },
    { q: "A circle has center (4, 1) and passes through (7, 5). What is r^2?", a: "25", accepted: ["25", "r^2=25", "r²=25"] },
    { q: "Write the circle with center (4, 1) passing through (7, 5).", a: "(x-4)^2+(y-1)^2=25", accepted: ["(x-4)^2+(y-1)^2=25", "(x - 4)^2 + (y - 1)^2 = 25", "(y-1)^2+(x-4)^2=25", "(x-4)²+(y-1)²=25"] },
    { q: "A diameter has endpoints (-2, 3) and (6, 3). What is the center?", a: "(2,3)", accepted: ["(2,3)", "(2, 3)", "2,3", "2, 3", "center (2,3)"] },
    { q: "A diameter has endpoints (-2, 3) and (6, 3). What is the radius?", a: "4", accepted: ["4", "r=4", "radius 4"] },
    { q: "Write the equation for the circle with diameter endpoints (-2, 3) and (6, 3).", a: "(x-2)^2+(y-3)^2=16", accepted: ["(x-2)^2+(y-3)^2=16", "(x - 2)^2 + (y - 3)^2 = 16", "(y-3)^2+(x-2)^2=16", "(x-2)²+(y-3)²=16"] },
    { q: "For (x + 1)^2 + (y - 2)^2 = 9, name the right anchor point.", a: "(2,2)", accepted: ["(2,2)", "(2, 2)", "2,2", "2, 2", "right point (2,2)", "right anchor (2,2)"] },
    { q: "For (x + 1)^2 + (y - 2)^2 = 9, give the domain.", a: "-4<=x<=2", accepted: ["-4<=x<=2", "-4 <= x <= 2", "[-4,2]", "[-4, 2]", "x from -4 to 2", "-4 to 2"] },
    { q: "For (x + 1)^2 + (y - 2)^2 = 9, give the range.", a: "-1<=y<=5", accepted: ["-1<=y<=5", "-1 <= y <= 5", "[-1,5]", "[-1, 5]", "y from -1 to 5", "-1 to 5"] },
    { q: "Does x^2 + y^2 + 2x - 8y + 10 = 0 represent a real circle? Answer yes or no.", a: "yes", accepted: ["yes", "y", "true", "it does", "real circle"] },
    { q: "Rewrite x^2 + y^2 + 2x - 8y + 10 = 0 in standard form.", a: "(x+1)^2+(y-4)^2=7", accepted: ["(x+1)^2+(y-4)^2=7", "(x + 1)^2 + (y - 4)^2 = 7", "(y-4)^2+(x+1)^2=7", "(x+1)²+(y-4)²=7"] },
    { q: "Find the exact radius of x^2 + y^2 + 2x - 8y + 10 = 0.", a: "sqrt(7)", accepted: ["sqrt(7)", "√7", "r=sqrt(7)", "radius sqrt(7)", "radius √7"] },
    { q: "A sprinkler centered at (10, 12) reaches 6 feet. Write the boundary circle equation.", a: "(x-10)^2+(y-12)^2=36", accepted: ["(x-10)^2+(y-12)^2=36", "(x - 10)^2 + (y - 12)^2 = 36", "(y-12)^2+(x-10)^2=36", "(x-10)²+(y-12)²=36"] },
    { q: "For a circle centered at (10, 12) with radius 6, what x-values are reached?", a: "4<=x<=16", accepted: ["4<=x<=16", "4 <= x <= 16", "[4,16]", "[4, 16]", "x from 4 to 16", "4 to 16"] },
    { q: "Which coefficient check helps identify a circle in general form?", a: "x^2 and y^2 coefficients match", accepted: ["x^2 and y^2 coefficients match", "x² and y² coefficients match", "same coefficients on x^2 and y^2", "matching x^2 and y^2 coefficients", "equal squared coefficients"] }
  ]
};
