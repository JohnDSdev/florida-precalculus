window.COURSE.lessons["trig-equations-applications"] = {
  id: "trig-equations-applications",
  title: "Trigonometric equations and applications",
  eyebrow: "Lesson 23 · Trigonometric equations and applications",
  standard: "MA.912.T.1.8 · MA.912.T.3.1 · MA.912.T.3.3",
  standardText: "Solve mathematical and real-world problems involving one-variable trigonometric ratios; choose trigonometric functions to model periodic phenomena; solve, graph, and interpret problems modeled with trigonometric functions.",
  objective: "Solve trigonometric equations on restricted intervals and as general solutions, then interpret the useful solutions in periodic models.",
  estimated: "55–65 min",
  sections: [
    {
      id: "restricted-intervals",
      label: "01",
      title: "Solve on a restricted interval",
      kicker: "Find every angle in the window",
      body: [
        "A trigonometric equation often has more than one answer because sine, cosine, and tangent repeat. When a problem gives a restricted interval, such as 0 <= theta < 2pi or 0° <= theta < 360°, your job is to find every solution inside that window and stop there.",
        "Start by isolating the trig function. For 2sin(theta) - 1 = 0, add 1 and divide by 2 to get sin(theta) = 1/2. Then use the unit circle. Sine is the y-coordinate, so ask: where is y = 1/2? In one full turn, that happens at theta = pi/6 and theta = 5pi/6.",
        "The interval matters. The notation 0 <= theta < 2pi includes 0 but does not include 2pi. If a solution lands exactly on a closed endpoint, keep it. If it lands on an open endpoint, leave it out. Use RAD mode for radian decimal checks and DEG mode for degree decimal checks."
      ],
      formula: "2sin(theta) - 1 = 0 -> sin(theta) = 1/2 -> theta = pi/6, 5pi/6 on [0, 2pi)",
      diagram: "trig-equations-restricted-window",
      note: "Do the algebra first, then use the unit circle. Do not divide by a trig expression that could be zero unless you separately check the zero case.",
      check: {
        prompt: "Solve cos(theta) = -1/2 on 0 <= theta < 2pi.",
        answer: "2pi/3,4pi/3",
        accept: ["2pi/3,4pi/3", "2pi/3 and 4pi/3", "theta=2pi/3,4pi/3", "theta = 2pi/3 and 4pi/3", "2π/3,4π/3", "2π/3 and 4π/3"],
        hint: "Cosine is negative in Quadrants II and III. Use the reference angle pi/3."
      }
    },
    {
      id: "reference-angles",
      label: "02",
      title: "Use reference angles and signs",
      kicker: "One size, then the quadrants",
      body: [
        "Most exact trig equations follow the same pattern: isolate the function, find the reference angle, choose the quadrants where the sign is correct, and write the angles in the required interval. The reference angle is the acute angle that gives the positive size of the trig value.",
        "For tan(theta) = -sqrt(3), the reference angle is pi/3 because tan(pi/3) = sqrt(3). Tangent is negative in Quadrants II and IV, so on 0 <= theta < 2pi the solutions are 2pi/3 and 5pi/3. Notice that tangent repeats every pi, but inside one full circle you still list both angles.",
        "For sine and cosine equations, first check whether the value is possible. Sine and cosine must stay between -1 and 1. An equation such as cos(theta) = 3 has no solution because no unit-circle x-coordinate can be 3."
      ],
      formula: "size -> reference angle -> sign quadrants -> interval solutions",
      diagram: "trig-equations-reference-signs",
      note: "ASTC is a quick sign check: all functions are positive in Quadrant I, sine in II, tangent in III, and cosine in IV.",
      check: {
        prompt: "Solve tan(theta) = 1 on 0 <= theta < 2pi.",
        answer: "pi/4,5pi/4",
        accept: ["pi/4,5pi/4", "pi/4 and 5pi/4", "theta=pi/4,5pi/4", "theta = pi/4 and 5pi/4", "π/4,5π/4", "π/4 and 5π/4"],
        hint: "The reference angle is pi/4, and tangent is positive in Quadrants I and III."
      }
    },
    {
      id: "general-solutions",
      label: "03",
      title: "Write a general solution",
      kicker: "Show every repeat",
      body: [
        "A general solution describes all angles that make the equation true, not just the angles in one cycle. This is where periodicity becomes part of the answer. Sine and cosine repeat every 2pi radians or 360°. Tangent repeats every pi radians or 180°.",
        "For sin(theta) = 1/2, one cycle gives theta = pi/6 and theta = 5pi/6. To repeat those forever, add 2pi n to each answer: theta = pi/6 + 2pi n or theta = 5pi/6 + 2pi n, where n is any integer. The letter n counts how many full periods you move left or right.",
        "For tangent, use its shorter period. Since tan(theta) = 1 at theta = pi/4 and repeats every pi, a compact general solution is theta = pi/4 + pi n. You do not need two separate branches for tangent unless the equation has produced different tangent values."
      ],
      formula: "sin or cos: theta = base angle + 2pi n   |   tan: theta = base angle + pi n, n integer",
      diagram: "trig-equations-general-repeats",
      note: "A general solution needs the integer condition. Write n is any integer, or n in Z, so the repeats are discrete angles, not every real number.",
      check: {
        prompt: "Write the general solution for cos(theta) = 1.",
        answer: "theta=2pi n",
        accept: ["theta=2pi n", "theta = 2pi n", "2pi n", "2πn", "theta=2πn", "theta = 2πn", "theta=0+2pi n", "0+2pi n", "2pi k", "n integer", "n in Z"],
        hint: "Cosine equals 1 at 0, then repeats every 2pi."
      }
    },
    {
      id: "multiple-angle-equations",
      label: "04",
      title: "Solve multiple-angle equations",
      kicker: "Solve for the inside first",
      body: [
        "A multiple-angle equation has an input such as 2theta, 3x, or theta/2 inside the trig function. Treat that inside expression as a temporary angle. Solve for the inside expression over the enlarged interval, then divide or undo the inside operation at the end.",
        "Example: solve sin(2theta) = sqrt(3)/2 on 0 <= theta < 2pi. Because theta runs from 0 to almost 2pi, the inside angle 2theta runs from 0 to almost 4pi. In that doubled window, sin(u) = sqrt(3)/2 at u = pi/3, 2pi/3, 7pi/3, and 8pi/3.",
        "Now return to theta by dividing every inside-angle solution by 2. The solutions are theta = pi/6, pi/3, 7pi/6, and 4pi/3. This method prevents missing the second cycle created by the 2theta input."
      ],
      formula: "u = 2theta, 0 <= u < 4pi -> u = pi/3, 2pi/3, 7pi/3, 8pi/3 -> theta = pi/6, pi/3, 7pi/6, 4pi/3",
      diagram: "trig-equations-multiple-angle-map",
      note: "Do not solve only one normal 0 to 2pi cycle for the inside angle when the inside expression covers more than one cycle.",
      check: {
        prompt: "Solve cos(2theta) = 0 on 0 <= theta < 2pi.",
        answer: "pi/4,3pi/4,5pi/4,7pi/4",
        accept: ["pi/4,3pi/4,5pi/4,7pi/4", "pi/4, 3pi/4, 5pi/4, 7pi/4", "pi/4 and 3pi/4 and 5pi/4 and 7pi/4", "π/4,3π/4,5π/4,7π/4", "theta=pi/4,3pi/4,5pi/4,7pi/4"],
        hint: "Let u = 2theta. Then 0 <= u < 4pi, and cos(u) = 0 four times in that window."
      }
    },
    {
      id: "periodic-models",
      label: "05",
      title: "Solve a periodic model",
      kicker: "Connect equation, graph, and context",
      body: [
        "A periodic model uses a trig function to describe a repeating situation such as daylight, tides, temperature, or a Ferris wheel. To answer a question, set the model equal to the requested height, temperature, or amount, then solve the trig equation within the time interval that makes sense.",
        "Suppose a Ferris wheel height is h(t) = 30 + 25sin((pi/20)t), where t is seconds and h is feet. The midline is 30, the amplitude is 25, and the period is 2pi/(pi/20) = 40 seconds. To find when the rider is 42.5 feet high, solve 30 + 25sin((pi/20)t) = 42.5.",
        "Subtract 30 and divide by 25 to get sin((pi/20)t) = 0.5. Let u = (pi/20)t. In one 40-second ride cycle, t runs from 0 to 40, so u runs from 0 to 2pi. The unit-circle solutions are u = pi/6 and 5pi/6. Multiply by 20/pi to get t = 10/3 seconds and t = 50/3 seconds."
      ],
      formula: "30 + 25sin((pi/20)t) = 42.5 -> sin((pi/20)t) = 1/2 -> t = 10/3, 50/3",
      diagram: "trig-equations-periodic-model",
      note: "Always include units in a context answer. If the question asks for one cycle, do not list repeats from later cycles unless the time interval includes them.",
      check: {
        prompt: "For h(t)=8+3cos((pi/6)t), what is the period?",
        answer: "12",
        accept: ["12", "12 seconds", "12 sec", "period=12", "period = 12", "12 units"],
        hint: "For cos(Bt), period = 2pi/B. Here B = pi/6."
      }
    },
    {
      id: "interpret-context",
      label: "06",
      title: "Interpret and filter solutions",
      kicker: "Math answers must fit the story",
      body: [
        "Solving the equation is not the last step in an application. You must filter answers by the context. Time cannot be negative when the clock starts at t = 0. A model for one day might allow only 0 <= t <= 24. A height model might have two times at the same height: one while going up and one while going down.",
        "Read each solution as a statement. If a tide model gives t = 3 and t = 9, that means the tide reaches the requested height 3 hours and 9 hours after the starting time. If the question asks when the tide is rising, use the graph or the behavior around the solution to keep only the increasing crossing.",
        "Also check whether a decimal answer is reasonable. A calculator can help with non-special angles, but match the mode to the input. If the equation uses t inside sin((pi/12)t), the angle is in radians because pi appears in the formula. Round only as requested, and keep exact values when the problem uses special angles."
      ],
      formula: "solve -> keep only the stated interval -> attach units -> describe what each solution means",
      diagram: "trig-equations-context-filter",
      note: "A complete application answer names the input, the units, and the event. For example: the rider is 42.5 feet high at 10/3 s and 50/3 s.",
      check: {
        prompt: "A model uses t for hours after midnight and gives t = -2, 6, and 18 for one day. Which solutions fit the context?",
        answer: "6,18",
        accept: ["6,18", "6 and 18", "t=6,18", "t = 6 and 18", "6 hours and 18 hours", "6 hr and 18 hr"],
        hint: "For one day after midnight, keep times from 0 through 24 hours and reject negative time."
      }
    }
  ],
  examples: [
    {
      title: "Restricted interval",
      problem: "Solve 2cos(theta) + 1 = 0 on 0 <= theta < 2pi.",
      steps: [
        "Isolate the trig function: 2cos(theta) + 1 = 0 becomes 2cos(theta) = -1.",
        "Divide by 2: cos(theta) = -1/2.",
        "Find the reference angle. Since cos(pi/3) = 1/2, the reference angle is pi/3.",
        "Choose the quadrants where cosine is negative: Quadrants II and III.",
        "Write the angles in 0 <= theta < 2pi: theta = 2pi/3 and theta = 4pi/3.",
        "Check: both angles have x-coordinate -1/2 on the unit circle, so both solve the original equation."
      ]
    },
    {
      title: "Multiple-angle equation",
      problem: "Solve sin(2x) = -1/2 on 0 <= x < 2pi.",
      steps: [
        "Let u = 2x. Because 0 <= x < 2pi, the inside angle has interval 0 <= u < 4pi.",
        "Solve sin(u) = -1/2 in that enlarged interval. The reference angle is pi/6.",
        "Sine is negative in Quadrants III and IV, so in the first cycle u = 7pi/6 and 11pi/6.",
        "Add 2pi to get the second-cycle solutions: u = 19pi/6 and 23pi/6.",
        "Divide every u-value by 2 to return to x: x = 7pi/12, 11pi/12, 19pi/12, and 23pi/12.",
        "All four x-values lie in 0 <= x < 2pi, and the doubled angles make sine equal -1/2."
      ]
    },
    {
      title: "Periodic model",
      problem: "A tide is modeled by d(t) = 4 + 1.5cos((pi/6)t), where t is hours after midnight. During 0 <= t <= 12, when is the depth 4.75 feet?",
      steps: [
        "Set the model equal to the requested depth: 4 + 1.5cos((pi/6)t) = 4.75.",
        "Subtract 4: 1.5cos((pi/6)t) = 0.75.",
        "Divide by 1.5: cos((pi/6)t) = 0.5.",
        "Let u = (pi/6)t. Since 0 <= t <= 12, the inside angle runs through 0 <= u <= 2pi.",
        "Cosine equals 0.5 at u = pi/3 and u = 5pi/3 in that interval.",
        "Solve for t by multiplying by 6/pi: t = 2 and t = 10.",
        "Interpret: the tide is 4.75 feet deep 2 hours and 10 hours after midnight."
      ]
    }
  ],
  practice: [
    { q: "Solve sin(theta)=1/2 on 0 <= theta < 2pi.", a: "pi/6,5pi/6", accepted: ["pi/6,5pi/6", "pi/6 and 5pi/6", "theta=pi/6,5pi/6", "θ=π/6,5π/6", "π/6,5π/6"] },
    { q: "Solve cos(theta)=sqrt(2)/2 on 0 <= theta < 2pi.", a: "pi/4,7pi/4", accepted: ["pi/4,7pi/4", "pi/4 and 7pi/4", "theta=pi/4,7pi/4", "π/4,7π/4"] },
    { q: "Solve tan(theta)=-1 on 0 <= theta < 2pi.", a: "3pi/4,7pi/4", accepted: ["3pi/4,7pi/4", "3pi/4 and 7pi/4", "theta=3pi/4,7pi/4", "3π/4,7π/4"] },
    { q: "Solve 2sin(theta)+sqrt(3)=0 on 0 <= theta < 2pi.", a: "4pi/3,5pi/3", accepted: ["4pi/3,5pi/3", "4pi/3 and 5pi/3", "theta=4pi/3,5pi/3", "4π/3,5π/3"] },
    { q: "Solve 3cos(theta)-3=0 on 0 <= theta < 2pi.", a: "0", accepted: ["0", "theta=0", "θ=0"] },
    { q: "Solve sin(theta)=2 on 0 <= theta < 2pi.", a: "no solution", accepted: ["no solution", "none", "no solutions", "∅", "empty set", "no real solution"] },
    { q: "Write the general solution for sin(theta)=0.", a: "theta=pi n", accepted: ["theta=pi n", "theta = pi n", "pi n", "πn", "theta=npi", "theta = npi", "npi", "n*pi", "n in Z"] },
    { q: "Write the general solution for tan(theta)=sqrt(3).", a: "theta=pi/3+pi n", accepted: ["theta=pi/3+pi n", "theta = pi/3 + pi n", "pi/3+pi n", "π/3+πn", "pi/3+npi", "pi/3 + npi", "theta=pi/3+npi"] },
    { q: "Write the general solution for cos(theta)=-1.", a: "theta=pi+2pi n", accepted: ["theta=pi+2pi n", "theta = pi + 2pi n", "pi+2pi n", "π+2πn", "theta=(2n+1)pi", "(2n+1)pi", "odd multiples of pi"] },
    { q: "Solve sin(2theta)=0 on 0 <= theta < 2pi.", a: "0,pi/2,pi,3pi/2", accepted: ["0,pi/2,pi,3pi/2", "0, pi/2, pi, 3pi/2", "0 and pi/2 and pi and 3pi/2", "0,π/2,π,3π/2"] },
    { q: "Solve cos(2theta)=1 on 0 <= theta < 2pi.", a: "0,pi", accepted: ["0,pi", "0 and pi", "theta=0,pi", "0,π", "0 and π"] },
    { q: "Solve tan(3x)=0 on 0 <= x < 2pi.", a: "0,pi/3,2pi/3,pi,4pi/3,5pi/3", accepted: ["0,pi/3,2pi/3,pi,4pi/3,5pi/3", "0, pi/3, 2pi/3, pi, 4pi/3, 5pi/3", "0,π/3,2π/3,π,4π/3,5π/3"] },
    { q: "For y=5+2sin(3t), what is the midline?", a: "5", accepted: ["5", "y=5", "midline=5", "midline = 5"] },
    { q: "For y=5+2sin(3t), what is the amplitude?", a: "2", accepted: ["2", "amplitude=2", "amplitude = 2"] },
    { q: "For y=7-4cos((pi/8)t), what is the period?", a: "16", accepted: ["16", "16 units", "period=16", "period = 16"] },
    { q: "Solve 10+6sin((pi/12)t)=16 for 0 <= t <= 24.", a: "6", accepted: ["6", "t=6", "t = 6", "6 hours", "6 hr"] },
    { q: "Solve 10+6sin((pi/12)t)=10 for 0 <= t <= 24.", a: "0,12,24", accepted: ["0,12,24", "0, 12, 24", "0 and 12 and 24", "t=0,12,24", "0 hours, 12 hours, 24 hours"] },
    { q: "A height model gives t=-1 and t=5 seconds. Which time fits a model that starts at t=0?", a: "5", accepted: ["5", "t=5", "5 seconds", "5 sec", "only 5"] },
    { q: "Which calculator mode checks sin(40°)=0.643 approximately?", a: "degree mode", accepted: ["degree mode", "degrees", "degree", "deg", "DEG", "deg mode"] },
    { q: "Which calculator mode checks cos(2pi/3)=-1/2?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] },
    { q: "What is the reference angle for theta=5pi/6?", a: "pi/6", accepted: ["pi/6", "π/6", "30 degrees", "30°"] },
    { q: "In which quadrants is sine negative?", a: "III and IV", accepted: ["III and IV", "3 and 4", "quadrants III and IV", "quadrants 3 and 4", "QIII and QIV", "Q3 and Q4"] },
    { q: "In which quadrants is cosine positive?", a: "I and IV", accepted: ["I and IV", "1 and 4", "quadrants I and IV", "quadrants 1 and 4", "QI and QIV", "Q1 and Q4"] },
    { q: "In which quadrants is tangent positive?", a: "I and III", accepted: ["I and III", "1 and 3", "quadrants I and III", "quadrants 1 and 3", "QI and QIII", "Q1 and Q3"] },
    { q: "Solve cos(theta)=0 on 0 <= theta <= 2pi.", a: "pi/2,3pi/2", accepted: ["pi/2,3pi/2", "pi/2 and 3pi/2", "theta=pi/2,3pi/2", "π/2,3π/2"] },
    { q: "For d(t)=4+1.5cos((pi/6)t), what is the maximum depth?", a: "5.5", accepted: ["5.5", "5.5 feet", "11/2", "11/2 feet", "maximum=5.5", "max=5.5"] }
  ]
};
