const prompt = require("prompt-sync")(); 
let numero = parseInt(prompt("Por favor, ingrese un numero: "))

let suma = 0; 
while(numero >= 0){
    suma = numero + suma
    numero = parseInt(prompt("Por favor, ingrese un numero: "))
}
console.log(suma);