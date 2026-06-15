window.COURSE.lessons["fundamental-trig-identities"] = {
  id: "fundamental-trig-identities",
  title: "Fundamental trigonometric identities",
  eyebrow: "Lesson 21 · Fundamental trigonometric identities",
  standard: "MA.912.T.1.5 · MA.912.T.1.7",
  standardText: "Prove and apply Pythagorean identities to calculate trigonometric ratios and solve problems, and simplify expressions using trigonometric identities.",
  objective: "Use reciprocal, quotient, and Pythagorean identities to rewrite and simplify trigonometric expressions and to verify that two expressions are identical wherever both are defined.",
  estimated: "50–60 min",
  sections: [
    {
      id: "reciprocal-identities",
      label: "01",
      title: "Reverse a trig value with a reciprocal",
      kicker: "Three reciprocal pairs",
      body: [
        "An identity is an equation that is true for every input where both sides are defined. The six trigonometric functions form three reciprocal pairs: sine with cosecant, cosine with secant, and tangent with cotangent. A reciprocal turns a nonzero number a/b into b/a. It does not change only the numerator or only the denominator.",
        "For example, if sin(θ) = 3/5, then csc(θ) = 1/(3/5). Dividing by a fraction means multiplying by its reciprocal, so 1/(3/5) = 1 · 5/3 = 5/3. The sign stays attached: if cos(θ) = −4/7, then sec(θ) = −7/4. A reciprocal of 0 is undefined because division by zero is not allowed."
      ],
      formula: "csc(θ) = 1/sin(θ)   |   sec(θ) = 1/cos(θ)   |   cot(θ) = 1/tan(θ)",
      diagram: "trig-identities-reciprocal-pairs",
      note: "Each reciprocal statement works in both directions: sin = 1/csc, cos = 1/sec, and tan = 1/cot, wherever the denominators are nonzero.",
      check: {
        prompt: "If cos(θ) = −2/3, find sec(θ).",
        answer: "-3/2",
        accept: ["-3/2", "−3/2", "3/-2", "sec(theta)=-3/2", "sec(θ)=−3/2", "-1.5"],
        hint: "Secant is the reciprocal of cosine. Flip the entire fraction −2/3."
      }
    },
    {
      id: "quotient-identities",
      label: "02",
      title: "Build tangent and cotangent by division",
      kicker: "Two quotient identities",
      body: [
        "The quotient identities write tangent and cotangent using sine and cosine. Tangent is sine divided by cosine: tan(θ) = sin(θ)/cos(θ). Cotangent reverses that quotient: cot(θ) = cos(θ)/sin(θ). These equations agree with unit-circle coordinates because sine is y, cosine is x, tangent is y/x, and cotangent is x/y.",
        "Substitute complete values before dividing. If sin(θ) = 5/13 and cos(θ) = −12/13, then tan(θ) = (5/13)/(−12/13). Multiply by the reciprocal of the divisor: (5/13)(13/−12) = −5/12. The common factor 13 cancels. Tangent is undefined when cosine is 0; cotangent is undefined when sine is 0."
      ],
      formula: "tan(θ) = sin(θ)/cos(θ)   |   cot(θ) = cos(θ)/sin(θ)",
      diagram: "trig-identities-quotient-paths",
      note: "Use parentheses around substituted fractions. They make it clear that the entire sine value is divided by the entire cosine value.",
      check: {
        prompt: "If sin(θ) = −3/5 and cos(θ) = 4/5, find tan(θ).",
        answer: "-3/4",
        accept: ["-3/4", "−3/4", "3/-4", "tan(theta)=-3/4", "tan(θ)=−3/4", "-0.75"],
        hint: "Use tan(θ) = sin(θ)/cos(θ), then divide (−3/5) by (4/5)."
      }
    },
    {
      id: "pythagorean-identities",
      label: "03",
      title: "Generate the Pythagorean identities",
      kicker: "One circle equation, three forms",
      body: [
        "A unit-circle point is (cos(θ), sin(θ)). Every point on that circle satisfies x² + y² = 1, so substitution gives the first Pythagorean identity: cos²(θ) + sin²(θ) = 1. The notation sin²(θ) means [sin(θ)]²; it does not mean sin(θ²). Addition can be reordered, so sin²(θ) + cos²(θ) = 1 is the same identity.",
        "Create two more identities by dividing every term by the same nonzero expression. Divide sin² + cos² = 1 by cos²: sin²/cos² + cos²/cos² = 1/cos². Then use tan = sin/cos, 1 = cos²/cos², and sec = 1/cos to get tan² + 1 = sec². Dividing the original identity by sin² similarly gives 1 + cot² = csc²."
      ],
      formula: "sin²(θ) + cos²(θ) = 1   |   1 + tan²(θ) = sec²(θ)   |   1 + cot²(θ) = csc²(θ)",
      diagram: "trig-identities-pythagorean-family",
      note: "Match the functions in each family: sine and cosine; tangent and secant; cotangent and cosecant. Do not mix pieces from different identities.",
      check: {
        prompt: "Use a Pythagorean identity to rewrite sec²(θ) − tan²(θ).",
        answer: "1",
        accept: ["1", "one", "sec^2(theta)-tan^2(theta)=1", "sec²(θ)−tan²(θ)=1"],
        hint: "Start with 1 + tan²(θ) = sec²(θ), then subtract tan²(θ) from both sides."
      }
    },
    {
      id: "simplify-expressions",
      label: "04",
      title: "Simplify one expression at a time",
      kicker: "Rewrite, factor, and cancel",
      body: [
        "Simplifying a trigonometric expression uses familiar Algebra II moves. First choose an identity that creates common factors or a Pythagorean pattern. Reciprocal and quotient identities can rewrite everything in sine and cosine. Then factor, combine fractions, or cancel only common factors. Never cancel terms joined by addition or subtraction.",
        "For example, (1 − cos²(θ))/sin(θ) contains part of sin² + cos² = 1. Subtract cos² from both sides to get 1 − cos² = sin². Replace the numerator: sin²(θ)/sin(θ). Since sin² means sin · sin, one nonzero factor of sin cancels and the result is sin(θ). The original expression requires sin(θ) ≠ 0."
      ],
      formula: "(1 − cos²(θ))/sin(θ) = sin²(θ)/sin(θ) = sin(θ), for sin(θ) ≠ 0",
      diagram: "trig-identities-simplification-route",
      note: "Cancellation is division of common factors. In (a + b)/a, the numerator is a sum, so a is not a factor of the entire numerator and cannot be canceled.",
      check: {
        prompt: "Simplify cos(θ)sec(θ).",
        answer: "1",
        accept: ["1", "one", "cos(theta)sec(theta)=1", "cos(θ)sec(θ)=1"],
        hint: "Replace sec(θ) with 1/cos(θ), then cancel the common nonzero factor cos(θ)."
      }
    },
    {
      id: "verify-identities",
      label: "05",
      title: "Verify an identity from one side",
      kicker: "Transform instead of solving",
      body: [
        "To verify an identity, show that one side can be rewritten as the other. This is different from solving an equation: θ is not one unknown angle to find. Begin with the more complicated side and work on that side only. Use an identity, show the substitution, and simplify until the unchanged other side appears.",
        "A reliable order is: look for a Pythagorean pattern; rewrite secant, cosecant, cotangent, or tangent when sine and cosine would help; factor; combine fractions using a common denominator; then cancel common factors. State restrictions created by denominators. Testing one angle can expose a false statement, but one successful test does not prove an identity for every allowed angle."
      ],
      formula: "complicated side → known identity → algebra → other side",
      diagram: "trig-identities-verification-chain",
      note: "Do not move terms across the equals sign while verifying. That can hide circular reasoning. Keep a clear chain of equivalent expressions on one side.",
      check: {
        prompt: "Which identity starts a verification of (1 − sin²(θ))/cos(θ) = cos(θ)?",
        answer: "1-sin^2(theta)=cos^2(theta)",
        accept: ["1-sin^2(theta)=cos^2(theta)", "1 − sin²(θ) = cos²(θ)", "cos^2(theta)=1-sin^2(theta)", "cos²(θ)=1−sin²(θ)", "pythagorean identity", "sin^2(theta)+cos^2(theta)=1"],
        hint: "Rearrange sin²(θ) + cos²(θ) = 1 so that 1 − sin²(θ) is alone."
      }
    },
    {
      id: "find-missing-values",
      label: "06",
      title: "Use identities to find missing values",
      kicker: "Exact values and sign choices",
      body: [
        "A Pythagorean identity can find one trigonometric value from another. If sin(θ) = 3/5, substitute into sin² + cos² = 1: (3/5)² + cos² = 1. Square numerator and denominator to get 9/25 + cos² = 25/25, so cos² = 16/25. Taking a square root gives cos(θ) = ±4/5. Squaring loses sign information, so use the stated quadrant to choose the sign.",
        "If θ is in Quadrant II, cosine is negative, so cos(θ) = −4/5. Then tan(θ) = sin/cos = (3/5)/(−4/5) = −3/4. Keep exact fractions and radicals for exact-value work. If a problem requests a decimal check, use DEG mode for degree measures and RAD mode for radian measures; calculator evidence supports a result but does not replace an algebraic verification."
      ],
      formula: "known value → Pythagorean identity → ± square root → quadrant sign → other identities",
      diagram: "trig-identities-missing-value-flow",
      note: "The symbol ± belongs in the algebra step. The quadrant then selects one sign. Without quadrant or sign information, both signs may remain possible.",
      check: {
        prompt: "If cos(θ) = 5/13 and θ is in Quadrant IV, find sin(θ).",
        answer: "-12/13",
        accept: ["-12/13", "−12/13", "12/-13", "sin(theta)=-12/13", "sin(θ)=−12/13"],
        hint: "Use sin² + cos² = 1. The resulting size is 12/13, and sine is negative in Quadrant IV."
      }
    }
  ],
  examples: [
    {
      title: "Simplify with reciprocal and quotient identities",
      problem: "Simplify sec(θ) − cos(θ)tan²(θ).",
      steps: [
        "Start with sec(θ) − cos(θ)tan²(θ). The expression mixes secant, cosine, and tangent, so rewrite secant and tangent using sine and cosine.",
        "Use sec(θ) = 1/cos(θ) and tan²(θ) = sin²(θ)/cos²(θ): 1/cos(θ) − cos(θ)[sin²(θ)/cos²(θ)].",
        "Cancel one common factor of cos(θ) in the second product: 1/cos(θ) − sin²(θ)/cos(θ).",
        "The fractions now have the same denominator, so subtract their numerators: [1 − sin²(θ)]/cos(θ).",
        "Use 1 − sin²(θ) = cos²(θ): cos²(θ)/cos(θ).",
        "Cancel one nonzero factor of cos(θ). The simplified result is cos(θ), on the domain of the original expression where cos(θ) ≠ 0."
      ]
    },
    {
      title: "Verify an identity",
      problem: "Verify (csc(θ) − sin(θ))/cot(θ) = cos(θ), wherever both sides are defined.",
      steps: [
        "Begin with the more complicated left side. Leave the right side cos(θ) unchanged.",
        "Rewrite csc(θ) as 1/sin(θ): [1/sin(θ) − sin(θ)]/cot(θ).",
        "Combine the terms in brackets using the common denominator sin(θ): [(1 − sin²(θ))/sin(θ)]/cot(θ).",
        "Use 1 − sin²(θ) = cos²(θ): [cos²(θ)/sin(θ)]/cot(θ).",
        "Rewrite cot(θ) as cos(θ)/sin(θ), then divide by multiplying by its reciprocal: [cos²(θ)/sin(θ)] · [sin(θ)/cos(θ)].",
        "Cancel the common nonzero factors sin(θ) and cos(θ). The left side becomes cos(θ), which matches the right side. The identity is verified wherever the original left side is defined."
      ]
    },
    {
      title: "Find exact values from one trig value",
      problem: "Given tan(θ) = −5/12 and θ is in Quadrant II, find sec(θ) and sin(θ) exactly.",
      steps: [
        "Use 1 + tan²(θ) = sec²(θ). Substitute tan(θ) = −5/12: 1 + (−5/12)² = sec²(θ).",
        "Square the fraction and write 1 with denominator 144: 144/144 + 25/144 = 169/144, so sec²(θ) = 169/144.",
        "Take square roots: sec(θ) = ±13/12. In Quadrant II, cosine is negative, so its reciprocal secant is also negative. Therefore sec(θ) = −13/12.",
        "Use cos(θ) = 1/sec(θ) = −12/13.",
        "Use tan(θ) = sin(θ)/cos(θ). Multiply both sides by cos(θ): sin(θ) = tan(θ)cos(θ).",
        "Substitute: sin(θ) = (−5/12)(−12/13) = 5/13. The signs fit Quadrant II: sine is positive, while cosine, tangent, and secant are negative."
      ]
    }
  ],
  practice: [
    { q: "If sin(θ)=4/9, find csc(θ).", a: "9/4", accepted: ["9/4", "2.25", "csc(theta)=9/4", "csc(θ)=9/4"] },
    { q: "If sec(θ)=−7/3, find cos(θ).", a: "-3/7", accepted: ["-3/7", "−3/7", "3/-7", "cos(theta)=-3/7", "cos(θ)=−3/7"] },
    { q: "Which function is the reciprocal of tangent?", a: "cotangent", accepted: ["cotangent", "cot", "cot(theta)", "cot(θ)", "1/tan(theta)"] },
    { q: "If sin(θ)=5/13 and cos(θ)=12/13, find tan(θ).", a: "5/12", accepted: ["5/12", "tan(theta)=5/12", "tan(θ)=5/12"] },
    { q: "If sin(θ)=−8/17 and cos(θ)=15/17, find cot(θ).", a: "-15/8", accepted: ["-15/8", "−15/8", "15/-8", "cot(theta)=-15/8", "cot(θ)=−15/8"] },
    { q: "Complete the identity: tan(θ) = sin(θ)/____.", a: "cos(theta)", accepted: ["cos(theta)", "cos(θ)", "cosine", "cos", "cos theta"] },
    { q: "Simplify sin²(θ)+cos²(θ).", a: "1", accepted: ["1", "one", "sin^2(theta)+cos^2(theta)=1", "sin²(θ)+cos²(θ)=1"] },
    { q: "Simplify csc²(θ)−cot²(θ).", a: "1", accepted: ["1", "one", "csc^2(theta)-cot^2(theta)=1", "csc²(θ)−cot²(θ)=1"] },
    { q: "Simplify 1+tan²(θ).", a: "sec^2(theta)", accepted: ["sec^2(theta)", "sec²(θ)", "sec(theta)^2", "sec^2 θ", "secant squared"] },
    { q: "Simplify sec²(θ)−1.", a: "tan^2(theta)", accepted: ["tan^2(theta)", "tan²(θ)", "tan(theta)^2", "tan^2 θ", "tangent squared"] },
    { q: "Simplify 1−sin²(θ).", a: "cos^2(theta)", accepted: ["cos^2(theta)", "cos²(θ)", "cos(theta)^2", "cos^2 θ", "cosine squared"] },
    { q: "Simplify sin(θ)csc(θ).", a: "1", accepted: ["1", "one", "sin(theta)csc(theta)=1", "sin(θ)csc(θ)=1"] },
    { q: "Simplify tan(θ)cot(θ).", a: "1", accepted: ["1", "one", "tan(theta)cot(theta)=1", "tan(θ)cot(θ)=1"] },
    { q: "Simplify tan(θ)cos(θ).", a: "sin(theta)", accepted: ["sin(theta)", "sin(θ)", "sine", "sin theta", "tan(theta)cos(theta)=sin(theta)"] },
    { q: "Simplify cot(θ)sin(θ).", a: "cos(theta)", accepted: ["cos(theta)", "cos(θ)", "cosine", "cos theta", "cot(theta)sin(theta)=cos(theta)"] },
    { q: "Simplify (1−cos²(θ))/sin(θ).", a: "sin(theta)", accepted: ["sin(theta)", "sin(θ)", "sine", "sin theta", "(sin^2(theta))/sin(theta)"] },
    { q: "Simplify (sec²(θ)−1)/tan(θ).", a: "tan(theta)", accepted: ["tan(theta)", "tan(θ)", "tangent", "tan theta", "tan^2(theta)/tan(theta)"] },
    { q: "Which side should you usually transform first when verifying an identity?", a: "the more complicated side", accepted: ["the more complicated side", "more complicated side", "complicated side", "the complex side", "left or right whichever is more complicated"] },
    { q: "True or false: checking one angle proves an equation is an identity.", a: "false", accepted: ["false", "no", "not true", "one angle does not prove it"] },
    { q: "If sin(θ)=3/5 and θ is in Quadrant II, find cos(θ).", a: "-4/5", accepted: ["-4/5", "−4/5", "4/-5", "cos(theta)=-4/5", "cos(θ)=−4/5"] },
    { q: "If cos(θ)=−12/13 and θ is in Quadrant III, find sin(θ).", a: "-5/13", accepted: ["-5/13", "−5/13", "5/-13", "sin(theta)=-5/13", "sin(θ)=−5/13"] },
    { q: "If tan(θ)=3/4 and θ is in Quadrant III, find sec(θ).", a: "-5/4", accepted: ["-5/4", "−5/4", "5/-4", "sec(theta)=-5/4", "sec(θ)=−5/4"] },
    { q: "If cot(θ)=−7/24 and θ is in Quadrant IV, find csc(θ).", a: "-25/24", accepted: ["-25/24", "−25/24", "25/-24", "csc(theta)=-25/24", "csc(θ)=−25/24"] },
    { q: "A decimal check uses θ=38°. Which calculator mode is required?", a: "degree mode", accepted: ["degree mode", "degrees", "degree", "deg", "DEG", "deg mode"] },
    { q: "A decimal check uses θ=1.2 radians. Which calculator mode is required?", a: "radian mode", accepted: ["radian mode", "radians", "radian", "rad", "RAD", "rad mode"] },
    { q: "For tan(θ)=sin(θ)/cos(θ), what makes tangent undefined?", a: "cos(theta)=0", accepted: ["cos(theta)=0", "cos(θ)=0", "cosine equals 0", "cosine is zero", "a zero cosine", "division by zero"] }
  ]
};
