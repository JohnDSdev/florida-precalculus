window.COURSE.lessons["unit-circle-values"] = {
  id: "unit-circle-values",
  title: "Unit-circle values",
  eyebrow: "Lesson 17 · Unit-circle values",
  standard: "MA.912.T.2.2 · MA.912.T.2.3 · MA.912.T.2.5",
  standardText: "Define the six trigonometric functions with the unit circle, determine their exact values at special angles and multiples, and calculate their values for angles measured in degrees or radians.",
  objective: "Use a unit-circle point, a reference angle, and quadrant signs to find exact values of sine, cosine, tangent, cosecant, secant, and cotangent.",
  estimated: "45–55 min",
  sections: [
    {
      id: "coordinates",
      label: "01",
      title: "Read cosine and sine from a point",
      kicker: "Coordinates first",
      body: [
        "The unit circle has center (0, 0) and radius 1. Start an angle θ on the positive x-axis and rotate counterclockwise for a positive angle. The terminal side meets the circle at one point P(x, y). That point stores two trigonometric values: cos(θ) is the x-coordinate and sin(θ) is the y-coordinate.",
        "For example, the point at θ = π/3, or 60°, is (1/2, √3/2). Read horizontally first: cos(π/3) = 1/2. Read vertically second: sin(π/3) = √3/2. These are exact values, so keep the fraction and radical instead of replacing them with rounded decimals."
      ],
      formula: "P(x, y) = (cos(θ), sin(θ))",
      diagram: "unit-circle-values-coordinate-point",
      note: "Cosine always comes first because it is x. Sine comes second because it is y. Since the radius is 1, every unit-circle point satisfies x² + y² = 1.",
      check: {
        prompt: "The terminal point for θ is (−√3/2, 1/2). What is sin(θ)?",
        answer: "1/2",
        accept: ["1/2", "0.5", "sin(theta)=1/2", "sin(θ)=1/2", "y=1/2"],
        hint: "Sine is the second coordinate, or y-coordinate, of the unit-circle point."
      }
    },
    {
      id: "tangent-quotient",
      label: "02",
      title: "Build tangent as a quotient",
      kicker: "Divide the coordinates",
      body: [
        "Tangent compares the two unit-circle coordinates. Because sin(θ) = y and cos(θ) = x, tan(θ) = sin(θ)/cos(θ) = y/x. Use the complete signed coordinates before simplifying. At θ = 3π/4, the point is (−√2/2, √2/2), so tan(3π/4) = (√2/2)/(−√2/2) = −1.",
        "Division also explains when tangent is undefined. At π/2, the point is (0, 1), so tangent would require 1/0. Division by zero is not allowed. Write undefined, not 0. A calculator may report an error or a very large decimal near this angle because of rounding."
      ],
      formula: "tan(θ) = sin(θ)/cos(θ) = y/x, when x ≠ 0",
      diagram: "unit-circle-values-tangent-quotient",
      note: "A quotient's sign follows Algebra II sign rules: same signs give a positive result; opposite signs give a negative result.",
      check: {
        prompt: "If the unit-circle point is (−1/2, −√3/2), find tan(θ).",
        answer: "√3",
        accept: ["sqrt(3)", "√3", "tan(theta)=sqrt(3)", "tan(θ)=√3", "√3/1"],
        hint: "Compute y/x: (−√3/2)/(−1/2). The two negative signs make the quotient positive."
      }
    },
    {
      id: "exact-values",
      label: "03",
      title: "Organize the special-angle values",
      kicker: "Exact first-quadrant values",
      body: [
        "The special first-quadrant angles are 0, π/6, π/4, π/3, and π/2, which are 0°, 30°, 45°, 60°, and 90°. Their sine values follow √0/2, √1/2, √2/2, √3/2, √4/2. Simplifying gives 0, 1/2, √2/2, √3/2, 1.",
        "Cosine uses the same list in reverse: 1, √3/2, √2/2, 1/2, 0. Then find tangent by sine divided by cosine. For example, tan(π/6) = (1/2)/(√3/2) = 1/√3 = √3/3 after rationalizing the denominator. Exact-value questions should be answered with fractions and radicals. Use a calculator only when a problem asks for an approximation; set DEG for degree input and RAD for radian input."
      ],
      formula: "sin: 0, 1/2, √2/2, √3/2, 1   |   cos: 1, √3/2, √2/2, 1/2, 0",
      diagram: "unit-circle-values-special-angle-table",
      note: "The denominator stays 2 in the sine and cosine pattern. Simplify √0/2 to 0 and √4/2 to 1.",
      check: {
        prompt: "Find the exact value of cos(π/6).",
        answer: "√3/2",
        accept: ["sqrt(3)/2", "√3/2", "(sqrt(3))/2", "cos(pi/6)=sqrt(3)/2", "cos(π/6)=√3/2"],
        hint: "π/6 is 30°. In the cosine list, the 30° value is √3/2."
      }
    },
    {
      id: "reference-angles",
      label: "04",
      title: "Use a reference angle for size",
      kicker: "Reduce to a familiar triangle",
      body: [
        "A reference angle is the positive acute angle between the terminal side and the x-axis. It tells you the size of a trigonometric value; the quadrant tells you its sign. For an angle between 0 and 2π, use α = π − θ in Quadrant II, α = θ − π in Quadrant III, and α = 2π − θ in Quadrant IV. In degrees, replace π with 180° and 2π with 360°.",
        "For θ = 5π/6 in Quadrant II, α = π − 5π/6 = π/6. The π/6 triangle gives coordinate sizes √3/2 and 1/2. Quadrant II has negative x and positive y, so the point is (−√3/2, 1/2). Therefore cos(5π/6) = −√3/2 and sin(5π/6) = 1/2."
      ],
      formula: "QII: π − θ   |   QIII: θ − π   |   QIV: 2π − θ",
      diagram: "unit-circle-values-reference-angle-quadrants",
      note: "Reference angles give positive triangle lengths. Attach signs only after identifying the quadrant of the original angle.",
      check: {
        prompt: "What is the reference angle for 7π/6?",
        answer: "π/6",
        accept: ["pi/6", "π/6", "30", "30°", "30 degrees", "alpha=pi/6", "α=π/6"],
        hint: "7π/6 is in Quadrant III. Subtract π: 7π/6 − 6π/6."
      }
    },
    {
      id: "quadrant-signs",
      label: "05",
      title: "Attach the correct quadrant signs",
      kicker: "Signs come from coordinates",
      body: [
        "The quadrant signs are coordinate signs. In Quadrant I, x and y are both positive, so sine, cosine, and tangent are positive. In Quadrant II, x is negative and y is positive, so only sine is positive. In Quadrant III, both coordinates are negative, so tangent is positive because y/x is a negative divided by a negative. In Quadrant IV, x is positive and y is negative, so only cosine is positive.",
        "A useful summary is: QI all three are positive; QII sine is positive; QIII tangent is positive; QIV cosine is positive. Reciprocal pairs always have the same sign: cosecant matches sine, secant matches cosine, and cotangent matches tangent. This sign reasoning is more dependable than memorizing isolated values."
      ],
      formula: "QI: all +   |   QII: sin, csc +   |   QIII: tan, cot +   |   QIV: cos, sec +",
      diagram: "unit-circle-values-quadrant-sign-map",
      note: "An angle on an axis is not in a quadrant. Read its point directly and check for division by zero before using a quotient or reciprocal.",
      check: {
        prompt: "Is sec(4π/3) positive or negative?",
        answer: "negative",
        accept: ["negative", "-", "negative because cosine is negative", "secant is negative"],
        hint: "4π/3 is in Quadrant III. Secant has the same sign as cosine, which is the x-coordinate."
      }
    },
    {
      id: "all-six-functions",
      label: "06",
      title: "Find all six functions from one point",
      kicker: "Three basics and three reciprocals",
      body: [
        "Once you know P(x, y), the six functions come from coordinates, quotients, and reciprocals. The primary three are sin(θ) = y, cos(θ) = x, and tan(θ) = y/x. The reciprocal three are csc(θ) = 1/y, sec(θ) = 1/x, and cot(θ) = x/y. A reciprocal flips the entire fraction, including its sign.",
        "At P = (−3/5, 4/5), sin = 4/5 and cos = −3/5. Then tan = (4/5)/(−3/5) = −4/3. Flip sine to get csc = 5/4, flip cosine to get sec = −5/3, and flip tangent to get cot = −3/4. If the value being flipped is 0, its reciprocal is undefined."
      ],
      formula: "sin = y, cos = x, tan = y/x, csc = 1/y, sec = 1/x, cot = x/y",
      diagram: "unit-circle-values-six-function-reciprocals",
      note: "Undefined values are structural, not calculator accidents: sin = 0 makes csc and cot undefined; cos = 0 makes sec and tan undefined.",
      check: {
        prompt: "If P = (3/5, −4/5), find cot(θ).",
        answer: "-3/4",
        accept: ["-3/4", "−3/4", "cot(theta)=-3/4", "cot(θ)=−3/4", "3/-4"],
        hint: "Cotangent is x/y. Substitute x = 3/5 and y = −4/5, then divide."
      }
    }
  ],
  examples: [
    {
      title: "Evaluate three exact values",
      problem: "Find sin(5π/4), cos(5π/4), and tan(5π/4) exactly.",
      steps: [
        "Locate 5π/4. Since π = 4π/4 and 3π/2 = 6π/4, the angle lies in Quadrant III.",
        "Find the reference angle: 5π/4 − π = 5π/4 − 4π/4 = π/4.",
        "The π/4 unit-circle coordinate sizes are √2/2 and √2/2 because the special triangle has equal legs.",
        "Quadrant III has negative x and negative y, so the terminal point is (−√2/2, −√2/2).",
        "Read the coordinates: cos(5π/4) = −√2/2 and sin(5π/4) = −√2/2.",
        "Divide to find tangent: tan(5π/4) = (−√2/2)/(−√2/2) = 1. The exact answers are sin = −√2/2, cos = −√2/2, and tan = 1."
      ]
    },
    {
      title: "Find all six from a special angle",
      problem: "Find all six trigonometric functions at θ = 2π/3.",
      steps: [
        "Locate 2π/3 between π/2 and π, so θ is in Quadrant II.",
        "Find the reference angle: π − 2π/3 = 3π/3 − 2π/3 = π/3.",
        "At π/3, the positive coordinate sizes are x = 1/2 and y = √3/2. Quadrant II changes only x to negative, giving P = (−1/2, √3/2).",
        "Read the first two functions: sin(2π/3) = √3/2 and cos(2π/3) = −1/2.",
        "Divide for tangent: tan(2π/3) = (√3/2)/(−1/2) = −√3.",
        "Take reciprocals: csc(2π/3) = 2/√3 = 2√3/3, sec(2π/3) = −2, and cot(2π/3) = −1/√3 = −√3/3.",
        "All six values have the expected Quadrant II signs: sine and cosecant are positive; the other four are negative."
      ]
    },
    {
      title: "Handle an axis angle and calculator mode",
      problem: "Find all six functions at 270°, then approximate sin(52°) to four decimal places.",
      steps: [
        "At 270°, the terminal side points straight down, so the unit-circle point is P = (0, −1).",
        "Read the coordinates: cos(270°) = 0 and sin(270°) = −1.",
        "Tangent is y/x = −1/0, so tan(270°) is undefined. Secant is 1/x = 1/0, so sec(270°) is also undefined.",
        "Cosecant is 1/y = 1/(−1) = −1. Cotangent is x/y = 0/(−1) = 0.",
        "For sin(52°), the degree symbol tells us to place the calculator in DEG mode. Enter sin(52), not sin(52 radians).",
        "The display is approximately 0.788010..., which rounds to sin(52°) ≈ 0.7880. Exact special-angle values should not be replaced by decimals, but a requested approximation should include the requested precision."
      ]
    }
  ],
  practice: [
    { q: "The unit-circle point for θ is (√3/2, 1/2). Find cos(θ).", a: "√3/2", accepted: ["sqrt(3)/2", "√3/2", "cos(theta)=sqrt(3)/2", "cos(θ)=√3/2", "x=sqrt(3)/2"] },
    { q: "The unit-circle point for θ is (−√2/2, √2/2). Find sin(θ).", a: "√2/2", accepted: ["sqrt(2)/2", "√2/2", "sin(theta)=sqrt(2)/2", "sin(θ)=√2/2", "y=sqrt(2)/2"] },
    { q: "If P = (−3/5, 4/5), find tan(θ).", a: "-4/3", accepted: ["-4/3", "−4/3", "tan(theta)=-4/3", "tan(θ)=−4/3", "4/-3"] },
    { q: "Find the exact value of sin(π/6).", a: "1/2", accepted: ["1/2", "0.5", "sin(pi/6)=1/2", "sin(π/6)=1/2"] },
    { q: "Find the exact value of cos(π/4).", a: "√2/2", accepted: ["sqrt(2)/2", "√2/2", "1/sqrt(2)", "cos(pi/4)=sqrt(2)/2", "cos(π/4)=√2/2"] },
    { q: "Find the exact value of tan(π/3).", a: "√3", accepted: ["sqrt(3)", "√3", "tan(pi/3)=sqrt(3)", "tan(π/3)=√3"] },
    { q: "Find the reference angle for 5π/6.", a: "π/6", accepted: ["pi/6", "π/6", "30", "30°", "30 degrees", "alpha=pi/6", "α=π/6"] },
    { q: "Find the reference angle for 225°.", a: "45°", accepted: ["45", "45°", "45 degrees", "pi/4", "π/4", "alpha=45", "α=45°"] },
    { q: "Find the exact value of sin(7π/6).", a: "-1/2", accepted: ["-1/2", "−1/2", "-0.5", "sin(7pi/6)=-1/2", "sin(7π/6)=−1/2"] },
    { q: "Find the exact value of cos(5π/3).", a: "1/2", accepted: ["1/2", "0.5", "cos(5pi/3)=1/2", "cos(5π/3)=1/2"] },
    { q: "Find the exact value of tan(3π/4).", a: "-1", accepted: ["-1", "−1", "tan(3pi/4)=-1", "tan(3π/4)=−1"] },
    { q: "Find the exact value of csc(π/6).", a: "2", accepted: ["2", "csc(pi/6)=2", "csc(π/6)=2"] },
    { q: "Find the exact value of sec(2π/3).", a: "-2", accepted: ["-2", "−2", "sec(2pi/3)=-2", "sec(2π/3)=−2"] },
    { q: "Find the exact value of cot(5π/4).", a: "1", accepted: ["1", "cot(5pi/4)=1", "cot(5π/4)=1"] },
    { q: "Find tan(π/2).", a: "undefined", accepted: ["undefined", "not defined", "does not exist", "dne", "tan(pi/2) is undefined", "tan(π/2)=undefined"] },
    { q: "Find csc(π).", a: "undefined", accepted: ["undefined", "not defined", "does not exist", "dne", "csc(pi) is undefined", "csc(π)=undefined"] },
    { q: "At which angle between 0 and 2π is the unit-circle point (0, −1)?", a: "3π/2", accepted: ["3pi/2", "3π/2", "270", "270°", "270 degrees", "theta=3pi/2", "θ=3π/2"] },
    { q: "Which trigonometric function equals the y-coordinate divided by the x-coordinate?", a: "tangent", accepted: ["tangent", "tan", "tan(theta)", "tan(θ)", "y/x"] },
    { q: "Which reciprocal function is paired with cosine?", a: "secant", accepted: ["secant", "sec", "sec(theta)", "sec(θ)", "1/cosine", "1/cos"] },
    { q: "In Quadrant IV, is sine positive or negative?", a: "negative", accepted: ["negative", "-", "sine is negative", "sin is negative"] },
    { q: "If sin(θ)=−4/5, find csc(θ).", a: "-5/4", accepted: ["-5/4", "−5/4", "csc(theta)=-5/4", "csc(θ)=−5/4", "1/(-4/5)"] },
    { q: "If tan(θ)=√3/3, find cot(θ).", a: "√3", accepted: ["sqrt(3)", "√3", "3/sqrt(3)", "cot(theta)=sqrt(3)", "cot(θ)=√3"] },
    { q: "A calculator is evaluating cos(118°). Which angle mode should be selected?", a: "degree mode", accepted: ["degree mode", "degrees", "degree", "deg", "DEG", "deg mode"] },
    { q: "A calculator is evaluating sin(2.4), where 2.4 is in radians. Which angle mode should be selected?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] }
  ]
};
