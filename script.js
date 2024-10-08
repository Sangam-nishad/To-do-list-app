document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;
  
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }
  
    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
  
    // Add delete functionality
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
  
    // Mark task as completed on click
    li.addEventListener('click', function() {
      li.classList.toggle('task-completed');
    });
  
    // Append delete button and task item to the list
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
  
    // Clear the input field
    taskInput.value = '';
  });
  