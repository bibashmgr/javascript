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

// JavaScript evaluates expressions from left to right. 
// Different sequences can produce different results:
let v = 16 + 4 + "Volvo";
// console.log(v);

let w = "Volvo" + 16 + 4;
// console.log(w);

// js has dynamic types.
// types of data in js:

// 1. Primitive data type
// a. Number
let a = 21;
let b = typeof(a);

// console.log(b);

let c = 35.5;
let d = typeof(c);
// console.log(d);

let firstNum = 123e4; // e indicates exponential notation
// console.log(firstNum);
// returns 1230000

let lastNum = 123e-4;
// console.log(lastNum);
// returns 0.0123


// b. String

let e = "Hello World";
let f = typeof(e);
// console.log(f);

let g = "";
let h = typeof(g);
// console.log(h);

let answer1 = "It's alright";
// console.log(answer1);

let answer2 = 'He is called "Johnny"';
// console.log(answer2);


// c. Boolean
// boolean has two valuse: true or false;

let fNum = 5;
let sNum = 6;
let thNum = 6;
let resultOne = (fNum == sNum);
let resultTwo = (sNum == thNum);
// console.log(resultOne);
// console.log(resultTwo);


// d. Undefined

let unknownVar;
// console.log(typeof(unknownVar));

// e. Null

// let hisAge = ;
// console.log(typeof(hisAge));
// shows syntax error

let hisName = "";
// console.log(typeof(hisName));
// returns string

// 2. Non-primitive data type

// a. Array
//syntax:
// variablename = [value1, value2, ...];

const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof(cars));
// js shows array as object

// b. Object
// syntax:
// variablename = { name1:value1, name2:value2, ... };

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// console.log(typeof(person));
// returns object

// c. Function
function myFunction() {
    // console.log("Hello");
}

let z = typeof(myFunction);
// console.log(z);
// returns function