window.COURSE.lessons["polar-graphs"] = {
  id: "polar-graphs",
  title: "Polar Graphs",
  eyebrow: "Lesson 33 · Polar Graphs",
  standard: "MA.912.T.3.1 · MA.912.T.3.2",
  standardText: "Graph and interpret polar equations, including equations of circles, limacons, cardioids, and roses, using tables, symmetry, and key polar features.",
  objective: "Read equations in the form r = f(theta), plot polar graphs from theta tables, test for symmetry, and identify or interpret common polar graph families.",
  estimated: "50-60 min",
  sections: [
    {
      id: "read-polar-equations",
      label: "01",
      title: "Read r as a function of theta",
      kicker: "Angle controls radius",
      body: [
        "A polar graph is the set of all points (r,theta) that satisfy an equation. In an equation such as r = 2 + 3cos(theta), the angle theta is the input and the radius r is the output.",
        "To graph one point, choose a value of theta, calculate r, rotate to that angle, and then move the directed distance r. A positive radius moves along the ray for theta. A negative radius moves in the opposite direction from that ray.",
        "As theta changes, the radius changes too. The graph is formed by connecting the plotted polar points in angle order. The shape often looks curved because both direction and distance are changing at the same time."
      ],
      formula: "polar graph: choose theta -> compute r -> plot (r,theta)",
      diagram: "polar-graphs-read-r-theta",
      note: "The equation r = f(theta) does not mean y = f(x). The input is an angle, and the output is a directed distance from the pole.",
      check: {
        prompt: "For r = 4 - 2sin(theta), what value of r do you get when theta = pi/2?",
        answer: "2",
        accept: ["2", "r=2", "r = 2"],
        hint: "Substitute sin(pi/2) = 1."
      }
    },
    {
      id: "theta-table-plotting",
      label: "02",
      title: "Plot by making a theta table",
      kicker: "Compute, plot, connect",
      body: [
        "A theta table is the most reliable way to start a polar graph. Pick angles that match the trig values in the equation. Common choices are 0, pi/6, pi/4, pi/3, pi/2, and their related angles around the circle.",
        "For each theta value, calculate r. Then plot the point (r,theta). If r is positive, plot outward on the theta ray. If r is zero, the point is the pole. If r is negative, plot the same distance on the ray pointing theta + pi.",
        "After several points are plotted, connect them smoothly in increasing theta order. Do not connect by x-values from left to right. A polar graph follows rotation around the pole, so the tracing order matters."
      ],
      formula: "table columns: theta | r | plotted point",
      diagram: "polar-theta-table-plotting",
      note: "When a graph has loops or petals, the same pole may be reached several times as theta changes.",
      check: {
        prompt: "For r = 3cos(theta), what value of r do you get when theta = 0?",
        answer: "3",
        accept: ["3", "r=3", "r = 3"],
        hint: "Use cos(0) = 1."
      }
    },
    {
      id: "polar-symmetry-tests",
      label: "03",
      title: "Use symmetry tests",
      kicker: "Graph less by proving more",
      body: [
        "Symmetry helps you predict the full graph from part of the graph. Polar symmetry is tested by replacing theta or r in ways that reflect points across important lines.",
        "To test symmetry about the polar axis, replace theta with -theta. If the equation is equivalent, the graph is symmetric across the polar axis. Cosine equations often have this symmetry because cos(-theta) = cos(theta).",
        "To test symmetry about the line theta = pi/2, replace theta with pi - theta. If the equation is equivalent, the graph is symmetric across the vertical axis. Sine equations often have this symmetry because sin(pi - theta) = sin(theta). To test symmetry about the pole, replace r with -r or replace theta with theta + pi and check for an equivalent equation."
      ],
      formula: "polar axis: theta -> -theta   |   vertical: theta -> pi - theta   |   pole: r -> -r or theta -> theta + pi",
      diagram: "polar-symmetry-tests",
      note: "A failed symmetry test does not always prove there is no symmetry, but a passed test gives a dependable shortcut.",
      check: {
        prompt: "Which symmetry is suggested by r = 2 + 4cos(theta)?",
        answer: "polar axis symmetry",
        accept: ["polar axis symmetry", "polar axis", "x-axis symmetry", "x axis symmetry", "symmetric about the polar axis"],
        hint: "Cosine stays the same when theta is replaced by -theta."
      }
    },
    {
      id: "polar-circles",
      label: "04",
      title: "Recognize polar circles",
      kicker: "Simple equations, familiar shapes",
      body: [
        "Some polar equations make circles. The equation r = a is a circle centered at the pole with radius a. Every angle has the same distance from the pole, so the graph is a full circle around the origin.",
        "The equations r = a cos(theta) and r = a sin(theta) also make circles, but these circles pass through the pole. The cosine form lies along the polar axis, and the sine form lies along the vertical direction.",
        "For r = 6cos(theta), the largest radius occurs at theta = 0, and the graph passes through the pole when theta = pi/2 and theta = 3pi/2. This creates a circle with diameter 6 along the polar axis."
      ],
      formula: "r = a: center at pole   |   r = a cos(theta): horizontal circle   |   r = a sin(theta): vertical circle",
      diagram: "polar-circles-forms",
      note: "For r = a cos(theta) or r = a sin(theta), the number a is the diameter of the circle, not the radius.",
      check: {
        prompt: "What shape is r = 5?",
        answer: "circle centered at the pole",
        accept: ["circle centered at the pole", "circle", "circle centered at origin", "circle centered at the origin"],
        hint: "The radius is always 5 no matter what theta is."
      }
    },
    {
      id: "limacons-cardioids",
      label: "05",
      title: "Identify limacons and cardioids",
      kicker: "Add a constant and a trig term",
      body: [
        "Equations in the form r = a + bcos(theta) or r = a + bsin(theta) make limacons. The constant a shifts the radius baseline, and the trig term bcos(theta) or bsin(theta) makes the radius grow and shrink as theta rotates.",
        "A cardioid is a special limacon with a cusp at the pole. It happens when the constant and trig coefficient have the same size, such as r = 3 + 3cos(theta) or r = 4 - 4sin(theta).",
        "Compare the largest and smallest radius values to understand the shape. If r becomes zero, the graph touches the pole. If r becomes negative, the graph crosses through the pole and creates an inner loop. Cosine forms face right or left, while sine forms face up or down."
      ],
      formula: "limacon: r = a ± bcos(theta) or r = a ± bsin(theta)   |   cardioid when |a| = |b|",
      diagram: "polar-limacons-cardioids",
      note: "The sign and trig function describe orientation. Positive cosine faces right; negative cosine faces left; positive sine faces up; negative sine faces down.",
      check: {
        prompt: "What special limacon type is r = 2 + 2cos(theta)?",
        answer: "cardioid",
        accept: ["cardioid", "a cardioid"],
        hint: "Compare the absolute values of the constant and cosine coefficient."
      }
    },
    {
      id: "roses-and-interpretation",
      label: "06",
      title: "Recognize roses and interpret graphs",
      kicker: "Petals and meaning",
      body: [
        "Rose curves have equations r = a cos(ntheta) or r = a sin(ntheta). The coefficient a controls the petal length. The number n controls how many times the radius repeats as theta rotates.",
        "If n is odd, the rose has n petals. If n is even, the rose has 2n petals. Cosine roses usually place a petal on the polar axis when the coefficient is positive. Sine roses are rotated compared with cosine roses.",
        "To interpret any polar graph, connect features back to radius and angle. Large radius values show where the graph is far from the pole. Zeros of r show pole crossings. Symmetry tells which parts repeat. Negative r values explain loops or petals drawn on the opposite ray."
      ],
      formula: "rose: r = a cos(ntheta) or r = a sin(ntheta)   |   n odd: n petals   |   n even: 2n petals",
      diagram: "polar-rose-interpretation",
      note: "When reading a polar graph, describe distance from the pole and direction from the polar axis before converting to rectangular language.",
      check: {
        prompt: "How many petals does r = 4cos(3theta) have?",
        answer: "3",
        accept: ["3", "three", "3 petals", "three petals"],
        hint: "For a rose curve with odd n, the number of petals is n."
      }
    }
  ],
  examples: [
    {
      title: "Plot a polar graph from a theta table",
      problem: "Make a basic theta table for r = 2 + 2cos(theta) and describe the graph.",
      steps: [
        "Choose angles that make cosine easy to evaluate: 0, pi/2, pi, 3pi/2, and 2pi.",
        "At theta = 0, r = 2 + 2cos(0) = 2 + 2 = 4, so plot (4,0).",
        "At theta = pi/2, r = 2 + 2cos(pi/2) = 2 + 0 = 2, so plot (2,pi/2).",
        "At theta = pi, r = 2 + 2cos(pi) = 2 - 2 = 0, so the graph reaches the pole.",
        "At theta = 3pi/2, r = 2 + 2cos(3pi/2) = 2 + 0 = 2, so plot (2,3pi/2).",
        "At theta = 2pi, r = 4 again, returning to the point on the positive polar axis.",
        "Because the equation has |a| = |b| in r = a + bcos(theta), the graph is a cardioid. The positive cosine term makes it face right."
      ]
    },
    {
      title: "Test symmetry of a polar equation",
      problem: "Use symmetry tests for r = 3 - 2sin(theta).",
      steps: [
        "Test polar-axis symmetry by replacing theta with -theta.",
        "The equation becomes r = 3 - 2sin(-theta). Since sin(-theta) = -sin(theta), this simplifies to r = 3 + 2sin(theta). That is not equivalent to the original equation.",
        "Test symmetry about theta = pi/2 by replacing theta with pi - theta.",
        "The equation becomes r = 3 - 2sin(pi - theta). Since sin(pi - theta) = sin(theta), this simplifies to r = 3 - 2sin(theta). This matches the original equation.",
        "So the graph is symmetric about the line theta = pi/2.",
        "Because it is a sine limacon with a negative sine term, the graph is oriented downward while still having vertical symmetry."
      ]
    },
    {
      title: "Identify and interpret a rose curve",
      problem: "Identify the graph of r = 5sin(4theta), including its petal count and maximum distance from the pole.",
      steps: [
        "The equation has the form r = a sin(ntheta), so it is a rose curve.",
        "Here a = 5, so each petal reaches a maximum distance of 5 units from the pole.",
        "Here n = 4, which is even. For an even value of n, the rose has 2n petals.",
        "Compute 2n = 2(4) = 8, so the graph has 8 petals.",
        "The sine form means the rose is rotated compared with r = 5cos(4theta), but the petal length and petal count are the same.",
        "Interpretation: the graph repeats eight equal outward petals around the pole, and no point on the graph is more than 5 units from the pole."
      ]
    }
  ],
  practice: [
    { q: "For r = 6 - 2cos(theta), find r when theta = 0.", a: "4", accepted: ["4", "r=4", "r = 4"] },
    { q: "For r = 6 - 2cos(theta), find r when theta = pi.", a: "8", accepted: ["8", "r=8", "r = 8"] },
    { q: "For r = 3sin(theta), find r when theta = pi/2.", a: "3", accepted: ["3", "r=3", "r = 3"] },
    { q: "For r = 4cos(theta), find r when theta = pi/2.", a: "0", accepted: ["0", "r=0", "r = 0", "zero"] },
    { q: "If a polar table gives r = 0 for an angle, where is the point plotted?", a: "the pole", accepted: ["the pole", "pole", "origin", "the origin"] },
    { q: "If r is negative for a chosen theta, how is the point plotted?", a: "on the opposite ray", accepted: ["on the opposite ray", "opposite ray", "opposite direction", "theta plus pi", "theta + pi"] },
    { q: "Which replacement tests symmetry about the polar axis?", a: "theta with -theta", accepted: ["theta with -theta", "theta -> -theta", "replace theta with -theta", "θ with -θ", "theta=-theta"] },
    { q: "Which replacement tests symmetry about the line theta = pi/2?", a: "theta with pi - theta", accepted: ["theta with pi - theta", "theta -> pi - theta", "replace theta with pi - theta", "θ with π - θ"] },
    { q: "Which common symmetry is shown by r = 4cos(theta)?", a: "polar axis symmetry", accepted: ["polar axis symmetry", "polar axis", "x-axis symmetry", "x axis symmetry"] },
    { q: "Which common symmetry is shown by r = 4sin(theta)?", a: "theta = pi/2 symmetry", accepted: ["theta = pi/2 symmetry", "vertical symmetry", "y-axis symmetry", "y axis symmetry", "line theta=pi/2"] },
    { q: "What shape is r = 7?", a: "circle centered at the pole", accepted: ["circle centered at the pole", "circle", "circle centered at origin", "circle centered at the origin"] },
    { q: "What shape is r = 6cos(theta)?", a: "circle", accepted: ["circle", "a circle", "horizontal circle"] },
    { q: "For r = 8sin(theta), what is the diameter of the circle?", a: "8", accepted: ["8", "diameter 8", "8 units"] },
    { q: "For r = 8sin(theta), what is the radius of the circle?", a: "4", accepted: ["4", "radius 4", "4 units"] },
    { q: "What graph family has form r = a + bcos(theta)?", a: "limacon", accepted: ["limacon", "limaçon", "a limacon"] },
    { q: "What graph family has form r = a + bsin(theta)?", a: "limacon", accepted: ["limacon", "limaçon", "a limacon"] },
    { q: "What special type is r = 5 + 5sin(theta)?", a: "cardioid", accepted: ["cardioid", "a cardioid"] },
    { q: "What special type is r = 4 - 4cos(theta)?", a: "cardioid", accepted: ["cardioid", "a cardioid"] },
    { q: "Does r = 2 + 5cos(theta) have an inner loop?", a: "yes", accepted: ["yes", "true", "it has an inner loop", "inner loop"] },
    { q: "Does r = 6 + 2sin(theta) have an inner loop?", a: "no", accepted: ["no", "false", "no inner loop"] },
    { q: "Which direction does r = 3 + 3cos(theta) face?", a: "right", accepted: ["right", "to the right", "positive x direction", "along the polar axis"] },
    { q: "Which direction does r = 3 - 3cos(theta) face?", a: "left", accepted: ["left", "to the left", "negative x direction"] },
    { q: "Which direction does r = 2 + 2sin(theta) face?", a: "up", accepted: ["up", "upward", "positive y direction"] },
    { q: "Which direction does r = 2 - 2sin(theta) face?", a: "down", accepted: ["down", "downward", "negative y direction"] },
    { q: "What graph family has form r = a cos(ntheta)?", a: "rose", accepted: ["rose", "rose curve", "polar rose"] },
    { q: "How many petals does r = 6cos(5theta) have?", a: "5", accepted: ["5", "five", "5 petals", "five petals"] },
    { q: "How many petals does r = 6sin(4theta) have?", a: "8", accepted: ["8", "eight", "8 petals", "eight petals"] },
    { q: "For r = 3cos(2theta), what is the maximum distance from the pole?", a: "3", accepted: ["3", "3 units", "maximum radius 3", "max distance 3"] },
    { q: "True or false: A polar graph should be connected in increasing theta order.", a: "true", accepted: ["true", "yes", "t"] },
    { q: "True or false: In r = 4 + 4cos(theta), the graph touches the pole.", a: "true", accepted: ["true", "yes", "t"] }
  ]
};
