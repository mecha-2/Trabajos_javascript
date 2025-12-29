const prompt = require('prompt-sync')();

function esPar(numero) {
    
    let mensaje; 

    if (numero % 2 === 0) {
        mensaje = "Es par"; 
    } else {
        mensaje = "Es impar"; 
    }

    return mensaje; 
}

console.log("--- Ejercicio 4: Par o Impar ---");

let numUsuario = parseInt(prompt("Ingresá un número para saber si es Par: "));

console.log("El número " + numUsuario + " " + esPar(numUsuario));