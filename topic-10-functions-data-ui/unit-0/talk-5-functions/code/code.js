

console.log(f(0));  // Output: 3
console.log(f(1));  // Output: 5
console.log(f(-2)); // Output: -1



function add(a, b) {
    return a + b;
}

// Example usage:
console.log(add(3, 5)); // Output: 8
console.log(add(-2, 7)); // Output: 5


function square(x) {
    return x * x;
}

// Example usage:
console.log(square(3)); // Output: 9
console.log(square(5)); // Output: 25


const isEven = function(number) {
    return number % 2 === 0;
}

const result = isEven();

console.log(result); // false

// Example usage:
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage:
console.log(fahrenheitToCelsius(32)); // Output: 0
console.log(fahrenheitToCelsius(68)); // Output: 20



const car = {
    brand: "ford",
    model: "focus",
    beep: function(){
        console.log("beep")
    }
}

car.beep() // prints: beep

const colours = ["red", "green", "blue"];

colours.forEach(function(colour){
    console.log(`My favourite colour is ${colour}`)
});


// Define a function to calculate the total cost of items in the shopping cart
function calculateTotalCost(items) {
    let total = 0;

    // Iterate through each item in the shopping cart
    items.forEach(item => {

        total += item.price; // Add the price of each item to the total
    });

    return total;
}

// Define a function to apply a discount to the total cost
function applyDiscount(total, discountPercentage) {
    // Calculate the discount amount
    const discountAmount = total * (discountPercentage / 100);

    // Apply the discount to the total cost
    const discountedTotal = total - discountAmount;

    return discountedTotal;
}

// Sample shopping cart items
const shoppingCart = [
    { name: 'Shirt', price: 20 },
    { name: 'Pants', price: 30 },
    { name: 'Shoes', price: 50 }
];

// Calculate the total cost of items in the shopping cart
const totalCost = calculateTotalCost(shoppingCart);

// Apply a 10% discount to the total cost
const discountedTotal = applyDiscount(totalCost, 10);

console.log('Total cost before discount: $' + totalCost);
console.log('Total cost after 10% discount: $' + discountedTotal);



function tellStory() {
    setScene();
    introduceCharacter("Sir Lancelot");
    describeProblem("a fierce dragon");
    describeQuest("to slay the dragon and save the kingdom");
    narrateJourney();
    concludeStory();
}
tellStory();

const isThreeEven = isEven();

function greet(name) {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log('Hello, there!');
    }
}

greet(); // Output: Hello, there!
greet('John'); // Output: Hello, John!


// const colours = ["red", "green", "blue"];
colours.forEach(colour => console.log(`My favourite colour is ${colour}`));


const add = (a,b) => {
    const result = a + b;
    return result;
}

add(2,3);

const square = a => a * a;

square(2);

add(2,3)

// const words = ['metal', 'rock', 'folk']

const wordToDescription = (word) => {
    return `The word "${word}" has ${word.length} letters`
}

// const descriptions = words.map(word => `The word "${word}" has ${word.length} letters`)

// console.log(descriptions)


const words = ['metal', 'rock', 'folk']

const uppercaseWords = words.map(word => word.toUpperCase());
// new array with ["METAL", "ROCK", "FOLK"]

const descriptions = [] // we use forEach to populate one by one

words.forEach(word => descriptions.push(`The word "${word}" has ${word.length} letters`))

console.log(descriptions)