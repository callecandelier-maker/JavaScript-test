
/*
const name = `Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem <br>
                     Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum`;

document.querySelector('.txt').innerHTML = name;


const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', buttonClick);

function buttonClick() {

  if(buttonElement.innerText === 'Hej') {
    buttonElement.innerText = 'Hej Då!';
  }
  else{
    buttonElement.innerText = 'Hej';
  }
}
*/
const todoList = [];

const inputElement = document.querySelector('.js-name-input');
const addButton = document.querySelector('.js-add-button');
addButton.addEventListener('click', addTodo)

renderTodoList();

function renderTodoList() {

  let todoListHTML = "";

  for(let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const name = inputElement.value;


  todoList.push(name);
  console.log(todoList);
  renderTodoList();

}












