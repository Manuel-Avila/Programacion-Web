let tasks;
const taskInput = document.querySelector('form input');

function deleteTask() {
    let parent = this.parentElement;
    let task = parent.querySelector('p').innerHTML;

    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    parent.remove();
}

function saveTask(task) {
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTask(task) {
    let list = document.querySelector('ul');
    let li = document.createElement('li');

    let input = document.createElement('input');
    input.addEventListener('change', linethrough);
    input.type = 'checkbox';

    let p = document.createElement('p');
    p.innerHTML = task;

    let button = document.createElement('button');
    button.addEventListener('click', deleteTask);
    button.innerHTML = 'Delete';

    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(button);

    list.prepend(li);
    taskInput.value = '';
}

function linethrough() {
    let parent = this.parentElement;
    parent.querySelector('p').classList.toggle('line-through');
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let task = taskInput.value;

    if (task !== '') {
        loadTask(task);
        saveTask(task);
    }
});

window.onload = () => {
    tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
        tasks = JSON.parse(tasks);
        tasks.forEach(task => loadTask(task));
        return;
    }

    tasks = [];

};