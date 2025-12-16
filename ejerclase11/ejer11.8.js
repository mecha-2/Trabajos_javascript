const prompt = require("prompt-sync")(); 

let numero = parseInt(prompt("Por favor ingrese un numero entero y positivo: ")); 

for(let i = 1; i <= 100; i ++){
   if(i % numero === 0){
    console.log(i);
   }
    
}