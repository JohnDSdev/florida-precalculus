window.COURSE.lessons["exponential-functions"] = {
  id: "exponential-functions",
  title: "Exponential functions",
  eyebrow: "Lesson 09 · Advanced function models",
  standard: "MA.912.AR.5.4 · MA.912.AR.5.5 · MA.912.AR.5.7 · MA.912.FL.3.2 · MA.912.FL.3.4",
  standardText: "Write exponential functions from representations, reveal and interpret their constant percent rate of change, solve real-world exponential problems, and connect compound interest with exponential growth.",
  objective: "Build and interpret exponential growth and decay models, distinguish multiplicative change from additive change, and calculate compound interest.",
  estimated: "45–55 min",
  sections: [
    {
      id: "constant-factor",
      label: "01",
      title: "Look for a constant factor",
      kicker: "The central idea",
      body: [
        "An exponential function changes by the same multiplication factor over equal input intervals. In f(x) = ab^x, a is the value when x = 0 and b is the factor applied once for each increase of 1 in x.",
        "For outputs 80, 100, 125, and 156.25 at consecutive inputs, divide each output by the one before it: 100/80 = 1.25, 125/100 = 1.25, and 156.25/125 = 1.25. The repeated ratio is 1.25, so the pattern is exponential. Starting at 80 gives f(x) = 80(1.25)^x."
      ],
      formula: "f(x) = ab^x   |   next output = current output · b",
      diagram: "exponential-constant-ratio-table",
      note: "Use ratios only when the input steps are equal. If x increases by 2 each row, the row-to-row factor represents two input units.",
      check: {
        prompt: "The outputs at consecutive inputs are 200, 150, 112.5. What is the constant factor?",
        answer: "0.75",
        accept: ["0.75", ".75", "3/4", "75%"],
        hint: "Divide a later output by the output immediately before it: 150/200."
      }
    },
    {
      id: "percent-factor",
      label: "02",
      title: "Turn a percent into a factor",
      kicker: "Step two",
      body: [
        "A percent rate tells what fraction of the current amount is gained or lost. First change the percent to a decimal by dividing by 100. Then add for growth or subtract for decay.",
        "A 6% increase has r = 0.06 and factor b = 1 + 0.06 = 1.06. The new amount is 106% of the old amount. A 6% decrease has factor b = 1 − 0.06 = 0.94, so 94% remains. The rate and factor are related, but they are not the same number."
      ],
      formula: "growth: b = 1 + r   |   decay: b = 1 − r",
      diagram: "exponential-percent-factor-bar",
      note: "A factor above 1 means growth. A factor between 0 and 1 means decay. The base of an ordinary exponential model must be positive and cannot equal 1.",
      check: {
        prompt: "A quantity decreases by 18% each year. What factor multiplies it each year?",
        answer: "0.82",
        accept: ["0.82", ".82", "82%", "1-0.18", "1 − 0.18"],
        hint: "Convert 18% to 0.18, then subtract it from 1."
      }
    },
    {
      id: "build-model",
      label: "03",
      title: "Build the model from the story",
      kicker: "Step three",
      body: [
        "Define the input before writing an equation. If t is years after the starting date, then t = 0 is the starting date. The initial amount becomes a because a·b^0 = a·1 = a.",
        "Suppose a town has 24,000 residents and grows 2.5% per year. Convert 2.5% to 0.025, form the growth factor 1 + 0.025 = 1.025, and write P(t) = 24000(1.025)^t. To predict 8 years later, substitute t = 8; the exponent counts eight applications of the yearly factor."
      ],
      formula: "P(t) = 24000(1.025)^t",
      diagram: "exponential-model-timeline",
      note: "State a practical domain. A yearly population model may use t ≥ 0, and whole-number t if values are recorded only once per year.",
      check: {
        prompt: "A $1,600 laptop loses 22% of its value each year. Write V(t), where t is years after purchase.",
        answer: "V(t)=1600(0.78)^t",
        accept: ["V(t)=1600(0.78)^t", "v(t)=1600(0.78)^t", "1600(0.78)^t", "1600*.78^t", "1600(1-0.22)^t"],
        hint: "The initial value is 1600. For decay, use 1 − 0.22 as the yearly factor."
      }
    },
    {
      id: "additive-multiplicative",
      label: "04",
      title: "Separate additive from multiplicative change",
      kicker: "Step four",
      body: [
        "Linear change adds the same amount over equal intervals. Its first differences are constant, so a model has the form L(t) = a + dt. Exponential change multiplies by the same factor over equal intervals. Its ratios are constant, so a model has the form E(t) = ab^t.",
        "Compare a $500 account gaining $40 each year with one growing 8% each year. The additive account is L(t) = 500 + 40t because $40 is added regardless of the balance. The multiplicative account is E(t) = 500(1.08)^t because each year's gain is 8% of the changing balance. Both gain $40 in year 1, but only the exponential gain grows with the balance."
      ],
      formula: "constant difference → linear   |   constant ratio → exponential",
      diagram: "exponential-additive-vs-multiplicative",
      note: "Words such as 'increases by 30' indicate addition. Words such as 'increases by 30%' or 'doubles' indicate multiplication.",
      check: {
        prompt: "A gym has 300 members and gains 24 members every month. Is the change additive or multiplicative?",
        answer: "additive",
        accept: ["additive", "additive change", "linear", "constant difference"],
        hint: "The same number of members is added each month; the gain is not a percent of the current total."
      }
    },
    {
      id: "interpret-parameters",
      label: "05",
      title: "Interpret every parameter",
      kicker: "Step five",
      body: [
        "In y = ab^t, a is the output at t = 0. The base b is the factor per one input unit. To recover a growth rate from b, compute b − 1. To recover a decay rate, compute 1 − b. Then convert the decimal to a percent by multiplying by 100.",
        "For M(t) = 750(0.92)^t, M(0) = 750, so the initial amount is 750. Because 0.92 = 1 − 0.08, 92% remains and 8% is lost each period. The function decreases, stays positive, and approaches the horizontal asymptote M = 0 as t grows. In context, use only inputs for which the model is meaningful."
      ],
      formula: "a = initial value   |   b = factor   |   rate = |b − 1| · 100%",
      diagram: "exponential-parameter-graph",
      note: "The graph approaches y = 0 but does not reach it in the unshifted model ab^t. A context may stop being realistic long before that mathematical end behavior matters.",
      check: {
        prompt: "In Q(t)=42(1.07)^t, state the initial value and percent rate of change.",
        answer: "42 and 7% growth",
        accept: ["42 and 7% growth", "42,7% growth", "initial 42; growth 7%", "42 and 0.07 growth", "42; increases 7%"],
        hint: "Read a from the coefficient. Subtract 1 from the base: 1.07 − 1."
      }
    },
    {
      id: "compound-interest",
      label: "06",
      title: "Count compound-interest periods",
      kicker: "Step six",
      body: [
        "Compound interest is exponential because each interest calculation uses the current balance, including earlier interest. For principal P, annual rate r, n compounding periods per year, and t years, use A = P(1 + r/n)^(nt).",
        "Divide r by n because r/n is the rate for one compounding period. Multiply n by t because nt is the total number of periods. For $2,000 at 6% compounded monthly for 3 years, P = 2000, r = 0.06, n = 12, and t = 3. The monthly factor is 1 + 0.06/12 = 1.005, and the exponent is 12·3 = 36, so A = 2000(1.005)^36 ≈ $2,393.36."
      ],
      formula: "A = P(1 + r/n)^(nt)",
      diagram: "exponential-compound-periods",
      note: "Enter the entire factor in parentheses before applying the exponent. Round money only after the full calculation unless directions say otherwise.",
      check: {
        prompt: "For $5,000 at 4.8% compounded quarterly for 6 years, what are n and nt?",
        answer: "n=4,nt=24",
        accept: ["n=4,nt=24", "n = 4, nt = 24", "4,24", "4 and 24", "n=4;24 periods"],
        hint: "Quarterly means 4 periods per year. Multiply 4 by 6 years."
      }
    }
  ],
  examples: [
    {
      title: "Build and evaluate a decay model",
      problem: "A 320-mg medicine dose decreases by 15% each hour. Write a model and find the amount after 5 hours.",
      steps: [
        "Define t as the number of hours after the dose is measured. At t = 0, the amount is 320 mg, so the initial value is a = 320.",
        "Convert 15% to a decimal: 15/100 = 0.15.",
        "Because the amount decreases, subtract the rate from 1: b = 1 − 0.15 = 0.85. This means 85% remains each hour.",
        "Write the exponential model: M(t) = 320(0.85)^t.",
        "Substitute t = 5: M(5) = 320(0.85)^5. The exponent applies the hourly factor five times.",
        "Calculate: (0.85)^5 ≈ 0.443705, so M(5) ≈ 320(0.443705) ≈ 141.99 mg. About 142 mg remains."
      ]
    },
    {
      title: "Choose linear or exponential",
      problem: "Plan A starts at 900 points and adds 90 points monthly. Plan B starts at 900 points and grows 10% monthly. Compare the models after 6 months.",
      steps: [
        "Plan A has a constant added amount, so it is linear: A(t) = 900 + 90t.",
        "Evaluate Plan A at t = 6: A(6) = 900 + 90(6) = 900 + 540 = 1440 points.",
        "Plan B has a constant percent increase, so it is exponential. Convert 10% to 0.10 and use factor 1 + 0.10 = 1.10.",
        "Write Plan B: B(t) = 900(1.10)^t.",
        "Evaluate at t = 6: B(6) = 900(1.10)^6 ≈ 900(1.771561) ≈ 1594.40 points.",
        "Compare the outputs: 1594.40 − 1440 = 154.40. After 6 months, Plan B has about 154.4 more points because its monthly gain increases with its balance."
      ]
    },
    {
      title: "Compound interest",
      problem: "$3,500 is invested at 5.2% annual interest compounded monthly for 4 years. Find the balance and interest earned.",
      steps: [
        "Identify the variables in A = P(1 + r/n)^(nt): P = 3500, r = 0.052, n = 12, and t = 4.",
        "Find the monthly rate: r/n = 0.052/12 ≈ 0.00433333.",
        "Find the monthly factor: 1 + r/n = 1 + 0.052/12 ≈ 1.00433333.",
        "Count the compounding periods: nt = 12(4) = 48 months.",
        "Substitute without early rounding: A = 3500(1 + 0.052/12)^48 ≈ $4,307.31.",
        "Interest earned is balance minus principal: $4,307.31 − $3,500.00 = $807.31."
      ]
    }
  ],
  practice: [
    { q: "The outputs at consecutive inputs are 12, 30, 75. Find the exponential factor.", a: "2.5", accepted: ["2.5", "5/2", "250%"] },
    { q: "The outputs at consecutive inputs are 640, 512, 409.6. Find the exponential factor.", a: "0.8", accepted: ["0.8", ".8", "4/5", "80%"] },
    { q: "Find the growth factor for a 13% increase per period.", a: "1.13", accepted: ["1.13", "113%", "1+0.13", "1 + 0.13"] },
    { q: "Find the decay factor for a 7.5% decrease per period.", a: "0.925", accepted: ["0.925", ".925", "92.5%", "1-0.075"] },
    { q: "A population starts at 850 and grows 4% yearly. Write P(t).", a: "P(t)=850(1.04)^t", accepted: ["P(t)=850(1.04)^t", "p(t)=850(1.04)^t", "850(1.04)^t", "850*1.04^t"] },
    { q: "A value starts at 72 and decreases 30% per hour. Write V(t).", a: "V(t)=72(0.70)^t", accepted: ["V(t)=72(0.70)^t", "v(t)=72(0.7)^t", "72(0.7)^t", "72*.7^t", "72(1-0.30)^t"] },
    { q: "Is 'adds 18 each week' additive or multiplicative change?", a: "additive", accepted: ["additive", "additive change", "linear", "constant difference"] },
    { q: "Is 'increases 18% each week' additive or multiplicative change?", a: "multiplicative", accepted: ["multiplicative", "multiplicative change", "exponential", "constant ratio"] },
    { q: "For f(t)=1200(1.06)^t, state the initial value.", a: "1200", accepted: ["1200", "1,200", "$1200", "$1,200", "f(0)=1200"] },
    { q: "For f(t)=1200(1.06)^t, state the percent rate and whether it is growth or decay.", a: "6% growth", accepted: ["6% growth", "6 percent growth", "growth 6%", "0.06 growth", "increases by 6%"] },
    { q: "For g(t)=95(0.84)^t, state the percent rate and whether it is growth or decay.", a: "16% decay", accepted: ["16% decay", "16 percent decay", "decay 16%", "0.16 decay", "decreases by 16%"] },
    { q: "Evaluate N(t)=250(1.2)^t at t=3.", a: "432", accepted: ["432", "432.0"] },
    { q: "Evaluate D(t)=500(0.9)^t at t=2.", a: "405", accepted: ["405", "$405", "405.00"] },
    { q: "In A=P(1+r/n)^(nt), what value of n represents monthly compounding?", a: "12", accepted: ["12", "n=12", "n = 12", "12 times per year"] },
    { q: "In A=P(1+r/n)^(nt), what value of n represents quarterly compounding?", a: "4", accepted: ["4", "n=4", "n = 4", "4 times per year"] },
    { q: "$1,000 earns 6% compounded annually for 2 years. Find the balance.", a: "1123.60", accepted: ["1123.60", "1123.6", "$1123.60", "$1,123.60", "1,123.60"] },
    { q: "$2,000 earns 3% compounded monthly for 1 year. Write the compound-interest expression; calculation is not required.", a: "2000(1+0.03/12)^12", accepted: ["2000(1+0.03/12)^12", "2000(1+.03/12)^12", "A=2000(1+0.03/12)^12", "2000(1.0025)^12"] },
    { q: "For an unshifted decay model y=ab^t with a>0, what horizontal asymptote does the graph approach?", a: "y=0", accepted: ["y=0", "y = 0", "0", "the x-axis", "x-axis"] }
  ]
};
