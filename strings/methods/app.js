// string methods

// 1. slice(start, end) method:
let strOne = "Apple, Banana, Kiwi";
// console.log(strOne.slice(7, 13));
// console.log(strOne.slice(-20, -6));

// 2. substring(start,end) method:
// cannot take negative value
// console.log(strOne.substring(7, 13));

// 3. substr(start, length) method:
// console.log(strOne.substr(0, 5));

// slice(), substring() & substr() are used to extract string.

// 4. replace(wordToBeReplaced, wordToBePlaced) method:
let strTwo = "Hello, This is America.";
// console.log(strTwo.replace("Hello", "Hey"));
// by default, it replaces only the first match.

let strThree = "Please visit Microsoft and Microsoft!";
// console.log(strThree.replace("Microsoft", "W3Schools"));
// to replace all matches, use /g flag
// console.log(strThree.replace(/Microsoft/g, "W3Schools"));
//by default, it is case sensitive too.
// console.log(strThree.replace("MICROSOFT", "W3Schools"));
// to replace a string case insensitive, use /i flag
// console.log(strThree.replace(/MICROSOFT/i, "W3Schools"));
// you can use both flag,like this way
// console.log(strThree.replace(/MICROSOFT/ig, "W3Schools"));

//5. toUpperCase() method:
let textOne = "What's up?";
// console.log(textOne.toUpperCase());

// 6. toLowerCase() method:
let textTwo = "Ayo, whats you doing?";
// console.log(textTwo.toLowerCase());

// 7. concat() method:
let firstName = "John";
let lastName = "Cena";
let fullName = firstName.concat(" ", lastName);
// console.log(fullName);
let fName = firstName + " " + lastName;
// console.log(fName);

// 8. trim() method:
// removes whitespace from both sides of a string
let textThree = "    hello, k cha?    ";
// console.log(textThree);
// console.log(textThree.trim());

// 9. charAt() method:
// returns the character at specified index
let stringOne = "Unimaginatively";
// console.log(stringOne.charAt(6));
// property access
// console.log(stringOne[6]);

// 10. charCodeAt() method:
// returns unicode of the character at specified index

// 11. split() method:
// used to convert string into array
let arrOne = stringOne.split("");
for (let index = 0; index < arrOne.length; index++) {
    // console.log(arrOne[index]);
}

// 12. indexOf() method:
// returns the index of first occurence of a specified text in a string
let strFour = "Please locate where 'locate' occurs!";
// console.log(strFour.indexOf("locate"));
// it also takes a second parameter as the starting position for search
// console.log(strFour.indexOf("locate", 15));

// 13. lastIndexOf() method:
// returns the index of last occurence of a specified text in a string
// console.log(strFour.lastIndexOf("locate"));
// it also takes a second parameter as the starting position for search
// console.log(strFour.lastIndexOf("locate", 15));

// 14. search() method:
// returns the index of specified text in a string
// doesnot take second parameter as indexOf() method
// more powerful than indexOf() method
// console.log(strFour.search("locate"));

// 15. includes() method:
// returns true if a string contains a specified value
// console.log(strFour.includes("locate"));

// 16. startWith() method:
// returns true if a string begins with a specified value
// console.log(strFour.startsWith("Please"));
// console.log(strFour.startsWith("please"));
// console.log(strFour.startsWith("Hello"));
// it also takes a second parameter as the starting position for search
// console.log(strFour.startsWith("where", 14));