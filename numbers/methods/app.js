// Numeric Methods:

// 1. tostring() method:
// used to convert number into string
let x = (24).toString();
// console.log(typeof(x));

// when we send a parameter through it like base numbers (2,8,10,16), it will convert the number into that number system
let y = 21;
// console.log(y.toString(2));
// returns 10101
// console.log(y.toString(8));
// returns 25
// console.log(y.toString(10));
// returns 21
// console.log(y.toString(16));
// returns 15

// 2. toExponential() method:
// returns a rounded string value using exponential notation(like 1.2 * 10 to the power of 4)
let a = 123.456;
// console.log(a.toExponential());
// returns 1.23456e+2
// console.log(typeof(a.toExponential()));
//retruns string
// parameter defines the number of characters behind decimal point
// console.log(a.toExponential(-1));
// shows error, argument must be between 0 to 100
// console.log(a.toExponential(0));
// returns 1e+2
// console.log(a.toExponential(1));
// returns 1.2e+2
// console.log(a.toExponential(2));
// returns 1.23e+2
// console.log(a.toExponential(3));
// returns 1.235e+2
// console.log(a.toExponential(4));
// returns 1.2346e+2
// console.log(a.toExponential(5));
// returns 1.23456e+2
// console.log(a.toExponential(6));
// returns 1.234560e+2
// console.log(a.toExponential(7));
// returns 1.2345600e+2

// 3. toFixed() method:
// depends on the length of the decimal part
// returns a string value with specified number of decimals
// a = 123.456
// console.log(a.toFixed());
//returns 123
// console.log(typeof(a.toFixed()));
// returns string
// console.log(a.toFixed(-1));
// shows error, argument must be between 0 to 100
// console.log(a.toFixed(0));
// returns 123
// console.log(a.toFixed(1));
// returns 123.5
// console.log(a.toFixed(2));
// returns 123.46
// console.log(a.toFixed(3));
// returns 123.456
// console.log(a.toFixed(4));
// returns 123.4560
// console.log(a.toFixed(5));
// returns 123.45600


// 4. toPrecision() method:
// depends on the length of the number
// returns a string value with specified length
// a = 123.456
// console.log(a.toPrecision());
// returns 123.456
// console.log(a.toPrecision(0));
// shows error, argument must be between 1 to 100
// console.log(a.toPrecision(1));
// returns 1e+2
// console.log(a.toPrecision(2));
// returns 1.2e+2
// console.log(a.toPrecision(3));
// returns 123
// argument must be equal or greater than the length of fractional part to show legit value
// console.log(a.toPrecision(4));
// returns 123.5
// console.log(a.toPrecision(5));
// returns 123.46
// console.log(a.toPrecision(6));
// returns 123.456
// console.log(a.toPrecision(7));
// returns 123.4560


// 5. valueOf() method:
// used to convert a number object into a number literal

let b = new Number(2.2);
// console.log(b);
// console.log(b.valueOf());
//  returns 2.2

// 6. Number() method:
// used to convert a variable into number
// console.log(Number(true));
// returns 1
// console.log(Number("420"));
// returns 420
// console.log(Number("2.5"));
// returns 2.5
// console.log(Number("1 2"));
// returns NaN
// console.log(Number("1,2"));
// returns NaN
// console.log(Number("apple"));
// returns NaN
// console.log(Number("10 years"));
// returns NaN
// console.log(Number("age 20"));
// returns NaN

// 7. parseInt() method:
// returns whole number only
// space are allowed and only first number is returned
// console.log(parseInt(true));
// returns NaN
// console.log(parseInt("420"));
// returns 420
// console.log(parseInt("2.5"));
// returns 2
// console.log(parseInt("1 2"));
// returns 1
// console.log(parseInt("1,2"));
// returns 1
// console.log(parseInt("apple"));
// returns NaN
// console.log(parseInt("10years"));
// returns 10
// console.log(parseInt("10 years"));
// returns 10
// console.log(parseInt("age 20"));
// returns NaN

// 8. parseFloat() method:
// returns floating point number
// space are allowed and only first number is returned
// console.log(parseFloat(true));
// returns NaN
// console.log(parseFloat("420"));
// returns 420
// console.log(parseFloat("2.5"));
// returns 2.5
// console.log(parseFloat("1 2"));
// returns 1
// console.log(parseFloat("1,2"));
// returns 1
// console.log(parseFloat("apple"));
// returns NaN
// console.log(parseFloat("10years"));
// returns 10
// console.log(parseFloat("10 years"));
// returns 10
// console.log(parseFloat("age 20"));
// returns NaN