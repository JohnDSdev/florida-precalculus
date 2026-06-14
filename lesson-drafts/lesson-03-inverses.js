window.COURSE.lessons["inverse-functions"] = {
  id: "inverse-functions",
  title: "Inverse functions",
  eyebrow: "Lesson 03 · Undoing a function",
  standard: "MA.912.F.3.7–3.9",
  standardText: "Represent inverse functions algebraically, graphically or in a table; verify inverses with composition; restrict a domain to make a function invertible; and solve mathematical and real-world problems involving inverse functions.",
  objective: "Decide whether an inverse function exists, find it, state its domain and range, and check that it really undoes the original function.",
  estimated: "45–55 min",
  sections: [
    {
      id: "undo", label: "01", title: "An inverse undoes a function", kicker: "The central idea",
      body: [
        "A function changes an input into an output. An inverse function reverses that change. If f sends 3 to 11, then the inverse sends 11 back to 3.",
        "The symbol f⁻¹ means ‘the inverse of f.’ It does not mean 1/f. Think of two machines running in opposite directions: one does the operation and the other takes it apart."
      ],
      formula: "f(3) = 11   means   f⁻¹(11) = 3",
      diagram: "inverse-machines",
      note: "Important: f⁻¹(x) is inverse-function notation. The reciprocal of f(x) is 1/f(x), which is usually a different function.",
      check: { prompt: "If f(4) = 13, what is f⁻¹(13)?", answer: "4", accept: ["4"], hint: "Reverse the input-output pair: 4 → 13 becomes 13 → 4." }
    },
    {
      id: "one-to-one", label: "02", title: "Check that the reverse is a function", kicker: "Step two",
      body: [
        "For the reverse to be a function, every output of the original function must come from only one input. This property is called one-to-one. If two inputs share an output, reversing the arrows would give one input two outputs, so the reverse would fail the function rule.",
        "On a graph, use the horizontal line test. Imagine moving a horizontal line from bottom to top. If it touches the graph more than once anywhere, the function is not one-to-one on that domain."
      ],
      formula: "one output from f ← one input only",
      diagram: "horizontal-line-test",
      note: "A vertical line checks whether a graph is a function. A horizontal line checks whether that function has an inverse function.",
      check: { prompt: "Does f(x) = x² have an inverse function when its domain is all real numbers? Type yes or no.", answer: "no", accept: ["no", "n"], hint: "For example, f(2) and f(−2) both equal 4." }
    },
    {
      id: "swap", label: "03", title: "Swap input and output", kicker: "Step three",
      body: [
        "To find an inverse from an equation, first write the function as y. Then switch x and y. This swap matches what an inverse does: every original input becomes an inverse output, and every original output becomes an inverse input.",
        "For f(x) = 3x + 6, write y = 3x + 6. Swap the variables to get x = 3y + 6. Do not change any operation yet; only trade the variable names."
      ],
      formula: "y = 3x + 6   →   x = 3y + 6",
      diagram: "inverse-swap-table",
      note: "In a table, finding the inverse is the same move: swap every ordered pair (x, y) to (y, x).",
      check: { prompt: "After swapping x and y in y = 5x − 2, what equation do you get?", answer: "x=5y-2", accept: ["x=5y-2", "x = 5y - 2", "x=5y−2", "x = 5y − 2"], hint: "Put x where y was and y where x was. Keep 5 and −2 in place." }
    },
    {
      id: "solve", label: "04", title: "Solve for the new output", kicker: "Step four",
      body: [
        "After the swap, solve the equation for y. Use opposite operations in reverse order. From x = 3y + 6, subtract 6 from both sides, giving x − 6 = 3y. Then divide both sides by 3.",
        "Once y is alone, rename it f⁻¹(x). The finished inverse is f⁻¹(x) = (x − 6)/3. Read the fraction as one grouped numerator divided by 3."
      ],
      formula: "x = 3y + 6   →   x − 6 = 3y   →   f⁻¹(x) = (x − 6)/3",
      diagram: "inverse-equation-balance",
      note: "Undo addition or subtraction before undoing multiplication or division. This reverses the original order of operations.",
      check: { prompt: "Find the inverse of f(x) = 2x + 8.", answer: "(x-8)/2", accept: ["(x-8)/2", "(x − 8)/2", "(x-8) / 2", "x/2-4", "x/2 − 4", "0.5x-4"], hint: "Swap to x = 2y + 8, subtract 8, then divide by 2." }
    },
    {
      id: "domain-range", label: "05", title: "Trade the domain and range", kicker: "Step five",
      body: [
        "Because an inverse swaps inputs and outputs, it also swaps domain and range. The domain of f becomes the range of f⁻¹. The range of f becomes the domain of f⁻¹.",
        "Some functions need a restricted domain before they can be reversed. The graph of x² fails the horizontal line test on all real numbers. If we keep only x ≥ 0, each output has one input. Then the inverse is √x, whose domain is x ≥ 0."
      ],
      formula: "f(x) = x², x ≥ 0   ↔   f⁻¹(x) = √x, x ≥ 0",
      diagram: "inverse-reflection-domain",
      note: "The graphs of a function and its inverse are mirror images across the line y = x. A restricted domain keeps only a one-to-one part of the original graph.",
      check: { prompt: "For f(x) = x² restricted to x ≤ 0, which inverse is correct: √x or −√x?", answer: "-sqrt(x)", accept: ["-sqrt(x)", "−sqrt(x)", "-√x", "−√x", "negative square root of x"], hint: "The original inputs are nonpositive, so the inverse outputs must also be nonpositive." }
    },
    {
      id: "verify-apply", label: "06", title: "Verify, then use the inverse", kicker: "Step six",
      body: [
        "A correct inverse returns every allowed input to where it started. Check both compositions: f(f⁻¹(x)) = x and f⁻¹(f(x)) = x. If either result is not x, check your algebra or your domain restrictions.",
        "Inverse functions are useful when a formula gives an output but a problem asks for the original input. For C(F) = (5/9)(F − 32), the inverse F(C) = (9/5)C + 32 changes Celsius back to Fahrenheit."
      ],
      formula: "f(f⁻¹(x)) = x   and   f⁻¹(f(x)) = x",
      diagram: "inverse-composition-loop",
      note: "In a real-world answer, name the quantity and include its unit. Also check that the answer fits the allowed domain of the model.",
      check: { prompt: "Use F(C) = (9/5)C + 32 to convert 20°C to Fahrenheit.", answer: "68", accept: ["68", "68°F", "68 degrees", "68 degrees Fahrenheit"], hint: "Compute (9/5)(20) + 32 = 36 + 32." }
    }
  ],
  examples: [
    {
      title: "Find and verify a linear inverse",
      problem: "f(x) = 4x − 7",
      steps: [
        "Write y = 4x − 7.",
        "Swap x and y: x = 4y − 7.",
        "Add 7 to both sides: x + 7 = 4y.",
        "Divide by 4 and rename y: f⁻¹(x) = (x + 7)/4.",
        "Verify: f(f⁻¹(x)) = 4[(x + 7)/4] − 7 = x + 7 − 7 = x. The inverse works."
      ]
    },
    {
      title: "Restrict a quadratic",
      problem: "f(x) = (x − 2)² + 1, restricted to x ≥ 2",
      steps: [
        "The restriction x ≥ 2 keeps the right half of the parabola, so the function is one-to-one.",
        "Write y = (x − 2)² + 1, then swap: x = (y − 2)² + 1.",
        "Subtract 1: x − 1 = (y − 2)².",
        "Take the positive square root because the original domain makes y − 2 ≥ 0: √(x − 1) = y − 2.",
        "Add 2: f⁻¹(x) = 2 + √(x − 1). Its domain is x ≥ 1, the original function's range."
      ]
    },
    {
      title: "Recover a real-world input",
      problem: "A delivery total is T(w) = 2.5w + 6 dollars for w pounds. Find the weight when the total is $21.",
      steps: [
        "The inverse must turn a total price back into a weight.",
        "Write y = 2.5w + 6 and swap the input and output: x = 2.5y + 6.",
        "Subtract 6 and divide by 2.5: T⁻¹(x) = (x − 6)/2.5.",
        "Use the given total: T⁻¹(21) = (21 − 6)/2.5 = 15/2.5 = 6.",
        "The package weighs 6 pounds. Check: 2.5(6) + 6 = 21 dollars."
      ]
    }
  ],
  practice: [
    { q: "If f(7)=20, find f⁻¹(20).", a: "7", accepted: ["7"] },
    { q: "Does f(x)=x³ have an inverse function on all real numbers? Type yes or no.", a: "yes", accepted: ["yes", "y"] },
    { q: "Does f(x)=x² have an inverse function on all real numbers? Type yes or no.", a: "no", accepted: ["no", "n"] },
    { q: "Find the inverse of f(x)=x+9.", a: "x-9", accepted: ["x-9", "x − 9", "x - 9"] },
    { q: "Find the inverse of f(x)=3x.", a: "x/3", accepted: ["x/3", "(x)/3", "1/3x", "x ÷ 3"] },
    { q: "Find the inverse of f(x)=2x−5.", a: "(x+5)/2", accepted: ["(x+5)/2", "(x + 5)/2", "x/2+5/2", "0.5x+2.5"] },
    { q: "Find the inverse of f(x)=(x+4)/3.", a: "3x-4", accepted: ["3x-4", "3x − 4", "3x - 4"] },
    { q: "The inverse contains the point (8,2). Which point is on the original function?", a: "(2,8)", accepted: ["(2,8)", "(2, 8)", "2,8", "2, 8"] },
    { q: "If the domain of f is [1,∞), what is the range of f⁻¹?", a: "[1,infinity)", accepted: ["[1,infinity)", "[1, infinity)", "[1,∞)", "x>=1", "x ≥ 1"] },
    { q: "For f(x)=x² restricted to x≥0, find f⁻¹(49).", a: "7", accepted: ["7"] },
    { q: "For f(x)=x² restricted to x≤0, find f⁻¹(49).", a: "-7", accepted: ["-7", "−7"] },
    { q: "If f(x)=5x+1 and f⁻¹(x)=(x−1)/5, simplify f⁻¹(f(6)).", a: "6", accepted: ["6"] },
    { q: "A function and its inverse are reflections across which line?", a: "y=x", accepted: ["y=x", "y = x", "the line y=x", "the line y = x"] },
    { q: "A cost model is C(n)=12n+8. How many items were ordered if the cost was $68?", a: "5", accepted: ["5", "5 items"] },
    { q: "Use F(C)=(9/5)C+32 to convert 30°C to Fahrenheit.", a: "86", accepted: ["86", "86°F", "86 degrees", "86 degrees Fahrenheit"] }
  ]
};
