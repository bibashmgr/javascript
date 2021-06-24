// for loop:

function loopOne() {
    let games = ["Apex Legends", "Call Of Duty", "GTA V", "Valorant"];

    for (let i = 0; i < games.length; i++) {
        console.log(games[i]);
    }
}

// loopOne();

function loopTwo() {
    let charOne = "*";
    for (let i = 0; i < 5; i++) {
        console.log(charOne);
        charOne = charOne + "*";
    }
}

// loopTwo();

// for(statement1; statement2; statement3){ //code }
// js dont care about the statement1.
// you can initiate multiple values in statement1 

function loopThree() {
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i, len;
    for (i = 0, len = cars.length; i < len; i++) {
        console.log(cars[i]);
    }
}

// loopThree();

// you can omit statement1 if you have already initiate the values.

function loopFour() {
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i = 0;
    let len = cars.length;
    for (; i < len; i++) {
        console.log(cars[i]);
    }
}

// loopFour();

// Also, statement2 is optional
// but not including statement2 can bring problem
// statement is used to end the loop,
// so if not included,loop will never end
// which may crash the browser

// similarly,statement3 can also be omitted

function loopFive() {
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let len = cars.length;
    let i = len - 1;
    for (; i >= 0;) {
        console.log(cars[i]);
        i--;
    }
}

// loopFive();


// For/in LOOP:
// syntax:
// for(key in object){ code }

function loopSix() {
    const person = { fname: "John", lname: "Doe", age: 25 };

    let text = "";
    for (let x in person) {
        text += person[x];
    }
    console.log(text);
}

// loopSix();

// For/of LOOP:
// syntax:
// for(key of iterable object){ code }

function loopSeven() {
    const person = ["John", "Doe", 25];

    let text = "";
    for (let x of person) {
        text += x;
    }
    console.log(text);
}

loopSeven();