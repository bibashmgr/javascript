// types of operators

// 1. Arithemetic Operators:
// used to perform arithmetic operation on numbers.
// the variables that are used in operations are called operands.

function arithOperation() {
    let a = 4 + 5; // addition
    // console.log(a);

    let b = 9 - 6; // subtraction
    // console.log(b);

    let c = 5 * 5; // multiplication
    // console.log(c);

    let d = 15 / 5; // division
    // console.log(d);

    let e = 2 ** 2 // exponentation
        // console.log(e);

    let f = 13 % 3 // modulus(gives remainder)
        // console.log(f);

    let g = 35; // increment
    g++;
    // console.log(g);

    let h = 70; // decrement
    h--;
    // console.log(h);
}

// arithOperation();


// 2. Assignment Operators:
// used to assign values to variables

function assignOperation() {
    let a = 5;
    let b = a; // b = 5;
    // console.log(b);

    let c = 10;
    let d = 20;
    c += d; // c = c + d;
    // console.log(c);

    let e = 2650;
    let f = 515;
    e -= f; // e = e - f;
    // console.log(e);

    let g = 84;
    let h = 4;
    g *= h; // g = g + h;
    // console.log(g);

    let i = 1650;
    let j = 20;
    i /= j; // i = i / j;
    // console.log(i);
}

// assignOperation();


// 3. Comparison Operators:
// used to compare two variablels;
// returns true or false;

function comOperation() {

    // equal to (==)
    let a = 5;
    let b = 6;
    if (a == b) {
        // console.log("equal");
    } else {
        // console.log("not equal");
    }

    let c = 5; // number
    let d = "5"; // string
    if (c == d) {
        // console.log("equal");
    } else {
        // console.log("not equal");
    } // returns equal

    // equal value and equal type (===)
    let e = 5; // number
    let f = "5"; // string
    if (e === f) {
        // console.log("equal");
    } else {
        // console.log("not equal");
    } // returns not equal

    // not equal to (!=)
    let g = 9;
    let h = 8;
    if (g != h) {
        // console.log("true");
    } else {
        // console.log("false");
    }

    let i = 10;
    let j = "10";
    if (i != j) {
        // console.log("true");
    } else {
        // console.log("false");
    }

    // not equal and not equal type (!==)
    let k = 10;
    let l = "10";
    if (k !== l) {
        // console.log("true");
    } else {
        // console.log("false");
    }
}

// comOperation();

// when comparing a string to a number ,js will convert the string to number and do the comparison.


// 4. String Operators:
// used to join two string literals

function strOperation() {
    let fName = "Bibash";
    let lName = "Magar";
    let fullName = fName + " " + lName;
    // console.log(fullName);

    // you can also add string and number

    let numVar = 9; // number
    let strVar = "0"; // string

    if (numVar < 10) {
        numVar = strVar + numVar;
    }

    // console.log(numVar);
}
strOperation();

// 5. Logical Operators:
// used to get the logic between variables

function logicalOperation() {
    // AND operator(&&);
    let a = 6;
    let b = 3;

    if (a < 10 && b > 1) {
        // console.log(true);
    }
    // OR operator(||)

    let p = 10;
    let q = 20;
    if (p > 10 || q > 10) {
        // console.log(true);
    }

    // ! operator(!)

    let x = 69;

    if (!(x == 69)) {
        // console.log(true);
    } else {
        // console.log(false);
    }
}

// logicalOperation();


// 6. Conditional Operators:
// it is also called ternary operator.
//it assigns a value according to the conditions.
//synatx:
// variableName = (condition) ? value1:value2;

function condOperation() {
    let age = 20;

    let canVote = (age > 18) ? "Eligible" : "Not Eligible";
    // console.log(canVote);

    let canJoin = (age > 18 && age < 21) ? "Yes" : "No";
    console.log(canJoin);
}

// condOperation();


// 7. Type Operators:
// returns the type of a variable

function typeOperation() {
    let x = "Hello";
    let y = typeof(x);
    // console.log(y);

}

// typeOperation();


// 8. Bitwise Operators:
// Bitwise operators run on 32 bit numbers
// So, it convert the 64bits number into 32 bits number and performed operation
// after operation, the result is converted into 64bits javascript numbers

// Bitwise AND(&)
// sets 1 when both bit are 1 else sets 0

// 1 => 00000001
// 2 => 00000010
// R => 00000000 => 0
// console.log(1 & 2);

// Bitwise OR(|)
// sets 1 when anyone of the bits is 1 else sets 0

// 5 => 00000101
// 6 => 00000110
// R => 00000111 => 7
// console.log(5 | 6);

//Bitwise XOR(^)
// sets 1 when only one of the two bits is 1 else sets 0

// 2 => 00000010
// 3 => 00000011
// R => 00000001 => 1
// console.log(2 ^ 3);

// Bitwise NOT(~)
// invert all bits
// difficult to understand
// I am skipping this