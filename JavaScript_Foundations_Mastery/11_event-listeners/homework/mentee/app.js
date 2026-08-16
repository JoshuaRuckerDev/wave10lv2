// ============================================================
// 🏠  EVENT LISTENERS — HOMEWORK
// ============================================================
// Mini Project: Interactive Task Board
//
// The Task Board from DOM Manipulation is back — now make it
// fully interactive with event listeners.
//
// Every interaction must use addEventListener.
// All DOM operations must be inside named functions.
// ============================================================

// ============================================================
// THE DATA
// ============================================================
const tasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API docs",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
  {
    id: 6,
    title: "Code review PR #42",
    assignee: "Sofia",
    priority: "medium",
    status: "todo",
  },
  {
    id: 7,
    title: "Deploy to staging",
    assignee: "Liam",
    priority: "high",
    status: "done",
  },
  {
    id: 8,
    title: "Update dependencies",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

// ----------------------------------------------------------
// TASK 1 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Build and return a complete <li> element:
//   1. Create <li> — class "task-card", dataset.id = task.id,
//      dataset.priority = task.priority
//   2. Create <p class="task-title"> — textContent: task.title
//   3. Create <div class="task-meta">:
//      - <span> with priority class + text: task.priority.toUpperCase()
//      - <span>: "👤 " + task.assignee
//   4. Create <div class="card-actions">:
//      - <button class="complete-btn"> textContent: "✅ Complete"
//      - <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//   7. Return the <li>

function createTaskCard(task) {
  const listCard = document.createElement('li');
  listCard.classList.add("task-card");
  listCard.dataset.id = task.id;
  listCard.dataset.priority = task.priority;

  const listPara = document.createElement('p');
  listPara.classList.add("task-title");
  listPara.textContent = task.title;

  const listDiv = document.createElement('div');
  listDiv.classList.add("task-meta");


  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add("priority-" + task.priority);
  prioritySpan.textContent = task.priority.toUpperCase();
  listDiv.appendChild(prioritySpan);


  const assigneeSpan = document.createElement('span');
  assigneeSpan.textContent =  "👤 " + task.assignee
  listDiv.appendChild(assigneeSpan);

  const divCard = document.createElement('div');
  divCard.classList.add("card-actions");

  const completeBtn = document.createElement('button');
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "✅ Complete";
  divCard.appendChild(completeBtn);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = "🗑️ Remove";
  divCard.appendChild(removeBtn);

  if (task.status === "done") {
    listCard.classList.add("completed");
  }

  listCard.appendChild(listPara);
  listCard.appendChild(listDiv);
  listCard.appendChild(divCard);  

  return listCard;

}

// ----------------------------------------------------------
// TASK 2 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList
//
// Clear all three lists first (set innerHTML = ""):
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// Call createTaskCard(task) for each.
// Append to the correct list based on task.status.
//
// After appending call updateCounts(taskList).
//
// ---
// Declare a function called updateCounts.
// Parameter: taskList
//
// Update all six count displays:
//   #task-count       → taskList.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo tasks count
//   #count-inprogress → inprogress tasks count
//   #count-done       → done tasks count

function renderBoard(taskList) {
  const todoList = document.getElementById("list-todo");
  todoList.innerHTML = "";

  const inProgress = document.getElementById("list-inprogress");
  inProgress.innerHTML = "";

  const listDone = document.getElementById("list-done");
  listDone.innerHTML = "";

  taskList.forEach(task => {
   const taskCard = createTaskCard(task);
   
   if (task.status === "todo") {
    todoList.appendChild(taskCard);
   }  else if (task.status === "inprogress") {
    inProgress.appendChild(taskCard);
   }  else if (task.status === "done") {
    listDone.appendChild(taskCard);
   }
   
  });

  updateCounts(taskList);

} 

function updateCounts(taskList) {
  const taskCount = document.getElementById("task-count");
  taskCount.textContent = taskList.lenght + " tasks";

  const completedCount = document.getElementById("completed-count");
  const done = taskList.filter(task => task.status === "done");
  completedCount.textContent = "✅ " + done.length + " done";

  const pendingCount = document.getElementById("pending-count");
  const pending = taskList.filter(task => task.status !=="done");
  pendingCount.textContent = "⏳ " + pending.length + " pending";

  const todo = document.getElementById("count-todo");
  const todoTasks = taskList.filter(task => task.status === "todo");
  todo.textContent = todoTasks.lenght;

  const inprogress = document.getElementById("count-inprogress");
  const inProgressTasks = taskList.filter(task => task.status === "inprogress");
  inprogress.textContent = inProgressTasks.lenght;

  const doneCount = document.getElementById("count-done");
  doneCount.textContent = done.lenght;
  
}


// ----------------------------------------------------------
// TASK 3 — handleAddTask (click event on the Add button)
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read values from:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → log "Title is required" and return early
//   3. Create a new task object:
//      { id: Date.now(), title, assignee: assignee || "Unassigned",
//        priority, status }
//   4. Push the new task to the tasks array
//   5. Re-render: call renderBoard(tasks)
//   6. Clear the title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask);

function handleAddTask() {
  const taskTitle = document.getElementById("task-title-input").value.trim();
  const taskAssignee = document.getElementById("task-assignee-input").value.trim();
  const taskPriority = document.getElementById("task-priority-input").value;
  const taskStatus = document.getElementById("task-status-input").value;

  if (taskTitle === "") {
    console.log("Title is required")
   return;
  }
  
const newTask = {
  id: Date.now(),
  title: taskTitle,
  assignee: taskAssignee || "Unassigned",
  priority: taskPriority,
  status: taskStatus
}

tasks.push(newTask);

renderBoard(tasks);

document.getElementById("task-title-input").value = "";
document.getElementById("task-assignee-input").value = "";
  
}
// wire up here
document.getElementById("add-task-btn").addEventListener("click", handleAddTask);

// ----------------------------------------------------------
// TASK 4 — handleBoardClick (event delegation for complete + remove)
// ----------------------------------------------------------
// Instead of adding listeners to every button individually,
// use delegation on each column's task list.
//
// Declare a function called handleBoardClick.
// Parameter: event
//
// Inside:
//   - Get the clicked element: event.target
//   - Get the task card: target.closest(".task-card")
//     (.closest() walks UP the DOM tree to find the nearest matching ancestor)
//   - If no card found → return early
//   - Get the task id: parseInt(card.dataset.id)
//   - Find the task in the tasks array using find
//
//   IF target.classList.contains("complete-btn"):
//     - Set task.status = "done"
//     - Add class "completed" to card
//     - Move card to #list-done using appendChild
//     - Call updateCounts(tasks)
//
//   IF target.classList.contains("remove-btn"):
//     - Remove the task from tasks array:
//       const index = tasks.findIndex(t => t.id === taskId)
//       tasks.splice(index, 1)
//     - Remove the card from the DOM: card.remove()
//     - Call updateCounts(tasks)
//
// Wire ONE listener to document.getElementById("board"):
//   Wait — the <main> has class "board" not id "board".
//   Use document.querySelector(".board")
//     .addEventListener("click", handleBoardClick);
//
// Write a comment: why use .closest() instead of event.target directly?

function handleBoardClick(event) {
  const target = event.target;
  const card = target.closest(".task-card");

  if (!card) {
    return;
  }

  const taskId = parseInt(card.dataset.id);
  const task = tasks.find(task => task.id === taskId);

  if (target.classList.contains("complete-btn")) {
    task.status = "done";
    card.classList.add("completed");
    document.getElementById("list-done").appendChild(card);
    updateCounts(tasks);
  }

  if (target.classList.contains("remove-btn")) {
    const index = tasks.findIndex(t => t.id === taskId);
    tasks.splice(index, 1);
    card.remove();
    updateCounts(tasks);
  }
}

// wire up here

document
  .querySelector(".board")
  .addEventListener("click", handleBoardClick);

  // .closest() finds the task card that contains the element that was clicked.

// ----------------------------------------------------------
// TASK 5 — handleFilterClick (filter buttons)
// ----------------------------------------------------------
// The header has four filter buttons with data-filter attributes:
//   data-filter="all", "high", "medium", "low"
//
// Declare a function called handleFilterClick.
// Parameter: event
//
// Inside:
//   - Get the filter value: event.target.dataset.filter
//   - If no filter value → return (clicked something that's not a button)
//
//   - Remove "active" class from ALL .filter-btn elements
//     (use querySelectorAll + forEach)
//   - Add "active" class to event.target
//
//   - Select ALL .task-card elements
//   - For each card:
//       IF filter === "all" → remove class "hidden"
//       ELSE IF card.dataset.priority === filter → remove "hidden"
//       ELSE → add "hidden"
//
// Use delegation on the .header-right div:
//   document.querySelector(".header-right")
//     .addEventListener("click", handleFilterClick);
//
// Write a comment: why use delegation here instead of
// individual listeners on each button?

function handleFilterClick(event) {
  const filter = event.target.dataset.filter;

  if (!filter) {
    return;
  }

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");

  const cards = document.querySelectorAll(".task-card");

  cards.forEach(card => {
    if (filter === "all") {
      card.classList.remove("hidden");
    } else if (card.dataset.priority === filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// wire up here

document
  .querySelector(".header-right")
  .addEventListener("click", handleFilterClick);

  // Delegation lets one parent listener handle clicks from all filter buttons.

// ----------------------------------------------------------
// TASK 6 — handleKeyDown (keyboard shortcuts)
// ----------------------------------------------------------
// Declare a function called handleKeyDown.
// Parameter: event
//
// Inside:
//   IF event.key === "Escape":
//     - Clear both input fields (#task-title-input, #task-assignee-input)
//     - Log: "Inputs cleared"
//
//   IF event.key === "Enter" AND event.target.id === "task-title-input":
//     - Call handleAddTask()
//     (lets users press Enter in the title field to add a task)
//
// Wire it up to document.

function handleKeyDown(event) {
  if (event.key === "Escape") {
    document.getElementById("task-title-input").value = "";
    document.getElementById("task-assignee-input").value = "";
    console.log("Inputs cleared");
  }

  if (
    event.key === "Enter" &&
    event.target.id === "task-title-input"
  ) {
    handleAddTask();
  }
}

// wire up here

document.addEventListener("keydown", handleKeyDown);

// ----------------------------------------------------------
// TASK 7 — Connect the dots: init
// ----------------------------------------------------------
// Declare a function called init.
// Inside: call renderBoard(tasks).
//
// Call init() at the bottom.

function init() {
  renderBoard(tasks);
}

init();
// ----------------------------------------------------------
// ⭐ STRETCH GOAL — live search
// ----------------------------------------------------------
// Add a search input somewhere on the page (you can add a
// plain <input id="search-input"> anywhere in the HTML above
// the board, inside .add-task-bar).
//
// Declare a function called handleSearch.
// Parameter: event
//
// Inside:
//   - Get the search query: event.target.value.toLowerCase().trim()
//   - Select all .task-card elements
//   - For each card:
//       Get the title text: card.querySelector(".task-title").textContent.toLowerCase()
//       IF the title includes the query → remove class "hidden"
//       ELSE → add class "hidden"
//
// Wire it up:
//   document.getElementById("search-input")
//     .addEventListener("input", handleSearch);
//
// Write a comment: why use "input" and not "change" for live search?

// ============================================================
// WIRE UP ALL LISTENERS (above init)
// ============================================================

// ============================================================
// START
// ============================================================
init();
