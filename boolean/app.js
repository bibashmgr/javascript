// Boolean values:
// true or false
// on or off
// yes or no
// but js use true or false as boolean values

// Boolean() function
// used to find if a expression is true or false
// console.log(10 > 9);
// console.log(10 < 9);

// if a variable has value then it returns true or else false
// console.log(Boolean("Hello"));
// console.log(Boolean(""));
// console.log(Boolean(21));
// console.log(Boolean());
// console.log(Boolean(1.23));
// console.log(Boolean(1 + 2 + 3));

// but for numbers,any value equal to zero or minus zero, returns false
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(-1));
// console.log(Boolean(1));

// boolean value of undefined is false
// console.log(Boolean(undefined));
// console.log(Boolean(0 / 1));

// boolean value of null is false
// console.log(Boolean(null));

// boolean value of NaN is false
// console.log(Boolean(null));

// converting a boolean value into object
let boolVal = true;
let anyObj = new Boolean(boolVal);
let anotherObj = new Boolean(boolVal);
// console.log(anyObj);
// console.log(typeof(anyObj));
// console.log(Boolean(boolVal == anyObj));
// return true, since both have same value
// console.log(Boolean(boolVal === anyObj));
// return false, since both have different types
// console.log(Boolean(anyObj == anotherObj));
// returns false, two objects cannot be compared