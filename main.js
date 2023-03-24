// let btn = document.querySelector("#btn")
// let input = document.querySelector("#myinput")

// input.addEventListener("keypress")



// btn.addEventListener("click", (e)=>{
//     console.log("Hice click");
// })
// btn.addEventListener("mouseover", (e)=>{
//     console.log("Estoy encima del boton");
// })
// btn.addEventListener("mouseout", (e)=>{
//     console.log("Sali del boton");
// })
// btn.addEventListener("focus", (e)=>{
//     console.log("Sali del boton");
// })
let button = document.querySelector("button");
let action = () => alert("Bienvenido!");
button.addEventListener("click", action);