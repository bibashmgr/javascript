// javascript arrays:

// declaration of array:

// 1.
let country = ["Nepal", "India", "USA", "Japan"];
// console.log(country);
// console.log(country[0]);

// 2.
let fruits = [];
fruits[0] = "Strawberry";
fruits[1] = "Apple";
fruits[2] = "Banana";
// console.log(fruits);

// 3.
let artist = new Array("Laure", "DonG", "Albatross", "Vten");
artist[2] = "Yodda";
//chnages the item
// console.log(artist);
for (let counter = 0; counter < artist.length; counter++) {
    // console.log(artist[counter]);
}
// but avoid using new Array()

// how to know a array is an array not an object
// typeof operator returns object when check on an array

// Solution 1:
// To solve this problem ECMAScript 5 defines a new method Array.isArray():
// console.log(Array.isArray(fruits));
// returns true if array

// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
// console.log(fruits instanceof Array);

// 1. length property:
// returns the length of an array

// console.log(fruits.length);
// returns 3
// console.log(fruits[fruits.length - 1]);
// returns banana

// 2. sort() method:
// sorts the items of an array in ascending order

// console.log(fruits.sort());
// console.log(fruits);
// so it changes the order even the array isnot called

// 3. toString() method:
// convert the array into string of array values separated by commas
// console.log(fruits.toString());

// 4. join() method:l
// joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator.
// console.log(fruits.join("+"));
// console.log(fruits.join("/"));
// console.log(fruits.join("||"));

// 5. push() method:
// push items to an array at the end
fruits.push("Pineapple");
// console.log(fruits);

// Adding elements with high indexes can create undefined "holes" in an array.
fruits[5] = "Orange";
// console.log(fruits);
// creates an item on index 4 having undefined value

// 6. pop() method:
// removes the last element from an array
fruits.pop();
fruits.pop();
// console.log(fruits);

// 7. shift() method:
// same as pop() method,but removes the first element and shifts all other elements to lower index
// console.log(fruits);
fruits.shift();
// console.log(fruits.shift());
// retruns the value that was shifted out
// console.log(fruits);

// 8. unshift() method:
// same as push, but it adds a new element to the beggining of an array and unshifts the older elements

fruits.unshift("Orange");
// console.log(fruits.unshift("Orange"));
// returns the length of the new array formed, so returns 4
fruits.unshift("Strawberry");
// console.log(fruits.unshift("Strawberry"));
// returns 5
// console.log(fruits);

// Note: if you dont know the index of the array while adding new elements using their index number, then you can use the following way to do so,
fruits[fruits.length] = "Kiwi";
// console.log(fruits);

// 9. splice() method:
// can be used to add as well as remove elements to/from an array
// splice() method dont leave holes in an array
// console.log("Original Array: " + fruits);
fruits.splice(2, 2, "Watermelon", "Grapes");
// here, 1st parameter defines the position where new elements should be spliced in
// 2nd parameter defines how many elements should be removed
// rest of the parameters define the new elements that should be added which are optional too.
// console.log("New Array: " + fruits);
fruits.splice(0, 0, "Apple", "Banana");
// console.log("New Array: " + fruits);
fruits.splice(7, 1);
// console.log(fruits.splice(7, 1));
// returns the removed elements, here it returns "Kiwi"
// console.log("New Array: " + fruits);

// 10. concat() method:
// used to merge two or more existing arrays
let greetings = ["Hi"];
let anAdj = ["Good"];
let partOfDay = ["Morning"];

let newArray = greetings.concat(anAdj, partOfDay);
// console.log(newArray);

// 11. slice() method:
// slices out a piece of an array into a new array
// it takes two parameter:
// 1st parameter defines the index from where the opertion begin
// 2nd parameter defines up to where the operation should end (here, the end  element willnot be included)
// console.log(fruits);
let partOne = fruits.slice(1);
// console.log(partOne);
let partTwo = fruits.slice(2, 5);
// console.log(partTwo);

// 12. reverse() method:
// reverses the elements in an array(sort the array in descending order)
// console.log(fruits.sort());
// sort() method sorts the array alphabetically
// console.log(fruits.reverse());
// reverse() method reverse the order of the array

// Numeric Sorting:
// sort() & reverse() method are used to sort strings only.
// so for sorting arrays having numeric values, you can pass compare function as parameter through sort() method,
let numArr = [40, 20, 10, 30, 50];
// console.log(numArr);
numArr.sort(function(a, b) { return a - b });
// sorts the array in ascending order
// console.log(numArr);
numArr.sort(function(a, b) { return b - a });
// sorts the array in descending order
// console.log(numArr);
// At compare function,
// if it gives negative value, no changes 
// if it gives zero value, no changes
// if it gives positive value, exchage a & b

// sorting array in random order
// for numeric type array,
let numArrTwo = [4, 5, 2, 1, 3];
// console.log(numArrTwo);
numArrTwo.sort(function(a, b) { return (0.5 - Math.random()) });
// console.log(numArrTwo);
// here, Math.random() returns value from 0 to 1, so the result will be either negative or positive or zero
// for string type array,
let school = ["BSBS", "GBS", "SAV", "KEF", "RAS"];
// console.log(school);
school.sort(function(a, b) { return (0.5 - Math.random()) });
// console.log(school);

// The Fisher Yates Method,
let points = [40, 100, 1, 5, 25, 10];
// console.log(points);
for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}
// console.log(points);

// Find the Highest (or Lowest) Array Value
// There are no built-in functions for finding the max or min value in an array.
// However, after you have sorted an array, you can use the index to obtain the highest and lowest values.
points.sort(function(a, b) { return a - b });
// console.log(points[0]);
// gives lowest value
// console.log(points[points.length - 1]);
// gives highest value

// alternative way => using Math.max.apply() || Math.min.apply()
// to find highest value in array
// console.log(Math.max.apply(null, points));
// to find lowest value in array
// console.log(Math.min.apply(null, points));

// HOME MADE METHOD:
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
// console.log(myArrayMax(points));
// This function loops through an array comparing each value with the highest value found.
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
// console.log(myArrayMin(points));
// This function loops through an array comparing each value with the lowest value found.

// array can also contain object inside it
// sorting of array having object as values
// comapring numeric properties
const vehicles = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

function displayVehicles() {
    let objArr =
        vehicles[0].type + " " + vehicles[0].year + " , " +
        vehicles[1].type + " " + vehicles[1].year + " , " +
        vehicles[2].type + " " + vehicles[2].year;
    return objArr;
}
// console.log(displayVehicles());
// sorting in ascending order, based on numeric properties
vehicles.sort(function(a, b) { return a.year - b.year });
// console.log(displayVehicles());
// sorting in descending order, based on numeric properies
vehicles.sort(function(a, b) { return b.year - a.year });
// console.log(displayVehicles());
// comparing strings properties
// sorting in ascending order, based on string properties
vehicles.sort(function(a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});
// console.log(displayVehicles());
// sorting in descending order, based on string properties
vehicles.sort(function(a, b) {
    let x = b.type.toLowerCase();
    let y = a.type.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});
// console.log(displayVehicles());

// ---------------
// ARRAY ITERATION
// ---------------

// 13. forEach() method:
// calls a function for each array element
// forEach function takes three arguments: value, index & array.

let text = "";
fruits.forEach(myFunction);
// console.log(text);
function myFunction(value, index, array) {
    if (index === 0) {
        text = text + value;
    } else {
        text = text + ", " + value;
    }
}

// 14. map() method:
// creates a new array by performing a function on each array element
// it creates holes in the new array formed when a condition is passed
let textOne = "";
let arrHoles = [];
let countDown = 0;
let numOne = [45, 4, 9, 16, 25];
let numTwo = numOne.map(mapFun);
numTwo.sort();
numTwo.reverse();
toDelHoles();
// console.log(numTwo);
function mapFun(value, index, array) {
    if (value < 25) {
        return value;
    } else {
        arrHoles.push(index);
    }
}
// for deleting holes in array(i.e undefine value)
function toDelHoles() {
    for (let index = 0; index < arrHoles.length; index++) {
        countDown = countDown + 1;
    }
    numTwo.splice(0, countDown);
}

// 15. filter() method:
// creates a new array  with array elements that passes a test.
// it doesnot create holes in new array formed
let numThree = [5, 20, 18, 46, 75, 33, 69];
let numFour = numThree.filter(filterFun);
// console.log(numFour);
function filterFun(value, index, array) {
    if (value < 50) {
        return value;
    }
}

// 16. reduce() method:
// runs a function on each array element to produce (reduce it to) a single value.
// works from left-to-right in the array
let numFive = numThree.reduce(totalSum);
// console.log(numFive);
let numSix = numThree.reduce(totalSum, 100);
// we can also pass inital value
// console.log(numSix);
function totalSum(total, value, index, array) {
    return total + value;
}

// 17. reduceRight() method:
// same as reduce() method but works from right-to-left
let numSeven = numThree.reduceRight(totalSum);
// console.log(numSeven);
let numEight = numThree.reduceRight(totalSum, 100);
// we can also pass inital value
// console.log(numEight);
function totalSum(total, value, index, array) {
    return total + value;
}

// 18. every() method:
// checks if all array values pass a test.
// returns true or false
let numNine = numThree.every(isLegal);
// console.log("Legal group? => " + yesOrNo(numNine));
function isLegal(value, array, index) {
    return value > 18;
}
// for yes or no
function yesOrNo(num) {
    if (num === false) {
        return "No";
    } else {
        return "Yes";
    }
}

// 19. some() method:
// checks if some array values pass a test.
let numTen = numThree.some(isLegal);
// console.log("Some people are legal? => " + yesOrNo(numTen));

// 20. indexOf() method:
// searches an array for an element value and returns its position.
// Array.indexOf() returns -1 if the item is not found.
// If the item is present more than once, it returns the position of the first occurrence.
// console.log(fruits);
// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf("Kiwi"));s
// indexOf(item, start) takes two parameter
// 1st parameter is the item to search for
// 2nd parameter is optional and defines where to start the search
// console.log(fruits.indexOf("Grapes", 4));
// console.log(fruits.indexOf("Grapes", 5));
// console.log(fruits.indexOf("Grapes", 6));

// 21. lastIndexOf():
// same as indexOf() method but returns the position of the last occurrence of the specified element.
fruits.push("Apple");
// console.log(fruits);
// console.log(fruits.lastIndexOf("Apple"));
fruits.pop();
// console.log(fruits);

// 22. includes() method:
// introduced in ES6
// same as indexOf() method but allows to check for NaN values.
// returns true or false instead of position
// console.log(fruits.includes("Banana"));

// 23. find() method:
// returns the value of the first array element that passes a test function.
let numElv = numThree.find(checkLegal);
// console.log(numElv);s
// returns 20
function checkLegal(value, index, array) {
    return value > 21;
}

// 24. findIndex() method:
// returns the index of the first array element that passes a test function.
let numTwlv = numThree.findIndex(checkLegal);
// console.log(numTwlv);

// 25. Array.from() method:
// returns an Array object from any object with a length property or any iterable object.
// console.log(Array.from("ABCDEFG"));

// 26. Array.keys() method:
// returns an Array Iterator object with the keys of an array.
fruits[8] = "Kiwi";
console.log(fruits);
let keys = fruits.keys();
let textHo = "";
for (let x of keys) {
    textHo += x + " ";
}
// console.log(textHo);
// returns 0 to 8 (i.e returns the number of element present in the array)