window.COURSE.lessons["arithmetic-sequences-series"] = {
  id: "arithmetic-sequences-series",
  title: "Arithmetic sequences and series",
  eyebrow: "Lesson 12 · Sequences and series",
  standard: "MA.912.AR.10.1 · MA.912.AR.10.3",
  standardText: "Write and solve mathematical and real-world problems involving arithmetic sequences, and recognize and apply the finite arithmetic-series sum formula.",
  objective: "Identify arithmetic change, write explicit and recursive rules, evaluate sigma notation, find finite sums, and interpret linear sequence models.",
  estimated: "45–55 min",
  sections: [
    {
      id: "common-difference",
      label: "01",
      title: "Look for equal changes",
      kicker: "The central idea",
      body: [
        "A sequence is an ordered list of numbers. Each number is a term: a1 is the first term, a2 is the second term, and an means the term in position n. An arithmetic sequence changes by the same amount every time you move from one term to the next.",
        "That constant amount is the common difference d. Find it by subtracting a term from the term after it: d = a(n+1) − an. For 11, 7, 3, −1, the differences are 7 − 11 = −4, 3 − 7 = −4, and −1 − 3 = −4. Because every difference is −4, the sequence is arithmetic. A negative d means the terms decrease."
      ],
      formula: "d = a(n+1) − an",
      diagram: "arithmetic-common-difference-number-line",
      note: "Subtract in the same order each time: later term minus earlier term. One matching pair is not enough; the difference must stay constant throughout the sequence.",
      check: {
        prompt: "Find the common difference of 18, 13, 8, 3, ...",
        answer: "-5",
        accept: ["-5", "−5", "d=-5", "d = -5", "d=−5"],
        hint: "Subtract the first term from the second: 13 − 18. Confirm with 8 − 13."
      }
    },
    {
      id: "explicit-rule",
      label: "02",
      title: "Jump directly to any term",
      kicker: "Explicit rules",
      body: [
        "An explicit rule gives an directly from its position n. Starting at a1, reaching the nth term takes n − 1 equal jumps. Each jump adds d, so the total change is (n − 1)d. This gives an = a1 + (n − 1)d.",
        "For 6, 10, 14, 18, ... the first term is 6 and d = 4. Substitute those values: an = 6 + 4(n − 1). Distribute 4 to get 6 + 4n − 4, then combine constants to get an = 4n + 2. Both forms are correct. To find a25, use n = 25: a25 = 6 + 24(4) = 102."
      ],
      formula: "an = a1 + (n − 1)d",
      diagram: "arithmetic-explicit-position-map",
      note: "Use n − 1 because the first term needs zero jumps, the second term needs one jump, and the nth term needs n − 1 jumps.",
      check: {
        prompt: "For an arithmetic sequence with a1 = 9 and d = 3, find a12.",
        answer: "42",
        accept: ["42", "a12=42", "a_12=42", "a(12)=42"],
        hint: "Use a12 = 9 + (12 − 1)(3). Multiply 11 by 3 before adding 9."
      }
    },
    {
      id: "recursive-rule",
      label: "03",
      title: "Build each term from the last",
      kicker: "Recursive rules",
      body: [
        "A recursive rule tells how to produce a term from the preceding term. It needs two parts: a starting value and a repeated instruction. For an arithmetic sequence, state a1 and then write an = a(n−1) + d for n at least 2.",
        "For 20, 14, 8, 2, ... the common difference is −6. The recursive rule is a1 = 20 and an = a(n−1) − 6 for n ≥ 2. To verify it, a2 = a1 − 6 = 20 − 6 = 14. Unlike an explicit rule, a recursive rule normally requires earlier terms before you can reach a distant term."
      ],
      formula: "a1 = starting term;   an = a(n−1) + d, n ≥ 2",
      diagram: "arithmetic-recursive-chain",
      note: "Do not omit the initial term. The instruction alone tells how to move but not where the sequence begins.",
      check: {
        prompt: "Complete the recursive rule for 5, 12, 19, 26, ...: a1 = 5 and an = a(n−1) + ___.",
        answer: "7",
        accept: ["7", "+7", "d=7", "d = 7"],
        hint: "Find the common difference: 12 − 5."
      }
    },
    {
      id: "finite-sums",
      label: "04",
      title: "Add a finite arithmetic series",
      kicker: "From sequence to series",
      body: [
        "A sequence lists terms; a series adds them. The finite sum Sn = a1 + a2 + ... + an contains n terms. In an arithmetic series, the first and last terms form a pair with sum a1 + an. The second and next-to-last terms have that same sum, and so on.",
        "This pairing leads to Sn = n(a1 + an)/2. It says to average the first and last terms, (a1 + an)/2, and multiply by the number of terms n. If the last term is not given, first calculate an with the explicit rule. Keep n as the term count, not as the last term's value."
      ],
      formula: "Sn = n(a1 + an)/2",
      diagram: "arithmetic-series-pairing",
      note: "Before using the sum formula, identify three separate quantities: the number of terms n, the first term a1, and the last term an.",
      check: {
        prompt: "Find the sum of the first 10 terms when a1 = 4 and a10 = 31.",
        answer: "175",
        accept: ["175", "s10=175", "S10=175", "S_10=175"],
        hint: "Compute S10 = 10(4 + 31)/2. Add inside the parentheses, multiply, then divide by 2."
      }
    },
    {
      id: "sigma-notation",
      label: "05",
      title: "Read sigma notation in order",
      kicker: "Compact sums",
      body: [
        "The capital Greek letter sigma, Σ, means add. In Σ from k = 1 to 5 of (3k + 2), k is the index, 1 is its starting value, 5 is its ending value, and 3k + 2 is the term rule. Substitute each integer value of k and add the results.",
        "The terms are 3(1) + 2 = 5, 3(2) + 2 = 8, 3(3) + 2 = 11, 3(4) + 2 = 14, and 3(5) + 2 = 17. Their sum is 55. Because the rule 3k + 2 is linear in k, these outputs form an arithmetic sequence with d = 3. The number of terms from k = m through k = p is p − m + 1."
      ],
      formula: "Σ from k=m to p of f(k) = f(m) + f(m+1) + ... + f(p)",
      diagram: "arithmetic-sigma-expansion",
      note: "The index letter is a placeholder. Replacing k with j does not change a sum if the limits and term rule are changed consistently.",
      check: {
        prompt: "Evaluate Σ from k = 1 to 4 of (2k + 1).",
        answer: "24",
        accept: ["24", "the sum is 24", "sum=24", "S=24"],
        hint: "Write the four terms: 3, 5, 7, and 9. Then add them."
      }
    },
    {
      id: "linear-applications",
      label: "06",
      title: "Model steady additive change",
      kicker: "Linear applications",
      body: [
        "Arithmetic sequences model quantities that change by a fixed amount during equal steps. The term number n acts like an input, a1 is the starting output at n = 1, and d is the constant rate of change. That makes an = a1 + (n − 1)d a linear function whose slope is d.",
        "Suppose a theater has 18 seats in row 1 and each later row has 3 more seats. The row counts form 18, 21, 24, ... . The model is an = 18 + 3(n − 1). For row 12, a12 = 18 + 3(11) = 51 seats. To find all seats in the first 12 rows, use S12 = 12(18 + 51)/2 = 414. Use a term when the question asks about one row; use a sum when it asks for a total across rows."
      ],
      formula: "one stage: an   |   accumulated total: Sn",
      diagram: "arithmetic-model-rows",
      note: "Check the starting index in context. If time zero is included, the model may be written with a0 instead of a1; define the index before substituting.",
      check: {
        prompt: "A runner completes 2 miles in week 1 and adds 0.5 mile each week. How many miles does the runner complete in week 7?",
        answer: "5",
        accept: ["5", "5 miles", "5 mi", "a7=5", "a_7=5"],
        hint: "Use a7 = 2 + (7 − 1)(0.5). There are six increases after week 1."
      }
    }
  ],
  examples: [
    {
      title: "Write both kinds of rule",
      problem: "For 31, 24, 17, 10, ... write an explicit rule and a recursive rule, then find a15.",
      steps: [
        "Find the common difference by subtracting consecutive terms: d = 24 − 31 = −7. Check: 17 − 24 = −7, so the change is constant.",
        "Use the explicit formula an = a1 + (n − 1)d. Substitute a1 = 31 and d = −7: an = 31 + (n − 1)(−7).",
        "Simplify the explicit rule: an = 31 − 7n + 7 = 38 − 7n. The unsimplified and simplified forms are equivalent.",
        "Write the recursive rule with its start: a1 = 31 and an = a(n−1) − 7 for n ≥ 2.",
        "Find the fifteenth term explicitly: a15 = 31 + (15 − 1)(−7) = 31 − 98 = −67."
      ]
    },
    {
      title: "Find a finite sum",
      problem: "Find the sum of the first 25 terms of 8, 13, 18, 23, ... .",
      steps: [
        "Identify the values needed for the formulas: a1 = 8, d = 5, and n = 25.",
        "The last term is not listed, so find it first: a25 = 8 + (25 − 1)(5).",
        "Compute the multiplication before adding: a25 = 8 + 24(5) = 8 + 120 = 128.",
        "Apply the arithmetic-series formula: S25 = 25(8 + 128)/2.",
        "Add the endpoints and divide by 2: (8 + 128)/2 = 68. This is the average term.",
        "Multiply the average by the 25 terms: S25 = 25(68) = 1700."
      ]
    },
    {
      title: "Model rows of tiles",
      problem: "A display has 14 tiles in row 1 and 4 more tiles in each new row. Find the tiles in row 20 and the total in rows 1 through 20.",
      steps: [
        "Translate the context: a1 = 14 because row 1 has 14 tiles, and d = 4 because each new row adds 4 tiles.",
        "Write the row model: an = 14 + 4(n − 1). The input n is the row number, and the output an is the number of tiles in that row.",
        "Find row 20: a20 = 14 + 4(20 − 1) = 14 + 4(19) = 90 tiles.",
        "The total asks for a series, not one term. Use S20 = 20(a1 + a20)/2.",
        "Substitute the endpoints: S20 = 20(14 + 90)/2 = 20(104)/2.",
        "Divide 104 by 2, then multiply: S20 = 20(52) = 1040 tiles in all 20 rows."
      ]
    }
  ],
  practice: [
    { q: "Find the common difference of 7, 12, 17, 22, ... .", a: "5", accepted: ["5", "+5", "d=5", "d = 5"] },
    { q: "Is 4, 9, 15, 22, ... arithmetic? Answer yes or no.", a: "no", accepted: ["no", "not arithmetic", "no, it is not arithmetic"] },
    { q: "For a1=−3 and d=6, find a9.", a: "45", accepted: ["45", "a9=45", "a_9=45", "a(9)=45"] },
    { q: "Write an explicit rule for 10, 14, 18, 22, ... .", a: "an=10+4(n-1)", accepted: ["an=10+4(n-1)", "a_n=10+4(n-1)", "10+4(n-1)", "an=4n+6", "a_n=4n+6", "4n+6"] },
    { q: "Write an explicit rule for 25, 20, 15, 10, ... .", a: "an=25-5(n-1)", accepted: ["an=25-5(n-1)", "a_n=25-5(n-1)", "25-5(n-1)", "an=30-5n", "a_n=30-5n", "30-5n", "-5n+30"] },
    { q: "For a1=8 and an=a(n−1)+3, find a5.", a: "20", accepted: ["20", "a5=20", "a_5=20"] },
    { q: "Complete the recursive rule for 40, 34, 28, ...: a1=40 and an=a(n−1)+___.", a: "-6", accepted: ["-6", "−6", "+(-6)", "d=-6", "d = -6"] },
    { q: "Find S12 when a1=5 and a12=38.", a: "258", accepted: ["258", "s12=258", "S12=258", "S_12=258"] },
    { q: "Find the sum of the first 20 positive even integers: 2+4+6+...+40.", a: "420", accepted: ["420", "s20=420", "S20=420", "the sum is 420"] },
    { q: "Evaluate Σ from k=1 to 5 of (4k).", a: "60", accepted: ["60", "sum=60", "S=60", "the sum is 60"] },
    { q: "Evaluate Σ from j=3 to 6 of (2j−1).", a: "36", accepted: ["36", "sum=36", "S=36", "the sum is 36"] },
    { q: "How many terms are in Σ from k=4 to 18?", a: "15", accepted: ["15", "15 terms", "n=15", "n = 15"] },
    { q: "A theater has 22 seats in row 1 and 2 more seats in each later row. How many seats are in row 16?", a: "52", accepted: ["52", "52 seats", "a16=52", "a_16=52"] },
    { q: "For the theater with 22 seats in row 1 and 2 more per row, how many seats are in the first 16 rows?", a: "592", accepted: ["592", "592 seats", "s16=592", "S16=592", "S_16=592"] },
    { q: "An arithmetic sequence has a4=19 and d=5. Find a1.", a: "4", accepted: ["4", "a1=4", "a_1=4"] },
    { q: "Which quantity gives one term at position n: an or Sn?", a: "an", accepted: ["an", "a_n", "a(n)", "the nth term", "term an"] },
    { q: "The rule an=72−4(n−1) models water in a tank after n equal drains. What is the constant change per drain?", a: "-4", accepted: ["-4", "−4", "-4 units", "decreases by 4", "a decrease of 4", "d=-4"] },
    { q: "An arithmetic series has 30 terms with first term 11 and last term 98. Find its sum.", a: "1635", accepted: ["1635", "s30=1635", "S30=1635", "the sum is 1635"] }
  ]
};
