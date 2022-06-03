"use strict";
document.getElementById("btn").addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", function () {
	document.querySelector(".bg-popup").style.display = "none";
});
