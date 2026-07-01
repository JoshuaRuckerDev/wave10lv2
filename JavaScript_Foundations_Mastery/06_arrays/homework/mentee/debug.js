// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

const letters = ["A", "B", "C", "D", "E"];
const middleIndex = letters.length / 2;
console.log(letters[middleIndex]);

// What's wrong ↓

// middleIndex becomes 2.5, but array indexes must be whole numbers.

// Your fix ↓

const middleIndex = Math.floor(letters.length / 2);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i <= prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// What's wrong ↓

// The loop uses <=, so it tries to access prices[4], which is undefined.


// Your fix ↓

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log("Total: $" + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 1;
let topScore  = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓

// Bug 1: topIndex starts at 1, which assumes Bob is the winner before checking all scores.

// Bug 2 ↓

// Bug 2: scores.i is wrong because arrays use bracket notation with variables: scores[i].

// Your fix ↓

const names = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex = 0;
let topScore = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);