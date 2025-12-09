const prompt = require('prompt-sync')();

//Declara dos variables con valores iniciales y luego intercambia su valores.
let a = 5
let b = 10

//mostrarlos antes del intercambio
console.log("Antes del intercambio: ");
console.log("a=", a);
console.log("b=", b);

//intercambiar los valores usando asignación simultánea
[a,b] = [b,a];

//mostrar los valores intercambiados
console.log("Después del intercambio: ");
console.log("a=", a);
console.log("b=", b);
