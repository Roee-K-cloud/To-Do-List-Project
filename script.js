const taskInput = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('task-list');

  // Add new task function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle complete by clicking on task text
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';

    // Delete task on clicking delete button
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent toggle on parent li
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  }

  addBtn.addEventListener('click', addTask);

  // Add task on pressing Enter key
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });