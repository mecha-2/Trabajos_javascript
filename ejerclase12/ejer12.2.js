const prompt = require("prompt-sync")(); 

let password = 1234; 

let intentos = 3; 

do{
    password = parseInt(prompt("Por favor ingrese su password o contraseña numerica de 4 digitos: "));
    if(password !== 1234){ 
    intentos --; 
    console.log(`Password incorrecto. Intentos restante: ${intentos}`);
    
    }
}while(password !== 1234 && intentos > 0);

if(password === 1234){
    console.log("Password correcta!");
}else{
    console.log("Ha habido muchos intentos, su cuenta ha sido bloqueada.");
    
}