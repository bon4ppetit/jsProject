let deletedTasks = [],
    taskList = []

function openPanelAddTask() {
  let panelAddTask = document.querySelector('.wrapper-panel-add-task'),
  panelAddTaskClass = panelAddTask.classList;

  panelAddTaskClass.add('wrapper-panel-add-task-show');
}

function cancelAddTask() {
  let panelAddTask = document.querySelector('.wrapper-panel-add-task'),
  panelAddTaskClass = panelAddTask.classList;

  addTaskText.value = '';

  panelAddTaskClass.remove('wrapper-panel-add-task-show');
}

function addTask() {

  let text = addTaskText.value,
  wrapperTasks = document.querySelector('.wrapper-tasks');

  let listTaskEmpty = document.querySelector('.list-task-empty');
  listTaskEmpty.classList.add('list-task-empty-hide');

  taskList.push(text);

  let newTask = document.createElement('div');
  
  newTask.innerText = text;
  newTask.classList.add('new-task');
  wrapperTasks.append(newTask);

  let imgOne = document.createElement('img');
  imgOne.src = './access/img/ico/x-24.svg';
  imgOne.classList.add('img-task');
  imgOne.addEventListener('click', () => {
    deleteTask(newTask);
  })
  newTask.prepend(imgOne);

  let imgTwo = document.createElement('img');
  imgTwo.src = './access/img/ico/check-24.svg';
  imgTwo.classList.add('img-task');
  imgTwo.addEventListener('click', () => {
    replaceInTrash(newTask);
  })
  newTask.append(imgTwo);

  updateListTask()

  cancelAddTask();
}

function updateListTask() {
  taskList = [];

  let allTask = document.querySelectorAll('.new-task');
  allTask.forEach((x) => {
    let value = x.innerText;
    taskList.push(value);
  })
}

function openPanelTrashTask() {
  let panelTrashTask = document.querySelector('.wrapper-panel-trash-task'),
  panelTrashTaskClass = panelTrashTask.classList;

  panelTrashTaskClass.add('wrapper-panel-add-task-show');
}

function closePanel() {
  let panelTrashTask = document.querySelector('.wrapper-panel-trash-task'),
  panelTrashTaskClass = panelTrashTask.classList

  panelTrashTaskClass.remove('wrapper-panel-add-task-show');
}

function replaceInTrash(task) {
  let trash = document.querySelector('.panel-trash-task');
  let newElemTrash = document.createElement('div');


  newElemTrash.classList.add('new-task');
  newElemTrash.innerText = task.innerText;
  trash.append(newElemTrash);

  task.classList.add('delete-task-effect');

  setTimeout(() => {
    task.remove();
  }, 600);

  clearListTask(task.innerText);
}

function deleteTask(task) {
  task.classList.add('delete-task-effect');

  setTimeout(() => {
    task.remove();
  }, 600);

  clearListTask(task.innerText);
}

// function findTask() {
//   let textFind = findTaskValue
// }

function clearListTask(taskText) {
  let idx = taskList.indexOf(taskText);

  taskList.splice(idx, 1);

  console.log(taskList);
}

function openPanelUserAuth() {
  formAuth.classList.add('form-reg-show');
}

function openPanelUserReg() {
  formReg.classList.add('form-reg-show');
}

function closePanelReg() {
  formReg.classList.remove('form-reg-show')
}

function closePanelAuth() {
  formAuth.classList.remove('form-reg-show')
}
