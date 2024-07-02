const labels = [
  { id: 1, name: "Friend" },
  { id: 2, name: "Family" },
];

const contacts = [
  {
    id: 1,
    fullName: "Alaska Bandar Salju",
    email: "alaska@mail.com",
    phoneNumber: "62888092131232",
    address: "Jl. Bikini Bottom",
    jobTitle: "CEO",
    labels: ["Family", "Colleague"],
  },
  {
    id: 2,
    fullName: "Blue Adams",
    email: "adams@mail.com",
    phoneNumber: "62888099912323",
    address: "Jl. Pasific Ocean",
    jobTitle: "Cleaner",
    labels: ["Colleague"],
  },
  {
    id: 3,
    fullName: "Owen Hadi",
    email: "owenhadi@mail.com",
    phoneNumber: "6288809990023",
    address: "Jl. Merdeka Raya",
    jobTitle: "Software Engineer",
    labels: ["Others"],
  },
];
console.log([labels, contacts]);

// Variables and Data Types
const name = "navi";
const age = 23;
const output = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(output);
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Basic Arithmetic Operations
let a = 10;
let b = a + 10;

let add = a + b;
console.log(add);

let minus = b - a - 1;
console.log(minus);
let divide = b / 2;
console.log(divide);

// Arrays;

const myArray = ["apple", "banana", "orange"];

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];
console.log(firstElement);
console.log(lastElement);

// Objects
const person = { firstName: "Muhammad", lastName: "Nugraha", age: 24 };
console.log(
  `Hello, my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old.`
);

// Conditional Statements
function checkOddorEven(number) {
  return number % 2 === 0 ? "the number is even" : "the number is odd";
}

// let userInput = prompt("Enter a number: ");
// let number = parseInt(userInput, 10);
console.log(checkOddorEven(2));

// Loops
let text = "";
for (let i = 0; i < 10; i++) {
  text += "the number is " + i + "\n";
}

console.log(text);

// String Manipulation
function reverseString(x) {
  return x.split("").reverse().join("");
}

console.log(reverseString("String"));

// Array Manipulation
const myArray2 = [10, 5, 3, 24, 50];

function biggestNumber() {
  return Math.max(...myArray2);
}

console.log(biggestNumber());

// Object Methods
let car = { make: "Honda", model: "Sedan", year: "2020" };

function carDetails() {
  return `This car is a ${car.year} ${car.make} ${car.model}.`;
}

console.log(carDetails());

// Functions
const numbers = [1, 3, 4, 5, 7, 78];

function evenNumbers(arr) {
  return arr.filter((number) => number % 2 === 0);
}

console.log(evenNumbers(numbers));

// Task 2: Function to Log Contacts
function renderContacts() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const labelOutput = contact.labels.join("");

    console.log(`
       Fullname   :  ${contact.fullName}
       Email      :  ${contact.email}
       Phone      :  ${contact.phoneNumber}
       Address    :  ${contact.address}
       Job Title  :  ${contact.jobTitle}
       Label      :  ${contact.labels}`);
  }
}

renderContacts(contacts);
