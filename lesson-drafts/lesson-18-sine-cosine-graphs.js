window.COURSE.lessons["sine-cosine-graphs"] = {
  id: "sine-cosine-graphs",
  title: "Graphs of sine and cosine",
  eyebrow: "Lesson 18 · Graphs of sine and cosine",
  standard: "MA.912.T.3.1 · MA.912.T.3.2",
  standardText: "Choose sine or cosine to model periodic phenomena with a specified amplitude, frequency, horizontal shift, and midline; graph a trigonometric function and determine its key features.",
  objective: "Graph transformed sine and cosine functions, identify amplitude, period, midline, and shifts, and build a sinusoidal model from periodic information.",
  estimated: "55–65 min",
  sections: [
    {
      id: "periodic-parent-graphs",
      label: "01",
      title: "See how sine and cosine repeat",
      kicker: "Start with the parent graphs",
      body: [
        "A periodic function repeats the same pattern after a fixed horizontal distance. For y = sin(x) and y = cos(x), one complete cycle has length 2π radians, or 360°. That repeating length is the period. Unless a problem uses degree symbols, this lesson measures x in radians. Set a calculator to RAD mode for decimal evaluations such as sin(1.2); use DEG mode only when the input is in degrees.",
        "The parent sine graph follows five key points over one cycle: (0, 0), (π/2, 1), (π, 0), (3π/2, −1), and (2π, 0). The parent cosine graph uses the same x-values but starts at a maximum: (0, 1), (π/2, 0), (π, −1), (3π/2, 0), and (2π, 1). Both graphs have domain all real numbers, range [−1, 1], and midline y = 0. Sine starts on the midline and rises; cosine starts at a maximum. Connect the five points with a smooth wave, then repeat it left and right."
      ],
      formula: "sine: 0, 1, 0, −1, 0   |   cosine: 1, 0, −1, 0, 1",
      diagram: "sine-cosine-parent-periodic-cycle",
      note: "The five key x-values are one quarter-period apart. For the parent graphs, 2π ÷ 4 = π/2.",
      check: {
        prompt: "What is the exact value of cos(π) on the parent cosine graph?",
        answer: "-1",
        accept: ["-1", "−1", "cos(pi)=-1", "cos(π)=−1", "y=-1"],
        hint: "Cosine starts at 1, crosses the midline at π/2, and reaches its minimum at π."
      }
    },
    {
      id: "amplitude-midline",
      label: "02",
      title: "Find amplitude, midline, and vertical shift",
      kicker: "Read the vertical features",
      body: [
        "In y = A sin(x) + D or y = A cos(x) + D, D moves the graph vertically. The midline is y = D, the horizontal line halfway between every maximum and minimum. The amplitude is |A|, the vertical distance from the midline to a maximum or minimum. Amplitude is a distance, so it is never negative. If A is negative, the graph reflects across its midline instead of having a negative amplitude.",
        "From an equation, read amplitude as |A| and midline as y = D. The range is [D − |A|, D + |A|]. From a graph or context, first identify the maximum M and minimum m. Then compute amplitude = (M − m)/2 and midline value = (M + m)/2. For a wave with maximum 9 and minimum 1, the amplitude is (9 − 1)/2 = 4 and the midline is y = (9 + 1)/2 = 5."
      ],
      formula: "amplitude = |A| = (maximum − minimum)/2;   midline: y = D = (maximum + minimum)/2",
      diagram: "sine-cosine-amplitude-midline-range",
      note: "Maximum = D + |A| and minimum = D − |A|. These two equations are useful checks on your arithmetic.",
      check: {
        prompt: "For y = −3 sin(x) + 5, state the amplitude.",
        answer: "3",
        accept: ["3", "amplitude=3", "amplitude = 3", "|−3|", "|-3|"],
        hint: "Amplitude is the absolute value of the coefficient multiplying sine."
      }
    },
    {
      id: "period-horizontal-scale",
      label: "03",
      title: "Use B to find the period",
      kicker: "Measure one horizontal cycle",
      body: [
        "In y = A sin(Bx) + D or y = A cos(Bx) + D, B changes the horizontal scale. In radians, period P = 2π/|B|. In degrees, P = 360°/|B|. A larger |B| fits more cycles into the same interval, so it creates a shorter period. A smaller nonzero |B| creates a longer period. The sign of B does not change the period because the formula uses |B|.",
        "After finding P, divide by 4 to get the quarter-period step. For y = cos(2x), P = 2π/2 = π and P/4 = π/4. Starting at x = 0, place five key points at 0, π/4, π/2, 3π/4, and π. Their cosine pattern is still maximum, midline, minimum, midline, maximum. If the period is given instead, solve |B| = 2π/P before writing a model."
      ],
      formula: "radians: P = 2π/|B|   |   degrees: P = 360°/|B|   |   key-point step = P/4",
      diagram: "sine-cosine-period-quarter-points",
      note: "Frequency describes how often a cycle occurs. In this course's equation form, B is the angular frequency; the number of cycles per input unit is 1/P.",
      check: {
        prompt: "Find the period of y = sin(4x).",
        answer: "π/2",
        accept: ["pi/2", "π/2", "(2pi)/4", "2pi/4", "period=pi/2", "P=pi/2", "1.5708"],
        hint: "Use P = 2π/|B| with B = 4, then simplify."
      }
    },
    {
      id: "horizontal-phase-shifts",
      label: "04",
      title: "Move the cycle left or right",
      kicker: "Read the shift from parentheses",
      body: [
        "The form y = A sin(B(x − C)) + D or y = A cos(B(x − C)) + D has horizontal shift C. It is also called a phase shift. The subtraction sign is built into the form: x − 3 shifts right 3, while x + 3 = x − (−3) shifts left 3. Read the value that makes the parentheses equal zero. For x + π/4, solve x + π/4 = 0 to get the starting x-value −π/4.",
        "At x = C, the inside angle is zero. A positive sine graph starts there on the midline and rises. A positive cosine graph starts there at a maximum. A negative A reverses those starts: negative sine leaves the midline falling, and negative cosine starts at a minimum. From C, add the quarter-period P/4 four times to place one complete cycle. The vertical shift D does not affect these x-values."
      ],
      formula: "horizontal shift = C in B(x − C);   first cycle: C, C + P/4, C + P/2, C + 3P/4, C + P",
      diagram: "sine-cosine-phase-shift-start",
      note: "If the equation is written as sin(Bx − k), factor B first: Bx − k = B(x − k/B), so the shift is k/B, not k.",
      check: {
        prompt: "State the horizontal shift of y = cos(x + π/3).",
        answer: "left π/3",
        accept: ["left pi/3", "left π/3", "π/3 left", "pi/3 left", "-pi/3", "−π/3", "C=-pi/3", "shift left by pi/3"],
        hint: "Rewrite x + π/3 as x − (−π/3)."
      }
    },
    {
      id: "graph-transformations",
      label: "05",
      title: "Graph a transformed sinusoid",
      kicker: "Build five dependable points",
      body: [
        "A sinusoid is any transformed sine or cosine graph. Use the form y = A sin(B(x − C)) + D or y = A cos(B(x − C)) + D. Work in a fixed order: find amplitude |A| and midline y = D; calculate period P = 2π/|B|; calculate the step P/4; begin at x = C; then apply the correct five-value pattern. This keeps horizontal and vertical changes separate.",
        "For positive sine, the y-pattern is D, D + |A|, D, D − |A|, D. For positive cosine, it is D + |A|, D, D − |A|, D, D + |A|. If A is negative, reflect every point across y = D, which reverses the high and low values. Plot the five points, label the maximum, minimum, midline, and period, connect them smoothly, and repeat. The domain remains all real numbers; the range is [D − |A|, D + |A|]."
      ],
      formula: "positive sine y-values: D, D+A, D, D−A, D   |   positive cosine: D+A, D, D−A, D, D+A",
      diagram: "sine-cosine-five-point-transformation",
      note: "Use |A| in the high and low calculations. Use the sign of A only to decide whether the usual pattern is reflected.",
      check: {
        prompt: "For y = 2 cos(x) − 1, what is the maximum value?",
        answer: "1",
        accept: ["1", "maximum=1", "max=1", "maximum value is 1", "y=1"],
        hint: "The midline is D = −1 and the amplitude is 2. Compute D + |A|."
      }
    },
    {
      id: "sinusoidal-models",
      label: "06",
      title: "Build a sinusoidal model",
      kicker: "Turn a repeating situation into an equation",
      body: [
        "Use a sinusoidal model when a quantity rises and falls in a regular repeating cycle, such as daylight hours, a rotating wheel's height, or an idealized tide. First find the maximum and minimum to calculate A and D. Next find the period P, the input distance between matching positions in consecutive cycles, and calculate B = 2π/P for radians. Then choose a convenient starting event. Cosine is usually simplest when the starting point is a maximum or minimum; sine is usually simplest when the graph starts at the midline.",
        "If a maximum occurs at x = C, use y = A cos(B(x − C)) + D with A positive. If a minimum occurs at x = C, use negative cosine or shift a positive cosine by half a period. If the quantity crosses the midline upward at x = C, use positive sine; if it crosses downward, use negative sine. State a realistic domain when the context covers only a limited time. To evaluate a radian model numerically, set the calculator to RAD mode, substitute the input with parentheses, and round only at the end."
      ],
      formula: "A = (M−m)/2;   D = (M+m)/2;   B = 2π/P;   model: y = A cos(B(x−C)) + D or y = A sin(B(x−C)) + D",
      diagram: "sine-cosine-sinusoidal-model-cycle",
      note: "Different sine and cosine equations can describe the same wave. A model is valid when its amplitude, period, midline, shift, and direction match the situation.",
      check: {
        prompt: "A periodic quantity has maximum 14 and minimum 6. What is its midline value?",
        answer: "10",
        accept: ["10", "y=10", "midline=10", "midline value is 10", "(14+6)/2"],
        hint: "Average the maximum and minimum: (14 + 6)/2."
      }
    }
  ],
  examples: [
    {
      title: "Graph a shifted sine function",
      problem: "Graph one cycle of y = 2 sin(x − π/2) + 1 and state its key features.",
      steps: [
        "Compare with y = A sin(B(x − C)) + D: A = 2, B = 1, C = π/2, and D = 1.",
        "Find the amplitude and midline: |A| = 2, so the amplitude is 2 and the midline is y = 1.",
        "Find the period: P = 2π/|1| = 2π. The quarter-period step is P/4 = π/2.",
        "Start at the horizontal shift C = π/2. Add π/2 repeatedly to get x = π/2, π, 3π/2, 2π, and 5π/2.",
        "Because A is positive and this is sine, use D, D + A, D, D − A, D. The y-values are 1, 3, 1, −1, 1.",
        "Plot (π/2, 1), (π, 3), (3π/2, 1), (2π, −1), and (5π/2, 1), then connect them smoothly. The range is [−1, 3], the maximum is 3, the minimum is −1, and the domain is all real numbers."
      ]
    },
    {
      title: "Analyze and graph a reflected cosine",
      problem: "Graph one cycle of y = −3 cos(2x) + 4 and state its key features.",
      steps: [
        "Identify A = −3, B = 2, C = 0, and D = 4. The negative A tells us to reflect the usual cosine pattern across the midline.",
        "The amplitude is |−3| = 3 and the midline is y = 4. Therefore the maximum is 4 + 3 = 7, the minimum is 4 − 3 = 1, and the range is [1, 7].",
        "Find the period: P = 2π/|2| = π. The quarter-period step is π/4.",
        "Beginning at C = 0, the five x-values are 0, π/4, π/2, 3π/4, and π.",
        "Positive cosine would use 7, 4, 1, 4, 7. Reflecting across y = 4 gives 1, 4, 7, 4, 1.",
        "Plot (0, 1), (π/4, 4), (π/2, 7), (3π/4, 4), and (π, 1). The graph starts at a minimum, completes one cycle by x = π, and repeats over all real x."
      ]
    },
    {
      title: "Model a Ferris wheel height",
      problem: "A Ferris wheel seat ranges from 2 m to 38 m and completes a revolution every 60 s. At t = 0, the seat is at its maximum. Write a height model and find the height at t = 20 s.",
      steps: [
        "Find the amplitude: A = (38 − 2)/2 = 18. This is the seat's distance above or below the wheel's center height.",
        "Find the midline: D = (38 + 2)/2 = 20, so the wheel's center is 20 m above the ground.",
        "The period is P = 60 seconds, so B = 2π/P = 2π/60 = π/30 radians per second.",
        "The seat starts at a maximum, so choose positive cosine with C = 0: h(t) = 18 cos((π/30)t) + 20, for t ≥ 0.",
        "Substitute t = 20: h(20) = 18 cos((π/30)(20)) + 20 = 18 cos(2π/3) + 20.",
        "Use the exact value cos(2π/3) = −1/2: h(20) = 18(−1/2) + 20 = −9 + 20 = 11. The seat is 11 m high after 20 seconds. A calculator check must be in RAD mode because the angle contains π."
      ]
    }
  ],
  practice: [
    { q: "What is the period of the parent function y = sin(x)?", a: "2π", accepted: ["2pi", "2π", "2*pi", "360", "360°", "360 degrees", "period=2pi", "P=2pi"] },
    { q: "Find the exact value of sin(3π/2).", a: "-1", accepted: ["-1", "−1", "sin(3pi/2)=-1", "sin(3π/2)=−1", "y=-1"] },
    { q: "Does the parent cosine graph begin at a maximum, a minimum, or the midline when x = 0?", a: "maximum", accepted: ["maximum", "a maximum", "max", "maximum value", "it begins at a maximum"] },
    { q: "For y = 5 sin(x) − 2, find the amplitude.", a: "5", accepted: ["5", "amplitude=5", "amplitude = 5", "|5|"] },
    { q: "For y = 5 sin(x) − 2, state the midline.", a: "y = -2", accepted: ["y=-2", "y = -2", "y=−2", "-2", "−2", "midline=-2", "midline is y=-2"] },
    { q: "For y = −4 cos(x) + 3, find the range.", a: "[-1, 7]", accepted: ["[-1,7]", "[-1, 7]", "[−1,7]", "[−1, 7]", "-1<=y<=7", "−1≤y≤7", "from -1 to 7", "minimum -1 maximum 7"] },
    { q: "A sinusoid has maximum 18 and minimum 6. Find its amplitude.", a: "6", accepted: ["6", "amplitude=6", "(18-6)/2", "(18−6)/2"] },
    { q: "A sinusoid has maximum 18 and minimum 6. Find its midline value.", a: "12", accepted: ["12", "y=12", "midline=12", "(18+6)/2"] },
    { q: "Find the period of y = cos(3x).", a: "2π/3", accepted: ["2pi/3", "2π/3", "(2pi)/3", "period=2pi/3", "P=2pi/3"] },
    { q: "Find the period of y = sin(x/2).", a: "4π", accepted: ["4pi", "4π", "4*pi", "period=4pi", "P=4pi", "2pi/(1/2)"] },
    { q: "For y = cos(4x), find the quarter-period step used between key points.", a: "π/8", accepted: ["pi/8", "π/8", "step=pi/8", "P/4=pi/8", "quarter period is pi/8"] },
    { q: "A sinusoid has period 8. Find the positive value of B in y = sin(Bx).", a: "π/4", accepted: ["pi/4", "π/4", "B=pi/4", "2pi/8", "2π/8"] },
    { q: "State the horizontal shift of y = sin(x − π/6).", a: "right π/6", accepted: ["right pi/6", "right π/6", "pi/6 right", "π/6 right", "pi/6", "π/6", "C=pi/6", "shift right pi/6"] },
    { q: "State the horizontal shift of y = cos(x + 2).", a: "left 2", accepted: ["left 2", "2 left", "-2", "C=-2", "shift left 2", "left by 2"] },
    { q: "Rewrite y = sin(2x − π) in the form y = sin(2(x − C)). What is C?", a: "π/2", accepted: ["pi/2", "π/2", "C=pi/2", "C = π/2", "2(x-pi/2)"] },
    { q: "For y = 3 sin(x − π) + 4, what is the y-value of the first key point at x = π?", a: "4", accepted: ["4", "y=4", "(pi,4)", "(π,4)", "midline 4"] },
    { q: "For y = 2 cos(x) − 5, find the minimum value.", a: "-7", accepted: ["-7", "−7", "minimum=-7", "min=-7", "y=-7", "minimum value is -7"] },
    { q: "For y = −2 cos(x) + 1, is the key point at x = 0 a maximum or minimum?", a: "minimum", accepted: ["minimum", "a minimum", "min", "minimum point", "it starts at a minimum"] },
    { q: "List the five y-values for one cycle of y = 2 sin(x) + 3, starting at x = 0.", a: "3, 5, 3, 1, 3", accepted: ["3,5,3,1,3", "3, 5, 3, 1, 3", "3 5 3 1 3", "3;5;3;1;3", "[3,5,3,1,3]"] },
    { q: "A tide ranges from 1 ft to 9 ft. Find the amplitude and midline value, in that order.", a: "4, 5", accepted: ["4,5", "4, 5", "amplitude 4 midline 5", "A=4,D=5", "A = 4, D = 5", "4 and 5"] },
    { q: "A periodic model has a 24-hour period. Find B = 2π/P.", a: "π/12", accepted: ["pi/12", "π/12", "B=pi/12", "2pi/24", "2π/24"] },
    { q: "A quantity starts at its maximum and then decreases. Which parent function gives the simplest model?", a: "cosine", accepted: ["cosine", "cos", "positive cosine", "a cosine function", "y=cos(x)"] },
    { q: "A quantity crosses its midline upward at the starting time. Which parent function gives the simplest model?", a: "sine", accepted: ["sine", "sin", "positive sine", "a sine function", "y=sin(x)"] },
    { q: "A model uses h(t) = 7 cos((π/6)t) + 10. What is h(0)?", a: "17", accepted: ["17", "h(0)=17", "y=17", "7(1)+10", "17 units"] },
    { q: "A radian model contains cos((π/10)t). Which calculator angle mode should be used for a decimal evaluation?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] },
    { q: "The height of a rotating point has maximum 30, minimum 10, period 12, and a maximum at t = 0. Choose a model.", a: "h(t)=10cos((π/6)t)+20", accepted: ["h(t)=10cos((pi/6)t)+20", "h(t)=10cos(pi*t/6)+20", "10cos((pi/6)t)+20", "y=10cos((pi/6)x)+20", "10cos(pi*x/6)+20", "20+10cos(pi*t/6)"] }
  ]
};
