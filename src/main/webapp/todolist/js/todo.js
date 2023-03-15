const toDoForm = document.querySelector ("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector ("#todo-list");
const toDoeEllipsis = toDoForm.querySelector("input[id=ellipsisTodo]");
const checkedDeleteBtn = document.querySelector("#checkedDeleteBtn");

const ToDOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	const checkboxs = document.querySelectorAll("input[name=checkbox]");
  	for (let i = 0; i < checkboxs.length; i++) {
    	toDos[i].checked = checkboxs[i].checked;
  	}
    localStorage.setItem(ToDOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function showCheckedDelete(event) {
	checkedDeleteBtn.classList.toggle("hidden");
}

function checkedDelete(event) {
	const checkboxs = document.querySelectorAll("input[name=checkbox]");
	const lis = document.querySelectorAll("#todo-list li");
	saveToDos();
	for(let i = 0; i < checkboxs.length; i++ ) {
		//console.log(toDos[i]);
		if(toDos[i].checked) {
			lis[i].remove();
			
		}
		
	}
	toDos = toDos.filter((toDo) => toDo.checked !== true);
	saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    
    const input = document.createElement("input");
  	input.type = "checkbox";
  	input.name = "checkbox";
  	input.id = newTodo.id;
    
    if (newTodo.checked) {
    	input.checked = true;
  	}
    
    const label = document.createElement("label");
    label.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
        checked: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoeEllipsis.addEventListener("click", showCheckedDelete);
checkedDeleteBtn.addEventListener("click", checkedDelete);

const savedToDos = localStorage.getItem(ToDOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

window.addEventListener("beforeunload", saveToDos);