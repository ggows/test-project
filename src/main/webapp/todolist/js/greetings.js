const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const ellipsisForm = document.querySelector("#ellipsis-form");
const ellipsisInput = ellipsisForm.querySelector("#ellipsis-form input");
const renameBtn = document.querySelector("#renameBtn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY =  "username"; 

const date = new Date();
const hour = date.getHours();

//localStorage에 데이터 넣기
function onLoignSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function showModifyUsername(event) {
	renameBtn.classList.toggle(HIDDEN_CLASSNAME);
}

function modifyUsername(event) {
	event.preventDefault();
	greeting.classList.add(HIDDEN_CLASSNAME);
	ellipsisForm.classList.add(HIDDEN_CLASSNAME);
	renameBtn.classList.add(HIDDEN_CLASSNAME);
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoignSubmit);
}

function paintGreetings(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    if (hour >= 6 && hour < 12) {
	    greeting.innerText = `Good morning, ${username}`;
	} else if (hour >= 12 && hour < 17) {
	  greeting.innerText = `Good afternoon, ${username}`;
	} else if (hour >= 17 && hour < 20) {
	  greeting.innerText = `Good evening, ${username}`;
	} else {
	  greeting.innerText = `Good night, ${username}`;
	}
    greeting.classList.remove(HIDDEN_CLASSNAME);
    ellipsisForm.classList.remove(HIDDEN_CLASSNAME);
    ellipsisInput.addEventListener("click", showModifyUsername);
  	renameBtn.addEventListener("submit", modifyUsername);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

//localStorage에 데이터 있는지 확인
if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoignSubmit);
} else {
    paintGreetings(saveUsername);
}