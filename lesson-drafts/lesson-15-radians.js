window.COURSE.lessons["angles-radian-measure"] = {
  id: "angles-radian-measure",
  title: "Angles and radian measure",
  eyebrow: "Lesson 15 · Trigonometry",
  standard: "MA.912.T.2.1 · MA.912.GR.6.4",
  standardText: "Identify coterminal angle measures between 0° and 360° or between 0 and 2π, convert between degrees and radians, and solve mathematical and real-world problems involving arc length.",
  objective: "Draw and interpret angles in standard position, convert between degrees and radians, find coterminal angles, and solve problems involving arc length, angular speed, and linear speed.",
  estimated: "50–60 min",
  sections: [
    {
      id: "standard-position",
      label: "01",
      title: "Place an angle in standard position",
      kicker: "Start from the positive x-axis",
      body: [
        "An angle is in standard position when its vertex is at the origin and its initial side lies on the positive x-axis. The ray that moves is the terminal side. The amount and direction of rotation determine the angle, not only the terminal side's final location.",
        "Counterclockwise rotation is positive, and clockwise rotation is negative. A 120° angle rotates counterclockwise into Quadrant II. A −60° angle rotates clockwise into Quadrant IV. An angle on an axis is called a quadrantal angle; it is not in a quadrant. Sketch the initial side first, follow the sign of the rotation, and then draw the terminal side. Calculator mode is not needed to identify the direction or quadrant."
      ],
      formula: "positive angle: counterclockwise;   negative angle: clockwise",
      diagram: "radian-standard-position-rotation",
      note: "The same terminal side can be reached after different numbers of complete turns, so a terminal side does not identify one unique angle measure.",
      check: {
        prompt: "In which quadrant does the terminal side of −135° lie?",
        answer: "Quadrant III",
        accept: ["Quadrant III", "quadrant 3", "QIII", "Q3", "III", "3", "third quadrant", "the third quadrant"],
        hint: "Rotate 135° clockwise from the positive x-axis. That passes the negative y-axis and ends between 180° and 270° in the positive-angle direction."
      }
    },
    {
      id: "radian-meaning",
      label: "02",
      title: "Measure rotation in radians",
      kicker: "Connect the angle to an arc",
      body: [
        "A radian measures an angle by comparing an intercepted arc length s with the circle's radius r. One radian is the central angle that intercepts an arc exactly as long as the radius. Because angle measure is the ratio s/r, a radian is a pure number even though we write the unit rad for clarity.",
        "A full circle has circumference 2πr. Dividing that arc length by r gives 2π radians for one full turn. Therefore π radians is a half turn, π/2 is a quarter turn, and 1 radian is about 57.3°. Degree mode and radian mode matter when a calculator evaluates trigonometric functions, but they do not change exact arithmetic such as simplifying 3π/4."
      ],
      formula: "θ = s/r;   360° = 2π radians;   180° = π radians",
      diagram: "radian-one-radius-arc",
      note: "In θ = s/r and s = rθ, θ must be measured in radians. A degree measure cannot be substituted directly into these formulas.",
      check: {
        prompt: "A central angle intercepts an arc of length 12 cm in a circle of radius 8 cm. Find the angle in radians.",
        answer: "3/2 radians",
        accept: ["3/2", "3/2 radians", "3/2 rad", "1.5", "1.5 radians", "1.5 rad", "θ=3/2", "theta=3/2"],
        hint: "Use θ = s/r = 12/8, then simplify the fraction."
      }
    },
    {
      id: "degree-radian-conversion",
      label: "03",
      title: "Convert degrees and radians",
      kicker: "Use 180° = π radians",
      body: [
        "To convert degrees to radians, multiply by π radians/180°. The degree units cancel. Then reduce the numerical fraction. For example, 150°(π/180°) = 150π/180 = 5π/6 radians. Keep π in an exact answer unless a decimal is requested.",
        "To convert radians to degrees, multiply by 180°/π radians. The radian units and π cancel when possible. For example, (7π/4)(180°/π) = 7(45°) = 315°. You do not need a calculator for exact multiples of π. If a decimal conversion is requested, ordinary arithmetic gives the same conversion in either angle mode; set DEG mode before using degree input with sin, cos, or tan, and RAD mode before using radian input."
      ],
      formula: "degrees × π/180 = radians;   radians × 180/π = degrees",
      diagram: "radian-degree-conversion-bridge",
      note: "Choose the conversion factor whose old unit cancels. If degrees should disappear, place degrees in the denominator.",
      check: {
        prompt: "Convert −225° to exact radian measure.",
        answer: "−5π/4",
        accept: ["-5π/4", "−5π/4", "-5pi/4", "−5pi/4", "(-5π)/4", "-5π/4 radians", "-5pi/4 radians", "θ=-5π/4"],
        hint: "Multiply −225 by π/180, divide 225 and 180 by 45, and keep the negative sign."
      }
    },
    {
      id: "coterminal-angles",
      label: "04",
      title: "Find coterminal angles",
      kicker: "Add or subtract complete turns",
      body: [
        "Coterminal angles begin in standard position and end on the same terminal side. One complete turn is 360° or 2π radians, so adding or subtracting any whole number of turns creates a coterminal angle. In degrees, use θ + 360k. In radians, use θ + 2πk, where k is any integer.",
        "To find the representative in the standard interval, repeatedly add or subtract full turns. For −500°, add 360° twice: −500° + 360° = −140°, then −140° + 360° = 220°. Thus 220° is the coterminal angle between 0° inclusive and 360° exclusive. For 17π/6, subtract 2π = 12π/6 to get 5π/6, which lies from 0 inclusive to 2π exclusive. Calculator angle mode is not involved because this is addition and subtraction, not trig-function evaluation."
      ],
      formula: "degrees: θ + 360k;   radians: θ + 2πk;   k is any integer",
      diagram: "radian-coterminal-full-turns",
      note: "Use the same unit throughout. Do not add 360 to a radian measure or 2π to a degree measure.",
      check: {
        prompt: "Find the angle coterminal with −7π/3 that lies from 0 inclusive to 2π exclusive.",
        answer: "5π/3",
        accept: ["5π/3", "5pi/3", "(5π)/3", "5π/3 radians", "5pi/3 radians", "θ=5π/3", "theta=5pi/3"],
        hint: "Add 2π = 6π/3 until the result is at least 0 and less than 2π."
      }
    },
    {
      id: "arc-length",
      label: "05",
      title: "Find an arc length",
      kicker: "Multiply radius by radian measure",
      body: [
        "The radian definition θ = s/r can be rearranged to s = rθ. Here s is arc length, r is radius, and θ is the central angle in radians. The units of s match the units of r. For r = 10 cm and θ = 3π/5, s = 10(3π/5) = 6π cm.",
        "If the angle is given in degrees, convert it to radians first. For a 60° angle in a circle of radius 9 m, θ = 60(π/180) = π/3, so s = 9(π/3) = 3π m. An equivalent degree formula is s = (θ/360)2πr, but converting to radians prepares you for angular and linear speed. No calculator angle mode is needed for s = rθ; if you use a trig function elsewhere in the problem, match the mode to that angle's unit."
      ],
      formula: "s = rθ,   where θ is in radians",
      diagram: "radian-arc-length-radius-angle",
      note: "Arc length is a distance, so include a linear unit such as centimeters, meters, or miles, not square units.",
      check: {
        prompt: "Find the exact arc length in a circle of radius 15 ft cut by a central angle of 72°.",
        answer: "6π ft",
        accept: ["6π", "6pi", "6π ft", "6pi ft", "6π feet", "6 pi feet", "s=6π", "s = 6pi", "about 18.85 ft", "18.85 ft"],
        hint: "Convert 72° to radians: 72π/180 = 2π/5. Then use s = 15(2π/5)."
      }
    },
    {
      id: "angular-linear-speed",
      label: "06",
      title: "Connect angular and linear speed",
      kicker: "Rotation rate and distance rate",
      body: [
        "Angular speed tells how quickly an angle changes: ω = θ/t. Use radians per unit of time. If a wheel turns through 12π radians in 3 seconds, ω = 12π/3 = 4π rad/s. When a rate is given in revolutions, first multiply by 2π radians per revolution. For example, 90 revolutions per minute equals 90(2π) = 180π rad/min.",
        "Linear speed tells how quickly a point travels along the circular path: v = s/t. Since s = rθ, divide by time to get v = r(θ/t) = rω. A point farther from the center has greater linear speed even though every point on a rigid wheel has the same angular speed. Use consistent time units. These formulas use radian measure directly and do not require DEG or RAD calculator mode; mode matters only if you evaluate a trig function."
      ],
      formula: "ω = θ/t;   v = s/t = rω",
      diagram: "radian-angular-linear-speed-wheel",
      note: "Angular speed has units such as rad/s. Linear speed has distance units such as cm/s. Radius must use the same distance unit wanted in the linear-speed answer.",
      check: {
        prompt: "A point is 0.4 m from the center of a wheel rotating at 5 rad/s. Find its linear speed.",
        answer: "2 m/s",
        accept: ["2", "2 m/s", "2 meters per second", "2 metres per second", "v=2", "v = 2 m/s", "2.0 m/s"],
        hint: "Use v = rω = 0.4(5), and keep meters per second as the unit."
      }
    }
  ],
  examples: [
    {
      title: "Convert and locate an angle",
      problem: "Convert 765° to radians and find its coterminal angle between 0 and 2π.",
      steps: [
        "Convert degrees to radians by multiplying by π/180: 765°(π/180°) = 765π/180.",
        "Reduce the fraction by 45: 765/45 = 17 and 180/45 = 4, so the angle is 17π/4 radians.",
        "A complete turn is 2π = 8π/4. Subtract one turn: 17π/4 − 8π/4 = 9π/4, which is still greater than 2π.",
        "Subtract another turn: 9π/4 − 8π/4 = π/4.",
        "The coterminal representative is π/4, which is between 0 and 2π and has its terminal side in Quadrant I.",
        "No calculator is needed. If checking a trig value such as cos(π/4), use RAD mode because the input is in radians."
      ]
    },
    {
      title: "Find arc length from degrees",
      problem: "A circular track has radius 24 m. Find the exact length of the arc cut by a 135° central angle.",
      steps: [
        "The arc-length formula s = rθ requires θ in radians, so convert 135° first.",
        "Multiply by π/180: θ = 135(π/180) = 3π/4 radians after dividing numerator and denominator by 45.",
        "Identify the radius: r = 24 m.",
        "Substitute into s = rθ: s = 24(3π/4).",
        "Divide 24 by 4 before multiplying: s = 6(3π) = 18π.",
        "The exact arc length is 18π m, approximately 56.55 m. Calculator angle mode does not affect this multiplication."
      ]
    },
    {
      title: "Find angular and linear speed",
      problem: "A bicycle wheel has radius 0.35 m and turns 120 revolutions in 40 seconds. Find its angular speed and the linear speed of a point on the rim.",
      steps: [
        "Convert revolutions to radians: 120 revolutions(2π radians/revolution) = 240π radians.",
        "Use ω = θ/t: ω = 240π/40 = 6π rad/s.",
        "The point is on the rim, so its distance from the center is the wheel radius r = 0.35 m.",
        "Use v = rω: v = 0.35(6π).",
        "Multiply: v = 2.1π m/s, which is approximately 6.60 m/s.",
        "The answers are ω = 6π rad/s and v = 2.1π m/s. No angle mode is needed because no trig function is being evaluated."
      ]
    }
  ],
  practice: [
    { q: "In standard position, where is the initial side of every angle?", a: "positive x-axis", accepted: ["positive x-axis", "the positive x-axis", "+x-axis", "+x axis", "positive x axis", "right side of the x-axis"] },
    { q: "Is a positive angle measured clockwise or counterclockwise?", a: "counterclockwise", accepted: ["counterclockwise", "counter-clockwise", "anticlockwise", "anti-clockwise", "CCW", "ccw"] },
    { q: "In which quadrant does the terminal side of 210° lie?", a: "Quadrant III", accepted: ["Quadrant III", "quadrant 3", "QIII", "Q3", "III", "3", "third quadrant", "the third quadrant"] },
    { q: "Is 270° a quadrantal angle? Answer yes or no.", a: "yes", accepted: ["yes", "yes, it is", "y", "it is", "quadrantal", "yes because it lies on an axis"] },
    { q: "One complete counterclockwise turn equals how many radians?", a: "2π radians", accepted: ["2π", "2pi", "2π radians", "2pi radians", "2π rad", "6.283185307", "about 6.283"] },
    { q: "An arc is 18 cm long in a circle of radius 6 cm. Find its central angle in radians.", a: "3 radians", accepted: ["3", "3 radians", "3 rad", "θ=3", "theta=3"] },
    { q: "Convert 30° to exact radian measure.", a: "π/6", accepted: ["π/6", "pi/6", "(π)/6", "π/6 radians", "pi/6 rad", "θ=π/6"] },
    { q: "Convert 240° to exact radian measure.", a: "4π/3", accepted: ["4π/3", "4pi/3", "(4π)/3", "4π/3 radians", "4pi/3 rad", "θ=4π/3"] },
    { q: "Convert −90° to exact radian measure.", a: "−π/2", accepted: ["-π/2", "−π/2", "-pi/2", "−pi/2", "(-π)/2", "-π/2 radians", "θ=-π/2"] },
    { q: "Convert 5π/6 radians to degrees.", a: "150°", accepted: ["150", "150°", "150 degrees", "150 deg", "θ=150°", "theta=150"] },
    { q: "Convert −7π/4 radians to degrees.", a: "−315°", accepted: ["-315", "−315", "-315°", "−315°", "-315 degrees", "negative 315 degrees", "θ=-315°"] },
    { q: "Find a positive angle less than 360° coterminal with 460°.", a: "100°", accepted: ["100", "100°", "100 degrees", "100 deg", "θ=100°"] },
    { q: "Find the angle from 0 inclusive to 360° exclusive coterminal with −810°.", a: "270°", accepted: ["270", "270°", "270 degrees", "270 deg", "θ=270°"] },
    { q: "Find the angle from 0 inclusive to 2π exclusive coterminal with 13π/4.", a: "5π/4", accepted: ["5π/4", "5pi/4", "(5π)/4", "5π/4 radians", "5pi/4 rad", "θ=5π/4"] },
    { q: "Find the angle from 0 inclusive to 2π exclusive coterminal with −11π/6.", a: "π/6", accepted: ["π/6", "pi/6", "(π)/6", "π/6 radians", "pi/6 rad", "θ=π/6"] },
    { q: "Write a formula for every angle coterminal with 45°, using integer k.", a: "45°+360°k", accepted: ["45+360k", "45°+360°k", "45 + 360k", "45 degrees + 360k", "θ=45+360k", "45+360n", "45° + k(360°)"] },
    { q: "Find the exact arc length for r=8 cm and θ=3π/4 radians.", a: "6π cm", accepted: ["6π", "6pi", "6π cm", "6pi cm", "6π centimeters", "s=6π", "about 18.85 cm", "18.85 cm"] },
    { q: "Find the exact arc length for r=12 m and a central angle of 150°.", a: "10π m", accepted: ["10π", "10pi", "10π m", "10pi m", "10π meters", "s=10π", "about 31.42 m", "31.42 m"] },
    { q: "An arc has length 14 ft and central angle 2 radians. Find the radius.", a: "7 ft", accepted: ["7", "7 ft", "7 feet", "r=7", "r = 7 ft", "7.0 ft"] },
    { q: "A wheel turns through 20π radians in 5 seconds. Find its angular speed.", a: "4π rad/s", accepted: ["4π", "4pi", "4π rad/s", "4pi rad/s", "4π radians per second", "ω=4π", "about 12.57 rad/s", "12.57 rad/s"] },
    { q: "Convert 75 revolutions per minute to radians per minute.", a: "150π rad/min", accepted: ["150π", "150pi", "150π rad/min", "150pi rad/min", "150π radians per minute", "ω=150π", "about 471.24 rad/min"] },
    { q: "A point 3 cm from the center rotates at 8 rad/s. Find its linear speed.", a: "24 cm/s", accepted: ["24", "24 cm/s", "24 centimeters per second", "v=24", "v = 24 cm/s", "24.0 cm/s"] },
    { q: "Two points on the same rigid wheel are 2 cm and 5 cm from the center. Which point has greater angular speed?", a: "same angular speed", accepted: ["same", "the same", "same angular speed", "equal angular speed", "neither", "they are equal", "both have the same angular speed"] },
    { q: "Two points on the same rigid wheel are 2 cm and 5 cm from the center. Which point has greater linear speed?", a: "the point 5 cm from the center", accepted: ["5 cm", "the 5 cm point", "the point 5 cm from the center", "farther point", "the farther point", "outer point", "the point farther from the center"] }
  ]
};
