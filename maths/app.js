// javascript math object:
// used to perform mathematical operation on numbers
// syntax for any math property is: Math.property

// console.log(Math.E);
// returns Euler's number (i.e 2.718282)
// console.log(Math.PI);
// retruns PI (i.e 3.141593)
// console.log(Math.SQRT2);
// returns the square root of 2
// console.log(Math.SQRT1_2);
// returns the square root of 1/2
// console.log(Math.LN2);
// returns the natural logarithm of 2
// console.log(Math.LN10);
// returns the natural logarithm of 10
// console.log(Math.LOG2E);
// returns base 2 logarithm of E
// console.log(Math.LOG10E);
// returns base 10 logarithm of E

// MATH METHODS:
// 1. Math.round(x):
// returns x rounded to its nearest integer
// console.log(Math.round(4.9));
// returns 5
// console.log(Math.round(4.7));
// returns 5
// console.log(Math.round(4.5));
// returns 5
// console.log(Math.round(4.3));
// returns 4
// console.log(Math.round(4.1));
// returns 4
// console.log(Math.round(-4.2));
// returns -4

// 2. Math.ceil(x):
// returns x rounded up to its nearest integer
// console.log(Math.ceil(4.9));
// returns 5
// console.log(Math.ceil(4.7));
// returns 5
// console.log(Math.ceil(4.5));
// returns 5
// console.log(Math.ceil(4.3));
// returns 5
// console.log(Math.ceil(4.1));
// returns 5
// console.log(Math.ceil(-4.2));
// returns -4

// 3. Math.floor(x):
// returns x rounded down to its nearest integer
// oppposite of Math.ceil(x)
// console.log(Math.floor(4.9));
// returns 4
// console.log(Math.floor(4.7));
// returns 4
// console.log(Math.floor(4.5));
// returns 4
// console.log(Math.floor(4.3));
// returns 4
// console.log(Math.floor(4.1));
// returns 4
// console.log(Math.floor(-4.2));
// returns -5

// 4. Math.trunc(x):
// returns the integer part
// console.log(Math.trunc(4.9));
// returns 4
// console.log(Math.trunc(4.7));
// returns 4
// console.log(Math.trunc(4.5));
// returns 4
// console.log(Math.trunc(4.3));
// returns 4
// console.log(Math.trunc(4.1));
// returns 4
// console.log(Math.trunc(-4.2));
// returns -4

// 5. Math.sign(x):
// returns +1, 0 or -1 according to x
// console.log(Math.sign(4));
// console.log(Math.sign(0));
// console.log(Math.sign(-4));

// 6. Math.pow(x, y):
// returns the value of x to the power of y
// console.log(Math.pow(2, 8));

// 7. Math.sqrt(x):
// returns the square root of x
// console.log(Math.sqrt(452));

// 8. Math.abs(x):
// returns the absolute value of x
// console.log(Math.abs(-51515));

// 9. Math.sin(x):
// returns the sine value of given angle x
// console.log(Math.sin(30));
//  60 is in radians
// console.log(Math.sin(30 * Math.PI / 180));
// (60*PI)/180

// 10. Math.cos(x):
// returns the cosine value of given angle x
// console.log(Math.cos(60 * Math.PI / 180));

// 11. Math.tan(x):
// returns the tan value of given angle x
// console.log(Math.tan(45 * Math.PI / 180));

// 12. Math.max(x,y,z,...n) & Math.min(x,y,z,...n)
// returns the highest and lowest value in list of argumnets
// console.log(Math.max(40, 50, 20, 10, 30));
// console.log(Math.min(40, 50, 20, 10, 30));

// 13. Math.random():
// returns value between 0 to 1
// console.log(Math.floor(Math.random() * 10));