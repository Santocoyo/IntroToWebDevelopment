var titulo = document.querySelector("h1");
titulo.addEventListener("click", newYear);
titulo.addEventListener("dblclick", printHeart);


function newYear(){
    for(var i=12; i>0; i--){
        console.log(i);
    }
    console.log("Feliz año nuevo");
}

function advertencia(){
    alert("Advertencia algo pasa, checa la consola");
    console.log("Hola, solo quería saludar")
}

function printHeart(){
    console.log("<3");
    console.log("Feliz navidad");
}

function saludo(nombre){
    console.log("Hola " + nombre);
}

function println(str){
    console.log(str);
}

function edad(añoNacimiento){
    console.log(2020-añoNacimiento)
}

function mensajeImportante(str){
    for(var i=0; i<3; i++){
        console.log(str.toUpperCase());
        console.log(":D");
    }
}

function sumar(a, b){
    console.log(a+b);
}

function caF(celsius){
    var fah = celsius*1.8+32
    console.log("Fahrenheit: " + fah);
    return fah;
}

function multiply(a, b){
    return a*b;
}

function estaHumedo(num){
    if(num>100){
        return true;
    }
    return false;
}

function capital(palabra){
    return palabra[0].toUpperCase() + palabra.slice(1);
}

function back(){
    document.querySelector("body").style.backgroundColor = "red";
}