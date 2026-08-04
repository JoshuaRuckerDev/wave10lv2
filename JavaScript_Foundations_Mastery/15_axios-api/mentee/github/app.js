// ============================================================
// 🐙  GITHUB PORTFOLIO CHECKER  | (axios)
// ============================================================
// The SAME project as the fetch version — rebuild the request
// functions with axios + async/await, then compare the two
// app.js files side by side. The comparison IS the lesson.
//
// KEY DIFFERENCES — watch for them:
//   1. response.data is already parsed (no .json())
//   2. axios REJECTS on 404/403 — they land in catch; read
//      error.response.status to tell them apart
//   3. async/await + try/catch replaces .then/.catch
//
// The component functions are IDENTICAL to your fetch versions.
// Copy them over and focus on the request functions.
//
// 🔒 Same rule: no tokens in frontend JS, ever.
// ============================================================

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C#": "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
};

// TASK 1 — createProfileCard
// Copy your working version from the fetch project — unchanged.

function createProfileCard(user) {
  // your code here (same as fetch version)
}

// TASK 2 — createRepoRow
// Copy your working version — unchanged.
// (LANG_COLORS dot, updated_at date, the two warn badges.)

function createRepoRow(repo) {
  // your code here (same as fetch version)
}

// TASK 3 — renderReport
// Copy your working version — unchanged.
// (Two .filter counts, three checks, the checks-box verdict.)

function renderReport(repos) {
  // your code here (same as fetch version)
}

// TASK 4 — the fetches, rebuilt with async/await
// Declare an ASYNC function called fetchRepos.
// Parameter: username
//
// Inside a try block:
//   1. const response = await axios.get(
//        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`)
//   2. response.data is the repos array:
//      renderReport(response.data)
//      clear #repo-list, forEach → appendChild(createRepoRow(repo))
// Catch: #github-status → "❌ Couldn't load repos" / "status error"
//
// Then declare an ASYNC function called checkProfile.
// No parameters.
//
// Inside a try block:
//   1. Read #username-input, .trim(); IF empty → return
//   2. Status → "Checking profile..." / "status loading"
//   3. Clear #profile-card, #portfolio-report, #repo-list
//   4. const response = await axios.get(`https://api.github.com/users/${username}`)
//      ⚠️ No status checks, no throws — a 404 or 403 REJECTS
//         and jumps straight to catch.
//   5. Status → `✓ Found ${response.data.login}` / "status success"
//   6. appendChild createProfileCard(response.data) into #profile-card
//   7. await fetchRepos(username)
//
// In the catch — the status codes live on error.response now:
//   error.response && error.response.status === 404 →
//     `❌ No GitHub user called "${username}"`
//   error.response && error.response.status === 403 →
//     "❌ Rate limit hit (60/hour per IP) — wait a bit"
//   error.response →
//     `❌ Request failed: ${error.response.status}`
//   ELSE →
//     `❌ Network error: ${error.message}`
//   className "status error"
//
// When it works: where did your three fetch-version throw
// statements go? Write the answer as a comment.

async function fetchRepos(username) {
  // your code here
}

async function checkProfile() {
  // your code here
}

// TASK 5 — wire up the form (same as fetch — unchanged)

function handleGithubSubmit(event) {
  // your code here (same as fetch version)
}

// wire up the form listener here

// ⭐ STRETCH — the language breakdown, unchanged from fetch.
// Rendering never noticed the network swap. Count the layers
// that didn't change: components, report, wiring, stretch.
