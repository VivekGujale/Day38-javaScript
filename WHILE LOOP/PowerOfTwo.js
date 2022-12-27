const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
let i = 1
let total = 1
while (i <= number) {
    if (total == 256) {
        console.log("Value Exceeded from 256")
    } else {
        total = total * 2
    }
    i = i + 1
}
console.log("Power is " + total)