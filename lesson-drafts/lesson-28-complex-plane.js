window.COURSE.lessons["complex-plane"] = {
  id: "complex-plane",
  title: "Complex Numbers in the Plane",
  eyebrow: "Lesson 28 · Complex Numbers in the Plane",
  standard: "MA.912.NSO.2.1 · MA.912.NSO.2.2 · MA.912.NSO.2.3 · MA.912.NSO.2.4",
  standardText: "Extend the real number system to include complex numbers. Add, subtract, multiply, divide, represent, and interpret complex numbers algebraically and geometrically on the complex plane.",
  objective: "Represent complex numbers in a+bi form and on the complex plane, then use modulus, conjugates, and operations to solve algebraic and geometric problems.",
  estimated: "50–60 min",
  sections: [
    {
      id: "parts-of-complex-numbers",
      label: "01",
      title: "Read the real and imaginary parts",
      kicker: "Two components in one number",
      body: [
        "A complex number is written in the form a + bi. The number a is the real part, and the number b is the imaginary part. The letter i represents the imaginary unit, where i^2 = -1. A complex number can have both parts, only a real part, or only an imaginary part.",
        "For 5 - 3i, the real part is 5 and the imaginary part is -3. The minus sign belongs to the imaginary part because 5 - 3i means 5 + (-3)i. For -7i, the real part is 0 and the imaginary part is -7. For 4, the real part is 4 and the imaginary part is 0.",
        "Keep the coefficient of i separate from i itself. The imaginary part of 2 + 9i is 9, not 9i. This makes complex numbers work like ordered pairs: a + bi corresponds to the pair (a,b)."
      ],
      formula: "a + bi   |   real part = a   |   imaginary part = b   |   i^2 = -1",
      diagram: "complex-plane-components",
      note: "The imaginary part is the number multiplying i. Include the sign when the expression uses subtraction.",
      check: {
        prompt: "For -6 + 4i, what are the real and imaginary parts?",
        answer: "real part -6, imaginary part 4",
        accept: ["real part -6, imaginary part 4", "real=-6, imaginary=4", "real = -6, imaginary = 4", "-6,4", "a=-6,b=4", "a = -6, b = 4"],
        hint: "Use a + bi. The real part is the standalone number, and the imaginary part is the coefficient of i."
      }
    },
    {
      id: "plotting-complex-numbers",
      label: "02",
      title: "Plot a + bi on the complex plane",
      kicker: "Real axis, imaginary axis",
      body: [
        "The complex plane is a coordinate plane for complex numbers. The horizontal axis is the real axis, and the vertical axis is the imaginary axis. To plot a + bi, move a units along the real axis and b units along the imaginary axis.",
        "The number 3 + 2i plots at the point (3,2). The number -4 + i plots at (-4,1), because i means 1i. The number 2 - 5i plots at (2,-5). The point tells you how far right or left to move and then how far up or down to move.",
        "This graphing connection helps you see operations. Adding complex numbers adds horizontal movements and vertical movements separately. A complex number and its point are two ways to describe the same location."
      ],
      formula: "a + bi ↔ (a,b)",
      diagram: "complex-plane-plotting",
      note: "The x-coordinate is the real part. The y-coordinate is the imaginary part.",
      check: {
        prompt: "Where does -2 + 5i plot on the complex plane?",
        answer: "(-2,5)",
        accept: ["(-2,5)", "(-2, 5)", "-2,5", "x=-2,y=5", "real -2 imaginary 5"],
        hint: "Use the real part as x and the imaginary part as y."
      }
    },
    {
      id: "modulus-and-distance",
      label: "03",
      title: "Find the modulus",
      kicker: "Distance from zero",
      body: [
        "The modulus of a complex number is its distance from the origin on the complex plane. It is written |a + bi|. Because the real and imaginary parts make a right triangle, use the Pythagorean Theorem.",
        "For z = a + bi, the modulus is |z| = sqrt(a^2 + b^2). For 3 + 4i, the distance is sqrt(3^2 + 4^2) = sqrt(25) = 5. For -6 + 2i, use the same formula: sqrt((-6)^2 + 2^2) = sqrt(40) = 2sqrt(10).",
        "The modulus is never negative because it represents a distance. If a problem asks for an exact value, leave a square root simplified. If it asks for a decimal, round only at the end."
      ],
      formula: "|a + bi| = sqrt(a^2 + b^2)",
      diagram: "complex-plane-modulus",
      note: "The signs of a and b do not make the modulus negative because both parts are squared.",
      check: {
        prompt: "Find the modulus of 5 - 12i.",
        answer: "13",
        accept: ["13", "|5-12i|=13", "|5 - 12i| = 13", "modulus 13", "sqrt(169)", "√169"],
        hint: "Compute sqrt(5^2 + (-12)^2)."
      }
    },
    {
      id: "conjugates",
      label: "04",
      title: "Use conjugates",
      kicker: "Reflect across the real axis",
      body: [
        "The conjugate of a + bi is a - bi. The real part stays the same, and the sign of the imaginary part changes. The conjugate of 7 + 2i is 7 - 2i. The conjugate of -3 - 5i is -3 + 5i.",
        "On the complex plane, conjugates are mirror images across the real axis. If a + bi plots at (a,b), then a - bi plots at (a,-b). The two points have the same distance from the origin because they have the same real part and opposite imaginary parts.",
        "Conjugates are especially useful for division. When you multiply a complex number by its conjugate, the imaginary terms cancel: (a + bi)(a - bi) = a^2 + b^2. That result is a real number."
      ],
      formula: "conjugate of a + bi = a - bi   |   (a + bi)(a - bi) = a^2 + b^2",
      diagram: "complex-plane-conjugates",
      note: "Only the imaginary part changes sign. Do not change the real part.",
      check: {
        prompt: "Find the conjugate of -8 + 3i.",
        answer: "-8 - 3i",
        accept: ["-8-3i", "-8 - 3i", "-8+(-3)i", "-8 + (-3)i"],
        hint: "Keep the real part -8 and change the sign of the imaginary part."
      }
    },
    {
      id: "add-and-subtract",
      label: "05",
      title: "Add and subtract component by component",
      kicker: "Combine like parts",
      body: [
        "Add complex numbers by adding real parts together and imaginary parts together. This is like adding ordered pairs. For (2 + 5i) + (7 - 3i), the real parts give 2 + 7 = 9, and the imaginary parts give 5i - 3i = 2i, so the sum is 9 + 2i.",
        "Subtract complex numbers by distributing the subtraction sign first, then combining like parts. For (6 - i) - (4 + 3i), rewrite it as 6 - i - 4 - 3i. The real parts give 2, and the imaginary parts give -4i, so the difference is 2 - 4i.",
        "Geometrically, addition places one movement after another. Subtraction finds the movement from one complex number to another. The algebra and the graph agree because both use real and imaginary components."
      ],
      formula: "(a + bi) + (c + di) = (a + c) + (b + d)i",
      diagram: "complex-plane-add-subtract",
      note: "For subtraction, distribute the negative sign to both the real part and the imaginary part of the second number.",
      check: {
        prompt: "Compute (4 + 6i) - (9 - 2i).",
        answer: "-5 + 8i",
        accept: ["-5+8i", "-5 + 8i", "-5+ 8i", "8i-5", "8i - 5"],
        hint: "Subtract real parts: 4 - 9. Subtract imaginary parts: 6i - (-2i)."
      }
    },
    {
      id: "multiply-and-divide",
      label: "06",
      title: "Multiply and divide complex numbers",
      kicker: "Use i^2 and conjugates",
      body: [
        "Multiply complex numbers by distributing, then replace i^2 with -1. For (2 + 3i)(4 - i), multiply every term: 8 - 2i + 12i - 3i^2. Combine and simplify: 8 + 10i - 3(-1) = 11 + 10i.",
        "Division uses conjugates to remove i from the denominator. To divide by c + di, multiply the numerator and denominator by c - di. This is the complex-number version of making a denominator easier to use.",
        "For (5 + i)/(2 - i), multiply by the conjugate 2 + i. The denominator becomes (2 - i)(2 + i) = 4 + 1 = 5. The numerator becomes (5 + i)(2 + i) = 10 + 5i + 2i + i^2 = 9 + 7i. The quotient is (9 + 7i)/5 = 9/5 + 7/5i."
      ],
      formula: "i^2 = -1   |   divide by c + di: multiply by (c - di)/(c - di)",
      diagram: "complex-plane-multiply-divide",
      note: "A final complex-number answer should usually be written as a + bi, even when a or b is a fraction.",
      check: {
        prompt: "Compute (3 + 2i)(1 - 4i).",
        answer: "11 - 10i",
        accept: ["11-10i", "11 - 10i", "-10i+11", "-10i + 11"],
        hint: "Distribute first, then replace i^2 with -1."
      }
    }
  ],
  examples: [
    {
      title: "Plot a complex number and find its modulus and conjugate",
      problem: "For z = -3 + 4i, plot the point, find |z|, and find the conjugate.",
      steps: [
        "Read the real and imaginary parts. In z = -3 + 4i, the real part is -3 and the imaginary part is 4.",
        "Plot the complex number at (-3,4). Move 3 units left on the real axis and 4 units up on the imaginary axis.",
        "Find the modulus using distance from the origin: |z| = sqrt((-3)^2 + 4^2).",
        "Simplify inside the square root: (-3)^2 = 9 and 4^2 = 16, so |z| = sqrt(25) = 5.",
        "Find the conjugate by changing the sign of the imaginary part. The conjugate of -3 + 4i is -3 - 4i.",
        "On the graph, the conjugate plots at (-3,-4), which is the reflection of (-3,4) across the real axis."
      ]
    },
    {
      title: "Add, subtract, and multiply complex numbers",
      problem: "Let z = 2 - 5i and w = -4 + 3i. Find z + w, z - w, and zw.",
      steps: [
        "Add real parts and imaginary parts separately: z + w = (2 + -4) + (-5 + 3)i.",
        "Simplify the sum: z + w = -2 - 2i.",
        "For subtraction, distribute the subtraction sign: z - w = (2 - 5i) - (-4 + 3i) = 2 - 5i + 4 - 3i.",
        "Combine like parts: z - w = 6 - 8i.",
        "For multiplication, distribute: zw = (2 - 5i)(-4 + 3i) = -8 + 6i + 20i - 15i^2.",
        "Combine imaginary terms and use i^2 = -1: -8 + 26i - 15(-1) = 7 + 26i.",
        "The three results are z + w = -2 - 2i, z - w = 6 - 8i, and zw = 7 + 26i."
      ]
    },
    {
      title: "Divide using a conjugate",
      problem: "Simplify (7 - i)/(3 + 2i).",
      steps: [
        "The denominator is 3 + 2i, so use its conjugate 3 - 2i.",
        "Multiply the numerator and denominator by the same conjugate fraction: (7 - i)/(3 + 2i) · (3 - 2i)/(3 - 2i).",
        "Multiply the denominator: (3 + 2i)(3 - 2i) = 9 - 6i + 6i - 4i^2 = 9 - 4(-1) = 13.",
        "Multiply the numerator: (7 - i)(3 - 2i) = 21 - 14i - 3i + 2i^2.",
        "Use i^2 = -1 in the numerator: 21 - 17i + 2(-1) = 19 - 17i.",
        "Write the quotient over the real denominator: (19 - 17i)/13.",
        "Separate the real and imaginary parts for a + bi form: 19/13 - 17/13i."
      ]
    }
  ],
  practice: [
    { q: "For 6 - 9i, what is the real part?", a: "6", accepted: ["6", "real part 6", "real=6", "a=6"] },
    { q: "For 6 - 9i, what is the imaginary part?", a: "-9", accepted: ["-9", "imaginary part -9", "imaginary=-9", "b=-9"] },
    { q: "Plot 4 + 7i as an ordered pair.", a: "(4,7)", accepted: ["(4,7)", "(4, 7)", "4,7", "x=4,y=7"] },
    { q: "Plot -5 - 2i as an ordered pair.", a: "(-5,-2)", accepted: ["(-5,-2)", "(-5, -2)", "-5,-2", "x=-5,y=-2"] },
    { q: "Which axis represents the real part on the complex plane?", a: "horizontal axis", accepted: ["horizontal axis", "x-axis", "real axis", "the real axis"] },
    { q: "Which axis represents the imaginary part on the complex plane?", a: "vertical axis", accepted: ["vertical axis", "y-axis", "imaginary axis", "the imaginary axis"] },
    { q: "Find the modulus of 8 + 6i.", a: "10", accepted: ["10", "|8+6i|=10", "|8 + 6i| = 10", "sqrt(100)", "√100"] },
    { q: "Find the modulus of -1 + 2i.", a: "sqrt(5)", accepted: ["sqrt(5)", "√5", "|-1+2i|=sqrt(5)", "root 5"] },
    { q: "Find the modulus of -3 - 4i.", a: "5", accepted: ["5", "sqrt(25)", "√25", "modulus 5"] },
    { q: "Find the conjugate of 9 + i.", a: "9 - i", accepted: ["9-i", "9 - i", "9-1i", "9 - 1i"] },
    { q: "Find the conjugate of -2 - 11i.", a: "-2 + 11i", accepted: ["-2+11i", "-2 + 11i"] },
    { q: "True or false: conjugates reflect across the real axis.", a: "true", accepted: ["true", "yes", "t"] },
    { q: "Compute (3 + 4i) + (5 - 6i).", a: "8 - 2i", accepted: ["8-2i", "8 - 2i", "-2i+8", "-2i + 8"] },
    { q: "Compute (-7 + i) + (2 + 8i).", a: "-5 + 9i", accepted: ["-5+9i", "-5 + 9i", "9i-5", "9i - 5"] },
    { q: "Compute (10 - 3i) - (4 + 5i).", a: "6 - 8i", accepted: ["6-8i", "6 - 8i", "-8i+6", "-8i + 6"] },
    { q: "Compute (-1 + 6i) - (3 - 2i).", a: "-4 + 8i", accepted: ["-4+8i", "-4 + 8i", "8i-4", "8i - 4"] },
    { q: "Compute (2 + i)(3 + 4i).", a: "2 + 11i", accepted: ["2+11i", "2 + 11i", "11i+2", "11i + 2"] },
    { q: "Compute (5 - 2i)(1 + 3i).", a: "11 + 13i", accepted: ["11+13i", "11 + 13i", "13i+11", "13i + 11"] },
    { q: "Compute (4 + 7i)(4 - 7i).", a: "65", accepted: ["65", "real 65", "65+0i", "65 + 0i"] },
    { q: "Simplify i^2.", a: "-1", accepted: ["-1", "negative 1"] },
    { q: "Simplify i^4.", a: "1", accepted: ["1", "positive 1"] },
    { q: "Divide: (6 + 2i)/2.", a: "3 + i", accepted: ["3+i", "3 + i", "3+1i", "3 + 1i"] },
    { q: "Simplify 1/(2 + i).", a: "2/5 - 1/5i", accepted: ["2/5-1/5i", "2/5 - 1/5i", "(2-i)/5", "(2 - i)/5", "2/5 - i/5"] },
    { q: "Simplify (3 + i)/(1 - i).", a: "1 + 2i", accepted: ["1+2i", "1 + 2i", "2i+1", "2i + 1"] },
    { q: "What is (a + bi)(a - bi)?", a: "a^2 + b^2", accepted: ["a^2+b^2", "a^2 + b^2", "a²+b²", "a² + b²"] },
    { q: "If z = 4 - 3i, what point represents its conjugate?", a: "(4,3)", accepted: ["(4,3)", "(4, 3)", "4,3", "x=4,y=3"] },
    { q: "If z plots at (-6,8), write z in a + bi form.", a: "-6 + 8i", accepted: ["-6+8i", "-6 + 8i", "8i-6", "8i - 6"] },
    { q: "If z = -12 + 5i, find |z|.", a: "13", accepted: ["13", "sqrt(169)", "√169", "|z|=13"] },
    { q: "Compute (2 - 3i) + (-2 + 3i).", a: "0", accepted: ["0", "0+0i", "0 + 0i"] },
    { q: "Compute (2 - 3i)(2 + 3i).", a: "13", accepted: ["13", "13+0i", "13 + 0i"] }
  ]
};
