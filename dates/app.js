// javascript dates:
// object type
// creating date objects

// 1.
// creating date object with current date and time
const currentTime = new Date();
// console.log(currentTime);

// 2.
// creating date object with a specified date and time
const dateOne = new Date(2020, 05, 05, 23, 30, 10, 15);
// 7 numbers specify year, month, day, hour, minute, second & milisecond
// JS counts months from 0 to 11 where JAN is 0 & DEC is 11.
// console.log(dateOne);
const dateTwo = new Date(2020, 05, 05);
// 3 numbers specify year, month & day
// console.log(dateTwo);
const dateThree = new Date(0);
// returns Jan 1 1970 05:30:00
// only 1 number specify milisecond
// console.log(dateThree);
const dateFour = new Date(99, 07, 05);
const dateFive = new Date(9, 07, 05);
// one or two digit year will be interoreted as 19XX
// console.log(dateFour);
// console.log(dateFive);

// 3.
// creating date object from a date string
const d = new Date("October 13, 2014 11:13:00");
// console.log(d);

// Date methods:
// console.log(currentTime);

// console.log(currentTime.toString());
// while displaying date, browser automatically converted it to a string

// console.log(currentTime.toUTCString());
// converts date to a UTC string (i.e standard time)

// console.log(currentTime.toDateString());
// converts date to more readable format

// console.log(currentTime.toISOString());
// coverts date object into a string using ISO standard format (i.e yyyy-mm-ddThh:mm:ssZ)
// here, T separates date and time
// Z define UTC time. However, you can write +hh:mm or -hh:mm instead of Z

// console.log(currentTime.toLocaleDateString());
// converts date object into month/day/year format (e.g 10/24/2021) (also called short dates)

const dOne = new Date("10/03/2020");
// MM/DD/YYYY
// console.log(dOne);
const dTwo = new Date("2020/03/10");
// YYYY/MM/DD, this type of format are invalid in some browser
// console.log(dTwo);
// correct format is MM/DD/YYYY
// this type of format is called short dates

// Long Dates
// MMM DD YYYY or DD MMM YYYY
// month can be written in full or short form

// Date.parse() method:
// convert date into miliseconds
const msec = Date.parse(currentTime);
// console.log(msec);
const currTime = new Date(msec);
// console.log(currTime);

// GET METHODS:
// console.log(currentTime.getFullYear());
// gets the year as a 4-digit number (yyyy)
// console.log(currentTime.getMonth());
// gets the month as number (0-11)
// console.log(currentTime.getDate());
// gets the day as number (1-31)
// console.log(currentTime.getDay());
// gets the weekday (0-6)
// console.log(currentTime.getHours());
// gets the hour (0-23)
// console.log(currentTime.getMinutes());
// gets the minute (0-59)
// console.log(currentTime.getSeconds());
// gets the second (0-59)
// console.log(currentTime.getMilliseconds());
// gets the milisecond (0-999)
// console.log(currentTime.getTime());
// gets the time in miliseconds since Jan 01, 1970

// SET METHODS:
currentTime.setFullYear(2001);
// console.log(currentTime);
// sets the year
currentTime.setMonth(01);
// console.log(currentTime);
// sets the month
currentTime.setDate(01);
// console.log(currentTime);
// sets the day
currentTime.setHours(12);
// console.log(currentTime);
// sets the hour
currentTime.setMinutes(15);
// console.log(currentTime);
// sets the minute
currentTime.setSeconds(30);
// console.log(currentTime);
// sets the second
currentTime.setMilliseconds(69);
// console.log(currentTime);
// sets the milisecond
currentTime.setTime(1651260266565);
console.log(currentTime);
// sets the time using miliseconds