var titulo = document.querySelector("h1");
var button = document.querySelector("button");
var body = document.body;

titulo.style.textAlign = "center";
titulo.style.fontFamily = "Montserrat";
titulo.style.fontWeight = "8rem";
button.style.marginLeft = "50%";

button.addEventListener("click", function(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var color = "rgb("+r+","+g+","+b+")";
    console.log(color);
    body.style.backgroundColor = color;
    titulo.innerText = color;
})