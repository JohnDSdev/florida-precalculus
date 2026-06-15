window.COURSE.lessons["geometric-sequences-series"] = {
  id: "geometric-sequences-series",
  title: "Geometric sequences and series",
  eyebrow: "Lesson 13 · Sequences and series",
  standard: "MA.912.AR.10.2 · MA.912.AR.10.4",
  standardText: "Write and solve mathematical and real-world problems involving geometric sequences, and recognize and apply the geometric-series sum formula. This lesson focuses on finite sums.",
  objective: "Identify multiplicative change, write explicit and recursive geometric rules, find finite geometric sums, model exponential situations, and compare arithmetic with geometric change.",
  estimated: "45–55 min",
  sections: [
    {
      id: "common-ratio",
      label: "01",
      title: "Look for equal factors",
      kicker: "The central idea",
      body: [
        "A geometric sequence is an ordered list in which each term after the first is made by multiplying the preceding term by the same nonzero number. That constant multiplier is the common ratio r. To find it, divide a term by the term immediately before it: r = a(n+1)/an. Division is the right test because geometric change is multiplicative, not additive.",
        "For 5, 15, 45, 135, ... the ratios are 15/5 = 3, 45/15 = 3, and 135/45 = 3, so r = 3. A ratio between 0 and 1 makes positive terms shrink, and a negative ratio makes signs alternate. For 24, -12, 6, -3, ... each ratio is -1/2. Check more than one pair before deciding that a sequence is geometric."
      ],
      formula: "r = a(n+1)/an",
      diagram: "geometric-common-ratio-multiplication-chain",
      note: "Use later term divided by earlier term in the same order every time. A common ratio of 1 gives a constant sequence.",
      check: {
        prompt: "Find the common ratio of 81, 27, 9, 3, ... .",
        answer: "1/3",
        accept: ["1/3", "0.3333333333", "r=1/3", "r = 1/3", "one third"],
        hint: "Divide the second term by the first: 27/81. Reduce the fraction, then confirm with 9/27."
      }
    },
    {
      id: "explicit-rule",
      label: "02",
      title: "Jump directly to any term",
      kicker: "Explicit rules",
      body: [
        "An explicit rule finds a term directly from its position n. The first term is a1. Moving from a1 to a2 uses one multiplication by r, moving to a3 uses two multiplications, and moving to an uses n - 1 multiplications. That is why the rule is an = a1*r^(n-1), not a1*r^n.",
        "For 7, 14, 28, 56, ... the first term is 7 and r = 2, so an = 7*2^(n-1). To find a8, substitute n = 8: a8 = 7*2^7 = 7*128 = 896. Keep the exponent grouped as n - 1. On a calculator, enter 7*(2^(8-1)); degree or radian mode does not affect powers."
      ],
      formula: "an = a1*r^(n-1)",
      diagram: "geometric-explicit-exponent-position-map",
      note: "The exponent counts multiplications after the first term. At n = 1, the exponent is 0, so the rule returns a1 because r^0 = 1.",
      check: {
        prompt: "For a geometric sequence with a1 = 6 and r = 3, find a6.",
        answer: "1458",
        accept: ["1458", "a6=1458", "a_6=1458", "a(6)=1458", "6*3^5", "6(3^5)"],
        hint: "Use a6 = 6*3^(6-1). Evaluate the exponent before multiplying by 6."
      }
    },
    {
      id: "recursive-rule",
      label: "03",
      title: "Build each term from the last",
      kicker: "Recursive rules",
      body: [
        "A recursive rule gives a starting term and tells how to get each new term from the preceding one. A geometric recursive rule has both parts: a1 = starting value and an = r*a(n-1) for n >= 2. The expression a(n-1) means the term one position before an; it does not mean a times n - 1.",
        "For 160, 80, 40, 20, ... the ratio is 1/2. The recursive rule is a1 = 160 and an = (1/2)*a(n-1) for n >= 2. It works because a2 = (1/2)(160) = 80. An explicit rule is faster for a distant term, while a recursive rule clearly displays the repeated process."
      ],
      formula: "a1 = starting term;   an = r*a(n-1), n >= 2",
      diagram: "geometric-recursive-ratio-chain",
      note: "Always include the initial term. Multiplying by r tells how to move, but the sequence cannot begin without a starting value.",
      check: {
        prompt: "Complete the recursive rule for 4, -12, 36, -108, ...: a1 = 4 and an = ___*a(n-1).",
        answer: "-3",
        accept: ["-3", "−3", "(-3)", "r=-3", "r = -3"],
        hint: "Divide -12 by 4. Confirm that 36/(-12) gives the same ratio."
      }
    },
    {
      id: "finite-sums",
      label: "04",
      title: "Add a finite geometric series",
      kicker: "From sequence to series",
      body: [
        "A sequence lists terms; a series adds them. The finite geometric sum Sn = a1 + a1*r + a1*r^2 + ... + a1*r^(n-1) contains exactly n terms. When r is not 1, its sum is Sn = a1(1 - r^n)/(1 - r). The form a1(r^n - 1)/(r - 1) is equivalent because both numerator and denominator have been multiplied by -1.",
        "To use the formula, identify a1, r, and the number of terms n separately. For 3 + 6 + 12 + 24 + 48, a1 = 3, r = 2, and n = 5. Then S5 = 3(1 - 2^5)/(1 - 2) = 3(-31)/(-1) = 93. If r = 1, every term equals a1, so use Sn = n*a1 instead of dividing by zero."
      ],
      formula: "Sn = a1(1 - r^n)/(1 - r), r != 1",
      diagram: "geometric-finite-sum-cancellation",
      note: "The exponent in the nth term is n - 1, but the sum formula contains r^n. Keep those two formulas distinct.",
      check: {
        prompt: "Find the sum 2 + 6 + 18 + 54.",
        answer: "80",
        accept: ["80", "s4=80", "S4=80", "S_4=80", "the sum is 80"],
        hint: "Here a1 = 2, r = 3, and n = 4. Substitute into S4 = 2(1 - 3^4)/(1 - 3)."
      }
    },
    {
      id: "exponential-applications",
      label: "05",
      title: "Model repeated percent change",
      kicker: "Exponential applications",
      body: [
        "Geometric sequences model quantities multiplied by the same factor during equal time intervals. Growth by p percent uses r = 1 + p written as a decimal. Decay by p percent uses r = 1 - p. For 8% growth, r = 1.08; for 8% decay, r = 0.92. A statement such as 'doubles each hour' gives r = 2 directly.",
        "Suppose a culture has 500 cells at hour 0 and grows by 20% each hour. Because the starting value occurs at n = 0, write A(n) = 500(1.20)^n. After 6 hours, A(6) = 500(1.20)^6 = 1492.992, or about 1493 cells. Keep the calculator value unrounded until the final step. Standard calculator mode is fine; angle mode is irrelevant. State an exact expression when no rounding direction is given."
      ],
      formula: "growth factor = 1 + p;   decay factor = 1 - p",
      diagram: "geometric-percent-factor-timeline",
      note: "Check whether the context begins at time 0 or at term 1. The exponent counts how many multiplication intervals have occurred.",
      check: {
        prompt: "A value decreases by 15% each month. What common ratio models the monthly change?",
        answer: "0.85",
        accept: ["0.85", ".85", "85%", "85 percent", "r=0.85", "r = 0.85", "17/20"],
        hint: "A 15% decrease keeps 100% - 15% = 85% of the previous value. Write 85% as a decimal."
      }
    },
    {
      id: "compare-change",
      label: "06",
      title: "Separate additive and multiplicative change",
      kicker: "Arithmetic or geometric?",
      body: [
        "Arithmetic sequences add the same difference d during each equal step, so their values change linearly. Geometric sequences multiply by the same ratio r, so their values change exponentially. In a table, subtract consecutive outputs to test for arithmetic change and divide consecutive nonzero outputs to test for geometric change. Use the test that remains constant across the whole pattern.",
        "Compare A(n) = 100 + 20(n - 1) with G(n) = 100(1.20)^(n-1). Both start at 100. A adds 20 each step, giving 100, 120, 140, 160, ... . G increases by 20% of its current value, giving 100, 120, 144, 172.8, ... . The second changes by larger absolute amounts as its base grows. A percent change is multiplicative; it is not the same as adding the starting percent amount forever."
      ],
      formula: "arithmetic: constant difference   |   geometric: constant ratio",
      diagram: "geometric-arithmetic-versus-geometric-table",
      note: "A pattern can have the same first two terms under both models. Use at least three terms, or read the wording carefully, to determine how later terms are produced.",
      check: {
        prompt: "The values are 50, 60, 72, 86.4, ... . Is the change arithmetic or geometric?",
        answer: "geometric",
        accept: ["geometric", "geometric sequence", "multiplicative", "constant ratio", "geometric with r=1.2", "r=1.2"],
        hint: "The differences are not constant. Divide 60/50, 72/60, and 86.4/72."
      }
    }
  ],
  examples: [
    {
      title: "Write both geometric rules",
      problem: "For 96, -48, 24, -12, ... write an explicit rule and a recursive rule, then find a7.",
      steps: [
        "Find the common ratio by dividing consecutive terms: r = -48/96 = -1/2. Check another pair: 24/(-48) = -1/2, so the ratio is constant.",
        "Use the explicit form an = a1*r^(n-1). Substitute a1 = 96 and r = -1/2: an = 96(-1/2)^(n-1).",
        "Write the recursive rule with both required parts: a1 = 96 and an = (-1/2)*a(n-1) for n >= 2.",
        "For the seventh term, substitute n = 7 into the explicit rule: a7 = 96(-1/2)^(7-1) = 96(-1/2)^6.",
        "The even power makes the result positive: (-1/2)^6 = 1/64. Therefore a7 = 96/64 = 3/2."
      ]
    },
    {
      title: "Find a finite geometric sum",
      problem: "Find the sum of the first 8 terms of 5, 10, 20, 40, ... .",
      steps: [
        "Identify the three values needed for the finite-sum formula: a1 = 5, r = 10/5 = 2, and n = 8 terms.",
        "Use Sn = a1(1 - r^n)/(1 - r) because r is not 1.",
        "Substitute without rounding: S8 = 5(1 - 2^8)/(1 - 2).",
        "Evaluate the power first: 2^8 = 256, so S8 = 5(1 - 256)/(-1).",
        "Simplify the signs: S8 = 5(-255)/(-1) = 5(255).",
        "Multiply to obtain the exact sum: S8 = 1275."
      ]
    },
    {
      title: "Model growth and compare changes",
      problem: "A video has 200 views at the end of day 1. Model 25% daily growth, find day 6, and compare it with adding 50 views each day.",
      steps: [
        "Convert 25% growth to a multiplier: r = 1 + 0.25 = 1.25. Day 1 is the first term, so a1 = 200.",
        "Write the geometric model: Gn = 200(1.25)^(n-1). The exponent is n - 1 because no growth interval occurs before day 1.",
        "Find day 6: G6 = 200(1.25)^5 = 610.3515625. For whole views, round once at the end to about 610 views.",
        "The additive comparison is arithmetic: An = 200 + 50(n - 1), because 25% of the original 200 is 50 and that plan adds the same 50 each day.",
        "Find its day 6 value: A6 = 200 + 50(5) = 450 views.",
        "The models agree on days 1 and 2, but then differ: geometric growth takes 25% of the changing current amount, so by day 6 it predicts about 610 views instead of 450."
      ]
    }
  ],
  practice: [
    { q: "Find the common ratio of 6, 18, 54, 162, ... .", a: "3", accepted: ["3", "+3", "r=3", "r = 3"] },
    { q: "Find the common ratio of 40, -20, 10, -5, ... .", a: "-1/2", accepted: ["-1/2", "−1/2", "-0.5", "-.5", "r=-1/2", "r = -1/2"] },
    { q: "Is 3, 6, 12, 25, ... geometric? Answer yes or no.", a: "no", accepted: ["no", "not geometric", "no, it is not geometric"] },
    { q: "For a1=4 and r=5, find a5.", a: "2500", accepted: ["2500", "a5=2500", "a_5=2500", "4*5^4", "4(5^4)"] },
    { q: "For a1=243 and r=1/3, find a6.", a: "1", accepted: ["1", "a6=1", "a_6=1", "243*(1/3)^5", "243(1/3)^5"] },
    { q: "Write an explicit rule for 2, 8, 32, 128, ... .", a: "an=2*4^(n-1)", accepted: ["an=2*4^(n-1)", "a_n=2*4^(n-1)", "2*4^(n-1)", "2(4)^(n-1)", "2(4^(n-1))", "an=2(4)^(n-1)"] },
    { q: "Write an explicit rule for 100, 50, 25, 12.5, ... .", a: "an=100*(1/2)^(n-1)", accepted: ["an=100*(1/2)^(n-1)", "a_n=100*(1/2)^(n-1)", "100*(1/2)^(n-1)", "100(1/2)^(n-1)", "an=100*(0.5)^(n-1)", "100(.5)^(n-1)"] },
    { q: "Complete the recursive rule for 7, 21, 63, ...: a1=7 and an=___*a(n-1).", a: "3", accepted: ["3", "+3", "r=3", "r = 3"] },
    { q: "For a1=128 and an=(1/2)*a(n-1), find a5.", a: "8", accepted: ["8", "a5=8", "a_5=8"] },
    { q: "Find the sum 4 + 12 + 36 + 108.", a: "160", accepted: ["160", "s4=160", "S4=160", "S_4=160", "the sum is 160"] },
    { q: "Find S6 for a geometric series with a1=3 and r=2.", a: "189", accepted: ["189", "s6=189", "S6=189", "S_6=189", "3*(1-2^6)/(1-2)"] },
    { q: "Find the sum of the first 5 terms of 81, 27, 9, 3, ... .", a: "121", accepted: ["121", "s5=121", "S5=121", "S_5=121", "the sum is 121"] },
    { q: "Find the sum of the first 4 terms when a1=10 and r=-2.", a: "-50", accepted: ["-50", "−50", "s4=-50", "S4=-50", "S_4=-50", "10-20+40-80"] },
    { q: "A geometric series has a1=7, r=1, and 12 terms. Find its sum.", a: "84", accepted: ["84", "s12=84", "S12=84", "12*7", "7*12"] },
    { q: "A population grows by 6% per year. What is the yearly common ratio?", a: "1.06", accepted: ["1.06", "106%", "106 percent", "r=1.06", "r = 1.06", "53/50"] },
    { q: "A machine loses 12% of its value each year. What is the yearly common ratio?", a: "0.88", accepted: ["0.88", ".88", "88%", "88 percent", "r=0.88", "r = 0.88", "22/25"] },
    { q: "A colony starts with 300 cells at time 0 and doubles each hour. How many cells are present after 5 hours?", a: "9600", accepted: ["9600", "9600 cells", "300*2^5", "300(2^5)"] },
    { q: "An account contains $800 at time 0 and grows by 5% once per year. Give the exact balance after 4 years.", a: "800(1.05)^4", accepted: ["800(1.05)^4", "800*1.05^4", "800*(1.05)^4", "$800(1.05)^4", "800*(21/20)^4", "972.405", "$972.405"] },
    { q: "The values 14, 19, 24, 29, ... show arithmetic or geometric change?", a: "arithmetic", accepted: ["arithmetic", "arithmetic sequence", "additive", "constant difference", "d=5", "arithmetic with d=5"] },
    { q: "The values 14, 21, 31.5, 47.25, ... show arithmetic or geometric change?", a: "geometric", accepted: ["geometric", "geometric sequence", "multiplicative", "constant ratio", "r=1.5", "geometric with r=1.5"] }
  ]
};
