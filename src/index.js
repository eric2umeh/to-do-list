import Crud from './moudule/crud.js';
import './style.css';

const taskArray = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
];

function component() {
  const divElem = document.createElement('div');
  const inputElem = document.createElement('input');
  const ulElem = document.createElement('ul');
  const btnClearCom = document.createElement('button');

  divElem.classList.add('div-todo');
  inputElem.placeholder = 'Add to your list...';
  btnClearCom.classList.add('btn-clear-com');
  btnClearCom.textContent = 'Clear all completed';
  btnClearCom.disabled = true;

  taskArray.map((tasks) => {
    ulElem.appendChild(Crud(tasks));
    return 'done';
  });

  divElem.append(inputElem, ulElem, btnClearCom);

  return divElem;
}

const all = document.querySelector('.all');

all.appendChild(component());
