const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    li.className = task.completed ? 'task-item completed' : 'task-item';
    li.onclick = () => toggleTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = (event) => {
      event.stopPropagation(); // To prevent task toggling when delete button is clicked
      deleteTask(index);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    tasks.push({ name: taskName, completed: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
}

function filterTasks(type) {
  let filteredTasks = [];
  if (type === 'all') {
    filteredTasks = tasks;
  } else if (type === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (type === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }
  renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    li.className = task.completed ? 'task-item completed' : 'task-item';
    li.onclick = () => toggleTask(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = (event) => {
      event.stopPropagation(); // To prevent task toggling when delete button is clicked
      deleteTask(index);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
function editTask(index) {
  const newName = prompt('Edit Task:', tasks[index].name);
  if (newName !== null && newName.trim() !== '') {
    tasks[index].name = newName.trim();
    saveTasks();
    renderTasks();
  }
}


window.onload = loadTasks;
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    li.className = task.completed ? 'task-item completed' : 'task-item';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = (event) => {
      event.stopPropagation(); // To prevent task toggling when edit button is clicked
      editTask(index);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = (event) => {
      event.stopPropagation(); // To prevent task toggling when delete button is clicked
      deleteTask(index);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
