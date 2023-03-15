<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Noto+Sans:ital,wght@0,400;1,800&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/style.css?26">
    <title>todolist</title>
</head>
<body>
	<div class="container">
		<div id="weather">
			<img>
			<span></span>
			<span></span>
		</div>
		<!-- clock -->
		<h1 id="clock">00:00:00</h1>
		<form class="hidden" id="login-form">
			<input required maxlength="20" type="text" placeholder="What is your name?" />
		</form>
		<!-- greeting -->
		<div class="greetings">
			<h1 class="hidden" id="greeting"></h1>
			<!-- ellipsis -->
			<form class="hidden"  id="ellipsis-form">
				<input type="button"  id="ellipsis"> 
				<label for="ellipsis" ><i class="fa fa-ellipsis-h"></i></label>
			</form>
			<form class="hidden" id="renameBtn">
				<input type="submit" value="rename?" />
			</form>
		</div>
		<!-- todo -->
		<div class="todo">
			<form  id="todo-form">
				<input type="text" placeholder="What are your plans for today?">
				<input type="button"  id="ellipsisTodo"> 
				<label for="ellipsisTodo" ><i class="fa fa-ellipsis-h"></i></label>
			</form>
			<input class="hidden" id="checkedDeleteBtn" type="submit" value="checked Delete"/>
			<ul id="todo-list"></ul>
		</div>
		<div id="quote">
			<span></span>
			<span></span>
		</div>
	</div>
	
	<script src="./js/clock.js?1"></script>
    <script src="./js/greetings.js?10"></script>
    <script src="./js/quotes.js"></script>
    <script src="./js/background.js?5"></script>
    <script src="./js/todo.js?51"></script>
    <script src="./js/weather.js?28"></script>
</body>
</html>