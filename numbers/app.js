// js numbers:
// they are stored as double precison 64-bits floating point numbers.
// (0 - 51) 52-bits => fraction, (52 - 62) 11-bits => exponent, (63) 1-bit => sign

// js interpreter works from left to right

let a = 20;
let b = 30;
let c = "50";
// console.log(a + b + c); 
// result is 5050

let aa = 20;
let bb = "30";
let cc = 50;
// console.log(aa + bb + cc); 
// result is 203050

let aaa = "20";
let bbb = 30;
let ccc = 50;
// console.log(aaa + bbb + ccc);
// result is 203050

// js will try to convert string to number in all numeric operations.

let x = "100";
let y = "10";
// console.log(x - y);
// result is 90
// console.log(x * y);
// result is 1000
// console.log(x / y);
// result is 10

// NaN (Not a Number)
// typeof NaN returns number

let fNum = "Apple";
let sNum = 10;
// console.log(fNum / sNum);
// result is NaN

// isNaN(), a js function used to determine whether a value is number or not

function checkNum() {
    if (isNaN(fNum)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// checkNum();

// Infinity(or -Infinity), a value that will be returned if you calculate a number outside the largest possible number
// Infinity(or -Infinity) is of number type.

let myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
    // console.log(myNumber);
}

// console.log(2 / 0);
// returns Infinity
// console.log(-2 / 0);
// returns -Infinity

// you can use toString(base) to convert the base of a number
let myNum = 32;
// console.log(myNum.toString(2));
// returns 100000
// console.log(myNum.toString(10));
// returns 32
// console.log(myNum.toString(16));
// returns 20
// console.log(myNum.toString(32));
// returns 10

// numbers can be objects too

let numThree = 123;
// this is number
let objOne = new Number(123);
// this is object

// console.log(numThree);
// console.log(objOne);