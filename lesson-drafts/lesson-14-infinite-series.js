window.COURSE.lessons["infinite-series-finance"] = {
  id: "infinite-series-finance",
  title: "Infinite series and financial applications",
  eyebrow: "Lesson 14 · Sequences and series",
  standard: "MA.912.AR.10.4",
  standardText: "Recognize and apply the formula for the sum of a finite or an infinite geometric series to solve mathematical and real-world problems.",
  objective: "Decide whether a geometric series converges, find convergent infinite sums, write repeating decimals as fractions, and model ordinary annuities and amortized loans.",
  estimated: "50–60 min",
  sections: [
    {
      id: "convergence",
      label: "01",
      title: "Watch the partial sums",
      kicker: "Convergence and divergence",
      body: [
        "A series adds the terms of a sequence. An infinite series such as 4 + 2 + 1 + 1/2 + ... never has a last written term, so we do not finish it by ordinary addition. Instead, we study its partial sums: S1 uses the first term, S2 uses the first two terms, S3 uses the first three terms, and so on.",
        "For this series, the partial sums are 4, 6, 7, 7.5, ... . They move closer to 8. When the partial sums approach one finite number, the series converges and that number is called its sum. If the partial sums grow without bound or keep oscillating without settling at one number, the series diverges. Divergence means there is no finite infinite-series sum."
      ],
      formula: "Sn = a1 + a2 + ... + an;   if Sn approaches L, then the series converges to L",
      diagram: "infinite-series-partial-sums-limit",
      note: "The individual terms approaching zero is necessary but not enough by itself. For example, 1 + 1/2 + 1/3 + ... diverges even though its terms approach zero.",
      check: {
        prompt: "The partial sums of a series are 3, 4.5, 5.25, 5.625, ... and approach 6. Does the series converge or diverge?",
        answer: "converges",
        accept: ["converges", "convergent", "it converges", "converges to 6", "6"],
        hint: "Ask whether the partial sums settle toward one finite number."
      }
    },
    {
      id: "ratio-restriction",
      label: "02",
      title: "Test the common ratio",
      kicker: "The restriction that matters",
      body: [
        "A geometric series multiplies each term by the same common ratio r. Divide any term by the preceding nonzero term to find r. In 12 − 6 + 3 − 1.5 + ..., the ratio is −6/12 = −1/2. The negative sign makes the terms alternate, while the magnitude 1/2 makes their sizes shrink.",
        "An infinite geometric series converges exactly when |r| < 1. This means −1 < r < 1: repeated multiplication makes the term magnitudes shrink toward zero. If |r| ≥ 1, the terms stay the same size or grow, so the partial sums cannot settle. The boundary values matter: r = 1 repeats equal terms, and r = −1 makes partial sums alternate. Both diverge unless every term is zero."
      ],
      formula: "infinite geometric series converges when |r| < 1; diverges when |r| ≥ 1",
      diagram: "infinite-series-ratio-shrink-or-grow",
      note: "Test the absolute value of r, not whether r is positive. A ratio such as −0.8 still converges because |−0.8| = 0.8 < 1.",
      check: {
        prompt: "Does 9 − 6 + 4 − 8/3 + ... converge or diverge?",
        answer: "converges",
        accept: ["converges", "convergent", "it converges", "yes", "converges because |r|<1", "converges because r=-2/3"],
        hint: "Compute r = −6/9 = −2/3, then compare |r| with 1."
      }
    },
    {
      id: "infinite-sum",
      label: "03",
      title: "Find a convergent sum",
      kicker: "Infinite geometric series",
      body: [
        "For a geometric series, the finite partial-sum formula is Sn = a1(1 − r^n)/(1 − r). When |r| < 1, repeated powers r^n approach zero as n grows. Replacing r^n by its limiting value 0 leaves S = a1/(1 − r). This formula gives the number approached by all the partial sums.",
        "Always perform the ratio test before using the formula. For 10 + 3 + 0.9 + ..., a1 = 10 and r = 3/10. Because |3/10| < 1, S = 10/(1 − 3/10) = 10/(7/10) = 100/7. Keep the exact fraction unless the problem requests a decimal. If a decimal is requested, use normal calculation mode, keep full calculator precision, and round only the final result to the stated place."
      ],
      formula: "S = a1/(1 − r),   only when |r| < 1",
      diagram: "infinite-series-geometric-tail-to-zero",
      note: "The denominator is 1 − r. If r is negative, subtracting it becomes addition: 1 − (−1/3) = 4/3.",
      check: {
        prompt: "Find the exact sum 6 − 2 + 2/3 − 2/9 + ... .",
        answer: "9/2",
        accept: ["9/2", "4.5", "4 1/2", "4.5 units", "S=9/2", "S = 9/2", "s=4.5"],
        hint: "Here a1 = 6 and r = −1/3. Use S = 6/[1 − (−1/3)]."
      }
    },
    {
      id: "repeating-decimals",
      label: "04",
      title: "Turn repetition into a fraction",
      kicker: "Repeating decimals",
      body: [
        "A repeating decimal is an infinite geometric series because each repeated block moves a fixed number of decimal places. For 0.272727..., the pieces are 27/100 + 27/10000 + 27/1000000 + ... . The first term is 27/100 and each term is multiplied by 1/100, so the series converges.",
        "The sum is (27/100)/(1 − 1/100) = (27/100)/(99/100) = 27/99 = 3/11. A second exact method uses place-value subtraction: let x = 0.272727..., multiply by 100 because the repeating block has two digits, and subtract x. Then 100x − x = 27, so 99x = 27 and x = 3/11. Use 10 for a one-digit block, 100 for a two-digit block, and 1000 for a three-digit block."
      ],
      formula: "one repeated digit: multiply by 10; two digits: multiply by 100; three digits: multiply by 1000",
      diagram: "infinite-series-repeating-block-place-value",
      note: "A bar over digits means only those digits repeat. For 0.1 followed by repeating 6, the nonrepeating 1 must be handled before the repeating tail.",
      check: {
        prompt: "Write 0.777... as a fraction in simplest form.",
        answer: "7/9",
        accept: ["7/9", "0.777...=7/9", "x=7/9", "x = 7/9", "14/18", "21/27"],
        hint: "Let x = 0.777... . Then 10x = 7.777... and subtract x."
      }
    },
    {
      id: "annuities",
      label: "05",
      title: "Add equal deposits over time",
      kicker: "Ordinary annuities",
      body: [
        "An annuity is a stream of equal payments made at equal time intervals. In an ordinary annuity, each payment is made at the end of a period. If PMT dollars are deposited at the end of every period and the account earns periodic rate i, the newest payment earns no interest before the ending balance is measured, the preceding payment earns one period of interest, and the first payment earns n − 1 periods.",
        "Those future values form PMT + PMT(1 + i) + ... + PMT(1 + i)^(n−1), a finite geometric series with ratio 1 + i. Its future value is FV = PMT[((1 + i)^n − 1)/i]. Convert an annual nominal rate to the rate per payment period: for monthly deposits with monthly compounding, i = annual rate/12 and n = 12 times the number of years. Calculator angle mode does not affect finance formulas. Enter parentheses carefully, keep full precision, and round money only once at the end to the nearest cent."
      ],
      formula: "FV = PMT[(1 + i)^n − 1]/i,   ordinary annuity",
      diagram: "infinite-series-annuity-deposit-timeline",
      note: "This formula assumes deposits and compounding use the same period and deposits occur at each period's end. Beginning-of-period deposits form an annuity due and need one extra factor of 1 + i.",
      check: {
        prompt: "For monthly deposits into an account earning 6% per year compounded monthly, what periodic rate i belongs in the formula?",
        answer: "0.005",
        accept: ["0.005", ".005", "0.5%", "0.5 percent", "6%/12", "0.06/12", "i=0.005", "i = 0.005"],
        hint: "Write 6% as 0.06 and divide by 12 monthly periods."
      }
    },
    {
      id: "loans",
      label: "06",
      title: "Value a stream of loan payments",
      kicker: "Amortized loans",
      body: [
        "A fixed-payment amortized loan is paid down by equal payments. At the moment the loan begins, the amount borrowed PV must equal the present value of all future payments. A payment due one period later is worth PMT/(1 + i) today, the next is worth PMT/(1 + i)^2, and so on. These present values form a finite geometric series with ratio 1/(1 + i), which is less than 1 when i > 0.",
        "Adding the present values gives PV = PMT[1 − (1 + i)^(−n)]/i. To find a required payment, isolate PMT: PMT = PV·i/[1 − (1 + i)^(−n)]. Use the loan's periodic rate and total number of payments. A payment rounded to cents can leave a tiny final adjustment because the formula's exact payment usually has more than two decimal places. This model assumes a fixed rate, equal end-of-period payments, and no extra fees."
      ],
      formula: "PV = PMT[1 − (1 + i)^(−n)]/i;   PMT = PV·i/[1 − (1 + i)^(−n)]",
      diagram: "infinite-series-loan-present-value-timeline",
      note: "Do not use the annual percentage rate directly when payments are monthly. Divide the decimal annual rate by 12, and use the total number of monthly payments for n.",
      check: {
        prompt: "A 5-year loan has monthly payments. What value of n belongs in the payment formula?",
        answer: "60",
        accept: ["60", "60 payments", "60 months", "n=60", "n = 60", "5*12", "5(12)"],
        hint: "Multiply 5 years by 12 payments per year."
      }
    }
  ],
  examples: [
    {
      title: "Test and sum an infinite series",
      problem: "Find the exact sum of 18 − 6 + 2 − 2/3 + ... .",
      steps: [
        "Identify the first term: a1 = 18.",
        "Find the common ratio using the second term divided by the first: r = −6/18 = −1/3. Check with 2/(−6) = −1/3.",
        "Test convergence before using the sum formula: |r| = 1/3 < 1, so the infinite geometric series converges.",
        "Substitute into S = a1/(1 − r): S = 18/[1 − (−1/3)].",
        "Subtracting a negative becomes addition: 1 + 1/3 = 4/3, so S = 18/(4/3).",
        "Divide by a fraction by multiplying by its reciprocal: S = 18(3/4) = 54/4 = 27/2. The exact sum is 27/2."
      ]
    },
    {
      title: "Convert a repeating decimal exactly",
      problem: "Write 0.363636... as a fraction in simplest form.",
      steps: [
        "Let x = 0.363636... . The repeating block is 36, which has two digits.",
        "Multiply by 100 to move one complete repeating block left of the decimal: 100x = 36.363636... .",
        "Subtract the original equation from the new equation. The repeating decimal tails cancel: 100x − x = 36.363636... − 0.363636... .",
        "Simplify both sides: 99x = 36.",
        "Divide by 99: x = 36/99.",
        "Reduce by the greatest common factor 9: x = 4/11. Therefore 0.363636... = 4/11 exactly."
      ]
    },
    {
      title: "Find a monthly loan payment",
      problem: "A $12,000 loan has a 6% annual rate, monthly payments, and a 4-year term. Find the monthly payment.",
      steps: [
        "Identify the present value: PV = 12000 because that is the amount borrowed.",
        "Convert the annual rate to a monthly decimal rate: i = 0.06/12 = 0.005.",
        "Count all monthly payments: n = 4(12) = 48.",
        "Use PMT = PV·i/[1 − (1 + i)^(−n)]: PMT = 12000(0.005)/[1 − (1.005)^(−48)].",
        "Evaluate the power and denominator with full calculator precision. The numerator is 60, and 1 − (1.005)^(−48) is approximately 0.2129016.",
        "Divide without rounding the intermediate value: PMT is approximately 281.82035. Round only the final money amount to the nearest cent: the monthly payment is $281.82."
      ]
    }
  ],
  practice: [
    { q: "The partial sums of a series approach 14. Does the series converge or diverge?", a: "converges", accepted: ["converges", "convergent", "it converges", "converges to 14", "14"] },
    { q: "The partial sums 2, 0, 2, 0, ... never settle. Does the series converge or diverge?", a: "diverges", accepted: ["diverges", "divergent", "it diverges", "does not converge", "no finite sum"] },
    { q: "Find the common ratio of 20, 5, 5/4, 5/16, ... .", a: "1/4", accepted: ["1/4", "0.25", ".25", "r=1/4", "r = 1/4", "r=0.25"] },
    { q: "Does 7 + 8.4 + 10.08 + ... converge or diverge?", a: "diverges", accepted: ["diverges", "divergent", "it diverges", "does not converge", "diverges because r=1.2", "diverges because |r|>1"] },
    { q: "Does 5 − 4 + 3.2 − 2.56 + ... converge or diverge?", a: "converges", accepted: ["converges", "convergent", "it converges", "yes", "converges because r=-0.8", "converges because |r|<1"] },
    { q: "For what condition on r does a nonzero infinite geometric series converge?", a: "|r|<1", accepted: ["|r|<1", "-1<r<1", "−1<r<1", "absolute value of r is less than 1", "r between -1 and 1", "-1 < r < 1"] },
    { q: "Find the exact sum 12 + 6 + 3 + 3/2 + ... .", a: "24", accepted: ["24", "S=24", "S = 24", "the sum is 24", "24 units"] },
    { q: "Find the exact sum 8 − 4 + 2 − 1 + ... .", a: "16/3", accepted: ["16/3", "5 1/3", "5.333333...", "S=16/3", "S = 16/3"] },
    { q: "Find the exact sum 3 + 1 + 1/3 + 1/9 + ... .", a: "9/2", accepted: ["9/2", "4.5", "4 1/2", "S=9/2", "S = 4.5"] },
    { q: "Can S=a1/(1−r) be used for a geometric series with r=−1? Answer yes or no.", a: "no", accepted: ["no", "no, it diverges", "cannot", "not valid", "no because |r| is not less than 1"] },
    { q: "Write 0.333... as a fraction in simplest form.", a: "1/3", accepted: ["1/3", "0.333...=1/3", "x=1/3", "x = 1/3", "2/6", "3/9"] },
    { q: "Write 0.454545... as a fraction in simplest form.", a: "5/11", accepted: ["5/11", "45/99", "0.454545...=5/11", "x=5/11", "x = 5/11"] },
    { q: "Write 0.125125125... as a fraction in simplest form.", a: "125/999", accepted: ["125/999", "0.125125125...=125/999", "x=125/999", "x = 125/999"] },
    { q: "For $150 deposited monthly for 3 years, how many deposits n are used in the ordinary-annuity formula?", a: "36", accepted: ["36", "36 deposits", "36 months", "n=36", "n = 36", "3*12"] },
    { q: "An account earns 4.8% annually compounded monthly. Find the periodic rate i.", a: "0.004", accepted: ["0.004", ".004", "0.4%", "0.4 percent", "i=0.004", "i = 0.004", "0.048/12"] },
    { q: "Find the future value of an ordinary annuity with PMT=$100, i=0.01, and n=2. Give an exact dollar amount.", a: "$201", accepted: ["201", "$201", "201 dollars", "$201.00", "201.00"] },
    { q: "In an ordinary annuity, are payments made at the beginning or end of each period?", a: "end", accepted: ["end", "the end", "end of each period", "at the end", "period end", "ending"] },
    { q: "A 3-year loan is paid monthly. Find the total number of payments n.", a: "36", accepted: ["36", "36 payments", "36 months", "n=36", "n = 36", "3*12"] },
    { q: "A loan has a 7.2% annual rate and monthly payments. Find the periodic rate i.", a: "0.006", accepted: ["0.006", ".006", "0.6%", "0.6 percent", "i=0.006", "i = 0.006", "0.072/12"] },
    { q: "For a zero-interest $2400 loan repaid with 24 equal monthly payments, find each payment.", a: "$100", accepted: ["100", "$100", "100 dollars", "$100.00", "100.00", "PMT=100", "pmt = 100"] },
    { q: "Which formula finds the accumulated balance from equal end-of-period deposits: future value or present value?", a: "future value", accepted: ["future value", "FV", "fv", "annuity future value", "future-value formula"] },
    { q: "Which loan quantity is the amount borrowed at time zero: PV or PMT?", a: "PV", accepted: ["PV", "pv", "present value", "the present value", "loan principal"] }
  ]
};
