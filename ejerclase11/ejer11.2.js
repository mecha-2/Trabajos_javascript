const prompt = require('prompt-sync')();

const color = prompt("Ingrese un color: rojo, amarillo o verde: ");

switch (color) {
    case 'rojo':
    console.log("Alto, no puedes avanzar.");
break; 
    case 'amarillo':
    console.log("Precaución. Prep{arate para avanzar.");
break;
    case 'verde':
    console.log("Avanza con seguridad.");
break;    
    default:
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
break;   
}