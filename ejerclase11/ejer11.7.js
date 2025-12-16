const prompt = require("prompt-sync")(); 

let numero1 = parseInt(prompt("Por favor ingrese un numero: ")); 

let numero2 = parseInt(prompt("Por favor ingrese otro numero: ")); 

let operacion = prompt("Por favor ingrese el tipo de operacion matematica que desea realizar: suma, resta, multiplicacion o division: ");

switch (operacion){
    case "suma": 
    console.log(`La suma entre ambos numeros ingresados da un total de: ${numero1 + numero2} `);
    break;
    case "resta": 
    console.log(`La resta entre ambos numeros ingresados da un total de: ${numero1 - numero2}`);
    break; 
    case "multiplicacion": 
    console.log(`La multiplicacion entre ambos numeros ingresados da un total de: ${numero1 * numero2}`);
    break; 
    case "division": 
    console.log(`La division entre ambos numeros ingresados da un total de: ${numero1 / numero2}`);
    break; 
    default: 
    console.log("La operacion aritmetica ingresada no es correcta");
    
}