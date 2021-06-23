// Note:
// when adding a number and a string, js will treat the number as string

let x = "20";
let y = "10";

// console.log(x + y);
// js will treat them both as string

if (x > y) {
    // console.log("x is greater");
} else {
    // console.log("y is greater");
}

// js has dynamic types.
// types of data in js:

// 1. Primitive data type
// a. Number
let a = 21;
let b = typeof(a);

console.log(b);

let c = 35.5;
let d = typeof(c);
console.log(d);
// b. String
// c. Boolean
// d. Undefined
// e. Null

// 2. Non-primitive data type
// a. Array
// b. Object

// c. Function
function myFunction() {
    // console.log("Hello");
}

let z = typeof(myFunction);
// console.log(z);