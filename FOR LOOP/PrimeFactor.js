const prompt = require("prompt-sync")({ sigint: true });
const number = parseInt(prompt("Enter a number : "));
for (i = 2; i * i <= number; i++) {
    while (number % i == 0) {
        console.log("" + i)
        number = number / i
    }
}
//To find biggest factor
if (number > 1) {
    console.log(" " + number);
} else {
    console.log();
}