// using var to declare variables

// example one:

var firstPerson = "Ram Bahadur";
// console.log(firstPerson);

// example two:

var firstPrice = 20;
var secondPrice = 10;
var totalPrice = firstPrice + secondPrice;
// console.log(totalPrice);

// variable name can use '$' and '_'

var $fName = "John";
var _lName = "Wick";
// console.log($fName + " " + _lName);

// you can resign a value to a declared variable

var firstMsg = "Hello World!";
// console.log(firstMsg);
// redeclaring the same variable
var firstMsg = "Hi, Whats up?"
    // console.log(firstMsg);

// you can declare many variables in one statement

var studentId = 101,
    studentName = "Shyam Bahadur",
    studentAge = 20;
// console.log(studentId);
// console.log(studentName);
// console.log(studentAge);

// using let keyword to declare variable

let secondPerson = "Sita Kumari";
// console.log(secondPerson);

// you cannot redeclare a variable using let keyword

let brandName = "Samsung";
// let brandName = "Apple";
// console.log(brandName);
// shows Syntax error in console

// var keywords are function-scoped whereas let keywords are block-scoped

// var
function countDown() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
    // Here, it will print 5 in the console
}

// countDown();

// let
function autoInc() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
    // Here, it will show that i isnot defined
}

// autoInc();

// so, programmers prefer let keyword instead of var.

//using const
// like let ,const are also block-scoped, but there values cannot be changed.

const myName = "Bibash Thapa Magar";

// console.log(myName);

function addPls() {
    for (const i = 0; i < 5; i++) {
        console.log(i);
    }
    // here it will show error
}

// addPls();

// const keywords are used to declare a consant rather than to declare variable
// but you can change the value of a constant array

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// You can change an element:
cars[0] = "Toyota";
// console.log(cars);

// You can add an element:
cars.push("Audi");
// console.log(cars);

// you can change the properties of a constant object

// You can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
// console.log(car);

// You can change a property:
car.color = "red";
// console.log(car);

// You can add a property:
car.owner = "Floyd";
// console.log(car);

// expermenting

// let
let x = 10;

{
    let x = 20;
    // console.log(x);
}

// console.log(x);

// var
var y = 10;

{
    var y = 20;
    // console.log(y);
}

// console.log(y);

// var

a = 100;
var a;
// console.log(a);

// let 

// b = 100;
// let b;
// console.log(b);
// it will show => Cannot access 'b'