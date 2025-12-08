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
/*
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
*/

let fruits = ['Banan', 'äpple', 'apelsin'];

for (let fruit of fruits) {
  console.log(fruit);

}

fruits.forEach(fruit => {
  console.log(fruit);
})

fruits.forEach(function (fruit) {
  console.log(fruit);
})


const ul = document.createElement('ul');
const container = document.getElementById('container');
/*
fruits.forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
});
*/
for(let fruit of fruits) {
  const li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
}

container.appendChild(ul);

/*
const txt = document.querySelector('.text');

txt.innerText = "Changed text";
txt.style.color = "green";

const btn = document.getElementById('js-button');
btn.addEventListener('click', () => {

  if(btn.innerText === "Click"){
    btn.innerText = "Clicked";
    btn.style.color = "green";
  }
  else {
    btn.innerText = "Click";
    btn.style.color = "black"; // återställ färgen
  }
})
*/
/*
const resDiv = document.getElementById("results") // tom div
const userInput = document.getElementById("user-in"); // vår input
const btn = document.getElementById("js-button"); // Vår knapp sök-knapp
const btn_1 = document.getElementById("js-button_1"); // vår delete-knapp

btn.addEventListener("click", function(){
  let input = userInput.value;
  createDiv(input);
})

// gör senare

function createDiv(userName) {

  let tempChild = document.createElement("p");
  tempChild.textContent = userName;
  tempChild.classList.add("pClass"); //skapar en ny pCLass
  resDiv.appendChild(tempChild);
}

btn_1.addEventListener("click", function(){
  clearButton();
})

  function clearButton(){

    resDiv.innerHTML = "";
  }

*/

for(let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = fruits[i];
  ul.appendChild(li);
}
























