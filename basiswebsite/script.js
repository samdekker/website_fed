
var Button

Button = document.querySelector("main button");

Button.addEventListener("click", verander);

function verander(){
    Button.classList.add("anders");
}


var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);
function toggleMenu() {  
  deNav.classList.toggle("toonMenu");
}