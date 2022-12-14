(function(){
	// 设定rem
	function setRem(){
		var screenWidth = window.innerWidth;
		// 屏幕的宽度/设计稿占满全屏的宽度为多少Rem
		var unit = screenWidth/3.75;
		var html = document.querySelector("html");
		html.style.fontSize = unit + 'px';
	}

	setRem();

	// 当屏幕宽度发生变化时-事件
	window.onresize = function(){
		setRem();
	}
})()
