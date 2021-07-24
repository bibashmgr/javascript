// Javascript Functions:

// traditional way

function firstFun() {
    console.log("This is my first function");
}
firstFun();

// alternative way

let secFun = function() {
    console.log("Another function in the console");
}
secFun();
// OR
let thirdFun = new Function("console.log('Number 03 function')");
thirdFun();

// Arrow function

let fourthFun = () => {
    console.log("My fourth function");
}
fourthFun();