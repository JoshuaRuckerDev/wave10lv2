// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

//const billAmount = 80;
//const tipPercent = 15;
//const tipAmount  = billAmount % tipPercent;
//console.log("Tip: $" + tipAmount);

// What's wrong ↓

// % finds the remainder, not a percent of a number

// Your fix ↓

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount * (tipPercent / 100);
console.log("Tip: $" + tipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

//const countdown = 10;
//countdown -= 1;
//countdown -= 1;
//countdown -= 1;
//console.log("Countdown: " + countdown);

// What's wrong ↓

// the countdown changes so it can not be declared as const

// Your fix ↓

let countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);




// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

//var username1 = "gamer99";
//var username2 = "Gamer99";
//console.log("Names match: " + (username1 == username2));

// Logic bug ↓

// username1 and 2 have different capitalizations.

// Style issue 1 ↓

// use let or const instead of var

// Style issue 2 ↓

// use === instead of ==


// Your fix ↓

const username1 = "gamer99";
const username2 = "gamer99";

console.log("Names match: " + (username1 === username2));