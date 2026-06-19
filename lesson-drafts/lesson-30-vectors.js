window.COURSE.lessons["vectors-operations"] = {
  id: "vectors-operations",
  title: "Vectors and Operations",
  eyebrow: "Lesson 30 · Vectors and Operations",
  standard: "MA.912.NSO.3.1 · MA.912.NSO.3.2 · MA.912.NSO.3.6 · MA.912.NSO.3.8",
  standardText: "Represent vectors in the plane, rewrite vectors between forms, multiply vectors by scalars, and add or subtract vectors algebraically or graphically.",
  objective: "Represent, measure, and operate with two-dimensional vectors using component form, geometric form, magnitude, direction angle, scalar multiplication, and unit vectors.",
  estimated: "50-60 min",
  sections: [
    {
      id: "component-and-geometric-form",
      label: "01",
      title: "Read a vector in two ways",
      kicker: "Movement with size and direction",
      body: [
        "A vector is a quantity with both magnitude and direction. In a graph, a vector can be drawn as a directed line segment with a tail, a head, and an arrow. The tail shows where the movement starts. The head shows where the movement ends.",
        "Component form records the horizontal and vertical movement. The vector <a,b> means move a units horizontally and b units vertically. Positive a moves right, negative a moves left, positive b moves up, and negative b moves down.",
        "Geometric form and component form describe the same vector. If the tail is at (x1,y1) and the head is at (x2,y2), subtract head minus tail to find the components: <x2 - x1, y2 - y1>. Vectors with the same components are equal even if they are drawn in different places."
      ],
      formula: "tail (x1,y1), head (x2,y2): v = <x2 - x1, y2 - y1>",
      diagram: "vector-component-geometric",
      note: "A vector's location on the graph can change. Its components, length, and direction stay the same.",
      check: {
        prompt: "A vector has tail (2,1) and head (7,4). What is its component form?",
        answer: "<5,3>",
        accept: ["<5,3>", "<5, 3>", "(5,3)", "(5, 3)", "5,3"],
        hint: "Subtract head minus tail: x-values first, then y-values."
      }
    },
    {
      id: "magnitude",
      label: "02",
      title: "Find the magnitude",
      kicker: "Length from the Pythagorean Theorem",
      body: [
        "The magnitude of a vector is its length. For v = <a,b>, the horizontal and vertical components make a right triangle. The vector is the hypotenuse of that triangle.",
        "Use the Pythagorean Theorem to find magnitude: |v| = sqrt(a^2 + b^2). The magnitude is never negative because it measures distance. If the square root is not a perfect square, leave the exact radical unless a decimal is requested.",
        "For <6,8>, the magnitude is sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10. This means the vector moves 10 units from tail to head, even though the components are 6 and 8."
      ],
      formula: "If v = <a,b>, then |v| = sqrt(a^2 + b^2)",
      diagram: "vector-magnitude-triangle",
      note: "Magnitude uses squares, so signs in the components do not make the length negative.",
      check: {
        prompt: "Find the magnitude of <-3,4>.",
        answer: "5",
        accept: ["5", "|v|=5", "magnitude 5", "sqrt(25)", "√25"],
        hint: "Square both components, add them, and take the square root."
      }
    },
    {
      id: "direction-angle",
      label: "03",
      title: "Measure the direction angle",
      kicker: "Turn from the positive x-axis",
      body: [
        "A direction angle tells how a vector points. In standard position, place the tail at the origin and measure counterclockwise from the positive x-axis to the vector. This angle is usually written between 0 degrees and 360 degrees.",
        "For v = <a,b>, use tan(theta) = b/a to find a reference angle. Then choose the correct quadrant from the signs of a and b. A vector with positive x and positive y is in Quadrant I. A vector with negative x and positive y is in Quadrant II. Continue the same sign check for Quadrants III and IV.",
        "Calculator inverse tangent gives an angle based on a ratio, so it may not give the final direction angle by itself. For <-3,4>, arctan(4/-3) gives a negative angle, but the vector is in Quadrant II. The direction angle is 180 degrees minus the reference angle."
      ],
      formula: "tan(theta) = b/a, then adjust by quadrant",
      diagram: "vector-direction-angle",
      note: "When a = 0, the vector is vertical. Pointing up gives 90 degrees, and pointing down gives 270 degrees.",
      check: {
        prompt: "Which quadrant contains the vector <-5,2>?",
        answer: "Quadrant II",
        accept: ["quadrant ii", "qii", "q2", "2", "ii"],
        hint: "The x-component is negative and the y-component is positive."
      }
    },
    {
      id: "addition-and-subtraction",
      label: "04",
      title: "Add and subtract vectors",
      kicker: "Combine matching components",
      body: [
        "To add vectors in component form, add the x-components and add the y-components. If u = <a,b> and v = <c,d>, then u + v = <a + c, b + d>. The result is called a resultant vector.",
        "Geometrically, addition can be shown with the tip-to-tail method. Draw the first vector. Then place the tail of the second vector at the head of the first. The resultant goes from the first tail to the final head.",
        "Subtraction means add the opposite vector. The vector -v has the same length as v but points in the opposite direction. So u - v = u + (-v) = <a - c, b - d>. Work component by component and keep the signs organized."
      ],
      formula: "<a,b> + <c,d> = <a+c,b+d>   |   <a,b> - <c,d> = <a-c,b-d>",
      diagram: "vector-add-subtract",
      note: "Subtraction is where sign errors show up most often. Rewrite u - v as u + (-v) if the signs feel crowded.",
      check: {
        prompt: "If u = <4,-1> and v = <-2,5>, find u + v.",
        answer: "<2,4>",
        accept: ["<2,4>", "<2, 4>", "(2,4)", "(2, 4)", "2,4"],
        hint: "Add the first components together and the second components together."
      }
    },
    {
      id: "scalar-multiplication",
      label: "05",
      title: "Multiply by a scalar",
      kicker: "Stretch, shrink, or reverse",
      body: [
        "A scalar is an ordinary number that multiplies a vector. To compute kv, multiply each component of v by k. If v = <a,b>, then kv = <ka,kb>.",
        "The scalar changes the magnitude. If k is positive and greater than 1, the vector gets longer in the same direction. If k is positive and between 0 and 1, the vector gets shorter in the same direction. If k is negative, the vector reverses direction.",
        "For v = <3,-2>, 4v = <12,-8>. The length becomes 4 times as large. Also, -2v = <-6,4>. The length becomes 2 times as large, and the direction is opposite the original vector."
      ],
      formula: "k<a,b> = <ka,kb>   |   |kv| = |k||v|",
      diagram: "vector-scalar-multiplication",
      note: "The scalar multiplies both components. Multiplying only one component changes the direction in a different way.",
      check: {
        prompt: "If v = <-3,6>, find 2v.",
        answer: "<-6,12>",
        accept: ["<-6,12>", "<-6, 12>", "(-6,12)", "(-6, 12)", "-6,12"],
        hint: "Multiply both components by 2."
      }
    },
    {
      id: "unit-vectors",
      label: "06",
      title: "Build a unit vector",
      kicker: "Same direction, length 1",
      body: [
        "A unit vector has magnitude 1. Unit vectors are useful because they keep direction while removing the original length. The standard unit vectors are i = <1,0> and j = <0,1>. A vector <a,b> can also be written as ai + bj.",
        "To make a unit vector in the same direction as a nonzero vector v, divide the vector by its magnitude. If v = <a,b>, then the unit vector is <a/|v|, b/|v|>. This process is called normalizing the vector.",
        "For v = <6,8>, the magnitude is 10. The unit vector in the same direction is <6/10,8/10>, or <3/5,4/5>. Its magnitude is 1 because sqrt((3/5)^2 + (4/5)^2) = sqrt(25/25) = 1."
      ],
      formula: "unit vector in direction of v: v/|v| = <a/|v|, b/|v|>",
      diagram: "vector-unit-vector",
      note: "The zero vector <0,0> has no direction, so it does not have a unit vector in its direction.",
      check: {
        prompt: "Find a unit vector in the direction of <0,5>.",
        answer: "<0,1>",
        accept: ["<0,1>", "<0, 1>", "(0,1)", "(0, 1)", "0,1", "j"],
        hint: "The vector points straight up and has magnitude 5."
      }
    }
  ],
  examples: [
    {
      title: "Convert from geometric form and measure",
      problem: "A vector has tail A(1,-2) and head B(7,6). Write the vector in component form, find its magnitude, and find its direction angle to the nearest degree.",
      steps: [
        "Subtract head minus tail to get the components: <7 - 1, 6 - (-2)>.",
        "Simplify the subtraction: <6,8>. This means the vector moves 6 units right and 8 units up.",
        "Find the magnitude using |v| = sqrt(a^2 + b^2): |v| = sqrt(6^2 + 8^2).",
        "Simplify: |v| = sqrt(36 + 64) = sqrt(100) = 10.",
        "Use tan(theta) = b/a = 8/6. Since both components are positive, the vector is in Quadrant I.",
        "Compute theta = arctan(8/6), which is about 53 degrees. No quadrant adjustment is needed in Quadrant I.",
        "The vector is <6,8>, its magnitude is 10, and its direction angle is about 53 degrees."
      ]
    },
    {
      title: "Add, subtract, and scale vectors",
      problem: "Let u = <4,-3> and v = <-2,5>. Find u + v, u - v, and 3u - 2v.",
      steps: [
        "Add matching components for u + v: <4 + (-2), -3 + 5>.",
        "Simplify to get u + v = <2,2>.",
        "Subtract matching components for u - v: <4 - (-2), -3 - 5>.",
        "Simplify to get u - v = <6,-8>.",
        "For 3u - 2v, first multiply each vector by its scalar: 3u = <12,-9> and 2v = <-4,10>.",
        "Now subtract: 3u - 2v = <12,-9> - <-4,10>.",
        "Simplify component by component: <12 - (-4), -9 - 10> = <16,-19>."
      ]
    },
    {
      title: "Create a unit vector",
      problem: "Find a unit vector in the same direction as w = <-5,12>, then write w using i and j.",
      steps: [
        "Find the magnitude of w: |w| = sqrt((-5)^2 + 12^2).",
        "Simplify the squares: |w| = sqrt(25 + 144) = sqrt(169) = 13.",
        "Divide each component by the magnitude to normalize the vector.",
        "The unit vector is <-5/13,12/13>.",
        "Check the direction: the x-component is still negative and the y-component is still positive, so the unit vector points in the same Quadrant II direction as w.",
        "Write w in linear form by using i for the horizontal component and j for the vertical component.",
        "The vector is w = -5i + 12j, and its unit direction vector is <-5/13,12/13>."
      ]
    }
  ],
  practice: [
    { q: "A vector has tail (0,0) and head (3,4). Write its component form.", a: "<3,4>", accepted: ["<3,4>", "<3, 4>", "(3,4)", "(3, 4)", "3,4"] },
    { q: "A vector has tail (-2,5) and head (4,1). Write its component form.", a: "<6,-4>", accepted: ["<6,-4>", "<6, -4>", "(6,-4)", "(6, -4)", "6,-4"] },
    { q: "A vector has tail (7,-3) and head (2,-1). Write its component form.", a: "<-5,2>", accepted: ["<-5,2>", "<-5, 2>", "(-5,2)", "(-5, 2)", "-5,2"] },
    { q: "Find the magnitude of <8,15>.", a: "17", accepted: ["17", "|v|=17", "magnitude 17", "sqrt(289)", "√289"] },
    { q: "Find the magnitude of <-5,12>.", a: "13", accepted: ["13", "|v|=13", "magnitude 13", "sqrt(169)", "√169"] },
    { q: "Find the magnitude of <6,-6>.", a: "6sqrt(2)", accepted: ["6sqrt(2)", "6 sqrt(2)", "6√2", "sqrt(72)", "√72"] },
    { q: "Which quadrant contains the vector <4,-7>?", a: "Quadrant IV", accepted: ["quadrant iv", "qiv", "q4", "4", "iv"] },
    { q: "Which quadrant contains the vector <-2,-9>?", a: "Quadrant III", accepted: ["quadrant iii", "qiii", "q3", "3", "iii"] },
    { q: "What is the direction angle of <0,8>?", a: "90 degrees", accepted: ["90", "90 degrees", "90°"] },
    { q: "What is the direction angle of <0,-6>?", a: "270 degrees", accepted: ["270", "270 degrees", "270°"] },
    { q: "If u = <5,2> and v = <-1,7>, find u + v.", a: "<4,9>", accepted: ["<4,9>", "<4, 9>", "(4,9)", "(4, 9)", "4,9"] },
    { q: "If u = <5,2> and v = <-1,7>, find u - v.", a: "<6,-5>", accepted: ["<6,-5>", "<6, -5>", "(6,-5)", "(6, -5)", "6,-5"] },
    { q: "If u = <-3,4> and v = <8,-2>, find v - u.", a: "<11,-6>", accepted: ["<11,-6>", "<11, -6>", "(11,-6)", "(11, -6)", "11,-6"] },
    { q: "If a = <2,3>, b = <-4,1>, and c = <0,-5>, find a + b + c.", a: "<-2,-1>", accepted: ["<-2,-1>", "<-2, -1>", "(-2,-1)", "(-2, -1)", "-2,-1"] },
    { q: "If v = <7,-2>, find 3v.", a: "<21,-6>", accepted: ["<21,-6>", "<21, -6>", "(21,-6)", "(21, -6)", "21,-6"] },
    { q: "If v = <-4,9>, find -v.", a: "<4,-9>", accepted: ["<4,-9>", "<4, -9>", "(4,-9)", "(4, -9)", "4,-9"] },
    { q: "If v = <10,-15>, find (1/5)v.", a: "<2,-3>", accepted: ["<2,-3>", "<2, -3>", "(2,-3)", "(2, -3)", "2,-3"] },
    { q: "If v = <3,4>, what is |2v|?", a: "10", accepted: ["10", "|2v|=10", "magnitude 10"] },
    { q: "If v = <-6,8>, what is |-3v|?", a: "30", accepted: ["30", "|-3v|=30", "magnitude 30"] },
    { q: "Write <9,-4> in i and j form.", a: "9i - 4j", accepted: ["9i-4j", "9i - 4j", "9 i - 4 j", "9i+(-4)j", "9i + -4j"] },
    { q: "Write -2i + 7j in component form.", a: "<-2,7>", accepted: ["<-2,7>", "<-2, 7>", "(-2,7)", "(-2, 7)", "-2,7"] },
    { q: "Find a unit vector in the direction of <3,4>.", a: "<3/5,4/5>", accepted: ["<3/5,4/5>", "<3/5, 4/5>", "(3/5,4/5)", "(3/5, 4/5)", "3/5,4/5"] },
    { q: "Find a unit vector in the direction of <-8,6>.", a: "<-4/5,3/5>", accepted: ["<-4/5,3/5>", "<-4/5, 3/5>", "(-4/5,3/5)", "(-4/5, 3/5)", "-4/5,3/5"] },
    { q: "Find a unit vector in the direction of <5,0>.", a: "<1,0>", accepted: ["<1,0>", "<1, 0>", "(1,0)", "(1, 0)", "1,0", "i"] },
    { q: "Find a unit vector in the direction of <0,-9>.", a: "<0,-1>", accepted: ["<0,-1>", "<0, -1>", "(0,-1)", "(0, -1)", "0,-1", "-j"] },
    { q: "If a vector has magnitude 10 and direction angle 0 degrees, write its component form.", a: "<10,0>", accepted: ["<10,0>", "<10, 0>", "(10,0)", "(10, 0)", "10,0"] },
    { q: "If a vector has magnitude 6 and direction angle 90 degrees, write its component form.", a: "<0,6>", accepted: ["<0,6>", "<0, 6>", "(0,6)", "(0, 6)", "0,6"] },
    { q: "True or false: Equal vectors must be drawn with the same tail point.", a: "false", accepted: ["false", "no", "not true", "f"] },
    { q: "True or false: Multiplying a nonzero vector by -1 reverses its direction.", a: "true", accepted: ["true", "yes", "t"] },
    { q: "True or false: The zero vector has a unit vector in its direction.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
