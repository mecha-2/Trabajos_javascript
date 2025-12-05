const prompt = require('prompt-sync')();

//pedimos al usuario que ingrese un numero cualquiera
let numero = parseFloat (prompt("Ingrese un número: "));

//verificamos si el numero es psitivo, negativo o cero
if (numero > 0){
    console.log("El número es positivo.");
} else if (numero < 0){
    console.log("El número es negativo");
} else {
    console.log("El número es cero.");
}