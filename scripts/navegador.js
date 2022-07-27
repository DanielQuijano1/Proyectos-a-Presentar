
//animacion del menu navegador 1

const lista = document.querySelectorAll(".lista");

function activacionLink(){
lista.forEach((item)=>
item.classList.remove("active"));
this.classList.add("active");
}
lista.forEach((item) =>
item.addEventListener("click",activacionLink))



//animacion menu navegador 2
let menuDropdown = document.querySelector(".menuDropdown");
let navegadorDropdown = document.querySelector(".navegadorDropdown");

menuDropdown.onclick = function(){
    navegadorDropdown.classList.toggle("active")
}