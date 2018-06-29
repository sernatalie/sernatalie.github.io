var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myImage.onclick = function() {
	var mySrc = myImage.getAttribute("src");
	if(mySrc === ".\\images\\panda.png") {
		myImage.setAttribute("src",".\\images\\panda1.jpg");

	} else {
		myImage.setAttribute("src",".\\images\\panda.png");

	}
}

myButton.onclick = function() {
setUserName();
}

if(!localStorage.getItem("name")) {
	setUserName();
	} else {
	var storedName = localStorage.getItem("name");
	myHeading.textContent = "Pandas are cool, " + storedName;
}

function setUserName() {
	var myName = prompt("Please enter your name.");
	myHeading.textContent = "Pandas are cool, " + myName;
	localStorage.setItem("name", myName);
}