var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorsDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode")

for (var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected")
		if (this.textContent === "Easy") {
			numSquares = 3;
		}
		else{
			numSquares = 6;
		}
		reset();
		//figire out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
	})
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match new color
	colorsDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		//if there is a color that matches the square in the first 3 in easy mode if there is then we set the background for 1st three.
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "#a0d2eb";

}

resetButton.addEventListener("click", function(){
	reset();
})

colorsDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add event listeners
	squares[i].addEventListener("click", function(){
		// grab color of the squares
		var clickedColor = this.style.backgroundColor;
		//there's a bug that occurs while comparing pickedColor and clickedColor, so to see that console.log(pickedColor, clickedColor)
		if (clickedColor === pickedColor) {
			message.textContent ="Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#494d5f";
			message.textContent ="Try Again!";
		}
		
	});
}
function changeColors(color){
	//loop through all squares
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}		
}
function pickColor(){
	//math.floor used to round the random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}
	return arr;
}
function randomColors(){
	// generating random rgb colors 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}