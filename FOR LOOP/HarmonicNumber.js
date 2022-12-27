const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
let sum = 0;
for (i = 1; i < number; i++) {
    sum = sum + 1 / i
}
console.log("Harmonic value = " + sum)