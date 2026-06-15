window.COURSE.lessons["logarithmic-functions"] = {
  id: "logarithmic-functions",
  title: "Logarithmic functions",
  eyebrow: "Lesson 10 · Advanced function models",
  standard: "MA.912.NSO.1.7 · MA.912.AR.5.2 · MA.912.AR.5.8–5.9",
  standardText: "Generate equivalent logarithmic expressions using properties of logarithms or exponents; solve equations involving logarithms or exponential expressions; and analyze and solve mathematical and real-world problems modeled with logarithmic functions, including key features and constraints.",
  objective: "Use logarithms as inverse exponentials, convert forms, apply logarithm properties, solve equations with domain checks, and interpret logarithmic models in context.",
  estimated: "45–55 min",
  sections: [
    {
      id: "inverse-forms",
      label: "01",
      title: "Read a logarithm as an exponent",
      kicker: "The central idea",
      body: [
        "A logarithm answers an exponent question. The statement log_b(a) = c asks, \"What exponent on b produces a?\" Its answer is c because b^c = a. These are two ways to state the same relationship, not two separate calculations.",
        "To convert logarithmic form to exponential form, keep the base b, move the logarithm's answer c to the exponent, and make the argument a the result: log_2(8) = 3 becomes 2^3 = 8. To convert back, the base stays the base, the result goes inside the logarithm, and the exponent becomes the answer. Therefore logarithmic and exponential functions undo each other."
      ],
      formula: "log_b(a) = c   <->   b^c = a,   where b > 0, b != 1, and a > 0",
      diagram: "logarithmic-inverse-form-cycle",
      note: "The base of a real logarithm must be positive and cannot equal 1. The logarithm's argument must be positive.",
      check: {
        prompt: "Rewrite log_5(125) = 3 in exponential form.",
        answer: "5^3=125",
        accept: ["5^3=125", "5³=125", "5^3 = 125", "125=5^3", "125 = 5³"],
        hint: "Keep 5 as the base, use 3 as the exponent, and make 125 the result."
      }
    },
    {
      id: "graph-domain",
      label: "02",
      title: "Connect the inverse graphs",
      kicker: "Features and restrictions",
      body: [
        "Because y = log_b(x) is the inverse of y = b^x, their graphs reflect across y = x. The exponential point (0, 1) becomes the logarithmic point (1, 0). The exponential point (1, b) becomes (b, 1). When b > 1, both functions increase; when 0 < b < 1, both decrease.",
        "An exponential output is always positive, so a basic logarithm accepts only x > 0. Its domain is (0, infinity), its range is all real numbers, and x = 0 is a vertical asymptote. For log_b(x - h) + k, require x - h > 0. This gives x > h and moves the vertical asymptote to x = h."
      ],
      formula: "f(x) = log_b(x - h) + k   ->   domain x > h, vertical asymptote x = h",
      diagram: "logarithmic-inverse-graph-domain",
      note: "Set the entire argument greater than zero. Do not allow the argument to equal zero, even though the graph approaches its vertical asymptote.",
      check: {
        prompt: "State the domain of f(x) = log_3(x - 4).",
        answer: "x>4",
        accept: ["x>4", "x > 4", "(4,infinity)", "(4, infinity)", "(4,∞)", "(4, ∞)", "{x|x>4}", "{x | x > 4}"],
        hint: "Require the argument x - 4 to be positive, then solve the inequality."
      }
    },
    {
      id: "properties",
      label: "03",
      title: "Use properties to rewrite logs",
      kicker: "Products become sums",
      body: [
        "Logarithm properties come from exponent properties. Multiplying equal-base powers adds exponents, so a product inside one logarithm becomes a sum: log_b(MN) = log_b(M) + log_b(N). Dividing powers subtracts exponents, so log_b(M/N) = log_b(M) - log_b(N).",
        "A power on an argument becomes a multiplier because (b^m)^p = b^(mp): log_b(M^p) = p log_b(M). When expanding, apply the product or quotient property first, then bring powers down. When condensing, reverse the operations. Every original and rewritten logarithm still requires each argument to be positive."
      ],
      formula: "log_b(MN)=log_b(M)+log_b(N)   log_b(M/N)=log_b(M)-log_b(N)   log_b(M^p)=p log_b(M)",
      diagram: "logarithmic-properties-structure-map",
      note: "There is no sum property: log_b(M + N) is not log_b(M) + log_b(N). Properties apply to multiplication, division, and powers.",
      check: {
        prompt: "Expand log_2(x^3/5), assuming x > 0.",
        answer: "3log_2(x)-log_2(5)",
        accept: ["3log_2(x)-log_2(5)", "3 log_2(x) - log_2(5)", "3log2(x)-log2(5)", "3 log base 2 of x - log base 2 of 5"],
        hint: "Use the quotient property, then move the exponent 3 in front of log_2(x)."
      }
    },
    {
      id: "exponential-equations",
      label: "04",
      title: "Solve exponential equations with logs",
      kicker: "Bring down the exponent",
      body: [
        "First isolate the exponential expression. If both sides can be written with the same base, rewrite and equate exponents. For 3^(x+1) = 27, write 27 as 3^3. Equal positive bases have equal exponents, so x + 1 = 3 and x = 2.",
        "If matching bases are not convenient, take a logarithm of both sides. For 2^x = 7, log(2^x) = log(7). The power property moves x in front: x log(2) = log(7). Divide both sides by log(2) to undo multiplication, giving x = log(7)/log(2). This change-of-base quotient can use common log or natural log."
      ],
      formula: "b^x = A   ->   log(b^x)=log(A)   ->   x log(b)=log(A)   ->   x=log(A)/log(b)",
      diagram: "logarithmic-exponential-equation-path",
      note: "Isolate the power before taking logs. A positive-base exponential expression is positive, so an equation b^(expression) = A has no real solution when A <= 0.",
      check: {
        prompt: "Solve 5^x = 18. Give an exact logarithmic answer.",
        answer: "log(18)/log(5)",
        accept: ["log(18)/log(5)", "ln(18)/ln(5)", "log_5(18)", "log5(18)", "log base 5 of 18"],
        hint: "Take the same logarithm of both sides, use the power property, then divide by log(5)."
      }
    },
    {
      id: "log-equations",
      label: "05",
      title: "Solve and check logarithmic equations",
      kicker: "Protect the domain",
      body: [
        "For one logarithm, isolate it and convert to exponential form. For log_3(x - 1) = 2, conversion gives x - 1 = 3^2. Evaluate 3^2 = 9, then add 1 to both sides to get x = 10. Check the argument: 10 - 1 is positive, so the solution is valid.",
        "For several logs with the same base, condense first. In log_2(x) + log_2(x - 2) = 3, the product property gives log_2[x(x - 2)] = 3. Convert to x(x - 2) = 2^3, solve the resulting quadratic, and reject any candidate that makes an original argument zero or negative. Algebra can produce a number that the original logarithms do not allow."
      ],
      formula: "solve algebraically -> require every original log argument > 0 -> reject invalid candidates",
      diagram: "logarithmic-equation-domain-filter",
      note: "Check candidates in the original equation, not only in a condensed or simplified version. Domain restrictions can create extraneous solutions.",
      check: {
        prompt: "Solve log_4(x + 3) = 2.",
        answer: "13",
        accept: ["13", "x=13", "x = 13"],
        hint: "Convert to x + 3 = 4^2, evaluate the power, and subtract 3."
      }
    },
    {
      id: "applications",
      label: "06",
      title: "Interpret logarithmic models",
      kicker: "Scales and elapsed time",
      body: [
        "Logarithmic scales compress quantities that span many powers of ten. On the pH scale, pH = -log[H+]. A decrease of 1 pH unit means the hydrogen-ion concentration is multiplied by 10 because the negative logarithm changes by 1 when the concentration's exponent changes by 1. Always interpret what a one-unit change means in the original quantity.",
        "Logarithms also solve for time in exponential models. If A = P(1 + r)^t, divide by P to isolate the power: A/P = (1 + r)^t. Take logs, move t down with the power property, and divide: t = log(A/P)/log(1 + r). In context, report suitable units and check constraints such as P > 0, A > 0, and 1 + r > 0."
      ],
      formula: "A=P(1+r)^t   ->   A/P=(1+r)^t   ->   t=log(A/P)/log(1+r)",
      diagram: "logarithmic-applications-scale-and-time",
      note: "A logarithm returns an exponent. In an exponential model, that exponent often represents elapsed time; on a logarithmic scale, differences represent multiplicative ratios.",
      check: {
        prompt: "Using pH = -log[H+], find the pH when [H+] = 10^-5.",
        answer: "5",
        accept: ["5", "pH=5", "pH = 5"],
        hint: "log(10^-5) = -5, and the negative sign in the pH formula changes -5 to 5."
      }
    }
  ],
  examples: [
    {
      title: "Convert forms and evaluate",
      problem: "Evaluate log_4(1/64) by converting to exponential form.",
      steps: [
        "Let the unknown logarithm equal x: log_4(1/64) = x. This names the exponent we are trying to find.",
        "Convert to exponential form: 4^x = 1/64. The base remains 4, x becomes the exponent, and 1/64 is the result.",
        "Write both sides with base 2: 4 = 2^2 and 1/64 = 2^-6, so (2^2)^x = 2^-6.",
        "Use the power-of-a-power rule: (2^2)^x = 2^(2x). Equal bases give equal exponents, so 2x = -6.",
        "Divide both sides by 2: x = -3.",
        "Check: 4^-3 = 1/(4^3) = 1/64, so log_4(1/64) = -3."
      ]
    },
    {
      title: "Condense, solve, and reject",
      problem: "Solve log_3(x) + log_3(x - 2) = 2.",
      steps: [
        "Record the original restrictions: x > 0 and x - 2 > 0. Together they require x > 2.",
        "Use the product property to condense: log_3[x(x - 2)] = 2.",
        "Convert to exponential form: x(x - 2) = 3^2 = 9.",
        "Expand and move all terms to one side: x^2 - 2x - 9 = 0.",
        "Apply the quadratic formula: x = [2 +/- sqrt(4 + 36)]/2 = [2 +/- sqrt(40)]/2 = 1 +/- sqrt(10).",
        "Check the domain x > 2. The value 1 + sqrt(10) is greater than 2, but 1 - sqrt(10) is negative. Reject the invalid candidate.",
        "The only solution is x = 1 + sqrt(10)."
      ]
    },
    {
      title: "Find time in a growth model",
      problem: "An investment of $1200 grows at 6% per year: A = 1200(1.06)^t. When will it reach $2000?",
      steps: [
        "Substitute the target amount: 2000 = 1200(1.06)^t.",
        "Divide both sides by 1200 to isolate the exponential factor: 2000/1200 = (1.06)^t, which simplifies to 5/3 = (1.06)^t.",
        "Take natural logs of both sides: ln(5/3) = ln[(1.06)^t].",
        "Use the power property to bring down the exponent: ln(5/3) = t ln(1.06).",
        "Divide by ln(1.06): t = ln(5/3)/ln(1.06) approximately 8.77.",
        "Interpret the result: the balance reaches $2000 after about 8.77 years. If interest is credited only once per year, it first reaches the target after 9 full years."
      ]
    }
  ],
  practice: [
    { q: "Rewrite log_2(32)=5 in exponential form.", a: "2^5=32", accepted: ["2^5=32", "2^5 = 32", "2⁵=32", "32=2^5", "32 = 2⁵"] },
    { q: "Rewrite 10^-3=0.001 in logarithmic form.", a: "log(0.001)=-3", accepted: ["log(0.001)=-3", "log_10(0.001)=-3", "log10(0.001)=-3", "-3=log(0.001)", "log base 10 of 0.001 = -3"] },
    { q: "Evaluate log_3(81).", a: "4", accepted: ["4", "log_3(81)=4", "log3(81)=4"] },
    { q: "Evaluate log_5(1/25).", a: "-2", accepted: ["-2", "−2", "log_5(1/25)=-2", "log5(1/25)=-2"] },
    { q: "State the domain of f(x)=log_2(x+6).", a: "x>-6", accepted: ["x>-6", "x > -6", "x>−6", "(-6,infinity)", "(-6, infinity)", "(−6,∞)", "(−6, ∞)", "{x|x>-6}"] },
    { q: "Give the vertical asymptote of f(x)=log_7(x-3)+2.", a: "x=3", accepted: ["x=3", "x = 3", "3"] },
    { q: "What point on y=log_b(x) corresponds to (0,1) on y=b^x?", a: "(1,0)", accepted: ["(1,0)", "(1, 0)"] },
    { q: "Expand log_4(7x), assuming x>0.", a: "log_4(7)+log_4(x)", accepted: ["log_4(7)+log_4(x)", "log_4(x)+log_4(7)", "log4(7)+log4(x)", "log base 4 of 7 + log base 4 of x"] },
    { q: "Expand log_3(x^5), assuming x>0.", a: "5log_3(x)", accepted: ["5log_3(x)", "5 log_3(x)", "5log3(x)", "5 log base 3 of x"] },
    { q: "Condense log_2(x)+log_2(y) into one logarithm.", a: "log_2(xy)", accepted: ["log_2(xy)", "log_2(x*y)", "log2(xy)", "log base 2 of xy"] },
    { q: "Condense 2ln(x)-ln(y) into one logarithm.", a: "ln(x^2/y)", accepted: ["ln(x^2/y)", "ln(x²/y)", "ln((x^2)/y)", "ln(x*x/y)"] },
    { q: "Solve 4^(x-1)=64.", a: "4", accepted: ["4", "x=4", "x = 4"] },
    { q: "Solve 3^x=11. Give an exact logarithmic answer.", a: "ln(11)/ln(3)", accepted: ["ln(11)/ln(3)", "log(11)/log(3)", "log_3(11)", "log3(11)", "log base 3 of 11"] },
    { q: "Solve log_2(x-5)=4.", a: "21", accepted: ["21", "x=21", "x = 21"] },
    { q: "Solve log(x)+log(x-9)=1.", a: "10", accepted: ["10", "x=10", "x = 10"] },
    { q: "For log_5(x+1)+log_5(x-3)=1, which domain restriction is required?", a: "x>3", accepted: ["x>3", "x > 3", "(3,infinity)", "(3, infinity)", "(3,∞)", "{x|x>3}"] },
    { q: "Does x=-2 satisfy log_3(x+1)=0? Answer yes or no.", a: "no", accepted: ["no", "no, the argument is negative", "no because x+1<0", "invalid"] },
    { q: "Using pH=-log[H+], find the pH when [H+]=10^-8.", a: "8", accepted: ["8", "pH=8", "pH = 8"] },
    { q: "A quantity changes from pH 6 to pH 4. How many times larger is its hydrogen-ion concentration?", a: "100", accepted: ["100", "100 times", "100x"] },
    { q: "In A=P(1+r)^t, solve for t.", a: "log(A/P)/log(1+r)", accepted: ["log(A/P)/log(1+r)", "ln(A/P)/ln(1+r)", "log_(1+r)(A/P)", "log base (1+r) of (A/P)"] }
  ]
};
