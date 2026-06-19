window.COURSE.lessons["vector-applications"] = {
  id: "vector-applications",
  title: "Vector Applications",
  eyebrow: "Lesson 31 · Vector Applications",
  standard: "MA.912.TR.5.6 · MA.912.TR.5.7",
  standardText: "Use vectors to model and solve mathematical and real-world problems, including operations with vectors, magnitude, direction, dot product, angle, projection, and two-dimensional motion.",
  objective: "Represent forces, velocities, and motion with vectors; find resultants, dot products, angles, projections, and components; and interpret answers in context.",
  estimated: "50-60 min",
  sections: [
    {
      id: "vectors-in-context",
      label: "01",
      title: "Represent quantities with vectors",
      kicker: "Magnitude and direction",
      body: [
        "A vector represents a quantity that has both size and direction. In applications, the size is called the magnitude. The direction tells where the quantity points. Forces, velocities, displacements, and wind or current effects are all common vector quantities.",
        "In the coordinate plane, a vector can be written in component form as <a,b>. The first component describes horizontal change, and the second component describes vertical change. A positive x-component points right, a negative x-component points left, a positive y-component points up, and a negative y-component points down.",
        "The magnitude of <a,b> is found with the distance formula: ||v|| = sqrt(a^2 + b^2). This is the length of the arrow. When a vector is drawn from the origin, the components form the legs of a right triangle and the magnitude is the hypotenuse."
      ],
      formula: "v = <a,b>   |   ||v|| = sqrt(a^2 + b^2)",
      diagram: "vector-components-magnitude",
      note: "Always attach units to application answers. A velocity magnitude might be miles per hour, while a force magnitude might be newtons or pounds.",
      check: {
        prompt: "Find the magnitude of <6,8>.",
        answer: "10",
        accept: ["10", "||v||=10", "magnitude 10", "sqrt(100)"],
        hint: "Use sqrt(6^2 + 8^2)."
      }
    },
    {
      id: "resultant-forces-velocities",
      label: "02",
      title: "Add vectors to find a resultant",
      kicker: "Combine the components",
      body: [
        "The resultant is the single vector that has the same effect as two or more vectors acting together. To find a resultant, add matching components. If u = <a,b> and v = <c,d>, then u + v = <a + c, b + d>.",
        "This component method works for forces and velocities. If one force pulls right and another pulls up, the resultant points diagonally. If a boat moves through water while the current pushes sideways, the ground velocity is the boat's velocity plus the current velocity.",
        "After adding components, interpret the answer. The component form tells horizontal and vertical effects. The magnitude gives the overall size of the resultant. If the direction angle is needed, use tangent with the components: tan(theta) = vertical component / horizontal component, then place the angle in the correct quadrant."
      ],
      formula: "<a,b> + <c,d> = <a+c,b+d>   |   tan(theta) = y/x",
      diagram: "vector-resultant-components",
      note: "Do not add magnitudes unless the vectors point in the same direction. Add components first, then find the resultant magnitude.",
      check: {
        prompt: "Find the resultant of <12,5> and <-3,7>.",
        answer: "<9,12>",
        accept: ["<9,12>", "<9, 12>", "(9,12)", "(9, 12)", "9,12"],
        hint: "Add x-components together and y-components together."
      }
    },
    {
      id: "direction-components",
      label: "03",
      title: "Break magnitude and direction into components",
      kicker: "Use sine and cosine",
      body: [
        "Many applications give a magnitude and a direction angle instead of components. If a vector has magnitude r and makes an angle theta with the positive x-axis, its component form is <r cos(theta), r sin(theta)>.",
        "The cosine component is horizontal because cosine matches the adjacent side of the right triangle. The sine component is vertical because sine matches the opposite side. A direction angle measured from the positive x-axis automatically gives the correct signs when the angle is in standard position.",
        "Some contexts measure direction from north, south, east, or west instead of the positive x-axis. In those cases, draw a quick triangle, label the horizontal and vertical directions, and decide which component uses sine or cosine from the angle shown."
      ],
      formula: "magnitude r at angle theta: <r cos(theta), r sin(theta)>",
      diagram: "vector-magnitude-direction-components",
      note: "Check the quadrant before finalizing signs. A vector pointing down and right has a positive x-component and a negative y-component.",
      check: {
        prompt: "A vector has magnitude 20 and direction 30 degrees from the positive x-axis. What is its x-component?",
        answer: "10sqrt(3)",
        accept: ["10sqrt(3)", "10 sqrt(3)", "10√3", "20cos30", "20cos(30)", "about 17.32", "17.32"],
        hint: "Use r cos(theta) for the horizontal component."
      }
    },
    {
      id: "dot-product",
      label: "04",
      title: "Use the dot product",
      kicker: "A scalar from two vectors",
      body: [
        "The dot product multiplies matching components and adds the products. For u = <a,b> and v = <c,d>, the dot product is u · v = ac + bd. The result is a scalar, not a vector.",
        "The dot product tells how much two vectors point in the same general direction. A positive dot product means the angle between the vectors is acute. A negative dot product means the angle is obtuse. A dot product of 0 means the vectors are perpendicular.",
        "The dot product also connects to angle: u · v = ||u||||v|| cos(theta). This form is useful when you know magnitudes and an angle, or when you need to find the angle between two component vectors."
      ],
      formula: "<a,b> · <c,d> = ac + bd   |   u · v = ||u||||v||cos(theta)",
      diagram: "vector-dot-product-angle",
      note: "Because dot product gives a number, do not write angle brackets around the final dot product.",
      check: {
        prompt: "Find <3,4> · <5,-2>.",
        answer: "7",
        accept: ["7", "dot product 7", "3*5+4*(-2)=7"],
        hint: "Multiply matching components, then add."
      }
    },
    {
      id: "angle-between-vectors",
      label: "05",
      title: "Find the angle between vectors",
      kicker: "Solve for cosine",
      body: [
        "To find the angle between two nonzero vectors, combine the component dot product with the magnitude form. First compute u · v. Then compute ||u|| and ||v||. Finally substitute into cos(theta) = (u · v)/(||u||||v||).",
        "The value of theta is the smaller angle between the two vectors, from 0 degrees to 180 degrees. If the cosine value is positive, the angle is less than 90 degrees. If the cosine value is negative, the angle is greater than 90 degrees. If the numerator is 0, the angle is exactly 90 degrees.",
        "Use inverse cosine to finish when a decimal angle is requested. Keep enough digits in the cosine value while calculating, then round the angle at the end according to the problem's directions."
      ],
      formula: "cos(theta) = (u · v)/(||u||||v||)",
      diagram: "vector-angle-between",
      note: "The formula only works for nonzero vectors. A zero vector has no direction, so it does not make a defined angle with another vector.",
      check: {
        prompt: "If u · v = 0 and both vectors are nonzero, what is the angle between them?",
        answer: "90 degrees",
        accept: ["90 degrees", "90", "90°", "right angle", "perpendicular"],
        hint: "A zero dot product means the vectors are perpendicular."
      }
    },
    {
      id: "projections-and-motion",
      label: "06",
      title: "Use projections and motion components",
      kicker: "Measure along a direction",
      body: [
        "The projection of u onto v is the part of u that points in the direction of v. It answers questions such as how much of a force acts along a ramp, how much of a velocity is along a path, or how much displacement happens in a chosen direction.",
        "The scalar projection is comp_v u = (u · v)/||v||. It gives a signed length along v. The vector projection is proj_v u = [(u · v)/(||v||^2)]v. It gives an actual vector in the direction of v. The sign tells whether u points with v or against v.",
        "For two-dimensional motion, describe position or velocity with components. Horizontal and vertical effects can be analyzed separately, then recombined as a vector. For constant velocity, displacement equals velocity times time, so each component is multiplied by the same time."
      ],
      formula: "comp_v u = (u · v)/||v||   |   proj_v u = [(u · v)/(||v||^2)]v",
      diagram: "vector-projection-motion-components",
      note: "Projection formulas use the vector you project onto in the denominator. In proj_v u, the denominator uses ||v||, not ||u||.",
      check: {
        prompt: "For u = <6,8> and v = <3,0>, what is the scalar projection of u onto v?",
        answer: "6",
        accept: ["6", "comp_v u=6", "scalar projection 6"],
        hint: "Compute (u · v)/||v||."
      }
    }
  ],
  examples: [
    {
      title: "Find a resultant velocity",
      problem: "An object has velocity <18,6> meters per second while wind adds velocity <-4,3> meters per second. Find the resultant velocity and its speed.",
      steps: [
        "Add the velocity vectors component by component: <18,6> + <-4,3>.",
        "Add the horizontal components: 18 + (-4) = 14.",
        "Add the vertical components: 6 + 3 = 9.",
        "The resultant velocity is <14,9> meters per second.",
        "Find the speed by finding the magnitude: sqrt(14^2 + 9^2) = sqrt(196 + 81) = sqrt(277).",
        "Approximate if needed: sqrt(277) is about 16.6.",
        "Interpretation: the object moves with ground velocity <14,9> meters per second and speed about 16.6 meters per second."
      ]
    },
    {
      title: "Find the angle between two vectors",
      problem: "Find the angle between u = <2,5> and v = <6,-1>, rounded to the nearest degree.",
      steps: [
        "Start with the angle formula: cos(theta) = (u · v)/(||u||||v||).",
        "Compute the dot product: u · v = 2(6) + 5(-1) = 12 - 5 = 7.",
        "Find the magnitudes: ||u|| = sqrt(2^2 + 5^2) = sqrt(29), and ||v|| = sqrt(6^2 + (-1)^2) = sqrt(37).",
        "Substitute into the formula: cos(theta) = 7/(sqrt(29)sqrt(37)).",
        "Use a calculator: 7/(sqrt(29)sqrt(37)) is about 0.2136.",
        "Take inverse cosine: theta = cos^-1(0.2136) is about 78 degrees.",
        "The angle between the vectors is about 78 degrees."
      ]
    },
    {
      title: "Project a force along a ramp",
      problem: "A force vector is F = <30,40> newtons. A ramp points in the direction d = <3,4>. Find the component of the force along the ramp and the vector projection of F onto d.",
      steps: [
        "Use d as the direction being projected onto. First find the dot product: F · d = 30(3) + 40(4) = 90 + 160 = 250.",
        "Find the magnitude of d: ||d|| = sqrt(3^2 + 4^2) = 5.",
        "The scalar projection is comp_d F = (F · d)/||d|| = 250/5 = 50.",
        "So 50 newtons of the force acts along the ramp direction.",
        "For the vector projection, use proj_d F = [(F · d)/(||d||^2)]d.",
        "Substitute: [(250)/(5^2)]<3,4> = (250/25)<3,4> = 10<3,4>.",
        "The vector projection is <30,40> newtons. In this case the full force already points in the ramp direction."
      ]
    }
  ],
  practice: [
    { q: "Find the magnitude of <9,12>.", a: "15", accepted: ["15", "||v||=15", "magnitude 15", "sqrt(225)"] },
    { q: "Find the magnitude of <-5,12>.", a: "13", accepted: ["13", "||v||=13", "magnitude 13", "sqrt(169)"] },
    { q: "Add <4,-2> and <7,9>.", a: "<11,7>", accepted: ["<11,7>", "<11, 7>", "(11,7)", "(11, 7)", "11,7"] },
    { q: "Add <-3,8> and <10,-5>.", a: "<7,3>", accepted: ["<7,3>", "<7, 3>", "(7,3)", "(7, 3)", "7,3"] },
    { q: "A force <20,0> and a force <0,15> act together. Find the resultant force.", a: "<20,15>", accepted: ["<20,15>", "<20, 15>", "(20,15)", "(20, 15)", "20,15"] },
    { q: "A velocity <30,4> is affected by current <-6,2>. Find the resultant velocity.", a: "<24,6>", accepted: ["<24,6>", "<24, 6>", "(24,6)", "(24, 6)", "24,6"] },
    { q: "Find the speed for velocity <24,7>.", a: "25", accepted: ["25", "25 units per time", "speed 25", "sqrt(625)"] },
    { q: "A vector has magnitude 10 and direction 0 degrees. Write its component form.", a: "<10,0>", accepted: ["<10,0>", "<10, 0>", "(10,0)", "(10, 0)", "10,0"] },
    { q: "A vector has magnitude 10 and direction 90 degrees. Write its component form.", a: "<0,10>", accepted: ["<0,10>", "<0, 10>", "(0,10)", "(0, 10)", "0,10"] },
    { q: "A vector has magnitude 8 and direction 180 degrees. Write its component form.", a: "<-8,0>", accepted: ["<-8,0>", "<-8, 0>", "(-8,0)", "(-8, 0)", "-8,0"] },
    { q: "A vector has magnitude 12 and direction 30 degrees. What is its y-component?", a: "6", accepted: ["6", "12sin30", "12sin(30)", "y=6", "vertical component 6"] },
    { q: "Find <2,7> · <5,3>.", a: "31", accepted: ["31", "dot product 31", "2*5+7*3=31"] },
    { q: "Find <-4,6> · <3,2>.", a: "0", accepted: ["0", "zero", "dot product 0", "-12+12=0"] },
    { q: "Find <1,-5> · <8,2>.", a: "-2", accepted: ["-2", "negative 2", "dot product -2", "8-10=-2"] },
    { q: "If u · v is positive, is the angle between nonzero vectors acute, right, or obtuse?", a: "acute", accepted: ["acute", "less than 90", "less than 90 degrees"] },
    { q: "If u · v is negative, is the angle between nonzero vectors acute, right, or obtuse?", a: "obtuse", accepted: ["obtuse", "greater than 90", "greater than 90 degrees"] },
    { q: "If u · v = 0 for two nonzero vectors, what relationship do the vectors have?", a: "perpendicular", accepted: ["perpendicular", "orthogonal", "right angle", "90 degrees", "90"] },
    { q: "Find the angle between <1,0> and <0,1>.", a: "90 degrees", accepted: ["90 degrees", "90", "90°", "perpendicular", "right angle"] },
    { q: "Find the angle between <1,0> and <1,0>.", a: "0 degrees", accepted: ["0 degrees", "0", "0°", "same direction"] },
    { q: "Find the angle between <1,0> and <-1,0>.", a: "180 degrees", accepted: ["180 degrees", "180", "180°", "opposite directions"] },
    { q: "For u = <3,4> and v = <5,0>, find u · v.", a: "15", accepted: ["15", "dot product 15", "3*5+4*0=15"] },
    { q: "For u = <3,4> and v = <5,0>, find the scalar projection of u onto v.", a: "3", accepted: ["3", "comp_v u=3", "scalar projection 3"] },
    { q: "For u = <3,4> and v = <5,0>, find the vector projection of u onto v.", a: "<3,0>", accepted: ["<3,0>", "<3, 0>", "(3,0)", "(3, 0)", "3,0"] },
    { q: "For u = <2,6> and v = <0,3>, find the scalar projection of u onto v.", a: "6", accepted: ["6", "comp_v u=6", "scalar projection 6"] },
    { q: "For u = <2,6> and v = <0,3>, find the vector projection of u onto v.", a: "<0,6>", accepted: ["<0,6>", "<0, 6>", "(0,6)", "(0, 6)", "0,6"] },
    { q: "A position changes at velocity <5,-2> meters per second for 4 seconds. Find the displacement.", a: "<20,-8>", accepted: ["<20,-8>", "<20, -8>", "(20,-8)", "(20, -8)", "20,-8"] },
    { q: "An object starts at (1,3) and has displacement <7,-4>. Find its final position.", a: "(8,-1)", accepted: ["(8,-1)", "(8, -1)", "8,-1", "<8,-1>", "<8, -1>"] },
    { q: "A velocity has horizontal component 6 and vertical component 8. Find its speed.", a: "10", accepted: ["10", "speed 10", "sqrt(100)", "10 units per time"] },
    { q: "A force of 50 pounds points east and a force of 120 pounds points north. Find the resultant magnitude.", a: "130", accepted: ["130", "130 pounds", "sqrt(16900)", "magnitude 130"] },
    { q: "True or false: The dot product of two vectors is a vector.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
