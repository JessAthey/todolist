//selectors
const todoInput = document.querySelector('.todoinput');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck);
//functions

function addTodo(event){
    //Stop refreshing
    event.preventDefault();
    console.log('hello');


//todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add("todo");

//LI
const newtodo = document.createElement("li");
newtodo.innerText = todoInput.value;
newtodo.classList.add('todo-item');
todoDiv.appendChild(newtodo);

//complete button
const completedButton = document.createElement('button');
completedButton.innerText = 'Completed';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//trash button
const trashButton = document.createElement('button');
trashButton.innerText = 'Delete';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
// appending list
todoList.appendChild(todoDiv);
// clear input value after use
todoInput.value = "";
}



function deleteCheck(e){
const item = e.target;
//delete the todo items
if(item.classList[0] == "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
}

//complete functionß
if (item.classlist == "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}



}