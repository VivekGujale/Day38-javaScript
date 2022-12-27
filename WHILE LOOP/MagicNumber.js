const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt("Enter a number : "));
var low = 1
var high = 100
while (low != high) {
    mid = (low + high) / 2
    console.log("Enter 1 if number is between " + low + " - " + mid +
        "\nEnter 2 if number is between " + (mid + 1) + " - " + high)
    mid = (low + high) / 2
    if (number == 1)
        high = mid
    else low = mid + 1
}
return low
