const todoLists = document.querySelector(".todoLists"); 
const listValue = document.querySelector(".todoValue"); 


let todoListValue = []; 

const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem("todoData")) || []; // JSON.parse is used to simply convert local storage data into original format
}

const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todoData", JSON.stringify(todo)); //JSON.stringify in local storare we must need to store in string format thats why we use 
}

const showTodoList = () => {
    todoListValue = getTodoListFromLS();

    todoListValue.forEach( (curTodo) => {
        const liElement = document.createElement("li"); 
        liElement.innerHTML = curTodo;  
        todoLists.append(liElement); 
    });
}

const removeTodoList = (e) => {
    console.log(e.target.textContent); 

    let currentTodo = e.target; 

    updatedTodoList = todoListValue.filter((curTodoValue) => curTodoValue != e.target.textContent); 

    addTodoListLocalStorage(updatedTodoList); 

    currentTodo.remove(); 
}

const addTodoList = (e) => {
    e.preventDefault(); 

    todoListValue = getTodoListFromLS(); 
    let newTodo = listValue.value.trim(); 

    listValue.value = ""; // to remove text field data after clicking add btn. 

    if(newTodo.length != 0 && !todoListValue.includes(newTodo)){

        todoListValue.push(newTodo); 

        // todoListValue = [... new set(todoListValue)]; 

        addTodoListLocalStorage(todoListValue); 

        const liElement = document.createElement("li"); 
        liElement.innerHTML = newTodo;  
        todoLists.append(liElement); 
    }
}

showTodoList(); 

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e); 
}); 


todoLists.addEventListener("click", (e) => removeTodoList(e)); 