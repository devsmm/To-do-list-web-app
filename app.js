
//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Function
function addTodo(event){
  
  
    //Todo DIV
    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Checked mark button
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<img src="img/check.svg" alt="" height="25x">';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //checked trash button
    const trashButton=document.createElement("button");
    trashButton.innerHTML='<img src="img/trash.svg" alt="" height="25x">';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
//append to list
todoList.appendChild(todoDiv);
todoInput.value="";
}

function deleteCheck(e){

    const item=e.target;
    //Delete Todo
 if(item.classList[0]==="trash-btn"){
    const todo=item.parentElement;
    //animation
    todo.classList.add("fall");
todo.addEventListener('transitionend',function(){
todo.remove();

})

    

 }
 //Check mark
 if(item.classList[0]==="complete-btn"){
     const todo=item.parentElement;
     todo.classList.toggle('completed')
 }
}
function filterTodo(e){
const todos=todoList.childNodes;
console.log(todos);
}