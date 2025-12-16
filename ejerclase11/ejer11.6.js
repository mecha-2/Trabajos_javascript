const prompt = require("prompt-sync")(); 

let numero = parseInt(prompt("Por favor ingrese un numero: ")); 

for(i = 1; i <= 10; i++){
    console.log(numero * i); 
       
    }