const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter the number from 1,10,100,1000,10000\n"))
if (number == 1) {
    console.log("UNIT")
} else if (number == 10) {
    console.log("TEN")
} else if (number == 100) {
    console.log("HUNDRED")
} else if (number == 1000) {
    console.log("THOUSAND")
} else if (number == 10000) {
    console.log("TEN THOUSAND")
}