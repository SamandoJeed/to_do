// Task list array to store tasks
let tasks = [];

// Function to render tasks in the UI
function renderTasks() {
    const taskList = document.getElementById('taskList');
    // Clear current list
    taskList.innerHTML = '';

    // Render each task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index) {
    let updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        renderTasks();
    }
}

// Event listener for form submission (adding a task)
document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Initial rendering of tasks on page load
renderTasks();
