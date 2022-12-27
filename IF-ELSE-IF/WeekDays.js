const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
if (number == 1) {
    console.log("MONDAY")
} else if (number == 2) {
    console.log("TUESDAY")
} else if (number == 3) {
    console.log("WEDNESDAY")
} else if (number == 4) {
    console.log("THUSDAY")
} else if (number == 5) {
    console.log("FRIDAY")
} else if (number == 6) {
    console.log("SATURDAY")
} else if (number == 7) {
    console.log("SUNDAY")
} else console.log("Enter the valid numbers from 0 to 7 only")