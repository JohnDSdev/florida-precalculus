window.COURSE.lessons["hyperbolas"] = {
  id: "hyperbolas",
  title: "Hyperbolas",
  eyebrow: "Lesson 27 · Hyperbolas",
  standard: "MA.912.GR.7.8 · MA.912.GR.7.9",
  standardText: "Derive and create equations of hyperbolas using key features, and graph and solve mathematical and real-world problems modeled with equations of hyperbolas.",
  objective: "Identify, write, graph, and interpret hyperbolas using centers, vertices, axes, foci, asymptotes, and standard equations.",
  estimated: "50–60 min",
  sections: [
    {
      id: "definition-and-features",
      label: "01",
      title: "See what a hyperbola measures",
      kicker: "A constant difference",
      body: [
        "A hyperbola is the set of all points whose distances from two fixed points have a constant difference. The two fixed points are the foci. If a point P is on the hyperbola, then the positive difference between its distances to the foci stays the same: |PF1 − PF2| = constant.",
        "The graph has two separate curved branches. The center is halfway between the foci and halfway between the vertices. The vertices are the closest points on the two branches. The transverse axis is the line through the center, vertices, and foci. The conjugate axis is perpendicular to the transverse axis and helps build the guide rectangle for the asymptotes.",
        "The number a is the distance from the center to each vertex, so the total length of the transverse axis is 2a. The number b is the distance from the center along the conjugate direction. The number c is the distance from the center to each focus. For every standard hyperbola, c^2 = a^2 + b^2, so the foci are farther from the center than the vertices."
      ],
      formula: "|PF1 − PF2| = 2a   |   c^2 = a^2 + b^2",
      diagram: "hyperbola-definition-features",
      note: "For an ellipse, distances to the foci add to a constant. For a hyperbola, distances to the foci differ by a constant.",
      check: {
        prompt: "A hyperbola has center (0,0), vertices (−5,0) and (5,0). What is a?",
        answer: "5",
        accept: ["5", "a=5", "a = 5"],
        hint: "a is the distance from the center to one vertex, not the distance between both vertices."
      }
    },
    {
      id: "standard-equations",
      label: "02",
      title: "Choose the correct standard form",
      kicker: "Which squared term is positive?",
      body: [
        "A hyperbola centered at (h,k) has one squared term subtracted from the other. The positive squared term tells you the direction the branches open. If the x-term is positive, the transverse axis is horizontal and the branches open left and right. If the y-term is positive, the transverse axis is vertical and the branches open up and down.",
        "The horizontal form is (x − h)^2/a^2 − (y − k)^2/b^2 = 1. Its vertices are (h − a,k) and (h + a,k). The vertical form is (y − k)^2/a^2 − (x − h)^2/b^2 = 1. Its vertices are (h,k − a) and (h,k + a). Notice that a^2 is always under the positive term, even when a^2 is smaller than b^2.",
        "To read a hyperbola, first locate the center from (x − h) and (y − k). Then decide whether the x-term or y-term is positive. Finally take square roots of the denominators to get a and b. Do not choose a by looking for the larger denominator; choose a from the positive term."
      ],
      formula: "(x−h)^2/a^2 − (y−k)^2/b^2 = 1   |   (y−k)^2/a^2 − (x−h)^2/b^2 = 1",
      diagram: "hyperbola-standard-equations",
      note: "In a hyperbola, a is tied to the transverse axis. It is not automatically the larger number.",
      check: {
        prompt: "Does (y−2)^2/16 − (x+1)^2/9 = 1 open horizontally or vertically?",
        answer: "vertically",
        accept: ["vertically", "vertical", "up and down", "opens up and down"],
        hint: "The y-term is positive, so the transverse axis is vertical."
      }
    },
    {
      id: "foci-and-asymptotes",
      label: "03",
      title: "Find foci and asymptotes",
      kicker: "Use c and the guide rectangle",
      body: [
        "The foci lie on the transverse axis, so they move in the same direction as the vertices. For a horizontal hyperbola, the foci are (h − c,k) and (h + c,k). For a vertical hyperbola, the foci are (h,k − c) and (h,k + c). Find c from c^2 = a^2 + b^2, then take the positive square root.",
        "Asymptotes are slanted guide lines that the branches approach but do not cross in the basic graphing model. Build them from a rectangle centered at (h,k). Move a units in the transverse direction and b units in the conjugate direction. Draw the diagonals through that rectangle; those diagonals are the asymptotes.",
        "For a horizontal hyperbola, the asymptotes are y − k = ±(b/a)(x − h). For a vertical hyperbola, the asymptotes are y − k = ±(a/b)(x − h). The fraction is the rise over run from the center to a corner of the guide rectangle. Keep exact radicals for c when it is not a perfect square."
      ],
      formula: "horizontal: y−k = ±(b/a)(x−h)   |   vertical: y−k = ±(a/b)(x−h)",
      diagram: "hyperbola-foci-asymptotes",
      note: "No angle mode is needed to find these slopes. Use exact square roots unless a decimal approximation is requested.",
      check: {
        prompt: "For x^2/9 − y^2/16 = 1, find c.",
        answer: "5",
        accept: ["5", "c=5", "c = 5"],
        hint: "Here a^2 = 9 and b^2 = 16, so c^2 = 9 + 16."
      }
    },
    {
      id: "graph-from-equation",
      label: "04",
      title: "Graph from an equation",
      kicker: "Center, box, branches",
      body: [
        "A reliable graphing routine has four steps. First mark the center. Second mark the vertices by moving a units from the center along the transverse axis. Third build the guide rectangle by moving a in the transverse direction and b in the conjugate direction. Fourth draw the asymptotes through opposite corners of the rectangle.",
        "After the guides are in place, sketch each branch starting at a vertex and bending toward the asymptotes. If the x-term is positive, draw left and right branches. If the y-term is positive, draw up and down branches. The graph never includes the center, because the center lies between the two branches.",
        "Domain and range follow from the branch direction. A horizontal hyperbola has x-values at or beyond the vertices, so its domain is x ≤ h − a or x ≥ h + a. Its range is all real y-values. A vertical hyperbola has all real x-values and y ≤ k − a or y ≥ k + a."
      ],
      formula: "horizontal domain: x ≤ h−a or x ≥ h+a   |   vertical range: y ≤ k−a or y ≥ k+a",
      diagram: "hyperbola-graphing-routine",
      note: "The guide rectangle and asymptotes are construction tools. They organize the sketch before you draw the curves.",
      check: {
        prompt: "For (x−2)^2/25 − (y+1)^2/9 = 1, list the vertices.",
        answer: "(-3,-1) and (7,-1)",
        accept: ["(-3,-1) and (7,-1)", "(7,-1) and (-3,-1)", "(-3, -1), (7, -1)", "(7, -1), (-3, -1)", "(-3,-1),(7,-1)", "(7,-1),(-3,-1)"],
        hint: "The center is (2,−1), the hyperbola is horizontal, and a = 5."
      }
    },
    {
      id: "write-equations",
      label: "05",
      title: "Write an equation from features",
      kicker: "Features become parameters",
      body: [
        "When features are given, translate them into h, k, a, b, and c. The center gives (h,k). The vertices show the transverse direction and give a. The foci also lie on the transverse axis and give c. Once a and c are known, find b from b^2 = c^2 − a^2.",
        "Choose the form from the direction. If the vertices differ in x but have the same y, use the horizontal form. If the vertices differ in y but have the same x, use the vertical form. Then substitute a^2 and b^2 into the correct denominators. Leave the right side equal to 1.",
        "Example setup: center (1,−2), vertices (1,2) and (1,−6), and foci (1,3) and (1,−7). The shared x-value means the hyperbola is vertical. The distance from center to vertex is a = 4, so a^2 = 16. The distance from center to focus is c = 5, so b^2 = 25 − 16 = 9. The equation is (y + 2)^2/16 − (x − 1)^2/9 = 1."
      ],
      formula: "given a and c: b^2 = c^2 − a^2",
      diagram: "hyperbola-write-equation",
      note: "Check the sign inside each parenthesis: center (h,k) appears as x − h and y − k.",
      check: {
        prompt: "A hyperbola has center (0,0), vertices (0,−3) and (0,3), and foci (0,−5) and (0,5). What is b^2?",
        answer: "16",
        accept: ["16", "b^2=16", "b²=16", "b^2 = 16"],
        hint: "a = 3 and c = 5. Use b^2 = c^2 − a^2."
      }
    },
    {
      id: "applications-and-interpretation",
      label: "06",
      title: "Interpret hyperbola applications",
      kicker: "The model has meaning",
      body: [
        "Hyperbolas appear when a situation fixes a difference of distances. In navigation, sound location, and signal timing, two stations can receive a signal at different times. If the signal speed is known, the time difference gives a distance difference. The possible source locations form one branch of a hyperbola with the stations as foci.",
        "The equation still tells a story. The center is the midpoint between the two stations. The vertices mark the smallest possible locations on the transverse axis that match the distance difference. The foci are the station locations. The asymptotes describe the long-range direction of the possible source path.",
        "Use units and reasonableness checks. If the distance difference is 2a, then a is half of that difference. The focus distance c is half the distance between the stations. A real hyperbola requires c > a, because the distance difference between two points cannot exceed the distance between the foci. For decimal approximations, no angle mode is involved; round lengths only as the context requests."
      ],
      formula: "distance difference = 2a   |   station spacing = 2c   |   b^2 = c^2 − a^2",
      diagram: "hyperbola-applications",
      note: "In applications, name what each feature means. A correct equation without interpretation is only part of the answer.",
      check: {
        prompt: "Two listening stations are 20 miles apart, so c = 10. A signal has distance difference 12 miles, so 2a = 12. What is a?",
        answer: "6",
        accept: ["6", "a=6", "a = 6", "6 miles"],
        hint: "The distance difference equals 2a, so divide 12 by 2."
      }
    }
  ],
  examples: [
    {
      title: "Graph and identify key features",
      problem: "For (x−1)^2/16 − (y+2)^2/9 = 1, find the center, vertices, foci, and asymptotes.",
      steps: [
        "Compare the equation with (x−h)^2/a^2 − (y−k)^2/b^2 = 1. The center is (h,k) = (1,−2).",
        "The x-term is positive, so the hyperbola opens left and right. Here a^2 = 16, so a = 4, and b^2 = 9, so b = 3.",
        "Move 4 units left and right from the center to find the vertices: (1−4,−2) and (1+4,−2), which are (−3,−2) and (5,−2).",
        "Find c using c^2 = a^2 + b^2 = 16 + 9 = 25, so c = 5.",
        "Move 5 units left and right from the center to find the foci: (1−5,−2) and (1+5,−2), which are (−4,−2) and (6,−2).",
        "Use the horizontal asymptote formula y−k = ±(b/a)(x−h): y + 2 = ±(3/4)(x − 1).",
        "To sketch, plot the center, vertices, and guide rectangle with half-width 4 and half-height 3, draw the asymptotes, then draw two branches opening left and right from the vertices."
      ]
    },
    {
      title: "Write an equation from vertices and foci",
      problem: "A hyperbola has vertices (2,−1) and (2,7), and foci (2,−3) and (2,9). Write its standard equation.",
      steps: [
        "The center is the midpoint of the vertices: x = 2 and y = (−1 + 7)/2 = 3, so the center is (2,3).",
        "The vertices have the same x-value and different y-values, so the transverse axis is vertical.",
        "Find a from center to vertex: from (2,3) to (2,7) is 4 units, so a = 4 and a^2 = 16.",
        "Find c from center to focus: from (2,3) to (2,9) is 6 units, so c = 6 and c^2 = 36.",
        "Use b^2 = c^2 − a^2 = 36 − 16 = 20.",
        "Use the vertical form (y−k)^2/a^2 − (x−h)^2/b^2 = 1.",
        "Substitute h = 2, k = 3, a^2 = 16, and b^2 = 20: (y−3)^2/16 − (x−2)^2/20 = 1."
      ]
    },
    {
      title: "Model a signal-location application",
      problem: "Two receivers are at (−10,0) and (10,0), measured in miles. A sound reaches one receiver 12 miles of travel before the other. Write a hyperbola model for the possible source locations.",
      steps: [
        "The receivers are the foci, so the center is their midpoint: (0,0). The transverse axis is horizontal because the foci lie on a horizontal line.",
        "The distance from center to each focus is c = 10.",
        "The difference of distances equals 2a. The problem gives a 12-mile difference, so 2a = 12 and a = 6.",
        "Compute b^2 from b^2 = c^2 − a^2 = 10^2 − 6^2 = 100 − 36 = 64.",
        "Use the horizontal form x^2/a^2 − y^2/b^2 = 1 because the center is (0,0) and the transverse axis is horizontal.",
        "Substitute a^2 = 36 and b^2 = 64: x^2/36 − y^2/64 = 1.",
        "Interpretation: this equation gives both possible branches. Extra information, such as which receiver heard the sound first, would choose the right or left branch."
      ]
    }
  ],
  practice: [
    { q: "For x^2/25 − y^2/9 = 1, what is the center?", a: "(0,0)", accepted: ["(0,0)", "(0, 0)", "origin", "the origin"] },
    { q: "For x^2/25 − y^2/9 = 1, what is a?", a: "5", accepted: ["5", "a=5", "a = 5"] },
    { q: "For x^2/25 − y^2/9 = 1, what is b?", a: "3", accepted: ["3", "b=3", "b = 3"] },
    { q: "For x^2/25 − y^2/9 = 1, list the vertices.", a: "(-5,0) and (5,0)", accepted: ["(-5,0) and (5,0)", "(5,0) and (-5,0)", "(-5, 0), (5, 0)", "(5, 0), (-5, 0)", "(-5,0),(5,0)", "(5,0),(-5,0)"] },
    { q: "For x^2/25 − y^2/9 = 1, find c.", a: "sqrt(34)", accepted: ["sqrt(34)", "√34", "c=sqrt(34)", "c=√34", "sqrt(25+9)"] },
    { q: "For x^2/25 − y^2/9 = 1, write the asymptotes.", a: "y=±(3/5)x", accepted: ["y=±(3/5)x", "y=+/-(3/5)x", "y=3x/5 and y=-3x/5", "y=3/5x and y=-3/5x", "y=(3/5)x and y=-(3/5)x"] },
    { q: "For y^2/16 − x^2/4 = 1, does the hyperbola open horizontally or vertically?", a: "vertically", accepted: ["vertically", "vertical", "up and down", "opens up and down"] },
    { q: "For y^2/16 − x^2/4 = 1, list the vertices.", a: "(0,-4) and (0,4)", accepted: ["(0,-4) and (0,4)", "(0,4) and (0,-4)", "(0, -4), (0, 4)", "(0,4),(0,-4)", "(0,-4),(0,4)"] },
    { q: "For y^2/16 − x^2/4 = 1, find c.", a: "2sqrt(5)", accepted: ["2sqrt(5)", "2√5", "sqrt(20)", "√20", "c=2sqrt(5)", "c=2√5"] },
    { q: "For y^2/16 − x^2/4 = 1, write the asymptotes.", a: "y=±2x", accepted: ["y=±2x", "y=+/-2x", "y=2x and y=-2x", "y=2x,y=-2x", "y = 2x and y = -2x"] },
    { q: "For (x−3)^2/4 − (y+1)^2/16 = 1, what is the center?", a: "(3,-1)", accepted: ["(3,-1)", "(3, -1)", "3,-1", "center (3,-1)", "center is (3,-1)"] },
    { q: "For (x−3)^2/4 − (y+1)^2/16 = 1, list the vertices.", a: "(1,-1) and (5,-1)", accepted: ["(1,-1) and (5,-1)", "(5,-1) and (1,-1)", "(1, -1), (5, -1)", "(1,-1),(5,-1)", "(5,-1),(1,-1)"] },
    { q: "For (x−3)^2/4 − (y+1)^2/16 = 1, find b.", a: "4", accepted: ["4", "b=4", "b = 4"] },
    { q: "For (x−3)^2/4 − (y+1)^2/16 = 1, write the asymptotes.", a: "y+1=±2(x−3)", accepted: ["y+1=±2(x-3)", "y+1=±2(x−3)", "y+1=+/-2(x-3)", "y+1=2(x-3) and y+1=-2(x-3)", "y + 1 = 2(x - 3) and y + 1 = -2(x - 3)"] },
    { q: "For (y−4)^2/9 − (x+2)^2/25 = 1, what is the center?", a: "(-2,4)", accepted: ["(-2,4)", "(−2,4)", "(-2, 4)", "center (-2,4)", "center is (-2,4)"] },
    { q: "For (y−4)^2/9 − (x+2)^2/25 = 1, list the vertices.", a: "(-2,1) and (-2,7)", accepted: ["(-2,1) and (-2,7)", "(-2,7) and (-2,1)", "(−2,1) and (−2,7)", "(-2, 1), (-2, 7)", "(-2,1),(-2,7)"] },
    { q: "For (y−4)^2/9 − (x+2)^2/25 = 1, find c.", a: "sqrt(34)", accepted: ["sqrt(34)", "√34", "c=sqrt(34)", "c=√34"] },
    { q: "For (y−4)^2/9 − (x+2)^2/25 = 1, write the asymptotes.", a: "y−4=±(3/5)(x+2)", accepted: ["y-4=±(3/5)(x+2)", "y−4=±(3/5)(x+2)", "y-4=+/-(3/5)(x+2)", "y-4=(3/5)(x+2) and y-4=-(3/5)(x+2)", "y - 4 = (3/5)(x + 2) and y - 4 = -(3/5)(x + 2)"] },
    { q: "A hyperbola has center (0,0), vertices (−4,0) and (4,0), and foci (−6,0) and (6,0). Write its equation.", a: "x^2/16-y^2/20=1", accepted: ["x^2/16-y^2/20=1", "x²/16−y²/20=1", "x^2/16 - y^2/20 = 1", "(x^2)/16-(y^2)/20=1"] },
    { q: "A hyperbola has center (1,2), vertices (1,−1) and (1,5), and b = 4. Write its equation.", a: "(y-2)^2/9-(x-1)^2/16=1", accepted: ["(y-2)^2/9-(x-1)^2/16=1", "(y−2)^2/9−(x−1)^2/16=1", "(y - 2)^2/9 - (x - 1)^2/16 = 1", "(y-2)²/9-(x-1)²/16=1"] },
    { q: "A horizontal hyperbola has center (2,−3), a = 5, and b = 2. Write its equation.", a: "(x-2)^2/25-(y+3)^2/4=1", accepted: ["(x-2)^2/25-(y+3)^2/4=1", "(x−2)^2/25−(y+3)^2/4=1", "(x - 2)^2/25 - (y + 3)^2/4 = 1", "(x-2)²/25-(y+3)²/4=1"] },
    { q: "A vertical hyperbola has center (−1,0), a = 6, and b = 1. Write its equation.", a: "y^2/36-(x+1)^2=1", accepted: ["y^2/36-(x+1)^2=1", "y²/36−(x+1)²=1", "y^2/36-(x+1)^2/1=1", "(y^2)/36-(x+1)^2=1", "y^2/36 - (x + 1)^2 = 1"] },
    { q: "If a hyperbola has distance difference 18, what is a?", a: "9", accepted: ["9", "a=9", "a = 9"] },
    { q: "If two foci are 30 miles apart, what is c?", a: "15", accepted: ["15", "c=15", "c = 15", "15 miles"] },
    { q: "For a signal model with foci at (−13,0) and (13,0) and distance difference 10, write b^2.", a: "144", accepted: ["144", "b^2=144", "b²=144", "b^2 = 144"] },
    { q: "For a horizontal hyperbola centered at (0,0) with a = 3, what is its domain?", a: "x≤−3 or x≥3", accepted: ["x<=-3 or x>=3", "x≤−3 or x≥3", "x <= -3 or x >= 3", "(-infinity,-3] union [3,infinity)", "(-∞,-3] U [3,∞)"] },
    { q: "For a vertical hyperbola centered at (0,0) with a = 2, what is its range?", a: "y≤−2 or y≥2", accepted: ["y<=-2 or y>=2", "y≤−2 or y≥2", "y <= -2 or y >= 2", "(-infinity,-2] union [2,infinity)", "(-∞,-2] U [2,∞)"] },
    { q: "Which axis contains the center, vertices, and foci of a hyperbola?", a: "transverse axis", accepted: ["transverse axis", "the transverse axis", "transverse"] },
    { q: "Which axis is perpendicular to the transverse axis and helps form the guide rectangle?", a: "conjugate axis", accepted: ["conjugate axis", "the conjugate axis", "conjugate"] },
    { q: "True or false: In a hyperbola, c^2 = a^2 + b^2.", a: "true", accepted: ["true", "yes", "t", "c^2=a^2+b^2", "c²=a²+b²"] },
    { q: "True or false: The larger denominator in a hyperbola is always a^2.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
