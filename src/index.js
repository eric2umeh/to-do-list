import './style.css';

const taskInput = document.querySelector('.taskInput input');
const taskBox = document.querySelector('.taskBox');

let description = [];
const completed = false;
let index = 0;

// Display task
function displayTodo() {
  let liTag = '';
  description.forEach((element) => {
    if (element.completed === true) {
      liTag += `<li class="task">
        <input type="checkbox" class="checkMe" checked id="check${element.index}" onclick="CheckMe(${element.index});">
        <input type="text" value="${element.description}" class="listItem" id="item${element.index}" readonly>

        <i class="fa-solid fa-ellipsis-vertical" id="edit${element.index}" onclick="editItem(${element.index});"></i>
        <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveItem(${element.index});"></i>
      </li>`;
    } else {
      liTag += `<li class="task">
        <input type="checkbox" class="checkMe" id="check${element.index}" onclick="CheckMe(${element.index});">
        <input type="text" value="${element.description}" class="listItem" id="item${element.index}" readonly>

        <i class="fa-solid fa-ellipsis-vertical" id="edit${element.index}" onclick="editItem(${element.index});"></i>
        <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveItem(${element.index});"></i>
      </li>`;
    }
  });

  taskBox.innerHTML = liTag;
  taskInput.value = '';
}

// Input Task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value.length !== 0) {
    const storedList = localStorage.getItem('todoList');

    if (storedList === null) {
      description = [];
    } else {
      description = JSON.parse(storedList);
      index = description.length === 0 ? 0 : description.length;
    }

    const LocalStore = {
      index,
      description: taskInput.value,
      completed,
    };
    description.push(LocalStore);
    localStorage.setItem('todoList', JSON.stringify(description));
    displayTodo();
  }
});

// Page load
window.onload = () => {
  if (localStorage.getItem('todoList')) {
    description = JSON.parse(localStorage.getItem('todoList'));
  }
  displayTodo();
};
