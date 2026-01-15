let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let nombresConA = nombres.filter(function (nombre) {
    return nombre[0] === 'A';
});

console.log(nombresConA);