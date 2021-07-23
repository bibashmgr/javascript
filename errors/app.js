// try statement
// lets you test a block of code for errors
// usually used in the block of code which can return error when executed

// handle statement
// lets you handle the error
// the block of code inside it is executed if an error occurs in the try block

// try & handle statement come in pair
// Syntax:
// try{ // block of code to try } catch(error){ // block of code to handle errors }

// for example:

let testOneText = document.getElementById("test-one");

try {
    testOne.innerText = "No Error";
    // testOne is not defined
} catch (err) {
    testOneText.innerText = "Error";
    // since, an error occurs in try block, so it returns "Error"
}

// throw statement
// allows you to create custom error

function myFunctionOne() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo-one").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (er) {
        message.innerHTML = "Input is " + er;
    }
}

// finally statement 
// allows you to execute a block of code, after try and catch statement, regardless of the result
// Synatax:
// try { Block of code to try } catch(err) { Block of code to handle errors } finally { Block of code to be executed regardless of the try / catch result }

function myFunctionTwo() {
    const message = document.getElementById("p02");
    message.innerHTML = "";
    let x = document.getElementById("demo-two").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    } catch (err) {
        message.innerHTML = "Input " + err + ".";
    } finally {
        document.getElementById("demo-two").value = "";
    }
}

// error ==> object
// error has two property: name & message
// types of error:
// 1. EvalError
// 2. RangeError
// 3. ReferenceError
// 4. SyntaxError
// 5. TypeError
// 6. URIError

let num = 1;
try {
    console.log(num.toPrecision(500));
} catch (errOne) {
    console.log(errOne);
    //  RangeError: toPrecision() argument must be between 1 and 100
}

let x = 5;
try {
    x = y + 1;
} catch (errTwo) {
    console.log(errTwo);
    // ReferenceError: y is not defined
}

try {
    eval("console.log('Hello)");
} catch (errThree) {
    console.log(errThree);
    // SyntaxError: Invalid or unexpected token
}

try {
    console.log(num.toUpperCase());
} catch (errFour) {
    console.log(errFour);
    // TypeError: num.toUpperCase is not a function, since number cannot be converted into uppercase
}

try {
    console.log(decodeURI("%%%"));
} catch (errFive) {
    console.log(errFive);
    // URIError: URI malformed, since you cannot URI decode percent signs
}