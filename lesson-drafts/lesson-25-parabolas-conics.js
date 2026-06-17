window.COURSE.lessons["parabolas-conic-sections"] = {
  id: "parabolas-conic-sections",
  title: "Parabolas as conic sections",
  eyebrow: "Lesson 25 · Parabolas as conic sections",
  standard: "MA.912.GR.7.4 · MA.912.GR.7.5",
  standardText: "Derive and create equations of parabolas using key features; graph and solve mathematical and real-world problems modeled by parabolas, interpreting focus, focal width, vertex and directrix in context.",
  objective: "Use the focus-directrix definition to write, graph and interpret vertical and horizontal parabolas as conic sections.",
  estimated: "50–60 min",
  sections: [
    {
      id: "focus-directrix-definition",
      label: "01",
      title: "Define a parabola by equal distances",
      kicker: "One point and one line",
      body: [
        "A conic-section parabola is the set of all points that are the same distance from a fixed point and a fixed line. The fixed point is the focus. The fixed line is the directrix. If a point P is on the parabola, then its distance to the focus equals its perpendicular distance to the directrix.",
        "This definition is more precise than saying a parabola is a U-shape. The focus and directrix control the exact location and width of the curve. Points closer to the focus must also be closer to the directrix; points farther from the focus must also be farther from the directrix.",
        "For a vertical parabola with vertex at the origin, focus (0,p), and directrix y = -p, a point (x,y) on the curve satisfies sqrt(x^2 + (y - p)^2) = |y + p|. Squaring both sides and simplifying gives x^2 = 4py. This is the standard conic form, not just a quadratic function form."
      ],
      formula: "distance to focus = distance to directrix   |   x^2 = 4py",
      diagram: "parabola-conics-focus-directrix-definition",
      note: "The distance to a line is measured straight toward the line at a right angle, not diagonally to a random point on the line.",
      check: {
        prompt: "What fixed point is used to define a parabola?",
        answer: "focus",
        accept: ["focus", "the focus", "fixed point", "the fixed point"],
        hint: "The directrix is the fixed line. The fixed point has a different name."
      }
    },
    {
      id: "vertex-axis-and-p",
      label: "02",
      title: "Locate the vertex, axis and p-value",
      kicker: "The midpoint tells the direction",
      body: [
        "The vertex sits halfway between the focus and the directrix. If the focus is (h, k + p) and the directrix is y = k - p, then the vertex is (h,k). The signed value p measures the directed distance from the vertex to the focus.",
        "The axis of symmetry passes through the focus and vertex and is perpendicular to the directrix. For a vertical parabola, the axis is x = h. For a horizontal parabola, the axis is y = k. The sign of p tells the opening direction: p > 0 opens up or right, and p < 0 opens down or left.",
        "The distance |p| also controls the width. The latus rectum, or focal width, has length |4p|. A larger |p| makes a wider parabola. A smaller |p| makes a narrower parabola."
      ],
      formula: "vertex = halfway between focus and directrix   |   focal width = |4p|",
      diagram: "parabola-conics-vertex-axis-p",
      note: "Use signed p in the equation, but use |p| for a distance or width.",
      check: {
        prompt: "A parabola has vertex (2,3) and focus (2,7). What is p?",
        answer: "4",
        accept: ["4", "p=4", "p = 4", "+4"],
        hint: "The focus is 4 units above the vertex, so p is positive."
      }
    },
    {
      id: "vertical-standard-form",
      label: "03",
      title: "Use vertical standard form",
      kicker: "The x part is squared",
      body: [
        "A vertical parabola opens up or down. Its standard conic form is (x - h)^2 = 4p(y - k). The vertex is (h,k), the axis is x = h, the focus is (h, k + p), and the directrix is y = k - p.",
        "To read the equation, first identify h and k from the shifted factors. Then compare the coefficient on (y - k) with 4p. For example, (x - 1)^2 = 12(y + 2) has h = 1, k = -2, and 4p = 12, so p = 3. The focus is (1,1), the directrix is y = -5, and the parabola opens up.",
        "If the right side is negative, p is negative and the parabola opens down. For (x + 4)^2 = -8(y - 6), h = -4, k = 6, and 4p = -8, so p = -2. The focus is (-4,4), and the directrix is y = 8."
      ],
      formula: "(x - h)^2 = 4p(y - k)",
      diagram: "parabola-conics-vertical-standard-form",
      note: "The squared variable is not the opening direction. If x is squared, the parabola opens vertically.",
      check: {
        prompt: "For (x - 3)^2 = -16(y + 1), what is p?",
        answer: "-4",
        accept: ["-4", "−4", "p=-4", "p = -4", "negative 4"],
        hint: "Compare -16 with 4p, then divide by 4."
      }
    },
    {
      id: "horizontal-standard-form",
      label: "04",
      title: "Use horizontal standard form",
      kicker: "The y part is squared",
      body: [
        "A horizontal parabola opens right or left. Its standard conic form is (y - k)^2 = 4p(x - h). The vertex is still (h,k), the axis is y = k, the focus is (h + p, k), and the directrix is x = h - p.",
        "The same 4p idea works, but now p moves horizontally. For (y + 2)^2 = 20(x - 5), h = 5, k = -2, and 4p = 20, so p = 5. The focus is (10,-2), the directrix is x = 0, and the parabola opens right.",
        "When p is negative, the horizontal parabola opens left. For (y - 1)^2 = -12(x + 3), h = -3, k = 1, and p = -3. The focus is (-6,1), and the directrix is x = 0."
      ],
      formula: "(y - k)^2 = 4p(x - h)",
      diagram: "parabola-conics-horizontal-standard-form",
      note: "If y is squared, the graph fails the vertical-line test. It is a relation, not a function of x.",
      check: {
        prompt: "For (y + 5)^2 = 24(x - 2), what is the focus?",
        answer: "(8,-5)",
        accept: ["(8,-5)", "(8, -5)", "8,-5", "8, -5", "focus (8,-5)", "focus=(8,-5)"],
        hint: "Here h = 2, k = -5, and 4p = 24, so p = 6. Add p to the x-coordinate."
      }
    },
    {
      id: "graph-from-equation",
      label: "05",
      title: "Graph from the standard form",
      kicker: "Plot features before drawing",
      body: [
        "A reliable graphing routine uses features instead of guessing points. Step 1: identify whether x or y is squared. Step 2: find h, k, and p. Step 3: plot the vertex. Step 4: draw the axis of symmetry. Step 5: plot the focus and directrix. Step 6: use the focal width |4p| to place two points across the focus.",
        "For a vertical parabola, the latus rectum goes horizontally through the focus. If (x - 2)^2 = 8(y - 1), then p = 2 and the focal width is 8. The focus is (2,3). Half the focal width is 4, so the latus-rectum endpoints are (2 - 4,3) and (2 + 4,3), or (-2,3) and (6,3).",
        "For a horizontal parabola, the latus rectum goes vertically through the focus. If (y + 1)^2 = -4(x - 3), then p = -1, focus (2,-1), and focal width 4. Half of that is 2, so useful graph points are (2,-3) and (2,1). Draw a smooth curve through the vertex and those two points, opening left."
      ],
      formula: "latus-rectum endpoints: move |2p| each way from the focus, perpendicular to the axis",
      diagram: "parabola-conics-graphing-features",
      note: "The focal width is |4p|, so each endpoint is |2p| from the focus.",
      check: {
        prompt: "For (x - 2)^2 = 8(y - 1), what is the focal width?",
        answer: "8",
        accept: ["8", "8 units", "focal width 8", "|4p|=8", "4p=8"],
        hint: "The coefficient 8 equals 4p, and focal width is |4p|."
      }
    },
    {
      id: "reflective-applications",
      label: "06",
      title: "Interpret reflection and applications",
      kicker: "Why the focus matters",
      body: [
        "Parabolas have a special reflective property. Rays that come in parallel to the axis reflect through the focus. Reversing the path also works: a signal or light placed at the focus reflects outward in rays parallel to the axis.",
        "This is why parabolic microphones, satellite dishes, headlights and reflecting telescopes use the focus. A dish can collect many nearly parallel incoming rays and concentrate them at a receiver placed at the focus. A flashlight can put a bulb near the focus and send light forward in a directed beam.",
        "In applications, keep the units attached to p, the vertex, and the focus. If a satellite dish has cross-section x^2 = 16y with vertex at the origin and measurements in inches, then 4p = 16, so p = 4 inches. The receiver should be 4 inches from the vertex along the axis. No angle mode is needed for these standard-form calculations; if an application later uses angles of reflection, match calculator mode to degrees or radians as stated."
      ],
      formula: "parallel to axis -> reflects through focus   |   source at focus -> reflects parallel to axis",
      diagram: "parabola-conics-reflective-applications",
      note: "A focus is a physical location in many models, so an answer should include units when the context gives units.",
      check: {
        prompt: "A dish has cross-section x^2 = 20y, measured in centimeters. How far is the focus from the vertex?",
        answer: "5 cm",
        accept: ["5 cm", "5 centimeters", "5", "p=5", "p = 5", "5 units"],
        hint: "Compare x^2 = 20y with x^2 = 4py. Then 4p = 20."
      }
    }
  ],
  examples: [
    {
      title: "Write an equation from a focus and directrix",
      problem: "Find the equation of the parabola with focus (3,5) and directrix y = -1.",
      steps: [
        "The directrix is horizontal, so the axis is vertical. The focus and vertex have the same x-coordinate, so h = 3.",
        "The vertex is halfway between the focus y-value 5 and the directrix y-value -1. The midpoint is (5 + -1)/2 = 2, so the vertex is (3,2).",
        "Find p as the directed distance from the vertex to the focus: 5 - 2 = 3. Because p is positive, the parabola opens up.",
        "Use vertical standard form: (x - h)^2 = 4p(y - k).",
        "Substitute h = 3, k = 2, and p = 3: (x - 3)^2 = 4(3)(y - 2).",
        "Simplify 4(3) to 12. The equation is (x - 3)^2 = 12(y - 2)."
      ]
    },
    {
      title: "Graph and name key features",
      problem: "Graph (y + 4)^2 = -16(x - 1).",
      steps: [
        "Because y is squared, the parabola is horizontal. Use (y - k)^2 = 4p(x - h).",
        "Read the vertex: x - 1 gives h = 1, and y + 4 means y - (-4), so k = -4. The vertex is (1,-4).",
        "Compare coefficients: 4p = -16, so p = -4. A negative p means the parabola opens left.",
        "The axis is y = k, so the axis is y = -4.",
        "The focus is (h + p, k) = (1 + -4, -4) = (-3,-4). The directrix is x = h - p = 1 - (-4) = 5.",
        "The focal width is |4p| = 16. Half of that is 8, so latus-rectum endpoints are (-3, -12) and (-3, 4). Plot the vertex, focus, directrix and endpoints, then draw a smooth left-opening curve."
      ]
    },
    {
      title: "Use a parabolic dish model",
      problem: "A dish cross-section is modeled by x^2 = 24y, with x and y in inches. Where should the receiver be placed?",
      steps: [
        "Compare the model to the vertical standard form x^2 = 4py. The vertex is at (0,0).",
        "Set 4p = 24 and divide by 4: p = 6.",
        "Because p is positive, the focus is above the vertex on the y-axis.",
        "The focus is (0,p), so the receiver should be at (0,6).",
        "Interpret the result with units: the receiver belongs 6 inches above the vertex of the dish.",
        "This uses the reflective property: incoming rays parallel to the axis reflect through the focus."
      ]
    }
  ],
  practice: [
    { q: "What is the fixed point in the focus-directrix definition of a parabola?", a: "focus", accepted: ["focus", "the focus", "fixed point", "the fixed point"] },
    { q: "What is the fixed line in the focus-directrix definition of a parabola?", a: "directrix", accepted: ["directrix", "the directrix", "fixed line", "the fixed line"] },
    { q: "Write the vertical standard form for a parabola with vertex (h,k).", a: "(x-h)^2=4p(y-k)", accepted: ["(x-h)^2=4p(y-k)", "(x − h)^2 = 4p(y − k)", "(x-h)²=4p(y-k)", "x-h squared equals 4p(y-k)"] },
    { q: "Write the horizontal standard form for a parabola with vertex (h,k).", a: "(y-k)^2=4p(x-h)", accepted: ["(y-k)^2=4p(x-h)", "(y − k)^2 = 4p(x − h)", "(y-k)²=4p(x-h)", "y-k squared equals 4p(x-h)"] },
    { q: "For (x - 2)^2 = 12(y + 1), what is the vertex?", a: "(2,-1)", accepted: ["(2,-1)", "(2, -1)", "2,-1", "2, -1", "vertex (2,-1)", "vertex=(2,-1)"] },
    { q: "For (x - 2)^2 = 12(y + 1), what is p?", a: "3", accepted: ["3", "p=3", "p = 3"] },
    { q: "For (x - 2)^2 = 12(y + 1), what is the focus?", a: "(2,2)", accepted: ["(2,2)", "(2, 2)", "2,2", "2, 2", "focus (2,2)", "focus=(2,2)"] },
    { q: "For (x - 2)^2 = 12(y + 1), what is the directrix?", a: "y=-4", accepted: ["y=-4", "y = -4", "y=−4", "directrix y=-4", "directrix is y=-4"] },
    { q: "Does (x - 2)^2 = -8(y - 5) open up or down?", a: "down", accepted: ["down", "opens down", "downward", "opens downward"] },
    { q: "For (x - 2)^2 = -8(y - 5), what is the focus?", a: "(2,3)", accepted: ["(2,3)", "(2, 3)", "2,3", "2, 3", "focus (2,3)", "focus=(2,3)"] },
    { q: "For (y + 3)^2 = 20(x - 4), what is the vertex?", a: "(4,-3)", accepted: ["(4,-3)", "(4, -3)", "4,-3", "4, -3", "vertex (4,-3)", "vertex=(4,-3)"] },
    { q: "For (y + 3)^2 = 20(x - 4), what is p?", a: "5", accepted: ["5", "p=5", "p = 5"] },
    { q: "For (y + 3)^2 = 20(x - 4), what is the focus?", a: "(9,-3)", accepted: ["(9,-3)", "(9, -3)", "9,-3", "9, -3", "focus (9,-3)", "focus=(9,-3)"] },
    { q: "For (y + 3)^2 = 20(x - 4), what is the directrix?", a: "x=-1", accepted: ["x=-1", "x = -1", "x=−1", "directrix x=-1", "directrix is x=-1"] },
    { q: "Does (y - 1)^2 = -12(x + 2) open right or left?", a: "left", accepted: ["left", "opens left", "leftward", "opens leftward"] },
    { q: "For (y - 1)^2 = -12(x + 2), what is the focus?", a: "(-5,1)", accepted: ["(-5,1)", "(−5,1)", "(-5, 1)", "-5,1", "-5, 1", "focus (-5,1)", "focus=(-5,1)"] },
    { q: "A parabola has vertex (0,0) and focus (0,4). Write its equation.", a: "x^2=16y", accepted: ["x^2=16y", "x²=16y", "x^2 = 16y", "(x-0)^2=16(y-0)", "(x − 0)^2 = 16(y − 0)"] },
    { q: "A parabola has vertex (0,0) and focus (-3,0). Write its equation.", a: "y^2=-12x", accepted: ["y^2=-12x", "y²=-12x", "y^2 = -12x", "y^2=−12x", "(y-0)^2=-12(x-0)"] },
    { q: "A parabola has focus (1,5) and directrix y = -3. What is the vertex?", a: "(1,1)", accepted: ["(1,1)", "(1, 1)", "1,1", "1, 1", "vertex (1,1)", "vertex=(1,1)"] },
    { q: "A parabola has focus (1,5) and directrix y = -3. Write its equation.", a: "(x-1)^2=16(y-1)", accepted: ["(x-1)^2=16(y-1)", "(x − 1)^2 = 16(y − 1)", "(x-1)²=16(y-1)", "x-1 squared equals 16(y-1)"] },
    { q: "A parabola has focus (6,-2) and directrix x = 0. What is the vertex?", a: "(3,-2)", accepted: ["(3,-2)", "(3, -2)", "3,-2", "3, -2", "vertex (3,-2)", "vertex=(3,-2)"] },
    { q: "A parabola has focus (6,-2) and directrix x = 0. Write its equation.", a: "(y+2)^2=12(x-3)", accepted: ["(y+2)^2=12(x-3)", "(y + 2)^2 = 12(x - 3)", "(y+2)²=12(x-3)", "y+2 squared equals 12(x-3)"] },
    { q: "For (x + 1)^2 = 4(y - 2), what is the focal width?", a: "4", accepted: ["4", "4 units", "focal width 4", "|4p|=4"] },
    { q: "For (x - 3)^2 = 8(y + 2), name one latus-rectum endpoint.", a: "(-1,0)", accepted: ["(-1,0)", "(-1, 0)", "-1,0", "-1, 0", "(7,0)", "(7, 0)", "7,0", "7, 0"] },
    { q: "A dish is modeled by x^2 = 32y in feet. How far is the focus from the vertex?", a: "8 ft", accepted: ["8 ft", "8 feet", "8", "p=8", "p = 8", "8 units"] },
    { q: "What happens to rays parallel to a parabola's axis after reflection?", a: "they pass through the focus", accepted: ["they pass through the focus", "pass through the focus", "reflect through the focus", "go through the focus", "meet at the focus", "through focus"] }
  ]
};
