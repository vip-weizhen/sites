// 设定一个全局对象，将待办事项存放至这个对象
if (localStorage.todoList == undefined) {
	var todoList = [];
}else{
	// 将json格式的字符串转为对象
	var todoList = JSON.parse(localStorage.todoList);
}

// 获取doing List对象
var doingListDiv = document.querySelector(".doing .list");
// 获取done List对象
var doneListDiv = document.querySelector(".done .list");
// 获取doing num对象
var doingNumDiv = document.querySelector(".doing .num");
// 获取done num对象
var doneNumDiv = document.querySelector(".done .num");
// 获取输入框对象
var inputDom = document.querySelector("#input");
// 获取main对象
var mainDiv = document.querySelector(".main");
// New doingNum
var doingNum = 0;
// New doneNum
var doneNum = 0;

// 监听输入按键事件
inputDom.onkeydown = function(event){
	// 当按下回车键时候，获取输入框内容，并且生成未完成列表
	if (event.key == "Enter") {
		console.log(event);
		// 获取输入框内容
		var value = inputDom.value;
		var objItem = {
			content:value,
			isDone:false
		}
		todoList.push(objItem);
		// console.log(todoList);
		render(todoList);
		inputDom.value = "";
	}
}

// 渲染函数
function render(todoList){
	// 将todoList对象转为json格式的字符串、本地存储
	localStorage.todoList = JSON.stringify(todoList);
	// 每一次渲染之前清空内容
	doingListDiv.innerHTML = "";
	doneListDiv.innerHTML = "";
	doingNumDiv.innerHTML = "";
	doneNumDiv.innerHTML = "";
	doneNum = 0;
	doingNum = 0;
	// forEach循环遍历todoList数组生成todoItem
	todoList.forEach(function(item,index){
		var todoItem = document.createElement("div");

		todoItem.className = "todoItem";
		if (item.isDone) {
			todoItem.innerHTML = `
			<input type="checkbox" checked="checked" data-index="${index}" name="" id="">
			<div class="content">`+item.content+`</div>
			<div class="del" data-index="${index}">Del</div>`
			doneListDiv.appendChild(todoItem);
			// console.log("done");
			doneNum++;
			doneNumDiv.innerHTML = doneNum;
		}else{
			todoItem.innerHTML = `
			<input type="checkbox" data-index="${index}" name="" id="">
			<div class="content">`+item.content+`</div>
			<div class="del" data-index="${index}">Del</div>`
			doingListDiv.appendChild(todoItem);
			// console.log("doing");
			doingNum++;
			doingNumDiv.innerHTML = doingNum;
		}
	})
	
}

// 第一次打开页面执行渲染函数
render(todoList);

// js委托doingListDiv监听发生修改事件，根据索引重新渲染
doingListDiv.onchange = function(e){
	console.log(e);
	// 通过事件对象找到Dom对象，获取索引值
	var index = parseInt(e.target.dataset.index);
	// console.log(index);
	todoList[index].isDone = true;
	render(todoList);
}

// js委托doneListDiv监听发生修改事件，根据索引重新渲染
doneListDiv.onchange = function(e){
	console.log(e);
	// 通过事件对象找到Dom对象，获取索引值
	var index = parseInt(e.target.dataset.index);
	// console.log(index);
	todoList[index].isDone = false;
	render(todoList);
}	

// 删除todoItem
mainDiv.onclick = function(e){
	if (e.target.className == "del") {
		// console.log(e);
		var index = parseInt(e.target.dataset.index);
		todoList.splice(index,1);
		render(todoList);
	}
}
