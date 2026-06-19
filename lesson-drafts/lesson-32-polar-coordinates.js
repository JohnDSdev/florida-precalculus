window.COURSE.lessons["polar-coordinates"] = {
  id: "polar-coordinates",
  title: "Polar Coordinates",
  eyebrow: "Lesson 32 · Polar Coordinates",
  standard: "MA.912.T.3.1 · MA.912.T.3.2",
  standardText: "Represent points and equations using polar coordinates, convert between polar and rectangular forms, and interpret polar representations in mathematical and real-world contexts.",
  objective: "Plot and interpret polar points using radius and angle, identify multiple polar representations, and convert points between polar and rectangular coordinates.",
  estimated: "50–60 min",
  sections: [
    {
      id: "radius-and-angle",
      label: "01",
      title: "Describe location with radius and angle",
      kicker: "Two numbers, one point",
      body: [
        "A polar coordinate names a point by using a distance and a direction instead of horizontal and vertical movement. The coordinate is written (r,theta). The number r is the directed distance from the pole, which is the origin. The angle theta is measured from the polar axis, which is the positive x-axis.",
        "Start every polar point at the pole. First rotate through the angle theta. Positive angles rotate counterclockwise, and negative angles rotate clockwise. Then move r units along the terminal side of that angle. If r is positive, move in the direction the angle points.",
        "This is different from rectangular coordinates. Rectangular coordinates say move x units left or right and y units up or down. Polar coordinates say turn first, then move out from the pole. Both systems can describe the same point."
      ],
      formula: "polar point: (r,theta)   |   r = directed distance   |   theta = angle from the polar axis",
      diagram: "polar-radius-angle-intro",
      note: "When theta is written with pi, use radian thinking. When theta has a degree symbol, use degree thinking.",
      check: {
        prompt: "In the polar point (5, pi/3), what is the radius r?",
        answer: "5",
        accept: ["5", "r=5", "r = 5"],
        hint: "The radius is the first coordinate in (r,theta)."
      }
    },
    {
      id: "plot-polar-points",
      label: "02",
      title: "Plot polar points carefully",
      kicker: "Turn, then travel",
      body: [
        "To plot a polar point, use a fixed order. First locate the angle from the polar axis. Second draw or imagine the ray for that angle. Third count the radius along that ray. This keeps the angle and distance from getting mixed up.",
        "For (4, pi/2), rotate pi/2 radians counterclockwise from the positive x-axis. That ray points straight up. Since r = 4, move 4 units up from the pole. The point lands at the same location as rectangular point (0,4).",
        "For (3, 7pi/6), rotate to 7pi/6, which is in Quadrant III. Then move 3 units from the pole along that ray. The radius tells the distance from the pole; it does not tell an x-coordinate or a y-coordinate by itself."
      ],
      formula: "plotting routine: start at pole -> rotate to theta -> move r units",
      diagram: "polar-plotting-routine",
      note: "A polar grid usually shows circles for radius values and rays for angle values.",
      check: {
        prompt: "The point (6, pi) lies on which axis?",
        answer: "negative x-axis",
        accept: ["negative x-axis", "negative x axis", "the negative x-axis", "left side", "x-axis"],
        hint: "The angle pi points directly left from the pole."
      }
    },
    {
      id: "multiple-representations",
      label: "03",
      title: "Recognize multiple representations",
      kicker: "Polar names are not unique",
      body: [
        "A rectangular point usually has one ordered pair, but a polar point has many names. Adding a full turn to the angle does not change the terminal side. That means (r,theta), (r,theta + 2pi), and (r,theta - 2pi) all name the same location.",
        "A negative radius gives another way to name the same point. If r is negative, rotate to theta and then move in the opposite direction. Moving negative r units at angle theta lands in the same place as moving positive r units at angle theta + pi.",
        "For example, (4, pi/6), (4, 13pi/6), and (-4, 7pi/6) all represent the same point. The first two use the same positive radius with coterminal angles. The third uses the opposite ray with a negative radius."
      ],
      formula: "(r,theta) = (r,theta + 2pi k)   |   (r,theta) = (-r,theta + pi)",
      diagram: "polar-multiple-representations",
      note: "The letter k represents any integer, so it counts full turns forward or backward.",
      check: {
        prompt: "Which point has the same location as (2, pi/4): (2, 9pi/4) or (2, 3pi/4)?",
        answer: "(2,9pi/4)",
        accept: ["(2,9pi/4)", "(2, 9pi/4)", "2,9pi/4", "2, 9pi/4", "the first one", "first"],
        hint: "Add 2pi, which is the same as adding 8pi/4, to the angle pi/4."
      }
    },
    {
      id: "polar-to-rectangular",
      label: "04",
      title: "Convert polar to rectangular",
      kicker: "Use cosine and sine",
      body: [
        "A polar point (r,theta) forms a right triangle with the x-axis. The radius r is the hypotenuse length when r is positive, and the angle theta tells the direction. The horizontal coordinate comes from cosine, and the vertical coordinate comes from sine.",
        "Use x = r cos(theta) and y = r sin(theta). Substitute the radius and angle, then evaluate the trig values. Exact unit-circle values give exact rectangular coordinates without a calculator.",
        "For (6, pi/3), x = 6 cos(pi/3) = 6(1/2) = 3. Also y = 6 sin(pi/3) = 6(sqrt(3)/2) = 3sqrt(3). So the rectangular point is (3, 3sqrt(3))."
      ],
      formula: "x = r cos(theta)   |   y = r sin(theta)",
      diagram: "polar-to-rectangular-triangle",
      note: "The signs of x and y come from the quadrant of the angle, just like unit-circle coordinates.",
      check: {
        prompt: "Convert (4, pi/2) to rectangular coordinates.",
        answer: "(0,4)",
        accept: ["(0,4)", "(0, 4)", "0,4", "0, 4"],
        hint: "Use x = 4cos(pi/2) and y = 4sin(pi/2)."
      }
    },
    {
      id: "rectangular-to-polar",
      label: "05",
      title: "Convert rectangular to polar",
      kicker: "Distance and direction",
      body: [
        "To convert a rectangular point (x,y) to polar form, first find its distance from the origin. Use r^2 = x^2 + y^2. The positive radius is r = sqrt(x^2 + y^2). This is the same distance formula from the origin.",
        "Next find the angle. Use tan(theta) = y/x when x is not 0, then choose the angle in the correct quadrant. The tangent value gives a reference angle, but the signs of x and y decide the actual quadrant.",
        "For (-3, 3sqrt(3)), r = sqrt((-3)^2 + (3sqrt(3))^2) = sqrt(9 + 27) = 6. The point is in Quadrant II. Since tan(theta) = (3sqrt(3))/(-3) = -sqrt(3), the reference angle is pi/3, so theta = 2pi/3. One polar form is (6, 2pi/3)."
      ],
      formula: "r^2 = x^2 + y^2   |   tan(theta) = y/x",
      diagram: "rectangular-to-polar-conversion",
      note: "The arctangent result may not be in the right quadrant. Always use the signs of x and y to check the angle.",
      check: {
        prompt: "Convert (0,-5) to a polar point with positive r and 0 <= theta < 2pi.",
        answer: "(5,3pi/2)",
        accept: ["(5,3pi/2)", "(5, 3pi/2)", "5,3pi/2", "5, 3pi/2", "(5,270°)", "5,270°"],
        hint: "The point is 5 units from the origin and lies on the negative y-axis."
      }
    },
    {
      id: "interpret-context",
      label: "06",
      title: "Interpret polar points in context",
      kicker: "Direction plus distance",
      body: [
        "Polar coordinates are useful when a situation naturally starts from a central location and a direction. A radar screen, a compass bearing, a rotating arm, and a circular sensor can all describe position with a distance from a center and an angle from a reference direction.",
        "In context, identify what the pole, polar axis, radius, and angle mean. The pole might be a base station. The polar axis might point east. The radius might be measured in miles. The angle might show a direction counterclockwise from east or a bearing described by the problem.",
        "After interpreting the point, convert only if the question asks for rectangular change. A polar point such as (12, pi/6) can mean an object is 12 units from the station at a 30-degree angle above the positive x-direction. Its rectangular coordinates would describe horizontal and vertical displacement from the station."
      ],
      formula: "context reading: pole + polar axis + radius units + angle direction",
      diagram: "polar-context-radar",
      note: "Always attach units to the radius in an application. The angle describes direction, not distance.",
      check: {
        prompt: "A beacon is at polar point (8, pi/2), where r is miles from a station and the polar axis points east. How far is the beacon from the station?",
        answer: "8 miles",
        accept: ["8 miles", "8", "r=8", "r = 8", "8 mi"],
        hint: "The radius is the distance from the pole or station."
      }
    }
  ],
  examples: [
    {
      title: "Plot and rename a polar point",
      problem: "Plot (5, 2pi/3), then give two other polar names for the same point.",
      steps: [
        "Start at the pole and rotate to 2pi/3. This is 120 degrees, so the terminal side is in Quadrant II.",
        "Because r = 5 is positive, move 5 units away from the pole along that Quadrant II ray.",
        "One equivalent name comes from adding a full turn: 2pi/3 + 2pi = 2pi/3 + 6pi/3 = 8pi/3, so (5, 8pi/3) is the same point.",
        "Another equivalent name uses a negative radius. Change 5 to -5 and add pi to the angle: 2pi/3 + pi = 2pi/3 + 3pi/3 = 5pi/3.",
        "So two other names are (5, 8pi/3) and (-5, 5pi/3)."
      ]
    },
    {
      title: "Convert polar to rectangular",
      problem: "Convert (8, 5pi/6) to rectangular coordinates.",
      steps: [
        "Use x = r cos(theta) and y = r sin(theta). Here r = 8 and theta = 5pi/6.",
        "Find the unit-circle values: cos(5pi/6) = -sqrt(3)/2 and sin(5pi/6) = 1/2.",
        "Compute x = 8(-sqrt(3)/2) = -4sqrt(3).",
        "Compute y = 8(1/2) = 4.",
        "The rectangular coordinates are (-4sqrt(3), 4)."
      ]
    },
    {
      title: "Convert and interpret a location",
      problem: "A sensor reports an object at rectangular position (-6, -6) meters from the origin. Write one polar coordinate with positive r and 0 <= theta < 2pi, then interpret it.",
      steps: [
        "Find the radius: r = sqrt((-6)^2 + (-6)^2) = sqrt(36 + 36) = sqrt(72) = 6sqrt(2).",
        "The point (-6,-6) is in Quadrant III because both coordinates are negative.",
        "Use tan(theta) = y/x = (-6)/(-6) = 1. The reference angle with tangent 1 is pi/4.",
        "In Quadrant III, the angle is pi + pi/4 = 5pi/4.",
        "One polar coordinate is (6sqrt(2), 5pi/4).",
        "Interpretation: the object is 6sqrt(2) meters from the origin in the direction 5pi/4 radians from the positive x-axis."
      ]
    }
  ],
  practice: [
    { q: "In the polar point (7, pi/4), what is r?", a: "7", accepted: ["7", "r=7", "r = 7"] },
    { q: "In the polar point (7, pi/4), what is theta?", a: "pi/4", accepted: ["pi/4", "π/4", "theta=pi/4", "theta = pi/4"] },
    { q: "The polar point (3, 0) lies on which axis?", a: "positive x-axis", accepted: ["positive x-axis", "positive x axis", "the positive x-axis", "right side", "x-axis"] },
    { q: "The polar point (4, pi/2) lies on which axis?", a: "positive y-axis", accepted: ["positive y-axis", "positive y axis", "the positive y-axis", "up", "y-axis"] },
    { q: "The polar point (2, 3pi/2) lies on which axis?", a: "negative y-axis", accepted: ["negative y-axis", "negative y axis", "the negative y-axis", "down", "y-axis"] },
    { q: "Give a coterminal polar name for (5, pi/6) using the same positive radius and a larger angle.", a: "(5,13pi/6)", accepted: ["(5,13pi/6)", "(5, 13pi/6)", "5,13pi/6", "5, 13pi/6"] },
    { q: "Give a coterminal polar name for (3, 7pi/4) using the same positive radius and a smaller angle.", a: "(3,-pi/4)", accepted: ["(3,-pi/4)", "(3, -pi/4)", "3,-pi/4", "3, -pi/4", "(3,−pi/4)"] },
    { q: "Rewrite (6, pi/3) with a negative radius.", a: "(-6,4pi/3)", accepted: ["(-6,4pi/3)", "(-6, 4pi/3)", "-6,4pi/3", "-6, 4pi/3"] },
    { q: "Rewrite (-4, pi/2) with a positive radius.", a: "(4,3pi/2)", accepted: ["(4,3pi/2)", "(4, 3pi/2)", "4,3pi/2", "4, 3pi/2"] },
    { q: "Convert (6, 0) to rectangular coordinates.", a: "(6,0)", accepted: ["(6,0)", "(6, 0)", "6,0", "6, 0"] },
    { q: "Convert (5, pi/2) to rectangular coordinates.", a: "(0,5)", accepted: ["(0,5)", "(0, 5)", "0,5", "0, 5"] },
    { q: "Convert (4, pi) to rectangular coordinates.", a: "(-4,0)", accepted: ["(-4,0)", "(-4, 0)", "−4,0", "-4,0", "-4, 0"] },
    { q: "Convert (10, 3pi/2) to rectangular coordinates.", a: "(0,-10)", accepted: ["(0,-10)", "(0, -10)", "0,-10", "0, -10", "(0,−10)"] },
    { q: "Convert (2, pi/3) to rectangular coordinates.", a: "(1,sqrt(3))", accepted: ["(1,sqrt(3))", "(1, sqrt(3))", "(1,√3)", "1,sqrt(3)", "1, sqrt(3)"] },
    { q: "Convert (4, pi/6) to rectangular coordinates.", a: "(2sqrt(3),2)", accepted: ["(2sqrt(3),2)", "(2sqrt(3), 2)", "(2√3,2)", "2sqrt(3),2", "2√3,2"] },
    { q: "Convert (6, 2pi/3) to rectangular coordinates.", a: "(-3,3sqrt(3))", accepted: ["(-3,3sqrt(3))", "(-3, 3sqrt(3))", "(−3,3√3)", "-3,3sqrt(3)", "-3, 3sqrt(3)"] },
    { q: "Convert (8, 5pi/6) to rectangular coordinates.", a: "(-4sqrt(3),4)", accepted: ["(-4sqrt(3),4)", "(-4sqrt(3), 4)", "(−4√3,4)", "-4sqrt(3),4", "-4√3,4"] },
    { q: "Convert (3sqrt(2), pi/4) to rectangular coordinates.", a: "(3,3)", accepted: ["(3,3)", "(3, 3)", "3,3", "3, 3"] },
    { q: "Convert (0,0) to a polar point.", a: "(0,0)", accepted: ["(0,0)", "(0, 0)", "0,0", "0, 0", "r=0"] },
    { q: "For rectangular point (3,4), find r.", a: "5", accepted: ["5", "r=5", "r = 5"] },
    { q: "For rectangular point (-5,0), write a polar point with positive r and 0 <= theta < 2pi.", a: "(5,pi)", accepted: ["(5,pi)", "(5, pi)", "(5,π)", "5,pi", "5, pi"] },
    { q: "For rectangular point (0,6), write a polar point with positive r and 0 <= theta < 2pi.", a: "(6,pi/2)", accepted: ["(6,pi/2)", "(6, pi/2)", "(6,π/2)", "6,pi/2", "6, pi/2"] },
    { q: "For rectangular point (4,4), write a polar point with positive r and 0 <= theta < 2pi.", a: "(4sqrt(2),pi/4)", accepted: ["(4sqrt(2),pi/4)", "(4sqrt(2), pi/4)", "(4√2,π/4)", "4sqrt(2),pi/4", "4√2,pi/4"] },
    { q: "For rectangular point (-2,2), write a polar point with positive r and 0 <= theta < 2pi.", a: "(2sqrt(2),3pi/4)", accepted: ["(2sqrt(2),3pi/4)", "(2sqrt(2), 3pi/4)", "(2√2,3π/4)", "2sqrt(2),3pi/4", "2√2,3pi/4"] },
    { q: "For rectangular point (-3,-3), write a polar point with positive r and 0 <= theta < 2pi.", a: "(3sqrt(2),5pi/4)", accepted: ["(3sqrt(2),5pi/4)", "(3sqrt(2), 5pi/4)", "(3√2,5π/4)", "3sqrt(2),5pi/4", "3√2,5pi/4"] },
    { q: "For rectangular point (2,-2sqrt(3)), write a polar point with positive r and 0 <= theta < 2pi.", a: "(4,5pi/3)", accepted: ["(4,5pi/3)", "(4, 5pi/3)", "(4,5π/3)", "4,5pi/3", "4, 5pi/3"] },
    { q: "Which formula converts polar to the rectangular x-coordinate?", a: "x=r cos(theta)", accepted: ["x=r cos(theta)", "x = r cos(theta)", "x=rcos(theta)", "x=r cos θ", "x = r cos θ"] },
    { q: "Which formula converts polar to the rectangular y-coordinate?", a: "y=r sin(theta)", accepted: ["y=r sin(theta)", "y = r sin(theta)", "y=rsin(theta)", "y=r sin θ", "y = r sin θ"] },
    { q: "Which formula finds r from rectangular coordinates?", a: "r^2=x^2+y^2", accepted: ["r^2=x^2+y^2", "r²=x²+y²", "r^2 = x^2 + y^2", "r=sqrt(x^2+y^2)", "r = sqrt(x^2 + y^2)"] },
    { q: "A ship is at polar point (12, pi/6), where r is nautical miles from a port. How far is the ship from the port?", a: "12 nautical miles", accepted: ["12 nautical miles", "12", "12 miles", "12 nautical mi", "r=12"] },
    { q: "True or false: Polar coordinates can have more than one name for the same point.", a: "true", accepted: ["true", "yes", "t"] }
  ]
};
