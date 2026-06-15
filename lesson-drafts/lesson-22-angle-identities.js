window.COURSE.lessons["angle-sum-multiple-angle-identities"] = {
  id: "angle-sum-multiple-angle-identities",
  title: "Angle-sum and multiple-angle identities",
  eyebrow: "Lesson 22 · Angle-sum and multiple-angle identities",
  standard: "MA.912.T.1.6 · MA.912.T.1.7",
  standardText: "Prove and apply the Double-Angle, Half-Angle, Angle Sum and Difference formulas for sine, cosine, and tangent, and simplify expressions using trigonometric identities.",
  objective: "Use sum, difference, double-angle, and half-angle identities to find exact values and rewrite trigonometric expressions.",
  estimated: "50–60 min",
  sections: [
    {
      id: "sum-difference-structure",
      label: "01",
      title: "Build a sum or difference identity",
      kicker: "Keep the two angles separate",
      body: [
        "An expression such as sin(A + B) does not equal sin(A) + sin(B). The angle A + B is one input to sine, so we need an identity that rewrites that input using values at A and B. For sine, keep the sign between the angles: sin(A + B) = sin(A)cos(B) + cos(A)sin(B), and sin(A − B) = sin(A)cos(B) − cos(A)sin(B).",
        "Cosine uses a different sign pattern. Its sign changes: cos(A + B) = cos(A)cos(B) − sin(A)sin(B), while cos(A − B) = cos(A)cos(B) + sin(A)sin(B). Tangent keeps the sign in the numerator and changes it in the denominator: tan(A ± B) = (tan(A) ± tan(B))/(1 ∓ tan(A)tan(B)). The tangent formula is defined only when its denominator is not zero and the original tangent values exist.",
        "These formulas can be justified from unit-circle geometry. Rotating a point by B changes both its horizontal and vertical coordinates. The new vertical coordinate is sin(A)cos(B) + cos(A)sin(B), which proves the sine-sum formula; the new horizontal coordinate is cos(A)cos(B) − sin(A)sin(B), which proves the cosine-sum formula. Replacing B with −B and using sin(−B) = −sin(B) and cos(−B) = cos(B) produces the difference formulas."
      ],
      formula: "sin(A ± B) = sin(A)cos(B) ± cos(A)sin(B)   |   cos(A ± B) = cos(A)cos(B) ∓ sin(A)sin(B)",
      diagram: "angle-identities-sum-difference-structure",
      note: "For sine, the middle sign stays the same. For cosine, the middle sign switches. Write the full identity before substituting values.",
      check: {
        prompt: "Expand cos(A − B) using a sum or difference identity.",
        answer: "cos(A)cos(B)+sin(A)sin(B)",
        accept: ["cos(A)cos(B)+sin(A)sin(B)", "cos(a)cos(b)+sin(a)sin(b)", "cos A cos B + sin A sin B", "cos(A)*cos(B)+sin(A)*sin(B)"],
        hint: "Cosine changes the sign. A minus between the angles becomes a plus between the two products."
      }
    },
    {
      id: "exact-sum-difference-values",
      label: "02",
      title: "Create an exact angle",
      kicker: "Split into special angles",
      body: [
        "To find an exact value at an unfamiliar angle, write it as a sum or difference of familiar unit-circle angles. For 15°, use 45° − 30°. For 75°, use 45° + 30°. In radians, the same choices are pi/4 − pi/6 and pi/4 + pi/6. Choose a split for which every sine, cosine, or tangent value is known exactly.",
        "Next, copy the matching identity and substitute with parentheses. For sin(15°), write sin(45° − 30°) = sin(45°)cos(30°) − cos(45°)sin(30°). Substitute exact values: (sqrt(2)/2)(sqrt(3)/2) − (sqrt(2)/2)(1/2). Multiply numerators and denominators to get sqrt(6)/4 − sqrt(2)/4, then combine the common denominators: (sqrt(6) − sqrt(2))/4.",
        "An exact-value answer keeps fractions and radicals. Do not replace it with a rounded decimal. A calculator is useful only as a check: select DEG when the input has a degree symbol and RAD when the input is in radians. For example, sin(15°) in DEG mode is about 0.2588, which agrees with the positive exact result."
      ],
      formula: "15° = 45° − 30°   |   75° = 45° + 30°   |   pi/12 = pi/4 − pi/6",
      diagram: "angle-identities-exact-angle-split",
      note: "Multiply radicals just as in Algebra II: sqrt(2)·sqrt(3) = sqrt(6). Combine fractions only after they have a common denominator.",
      check: {
        prompt: "Write 105° as a sum of two familiar special angles.",
        answer: "60°+45°",
        accept: ["60°+45°", "60 + 45", "60+45", "45°+60°", "45 + 60", "45+60", "105°=60°+45°", "105=60+45"],
        hint: "Use two angles from 30°, 45°, 60°, and 90° whose sum is 105°."
      }
    },
    {
      id: "double-angle-identities",
      label: "03",
      title: "Turn one angle into twice the angle",
      kicker: "Set both angles equal",
      body: [
        "A double-angle identity is a sum identity with A = B = theta. From sin(theta + theta), we get sin(2theta) = 2sin(theta)cos(theta). From cos(theta + theta), we get cos(2theta) = cos^2(theta) − sin^2(theta). These formulas work for any angle where the expressions are defined, not only for special angles.",
        "The Pythagorean identity sin^2(theta) + cos^2(theta) = 1 creates two more useful cosine forms. Replacing sin^2(theta) with 1 − cos^2(theta) gives cos(2theta) = 2cos^2(theta) − 1. Replacing cos^2(theta) with 1 − sin^2(theta) gives cos(2theta) = 1 − 2sin^2(theta). Choose the form that uses the information you have and avoids finding an unnecessary value.",
        "For tangent, tan(2theta) = 2tan(theta)/(1 − tan^2(theta)). Before dividing, check that 1 − tan^2(theta) is not zero. If sin(theta) or cos(theta) is given, use its sign and the angle's quadrant when finding the other value from the Pythagorean identity. Squaring removes a sign, so the quadrant must put it back."
      ],
      formula: "sin(2theta)=2sin(theta)cos(theta)   |   cos(2theta)=cos^2(theta)−sin^2(theta)   |   tan(2theta)=2tan(theta)/(1−tan^2(theta))",
      diagram: "angle-identities-double-angle-forms",
      note: "The exponent in sin^2(theta) means [sin(theta)]^2. It is not sin(theta^2).",
      check: {
        prompt: "If cos(theta) = 3/5, use a cosine double-angle form to find cos(2theta).",
        answer: "-7/25",
        accept: ["-7/25", "−7/25", "-0.28", "cos(2theta)=-7/25", "cos(2θ)=−7/25"],
        hint: "Use cos(2theta) = 2cos^2(theta) − 1, then compute 2(3/5)^2 − 1."
      }
    },
    {
      id: "half-angle-relationships",
      label: "04",
      title: "Recover a value at half an angle",
      kicker: "Choose the sign from the location",
      body: [
        "Solve the cosine double-angle forms for a squared trig value. From cos(theta) = 1 − 2sin^2(theta/2), add 2sin^2(theta/2), subtract cos(theta), and divide by 2. This gives sin^2(theta/2) = (1 − cos(theta))/2. Taking a square root gives sin(theta/2) = ±sqrt((1 − cos(theta))/2).",
        "Likewise, cos(theta) = 2cos^2(theta/2) − 1 leads to cos(theta/2) = ±sqrt((1 + cos(theta))/2). The plus-or-minus sign is not optional decoration. Determine the quadrant of theta/2, then choose the sign of sine or cosine in that quadrant. For example, if 0 < theta < pi, then 0 < theta/2 < pi/2, so both half-angle values are positive.",
        "For tangent, use tan(theta/2) = sin(theta)/(1 + cos(theta)) or tan(theta/2) = (1 − cos(theta))/sin(theta) when the chosen denominator is not zero. The radical form tan(theta/2) = ±sqrt((1 − cos(theta))/(1 + cos(theta))) also requires a quadrant sign. Simplify nested radicals carefully: sqrt((2 + sqrt(2))/4) = sqrt(2 + sqrt(2))/2 because sqrt(4) = 2."
      ],
      formula: "sin(theta/2)=±sqrt((1−cos(theta))/2)   |   cos(theta/2)=±sqrt((1+cos(theta))/2)",
      diagram: "angle-identities-half-angle-sign-choice",
      note: "The original angle theta and the requested angle theta/2 may be in different quadrants. Locate theta/2 before choosing a sign.",
      check: {
        prompt: "Find the exact positive value of cos(22.5°).",
        answer: "sqrt(2+sqrt(2))/2",
        accept: ["sqrt(2+sqrt(2))/2", "sqrt(2 + sqrt(2))/2", "√(2+√2)/2", "√(2 + √2)/2", "(sqrt(2+sqrt(2)))/2"],
        hint: "22.5° is half of 45°. Use cos(theta/2) = +sqrt((1 + cos(theta))/2) with cos(45°) = sqrt(2)/2."
      }
    },
    {
      id: "rewrite-expressions",
      label: "05",
      title: "Recognize an identity in reverse",
      kicker: "Compress instead of expand",
      body: [
        "Identities work in both directions. If an expression matches the expanded side of a formula, it can be compressed into one trig function. The pattern sin(A)cos(B) + cos(A)sin(B) becomes sin(A + B). If the middle sign is minus, it becomes sin(A − B). Match the function order and sign before combining the angles.",
        "For cosine, cos(A)cos(B) − sin(A)sin(B) becomes cos(A + B), while cos(A)cos(B) + sin(A)sin(B) becomes cos(A − B). Because cosine switches the sign, slow down and compare the expression term by term. The repeated-angle pattern 2sin(x)cos(x) becomes sin(2x), and cos^2(x) − sin^2(x) becomes cos(2x).",
        "You can also rewrite powers. Solving cos(2x) = 1 − 2sin^2(x) for sin^2(x) gives sin^2(x) = (1 − cos(2x))/2. Solving cos(2x) = 2cos^2(x) − 1 gives cos^2(x) = (1 + cos(2x))/2. These power-reduction relationships replace a squared trig function with a first power at a doubled angle."
      ],
      formula: "2sin(x)cos(x) = sin(2x)   |   sin^2(x) = (1−cos(2x))/2   |   cos^2(x) = (1+cos(2x))/2",
      diagram: "angle-identities-rewrite-compress-patterns",
      note: "Do not combine angles unless every factor and sign matches one complete identity.",
      check: {
        prompt: "Rewrite 2sin(3x)cos(3x) as one trigonometric function.",
        answer: "sin(6x)",
        accept: ["sin(6x)", "sin 6x", "sin(2*3x)", "sin(2(3x))", "sin(3x+3x)"],
        hint: "Match 2sin(u)cos(u) = sin(2u) with u = 3x."
      }
    },
    {
      id: "choose-and-check",
      label: "06",
      title: "Choose, calculate, and check",
      kicker: "A repeatable decision process",
      body: [
        "First identify the requested angle form. An angle written as A + B or A − B calls for a sum or difference identity. An input such as 2theta calls for a double-angle identity. An input such as theta/2, especially when a value at theta is known, calls for a half-angle relationship. An expression with products or squares may be asking you to recognize an identity in reverse.",
        "Second list the known values and signs, choose the formula that uses them directly, and substitute before doing arithmetic. Simplify one operation at a time: square fractions, multiply radicals, combine common denominators, and rationalize only when needed. Keep an exact answer unless the question explicitly requests a decimal approximation.",
        "Finally check reasonableness. Sine and cosine must lie from −1 to 1. Use the quadrant to predict the sign. For a decimal check, match calculator mode to the notation: DEG for degrees and RAD for radians. A calculator can confirm a result, but entering the original expression does not replace showing the identity and exact arithmetic."
      ],
      formula: "identify form -> choose identity -> substitute -> simplify exactly -> check sign and range",
      diagram: "angle-identities-choice-and-check-flow",
      note: "A result outside [−1, 1] cannot be a sine or cosine value. Recheck signs, squaring, and denominators.",
      check: {
        prompt: "Which identity type should you use first to find sin(2theta) from sin(theta) and cos(theta)?",
        answer: "double-angle identity",
        accept: ["double-angle identity", "double angle identity", "double-angle", "double angle", "sin double-angle identity", "sin(2theta)=2sin(theta)cos(theta)"],
        hint: "The requested input is twice the known angle."
      }
    }
  ],
  examples: [
    {
      title: "Find an exact value with a difference identity",
      problem: "Find cos(15°) exactly.",
      steps: [
        "Split 15° into familiar angles: 15° = 45° − 30°.",
        "Choose the cosine-difference identity: cos(A − B) = cos(A)cos(B) + sin(A)sin(B).",
        "Substitute A = 45° and B = 30°: cos(15°) = cos(45°)cos(30°) + sin(45°)sin(30°).",
        "Insert exact unit-circle values: (sqrt(2)/2)(sqrt(3)/2) + (sqrt(2)/2)(1/2).",
        "Multiply each pair: sqrt(6)/4 + sqrt(2)/4.",
        "Combine the common denominators: cos(15°) = (sqrt(6) + sqrt(2))/4.",
        "Check in DEG mode: cos(15°) is about 0.9659, and the exact result is positive and less than 1."
      ]
    },
    {
      title: "Use given quadrant information at a double angle",
      problem: "If sin(theta) = 3/5 and theta is in Quadrant II, find sin(2theta) and cos(2theta).",
      steps: [
        "Use sin^2(theta) + cos^2(theta) = 1 to find cosine: (3/5)^2 + cos^2(theta) = 1.",
        "Subtract 9/25: cos^2(theta) = 16/25, so cos(theta) = ±4/5.",
        "Theta is in Quadrant II, where cosine is negative, so cos(theta) = −4/5.",
        "Use sin(2theta) = 2sin(theta)cos(theta): 2(3/5)(−4/5) = −24/25.",
        "Use cos(2theta) = cos^2(theta) − sin^2(theta): (−4/5)^2 − (3/5)^2.",
        "Simplify: 16/25 − 9/25 = 7/25.",
        "Therefore sin(2theta) = −24/25 and cos(2theta) = 7/25. Both lie in [−1, 1]."
      ]
    },
    {
      title: "Choose a half-angle sign",
      problem: "If cos(theta) = −3/5 and pi < theta < 2pi, find cos(theta/2) exactly.",
      steps: [
        "Divide the interval by 2: pi/2 < theta/2 < pi. Therefore theta/2 is in Quadrant II.",
        "Cosine is negative in Quadrant II, so choose the negative half-angle square root.",
        "Write the identity: cos(theta/2) = −sqrt((1 + cos(theta))/2).",
        "Substitute cos(theta) = −3/5: −sqrt((1 − 3/5)/2).",
        "Simplify inside: 1 − 3/5 = 2/5, and (2/5)/2 = 1/5.",
        "Take the square root: −sqrt(1/5) = −1/sqrt(5).",
        "Rationalize the denominator: cos(theta/2) = −sqrt(5)/5. The negative sign agrees with Quadrant II."
      ]
    }
  ],
  practice: [
    { q: "Expand sin(A + B).", a: "sin(A)cos(B)+cos(A)sin(B)", accepted: ["sin(A)cos(B)+cos(A)sin(B)", "sin(a)cos(b)+cos(a)sin(b)", "sin A cos B + cos A sin B", "sin(A)*cos(B)+cos(A)*sin(B)"] },
    { q: "Expand sin(A − B).", a: "sin(A)cos(B)-cos(A)sin(B)", accepted: ["sin(A)cos(B)-cos(A)sin(B)", "sin(a)cos(b)-cos(a)sin(b)", "sin A cos B - cos A sin B", "sin(A)*cos(B)-cos(A)*sin(B)"] },
    { q: "Expand cos(A + B).", a: "cos(A)cos(B)-sin(A)sin(B)", accepted: ["cos(A)cos(B)-sin(A)sin(B)", "cos(a)cos(b)-sin(a)sin(b)", "cos A cos B - sin A sin B", "cos(A)*cos(B)-sin(A)*sin(B)"] },
    { q: "Expand cos(A − B).", a: "cos(A)cos(B)+sin(A)sin(B)", accepted: ["cos(A)cos(B)+sin(A)sin(B)", "cos(a)cos(b)+sin(a)sin(b)", "cos A cos B + sin A sin B", "cos(A)*cos(B)+sin(A)*sin(B)"] },
    { q: "Find the exact value of sin(15°).", a: "(sqrt(6)-sqrt(2))/4", accepted: ["(sqrt(6)-sqrt(2))/4", "(sqrt(6) - sqrt(2))/4", "(√6-√2)/4", "(√6 − √2)/4", "sqrt(6)/4-sqrt(2)/4"] },
    { q: "Find the exact value of cos(75°).", a: "(sqrt(6)-sqrt(2))/4", accepted: ["(sqrt(6)-sqrt(2))/4", "(sqrt(6) - sqrt(2))/4", "(√6-√2)/4", "(√6 − √2)/4", "sqrt(6)/4-sqrt(2)/4"] },
    { q: "Find the exact value of sin(105°).", a: "(sqrt(6)+sqrt(2))/4", accepted: ["(sqrt(6)+sqrt(2))/4", "(sqrt(6) + sqrt(2))/4", "(√6+√2)/4", "(√6 + √2)/4", "sqrt(6)/4+sqrt(2)/4"] },
    { q: "Find the exact value of cos(105°).", a: "(sqrt(2)-sqrt(6))/4", accepted: ["(sqrt(2)-sqrt(6))/4", "(sqrt(2) - sqrt(6))/4", "(√2-√6)/4", "(√2 − √6)/4", "sqrt(2)/4-sqrt(6)/4", "-(sqrt(6)-sqrt(2))/4"] },
    { q: "Find the exact value of tan(75°).", a: "2+sqrt(3)", accepted: ["2+sqrt(3)", "2 + sqrt(3)", "2+√3", "√3+2", "sqrt(3)+2"] },
    { q: "Find the exact value of sin(pi/12).", a: "(sqrt(6)-sqrt(2))/4", accepted: ["(sqrt(6)-sqrt(2))/4", "(sqrt(6) - sqrt(2))/4", "(√6-√2)/4", "sqrt(6)/4-sqrt(2)/4"] },
    { q: "If sin(theta)=4/5 and cos(theta)=3/5, find sin(2theta).", a: "24/25", accepted: ["24/25", "0.96", "sin(2theta)=24/25", "sin(2θ)=24/25"] },
    { q: "If sin(theta)=4/5 and cos(theta)=3/5, find cos(2theta).", a: "-7/25", accepted: ["-7/25", "−7/25", "-0.28", "cos(2theta)=-7/25", "cos(2θ)=−7/25"] },
    { q: "If tan(theta)=1/3, find tan(2theta).", a: "3/4", accepted: ["3/4", "0.75", "tan(2theta)=3/4", "tan(2θ)=3/4"] },
    { q: "If cos(theta)=-1/2, find cos(2theta).", a: "-1/2", accepted: ["-1/2", "−1/2", "-0.5", "cos(2theta)=-1/2", "cos(2θ)=−1/2"] },
    { q: "Rewrite 2sin(5x)cos(5x) as one function.", a: "sin(10x)", accepted: ["sin(10x)", "sin 10x", "sin(2*5x)", "sin(5x+5x)"] },
    { q: "Rewrite cos^2(x) − sin^2(x) as one function.", a: "cos(2x)", accepted: ["cos(2x)", "cos 2x", "cos(x+x)"] },
    { q: "Rewrite 1 − 2sin^2(x) as one function.", a: "cos(2x)", accepted: ["cos(2x)", "cos 2x", "cos(x+x)"] },
    { q: "Rewrite 2cos^2(x) − 1 as one function.", a: "cos(2x)", accepted: ["cos(2x)", "cos 2x", "cos(x+x)"] },
    { q: "Rewrite sin(7x)cos(2x) + cos(7x)sin(2x) as one function.", a: "sin(9x)", accepted: ["sin(9x)", "sin 9x", "sin(7x+2x)"] },
    { q: "Rewrite cos(8x)cos(3x) + sin(8x)sin(3x) as one function.", a: "cos(5x)", accepted: ["cos(5x)", "cos 5x", "cos(8x-3x)"] },
    { q: "Rewrite sin^2(x) using a first power of cosine.", a: "(1-cos(2x))/2", accepted: ["(1-cos(2x))/2", "(1 - cos(2x))/2", "1/2-cos(2x)/2", "(1−cos(2x))/2"] },
    { q: "Rewrite cos^2(x) using a first power of cosine.", a: "(1+cos(2x))/2", accepted: ["(1+cos(2x))/2", "(1 + cos(2x))/2", "1/2+cos(2x)/2", "(1+cos(2x))/2"] },
    { q: "Find the exact positive value of sin(22.5°).", a: "sqrt(2-sqrt(2))/2", accepted: ["sqrt(2-sqrt(2))/2", "sqrt(2 - sqrt(2))/2", "√(2-√2)/2", "√(2 − √2)/2", "(sqrt(2-sqrt(2)))/2"] },
    { q: "Find the exact value of cos(67.5°).", a: "sqrt(2-sqrt(2))/2", accepted: ["sqrt(2-sqrt(2))/2", "sqrt(2 - sqrt(2))/2", "√(2-√2)/2", "√(2 − √2)/2", "(sqrt(2-sqrt(2)))/2"] },
    { q: "If cos(theta)=7/9 and theta/2 is in Quadrant I, which sign belongs before the square root in the cosine half-angle formula?", a: "positive", accepted: ["positive", "+", "plus", "positive sign", "+sqrt"] },
    { q: "If theta/2 is in Quadrant III, is sin(theta/2) positive or negative?", a: "negative", accepted: ["negative", "-", "minus", "negative sign", "sin(theta/2) is negative"] },
    { q: "Which calculator mode should be used to check sin(105°)?", a: "degree mode", accepted: ["degree mode", "degrees", "degree", "deg", "DEG", "deg mode"] },
    { q: "Which calculator mode should be used to check cos(5pi/12)?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] },
    { q: "True or false: sin(A+B)=sin(A)+sin(B).", a: "false", accepted: ["false", "not true", "no", "f"] },
    { q: "What range check must every exact sine or cosine value pass?", a: "-1 to 1", accepted: ["-1 to 1", "−1 to 1", "between -1 and 1", "between −1 and 1", "[-1,1]", "[−1,1]", "-1<=value<=1"] }
  ]
};
