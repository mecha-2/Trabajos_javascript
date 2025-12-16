let matriz_gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

//a) Total de gastos en una semana 

function totalSemana(matriz_gastos, semanaNumero){
    let fila = semanaNumero - 1; 
    let suma = 0;

    for(let col = 0; col < matriz_gastos[fila].length; col++){
            suma += matriz_gastos[fila][col]
    }
    return suma; 
}
console.log("Semana 1: ", totalSemana(matriz_gastos, 1));

//b) total de un dia en particular

function totalDia(matriz_gasto, diaNumero){
    let col = diaNumero - 1; 
    let suma = 0; 


    for(let fila = 0; fila < matriz_gastos.length; fila ++){
        suma += matriz_gastos[fila][col]; 
    }
    return suma; 
}

console.log("Dia 5:", totalDia(matriz_gastos, 5));

//c) Total del mes 

function totalMes(matriz_gastos){
    let sumaMes = 0; 

    for(let fila = 0; fila <matriz_gastos.length; fila ++){
        for(let columna = 0; columna <matriz_gastos[fila].length; columna ++){
            sumaMes += matriz_gastos[fila][columna]
        }
    }
    return sumaMes
}

console.log("La suma de gastos mensual asciende a un total de:", totalMes(matriz_gastos));

//Semana con mas gastos y dia con mas gastos

function semanaYDiaMayor(matriz_gastos){
    let semanaMax = 0; 
    let maxTotalSem = -Infinity; 

    //Semana con mayor gasto
    for(let fila = 0; fila < matriz_gastos.length; fila ++){
        let suma = 0; 
        for(let col = 0; col < matriz_gastos[fila].length; col++){
            suma += matriz_gastos[fila][col]; 
        }
        if(suma > maxTotalSem){
        maxTotalSem = suma; 
        semanaMax = fila; 
        }
    }

    //Mayor gasto dentro de esa semana 
    let diaMax = 0; 
    let maxDiaValor = -Infinity; 

    for(let col = 0; col<matriz_gastos[semanaMax].length; col++){
        if(matriz_gastos[semanaMax][col]> maxDiaValor){
            maxDiaValor = matriz_gastos[semanaMax][col]; 
            diaMax = col; 
        }
    }
    return {
        semana: semanaMax + 1,
        totalSemana: maxTotalSem, 
        dia: diaMax+ 1,
        gastoDia: maxDiaValor
    }; 
}
console.log(semanaYDiaMayor(matriz_gastos));