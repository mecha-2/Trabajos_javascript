let palabras = ['sol', 'luna', 'estrella'];

let totalLetras = palabras.reduce(function (acumulador, palabra) {
    return acumulador + palabra.length;
}, 0);

console.log(totalLetras);