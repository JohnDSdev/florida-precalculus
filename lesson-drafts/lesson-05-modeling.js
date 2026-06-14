window.COURSE.lessons["choosing-function-models"] = {
  id: "choosing-function-models",
  title: "Choosing function models",
  eyebrow: "Lesson 05 · Functions in the real world",
  standard: "MA.912.F.1.7 · MA.912.AR.5.7 · MA.912.AR.6.6 · MA.K12.MTR.7.1",
  standardText: "Compare key features of functions represented in different ways, solve real-world problems modeled by exponential or polynomial functions, interpret key features and constraints in context, and apply mathematics to real-world contexts.",
  objective: "Choose a reasonable function family, build a model from a situation or table, and explain what its numbers mean in context.",
  estimated: "45–55 min",
  sections: [
    {
      id: "what-models-do", label: "01", title: "Turn a situation into a model", kicker: "The central idea",
      body: [
        "A function model is a mathematical rule that describes how one real quantity depends on another. Start by deciding what the input and output mean. Then look for the kind of change connecting them.",
        "For example, if x is the number of hours after noon and T(x) is temperature in degrees Fahrenheit, the equation T(x) = 82 − 3x says the temperature begins at 82°F and falls 3°F each hour. A useful model must match both the numbers and the story."
      ],
      formula: "input x → function rule → output f(x)",
      diagram: "model-input-output",
      note: "Always define variables with units. A bare x or y does not explain what the model measures.",
      check: { prompt: "In P(t)=120+15t, P is a population and t is years. What does 15 mean?", answer: "the population increases by 15 per year", accept: ["the population increases by 15 per year", "increases by 15 per year", "15 people per year", "15 per year", "growth of 15 per year"], hint: "The number multiplying t is the change in P for one more year." }
    },
    {
      id: "recognize-pattern", label: "02", title: "Look at how the output changes", kicker: "Step two",
      body: [
        "When the inputs are equally spaced, compare consecutive outputs. A constant first difference points to a linear model. A constant second difference points to a quadratic model. A constant ratio points to an exponential model.",
        "For outputs 5, 9, 13, 17, the first difference is always +4, so a linear model fits. For 3, 6, 12, 24, each output is multiplied by 2, so an exponential model fits. Use a ratio only when the outputs involved are nonzero."
      ],
      formula: "linear: constant difference   quadratic: constant second difference   exponential: constant ratio",
      diagram: "model-pattern-table",
      note: "Do not choose a model just because its graph looks close. Check the numerical pattern and whether it makes sense in the situation.",
      check: { prompt: "The outputs are 2, 6, 18, 54 for equally spaced inputs. Which model family fits?", answer: "exponential", accept: ["exponential", "exponential model", "an exponential function"], hint: "Divide each output by the one before it." }
    },
    {
      id: "choose-family", label: "03", title: "Match the pattern to the story", kicker: "Step three",
      body: [
        "A linear model adds or subtracts the same amount during each equal input interval. A quadratic model has changing first differences but constant second differences; it often describes area or a path that bends once. An exponential model repeatedly multiplies by the same factor, which means a constant percent change.",
        "Other stories need other families. Inverse variation can use a rational model, such as travel time d/v for fixed distance d. Repeating motion can use a trigonometric model. A quantity with different rules in different intervals may need a piecewise model. Choose the simplest family supported by the pattern and context."
      ],
      formula: "add the same amount → linear   multiply by the same factor → exponential",
      diagram: "model-family-shapes",
      note: "Words such as 'increases' do not identify a family by themselves. Ask whether the increase is by a fixed amount, a fixed percent, or another pattern.",
      check: { prompt: "A savings balance earns 4% interest each year. Which model family should you try first?", answer: "exponential", accept: ["exponential", "exponential model", "an exponential function"], hint: "A fixed percent change means multiplication by the same growth factor each year." }
    },
    {
      id: "build-model", label: "04", title: "Build the equation", kicker: "Step four",
      body: [
        "After choosing a family, use the information in the problem to find its parameters. For a linear model f(x)=mx+b, b is the output when x=0 and m is the change in output divided by the change in input.",
        "For an exponential model f(x)=a(b)^x, a is the output when x=0 and b is the multiplication factor for one input step. A 6% increase gives b=1.06 because 100%+6%=106%=1.06. A 6% decrease gives b=0.94."
      ],
      formula: "linear: f(x)=mx+b,  m=(y₂−y₁)/(x₂−x₁)   exponential: f(x)=a(b)^x",
      diagram: "model-parameter-builder",
      note: "If the initial observation occurs at x=k instead of x=0, a shifted form such as f(x)=A(b)^(x−k) may be clearer.",
      check: { prompt: "A quantity starts at 200 and grows 5% each year. Write its model as A(t)=a(b)^t.", answer: "A(t)=200(1.05)^t", accept: ["A(t)=200(1.05)^t", "a(t)=200(1.05)^t", "200(1.05)^t", "200*1.05^t", "200(1.05)ᵗ"], hint: "Use the initial value for a and 1+0.05 for b." }
    },
    {
      id: "interpret-model", label: "05", title: "Explain every important number", kicker: "Step five",
      body: [
        "Interpret a parameter by naming the quantity, direction, units and time or input interval. In C(m)=45+12m, 45 is the starting cost in dollars and 12 is the additional cost in dollars per month.",
        "Also interpret useful outputs and graph features. An intercept may mark a starting value, a zero may mark when a quantity runs out, and a maximum may mark the greatest height or profit. State the input value and output value together so the meaning is complete."
      ],
      formula: "number + meaning + units + interval",
      diagram: "model-feature-annotations",
      note: "Say 'the balance grows by 8% each year,' not merely 'the rate is 8.' Context and units are part of the answer.",
      check: { prompt: "For h(t)=−16t²+48t+5, h is height in feet and t is seconds. What does h(0)=5 mean?", answer: "the object starts 5 feet high", accept: ["the object starts 5 feet high", "initial height is 5 feet", "it starts at 5 feet", "height at 0 seconds is 5 feet", "5 feet at time 0"], hint: "t=0 is the starting time." }
    },
    {
      id: "validate-limit", label: "06", title: "Test the model and set limits", kicker: "Step six",
      body: [
        "A model is an approximation, so test it. Substitute a known input and compare the predicted output with the observed output. Then check whether the prediction is reasonable: a population should not be negative, a length must use sensible units, and a model built from a short time interval may fail far into the future.",
        "Finish by stating constraints. If a tank drains from t=0 until t=8 minutes, the practical domain is 0≤t≤8 even if the equation accepts every real number. Predictions inside the observed interval are interpolation; predictions outside it are extrapolation and are usually less dependable."
      ],
      formula: "observed value − predicted value = residual",
      diagram: "model-residual-domain",
      note: "A small residual supports a model at that data point, but it does not prove the model will remain accurate outside the measured interval.",
      check: { prompt: "Data were collected for 0≤t≤10. Is a prediction at t=7 interpolation or extrapolation?", answer: "interpolation", accept: ["interpolation", "it is interpolation", "interpolate"], hint: "The input 7 is inside the measured interval from 0 to 10." }
    }
  ],
  examples: [
    {
      title: "Linear delivery cost",
      problem: "A delivery costs $18 for 2 miles and $30 for 6 miles. Build and interpret a linear model C(d).",
      steps: [
        "Define the variables: d is distance in miles and C(d) is cost in dollars.",
        "The problem gives two points: (2,18) and (6,30).",
        "Find the rate: m=(30−18)/(6−2)=12/4=3 dollars per mile.",
        "Use C(d)=3d+b and the point (2,18): 18=3(2)+b, so b=12.",
        "The model is C(d)=3d+12. The $12 is the starting fee and $3 is added for each mile.",
        "Because distance cannot be negative, use d≥0; a company may set an additional maximum delivery distance."
      ]
    },
    {
      title: "Exponential lake coverage",
      problem: "An invasive plant covers 80 m² now and its covered area grows 25% each week. Build a model and predict week 3.",
      steps: [
        "Define t as weeks from now and A(t) as covered area in square meters.",
        "A fixed percent change indicates an exponential model A(t)=a(b)^t.",
        "The initial area is a=80. A 25% increase gives b=1+0.25=1.25.",
        "Write the model: A(t)=80(1.25)^t.",
        "Evaluate week 3: A(3)=80(1.25)^3=156.25.",
        "The model predicts 156.25 m² after 3 weeks. In reality, limited lake area will eventually make this model unsuitable."
      ]
    },
    {
      title: "Quadratic fountain path",
      problem: "A fountain stream follows h(x)=−0.5x²+3x+1, where x and h are feet. Interpret its start and maximum.",
      steps: [
        "The negative x² coefficient means the graph opens downward, so its vertex is a maximum.",
        "Find the starting height: h(0)=1. The water leaves the nozzle 1 foot above the ground.",
        "Find the vertex input: x=−b/(2a)=−3/[2(−0.5)]=3.",
        "Find the vertex output: h(3)=−0.5(9)+3(3)+1=5.5.",
        "The water reaches a maximum height of 5.5 feet when it is 3 horizontal feet from the nozzle.",
        "Only the part of the graph from the nozzle until the water reaches the ground belongs to this physical situation."
      ]
    }
  ],
  practice: [
    { q: "For equally spaced inputs, outputs are 7, 12, 17, 22. Which model family fits?", a: "linear", accepted: ["linear", "linear model", "a linear function"] },
    { q: "For equally spaced inputs, outputs are 4, 12, 36, 108. Which model family fits?", a: "exponential", accepted: ["exponential", "exponential model", "an exponential function"] },
    { q: "For equally spaced inputs, first differences are 3, 7, 11, 15. Which model family fits?", a: "quadratic", accepted: ["quadratic", "quadratic model", "a quadratic function"] },
    { q: "A value begins at 50 and increases by 8 each month. Write V(m).", a: "V(m)=50+8m", accepted: ["V(m)=50+8m", "v(m)=50+8m", "50+8m", "8m+50"] },
    { q: "A population begins at 600 and grows 3% per year. Write P(t).", a: "P(t)=600(1.03)^t", accepted: ["P(t)=600(1.03)^t", "p(t)=600(1.03)^t", "600(1.03)^t", "600*1.03^t", "600(1.03)ᵗ"] },
    { q: "A machine worth $900 loses 20% of its value each year. What is its exponential factor?", a: "0.8", accepted: ["0.8", ".8", "80%"] },
    { q: "Find the slope of the linear model through (1,10) and (4,22).", a: "4", accepted: ["4", "4 per unit"] },
    { q: "A line has slope 4 and passes through (1,10). Write f(x)=mx+b.", a: "f(x)=4x+6", accepted: ["f(x)=4x+6", "4x+6", "y=4x+6", "f(x) = 4x + 6"] },
    { q: "In C(n)=25+6n, C is cost in dollars. What does 25 represent?", a: "the starting cost is $25", accepted: ["the starting cost is $25", "starting cost of $25", "initial cost is $25", "$25 fixed fee", "25 dollar fixed fee", "base fee of $25"] },
    { q: "In A(t)=120(1.04)^t, what percent growth occurs each time period?", a: "4%", accepted: ["4%", "4 percent", "0.04"] },
    { q: "A model was built from data for 2≤x≤12. Is a prediction at x=15 interpolation or extrapolation?", a: "extrapolation", accepted: ["extrapolation", "it is extrapolation", "extrapolate"] },
    { q: "The observed value is 41 and the model predicts 38. Using observed−predicted, find the residual.", a: "3", accepted: ["3", "+3"] },
    { q: "A ball's height model uses time after release. What is the smallest reasonable time input?", a: "0", accepted: ["0", "t=0", "t = 0", "zero"] },
    { q: "A fixed 120-mile trip has time T(v)=120/v. Which family is this model?", a: "rational", accepted: ["rational", "rational model", "rational function", "inverse variation"] },
    { q: "Daily tide height repeats in a regular cycle. Which model family is most reasonable?", a: "trigonometric", accepted: ["trigonometric", "trig", "sinusoidal", "sine", "cosine", "periodic"] }
  ]
};
