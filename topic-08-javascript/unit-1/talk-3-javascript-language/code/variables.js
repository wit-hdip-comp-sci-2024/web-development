const price = 200;
price === parseInt("200", 10); // true
typeof price; // "number"
200 / 3 // 66.66666666666667

const distance = 2.5;

let allowCredit = true;

if(price > 100) {
  allowCredit = false;
}

console.log(allowCredit); // false

// multiple declaration
const firstName = 'John', lastName = 'Doe';
let first = "John", last = "Doe";

// initialize later
var myName;
var myAge;

if(someStatementIsTrue) {
  myName = "John";
  myAge = 25;
} else {
    myName = "Doe";
    myAge = 30;
}


const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const started = true;
const stopped = false;

const dog = { name: "Spot", breed: "Dalmatian" };
console.log(dog.name); // Spot
typeof dog; // "object"
typeof dog.name; // "string"

const foods = ["apple", "banana", "cherry"];
console.log(foods[0]); // apple
typeof foods; // "object"
Array.isArray(foods); // true
foods[4] // undefined

// can mix types inside a single array
const mixed = [1, "apple", true, { name: "John" }, [1, 2, 3]];



 
