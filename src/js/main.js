"use strict";

const button = document.getElementById("btn");
const addButton = document.createElement("button");
let counter = 0;

button.addEventListener("click", elementClick);

function elementClick() {
	counter++;
	button.innerText = `clicked ${counter}`;
	if (counter > 5) {
		addButton.innerHTML = "Reset";
		document.body.appendChild(addButton);
	}
}

button.addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "none";
});
