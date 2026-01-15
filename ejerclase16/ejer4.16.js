let numeros = [1, 2, 3, 4];

let sumaTotal = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
});

console.log(sumaTotal);