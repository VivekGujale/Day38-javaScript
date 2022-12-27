let a = Math.floor(Math.random() * 900 + 100)
let b = Math.floor(Math.random() * 900 + 100)
let c = Math.floor(Math.random() * 900 + 100)
let d = Math.floor(Math.random() * 900 + 100)
let e = Math.floor(Math.random() * 900 + 100)
console.log("a = " + a)
console.log("b = " + b)
console.log("c = " + c)
console.log("d = " + d)
console.log("e = " + e)
if (a > b && a > c && a > d && a > e) {
    console.log("maximum a : " + a)
} else if (a < b && a < c && a < d && a < e) {
    console.log("minimum a : " + a)
}

if (b > a && b > c && b > d && b > e) {
    console.log("maximum b : " + b)
} else if (b < a && b < c && b < d && b < e) {
    console.log("minimum b : " + b)
}
if (c > a && c > b && c > d && c > e) {
    console.log("maximum c : " + c)
} else if (c < a && c < b && c < d && c < e) {
    console.log("minimum c : " + c)
}
if (d > a && d > b && d > c && d > e) {
    console.log("maximum d : " + d)
} else if (d < a && d < b && d < c && d < e) {
    console.log("minimum d : " + d)
}
if (e > a && e > b && e > c && e > d) {
    console.log("maximum e : " + e)
} else if (e < a && e < b && e < c && e < d) {
    console.log("minimum e : " + e)
}