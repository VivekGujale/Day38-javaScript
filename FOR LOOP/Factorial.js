const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
let factorial = 1
for (i = 1; i <= number; i++)
    factorial = (i * factorial)
console.log("Factorial of number is " + factorial)
