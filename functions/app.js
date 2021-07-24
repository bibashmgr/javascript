// Javascript Functions:

// traditional way

function firstFun() {
    console.log("This is my first function");
}
// firstFun();

// alternative way

let secFun = function() {
        console.log("Another function in the console");
    }
    // secFun();
    // OR
let thirdFun = new Function("console.log('Number 03 function')");
// thirdFun();

// Arrow function

let fourthFun = () => {
        console.log("My fourth function");
    }
    // fourthFun();

// parameter are the variables used during function definition
// arguments are the values that are passed when the function is called or invoked.

// self-invoking functions:
// Function will execute automatically if the expression is followed by ().
// You have to add parentheses around the function to indicate that it is a function expression.
// for example:

(function() {
    console.log("Hello!");
})();

// using this keyword
const introd = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// console.log(introd.fullName());

// call() method:
// It can be used to invoke a method with an owner object as an argument.
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const intro = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
// console.log(person.fullName.call(person1));
// This will return "Mary Doe, Pokhara, Nepal":
// console.log(intro.fullName.call(person2, "Pokhara", "Nepal"));

// apply() method:
// similar to call()
// the only difference is that call() takes arguments separately but apply takes arguments as an array
const guy = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const info = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const guy1 = {
    firstName: "John",
    lastName: "Cena"
}
const guy2 = {
    firstName: "Mary",
    lastName: "Cena"
}

// This will return "John Cena":
// console.log(person.fullName.apply(guy1));
// This will return "Mary Cena, Pokhara, Nepal":
// console.log(info.fullName.apply(guy2, ["Pokhara", "Nepal"]));

// Math.max()
// two ways to use Math.max()
// 1.
console.log(Math.max(1, 2, 3));
// 2.
console.log(Math.max.apply(null, [1, 2, 3]));