"use strict";

const button = document.getElementById("btn");
const popup = button.addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "flex";
});
const xButton = document
	.querySelector(".close")
	.addEventListener("click", function () {
		document.querySelector(".bg-popup").style.display = "none";
	});

let counter = 0;

function elementClick() {
	counter++;
	button.innerText = `clicked ${counter}`;

	if (counter >= 5) {
		button.removeEventListener("click", elementClick);
	}
}

button.addEventListener("click", elementClick);
