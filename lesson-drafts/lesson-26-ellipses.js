window.COURSE.lessons["ellipses"] = {
  id: "ellipses",
  title: "Ellipses",
  eyebrow: "Lesson 26 · Ellipses",
  standard: "MA.912.GR.7.6 · MA.912.GR.7.7",
  standardText: "Derive and create the equation of an ellipse using key features. Graph and solve mathematical and real-world problems modeled by an ellipse, and interpret key features in context.",
  objective: "Identify, graph, and write standard equations of ellipses using the center, vertices, co-vertices, axes, and foci.",
  estimated: "50–60 min",
  sections: [
    {
      id: "ellipse-shape",
      label: "01",
      title: "Start with the center and axes",
      kicker: "The stretched circle idea",
      body: [
        "An ellipse is an oval-shaped conic section. You can think of it as a circle stretched more in one direction than the other. The center is the middle point of the ellipse, just like the center of a circle. Every important point is measured from that center.",
        "The longer direction is the major axis. Its endpoints are the vertices. The shorter direction is the minor axis. Its endpoints are the co-vertices. If the ellipse is wider than it is tall, the major axis is horizontal. If it is taller than it is wide, the major axis is vertical.",
        "Use the letters a and b for the distances from the center. The value a is always the longer distance, from the center to a vertex. The value b is always the shorter distance, from the center to a co-vertex. That means a > b for an ellipse that is not a circle."
      ],
      formula: "major axis length = 2a   |   minor axis length = 2b   |   a > b",
      diagram: "ellipse-center-axes",
      note: "The whole axis length is twice the center-to-endpoint distance because the center splits each axis into two equal halves.",
      check: {
        prompt: "An ellipse has a horizontal major axis length of 14 and a vertical minor axis length of 8. What are a and b?",
        answer: "a=7,b=4",
        accept: ["a=7,b=4", "a = 7, b = 4", "a=7 and b=4", "a 7 b 4", "7,4"],
        hint: "Cut each full axis length in half. The longer half-length is a."
      }
    },
    {
      id: "standard-equations",
      label: "02",
      title: "Read the standard equation",
      kicker: "Denominators tell the stretch",
      body: [
        "The standard equation of an ellipse centered at (h,k) has two squared terms added together and equal to 1. The center comes from the shifted factors (x-h) and (y-k). This matches what you already know from transformations: x-h moves the graph right h, and y-k moves it up k.",
        "For a horizontal ellipse, the larger denominator sits under the x-term: (x-h)^2/a^2 + (y-k)^2/b^2 = 1. For a vertical ellipse, the larger denominator sits under the y-term: (x-h)^2/b^2 + (y-k)^2/a^2 = 1. The larger denominator shows the major-axis direction.",
        "Do not decide direction from the variable alone. Decide from the larger denominator. For (x-2)^2/9 + (y+1)^2/25 = 1, the larger denominator is 25 under the y-term, so the major axis is vertical and the center is (2,-1)."
      ],
      formula: "horizontal: (x-h)^2/a^2 + (y-k)^2/b^2 = 1   |   vertical: (x-h)^2/b^2 + (y-k)^2/a^2 = 1",
      diagram: "ellipse-standard-equations",
      note: "The denominators are a^2 and b^2, not a and b. Take square roots to get graphing distances.",
      check: {
        prompt: "For (x-3)^2/16 + (y+2)^2/9 = 1, what is the center?",
        answer: "(3,-2)",
        accept: ["(3,-2)", "(3, -2)", "3,-2", "center (3,-2)", "center=(3,-2)", "h=3,k=-2"],
        hint: "Use opposite signs from x - 3 and y + 2."
      }
    },
    {
      id: "vertices-covertices",
      label: "03",
      title: "Plot vertices and co-vertices",
      kicker: "Move from the center",
      body: [
        "Once you know the center, a, b, and the major-axis direction, graph the four endpoint points. Work from the center instead of trying to memorize every point at once. A horizontal ellipse moves left and right by a to reach its vertices, then up and down by b to reach its co-vertices.",
        "A vertical ellipse reverses those movements. Move up and down by a to reach vertices, then left and right by b to reach co-vertices. These four points make a rectangle that helps you sketch the oval. The ellipse touches the rectangle at the middle of each side.",
        "Example: (x-1)^2/36 + (y+2)^2/16 = 1 has center (1,-2), a = 6, and b = 4. Because 36 is under the x-term, the major axis is horizontal. The vertices are (1-6,-2) and (1+6,-2), so (-5,-2) and (7,-2). The co-vertices are (1,-2-4) and (1,-2+4), so (1,-6) and (1,2)."
      ],
      formula: "horizontal vertices: (h ± a,k), co-vertices: (h,k ± b)",
      diagram: "ellipse-vertices-covertices",
      note: "Graphing is mostly careful counting. Square-root the denominators, then move horizontally or vertically from the center.",
      check: {
        prompt: "For center (0,0), horizontal major axis, a=5, and b=3, name the vertices.",
        answer: "(-5,0),(5,0)",
        accept: ["(-5,0),(5,0)", "(5,0),(-5,0)", "(-5, 0) and (5, 0)", "(5, 0) and (-5, 0)", "x=+-5,y=0", "(±5,0)", "(+-5,0)"],
        hint: "A horizontal major axis puts the vertices left and right of the center by a units."
      }
    },
    {
      id: "foci",
      label: "04",
      title: "Locate the foci",
      kicker: "Inside the major axis",
      body: [
        "The foci are two special points inside an ellipse on the major axis. They are not on the oval unless the ellipse has collapsed, and they are not on the minor axis. They sit between the center and the vertices. The distance from the center to each focus is called c.",
        "For ellipses, the relationship is c^2 = a^2 - b^2. This subtraction is different from hyperbolas, where the relationship uses addition. Since a is larger than b, a^2 - b^2 is positive. After finding c^2, take the square root to get c. Keep exact radical values unless a decimal is requested.",
        "If the major axis is horizontal, the foci are (h-c,k) and (h+c,k). If the major axis is vertical, the foci are (h,k-c) and (h,k+c). A calculator can approximate c with the square-root key when needed; no degree or radian angle mode is involved because ellipse focus calculations do not use trig angles."
      ],
      formula: "c^2 = a^2 - b^2   |   horizontal foci: (h ± c,k)   |   vertical foci: (h,k ± c)",
      diagram: "ellipse-foci",
      note: "The foci always follow the major axis. If the ellipse is wider, the foci move left and right. If it is taller, they move up and down.",
      check: {
        prompt: "If a=5 and b=3, find c.",
        answer: "4",
        accept: ["4", "c=4", "sqrt(16)", "√16"],
        hint: "Use c^2 = a^2 - b^2 = 25 - 9."
      }
    },
    {
      id: "write-equations",
      label: "05",
      title: "Write an equation from features",
      kicker: "Choose the direction first",
      body: [
        "When the graph or words give features, write the equation in a fixed order. First identify the center (h,k). Second decide whether the major axis is horizontal or vertical. Third find a from the center to a vertex and b from the center to a co-vertex. Last place a^2 under the variable that matches the major-axis direction.",
        "Suppose an ellipse has center (2,-3), vertices (2,2) and (2,-8), and co-vertices (-1,-3) and (5,-3). The vertices have the same x-coordinate, so the major axis is vertical. From the center to a vertex is 5 units, so a = 5. From the center to a co-vertex is 3 units, so b = 3.",
        "Because the major axis is vertical, a^2 = 25 goes under the y-term and b^2 = 9 goes under the x-term. The equation is (x-2)^2/9 + (y+3)^2/25 = 1. Notice that y+3 means y - (-3), so the center's y-coordinate is -3."
      ],
      formula: "center -> direction -> a and b -> square the distances -> place the larger denominator on the major axis",
      diagram: "ellipse-write-equation",
      note: "If you are given the full axis length instead of endpoints, divide by 2 before squaring.",
      check: {
        prompt: "Write the equation for center (0,0), horizontal major axis, a=6, and b=2.",
        answer: "x^2/36+y^2/4=1",
        accept: ["x^2/36+y^2/4=1", "x²/36+y²/4=1", "x^2 / 36 + y^2 / 4 = 1", "(x^2)/36+(y^2)/4=1", "y^2/4+x^2/36=1"],
        hint: "Horizontal means the larger denominator a^2 goes under x^2."
      }
    },
    {
      id: "applications",
      label: "06",
      title: "Use ellipses in context",
      kicker: "Translate measurements into features",
      body: [
        "Many ellipse applications give total widths, total heights, or focal information. Translate each measurement into a feature before writing an equation. If an arch is 30 feet wide, the horizontal semi-axis is 15. If it is 12 feet tall from center to top, that semi-axis is 12. If the context gives the full height as 24, the semi-axis is again 12.",
        "Some applications use the focus property: for any point on an ellipse, the sum of its distances to the two foci is constant. That constant equals 2a, the major-axis length. This is why whispering galleries and some reflectors use ellipse shapes: paths connected to the two foci have a fixed total length.",
        "After building the equation, interpret the answer in the units of the problem. Domain and range also come from the endpoints. A horizontal ellipse with center (h,k), a, and b has domain h-a <= x <= h+a and range k-b <= y <= k+b. If a decimal approximation is requested, round as directed and use ordinary calculator arithmetic; angle mode is not relevant unless a separate trigonometry question is added."
      ],
      formula: "distance to focus 1 + distance to focus 2 = 2a   |   horizontal domain: h-a <= x <= h+a",
      diagram: "ellipse-applications",
      note: "In context, write what the numbers mean. A coordinate such as x=15 may mean 15 feet right of the center, not just a number on a grid.",
      check: {
        prompt: "An ellipse has foci F1 and F2. For every point P on it, PF1 + PF2 = 20. What is a?",
        answer: "10",
        accept: ["10", "a=10", "a = 10"],
        hint: "The constant sum is 2a, the full major-axis length."
      }
    }
  ],
  examples: [
    {
      title: "Graph from a standard equation",
      problem: "Graph (x-2)^2/25 + (y+1)^2/9 = 1 and identify its key features.",
      steps: [
        "Read the center from the shifted factors. x - 2 gives h = 2, and y + 1 gives k = -1, so the center is (2,-1).",
        "Compare denominators. The larger denominator is 25 under the x-term, so the major axis is horizontal.",
        "Take square roots of the denominators: a = sqrt(25) = 5 and b = sqrt(9) = 3.",
        "Move left and right 5 from the center for the vertices: (2-5,-1) = (-3,-1) and (2+5,-1) = (7,-1).",
        "Move down and up 3 from the center for the co-vertices: (2,-1-3) = (2,-4) and (2,-1+3) = (2,2).",
        "Find the foci with c^2 = a^2 - b^2 = 25 - 9 = 16, so c = 4. The foci are (2-4,-1) = (-2,-1) and (2+4,-1) = (6,-1).",
        "The domain is -3 <= x <= 7 and the range is -4 <= y <= 2. Plot the four endpoints and sketch a smooth horizontal oval through them."
      ]
    },
    {
      title: "Write an equation from vertices and co-vertices",
      problem: "Write the equation of the ellipse with vertices (4,6) and (4,-2), and co-vertices (1,2) and (7,2).",
      steps: [
        "Find the center by averaging opposite endpoints. The vertices have midpoint ((4+4)/2,(6+(-2))/2) = (4,2), so the center is (4,2).",
        "The vertices share x = 4 and move up and down from the center, so the major axis is vertical.",
        "Find a from the center to a vertex: from (4,2) to (4,6) is 4 units, so a = 4.",
        "Find b from the center to a co-vertex: from (4,2) to (1,2) is 3 units, so b = 3.",
        "Square the distances: a^2 = 16 and b^2 = 9.",
        "Because the major axis is vertical, put a^2 under the y-term and b^2 under the x-term.",
        "The equation is (x-4)^2/9 + (y-2)^2/16 = 1."
      ]
    },
    {
      title: "Model an elliptical garden",
      problem: "An elliptical garden is centered at the origin, is 40 meters long east-west, and is 24 meters wide north-south. Write an equation and find the foci.",
      steps: [
        "Place the center at (0,0). East-west is horizontal, and it is the longer direction, so the major axis is horizontal.",
        "The full east-west length is 40 meters, so a = 40/2 = 20.",
        "The full north-south width is 24 meters, so b = 24/2 = 12.",
        "Write the standard equation with a^2 under x^2: x^2/400 + y^2/144 = 1.",
        "Find c using c^2 = a^2 - b^2 = 400 - 144 = 256, so c = 16.",
        "Because the major axis is horizontal, the foci are (-16,0) and (16,0).",
        "Interpretation: the foci are 16 meters west and 16 meters east of the garden's center."
      ]
    }
  ],
  practice: [
    { q: "For x^2/49 + y^2/25 = 1, what is the center?", a: "(0,0)", accepted: ["(0,0)", "(0, 0)", "0,0", "origin", "the origin", "center (0,0)"] },
    { q: "For x^2/49 + y^2/25 = 1, find a and b.", a: "a=7,b=5", accepted: ["a=7,b=5", "a = 7, b = 5", "7,5", "a 7 b 5", "a=7 and b=5"] },
    { q: "For x^2/49 + y^2/25 = 1, is the major axis horizontal or vertical?", a: "horizontal", accepted: ["horizontal", "horiz", "x-axis", "along the x-axis", "left and right"] },
    { q: "For x^2/49 + y^2/25 = 1, name the vertices.", a: "(-7,0),(7,0)", accepted: ["(-7,0),(7,0)", "(7,0),(-7,0)", "(-7, 0) and (7, 0)", "(±7,0)", "(+-7,0)", "x=+-7,y=0"] },
    { q: "For x^2/49 + y^2/25 = 1, name the co-vertices.", a: "(0,-5),(0,5)", accepted: ["(0,-5),(0,5)", "(0,5),(0,-5)", "(0, -5) and (0, 5)", "(0,±5)", "(0,+-5)", "x=0,y=+-5"] },
    { q: "For x^2/49 + y^2/25 = 1, find c.", a: "2sqrt(6)", accepted: ["2sqrt(6)", "2 sqrt(6)", "sqrt(24)", "√24", "2√6", "c=2sqrt(6)"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, what is the center?", a: "(1,-4)", accepted: ["(1,-4)", "(1, -4)", "1,-4", "center (1,-4)", "h=1,k=-4"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, is the major axis horizontal or vertical?", a: "vertical", accepted: ["vertical", "vert", "y-axis", "along the y-axis", "up and down"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, name the vertices.", a: "(1,-10),(1,2)", accepted: ["(1,-10),(1,2)", "(1,2),(1,-10)", "(1, -10) and (1, 2)", "x=1,y=-10 and 2", "(1,-10) and (1,2)"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, name the co-vertices.", a: "(-2,-4),(4,-4)", accepted: ["(-2,-4),(4,-4)", "(4,-4),(-2,-4)", "(-2, -4) and (4, -4)", "x=-2 and 4,y=-4"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, find c.", a: "3sqrt(3)", accepted: ["3sqrt(3)", "3 sqrt(3)", "sqrt(27)", "√27", "3√3", "c=3sqrt(3)"] },
    { q: "For (x-1)^2/9 + (y+4)^2/36 = 1, name the foci.", a: "(1,-4-3sqrt(3)),(1,-4+3sqrt(3))", accepted: ["(1,-4-3sqrt(3)),(1,-4+3sqrt(3))", "(1,-4+3sqrt(3)),(1,-4-3sqrt(3))", "(1, -4 - 3sqrt(3)) and (1, -4 + 3sqrt(3))", "(1,-4-3√3),(1,-4+3√3)"] },
    { q: "Write the equation for center (0,0), horizontal major axis, a=8, b=3.", a: "x^2/64+y^2/9=1", accepted: ["x^2/64+y^2/9=1", "x²/64+y²/9=1", "x^2 / 64 + y^2 / 9 = 1", "y^2/9+x^2/64=1"] },
    { q: "Write the equation for center (0,0), vertical major axis, a=8, b=3.", a: "x^2/9+y^2/64=1", accepted: ["x^2/9+y^2/64=1", "x²/9+y²/64=1", "x^2 / 9 + y^2 / 64 = 1", "y^2/64+x^2/9=1"] },
    { q: "Write the equation for center (2,-1), horizontal major axis, a=5, b=4.", a: "(x-2)^2/25+(y+1)^2/16=1", accepted: ["(x-2)^2/25+(y+1)^2/16=1", "(x−2)^2/25+(y+1)^2/16=1", "(x - 2)^2 / 25 + (y + 1)^2 / 16 = 1", "(y+1)^2/16+(x-2)^2/25=1"] },
    { q: "Write the equation for center (-3,4), vertical major axis, a=6, b=2.", a: "(x+3)^2/4+(y-4)^2/36=1", accepted: ["(x+3)^2/4+(y-4)^2/36=1", "(x + 3)^2 / 4 + (y - 4)^2 / 36 = 1", "(y-4)^2/36+(x+3)^2/4=1"] },
    { q: "An ellipse has major axis length 18 and minor axis length 10. Find a and b.", a: "a=9,b=5", accepted: ["a=9,b=5", "a = 9, b = 5", "9,5", "a 9 b 5", "a=9 and b=5"] },
    { q: "If a=13 and b=5, find c.", a: "12", accepted: ["12", "c=12", "sqrt(144)", "√144"] },
    { q: "If a=10 and b=6, find c.", a: "8", accepted: ["8", "c=8", "sqrt(64)", "√64"] },
    { q: "For a horizontal ellipse centered at (4,1) with a=7, what is the domain?", a: "-3<=x<=11", accepted: ["-3<=x<=11", "−3<=x<=11", "[-3,11]", "[-3, 11]", "from -3 to 11", "-3 to 11"] },
    { q: "For a horizontal ellipse centered at (4,1) with b=2, what is the range?", a: "-1<=y<=3", accepted: ["-1<=y<=3", "−1<=y<=3", "[-1,3]", "[-1, 3]", "from -1 to 3", "-1 to 3"] },
    { q: "For (x+5)^2/16 + (y-2)^2/4 = 1, name the vertices.", a: "(-9,2),(-1,2)", accepted: ["(-9,2),(-1,2)", "(-1,2),(-9,2)", "(-9, 2) and (-1, 2)", "x=-9 and -1,y=2"] },
    { q: "For (x+5)^2/16 + (y-2)^2/4 = 1, name the co-vertices.", a: "(-5,0),(-5,4)", accepted: ["(-5,0),(-5,4)", "(-5,4),(-5,0)", "(-5, 0) and (-5, 4)", "x=-5,y=0 and 4"] },
    { q: "For (x+5)^2/16 + (y-2)^2/4 = 1, find the foci.", a: "(-5-2sqrt(3),2),(-5+2sqrt(3),2)", accepted: ["(-5-2sqrt(3),2),(-5+2sqrt(3),2)", "(-5+2sqrt(3),2),(-5-2sqrt(3),2)", "(-5 - 2sqrt(3), 2) and (-5 + 2sqrt(3), 2)", "(-5-2√3,2),(-5+2√3,2)"] },
    { q: "An ellipse has PF1 + PF2 = 26 for every point P on it. Find a.", a: "13", accepted: ["13", "a=13", "a = 13"] },
    { q: "An elliptical track is 100 meters long along its major axis and 60 meters wide along its minor axis. Find a and b.", a: "a=50,b=30", accepted: ["a=50,b=30", "a = 50, b = 30", "50,30", "a 50 b 30", "a=50 and b=30"] },
    { q: "An ellipse centered at the origin has foci (-4,0) and (4,0), and a=5. Find b.", a: "3", accepted: ["3", "b=3", "sqrt(9)", "√9"] },
    { q: "An ellipse centered at the origin has foci (0,-6) and (0,6), and b=8. Find a.", a: "10", accepted: ["10", "a=10", "sqrt(100)", "√100"] },
    { q: "For x^2/25 + y^2/16 = 1, what is the eccentricity c/a?", a: "3/5", accepted: ["3/5", "0.6", "e=3/5", "c/a=3/5"] },
    { q: "True or false: the foci of an ellipse lie on the minor axis.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
