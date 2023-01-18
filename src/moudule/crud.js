function Crud(task) {
  let isSelected = false;
  const itemTaskElem = document.createElement('div');
  itemTaskElem.classList.add('item-element');
  const li = document.createElement('li');
  const label = document.createElement('label');

  const iconTask = document.createElement('div');
  iconTask.classList.add('icon-task-container');
  iconTask.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  const iconDel = document.createElement('div');
  iconDel.innerHTML = '<i class="fas fa-trash-alt"></i>';

  const checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('checkboxContainer');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `check${task.index}`;

  label.htmlFor = `check${task.index}`;
  label.innerText = task.description;

  label.addEventListener('click', () => {
    isSelected = !isSelected;
    if (isSelected === true) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  checkboxContainer.append(checkbox, label);
  itemTaskElem.append(checkboxContainer, iconTask);
  li.appendChild(itemTaskElem);
  return li;
}

export default Crud;