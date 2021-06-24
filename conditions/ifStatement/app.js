// if conditional statements:

// 1. If statement:
let currentDate = new Date();
let currentHour = currentDate.getHours();

function conditionOne() {
    if (currentHour < 12) {
        console.log("Good Morning")
    }
}
// conditionOne();

// 2. If else statement:
function conditionTwo() {
    if (currentHour < 18) {
        console.log("Good Day");
    } else {
        console.log("Good Night");
    }
}

// conditionTwo();

// 3. If else if statement:
function conditionThree() {
    if (currentHour > 6 && currentHour < 12) {
        console.log("Good Morning");
    } else if (currentHour >= 12 && currentHour <= 4) {
        console.log("Good Afternoon");
    } else if (currentHour > 4 && currentHour < 8) {
        console.log("Good Evening");
    } else {
        console.log("Good Night");
    }
}

// conditionThree();