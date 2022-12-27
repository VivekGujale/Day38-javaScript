const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
let flag = true;
// looping through 2 to user input number
for (i = 2; i <= number - 1; i++)
    if (number % i == 0) {
        flag = false;
        break;
    }

// Check and display alert message
if (flag == true)
    console.log(number + " is prime")
else
    console.log(number + " is not prime")