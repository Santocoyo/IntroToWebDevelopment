var a = 10;

console.log(a);

var b = 15;

console.log("Evaluando qué numero es más grande");

if(a > b){
    console.log("El numero a es mayor al b");
} else{
    console.log("El numero b es mayor al a");
}

console.log("Evaluación completa");

console.log("Decidiendo que tan grande eres");

var edad = 80;

if(edad < 7){
    console.log("Eres una bebe");
} else if(edad < 13){
    console.log("Eres un niñe");
} else if(edad < 18){
    console.log("eres un adolescente");
} else if(edad < 65){
    console.log("Eres un adult@");
} else{
    console.log("Eres un ancian@")
}

var condicion = true;

if(condicion){
    console.log("Condición verdadera");
} else{
    console.log("Condición falsa");
}

var password = "hola";

if(password.length < 8 && password > 15){
    console.log("Contraseña no apta");
}

