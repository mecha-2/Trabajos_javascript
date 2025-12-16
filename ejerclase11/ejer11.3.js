const prompt = require('prompt-sync')();

let numeroPositivo = parseInt(prompt("🔢 Ingrese un número positivo: "));

for (let i = 1; i <= numeroPositivo; i++) {
    console.log(`➡️  ${i}`);
}
