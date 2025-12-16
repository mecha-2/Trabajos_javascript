//ejemplo: verificar si una persona es mayor de edad

//1- importación de la libreria
const prompt = require('prompt-sync')();

//2- Entrada de datos: Ingresar la edad

let edad = parseInt(prompt("Ingrese su edad: "));

// 3. Lógica con el if ternario
// if ternario tiene una forma abreviada en una sola línea
// Estructura: (condicion) ? "valor si es verdadero" : "valor si es falso";

//el signo de interrogación (?) actúa como el "if" y pregunta: se cumple esto?
//el signo dos puntos (:) actúa como "else" (sino esto, lo otro)

let mensaje = (edad >= 21) ? "Sos mayor de edad" : "Sos menor de edad";

console.log(mensaje);
