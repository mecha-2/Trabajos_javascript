const prompt = require("prompt-sync")(); 

let numeroAlAzar = Math.floor(Math.random()*10)+ 1; 

console.log("Adivina un numero entre 1 y 10, tienes 3 intentos");

let intento = 0; 

for(let i = 1; i <=3; i ++ ){
    intento = parseInt(prompt(`Intento ${i}: Ingresa un numero: `));
    if(intento === numeroAlAzar){
        console.log("Felicitaciones! Haz adivinado!");
        break; 
    }else{
        console.log("Numero Incorrecto...");
        
    }
}

if(intento !== numeroAlAzar){
    console.log(`No has acertado... El numero a adivinar era: ${numeroAlAzar}`);
    
}