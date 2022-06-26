var value = document.getElementById("text")

console.log("20210611 网页课期末大作业 软件191 胡瑞平 19031198");

function go(){
	if(text.value == ""){
		alert("请输入搜索关键字！\n\n20210611 网页课期末大作业 软件191 胡瑞平 19031198");
		return;
	}
	window.open("http://www.baidu.com/s?ie=UTF-8&wd=" + text.value);
}