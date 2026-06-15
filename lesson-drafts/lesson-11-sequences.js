window.COURSE.lessons["sequences-recursive-rules"] = {
  id: "sequences-recursive-rules",
  title: "Sequences and recursive rules",
  eyebrow: "Lesson 11 · Sequences and series",
  standard: "MA.912.AR.10.5 · MA.912.AR.10.6",
  standardText: "Write sequences in function notation using explicit or recursive rules to model relationships, and determine the domain of a sequence defined either way.",
  objective: "Read sequence notation, find terms from explicit and recursive rules, write rules for patterns, and connect sequences to functions with discrete domains.",
  estimated: "40–50 min",
  sections: [
    {
      id: "notation",
      label: "01",
      title: "Read the position and the term",
      kicker: "The central idea",
      body: [
        "A sequence is an ordered list of numbers. Each number is a term, and its position matters. In the sequence 5, 8, 11, 14, ..., the first term is 5, the second term is 8, and the fourth term is 14.",
        "We name a term with a subscript: a_n means the term in position n. Therefore a_1 = 5, a_2 = 8, and a_4 = 14. The letter a names the sequence; n is the position, not a value being multiplied by a."
      ],
      formula: "a_1 = 5,   a_2 = 8,   a_3 = 11,   a_4 = 14",
      diagram: "sequences-position-term-map",
      note: "The dots mean the list continues. They do not prove what the later terms are; a rule or a clearly stated pattern does that.",
      check: {
        prompt: "For the sequence 12, 9, 6, 3, ..., what is a_3?",
        answer: "6",
        accept: ["6", "a_3=6", "a3=6", "a(3)=6"],
        hint: "Count positions from the left: 12 is first, 9 is second, and 6 is third."
      }
    },
    {
      id: "explicit",
      label: "02",
      title: "Use an explicit rule directly",
      kicker: "One position, one calculation",
      body: [
        "An explicit rule gives a_n directly from the position n. You can find the twentieth term without finding the nineteen terms before it. Treat n like the input variable in an Algebra II function.",
        "For a_n = 4n - 1, find a_6 by replacing every n with 6: a_6 = 4(6) - 1. Multiply first to get 24, then subtract 1 to get 23. The parentheses show that 6 is the input to the rule."
      ],
      formula: "a_n = 4n - 1   ->   a_6 = 4(6) - 1 = 23",
      diagram: "sequences-explicit-input-output",
      note: "Check the starting index. In this course, a sequence usually starts at n = 1 unless the problem states a different first index.",
      check: {
        prompt: "If b_n = n^2 + 2, find b_5.",
        answer: "27",
        accept: ["27", "b_5=27", "b5=27", "b(5)=27"],
        hint: "Replace n with 5, square first, and then add 2: 5^2 + 2."
      }
    },
    {
      id: "recursive",
      label: "03",
      title: "Build from the term before",
      kicker: "A starting value and a repeat rule",
      body: [
        "A recursive definition tells how to get a new term from one or more earlier terms. It must include an initial term so the process has somewhere to start. The notation a_(n-1) means the term immediately before a_n.",
        "For a_1 = 7 and a_n = a_(n-1) + 5 for n >= 2, begin at 7. Add 5 to get a_2 = 12, add 5 again to get a_3 = 17, and add 5 again to get a_4 = 22. Each operation uses the previous output."
      ],
      formula: "a_1 = 7,   a_n = a_(n-1) + 5   ->   7, 12, 17, 22, ...",
      diagram: "sequences-recursive-step-chain",
      note: "A recursive rule without enough initial information is incomplete. You know how to continue, but you do not know where to begin.",
      check: {
        prompt: "Given c_1 = 20 and c_n = c_(n-1) - 3, find c_4.",
        answer: "11",
        accept: ["11", "c_4=11", "c4=11", "c(4)=11"],
        hint: "Subtract 3 three times: c_2 = 17, c_3 = 14, and c_4 = 11."
      }
    },
    {
      id: "compare-rules",
      label: "04",
      title: "Choose the useful form",
      kicker: "Two descriptions of one sequence",
      body: [
        "Explicit and recursive rules can describe the same sequence. For 3, 7, 11, 15, ..., the recursive form is a_1 = 3 and a_n = a_(n-1) + 4 because each term is 4 more than the previous term.",
        "The explicit form is a_n = 3 + 4(n - 1). The quantity n - 1 counts how many jumps occur from position 1 to position n. For n = 5, there are 4 jumps, so a_5 = 3 + 4(4) = 19. Explicit rules are efficient for distant terms; recursive rules emphasize how the sequence changes step by step."
      ],
      formula: "a_1 = 3, a_n = a_(n-1) + 4   <->   a_n = 3 + 4(n - 1)",
      diagram: "sequences-explicit-recursive-bridge",
      note: "Equivalent rules may look different after simplification. Here 3 + 4(n - 1) simplifies to 4n - 1.",
      check: {
        prompt: "For a_1 = 10 and a_n = a_(n-1) + 6, how many +6 jumps are needed to reach a_8?",
        answer: "7",
        accept: ["7", "7 jumps", "seven", "seven jumps", "n-1=7"],
        hint: "Moving from position 1 to position 8 takes 8 - 1 jumps."
      }
    },
    {
      id: "patterns",
      label: "05",
      title: "Turn a pattern into a rule",
      kicker: "Describe what changes",
      body: [
        "First compare neighboring terms. A constant added amount suggests a rule based on repeated addition. For 18, 14, 10, 6, ..., each term is 4 less than the previous term, so a recursive rule is a_1 = 18 and a_n = a_(n-1) - 4.",
        "To write an explicit rule, start with the first term and count n - 1 changes: a_n = 18 - 4(n - 1). Always test the rule at n = 1 and at another position. It gives a_1 = 18 - 4(0) = 18 and a_3 = 18 - 4(2) = 10, so it matches the listed terms. A finite list alone can fit many rules, so state the intended pattern."
      ],
      formula: "18, 14, 10, 6, ...   ->   a_n = 18 - 4(n - 1)",
      diagram: "sequences-pattern-difference-table",
      note: "Later lessons name repeated addition as arithmetic change and repeated multiplication as geometric change. Here the goal is to describe and verify the pattern.",
      check: {
        prompt: "The sequence 2, 6, 10, 14, ... follows a constant-addition pattern. What number is added each time?",
        answer: "4",
        accept: ["4", "+4", "add 4", "four"],
        hint: "Subtract neighboring terms: 6 - 2, 10 - 6, and 14 - 10."
      }
    },
    {
      id: "functions",
      label: "06",
      title: "See a sequence as a function",
      kicker: "A discrete domain",
      body: [
        "A sequence is a function whose input is a position and whose output is the term at that position. You may write a_n or a(n). The pairs (1, a_1), (2, a_2), and (3, a_3) form a table or a set of separate points on a graph.",
        "The important difference from many Algebra II functions is the domain. If a sequence starts at 1 and continues forever, its domain is {1, 2, 3, ...}, not every real number. For a finite sequence with 8 terms, the domain is {1, 2, 3, 4, 5, 6, 7, 8}. A graph of a sequence has isolated points because inputs such as 2.5 are not term positions."
      ],
      formula: "n -> a(n)   with domain {1, 2, 3, ...}",
      diagram: "sequences-discrete-function-graph",
      note: "Do not connect sequence points with a solid curve unless a context separately defines values between whole-number positions.",
      check: {
        prompt: "A finite sequence has terms a_1 through a_6. State its domain as a list of inputs.",
        answer: "{1,2,3,4,5,6}",
        accept: ["{1,2,3,4,5,6}", "1,2,3,4,5,6", "1 through 6", "integers 1 through 6", "n=1,2,3,4,5,6"],
        hint: "The valid inputs are exactly the six term positions."
      }
    }
  ],
  examples: [
    {
      title: "Evaluate an explicit rule",
      problem: "Given p_n = 2n^2 - 3, find p_1, p_3, and p_6.",
      steps: [
        "For p_1, replace n with 1: p_1 = 2(1)^2 - 3.",
        "Square 1, multiply by 2, and subtract 3: p_1 = 2 - 3 = -1.",
        "For p_3, substitute 3: p_3 = 2(3)^2 - 3 = 2(9) - 3 = 15.",
        "For p_6, substitute 6: p_6 = 2(6)^2 - 3 = 2(36) - 3 = 69.",
        "The requested terms are p_1 = -1, p_3 = 15, and p_6 = 69. Each came directly from its position, so no earlier terms were required."
      ]
    },
    {
      title: "Generate terms recursively",
      problem: "Given q_1 = 4 and q_n = 2q_(n-1) + 1 for n >= 2, find q_2 through q_5.",
      steps: [
        "Start with the given initial term q_1 = 4.",
        "Use q_1 to find q_2: q_2 = 2(4) + 1 = 9. Multiply the previous term by 2, then add 1.",
        "Use q_2 to find q_3: q_3 = 2(9) + 1 = 19.",
        "Continue with the newest term: q_4 = 2(19) + 1 = 39.",
        "Apply the rule once more: q_5 = 2(39) + 1 = 79.",
        "The sequence begins 4, 9, 19, 39, 79. Every line uses the term immediately before it."
      ]
    },
    {
      title: "Write both forms from a context",
      problem: "A theater row has 16 seats. Each row behind it has 3 more seats. Let s_n be the number of seats in row n.",
      steps: [
        "Identify the first output: row 1 has 16 seats, so s_1 = 16.",
        "Identify the repeated change: moving back one row adds 3 seats.",
        "Write the recursive rule: s_1 = 16 and s_n = s_(n-1) + 3 for n >= 2.",
        "For an explicit rule, count changes from row 1. Row n is n - 1 moves behind the first row.",
        "Multiply the number of moves by 3 and add the starting 16: s_n = 16 + 3(n - 1).",
        "Check row 4: s_4 = 16 + 3(3) = 25. Recursively, 16, 19, 22, 25 gives the same result.",
        "The domain is the positive row numbers that exist in the theater; if there are R rows, the domain is {1, 2, ..., R}."
      ]
    }
  ],
  practice: [
    { q: "For the sequence 7, 13, 19, 25, ..., find a_4.", a: "25", accepted: ["25", "a_4=25", "a4=25", "a(4)=25"] },
    { q: "If a_n = 5n + 2, find a_9.", a: "47", accepted: ["47", "a_9=47", "a9=47", "a(9)=47"] },
    { q: "If b_n = n^2 - 4n, find b_6.", a: "12", accepted: ["12", "b_6=12", "b6=12", "b(6)=12"] },
    { q: "Given c_1=3 and c_n=c_(n-1)+7, find c_5.", a: "31", accepted: ["31", "c_5=31", "c5=31", "c(5)=31"] },
    { q: "Given d_1=48 and d_n=d_(n-1)/2, find d_4.", a: "6", accepted: ["6", "d_4=6", "d4=6", "d(4)=6"] },
    { q: "Given e_1=2 and e_n=3e_(n-1)-1, find e_3.", a: "14", accepted: ["14", "e_3=14", "e3=14", "e(3)=14"] },
    { q: "For 9, 14, 19, 24, ..., what constant is added each time?", a: "5", accepted: ["5", "+5", "add 5", "five"] },
    { q: "For 30, 24, 18, 12, ..., what constant is added each time?", a: "-6", accepted: ["-6", "−6", "add -6", "subtract 6", "minus 6"] },
    { q: "Write an explicit rule for 4, 9, 14, 19, ... using a_1=4.", a: "a_n=4+5(n-1)", accepted: ["a_n=4+5(n-1)", "an=4+5(n-1)", "a(n)=4+5(n-1)", "a_n=5n-1", "an=5n-1", "a(n)=5n-1", "4+5(n-1)", "5n-1"] },
    { q: "Write a recursive next-term rule for 4, 9, 14, 19, ... after stating a_1=4.", a: "a_n=a_(n-1)+5", accepted: ["a_n=a_(n-1)+5", "an=a(n-1)+5", "a(n)=a(n-1)+5", "previous term + 5", "add 5 to the previous term"] },
    { q: "For a_n=11-2(n-1), find a_7.", a: "-1", accepted: ["-1", "−1", "a_7=-1", "a7=-1", "a(7)=-1"] },
    { q: "How many equal jumps separate a_1 from a_12?", a: "11", accepted: ["11", "11 jumps", "eleven", "eleven jumps", "12-1=11"] },
    { q: "A sequence starts at n=1 and continues forever. State its domain.", a: "{1,2,3,...}", accepted: ["{1,2,3,...}", "1,2,3,...", "positive integers", "all positive integers", "n=1,2,3,...", "natural numbers starting at 1"] },
    { q: "A finite sequence contains a_1 through a_10. What is the largest input in its domain?", a: "10", accepted: ["10", "n=10", "the largest input is 10"] },
    { q: "On a graph, should the points of a sequence with domain {1,2,3,...} be connected? Answer yes or no.", a: "no", accepted: ["no", "no, they are discrete", "do not connect them", "not connected", "no because the domain is discrete"] },
    { q: "If f(n)=3n-2 for n in {1,2,3,...}, find the third sequence term.", a: "7", accepted: ["7", "f(3)=7", "a_3=7", "third term is 7"] },
    { q: "Which rule finds a distant term directly: explicit or recursive?", a: "explicit", accepted: ["explicit", "explicit rule", "an explicit rule", "the explicit rule"] },
    { q: "Which rule must include one or more starting terms: explicit or recursive?", a: "recursive", accepted: ["recursive", "recursive rule", "a recursive rule", "the recursive rule"] }
  ]
};
