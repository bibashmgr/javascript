// this keyword
// it refers to the object it belongs to.

// In a method, this refers to the owner object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// here, fullname() is a method
// this refers person object
// console.log(person.fullName());

// When used alone, this refers to global object;
// In strict mode, this refers to global object;
let x = this;
// console.log(x);

// In a funtion, this refers to global object;
// But in strict mode inside a function, this refers undefined.
let myFunction = () => {
    return this;
};
// console.log(myFunction());

// In HTML event handlers, this refers to the HTML element that received the event;
let clickHereBtn = document.getElementById('click-here-btn');
let changeBG = () => {
    clickHereBtn.style.background = "blue";
}
clickHereBtn.addEventListener("click", changeBG);

// using this keyword;
let changeIt = (id) => {
    id.style.background = "green";
}

// call() and apply() are predefined methods
// they can be used to call an object method with another object as argument

const person1 = {
    fullNameIs: function() {
        return this.fName + " " + this.lName;
    }
}
const person2 = {
    fName: "John",
    lName: "Cena"
}
let nameIs = person1.fullNameIs.call(person2);
// console.log(nameIs);