window.COURSE.lessons["complex-polar-form"] = {
  id: "complex-polar-form",
  title: "Polar Form of Complex Numbers",
  eyebrow: "Lesson 29 · Polar Form of Complex Numbers",
  standard: "MA.912.NSO.2.1 · MA.912.NSO.2.2",
  standardText: "Represent, operate with, and interpret complex numbers in rectangular and polar form, including products, quotients, powers, and roots.",
  objective: "Convert complex numbers between rectangular and polar form, then use polar form to multiply, divide, raise to powers, and find roots.",
  estimated: "50–60 min",
  sections: [
    {
      id: "modulus-and-argument",
      label: "01",
      title: "Measure distance and direction",
      kicker: "Modulus and argument",
      body: [
        "A complex number a + bi can be graphed as the point (a,b) on the complex plane. The real part a moves left or right, and the imaginary part b moves up or down. Polar form describes the same point by its distance from the origin and its direction angle.",
        "The distance from the origin is called the modulus and is written r or |z|. Use the distance formula from (0,0) to (a,b): r = sqrt(a^2 + b^2). The direction angle is called an argument and is usually written theta. It is measured from the positive real axis, just like an angle in standard position.",
        "A complex number can have many arguments because adding or subtracting 360 degrees gives a coterminal angle. The principal argument is the commonly chosen angle in a fixed interval, often 0 degrees <= theta < 360 degrees or -180 degrees < theta <= 180 degrees. In this lesson, use the interval requested by the problem."
      ],
      formula: "z = a + bi   |   r = |z| = sqrt(a^2 + b^2)   |   theta = arg(z)",
      diagram: "complex-plane-modulus-argument",
      note: "The modulus is never negative. It is a distance, so r >= 0.",
      check: {
        prompt: "For z = 3 + 4i, what is the modulus?",
        answer: "5",
        accept: ["5", "r=5", "|z|=5", "modulus 5"],
        hint: "Use r = sqrt(a^2 + b^2) with a = 3 and b = 4."
      }
    },
    {
      id: "rectangular-to-polar",
      label: "02",
      title: "Convert rectangular to polar",
      kicker: "From a + bi to r(cos theta + i sin theta)",
      body: [
        "Rectangular form is a + bi. Polar form is r(cos theta + i sin theta), sometimes shortened to r cis theta. To convert, first find r with sqrt(a^2 + b^2). Then find theta from the reference angle using tangent: tan(theta) = b/a when a is not zero.",
        "The tangent calculation gives a reference direction, but the quadrant comes from the signs of a and b. If a > 0 and b > 0, the number is in Quadrant I. If a < 0 and b > 0, it is in Quadrant II. If a < 0 and b < 0, it is in Quadrant III. If a > 0 and b < 0, it is in Quadrant IV.",
        "For points on an axis, choose the axis angle directly. A positive real number has angle 0 degrees. A positive imaginary number has angle 90 degrees. A negative real number has angle 180 degrees. A negative imaginary number has angle 270 degrees if using 0 degrees <= theta < 360 degrees."
      ],
      formula: "a + bi = r(cos theta + i sin theta), where r = sqrt(a^2 + b^2)",
      diagram: "complex-rectangular-to-polar",
      note: "Use the quadrant from the point (a,b). Do not rely only on the calculator's inverse tangent output.",
      check: {
        prompt: "Convert z = 1 + sqrt(3)i to polar form using degrees.",
        answer: "2(cos60+i sin60)",
        accept: ["2(cos60+i sin60)", "2(cos 60 + i sin 60)", "2cis60", "2 cis 60", "r=2,theta=60"],
        hint: "Find the distance first, then use the quadrant of the point."
      }
    },
    {
      id: "polar-to-rectangular",
      label: "03",
      title: "Convert polar to rectangular",
      kicker: "Use cosine and sine as coordinates",
      body: [
        "Polar form already gives the distance r and the angle theta. To return to rectangular form, use the x- and y-coordinates of the point: a = r cos theta and b = r sin theta. Then write the answer as a + bi.",
        "This is the same coordinate conversion used in trigonometry. Cosine gives the horizontal part, and sine gives the vertical part. If the angle is on the unit circle, use exact values. If the angle is not a familiar angle and the problem allows decimals, use a calculator and round as directed.",
        "Pay attention to signs. The signs of cosine and sine determine the signs of the real and imaginary parts. For an angle in Quadrant II, cosine is negative and sine is positive, so the rectangular form has a negative real part and a positive imaginary part."
      ],
      formula: "r(cos theta + i sin theta) = r cos theta + i r sin theta",
      diagram: "complex-polar-to-rectangular",
      note: "The real part is r cos theta. The imaginary coefficient is r sin theta.",
      check: {
        prompt: "Convert 4(cos 180 degrees + i sin 180 degrees) to rectangular form.",
        answer: "-4",
        accept: ["-4", "-4+0i", "-4 + 0i"],
        hint: "Use the cosine and sine values for the angle."
      }
    },
    {
      id: "multiply-and-divide",
      label: "04",
      title: "Multiply and divide in polar form",
      kicker: "Multiply lengths, combine angles",
      body: [
        "Polar form makes multiplication and division much faster than rectangular form. When multiplying complex numbers, multiply the moduli and add the arguments. The result has length r1r2 and direction theta1 + theta2.",
        "When dividing complex numbers, divide the moduli and subtract the arguments. The result has length r1/r2 and direction theta1 - theta2. The divisor's modulus cannot be zero because division by zero is undefined.",
        "After combining angles, you may rewrite the angle as a coterminal angle in the requested interval. For example, an angle of 390 degrees can be written as 30 degrees. This does not change the complex number; it only changes the way the direction is named."
      ],
      formula: "z1z2 = r1r2 cis(theta1 + theta2)   |   z1/z2 = (r1/r2) cis(theta1 - theta2)",
      diagram: "complex-polar-products-quotients",
      note: "Polar multiplication rotates and stretches. Polar division reverses part of that rotation and scaling.",
      check: {
        prompt: "Find the product of 3 cis 40 degrees and 2 cis 25 degrees.",
        answer: "6 cis 65 degrees",
        accept: ["6 cis 65 degrees", "6cis65", "6 cis 65", "6(cos65+i sin65)", "6(cos 65 + i sin 65)"],
        hint: "For a product, combine the moduli and combine the angles."
      }
    },
    {
      id: "de-moivre-powers",
      label: "05",
      title: "Raise powers with De Moivre's Theorem",
      kicker: "Power the modulus, multiply the angle",
      body: [
        "De Moivre's Theorem gives a clean rule for powers of complex numbers in polar form. If z = r(cos theta + i sin theta), then z^n = r^n(cos ntheta + i sin ntheta) for positive integer powers n.",
        "The rule matches repeated multiplication. Each multiplication by z multiplies the modulus by r again and adds another theta to the angle. After n copies, the modulus is r^n and the angle is ntheta.",
        "If the final angle is larger than 360 degrees or outside the requested interval, use a coterminal angle. Then convert to rectangular form only if the problem asks for it or if the angle has easy exact sine and cosine values."
      ],
      formula: "[r(cos theta + i sin theta)]^n = r^n(cos ntheta + i sin ntheta)",
      diagram: "complex-de-moivre-powers",
      note: "The exponent affects both parts: raise r to the power and multiply theta by the power.",
      check: {
        prompt: "Use De Moivre's Theorem to simplify (2 cis 30 degrees)^3 in polar form.",
        answer: "8 cis 90 degrees",
        accept: ["8 cis 90 degrees", "8cis90", "8 cis 90", "8(cos90+i sin90)", "8(cos 90 + i sin 90)"],
        hint: "Apply the exponent to the modulus and to the angle rule."
      }
    },
    {
      id: "complex-roots",
      label: "06",
      title: "Find roots in polar form",
      kicker: "Split the angle evenly",
      body: [
        "Roots reverse powers. To find the n nth roots of z = r cis theta, take the nth root of the modulus and divide the possible angles by n. Because angles repeat every 360 degrees, include theta + 360 degrees k before dividing by n.",
        "The nth roots are evenly spaced around a circle. Each root has modulus the nth root of r. Their arguments differ by 360 degrees/n. This spacing helps you check whether you found all roots.",
        "Use k = 0, 1, 2, ..., n - 1 to list the n different roots. More k-values only repeat the same directions. If the problem asks for rectangular form, convert each root using r cos theta + i r sin theta after the polar roots are found."
      ],
      formula: "nth roots of r cis theta: r^(1/n) cis((theta + 360 degrees k)/n), k = 0,1,...,n−1",
      diagram: "complex-roots-circle",
      note: "The number of distinct nth roots is n, and they are equally spaced by 360 degrees/n.",
      check: {
        prompt: "How many fourth roots does a nonzero complex number have?",
        answer: "4",
        accept: ["4", "four", "4 roots", "four roots"],
        hint: "A nonzero complex number has n distinct nth roots."
      }
    }
  ],
  examples: [
    {
      title: "Convert from rectangular to polar form",
      problem: "Write z = -2 + 2sqrt(3)i in polar form using 0 degrees <= theta < 360 degrees.",
      steps: [
        "Identify the rectangular coordinates: a = -2 and b = 2sqrt(3). The point is (-2, 2sqrt(3)), which is in Quadrant II.",
        "Find the modulus: r = sqrt((-2)^2 + (2sqrt(3))^2) = sqrt(4 + 12) = sqrt(16) = 4.",
        "Find the reference angle. The ratio |b/a| is |2sqrt(3)/(-2)| = sqrt(3), so the reference angle is 60 degrees.",
        "Use the quadrant to choose the actual angle. Quadrant II with a 60 degree reference angle gives theta = 180 degrees - 60 degrees = 120 degrees.",
        "Write the polar form: z = 4(cos 120 degrees + i sin 120 degrees), or 4 cis 120 degrees.",
        "Check the signs: cos 120 degrees is negative and sin 120 degrees is positive, matching -2 + 2sqrt(3)i."
      ]
    },
    {
      title: "Multiply and divide in polar form",
      problem: "Let z1 = 6 cis 140 degrees and z2 = 3 cis 50 degrees. Find z1z2 and z1/z2.",
      steps: [
        "For the product, multiply the moduli: 6 * 3 = 18.",
        "For the product angle, add the arguments: 140 degrees + 50 degrees = 190 degrees.",
        "So z1z2 = 18 cis 190 degrees.",
        "For the quotient, divide the moduli: 6/3 = 2.",
        "For the quotient angle, subtract the arguments: 140 degrees - 50 degrees = 90 degrees.",
        "So z1/z2 = 2 cis 90 degrees.",
        "If rectangular form were requested, you would use r cos theta + i r sin theta after these polar operations."
      ]
    },
    {
      title: "Use powers and roots",
      problem: "Find (2 cis 45 degrees)^4, then find the cube roots of 8 cis 60 degrees.",
      steps: [
        "For the power, use De Moivre's Theorem. Raise the modulus to the fourth power: 2^4 = 16.",
        "Multiply the argument by 4: 4 * 45 degrees = 180 degrees.",
        "Therefore (2 cis 45 degrees)^4 = 16 cis 180 degrees, which is -16 in rectangular form.",
        "For the cube roots of 8 cis 60 degrees, take the cube root of the modulus: 8^(1/3) = 2.",
        "Use the root angle formula with k = 0, 1, 2: (60 degrees + 360 degrees k)/3.",
        "For k = 0, the angle is 20 degrees. For k = 1, the angle is 140 degrees. For k = 2, the angle is 260 degrees.",
        "The cube roots are 2 cis 20 degrees, 2 cis 140 degrees, and 2 cis 260 degrees. They are 120 degrees apart."
      ]
    }
  ],
  practice: [
    { q: "For z = 6 + 8i, find the modulus.", a: "10", accepted: ["10", "r=10", "|z|=10", "modulus 10"] },
    { q: "For z = -5 + 12i, find the modulus.", a: "13", accepted: ["13", "r=13", "|z|=13", "modulus 13"] },
    { q: "For z = 4 - 4i, which quadrant contains its point?", a: "Quadrant IV", accepted: ["quadrant iv", "qiv", "q4", "quadrant 4", "iv"] },
    { q: "For z = -3 - 3sqrt(3)i, which quadrant contains its point?", a: "Quadrant III", accepted: ["quadrant iii", "qiii", "q3", "quadrant 3", "iii"] },
    { q: "Convert z = 2 + 2i to polar form using degrees.", a: "2sqrt(2) cis 45 degrees", accepted: ["2sqrt(2) cis 45 degrees", "2√2 cis 45 degrees", "2sqrt(2)cis45", "2√2cis45", "2sqrt(2)(cos45+i sin45)", "2√2(cos 45 + i sin 45)"] },
    { q: "Convert z = -4 to polar form using 0 degrees <= theta < 360 degrees.", a: "4 cis 180 degrees", accepted: ["4 cis 180 degrees", "4cis180", "4 cis 180", "4(cos180+i sin180)", "4(cos 180 + i sin 180)"] },
    { q: "Convert z = -3i to polar form using 0 degrees <= theta < 360 degrees.", a: "3 cis 270 degrees", accepted: ["3 cis 270 degrees", "3cis270", "3 cis 270", "3(cos270+i sin270)", "3(cos 270 + i sin 270)"] },
    { q: "Convert 5 cis 0 degrees to rectangular form.", a: "5", accepted: ["5", "5+0i", "5 + 0i"] },
    { q: "Convert 6 cis 90 degrees to rectangular form.", a: "6i", accepted: ["6i", "0+6i", "0 + 6i"] },
    { q: "Convert 10 cis 180 degrees to rectangular form.", a: "-10", accepted: ["-10", "-10+0i", "-10 + 0i"] },
    { q: "Convert 8 cis 270 degrees to rectangular form.", a: "-8i", accepted: ["-8i", "0-8i", "0 - 8i"] },
    { q: "Convert 4 cis 60 degrees to rectangular form.", a: "2+2sqrt(3)i", accepted: ["2+2sqrt(3)i", "2 + 2sqrt(3)i", "2+2√3i", "2 + 2√3i"] },
    { q: "Find the product of 5 cis 20 degrees and 4 cis 70 degrees.", a: "20 cis 90 degrees", accepted: ["20 cis 90 degrees", "20cis90", "20 cis 90", "20(cos90+i sin90)", "20(cos 90 + i sin 90)"] },
    { q: "Find the product of 2 cis 150 degrees and 7 cis 30 degrees.", a: "14 cis 180 degrees", accepted: ["14 cis 180 degrees", "14cis180", "14 cis 180", "14(cos180+i sin180)", "14(cos 180 + i sin 180)"] },
    { q: "Find the quotient (12 cis 100 degrees)/(3 cis 25 degrees).", a: "4 cis 75 degrees", accepted: ["4 cis 75 degrees", "4cis75", "4 cis 75", "4(cos75+i sin75)", "4(cos 75 + i sin 75)"] },
    { q: "Find the quotient (10 cis 40 degrees)/(2 cis 100 degrees) using an angle from 0 degrees to 360 degrees.", a: "5 cis 300 degrees", accepted: ["5 cis 300 degrees", "5cis300", "5 cis 300", "5(cos300+i sin300)", "5(cos 300 + i sin 300)"] },
    { q: "Use De Moivre's Theorem to simplify (3 cis 20 degrees)^2.", a: "9 cis 40 degrees", accepted: ["9 cis 40 degrees", "9cis40", "9 cis 40", "9(cos40+i sin40)", "9(cos 40 + i sin 40)"] },
    { q: "Use De Moivre's Theorem to simplify (2 cis 75 degrees)^4.", a: "16 cis 300 degrees", accepted: ["16 cis 300 degrees", "16cis300", "16 cis 300", "16(cos300+i sin300)", "16(cos 300 + i sin 300)"] },
    { q: "Use De Moivre's Theorem to simplify (sqrt(2) cis 45 degrees)^2 in rectangular form.", a: "2i", accepted: ["2i", "0+2i", "0 + 2i"] },
    { q: "What is the modulus of (4 cis 35 degrees)^3?", a: "64", accepted: ["64", "r=64", "modulus 64"] },
    { q: "What is the argument of (4 cis 35 degrees)^3?", a: "105 degrees", accepted: ["105 degrees", "105", "theta=105", "argument 105 degrees"] },
    { q: "How many cube roots does a nonzero complex number have?", a: "3", accepted: ["3", "three", "3 roots", "three roots"] },
    { q: "How many fifth roots does a nonzero complex number have?", a: "5", accepted: ["5", "five", "5 roots", "five roots"] },
    { q: "Find the square roots of 9 cis 60 degrees in polar form.", a: "3 cis 30 degrees and 3 cis 210 degrees", accepted: ["3 cis 30 degrees and 3 cis 210 degrees", "3cis30 and 3cis210", "3 cis 30, 3 cis 210", "3(cos30+i sin30) and 3(cos210+i sin210)"] },
    { q: "Find the cube roots of 27 cis 0 degrees in polar form.", a: "3 cis 0 degrees, 3 cis 120 degrees, and 3 cis 240 degrees", accepted: ["3 cis 0 degrees, 3 cis 120 degrees, and 3 cis 240 degrees", "3cis0, 3cis120, 3cis240", "3 cis 0, 3 cis 120, 3 cis 240"] },
    { q: "For fourth roots, how many degrees apart are the root arguments?", a: "90 degrees", accepted: ["90 degrees", "90", "90°"] },
    { q: "For cube roots, how many degrees apart are the root arguments?", a: "120 degrees", accepted: ["120 degrees", "120", "120°"] },
    { q: "True or false: When multiplying complex numbers in polar form, add the arguments.", a: "true", accepted: ["true", "yes", "t"] },
    { q: "True or false: When dividing complex numbers in polar form, multiply the arguments.", a: "false", accepted: ["false", "no", "not true", "f"] },
    { q: "True or false: The modulus of a complex number can be negative.", a: "false", accepted: ["false", "no", "not true", "f"] }
  ]
};
