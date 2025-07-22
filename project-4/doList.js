 console.log("This is a To Do List App");
// Selectors
const addTaskBtn = document.querySelector('.add-item');
const inputTask = document.querySelector('.input-field');
const taskContainer = document.querySelector('.task-container');

addTaskBtn.addEventListener('click', function(){
  
    let task = document.createElement('div');
    task.classList.add('task');

    let newTask = document.createElement('p');
    newTask.innerText = `${inputTask.value}`;
    newTask.classList.add('task-item');
    task.appendChild(newTask);

    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    completeBtn.classList.add('complete-btn');
    task.appendChild(completeBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.classList.add('delete-btn');
    task.appendChild(deleteBtn);    

    if (inputTask.value === '') {
        alert("Please enter a task");
    }
    else {
        taskContainer.appendChild(task);
    }

    completeBtn.addEventListener('click', function() {
        newTask.style.textDecoration = "line-through";
        newTask.style.color = "gray";
    });
    deleteBtn.addEventListener('click', function() {
        taskContainer.removeChild(task);
    });
})