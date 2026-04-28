# 01 -- Variables

Variables let JavaScript **store information** so we can use it later.

Think of a variable like a **labeled box 📦**:

- The label = variable name
- The item inside = value
- You can read it anytime
- Some boxes can change (`let`), some stay fixed (`const`)

Example:

```js
let name = "John";
```

Here:

- `name` → label
- `"John"` → value inside

IMPORTANT:

    = means "assign a value", NOT math equality.

---

## 1. Why Variables Matter

You will use variables when:

- Saving API results
- Tracking dashboard values
- Storing user input
- Building dynamic messages
- Updating counters in loops

Variables are the foundation of everything that follows.

---

## 2. Syntax Cheat Sheet

```js
let age = 32;
const siteName = "LetPhil";
```

    let   → changeable variable
    const → fixed reference
    =     → assignment operator
    ""    → string value

---

## 3. Scope in JavaScript

Scope describes **where a variable can be used**.

---

### 🌎 Global Scope

Declared outside functions or blocks:

```js
let siteName = "LetPhil";
```

Accessible everywhere.

---

### 🏠 Function Scope

Declared inside a function:

```js
function greet() {
  var message = "Hello!";
}
```

Cannot be used outside the function.

---

### 📦 Block Scope

Anything inside `{}` like:

- if statements
- loops
- event listeners

```js
if (true) {
  let text = "Hi";
}
```

`text` only exists inside the block.

---

## 4. Scope + Variable Behavior Chart

---

Keyword Global 🌎 Function Block 📦 Reassign Redeclare Notes
🏠 🔄 ♻️

---

var ✅ ✅ ❌ ✅ ✅ Old JS --
avoid

let ✅ ✅ ✅ ✅ ❌ Use when
value
changes

const ✅ ✅ ✅ ❌ ❌ Default
choice

---

---

## 5. Reassignment Examples

### let → can change

```js
let score = 10;
score = 20;
```

### const → cannot reassign

```js
const score = 10;
score = 20; // Error
```

Objects with const CAN change internally:

```js
const user = { name: "Ana" };
user.name = "Max"; // Allowed
```

---

## 6. Real-Life Analogy

Variables are like sticky notes:

- Write info down
- Read it later
- Update it if needed

JavaScript uses variables to remember values while your program runs.

---

## 7. Practice Tasks Overview

You have four small tasks:

1.  Create and log `firstName`, `age`, `favoriteColor`.
2.  Reassign a `let` variable.
3.  Build a sentence using variables.
4.  Compare `let` vs `const` behavior.

All tasks are console-based.

---

## 8. Mini Homework -- Profile Card (Console Edition)

Goal: Build a profile using variables only.

Create:

- `fullName` (string)
- `profileAge` (number)
- `country` (string)
- `favoriteHobby` (string)
- `isStudent` (boolean)

Log:

    --- PROFILE CARD ---
    Name: John
    Age: 32
    Country: Austria
    Hobby: Coding & Photography
    Is student? false

Then:

1.  Change one variable.
2.  Log the updated card again.

No DOM yet --- focus only on variables and console output.
