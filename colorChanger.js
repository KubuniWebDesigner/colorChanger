//select the h1 and the p elements
var myH1 = document.querySelector("#myH1");
var myP = document.querySelector("#myP");
//select the button element to click (here with the tag....it is the only button on the page)
var myButton = document.querySelector("button");
//select the element to change the color background on click (here the body)
var body = document.querySelector("body");
//a variable to switch between colors on any click with a if / else statement inside the next function
var isColored = false;
//addEventListener to the button to change the background color on click
myButton.addEventListener("click", function () {
	//a variable to generate random colors
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	
	if (isColored) {
		body.style.background = hue;
		//let's log the value of the color randomly generated....
		myP.innerHTML = "This is the New Great Background Color Value = " + hue + ". </br>Thank You so much for changing me!";
		isColored = false	
	} else {
		body.style.background = hue;
		//let's log the value of the color randomly generated....
		myP.innerHTML = "This is the New Great Background Color Value = " + hue + ". </br>Thank You so much for changing me!";
		isColored = true;
	}
});







