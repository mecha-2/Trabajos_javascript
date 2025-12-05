//Ejemplo: programa que simula un loro: repite lo que escucha 5 veces. 

// 1- Importación de la librería
const prompt = require('prompt-sync')();

// 2- Entrada de datos
// le pedimos al usuario la frase que el loro va a "escuchar" para repetir
let mensaje = prompt("Escribí algo para que el loro repita: ");

console.log("--- El loro comienza a repetir ---");

// 3- Estructura del for (bucle)
//el for es ideal para cuando sabemos de antemano cuantas veces queremos repetir algo (5)
//tiene 3 partes por punto y coma (;)
//Inicio: (let i = 1) creamos un contador que empieza en 1
//Condición (i <= 5) el ciclo va a segur mientras el contador sea menor o igual a 5
//Modificador incremento (i++) al final de cada vuelta le sumamos 1 al contador

for (let i = 1; i <= 5; i++){
    //lo que pongamos aqui adentro se va a ejecutar 5 veces 
    console.log(i + " - " + mensaje);
}
console.log("--- El loro ya se cansó ---");