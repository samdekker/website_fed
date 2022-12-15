// JavaScript Document
console.log("hi");


var deButton = document.querySelector("header nav button");
var deNav = document.querySelector("header nav");

deButton.addEventListener("click", toggleMenu);
function toggleMenu() {  
  deNav.classList.toggle("toonMenu");
}