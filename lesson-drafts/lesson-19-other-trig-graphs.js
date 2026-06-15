window.COURSE.lessons["other-trig-graphs"] = {
  id: "other-trig-graphs",
  title: "Other trigonometric graphs",
  eyebrow: "Lesson 19 · Other trigonometric graphs",
  standard: "MA.912.T.2.2 · MA.912.T.3.4",
  standardText: "Define tangent, cotangent, secant, and cosecant using the unit circle; graph trigonometric functions from equations or descriptions and determine key features including domain, range, periodicity, shifts, and asymptotes.",
  objective: "Graph tangent, cotangent, secant, and cosecant; identify their periods, vertical asymptotes, domains, and ranges; and transform each parent graph.",
  estimated: "55–65 min",
  sections: [
    {
      id: "tangent-parent",
      label: "01",
      title: "Build the tangent graph",
      kicker: "Start with sine divided by cosine",
      body: [
        "Tangent is the quotient tan(x) = sin(x)/cos(x). To sketch y = tan(x), begin with exact unit-circle values in radians. The graph passes through (0, 0) because tan(0) = 0. It also passes through (pi/4, 1) and (-pi/4, -1). Between these points the curve rises from left to right.",
        "At x = pi/2, cosine is 0, so tan(x) would require division by zero. The function is undefined there, and the graph has a vertical asymptote x = pi/2. The same happens at every odd multiple of pi/2. Draw each asymptote as a dashed vertical line and never connect a curve across it. Use RAD mode when checking radian inputs on a calculator; special-angle values should remain exact."
      ],
      formula: "tan(x) = sin(x)/cos(x)   |   asymptotes: x = pi/2 + k*pi",
      diagram: "trig-graphs-tangent-parent",
      note: "The integer k means all integer shifts. For k = 0, 1, and -1, x = pi/2 + k*pi gives pi/2, 3pi/2, and -pi/2.",
      check: {
        prompt: "What is the vertical asymptote of y = tan(x) immediately to the right of x = 0?",
        answer: "x=pi/2",
        accept: ["x=pi/2", "pi/2", "x = pi/2", "x=π/2", "π/2", "90°", "90 degrees"],
        hint: "Tangent is undefined where cos(x) = 0. The first positive cosine zero is pi/2."
      }
    },
    {
      id: "cotangent-parent",
      label: "02",
      title: "Build the cotangent graph",
      kicker: "Reverse the quotient",
      body: [
        "Cotangent is cot(x) = cos(x)/sin(x), the reciprocal of tangent wherever both are defined. Since sin(0) = 0, y = cot(x) has a vertical asymptote at x = 0. More generally, sine is 0 at every integer multiple of pi, so the asymptotes are x = k*pi.",
        "One cotangent branch lies between x = 0 and x = pi. It moves downward from large positive values, crosses the x-axis at x = pi/2 because cos(pi/2) = 0, and continues toward large negative values. Exact anchors include cot(pi/4) = 1 and cot(3pi/4) = -1. Unlike tangent, every parent cotangent branch decreases from left to right."
      ],
      formula: "cot(x) = cos(x)/sin(x)   |   asymptotes: x = k*pi",
      diagram: "trig-graphs-cotangent-parent",
      note: "Tangent and cotangent both have range (-infinity, infinity), but their asymptotes and branch directions are different.",
      check: {
        prompt: "On 0 < x < pi, at which x-value does y = cot(x) cross the x-axis?",
        answer: "pi/2",
        accept: ["pi/2", "π/2", "x=pi/2", "x = pi/2", "x=π/2", "90°", "90 degrees"],
        hint: "Cotangent is 0 when its numerator cos(x) is 0 and its denominator is not 0."
      }
    },
    {
      id: "secant-cosecant",
      label: "03",
      title: "Use reciprocal graphs for secant and cosecant",
      kicker: "Guide curves reveal the branches",
      body: [
        "Secant is sec(x) = 1/cos(x). Sketch a light cosine guide curve first. Wherever cosine is 0, secant is undefined, so y = sec(x) has vertical asymptotes x = pi/2 + k*pi. At cosine's maximum (0, 1), sec(0) = 1. At cosine's minimum (pi, -1), sec(pi) = -1. Draw upward U-shaped branches where cosine is positive and downward branches where cosine is negative.",
        "Cosecant is csc(x) = 1/sin(x). Use a sine guide curve. Since sine is 0 at x = k*pi, those lines are cosecant's vertical asymptotes. The first positive branch has vertex (pi/2, 1), and the next negative branch has vertex (3pi/2, -1). A reciprocal cannot have absolute value between 0 and 1 here, so both secant and cosecant have range (-infinity, -1] union [1, infinity)."
      ],
      formula: "sec(x) = 1/cos(x), csc(x) = 1/sin(x)   |   range: y <= -1 or y >= 1",
      diagram: "trig-graphs-reciprocal-branches",
      note: "The sine or cosine guide curve is construction help, not part of the final secant or cosecant graph.",
      check: {
        prompt: "What is the exact value of sec(pi)?",
        answer: "-1",
        accept: ["-1", "−1", "sec(pi)=-1", "sec(π)=-1", "sec(pi) = -1", "sec(π) = −1"],
        hint: "cos(pi) = -1, so sec(pi) = 1/cos(pi)."
      }
    },
    {
      id: "periods",
      label: "04",
      title: "Find each period",
      kicker: "Measure one complete repeat",
      body: [
        "A period is the horizontal length of one complete repeating pattern. Tangent and cotangent repeat after pi radians because both the numerator and denominator change sign after pi, leaving their quotient unchanged. Therefore y = tan(x) and y = cot(x) have parent period pi. Secant follows cosine and cosecant follows sine, so their parent period is 2pi.",
        "For y = a tan(b(x - h)) + d or y = a cot(b(x - h)) + d, the period is pi/|b|. For y = a sec(b(x - h)) + d or y = a csc(b(x - h)) + d, the period is 2pi/|b|. Divide the parent period by the absolute value of b. The sign of b may reflect the graph, but period is a positive length."
      ],
      formula: "tan, cot: period = pi/|b|   |   sec, csc: period = 2pi/|b|",
      diagram: "trig-graphs-period-comparison",
      note: "The coefficient a changes vertical size and orientation. The values h and d shift the graph. Only b changes the period.",
      check: {
        prompt: "Find the period of y = csc(3x).",
        answer: "2pi/3",
        accept: ["2pi/3", "2π/3", "(2pi)/3", "(2π)/3", "2*pi/3", "period=2pi/3", "period = 2pi/3"],
        hint: "Cosecant's parent period is 2pi. Divide it by |3|."
      }
    },
    {
      id: "domain-range",
      label: "05",
      title: "State domain and range",
      kicker: "Exclude asymptotes from the domain",
      body: [
        "A vertical asymptote marks an x-value outside the domain. For tangent and secant, exclude the zeros of cosine: x cannot equal pi/2 + k*pi. For cotangent and cosecant, exclude the zeros of sine: x cannot equal k*pi. Set-builder notation is useful because one formula names every excluded value.",
        "Parent tangent and cotangent have range all real numbers because each branch takes every y-value. Parent secant and cosecant have y <= -1 or y >= 1. For y = a sec(b(x - h)) + d or y = a csc(b(x - h)) + d, the boundary values move to d - |a| and d + |a|, so the range is y <= d - |a| or y >= d + |a|."
      ],
      formula: "sec/csc transformed range: y <= d - |a| or y >= d + |a|",
      diagram: "trig-graphs-domain-range",
      note: "Brackets include the branch vertices because secant and cosecant can equal their boundary values. Parent range may also be written (-infinity, -1] union [1, infinity).",
      check: {
        prompt: "State the range of y = 2sec(x) - 3.",
        answer: "y<=-5 or y>=-1",
        accept: ["y<=-5 or y>=-1", "y≤-5 or y≥-1", "y <= -5 or y >= -1", "(-infinity,-5] union [-1,infinity)", "(-∞,-5]∪[-1,∞)", "(-∞, -5] union [-1, ∞)", "[-1,infinity) union (-infinity,-5]"],
        hint: "Here a = 2 and d = -3. Compute d - |a| and d + |a|."
      }
    },
    {
      id: "transformations",
      label: "06",
      title: "Transform and sketch a graph",
      kicker: "Read a, b, h, and d",
      body: [
        "Use the form y = a f(b(x - h)) + d. The value h shifts the graph horizontally: x - h moves right h units, while x + h moves left h units. The value d shifts every point and branch vertically. The factor |a| stretches or compresses vertical distances from y = d, and a negative a reflects the graph across its new midline y = d.",
        "Work in a fixed order. First identify the function family. Second compute the period from b. Third shift the parent asymptotes by h and account for the new spacing. Fourth place key points halfway or one-quarter of the way between asymptotes as appropriate. Finally apply a and d to each key y-value. For transformed tangent and cotangent, the range stays all real numbers. For secant and cosecant, transform the branch vertices and state the new split range."
      ],
      formula: "y = a f(b(x - h)) + d   ->   period, asymptotes, key points, range",
      diagram: "trig-graphs-transformation-workflow",
      note: "Do not call |a| an amplitude for tangent, cotangent, secant, or cosecant. These graphs are unbounded, so amplitude is not defined.",
      check: {
        prompt: "For y = -tan(2(x - pi/4)) + 1, state the horizontal shift.",
        answer: "right pi/4",
        accept: ["right pi/4", "right π/4", "pi/4 right", "π/4 right", "right by pi/4", "shift right pi/4", "h=pi/4", "h = pi/4"],
        hint: "Match x - h. Here x - pi/4 means h = pi/4, a shift to the right."
      }
    }
  ],
  examples: [
    {
      title: "Sketch a transformed tangent graph",
      problem: "Graph one period of y = 2tan(x - pi/4) - 1 and state its period, asymptotes, domain, and range.",
      steps: [
        "Identify a = 2, b = 1, h = pi/4, and d = -1. This is a tangent graph shifted right pi/4, stretched vertically by 2, and shifted down 1.",
        "Compute the period: pi/|b| = pi/1 = pi.",
        "The parent tangent asymptotes around one branch are x = -pi/2 and x = pi/2. Shift both right pi/4: x = -pi/4 and x = 3pi/4.",
        "The center lies halfway between the asymptotes at x = pi/4. Parent tan(0) = 0, so transform y = 2(0) - 1 = -1. The center point is (pi/4, -1).",
        "Use quarter-period anchor inputs. At x = 0, the inside angle is -pi/4, so y = 2(-1) - 1 = -3. At x = pi/2, the inside angle is pi/4, so y = 2(1) - 1 = 1.",
        "Draw an increasing curve through (0, -3), (pi/4, -1), and (pi/2, 1), approaching but never touching x = -pi/4 and x = 3pi/4.",
        "Domain: all real x except x = -pi/4 + k*pi. Range: all real numbers. The calculator must be in RAD mode if these points are checked numerically."
      ]
    },
    {
      title: "Analyze a transformed cosecant graph",
      problem: "Graph y = -2csc(x) + 1 over 0 < x < 2pi and state its asymptotes and range.",
      steps: [
        "Use the sine guide curve because cosecant is 1/sin(x). On 0 < x < 2pi, sine is 0 at x = 0, pi, and 2pi, so these are vertical asymptotes.",
        "The parent period is 2pi because b = 1. No horizontal shift changes the asymptote locations.",
        "At x = pi/2, csc(pi/2) = 1. Transform the y-value: -2(1) + 1 = -1. This gives the vertex (pi/2, -1).",
        "At x = 3pi/2, csc(3pi/2) = -1. Transform the y-value: -2(-1) + 1 = 3. This gives the vertex (3pi/2, 3).",
        "Draw a downward branch with highest point (pi/2, -1) between 0 and pi. Draw an upward branch with lowest point (3pi/2, 3) between pi and 2pi.",
        "For the range, d = 1 and |a| = 2. The boundaries are 1 - 2 = -1 and 1 + 2 = 3, so y <= -1 or y >= 3.",
        "Answer: asymptotes x = k*pi; range (-infinity, -1] union [3, infinity). Exact values require no calculator."
      ]
    },
    {
      title: "Recover features from a cotangent equation",
      problem: "For y = cot(2x + pi/2), find the period, vertical asymptotes, one x-intercept, domain, and range.",
      steps: [
        "Rewrite the inside to expose the shift: 2x + pi/2 = 2(x + pi/4) = 2(x - (-pi/4)). Thus b = 2 and h = -pi/4, a shift left pi/4.",
        "Cotangent's period is pi/|b| = pi/2.",
        "Cotangent is undefined when its inside angle equals k*pi. Solve 2x + pi/2 = k*pi: 2x = k*pi - pi/2, so x = -pi/4 + k*pi/2.",
        "Choose consecutive asymptotes x = -pi/4 and x = pi/4. One branch lies between them and decreases from left to right.",
        "Cotangent is 0 when its inside angle is pi/2 + k*pi. Using k = 0, solve 2x + pi/2 = pi/2, which gives x = 0. Therefore one x-intercept is (0, 0).",
        "Domain: all real x except x = -pi/4 + k*pi/2. Range: all real numbers.",
        "A graphing calculator check must use RAD mode. The exact period, asymptotes, and intercept should not be replaced with decimals."
      ]
    }
  ],
  practice: [
    { q: "Find the exact value of tan(pi/4).", a: "1", accepted: ["1", "tan(pi/4)=1", "tan(π/4)=1", "y=1"] },
    { q: "Find the exact value of cot(3pi/4).", a: "-1", accepted: ["-1", "−1", "cot(3pi/4)=-1", "cot(3π/4)=−1"] },
    { q: "State the parent period of y = tan(x).", a: "pi", accepted: ["pi", "π", "pi radians", "π radians", "period=pi", "period = π"] },
    { q: "State the parent period of y = sec(x).", a: "2pi", accepted: ["2pi", "2π", "2*pi", "2 pi", "2π radians", "period=2pi"] },
    { q: "Find the period of y = tan(4x).", a: "pi/4", accepted: ["pi/4", "π/4", "(pi)/4", "period=pi/4", "period = π/4"] },
    { q: "Find the period of y = cot(x/3).", a: "3pi", accepted: ["3pi", "3π", "3*pi", "3 pi", "period=3pi", "period = 3π"] },
    { q: "Find the period of y = sec(5x).", a: "2pi/5", accepted: ["2pi/5", "2π/5", "(2pi)/5", "2*pi/5", "period=2pi/5"] },
    { q: "Find the period of y = csc(2x).", a: "pi", accepted: ["pi", "π", "pi radians", "period=pi", "period = π"] },
    { q: "State the vertical asymptotes of y = tan(x).", a: "x=pi/2+kpi", accepted: ["x=pi/2+kpi", "x=pi/2+k*pi", "x = pi/2 + kpi", "x=π/2+kπ", "odd multiples of pi/2", "x=(2k+1)pi/2"] },
    { q: "State the vertical asymptotes of y = cot(x).", a: "x=kpi", accepted: ["x=kpi", "x=k*pi", "x = kpi", "x=kπ", "integer multiples of pi", "multiples of pi"] },
    { q: "Which parent function has asymptotes x = kpi and decreases on each branch?", a: "cotangent", accepted: ["cotangent", "cot", "y=cot(x)", "cot(x)"] },
    { q: "Which reciprocal graph uses cosine as its guide curve?", a: "secant", accepted: ["secant", "sec", "y=sec(x)", "sec(x)", "1/cos(x)"] },
    { q: "Find sec(0) exactly.", a: "1", accepted: ["1", "sec(0)=1", "y=1"] },
    { q: "Find csc(3pi/2) exactly.", a: "-1", accepted: ["-1", "−1", "csc(3pi/2)=-1", "csc(3π/2)=−1"] },
    { q: "State the range of y = tan(x).", a: "all real numbers", accepted: ["all real numbers", "all reals", "(-infinity,infinity)", "(-∞,∞)", "y is any real number", "R"] },
    { q: "State the range of y = sec(x).", a: "y<=-1 or y>=1", accepted: ["y<=-1 or y>=1", "y≤-1 or y≥1", "(-infinity,-1] union [1,infinity)", "(-∞,-1]∪[1,∞)", "absolute value of y >= 1", "|y|>=1"] },
    { q: "State the range of y = 3csc(x) + 2.", a: "y<=-1 or y>=5", accepted: ["y<=-1 or y>=5", "y≤-1 or y≥5", "(-infinity,-1] union [5,infinity)", "(-∞,-1]∪[5,∞)", "[5,infinity) union (-infinity,-1]"] },
    { q: "State the range of y = -4sec(x) - 2.", a: "y<=-6 or y>=2", accepted: ["y<=-6 or y>=2", "y≤-6 or y≥2", "(-infinity,-6] union [2,infinity)", "(-∞,-6]∪[2,∞)", "[2,infinity) union (-infinity,-6]"] },
    { q: "For y = tan(x - pi/3), state the horizontal shift.", a: "right pi/3", accepted: ["right pi/3", "right π/3", "pi/3 right", "shift right pi/3", "h=pi/3", "h = π/3"] },
    { q: "For y = csc(x + pi/6), state the horizontal shift.", a: "left pi/6", accepted: ["left pi/6", "left π/6", "pi/6 left", "shift left pi/6", "h=-pi/6", "h = -π/6"] },
    { q: "For y = -2cot(x) + 5, state the vertical shift.", a: "up 5", accepted: ["up 5", "5 units up", "up five", "d=5", "d = 5", "vertical shift 5"] },
    { q: "For y = -2cot(x) + 5, does each branch increase or decrease?", a: "increase", accepted: ["increase", "increasing", "it increases", "rises", "rises left to right"] },
    { q: "Give the vertical asymptotes surrounding the central branch of y = tan(2x).", a: "x=-pi/4 and x=pi/4", accepted: ["x=-pi/4 and x=pi/4", "-pi/4,pi/4", "-π/4 and π/4", "x=−π/4, x=π/4", "pi/4 and -pi/4"] },
    { q: "Give the vertical asymptotes of y = csc(x - pi/2).", a: "x=pi/2+kpi", accepted: ["x=pi/2+kpi", "x=pi/2+k*pi", "x = pi/2 + kpi", "x=π/2+kπ", "pi/2 plus integer multiples of pi"] },
    { q: "Which calculator mode should be used to check tan(2pi/9)?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] },
    { q: "Which calculator mode should be used to check sec(40°)?", a: "degree mode", accepted: ["degree mode", "degrees", "degree", "deg", "DEG", "deg mode"] },
    { q: "Is amplitude defined for y = sec(x)?", a: "no", accepted: ["no", "not defined", "undefined", "no amplitude", "amplitude is not defined", "secant has no amplitude"] },
    { q: "The graph of y = csc(x) has a branch vertex at (pi/2, 1). After the transformation y = 2csc(x) - 3, where does that vertex move?", a: "(pi/2,-1)", accepted: ["(pi/2,-1)", "(pi/2, -1)", "(π/2,-1)", "(π/2, −1)", "x=pi/2,y=-1"] }
  ]
};
