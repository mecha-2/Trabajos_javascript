const prompt = require("prompt-sync")(); 

let nombres = []; 

for(let i = 0; i < 5; i ++){
    let nombreIngresado = prompt(`Ingrese el nombre deseado ${i + 1}:  `); 
    nombres[i] = nombreIngresado; 
}; 

let nombreBuscado = prompt("Ingrese un nombre para revisar si se encuentra en el listado: "); 

if(nombres.includes(nombreBuscado)){
    console.log(`El nombre ${nombreBuscado} se encuentra en el listado!`);

}else{ 
    console.log(`El nombre ${nombreBuscado} no se encuentra en el listado...`);
    
}

console.log(`Los nombres ingresados fueron: ${nombres}`);