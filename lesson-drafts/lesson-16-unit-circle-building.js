window.COURSE.lessons["building-unit-circle"] = {
  id: "building-unit-circle",
  title: "Building the unit circle",
  eyebrow: "Lesson 16 · Trigonometry",
  standard: "MA.912.T.2.2 · MA.912.T.2.3",
  standardText: "Define the six basic trigonometric functions for all real numbers using right triangles in the unit circle, and determine exact values at special angles and their multiples using special triangles.",
  objective: "Build exact unit-circle coordinates from radius-one geometry, special right triangles, quadrant signs, and symmetry.",
  estimated: "45–55 min",
  sections: [
    {
      id: "radius-one-coordinates",
      label: "01",
      title: "Start with a radius of one",
      kicker: "The geometric foundation",
      body: [
        "The unit circle is the circle centered at the origin with radius 1. A point P = (x, y) on the circle forms a right triangle when you draw a vertical segment to the x-axis. The horizontal leg has length |x|, the vertical leg has length |y|, and the radius from (0, 0) to P is the hypotenuse.",
        "Apply the Pythagorean theorem: x^2 + y^2 = 1^2, so every point on the unit circle satisfies x^2 + y^2 = 1. The four axis points are immediate: (1, 0), (0, 1), (-1, 0), and (0, -1). Coordinates are signed locations, even though triangle side lengths are nonnegative. In this lesson, keep coordinates exact; a calculator decimal is only a check, not a replacement for a fraction or radical."
      ],
      formula: "x^2 + y^2 = 1",
      diagram: "unit-circle-build-radius-one-coordinate-triangle",
      note: "The ordered pair always lists horizontal position first and vertical position second: (x, y).",
      check: {
        prompt: "A point on the unit circle has x = 0 and lies above the origin. What is the point?",
        answer: "(0,1)",
        accept: ["(0,1)", "(0, 1)", "0,1", "0, 1"],
        hint: "Use 0^2 + y^2 = 1 and choose the positive y-value because the point is above the origin."
      }
    },
    {
      id: "thirty-sixty-ninety",
      label: "02",
      title: "Scale the 30-60-90 triangle",
      kicker: "Two special angles",
      body: [
        "A 30-60-90 triangle has side lengths in the ratio 1 : sqrt(3) : 2. The side opposite 30° is the short leg 1, the side opposite 60° is the long leg sqrt(3), and the hypotenuse is 2. On the unit circle the hypotenuse must be 1, so divide every side by 2.",
        "The scaled leg lengths are 1/2 and sqrt(3)/2. At 30°, the horizontal leg is the longer adjacent leg, so the first-quadrant point is (sqrt(3)/2, 1/2). At 60°, the legs exchange jobs, giving (1/2, sqrt(3)/2). No calculator is needed. If you check numerically, degree mode is required when the angle is written with a degree symbol."
      ],
      formula: "30°: (sqrt(3)/2, 1/2)   |   60°: (1/2, sqrt(3)/2)",
      diagram: "unit-circle-build-30-60-90-scaling",
      note: "The smaller coordinate 1/2 is opposite the smaller 30° angle; the larger coordinate sqrt(3)/2 is opposite the larger 60° angle.",
      check: {
        prompt: "What is the exact first-quadrant point at 60°?",
        answer: "(1/2,sqrt(3)/2)",
        accept: ["(1/2,sqrt(3)/2)", "(1/2, sqrt(3)/2)", "(1/2,√3/2)", "(1/2, √3/2)", "(0.5,sqrt(3)/2)", "(0.5, sqrt(3)/2)"],
        hint: "At 60°, the horizontal leg is the short leg 1/2 and the vertical leg is the long leg sqrt(3)/2."
      }
    },
    {
      id: "forty-five-forty-five-ninety",
      label: "03",
      title: "Scale the 45-45-90 triangle",
      kicker: "Equal legs",
      body: [
        "A 45-45-90 triangle has side lengths in the ratio 1 : 1 : sqrt(2). Its two acute angles are equal, so its two legs are equal. To place it inside the unit circle, divide every side by the hypotenuse sqrt(2). Each leg becomes 1/sqrt(2).",
        "Rationalize that value: 1/sqrt(2) times sqrt(2)/sqrt(2) equals sqrt(2)/2. Therefore the first-quadrant point at 45° is (sqrt(2)/2, sqrt(2)/2). You can verify it in the circle equation: (sqrt(2)/2)^2 + (sqrt(2)/2)^2 = 1/2 + 1/2 = 1."
      ],
      formula: "45°: (sqrt(2)/2, sqrt(2)/2)",
      diagram: "unit-circle-build-45-45-90-scaling",
      note: "At 45°, x and y are equal because the right triangle has two equal legs.",
      check: {
        prompt: "Give the exact positive value of each coordinate at 45°.",
        answer: "sqrt(2)/2",
        accept: ["sqrt(2)/2", "√2/2", "1/sqrt(2)", "1/√2", "sqrt(2)*1/2", "(sqrt(2))/2"],
        hint: "Scale the 1 : 1 : sqrt(2) triangle so its hypotenuse is 1."
      }
    },
    {
      id: "exact-first-quadrant",
      label: "04",
      title: "Organize the exact coordinates",
      kicker: "The first-quadrant pattern",
      body: [
        "The first-quadrant angles 0°, 30°, 45°, 60°, and 90° produce a short pattern. The x-coordinates decrease from 1 to 0 while the y-coordinates increase from 0 to 1. Written with a common pattern, the numerators for x are sqrt(4), sqrt(3), sqrt(2), sqrt(1), sqrt(0), all over 2. The y-numerators run in the opposite order.",
        "This gives 0°: (1, 0), 30°: (sqrt(3)/2, 1/2), 45°: (sqrt(2)/2, sqrt(2)/2), 60°: (1/2, sqrt(3)/2), and 90°: (0, 1). The same locations may be labeled 0, pi/6, pi/4, pi/3, and pi/2 radians. Exact coordinates come from geometry; do not round them. If checking radians on a calculator, switch to radian mode."
      ],
      formula: "0, pi/6, pi/4, pi/3, pi/2  correspond to  0°, 30°, 45°, 60°, 90°",
      diagram: "unit-circle-build-first-quadrant-coordinate-pattern",
      note: "For 30° and 60°, the same two magnitudes appear in reverse order. At 45°, the coordinates match.",
      check: {
        prompt: "What is the exact first-quadrant point at pi/6 radians?",
        answer: "(sqrt(3)/2,1/2)",
        accept: ["(sqrt(3)/2,1/2)", "(sqrt(3)/2, 1/2)", "(√3/2,1/2)", "(√3/2, 1/2)", "(sqrt(3)/2,0.5)", "(sqrt(3)/2, 0.5)"],
        hint: "pi/6 radians is 30°. Use the 30° coordinate from the scaled 30-60-90 triangle."
      }
    },
    {
      id: "quadrant-signs",
      label: "05",
      title: "Attach the quadrant signs",
      kicker: "Location controls the signs",
      body: [
        "The special-triangle side lengths give coordinate magnitudes. The quadrant gives their signs. In Quadrant I, x and y are both positive. In Quadrant II, x is negative and y is positive. In Quadrant III, both are negative. In Quadrant IV, x is positive and y is negative.",
        "For example, a 45° reference triangle always supplies magnitudes sqrt(2)/2 and sqrt(2)/2. A point with that triangle in Quadrant III must be (-sqrt(2)/2, -sqrt(2)/2). Do not put signs on the triangle's side lengths first; identify positive magnitudes, locate the quadrant, and then sign the ordered pair."
      ],
      formula: "QI (+,+)   QII (-,+)   QIII (-,-)   QIV (+,-)",
      diagram: "unit-circle-build-quadrant-coordinate-signs",
      note: "Right is positive x, left is negative x, up is positive y, and down is negative y.",
      check: {
        prompt: "A unit-circle point is in Quadrant IV and has coordinate magnitudes 1/2 and sqrt(3)/2. What are the signs of (x, y)?",
        answer: "(+,-)",
        accept: ["(+,-)", "(+,−)", "+,-", "+, -", "positive,negative", "positive, negative", "x positive y negative", "x is positive and y is negative"],
        hint: "Quadrant IV is to the right of the y-axis and below the x-axis."
      }
    },
    {
      id: "symmetry",
      label: "06",
      title: "Reflect one point around the circle",
      kicker: "Build the rest by symmetry",
      body: [
        "A reference angle is the acute angle between a terminal ray and the x-axis. Points with the same reference angle use the same coordinate magnitudes because their right triangles are congruent. Only the signs change. Reflecting (x, y) across the y-axis gives (-x, y), across the x-axis gives (x, -y), and through the origin gives (-x, -y).",
        "Start with a known first-quadrant point, choose the reflection that reaches the desired quadrant, and then change only the required signs. For example, 150° is the reflection of 30° across the y-axis. Begin with (sqrt(3)/2, 1/2), negate x, and obtain (-sqrt(3)/2, 1/2). This constructs the circle without memorizing every point separately."
      ],
      formula: "y-axis: (x,y) -> (-x,y)   |   x-axis: (x,y) -> (x,-y)",
      diagram: "unit-circle-build-symmetry-reflections",
      note: "A reflection changes position and signs, but it does not change the coordinate magnitudes supplied by the special triangle.",
      check: {
        prompt: "Reflect (1/2, sqrt(3)/2) across the x-axis. What point results?",
        answer: "(1/2,-sqrt(3)/2)",
        accept: ["(1/2,-sqrt(3)/2)", "(1/2, -sqrt(3)/2)", "(1/2,-√3/2)", "(1/2, -√3/2)", "(0.5,-sqrt(3)/2)", "(0.5, -sqrt(3)/2)"],
        hint: "An x-axis reflection keeps x and changes the sign of y."
      }
    }
  ],
  examples: [
    {
      title: "Derive the 30° point",
      problem: "Build the exact unit-circle coordinate at 30° from a 30-60-90 triangle.",
      steps: [
        "Recall the special-triangle ratio: short leg : long leg : hypotenuse = 1 : sqrt(3) : 2.",
        "The unit-circle radius is the triangle's hypotenuse, so the hypotenuse must change from 2 to 1.",
        "Divide every side by 2. The short leg becomes 1/2 and the long leg becomes sqrt(3)/2.",
        "At 30°, the horizontal leg is adjacent to the angle and is the long leg, so x = sqrt(3)/2.",
        "The vertical leg is opposite 30° and is the short leg, so y = 1/2.",
        "The point is in Quadrant I, so both coordinates are positive.",
        "Answer: the exact coordinate is (sqrt(3)/2, 1/2). No calculator is needed."
      ]
    },
    {
      title: "Use signs at 225°",
      problem: "Find the exact unit-circle coordinate at 225°.",
      steps: [
        "Locate 225°: it is between 180° and 270°, so its terminal ray is in Quadrant III.",
        "Measure from the nearby x-axis direction at 180°: 225° - 180° = 45°. The reference angle is 45°.",
        "A 45-45-90 triangle on the unit circle has equal coordinate magnitudes sqrt(2)/2 and sqrt(2)/2.",
        "Quadrant III lies left of the y-axis, so x is negative.",
        "Quadrant III also lies below the x-axis, so y is negative.",
        "Attach those signs to the magnitudes: (-sqrt(2)/2, -sqrt(2)/2).",
        "Check: the squares add to 1/2 + 1/2 = 1, so the point lies on the unit circle."
      ]
    },
    {
      title: "Reflect to 330°",
      problem: "Use symmetry to find the exact unit-circle coordinate at 330°.",
      steps: [
        "Locate 330° in Quadrant IV because it lies between 270° and 360°.",
        "Its acute angle to the positive x-axis is 360° - 330° = 30°, so its reference angle is 30°.",
        "Start with the known 30° point in Quadrant I: (sqrt(3)/2, 1/2).",
        "The 330° ray is the reflection of the 30° ray across the x-axis.",
        "An x-axis reflection keeps x and negates y: (x, y) becomes (x, -y).",
        "Apply the reflection: (sqrt(3)/2, 1/2) becomes (sqrt(3)/2, -1/2).",
        "Answer: (sqrt(3)/2, -1/2). A degree-mode decimal check is optional; the exact radical and fraction are the required result."
      ]
    }
  ],
  practice: [
    { q: "What equation is satisfied by every point (x,y) on the unit circle?", a: "x^2+y^2=1", accepted: ["x^2+y^2=1", "x²+y²=1", "y^2+x^2=1", "y²+x²=1", "1=x^2+y^2", "1=x²+y²"] },
    { q: "Give the unit-circle point on the positive x-axis.", a: "(1,0)", accepted: ["(1,0)", "(1, 0)", "1,0", "1, 0"] },
    { q: "Give the unit-circle point on the negative y-axis.", a: "(0,-1)", accepted: ["(0,-1)", "(0, -1)", "(0,−1)", "0,-1", "0, -1"] },
    { q: "What are the scaled leg lengths of a 30-60-90 triangle with hypotenuse 1? List the smaller first.", a: "1/2,sqrt(3)/2", accepted: ["1/2,sqrt(3)/2", "1/2, sqrt(3)/2", "1/2,√3/2", "1/2, √3/2", "0.5,sqrt(3)/2"] },
    { q: "Give the exact unit-circle coordinate at 30°.", a: "(sqrt(3)/2,1/2)", accepted: ["(sqrt(3)/2,1/2)", "(sqrt(3)/2, 1/2)", "(√3/2,1/2)", "(√3/2, 1/2)", "(sqrt(3)/2,0.5)"] },
    { q: "Give the exact unit-circle coordinate at 60°.", a: "(1/2,sqrt(3)/2)", accepted: ["(1/2,sqrt(3)/2)", "(1/2, sqrt(3)/2)", "(1/2,√3/2)", "(1/2, √3/2)", "(0.5,sqrt(3)/2)"] },
    { q: "Give the exact unit-circle coordinate at 45°.", a: "(sqrt(2)/2,sqrt(2)/2)", accepted: ["(sqrt(2)/2,sqrt(2)/2)", "(sqrt(2)/2, sqrt(2)/2)", "(√2/2,√2/2)", "(√2/2, √2/2)", "(1/sqrt(2),1/sqrt(2))"] },
    { q: "Which radian angle matches 30°?", a: "pi/6", accepted: ["pi/6", "π/6", "(pi)/6", "30 degrees", "30°"] },
    { q: "Which radian angle matches 45°?", a: "pi/4", accepted: ["pi/4", "π/4", "(pi)/4", "45 degrees", "45°"] },
    { q: "Which radian angle matches 60°?", a: "pi/3", accepted: ["pi/3", "π/3", "(pi)/3", "60 degrees", "60°"] },
    { q: "In which quadrant are x negative and y positive?", a: "Quadrant II", accepted: ["quadrant ii", "quadrant 2", "ii", "2", "qii", "q2"] },
    { q: "State the signs of (x,y) in Quadrant III.", a: "(-,-)", accepted: ["(-,-)", "(-,−)", "-,-", "-, -", "negative,negative", "negative, negative", "both negative"] },
    { q: "A point has reference angle 30° and lies in Quadrant II. Give its exact coordinate.", a: "(-sqrt(3)/2,1/2)", accepted: ["(-sqrt(3)/2,1/2)", "(-sqrt(3)/2, 1/2)", "(-√3/2,1/2)", "(-√3/2, 1/2)", "(−√3/2,1/2)"] },
    { q: "A point has reference angle 60° and lies in Quadrant III. Give its exact coordinate.", a: "(-1/2,-sqrt(3)/2)", accepted: ["(-1/2,-sqrt(3)/2)", "(-1/2, -sqrt(3)/2)", "(-1/2,-√3/2)", "(-1/2, -√3/2)", "(−1/2,−√3/2)"] },
    { q: "A point has reference angle 45° and lies in Quadrant IV. Give its exact coordinate.", a: "(sqrt(2)/2,-sqrt(2)/2)", accepted: ["(sqrt(2)/2,-sqrt(2)/2)", "(sqrt(2)/2, -sqrt(2)/2)", "(√2/2,-√2/2)", "(√2/2, -√2/2)", "(1/sqrt(2),-1/sqrt(2))"] },
    { q: "Reflect (sqrt(3)/2,1/2) across the y-axis.", a: "(-sqrt(3)/2,1/2)", accepted: ["(-sqrt(3)/2,1/2)", "(-sqrt(3)/2, 1/2)", "(-√3/2,1/2)", "(-√3/2, 1/2)"] },
    { q: "Reflect (-1/2,sqrt(3)/2) across the x-axis.", a: "(-1/2,-sqrt(3)/2)", accepted: ["(-1/2,-sqrt(3)/2)", "(-1/2, -sqrt(3)/2)", "(-1/2,-√3/2)", "(-1/2, -√3/2)"] },
    { q: "Reflect (sqrt(2)/2,sqrt(2)/2) through the origin.", a: "(-sqrt(2)/2,-sqrt(2)/2)", accepted: ["(-sqrt(2)/2,-sqrt(2)/2)", "(-sqrt(2)/2, -sqrt(2)/2)", "(-√2/2,-√2/2)", "(-√2/2, -√2/2)"] },
    { q: "Find the exact unit-circle coordinate at 150°.", a: "(-sqrt(3)/2,1/2)", accepted: ["(-sqrt(3)/2,1/2)", "(-sqrt(3)/2, 1/2)", "(-√3/2,1/2)", "(-√3/2, 1/2)"] },
    { q: "Find the exact unit-circle coordinate at 225°.", a: "(-sqrt(2)/2,-sqrt(2)/2)", accepted: ["(-sqrt(2)/2,-sqrt(2)/2)", "(-sqrt(2)/2, -sqrt(2)/2)", "(-√2/2,-√2/2)", "(-√2/2, -√2/2)"] },
    { q: "Find the exact unit-circle coordinate at 300°.", a: "(1/2,-sqrt(3)/2)", accepted: ["(1/2,-sqrt(3)/2)", "(1/2, -sqrt(3)/2)", "(1/2,-√3/2)", "(1/2, -√3/2)"] },
    { q: "Find the exact unit-circle coordinate at 330°.", a: "(sqrt(3)/2,-1/2)", accepted: ["(sqrt(3)/2,-1/2)", "(sqrt(3)/2, -1/2)", "(√3/2,-1/2)", "(√3/2, -1/2)"] },
    { q: "Which calculator mode should be used to check a value written for 5pi/6?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad"] },
    { q: "Does (sqrt(3)/2,1/2) lie on the unit circle? Answer yes or no.", a: "yes", accepted: ["yes", "yes it does", "yes, it does", "true"] }
  ]
};
