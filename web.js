function addTask() {
    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;

    if (taskTitle.trim() === '' || taskDescription.trim() === '') {
        alert('Please enter both title and description.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<strong>${taskTitle}</strong><br>${taskDescription}`;
    taskList.appendChild(taskItem);

    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
}
