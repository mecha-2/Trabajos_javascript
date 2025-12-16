//Ejemplo: determinar que dia de la semana es según un número 

// 1-Importación de la librería
const prompt = require('prompt-sync')();

// 2- Entrada de datos
//Pedimos el número y usamos parseInt porque el switch compara valores exactos. 

let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7: "));

// 3- Estructura switch
//El switch evalúa la variable que se pone entre paréntesis (numeroDia).
//Luego, busca abajo el "caso" (case) que coincida con ese valor. 

switch (numeroDia){
    //Si numeroDia es igual a 1...
    case 1: 
        console.log("Es lunes!");
        break; //es el "freno de mano": importante! Le dice al programa: ya encontre lo que buscaba.
    //Si numeroDia es 2...
    case 2:
        console.log("Es martes!");
        break;//si olvidas el break, el programa va a seguir ejecutando lo de abajo (efecto cascada).
    //Si el numeroDia es 3...
    case 3:
        console.log("Es miércoles!");
        break;
    case 4:
        console.log("Es jueves!");
        break;
    case 5:
        console.log("Es viernes!");
        break;
    case 6:
        console.log("Es Sábado!");
        break;
    case 7:
        console.log("Es Domingo!");
        break;
    // El default (por defecto) 
    //funciona igual que el "else" final.
    //si el número no fue ninguno de los anteriores, entra acá
    default:
        console.log("Error, ingresa un número válido.");
        break;// En el default no hace falta colocar el "break" porque ya es el final.
}