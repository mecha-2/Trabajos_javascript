const prompt = require("prompt-sync")(); 

let base = 5;
let altura = 2;
function areaTriangulo(base,altura){
    return (base * altura)/2;
};

console.log(areaTriangulo(base,altura));
