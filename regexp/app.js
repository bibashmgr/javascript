// Regular expression:

// "/i"
// used to modify the search to be case-insensitive

let strOne = "Hello World";
// console.log(strOne.replace("world", "everyone"));
// wont be replaced since replace() method are case-insensitive
// console.log(strOne.replace(/world/i, "everyone"));
// make the replace method case-insensitive

// "/g"
// used to do a global search

let strTwoA = "Hello, Hi, Hey, Whats up?, Hello, Hi, Hey.";
let strTwoB = "Hello, Hi, Hey, Whats up?, hello, hi, hey.";
// console.log(strTwoA.replace("Hello", "Ayo"));
// first matched string will only be replaced
// console.log(strTwoA.replace(/Hello/g, "Ayo"));
// all the matched strings will be replaced
// console.log(strTwoB.replace(/Hello/g, "Ayo"));
// by default, replace() method are case-sensitive
// console.log(strTwoB.replace(/Hello/ig, "Ayo"));
// replaced all tha matched string even if they are case-different


// "/m"
// used for performing multiline search

let strThreeA = "whats up? K cha?\n K cha?";
// console.log(strThreeA.replace("K", "Kasto"));
// by default, replace() cannot do multiline search
// console.log(strThreeA.replace(/K/m, "Kasto"));
// do multiline search
// console.log(strThreeA.replace(/K/igm, "Kasto"));

// [abc]
// find any of the characters between the brackets
let textOne = "Is this all there is?";
let resultOne = textOne.match(/[h]/g);
// console.log(resultOne);
// [0-9]	
// find any of the digits between the brackets
let textTwo = "123456789";
let resultTwo = textTwo.match(/[1-4]/g);
// console.log(resultTwo);
// (x|y)	
// find any of the alternatives separated with '|'
let textThree = "re, green, red, green, gren, gr, blue, yellow";
let resultThree = textThree.match(/(red|green)/g);
// console.log(resultThree);