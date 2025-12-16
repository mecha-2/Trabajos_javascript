const prompt = require("prompt-sync")();
let notas = []; 
let cantidadNotas = parseInt(prompt("Por favor ingrese la cantidad de notas a ingresar: ")); 
let calificacion; 

for(let i = 0; i < cantidadNotas; i++){
    let calificacion = parseFloat(prompt(`Por favor ingrese la nota ${i+ 1}: `)); 
    notas [i]= calificacion; 
}
console.log(notas); 