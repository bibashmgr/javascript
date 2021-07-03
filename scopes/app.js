// JS SCOPES:
// determines the visibility of variables
// 1. Block Scope (ADDED AT ES6)
// 2. Funtion Scope
// 3. Global Scope

// Block Scope:
// let and const keyword provide block scope
// for example:
{
    let firstText = "Hello";
}
// firstText cannot be used here
// console.log(firstText);
// shows error

{
    const secondText = "Beautiful";
}
// secondText cannot be used here
// console.log(secondText);
// shows error

{
    var thirdText = "People"
}
//  thirdText can be used here
// console.log(thirdText);
// returns People


// Function scope
// variables declared inside a function cannot be used be used outside the function

function myFunctionOne() {
    var carName = "Volvo"; // Function Scope
}

function myFunctionTwo() {
    let carName = "Ferari"; // Function Scope
}

function myFunctionThree() {
    const carName = "Nano"; // Function Scope
}

// Global Scope:
// A varibale declared outside the function or block becomes GLOBAL

let carName = "Ford";
// code here can use carName

function myFunction() {
    // code here can also use carName
}

// var vs let vs const

for (let i = 0; i < 5; i++) {
    var x = 1;
    x = x + i;
    console.log(x);

    let y = 1;
    y = y + i;
    // console.log(y);

    const z = 1;
    // z = z + i;
    // console.log(z);
    // constant value cannot be reassigned
}

console.log(x);
// x => 5
// console.log(y);
// y not defined

// JAVASCRIPT SCRIPT MODE
// used to prevent from using undeclared variables
// it changes the bad syntax into real errors and shows them
// As an example, in normal JavaScript, mistyping a variable name creates a new global variable and the developer will not be aware of this. But in strict mode, this will throw an error, making it impossible to accidentally create a global variable.