const prompt = require("prompt-sync")({ sigint: true });
const day = parseInt(prompt("Enter a day : "));
const month = parseInt(prompt("Enter a month : "));
if ((month == 3 && day >= 20 && day <= 31))
    console.log("True");
else if ((month == 4 && day >= 1 && day <= 30))
    console.log("True");
else if ((month == 5 && day >= 1 && day <= 31))
    console.log("True");
else if ((month == 6 && day >= 1 && day <= 20))
    console.log("True");
else
    console.log("False");