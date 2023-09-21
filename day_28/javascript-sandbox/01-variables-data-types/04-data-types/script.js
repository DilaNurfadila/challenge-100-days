// Primitive Data Types
// String - Sequence of character. Must be in quotes or backticks
// Number - Integer as well as floating-point numbers
// Boolean - Logical entity / true or false
// Null - Intentional absence of any object value
// Undefined - A variable that has not yet been defined / assigned
// Symbol - Built-in object whose constructor return a uniqe symbol
// BigInt = Numbers that are greater than the "Number" type can handle

// Reference Types (Objects)
// Reference types or "objects" are non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types

// String
const firstName = "Sara";

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: "Nur",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
