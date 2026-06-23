// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// What's wrong ↓

// The loop stops before reaching 10 because it uses < instead of <=.


// Your fix ↓

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

for (let i = 1; i <= 5; i++) {
  let total = 0;
  total += i;
}
console.log("Sum: " + total);

// What's wrong ↓

// total is declared inside the loop, so it resets to 0 every iteration.


// Your fix ↓

let total = 0;

for (let i = 1; i <= 5; i++) {
    total += i;
}


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}
console.log("Done!");

// Bug 1 ↓
// The condition checks for even numbers instead of odd numbers.


// Bug 2 ↓

// The continue statement is unnecessary and causes the loop to skip odd numbers.


// Your fix ↓
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Done!");