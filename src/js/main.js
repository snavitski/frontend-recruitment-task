"use strict";

const button = document.getElementById("btn");
const resetButton = document.getElementById("reset-btn");
let counter = 0;

function setCount(newCount) {
	counter = newCount;
	button.innerText = `Clicked ${counter}`;
	if (counter > 5) {
		resetButton.classList.remove("is-visible");
		console.log(resetButton);
	} else {
		resetButton.classList.add("is-visible");
	}
}

resetButton.addEventListener("click", () => setCount(0));
button.addEventListener("click", () => setCount(counter + 1));

button.addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "none";
});
