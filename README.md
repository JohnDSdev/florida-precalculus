# Linework: Florida Precalculus

A dependency-free, keyboard-first learning portal aligned to Florida Precalculus Honors course `1202340`.

## Run

Open `index.html` directly, or serve the directory:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Add a lesson

1. Add a lesson object to `COURSE.lessons` in `lessons.js`.
2. Add its ID to the appropriate unit's `lessons` array. The portal discovers it automatically.
3. Follow the existing schema: metadata, `sections`, three `examples`, and a `practice` bank. No renderer changes are required.

The shared renderer in `app.js` supplies full-screen navigation, embedded checks, keyboard controls, local progress, examples, and mastery scoring.

Current lessons are stored independently under `lesson-drafts/` and loaded after the core course map. Seven lessons are currently available.

## InstantDB

Optional email magic-code sign-in syncs progress between devices. Anonymous learners retain the full local experience. Signed-in learners can send timestamped feedback labeled with their username.

Feedback is available to the app owner in the Instant dashboard under **Explorer → feedback**. The client app also shows each learner their recent feedback.

```bash
npm install
npm run build:cloud
npx instant-cli@latest push all
```

The public app ID is intentionally included in `cloud-source.js`. Never commit an Instant admin token.

## Planned course size

The complete course is planned as 36 lessons:

- Functions as change: 6
- Advanced function models: 5
- Sequences and series: 4
- Trigonometry: 9
- Conic sections: 4
- Complex numbers and vectors: 4
- Polar and parametric forms: 4

This groups related benchmarks into teachable lessons instead of forcing one lesson per benchmark.

## Standards basis

- Florida Department of Education, Precalculus Honors course description, course `1202340`.
- Demo benchmark: `MA.912.F.1.4`, difference quotients and their connection to slopes of lines.
