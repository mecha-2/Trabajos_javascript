const prompt = require('prompt-sync')();

function contarHasta(numeroLimite) {
    console.log("--- Contando hasta " + numeroLimite + " ---");
    for (let i = 1; i <= numeroLimite; i++) {
        console.log(i); 
    }
    console.log("--- Fin del conteo ---");
}

console.log("--- Ejercicio 9: Contador ---");

let limite = parseInt(prompt("¿Hasta qué número querés contar?: "));

contarHasta(limite);