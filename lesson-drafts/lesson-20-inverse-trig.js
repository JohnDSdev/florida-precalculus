window.COURSE.lessons["inverse-trig-functions"] = {
  id: "inverse-trig-functions",
  title: "Inverse trigonometric functions",
  eyebrow: "Lesson 20 · Inverse trigonometric functions",
  standard: "MA.912.F.3.6 · MA.912.F.3.7 · MA.912.T.1.2 · MA.912.T.1.8 · MA.912.T.2.5",
  standardText: "Determine and represent inverse functions; solve mathematical and real-world problems with right triangles and one-variable trigonometric ratios; and calculate trigonometric values in degrees or radians using technology when appropriate.",
  objective: "Use restricted trigonometric functions and principal values to evaluate inverse expressions, solve right triangles, and use a calculator in the correct angle mode.",
  estimated: "50–60 min",
  sections: [
    {
      id: "restrict-domains",
      label: "01",
      title: "Restrict the original domains",
      kicker: "Make an inverse possible",
      body: [
        "An inverse function reverses inputs and outputs. To have an inverse that is also a function, the original function must give each output only once. Sine, cosine, and tangent repeat, so their full graphs are not one-to-one. A horizontal line would meet a full trigonometric graph more than once.",
        "We solve that problem by keeping one standard piece of each graph. For sine, keep −π/2 ≤ x ≤ π/2. For cosine, keep 0 ≤ x ≤ π. For tangent, keep −π/2 < x < π/2. On each restricted domain, every output occurs once, so reversing the function gives one answer."
      ],
      formula: "sin: [−π/2, π/2]   |   cos: [0, π]   |   tan: (−π/2, π/2)",
      diagram: "inverse-trig-restricted-domains",
      note: "Brackets include an endpoint; parentheses exclude it. Tangent excludes ±π/2 because tangent is undefined there.",
      check: {
        prompt: "What restricted domain is used to make cosine one-to-one?",
        answer: "[0, pi]",
        accept: ["[0,pi]", "[0, pi]", "[0,π]", "[0, π]", "0<=x<=pi", "0≤x≤π", "0 to pi inclusive", "0 to π inclusive"],
        hint: "Use the upper half of the unit circle, beginning at 0 and ending at π."
      }
    },
    {
      id: "principal-values",
      label: "02",
      title: "Read inverse notation and ranges",
      kicker: "One principal value",
      body: [
        "The notation sin⁻¹(x), cos⁻¹(x), and tan⁻¹(x) means inverse sine, inverse cosine, and inverse tangent. The names arcsin(x), arccos(x), and arctan(x) mean the same things. The −1 does not mean reciprocal: sin⁻¹(x) is not 1/sin(x). The reciprocal of sine is cosecant.",
        "An inverse trig expression asks for an angle. For example, arcsin(1/2) asks, ‘Which angle in sine's restricted interval has sine 1/2?’ The answer must lie in the principal-value range: arcsin outputs [−π/2, π/2], arccos outputs [0, π], and arctan outputs (−π/2, π/2). Inputs to arcsin and arccos must be between −1 and 1; arctan accepts every real input."
      ],
      formula: "arcsin: [−1,1] → [−π/2,π/2]   |   arccos: [−1,1] → [0,π]   |   arctan: all real x → (−π/2,π/2)",
      diagram: "inverse-trig-principal-ranges",
      note: "Principal value means the single angle selected by the inverse function. Other coterminal or symmetric angles may have the same trig value, but they are not returned by the inverse.",
      check: {
        prompt: "Is cos⁻¹(x) the same as 1/cos(x)? Answer yes or no.",
        answer: "no",
        accept: ["no", "No", "no, it is inverse cosine", "no it is inverse cosine", "no; secant is the reciprocal"],
        hint: "The reciprocal of cosine is secant. The notation cos⁻¹ names the inverse function."
      }
    },
    {
      id: "exact-values",
      label: "03",
      title: "Evaluate exact inverse values",
      kicker: "Ask which principal angle",
      body: [
        "To evaluate an inverse trig value exactly, rewrite it as a question about a familiar angle. For arcsin(√3/2), ask which angle in [−π/2, π/2] has sine √3/2. The special angle π/3 works, so arcsin(√3/2) = π/3. Keep an exact angle such as π/3 instead of a decimal.",
        "Signs and principal ranges matter. Since cosine is negative in Quadrant II within arccos's range, arccos(−√2/2) = 3π/4. Since arctan's range uses Quadrants I and IV, arctan(−1) = −π/4, not 3π/4. If an arcsin or arccos input lies outside [−1, 1], there is no real principal value."
      ],
      formula: "arcsin(√3/2) = π/3   |   arccos(−√2/2) = 3π/4   |   arctan(−1) = −π/4",
      diagram: "inverse-trig-exact-values",
      note: "Work backward from the trig value, then check that the chosen angle belongs to the inverse function's principal range.",
      check: {
        prompt: "Find the exact principal value of arctan(√3).",
        answer: "π/3",
        accept: ["pi/3", "π/3", "60°", "60 degrees", "arctan(sqrt(3))=pi/3", "tan^-1(sqrt(3))=pi/3"],
        hint: "Which angle between −π/2 and π/2 has tangent √3?"
      }
    },
    {
      id: "compositions",
      label: "04",
      title: "Evaluate inverse compositions",
      kicker: "Undo only when the inputs fit",
      body: [
        "A function and its inverse undo each other when the input belongs to the correct restricted domain. Thus sin(arcsin(−3/5)) = −3/5 because arcsin first returns its principal angle, and sine sends that angle back to −3/5. Similarly, arccos(cos(2π/3)) = 2π/3 because 2π/3 is already in arccos's range [0, π].",
        "Do not cancel symbols automatically. The angle 5π/6 is outside arcsin's range, so arcsin(sin(5π/6)) cannot return 5π/6. First find sin(5π/6) = 1/2; then choose the principal angle with sine 1/2: arcsin(1/2) = π/6. For a mixed expression such as cos(arcsin(3/5)), draw a right triangle: opposite = 3, hypotenuse = 5, so adjacent = 4 and cosine is 4/5."
      ],
      formula: "sin(arcsin x) = x   |   arcsin(sin(5π/6)) = π/6   |   cos(arcsin(3/5)) = 4/5",
      diagram: "inverse-trig-compositions",
      note: "Inside-out order still applies. Evaluate the inside function first, then use the principal range or a right triangle for the outside function.",
      check: {
        prompt: "Find the exact value of arcsin(sin(3π/4)).",
        answer: "π/4",
        accept: ["pi/4", "π/4", "45°", "45 degrees", "arcsin(sin(3pi/4))=pi/4", "sin^-1(sin(3pi/4))=pi/4"],
        hint: "First find sin(3π/4). Then choose the angle in [−π/2, π/2] with that sine."
      }
    },
    {
      id: "right-triangles",
      label: "05",
      title: "Solve a right triangle",
      kicker: "Choose a ratio, then invert",
      body: [
        "To solve a right triangle means to find its missing sides and acute angles. Label the known sides relative to the target angle θ: opposite is across from θ, adjacent touches θ without being the hypotenuse, and the hypotenuse is across from the right angle. Then choose sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, or tan θ = opposite/adjacent.",
        "If the opposite leg is 7 and the adjacent leg is 10, tan θ = 7/10. Undo tangent with inverse tangent: θ = arctan(7/10). Because triangle angles are usually reported in degrees, use DEG mode to get θ ≈ 35.0°. The other acute angle is 90° − 35.0° = 55.0°. Use the Pythagorean Theorem for the hypotenuse: c = √(7² + 10²) = √149 ≈ 12.2."
      ],
      formula: "ratio → inverse operation → angle   |   tan θ = 7/10, so θ = arctan(7/10) ≈ 35.0°",
      diagram: "inverse-trig-right-triangle",
      note: "Keep full calculator precision until the final step. Early rounding can change the last digit of another side or angle.",
      check: {
        prompt: "A right triangle has opposite leg 8 and hypotenuse 17. Which equation finds acute angle θ?",
        answer: "θ=arcsin(8/17)",
        accept: ["theta=arcsin(8/17)", "θ=arcsin(8/17)", "theta=sin^-1(8/17)", "θ=sin^-1(8/17)", "arcsin(8/17)", "sin^-1(8/17)"],
        hint: "Opposite over hypotenuse is sine. Apply inverse sine to both sides."
      }
    },
    {
      id: "calculator-mode",
      label: "06",
      title: "Set the calculator mode",
      kicker: "Degrees and radians are different numbers",
      body: [
        "Before pressing an inverse trig key, decide whether the answer should be in degrees or radians. Use DEG mode for degree answers such as an angle of elevation or a triangle angle. Use RAD mode for radian answers, especially when the problem contains π or explicitly says radians. On many calculators, press 2nd or Shift and then sin, cos, or tan to enter an inverse function.",
        "For example, in DEG mode, arccos(0.4) ≈ 66.4°. In RAD mode, the same input gives arccos(0.4) ≈ 1.159 radians. These numbers describe the same angle in different units. Write the unit, round only as requested, and estimate first: because 0.4 is positive, the arccos principal angle should be between 0° and 90°, so 66.4° is reasonable."
      ],
      formula: "DEG: arccos(0.4) ≈ 66.4°   |   RAD: arccos(0.4) ≈ 1.159 rad",
      diagram: "inverse-trig-calculator-mode",
      note: "A missing degree symbol does not automatically mean radians in a word problem. Follow the requested unit and label the final answer clearly.",
      check: {
        prompt: "To find a right-triangle angle in degrees using tan⁻¹(12/5), which calculator mode should you use?",
        answer: "DEG",
        accept: ["DEG", "deg", "degree", "degrees", "degree mode", "deg mode"],
        hint: "The requested answer unit is degrees."
      }
    }
  ],
  examples: [
    {
      title: "Evaluate principal values exactly",
      problem: "Find arcsin(−1/2), arccos(−√3/2), and arctan(1) exactly.",
      steps: [
        "For arcsin(−1/2), look only in [−π/2, π/2]. The angle −π/6 has sine −1/2, so arcsin(−1/2) = −π/6.",
        "For arccos(−√3/2), look only in [0, π]. Cosine is negative in Quadrant II, and the reference angle is π/6.",
        "Therefore the arccos angle is π − π/6 = 5π/6, so arccos(−√3/2) = 5π/6.",
        "For arctan(1), look in (−π/2, π/2). The angle π/4 has tangent 1, so arctan(1) = π/4.",
        "The exact answers are −π/6, 5π/6, and π/4. No calculator decimals are needed."
      ]
    },
    {
      title: "Evaluate a mixed composition",
      problem: "Find sin(arccos(−5/13)) exactly.",
      steps: [
        "Let θ = arccos(−5/13). Then cos θ = −5/13 and θ must be in arccos's range [0, π].",
        "Cosine is negative in that range only in Quadrant II, so θ has positive sine.",
        "Build a reference triangle with adjacent magnitude 5 and hypotenuse 13.",
        "Use the Pythagorean Theorem for the opposite side: opposite² = 13² − 5² = 169 − 25 = 144, so opposite = 12.",
        "Sine is opposite/hypotenuse. Because θ is in Quadrant II, sin θ is positive.",
        "Therefore sin(arccos(−5/13)) = 12/13."
      ]
    },
    {
      title: "Solve a right-triangle application",
      problem: "A 15-foot ladder reaches 12 feet up a wall. Find its angle with the ground and its distance from the wall.",
      steps: [
        "Draw a right triangle. The ladder is the hypotenuse, 15 feet. The vertical height is opposite the ground angle θ, 12 feet.",
        "Choose sine because opposite and hypotenuse are known: sin θ = 12/15 = 4/5.",
        "Undo sine: θ = arcsin(4/5). The context asks for an ordinary triangle angle, so set the calculator to DEG mode.",
        "Compute with full precision: θ ≈ 53.1301°, which rounds to 53.1° to the nearest tenth.",
        "Let x be the ground distance. Use the Pythagorean Theorem: x² + 12² = 15², so x² = 225 − 144 = 81.",
        "A length is positive, so x = 9 feet. The ladder makes an angle of about 53.1° with the ground and stands 9 feet from the wall."
      ]
    }
  ],
  practice: [
    { q: "What restricted domain is used for sine when defining arcsin?", a: "[−π/2, π/2]", accepted: ["[-pi/2,pi/2]", "[-pi/2, pi/2]", "[−π/2,π/2]", "[−π/2, π/2]", "-pi/2<=x<=pi/2", "−π/2≤x≤π/2"] },
    { q: "What is the principal-value range of arccos?", a: "[0, π]", accepted: ["[0,pi]", "[0, pi]", "[0,π]", "[0, π]", "0<=x<=pi", "0≤x≤π", "0 to pi inclusive"] },
    { q: "What is the principal-value range of arctan?", a: "(−π/2, π/2)", accepted: ["(-pi/2,pi/2)", "(-pi/2, pi/2)", "(−π/2,π/2)", "(−π/2, π/2)", "-pi/2<x<pi/2", "−π/2<x<π/2"] },
    { q: "Is arcsin the reciprocal of sine? Answer yes or no.", a: "no", accepted: ["no", "No", "no, cosecant is the reciprocal", "no; cosecant is the reciprocal", "no it is the inverse"] },
    { q: "Find arcsin(1/2) exactly.", a: "π/6", accepted: ["pi/6", "π/6", "30°", "30 degrees", "arcsin(1/2)=pi/6", "sin^-1(1/2)=pi/6"] },
    { q: "Find arcsin(−√2/2) exactly.", a: "−π/4", accepted: ["-pi/4", "−pi/4", "−π/4", "-π/4", "-45°", "−45°", "-45 degrees", "arcsin(-sqrt(2)/2)=-pi/4"] },
    { q: "Find arccos(1/2) exactly.", a: "π/3", accepted: ["pi/3", "π/3", "60°", "60 degrees", "arccos(1/2)=pi/3", "cos^-1(1/2)=pi/3"] },
    { q: "Find arccos(−1) exactly.", a: "π", accepted: ["pi", "π", "180°", "180 degrees", "arccos(-1)=pi", "cos^-1(-1)=pi"] },
    { q: "Find arctan(−√3) exactly.", a: "−π/3", accepted: ["-pi/3", "−pi/3", "−π/3", "-π/3", "-60°", "−60°", "-60 degrees", "arctan(-sqrt(3))=-pi/3"] },
    { q: "Does arccos(3/2) have a real value?", a: "no", accepted: ["no", "No", "no real value", "not real", "undefined over the reals", "3/2 is outside [-1,1]"] },
    { q: "Evaluate sin(arcsin(−4/7)).", a: "−4/7", accepted: ["-4/7", "−4/7", "sin(arcsin(-4/7))=-4/7", "sin(sin^-1(-4/7))=-4/7"] },
    { q: "Evaluate cos(arccos(0.23)).", a: "0.23", accepted: ["0.23", ".23", "23/100", "cos(arccos(0.23))=0.23"] },
    { q: "Evaluate arccos(cos(5π/6)).", a: "5π/6", accepted: ["5pi/6", "5π/6", "150°", "150 degrees", "arccos(cos(5pi/6))=5pi/6"] },
    { q: "Evaluate arcsin(sin(5π/6)).", a: "π/6", accepted: ["pi/6", "π/6", "30°", "30 degrees", "arcsin(sin(5pi/6))=pi/6"] },
    { q: "Evaluate arctan(tan(3π/4)).", a: "−π/4", accepted: ["-pi/4", "−π/4", "-π/4", "−45°", "-45°", "-45 degrees", "arctan(tan(3pi/4))=-pi/4"] },
    { q: "Find cos(arcsin(5/13)) exactly.", a: "12/13", accepted: ["12/13", "cos(arcsin(5/13))=12/13", "cos(sin^-1(5/13))=12/13"] },
    { q: "Find sin(arccos(8/17)) exactly.", a: "15/17", accepted: ["15/17", "sin(arccos(8/17))=15/17", "sin(cos^-1(8/17))=15/17"] },
    { q: "Find tan(arcsin(3/5)) exactly.", a: "3/4", accepted: ["3/4", "0.75", "tan(arcsin(3/5))=3/4", "tan(sin^-1(3/5))=3/4"] },
    { q: "A right triangle has opposite leg 6 and adjacent leg 11. Write an inverse trig expression for acute angle θ.", a: "θ=arctan(6/11)", accepted: ["theta=arctan(6/11)", "θ=arctan(6/11)", "theta=tan^-1(6/11)", "θ=tan^-1(6/11)", "arctan(6/11)", "tan^-1(6/11)"] },
    { q: "A right triangle has adjacent leg 9 and hypotenuse 14. Write an inverse trig expression for acute angle θ.", a: "θ=arccos(9/14)", accepted: ["theta=arccos(9/14)", "θ=arccos(9/14)", "theta=cos^-1(9/14)", "θ=cos^-1(9/14)", "arccos(9/14)", "cos^-1(9/14)"] },
    { q: "In DEG mode, arctan(1) equals what angle?", a: "45°", accepted: ["45", "45°", "45 degrees", "45.0", "45.0°", "pi/4", "π/4"] },
    { q: "In RAD mode, arctan(1) equals what angle?", a: "π/4", accepted: ["pi/4", "π/4", "0.7854", ".7854", "0.785", ".785", "approximately 0.7854"] },
    { q: "A calculator gives arcsin(0.6) ≈ 0.6435. Which mode produced this result?", a: "RAD", accepted: ["RAD", "rad", "radian", "radians", "radian mode", "rad mode"] },
    { q: "A calculator gives arcsin(0.6) ≈ 36.87. Which mode produced this result?", a: "DEG", accepted: ["DEG", "deg", "degree", "degrees", "degree mode", "deg mode"] },
    { q: "A 10-foot ramp rises 6 feet. Write an inverse trig expression for the ramp's angle θ with the ground.", a: "θ=arcsin(3/5)", accepted: ["theta=arcsin(3/5)", "θ=arcsin(3/5)", "theta=arcsin(6/10)", "θ=arcsin(6/10)", "arcsin(3/5)", "arcsin(6/10)", "sin^-1(3/5)", "sin^-1(6/10)"] },
    { q: "The acute angles of a right triangle are complementary. If one is 37°, find the other.", a: "53°", accepted: ["53", "53°", "53 degrees", "53.0", "53.0°"] }
  ]
};
