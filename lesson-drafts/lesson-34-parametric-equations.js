window.COURSE.lessons["parametric-equations"] = {
  id: "parametric-equations",
  title: "Parametric Equations",
  eyebrow: "Lesson 34 · Parametric Equations",
  standard: "MA.912.AR.5.7 · MA.912.F.2.5",
  standardText: "Represent and interpret relationships using parametric equations, tables, graphs, and equivalent rectangular equations, including motion and projectile contexts.",
  objective: "Write, graph, interpret, and analyze parametric equations x(t) and y(t); use tables and intervals for t; eliminate the parameter when possible; and model two-dimensional motion.",
  estimated: "50-60 min",
  sections: [
    {
      id: "parametric-position",
      label: "01",
      title: "Describe position with a parameter",
      kicker: "One input, two outputs",
      body: [
        "A parametric equation describes x and y separately using a third variable called a parameter. The parameter is often t because many applications use time. Instead of writing y directly as a function of x, write x = x(t) and y = y(t).",
        "For each value of t, the equations produce one ordered pair (x(t), y(t)). That ordered pair gives the position of a point in the plane. As t changes, the point moves and traces a curve.",
        "For example, x(t) = t + 1 and y(t) = 2t describe a moving point. When t = 0, the point is (1,0). When t = 3, the point is (4,6). The parameter connects the horizontal and vertical coordinates."
      ],
      formula: "parametric form: x = x(t), y = y(t)   |   position at time t: (x(t), y(t))",
      diagram: "parametric-vector-position-representation",
      note: "The parameter does not have to be time, but in motion problems it usually represents time.",
      check: {
        prompt: "For x(t) = 2t and y(t) = t - 5, find the point when t = 4.",
        answer: "(8,-1)",
        accept: ["(8,-1)", "(8, -1)", "8,-1", "8, -1"],
        hint: "Substitute 4 into both x(t) and y(t)."
      }
    },
    {
      id: "tables-and-points",
      label: "02",
      title: "Build a table of values",
      kicker: "Track x and y together",
      body: [
        "A table is often the clearest way to start graphing parametric equations. Choose several t-values, then calculate x(t) and y(t) for each one. Each row gives one plotted point.",
        "Keep the t-column visible. If two rows have the same x-value or the same y-value, the t-values still tell which point comes earlier and which point comes later. This order matters because a parametric graph has direction.",
        "For x(t) = t and y(t) = t^2, the t-values -2, -1, 0, 1, and 2 produce the points (-2,4), (-1,1), (0,0), (1,1), and (2,4). The graph is a parabola, but the table also shows the point moves down toward the vertex and then back up."
      ],
      formula: "table routine: choose t -> find x(t) -> find y(t) -> plot (x,y)",
      diagram: "parametric-table-representation",
      note: "Do not treat t as an extra coordinate. The graph is still drawn in the xy-plane.",
      check: {
        prompt: "For x(t) = t + 2 and y(t) = 3t, find the point when t = -1.",
        answer: "(1,-3)",
        accept: ["(1,-3)", "(1, -3)", "1,-3", "1, -3"],
        hint: "Use the same t-value in both equations."
      }
    },
    {
      id: "graph-direction",
      label: "03",
      title: "Graph with direction of motion",
      kicker: "The arrows matter",
      body: [
        "A parametric graph is the path traced by the point (x(t), y(t)). After plotting points from a table, connect them in the order of increasing t. Add arrows to show the direction of motion.",
        "The same rectangular curve can be traveled in different directions. For x(t) = t and y(t) = t^2, the point moves from left to right as t increases. For x(t) = -t and y(t) = t^2, the point moves from right to left as t increases.",
        "Direction is part of the parametric representation. When a problem asks for a graph of parametric equations, include the curve and the direction indicated by increasing values of t."
      ],
      formula: "direction of motion: follow points as t increases",
      diagram: "parametric-vector-direction-representation",
      note: "If a problem gives a restricted interval for t, graph only the part of the path produced on that interval.",
      check: {
        prompt: "For x(t) = t and y(t) = 5 - t on -1 <= t <= 2, does the point move right or left as t increases?",
        answer: "right",
        accept: ["right", "to the right", "moves right", "increasing x"],
        hint: "Look at what happens to x(t) = t as t increases."
      }
    },
    {
      id: "eliminate-parameter",
      label: "04",
      title: "Eliminate the parameter",
      kicker: "Connect to rectangular form",
      body: [
        "Eliminating the parameter means rewriting the relationship using only x and y. This can reveal the familiar rectangular equation for the curve. The most common method is to solve one parametric equation for t and substitute into the other.",
        "For x = t + 3 and y = 2t - 1, solve the first equation for t: t = x - 3. Substitute into y: y = 2(x - 3) - 1, so y = 2x - 7. The path lies on a line.",
        "Eliminating t does not always preserve direction or the t-interval. The rectangular equation gives the shape, but the original parametric equations tell how the curve is traced and which part of the curve is included."
      ],
      formula: "solve for t -> substitute -> write an equation in x and y",
      diagram: "parametric-representation-eliminate",
      note: "After eliminating t, check whether the original t-interval restricts x-values, y-values, or both.",
      check: {
        prompt: "Eliminate t from x = t - 4 and y = 3t.",
        answer: "y=3x+12",
        accept: ["y=3x+12", "y = 3x + 12", "3x+12", "3x + 12"],
        hint: "Solve x = t - 4 for t, then substitute into y = 3t."
      }
    },
    {
      id: "intervals-for-t",
      label: "05",
      title: "Use intervals for the parameter",
      kicker: "Only part of the path",
      body: [
        "A t-interval limits which positions are included on the graph. Without an interval, the equations may describe an entire line, parabola, circle, or other curve. With an interval, the graph may be only a segment or an arc.",
        "For x(t) = 2t and y(t) = t + 1 on 0 <= t <= 4, the starting point is found at t = 0: (0,1). The ending point is found at t = 4: (8,5). Since both equations are linear in t, the graph is the line segment from (0,1) to (8,5).",
        "When graphing a restricted interval, mark endpoints carefully. If the interval includes an endpoint, the endpoint is part of the graph. If the interval excludes an endpoint, the point is approached but not included."
      ],
      formula: "restricted path: start at lower t-value, end at upper t-value, follow increasing t",
      diagram: "parametric-vector-interval-representation",
      note: "A rectangular equation alone may hide endpoint information. Use the parameter interval to recover it.",
      check: {
        prompt: "For x(t) = t + 1 and y(t) = 2t on 1 <= t <= 5, find the starting point.",
        answer: "(2,2)",
        accept: ["(2,2)", "(2, 2)", "2,2", "2, 2"],
        hint: "The starting point uses the lower endpoint of the t-interval."
      }
    },
    {
      id: "motion-and-projectiles",
      label: "06",
      title: "Model motion with parametric equations",
      kicker: "Horizontal and vertical motion",
      body: [
        "Parametric equations are useful for motion because horizontal and vertical position can be modeled separately. A constant horizontal velocity can be written as x(t) = x0 + vt. The starting position is x0, and v is the horizontal velocity.",
        "Projectile motion often uses x(t) = x0 + v_x t and y(t) = y0 + v_y t - 16t^2 when height is measured in feet and time is measured in seconds. The -16t^2 term models gravity. In metric units, a common model is y(t) = y0 + v_y t - 4.9t^2.",
        "To answer a motion question, substitute the given time into both equations for position. To find when something hits the ground, solve y(t) = 0 for a physically meaningful time, then substitute that time into x(t) to find horizontal distance."
      ],
      formula: "feet: x(t) = x0 + v_x t, y(t) = y0 + v_y t - 16t^2",
      diagram: "parametric-vector-projectile-representation",
      note: "In projectile contexts, discard negative time solutions unless the problem describes time before launch.",
      check: {
        prompt: "A projectile has x(t) = 40t and y(t) = 6 + 32t - 16t^2. What is its height when t = 1?",
        answer: "22",
        accept: ["22", "22 feet", "height 22", "y=22", "y = 22"],
        hint: "Substitute 1 into the y-equation."
      }
    }
  ],
  examples: [
    {
      title: "Make a table and graph direction",
      problem: "For x(t) = t - 1 and y(t) = t^2, use t = -1, 0, 1, 2 to make points and describe the direction of motion.",
      steps: [
        "Substitute t = -1: x = -1 - 1 = -2 and y = (-1)^2 = 1, so the point is (-2,1).",
        "Substitute t = 0: x = 0 - 1 = -1 and y = 0^2 = 0, so the point is (-1,0).",
        "Substitute t = 1: x = 1 - 1 = 0 and y = 1^2 = 1, so the point is (0,1).",
        "Substitute t = 2: x = 2 - 1 = 1 and y = 2^2 = 4, so the point is (1,4).",
        "Plot the points in this order: (-2,1), (-1,0), (0,1), (1,4).",
        "As t increases, the point moves from left to right, down to the lowest point, and then upward."
      ]
    },
    {
      title: "Eliminate the parameter with an interval",
      problem: "Eliminate the parameter from x = 2t + 1 and y = t - 3 for 0 <= t <= 4. Then describe the part of the graph.",
      steps: [
        "Solve the y-equation for t: y = t - 3 gives t = y + 3.",
        "Substitute into the x-equation: x = 2(y + 3) + 1.",
        "Simplify: x = 2y + 6 + 1, so x = 2y + 7.",
        "Solve for y if slope-intercept form is preferred: 2y = x - 7, so y = (x - 7)/2.",
        "Use the interval to find endpoints. At t = 0, x = 1 and y = -3, so the starting point is (1,-3).",
        "At t = 4, x = 9 and y = 1, so the ending point is (9,1).",
        "The graph is the line segment on y = (x - 7)/2 from (1,-3) to (9,1), traced from (1,-3) toward (9,1)."
      ]
    },
    {
      title: "Use a projectile model",
      problem: "A ball is launched from a height of 5 feet with x(t) = 30t and y(t) = 5 + 20t - 16t^2. Find its position at t = 1 and the time when it hits the ground.",
      steps: [
        "Find the position at t = 1 by substituting into both equations.",
        "x(1) = 30(1) = 30.",
        "y(1) = 5 + 20(1) - 16(1)^2 = 5 + 20 - 16 = 9.",
        "At t = 1, the ball is at (30,9).",
        "To find when it hits the ground, solve y(t) = 0: 5 + 20t - 16t^2 = 0.",
        "Rewrite as 16t^2 - 20t - 5 = 0.",
        "Factor: 16t^2 - 20t - 5 = (4t + 1)(4t - 5).",
        "Set each factor equal to 0. The solutions are t = -1/4 and t = 5/4.",
        "Discard the negative time. The ball hits the ground at t = 5/4 seconds."
      ]
    }
  ],
  practice: [
    { q: "For x(t) = t + 4 and y(t) = 2t, find the point when t = 3.", a: "(7,6)", accepted: ["(7,6)", "(7, 6)", "7,6", "7, 6"] },
    { q: "For x(t) = 5 - t and y(t) = t + 1, find the point when t = -2.", a: "(7,-1)", accepted: ["(7,-1)", "(7, -1)", "7,-1", "7, -1"] },
    { q: "For x(t) = 3t and y(t) = t^2 - 1, find the point when t = 2.", a: "(6,3)", accepted: ["(6,3)", "(6, 3)", "6,3", "6, 3"] },
    { q: "For x(t) = t^2 and y(t) = t - 4, find the point when t = -3.", a: "(9,-7)", accepted: ["(9,-7)", "(9, -7)", "9,-7", "9, -7"] },
    { q: "For x(t) = 2t - 1 and y(t) = 4 - t, find the point when t = 0.", a: "(-1,4)", accepted: ["(-1,4)", "(-1, 4)", "-1,4", "-1, 4"] },
    { q: "For x(t) = t and y(t) = t + 6, what point corresponds to t = -4?", a: "(-4,2)", accepted: ["(-4,2)", "(-4, 2)", "-4,2", "-4, 2"] },
    { q: "For x(t) = t and y(t) = t^2, list the point when t = -2.", a: "(-2,4)", accepted: ["(-2,4)", "(-2, 4)", "-2,4", "-2, 4"] },
    { q: "For x(t) = t and y(t) = t^2, list the point when t = 1.", a: "(1,1)", accepted: ["(1,1)", "(1, 1)", "1,1", "1, 1"] },
    { q: "For x(t) = 2t and y(t) = t - 3, what is the starting point on 0 <= t <= 5?", a: "(0,-3)", accepted: ["(0,-3)", "(0, -3)", "0,-3", "0, -3"] },
    { q: "For x(t) = 2t and y(t) = t - 3, what is the ending point on 0 <= t <= 5?", a: "(10,2)", accepted: ["(10,2)", "(10, 2)", "10,2", "10, 2"] },
    { q: "For x(t) = 6 - t and y(t) = 2t, does the point move right or left as t increases?", a: "left", accepted: ["left", "to the left", "moves left", "decreasing x"] },
    { q: "For x(t) = t + 1 and y(t) = 8 - 2t, does the point move up or down as t increases?", a: "down", accepted: ["down", "downward", "moves down", "decreasing y"] },
    { q: "Eliminate t from x = t + 2 and y = t - 5.", a: "y=x-7", accepted: ["y=x-7", "y = x - 7", "x-y=7", "x - y = 7"] },
    { q: "Eliminate t from x = 3t and y = t + 4.", a: "y=x/3+4", accepted: ["y=x/3+4", "y = x/3 + 4", "y=(x/3)+4", "y = (x/3) + 4"] },
    { q: "Eliminate t from x = t - 1 and y = 2t + 3.", a: "y=2x+5", accepted: ["y=2x+5", "y = 2x + 5", "2x+5", "2x + 5"] },
    { q: "Eliminate t from x = t^2 and y = t for all real t.", a: "x=y^2", accepted: ["x=y^2", "x = y^2", "y^2=x", "y^2 = x"] },
    { q: "Eliminate t from x = t and y = t^2 + 2.", a: "y=x^2+2", accepted: ["y=x^2+2", "y = x^2 + 2", "x^2+2", "x²+2"] },
    { q: "For x(t) = 4t and y(t) = 3t on 0 <= t <= 2, what is the ending point?", a: "(8,6)", accepted: ["(8,6)", "(8, 6)", "8,6", "8, 6"] },
    { q: "For x(t) = t - 2 and y(t) = t^2 on -1 <= t <= 3, what is the starting point?", a: "(-3,1)", accepted: ["(-3,1)", "(-3, 1)", "-3,1", "-3, 1"] },
    { q: "For x(t) = t - 2 and y(t) = t^2 on -1 <= t <= 3, what is the ending point?", a: "(1,9)", accepted: ["(1,9)", "(1, 9)", "1,9", "1, 9"] },
    { q: "For x(t) = 20t and y(t) = 10 + 5t, find the position when t = 2.", a: "(40,20)", accepted: ["(40,20)", "(40, 20)", "40,20", "40, 20"] },
    { q: "A model has x(t) = 15t and y(t) = 3 + 12t - 16t^2. What is the height when t = 0?", a: "3", accepted: ["3", "3 feet", "height 3", "y=3", "y = 3"] },
    { q: "A model has x(t) = 15t and y(t) = 3 + 12t - 16t^2. What is the horizontal position when t = 2?", a: "30", accepted: ["30", "30 feet", "x=30", "x = 30"] },
    { q: "A projectile has x(t) = 25t and y(t) = 8 + 24t - 16t^2. What is its height when t = 1?", a: "16", accepted: ["16", "16 feet", "height 16", "y=16", "y = 16"] },
    { q: "A projectile has x(t) = 25t and y(t) = 8 + 24t - 16t^2. What is its horizontal position when t = 1?", a: "25", accepted: ["25", "25 feet", "x=25", "x = 25"] },
    { q: "A projectile has y(t) = 48t - 16t^2. At what positive time does it hit the ground?", a: "3", accepted: ["3", "3 seconds", "t=3", "t = 3"] },
    { q: "A projectile has y(t) = 5 + 20t - 16t^2 and hits the ground at t = 5/4. If x(t) = 30t, how far horizontally has it traveled?", a: "37.5", accepted: ["37.5", "37.5 feet", "75/2", "75/2 feet"] },
    { q: "True or false: Eliminating the parameter always shows the direction of motion.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
