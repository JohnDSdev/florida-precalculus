window.COURSE.lessons["systems-relations"] = {
  id: "systems-relations",
  title: "Systems and Relations",
  eyebrow: "Lesson 35 · Systems and Relations",
  standard: "MA.912.AR.9.7 · MA.912.F.3.8",
  standardText: "Solve systems involving linear, quadratic, polynomial, rational, exponential, trigonometric, parametric, and polar relations using graphical and algebraic methods, and interpret solutions in mathematical and real-world contexts.",
  objective: "Solve systems graphically and algebraically, identify intersections between different types of relations, compare rectangular, polar, and parametric representations, check solutions, and interpret intersection points in context.",
  estimated: "50-60 min",
  sections: [
    {
      id: "graphical-systems-intersections",
      label: "01",
      title: "Read a system as intersections",
      kicker: "Where graphs agree",
      body: [
        "A system asks for input-output values that make every relation true at the same time. On a graph, those solutions are the intersection points. At an intersection, the two graphs share the same location.",
        "For a rectangular system such as y = x + 1 and y = x^2 - 3, a solution must have one x-value and one y-value that fit both equations. The graph can show how many solutions to expect before any algebra is done.",
        "Graphs may intersect once, more than once, or not at all. A line and a parabola can have two intersections, one tangent intersection, or no real intersections. The number of visible intersections helps you choose an algebraic strategy and check whether your final answer is reasonable."
      ],
      formula: "solution of a system: same input and same output for every relation",
      diagram: "rectangular-representation-system-intersections",
      note: "A graph gives strong evidence, but algebra or substitution is needed when exact coordinates are required.",
      check: {
        prompt: "On a graph, what does a solution to a system represent?",
        answer: "an intersection point",
        accept: ["an intersection point", "intersection point", "where the graphs meet", "where the graphs intersect", "same point"],
        hint: "Look for a point that lies on every graph in the system."
      }
    },
    {
      id: "algebraic-substitution",
      label: "02",
      title: "Solve algebraically by substitution",
      kicker: "Set expressions equal",
      body: [
        "When two rectangular equations are both solved for y, substitution is direct. If y = f(x) and y = g(x), then any intersection must satisfy f(x) = g(x). Solving that equation gives the x-values where the graphs meet.",
        "After finding an x-value, substitute it into one of the original equations to find y. Use the simpler equation when possible. Then write the solution as an ordered pair and check it in both original equations.",
        "For example, to solve y = 2x + 1 and y = x^2 - 4, set 2x + 1 = x^2 - 4. Rearranging gives x^2 - 2x - 5 = 0. The x-values can be found by factoring, completing the square, graphing, or the quadratic formula depending on the equation."
      ],
      formula: "if y = f(x) and y = g(x), solve f(x) = g(x)",
      diagram: "rectangular-representation-substitution-system",
      note: "Do not stop after solving for x. A system solution in the coordinate plane needs both coordinates.",
      check: {
        prompt: "To solve y = 3x - 2 and y = x^2 algebraically, what equation should you solve first?",
        answer: "3x - 2 = x^2",
        accept: ["3x - 2 = x^2", "x^2 = 3x - 2", "3x-2=x^2", "x^2=3x-2"],
        hint: "Both expressions are equal to y, so they must be equal to each other at an intersection."
      }
    },
    {
      id: "intersections-between-function-types",
      label: "03",
      title: "Compare different function types",
      kicker: "Different shapes, same point",
      body: [
        "Systems can combine different kinds of functions. A line and an exponential function, a parabola and a square root function, or a rational function and a polynomial can all be compared by looking for shared points.",
        "Some systems lead to equations that are easy to solve exactly. Others may require graphing technology or numerical solving. In either case, the meaning is the same: find the input values that make the output values equal.",
        "Always consider restrictions from the original relations. A square root expression requires the radicand to be nonnegative. A rational expression cannot have a zero denominator. A logarithmic expression requires a positive input. Solutions that break those restrictions must be rejected."
      ],
      formula: "intersection condition: outputs equal and original domains satisfied",
      diagram: "mixed-representation-function-type-intersections",
      note: "A value that solves a transformed equation is only a candidate until it is checked in the original system.",
      check: {
        prompt: "Why should solutions to a rational system be checked in the original equations?",
        answer: "to reject values that make a denominator zero",
        accept: ["to reject values that make a denominator zero", "denominator cannot be zero", "to check for zero denominators", "to find extraneous solutions", "because denominators cannot be zero"],
        hint: "Think about values that are not allowed in the original rational expressions."
      }
    },
    {
      id: "rectangular-polar-parametric",
      label: "04",
      title: "Connect rectangular, polar, and parametric forms",
      kicker: "One location, several descriptions",
      body: [
        "Relations may be represented in rectangular, polar, or parametric form. Rectangular form uses x and y directly. Polar form uses distance r and angle theta. Parametric form uses a parameter, often t, to describe x and y separately.",
        "To compare relations written in different representations, convert enough information to describe the same point. Polar points can be converted with x = r cos(theta) and y = r sin(theta). Parametric points can be tested by finding x(t) and y(t) for the same parameter value.",
        "A point can be a solution only when it satisfies the conditions of each representation. For a polar curve and a rectangular line, convert the polar point to rectangular coordinates or rewrite the line in polar form. For a parametric curve and a rectangular graph, substitute x(t) and y(t) into the rectangular equation."
      ],
      formula: "polar to rectangular: x = r cos(theta), y = r sin(theta)   |   parametric point: (x(t),y(t))",
      diagram: "rectangular-polar-parametric-representation-comparison",
      note: "Use the same coordinate plane when comparing representations. Different notation should still describe the same physical location.",
      check: {
        prompt: "What rectangular point comes from the polar point (4, pi/2)?",
        answer: "(0,4)",
        accept: ["(0,4)", "(0, 4)", "0,4", "0, 4"],
        hint: "Use x = r cos(theta) and y = r sin(theta)."
      }
    },
    {
      id: "checking-systems-solutions",
      label: "05",
      title: "Check every solution",
      kicker: "Substitute back",
      body: [
        "Checking is part of solving a system. Substitute each candidate point into every original equation or relation. If the point makes every statement true, it is a solution. If it fails even one relation, it is not a solution.",
        "Graphical estimates should also be checked. If a graph suggests an intersection near (2.1,5.2), substitute the coordinates into both relations to see whether the outputs are close. Exact answers should satisfy the equations exactly.",
        "Checking is especially important after squaring, multiplying by variable expressions, using inverse operations with restricted domains, or converting between representations. These steps can introduce candidates that do not actually satisfy the original system."
      ],
      formula: "candidate point -> substitute into every original relation -> keep only true statements",
      diagram: "rectangular-representation-checking-solutions",
      note: "Use original equations for the check, not only the equation created during substitution.",
      check: {
        prompt: "Is (2,5) a solution to y = 2x + 1 and y = x^2 + 1?",
        answer: "yes",
        accept: ["yes", "true", "it is a solution", "(2,5) is a solution"],
        hint: "Substitute x = 2 and y = 5 into both equations."
      }
    },
    {
      id: "interpreting-system-contexts",
      label: "06",
      title: "Interpret intersections in context",
      kicker: "Meaning, not just coordinates",
      body: [
        "In applications, an intersection usually represents a shared time, location, cost, height, distance, or amount. The coordinate values must be interpreted using the variables and units from the problem.",
        "If one function models revenue and another models cost, an intersection is a break-even point. If two position functions model moving objects, an intersection can show when they are in the same place. If a polar radar path intersects a boundary, the point can show a direction and distance where the object reaches the boundary.",
        "After solving, decide whether the solution makes sense in context. Negative time, a distance outside a stated interval, or an angle beyond the modeled sweep may be mathematically possible but not valid for the situation."
      ],
      formula: "interpretation: coordinates + variable meanings + units + domain restrictions",
      diagram: "context-representation-intersection-interpretation",
      note: "A correct coordinate pair is incomplete in an application unless the units and meaning are stated.",
      check: {
        prompt: "If cost and revenue graphs intersect, what does the intersection usually represent?",
        answer: "break-even point",
        accept: ["break-even point", "break even point", "break-even", "where cost equals revenue", "cost equals revenue"],
        hint: "At the intersection, both models have the same output."
      }
    }
  ],
  examples: [
    {
      title: "Solve a line and parabola system",
      problem: "Solve the system y = x + 3 and y = x^2 - 1.",
      steps: [
        "Both equations are solved for y, so set the right sides equal: x + 3 = x^2 - 1.",
        "Move all terms to one side: 0 = x^2 - x - 4.",
        "Use the quadratic formula with a = 1, b = -1, and c = -4.",
        "Compute x = (1 ± sqrt((-1)^2 - 4(1)(-4)))/2 = (1 ± sqrt(17))/2.",
        "Find y using the linear equation y = x + 3.",
        "For x = (1 + sqrt(17))/2, y = (1 + sqrt(17))/2 + 3 = (7 + sqrt(17))/2.",
        "For x = (1 - sqrt(17))/2, y = (1 - sqrt(17))/2 + 3 = (7 - sqrt(17))/2.",
        "The solutions are ((1 + sqrt(17))/2, (7 + sqrt(17))/2) and ((1 - sqrt(17))/2, (7 - sqrt(17))/2)."
      ]
    },
    {
      title: "Check a parametric intersection",
      problem: "A path is given by x(t) = t + 1 and y(t) = 2t - 3. Determine whether the path intersects the line y = 2x - 5, and describe the result.",
      steps: [
        "Substitute the parametric expressions into the rectangular equation.",
        "The line equation becomes 2t - 3 = 2(t + 1) - 5.",
        "Simplify the right side: 2(t + 1) - 5 = 2t + 2 - 5 = 2t - 3.",
        "The equation becomes 2t - 3 = 2t - 3, which is true for every value of t.",
        "That means every point on the parametric path lies on the line.",
        "Interpretation: the parametric representation traces the same line y = 2x - 5, so the system has infinitely many shared points."
      ]
    },
    {
      title: "Interpret a contextual intersection",
      problem: "A company's cost is C(x) = 120 + 8x and revenue is R(x) = 20x, where x is the number of items. Find and interpret the intersection.",
      steps: [
        "At an intersection, cost equals revenue, so set 120 + 8x = 20x.",
        "Subtract 8x from both sides: 120 = 12x.",
        "Divide by 12: x = 10.",
        "Find the common output using either model. Revenue gives R(10) = 20(10) = 200.",
        "The intersection is (10,200).",
        "Interpretation: the company breaks even after selling 10 items, when both cost and revenue are 200 dollars.",
        "Check the context: 10 items is a valid nonnegative whole-number quantity, so the solution makes sense."
      ]
    }
  ],
  practice: [
    { q: "Solve the system y = x + 2 and y = 5.", a: "(3,5)", accepted: ["(3,5)", "(3, 5)", "3,5", "3, 5"] },
    { q: "Solve the system y = 2x - 1 and y = x + 4.", a: "(5,9)", accepted: ["(5,9)", "(5, 9)", "5,9", "5, 9"] },
    { q: "Solve the system y = -x + 6 and y = x.", a: "(3,3)", accepted: ["(3,3)", "(3, 3)", "3,3", "3, 3"] },
    { q: "Solve the system y = x^2 and y = 4.", a: "(-2,4) and (2,4)", accepted: ["(-2,4) and (2,4)", "(2,4) and (-2,4)", "(-2, 4) and (2, 4)", "(2, 4) and (-2, 4)", "(-2,4),(2,4)", "(2,4),(-2,4)"] },
    { q: "Solve the system y = x^2 and y = x + 2.", a: "(-1,1) and (2,4)", accepted: ["(-1,1) and (2,4)", "(2,4) and (-1,1)", "(-1, 1) and (2, 4)", "(2, 4) and (-1, 1)", "(-1,1),(2,4)", "(2,4),(-1,1)"] },
    { q: "Solve the system y = x^2 - 1 and y = 3.", a: "(-2,3) and (2,3)", accepted: ["(-2,3) and (2,3)", "(2,3) and (-2,3)", "(-2, 3) and (2, 3)", "(2, 3) and (-2, 3)", "(-2,3),(2,3)", "(2,3),(-2,3)"] },
    { q: "Solve the system y = x^2 + 1 and y = 1.", a: "(0,1)", accepted: ["(0,1)", "(0, 1)", "0,1", "0, 1"] },
    { q: "How many real solutions does y = x^2 + 3 and y = 1 have?", a: "0", accepted: ["0", "none", "no real solutions", "zero"] },
    { q: "Solve the system y = 2^x and y = 8.", a: "(3,8)", accepted: ["(3,8)", "(3, 8)", "3,8", "3, 8"] },
    { q: "Solve the system y = sqrt(x) and y = 3.", a: "(9,3)", accepted: ["(9,3)", "(9, 3)", "9,3", "9, 3"] },
    { q: "Solve the system y = 1/x and y = 2.", a: "(1/2,2)", accepted: ["(1/2,2)", "(1/2, 2)", "1/2,2", "0.5,2", "(0.5,2)", "(0.5, 2)"] },
    { q: "Solve the system y = x + 1 and y = 1/x.", a: "(-1.618, -0.618) and (0.618, 1.618)", accepted: ["(-1.618,-0.618) and (0.618,1.618)", "(-1.618, -0.618) and (0.618, 1.618)", "(0.618,1.618) and (-1.618,-0.618)", "(0.618, 1.618) and (-1.618, -0.618)", "about (-1.618,-0.618) and (0.618,1.618)"] },
    { q: "Is (2,5) a solution to y = 2x + 1 and y = x^2 + 1?", a: "yes", accepted: ["yes", "true", "it is a solution"] },
    { q: "Is (3,6) a solution to y = 2x and y = x + 3?", a: "yes", accepted: ["yes", "true", "it is a solution"] },
    { q: "Is (1,4) a solution to y = x + 3 and y = 2x + 1?", a: "no", accepted: ["no", "false", "not a solution"] },
    { q: "What equation is formed by substituting y = x^2 into y = 3x + 10?", a: "x^2 = 3x + 10", accepted: ["x^2 = 3x + 10", "x^2=3x+10", "3x + 10 = x^2", "3x+10=x^2"] },
    { q: "After solving f(x) = g(x) for a system, what should you find next?", a: "the y-values", accepted: ["the y-values", "y-values", "the y coordinates", "y-coordinates", "find y"] },
    { q: "Convert the polar point (6, 0) to rectangular coordinates.", a: "(6,0)", accepted: ["(6,0)", "(6, 0)", "6,0", "6, 0"] },
    { q: "Convert the polar point (5, pi) to rectangular coordinates.", a: "(-5,0)", accepted: ["(-5,0)", "(-5, 0)", "−5,0", "-5,0", "-5, 0"] },
    { q: "Does the polar point (4, pi/2) lie on the rectangular line x = 0?", a: "yes", accepted: ["yes", "true", "it lies on x=0", "it lies on x = 0"] },
    { q: "For x(t) = t and y(t) = t^2, what point occurs when t = 3?", a: "(3,9)", accepted: ["(3,9)", "(3, 9)", "3,9", "3, 9"] },
    { q: "For x(t) = 2t and y(t) = t + 1, what point occurs when t = 4?", a: "(8,5)", accepted: ["(8,5)", "(8, 5)", "8,5", "8, 5"] },
    { q: "Does the parametric point from x(t) = t + 2 and y(t) = 3t at t = 1 lie on y = x + 0?", a: "yes", accepted: ["yes", "true", "it lies on the line", "it satisfies the line"] },
    { q: "If two position functions intersect at (4,12), what does x = 4 usually represent?", a: "time", accepted: ["time", "the time", "4 units of time", "4 seconds", "4 hours"] },
    { q: "If cost C(x) and revenue R(x) intersect, what does the x-coordinate represent?", a: "the break-even quantity", accepted: ["the break-even quantity", "break-even quantity", "number of items", "items sold", "quantity"] },
    { q: "If cost C(x) = 50 + 5x and revenue R(x) = 15x, find the break-even quantity.", a: "5", accepted: ["5", "5 items", "x=5", "x = 5"] },
    { q: "If h1(t) = 3t + 2 and h2(t) = 5t - 6, when are the heights equal?", a: "4", accepted: ["4", "t=4", "t = 4", "4 seconds", "4 units of time"] },
    { q: "True or false: A graphical solution should be checked in the original equations when exact accuracy matters.", a: "true", accepted: ["true", "yes", "t"] }
  ]
};
