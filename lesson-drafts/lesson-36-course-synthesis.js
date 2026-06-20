window.COURSE.lessons["course-synthesis-ap-readiness"] = {
  id: "course-synthesis-ap-readiness",
  title: "Course Synthesis and AP Readiness",
  eyebrow: "Lesson 36 · Course Synthesis",
  standard: "MA.912.F.1.1 · MA.912.AR.5.6 · MA.912.T.1.1 · MA.912.DP.2.3",
  standardText: "Review and connect Florida Precalculus standards by choosing useful representations, interpreting equations, graphs, tables, and contexts, building multi-step models, and communicating mathematical reasoning with appropriate calculator and non-calculator strategies.",
  objective: "Choose a useful representation for a problem, connect features across equations, graphs, tables, and context, build and interpret multi-step models, and apply AP Precalculus readiness habits to cumulative review tasks.",
  estimated: "50-60 min",
  sections: [
    {
      id: "choose-representation",
      label: "01",
      title: "Choose the representation that fits the question",
      kicker: "Start with the goal",
      body: [
        "A strong solution begins by asking what the problem wants. If the question asks for an exact value, an equation or identity may be most efficient. If the question asks for behavior, a graph often shows intercepts, turning points, asymptotes, periodicity, or end behavior quickly.",
        "A table is useful when a model is built from data, when average rate of change matters, or when you need to compare several input-output pairs. A context description is useful because it gives units, restrictions, starting values, and the meaning of each variable.",
        "Do not stay with the first representation if it is not helping. Translate between forms when the task changes. An equation can produce a graph, a graph can suggest a table of important values, and a context can explain which mathematical answers make sense."
      ],
      formula: "representation choice: goal -> given information -> useful features -> reasonable answer",
      diagram: "representation-choice-model-map",
      note: "The best representation is the one that makes the requested feature visible or easier to compute.",
      check: {
        prompt: "A question asks for the long-run behavior of a polynomial function. Which representation usually shows that behavior most directly?",
        answer: "graph",
        accept: ["graph", "a graph", "graphical representation"],
        hint: "Long-run behavior is about what happens as x moves far left and far right."
      }
    },
    {
      id: "connect-features",
      label: "02",
      title: "Connect equations, graphs, tables, and context",
      kicker: "One feature, many languages",
      body: [
        "The same feature can appear in several representations. A zero in an equation is an x-intercept on a graph, an output of 0 in a table, and a moment when the context reaches a baseline or changes sign.",
        "A maximum on a graph may be the largest output in a restricted context, a vertex of a quadratic, a peak of a sinusoidal model, or a point where a table changes from increasing to decreasing. A vertical asymptote may come from a denominator equal to 0, a boundary in the graph, or an input value that the context does not allow.",
        "When comparing representations, name the feature and then translate it. For example, say 'the y-intercept is the initial value' or 'the period is the time for one full cycle.' This keeps the mathematics tied to the question instead of becoming a list of disconnected facts."
      ],
      formula: "zero = x-intercept = output 0   |   y-intercept = initial value   |   slope or secant slope = rate of change",
      diagram: "representation-feature-connection-model",
      note: "Always interpret a feature with units when the problem has a real-world context.",
      check: {
        prompt: "In a height function h(t), what does the y-intercept represent?",
        answer: "initial height",
        accept: ["initial height", "starting height", "height at time 0", "height when t=0", "h(0)"],
        hint: "The y-intercept occurs when the input is 0."
      }
    },
    {
      id: "build-multi-step-models",
      label: "03",
      title: "Build multi-step models",
      kicker: "Define, model, solve, interpret",
      body: [
        "A modeling problem usually has more than one step. First define the variables and units. Second choose a model family that matches the pattern: linear for constant difference, exponential for constant ratio, quadratic for constant second difference or projectile shape, sinusoidal for repeating cycles, and rational for quotient or inverse variation behavior.",
        "After choosing a model family, use the given information to determine the needed parameters. This might mean finding slope and intercept, solving for an exponential base, finding amplitude and midline, or using a vertex and another point for a quadratic model.",
        "The final step is interpretation. Check the domain and range from the context, decide whether exact or approximate answers are appropriate, and reject answers that do not make sense for the situation. A correct algebraic answer can still be wrong for the model if it violates the context."
      ],
      formula: "modeling cycle: define variables -> choose family -> determine parameters -> solve -> interpret",
      diagram: "modeling-cycle-representation-flow",
      note: "Context restrictions are part of the model. Time, distance, population, and length often cannot be negative.",
      check: {
        prompt: "A data set has a nearly constant ratio between consecutive y-values. Which model family is usually appropriate?",
        answer: "exponential",
        accept: ["exponential", "exponential model", "exponential function"],
        hint: "Constant ratio means repeated multiplication."
      }
    },
    {
      id: "cumulative-standards-review",
      label: "04",
      title: "Use cumulative Florida standards review",
      kicker: "Skills work together",
      body: [
        "Precalculus questions often combine skills from different units. A trigonometric equation may require unit-circle values, identities, transformations, and domain restrictions. A complex-number problem may use polar form, angle measures, and vector thinking.",
        "Review by organizing topics around actions. Represent functions, transform graphs, solve equations, interpret parameters, compare rates of change, analyze conics, use trigonometric structure, and model with vectors or polar coordinates. This is more useful than memorizing lesson titles in order.",
        "When a problem feels unfamiliar, identify the familiar pieces. Look for function family, domain, key features, units, and whether the question asks for a value, an equation, an interval, or an interpretation. Then choose the tool that matches the piece you understand first."
      ],
      formula: "review actions: represent | transform | solve | interpret | compare | model | justify",
      diagram: "standards-review-representation-model",
      note: "Cumulative review rewards flexible thinking. The same equation-solving habits appear in polynomial, rational, exponential, logarithmic, and trigonometric settings.",
      check: {
        prompt: "Which function family is most closely connected to repeating cycles such as daylight hours or tides?",
        answer: "sinusoidal",
        accept: ["sinusoidal", "trigonometric", "sine", "cosine", "sinusoidal model"],
        hint: "Repeating cycles are usually modeled with sine or cosine."
      }
    },
    {
      id: "ap-readiness-habits",
      label: "05",
      title: "Practice AP Precalculus readiness habits",
      kicker: "Reason and communicate",
      body: [
        "AP-style questions ask for more than a final answer. They often expect you to explain why a representation is appropriate, identify what a parameter means, connect two representations, or justify a conclusion using mathematical evidence.",
        "Use precise language. Instead of saying 'the graph goes up,' say 'the function is increasing on the interval.' Instead of saying 'the number is where it starts,' say 'the y-intercept represents the initial value.' A clear sentence can earn credit when it connects the calculation to the context.",
        "Show enough work to make your reasoning traceable. Write the equation used, substitute values carefully, and state the interpretation. For multiple-choice questions, use structure to eliminate choices before doing long calculations."
      ],
      formula: "AP habit: identify feature -> support with math -> interpret in context",
      diagram: "ap-readiness-representation-justification-model",
      note: "A calculator result without explanation may not answer an interpretation question. Explain what the number means.",
      check: {
        prompt: "A response says a function is increasing from x = 2 to x = 5. Which representation would support that claim directly?",
        answer: "graph",
        accept: ["graph", "a graph", "graphical representation", "table", "a table"],
        hint: "Increasing means the outputs get larger as the inputs move from left to right."
      }
    },
    {
      id: "calculator-strategy",
      label: "06",
      title: "Choose calculator and non-calculator strategies",
      kicker: "Use the right tool",
      body: [
        "A calculator is useful for graphing complicated functions, solving equations numerically, checking intersections, evaluating inverse trigonometric expressions, and exploring data. It is not a replacement for deciding what the answer means.",
        "Non-calculator work is usually better for exact values, algebraic simplification, unit-circle values, identities, intercepts from factored form, and reasoning about transformations. Exact structure often disappears if you switch too early to decimals.",
        "Before using technology, predict the type of answer. After using technology, check whether the result is reasonable. Look at units, signs, intervals, domain restrictions, and whether the problem asked for an exact value or an approximation."
      ],
      formula: "strategy check: exact or approximate? symbolic or numeric? unrestricted or contextual?",
      diagram: "calculator-noncalculator-strategy-model",
      note: "Use graphing technology to confirm behavior, but use algebra and context to justify conclusions.",
      check: {
        prompt: "A problem asks for the exact value of sin(pi/6). Which strategy is usually best?",
        answer: "non-calculator",
        accept: ["non-calculator", "non calculator", "unit circle", "exact value", "use the unit circle"],
        hint: "pi/6 is a standard unit-circle angle."
      }
    }
  ],
  examples: [
    {
      title: "Choose and connect representations",
      problem: "A table shows a city's population every 5 years: 12000, 13200, 14520, and 15972. Choose a model family and explain how the table, equation, and context connect.",
      steps: [
        "Compare consecutive ratios because population growth often involves multiplication.",
        "Compute 13200/12000 = 1.10, 14520/13200 = 1.10, and 15972/14520 = 1.10.",
        "The constant ratio suggests an exponential model.",
        "Let t be the number of 5-year periods after the first measurement. A model is P(t) = 12000(1.10)^t.",
        "In the table, each increase from one row to the next means multiplying by 1.10.",
        "In the equation, 12000 is the initial population and 1.10 is the growth factor for each 5-year period.",
        "In context, the population increases by 10% every 5 years according to the model."
      ]
    },
    {
      title: "Build a multi-step trigonometric model",
      problem: "The height of a point on a wheel has maximum 18 feet, minimum 4 feet, and completes one rotation every 12 seconds. At t = 0 the point is at its highest position. Write a cosine model and interpret its parameters.",
      steps: [
        "Find the amplitude: (18 - 4)/2 = 7.",
        "Find the midline: (18 + 4)/2 = 11.",
        "The period is 12 seconds, so B = 2pi/12 = pi/6.",
        "Because the point starts at its maximum, use a cosine model with no phase shift.",
        "A model is h(t) = 7cos((pi/6)t) + 11.",
        "The amplitude 7 means the height moves 7 feet above and below the midline.",
        "The midline 11 means the center of the wheel is 11 feet above the ground.",
        "The period 12 means the point completes one full rotation every 12 seconds."
      ]
    },
    {
      title: "Use calculator and non-calculator strategy together",
      problem: "A rational model is R(x) = (x^2 - 9)/(x - 3). Analyze the function near x = 3 and explain what should be done with a graphing calculator result.",
      steps: [
        "Start with algebra because the expression has a common factor.",
        "Factor the numerator: x^2 - 9 = (x - 3)(x + 3).",
        "For x not equal to 3, R(x) = x + 3.",
        "The original function is undefined at x = 3 because the denominator is 0.",
        "The graph follows the line y = x + 3 but has a removable discontinuity at x = 3.",
        "The missing output would be 6 if the simplified line were evaluated at x = 3, so the graph has a hole at (3,6).",
        "A calculator may draw what looks like a continuous line, so use the algebra and original domain to identify the hole."
      ]
    }
  ],
  practice: [
    { q: "A table has y-values that increase by 6 each time x increases by 1. Which model family fits this pattern?", a: "linear", accepted: ["linear", "linear model", "linear function"] },
    { q: "A table has y-values that are multiplied by 3 each time x increases by 1. Which model family fits this pattern?", a: "exponential", accepted: ["exponential", "exponential model", "exponential function"] },
    { q: "A graph has a repeating maximum and minimum at regular intervals. Which model family should you consider first?", a: "sinusoidal", accepted: ["sinusoidal", "trigonometric", "sine", "cosine", "sinusoidal model"] },
    { q: "In f(x) = 2(x - 4)^2 + 7, what is the vertex?", a: "(4,7)", accepted: ["(4,7)", "(4, 7)", "4,7", "4, 7"] },
    { q: "In g(x) = 5(2)^x, what is the y-intercept?", a: "(0,5)", accepted: ["(0,5)", "(0, 5)", "0,5", "0, 5", "5"] },
    { q: "For h(t) = -16t^2 + 48t + 4, what does h(0) represent in a height context?", a: "initial height", accepted: ["initial height", "starting height", "height at time 0", "4", "4 feet"] },
    { q: "A zero of a function appears as what feature on its graph?", a: "x-intercept", accepted: ["x-intercept", "x intercept", "root", "zero", "where the graph crosses the x-axis"] },
    { q: "A y-intercept in a population model usually represents what quantity?", a: "initial population", accepted: ["initial population", "starting population", "population at time 0", "initial value"] },
    { q: "The average rate of change from x = 1 to x = 5 compares which two quantities?", a: "change in output over change in input", accepted: ["change in output over change in input", "change in y over change in x", "delta y over delta x", "slope of the secant line"] },
    { q: "Find the average rate of change of f(x) = x^2 from x = 2 to x = 5.", a: "7", accepted: ["7", "7 units per x", "(25-4)/(5-2)=7"] },
    { q: "For f(x) = (x + 2)(x - 5), name one x-intercept.", a: "(-2,0)", accepted: ["(-2,0)", "(-2, 0)", "-2", "x=-2", "x = -2", "(5,0)", "(5, 0)", "5", "x=5", "x = 5"] },
    { q: "For f(x) = (x + 2)(x - 5), what is the y-intercept?", a: "(0,-10)", accepted: ["(0,-10)", "(0, -10)", "0,-10", "0, -10", "-10"] },
    { q: "If a rational function has denominator x - 6, which x-value must be checked for a domain restriction?", a: "6", accepted: ["6", "x=6", "x = 6"] },
    { q: "If a context measures time after an event begins, what restriction usually applies to time?", a: "time is nonnegative", accepted: ["time is nonnegative", "t>=0", "t >= 0", "time cannot be negative", "nonnegative"] },
    { q: "What is the exact value of cos(pi/3)?", a: "1/2", accepted: ["1/2", "0.5", ".5"] },
    { q: "What is the exact value of sin(pi/2)?", a: "1", accepted: ["1", "one"] },
    { q: "Solve 2^x = 16.", a: "4", accepted: ["4", "x=4", "x = 4"] },
    { q: "Solve log base 10 of x = 3.", a: "1000", accepted: ["1000", "x=1000", "x = 1000", "10^3"] },
    { q: "Convert the complex number 3 + 4i to its modulus.", a: "5", accepted: ["5", "modulus 5", "absolute value 5", "|z|=5"] },
    { q: "Find the magnitude of vector <8,15>.", a: "17", accepted: ["17", "magnitude 17", "||v||=17", "sqrt(289)"] },
    { q: "Add vectors <3,-4> and <5,9>.", a: "<8,5>", accepted: ["<8,5>", "<8, 5>", "(8,5)", "(8, 5)", "8,5"] },
    { q: "Convert polar point (4, pi/2) to rectangular coordinates.", a: "(0,4)", accepted: ["(0,4)", "(0, 4)", "0,4", "0, 4"] },
    { q: "A sinusoidal model has maximum 20 and minimum 8. What is its amplitude?", a: "6", accepted: ["6", "amplitude 6"] },
    { q: "A sinusoidal model has maximum 20 and minimum 8. What is its midline?", a: "14", accepted: ["14", "y=14", "midline 14"] },
    { q: "A sequence has first term 5 and common difference 3. What is the fourth term?", a: "14", accepted: ["14", "a4=14", "a_4=14"] },
    { q: "A geometric sequence has first term 2 and common ratio 5. What is the third term?", a: "50", accepted: ["50", "a3=50", "a_3=50"] },
    { q: "A graphing calculator gives an intersection at x = 2.75 for a real-world model. What should you check before interpreting it?", a: "domain and context", accepted: ["domain and context", "domain", "context", "units and domain", "whether it makes sense"] },
    { q: "A problem asks for an exact unit-circle value. Which strategy should you use first?", a: "non-calculator", accepted: ["non-calculator", "non calculator", "unit circle", "exact value", "use unit circle"] }
  ]
};
