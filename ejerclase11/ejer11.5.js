const prompt = require("prompt-sync")(); 

let numeroInicio = parseFloat(prompt("Por favor ingrese un numero inicial: ")); 

let numeroFin = parseFloat(prompt("Por favor ingrese un numero final: ")); 

for(i = numeroInicio; i<= numeroFin; i++){
    if(i % 2 === 0){
        console.log(i);
        
    }
}