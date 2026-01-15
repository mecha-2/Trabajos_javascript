let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let encontrado = nombres.find(function (nombre) {
    return nombre === 'Laura';
});

console.log(encontrado);