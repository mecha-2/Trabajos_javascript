const prompt = require("prompt-sync")(); 
let numero = parseInt(prompt("Por favor ingrese un numero: ")); 

let contador = 0; 

for(let i = 0; i <= numero; i ++){
    if(i % 2 !== 0){
     contador ++ 
}}
console.log(`La cantidad de numeros impares es: ${contador}`);