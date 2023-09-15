// alert("Hello world");
// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// =========================================================

// let, const

// const age = 30;
// age = 31;

// console.log(age);

// let score;

// score = 10;

// console.log(score);

// ==========================================================

// String, number, boolean, null, undefined, symbol (ES6)
// const name = "Nur";
// const age = 20;
// const rating = 5.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isCool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// const name = "Nur";
// const age = 20;

// ===========================================================

// Concatenation
// console.log("My name is " + name + " and I am " + age);

// ===========================================================

// Template String
// console.log(`My name is ${name} and I am ${age}`);

// const s = "technology, computers, it, code";

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(", "));

// Arrays - variables that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangos");
// fruits.unshift("strawberries");
// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf("oranges"));

// console.log(fruits);
// console.log(fruits[1]);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(city);

// person.email = "john@gmail.com";

// console.log(person);

// const todos = [
//   { id: 1, text: "Takeout trash", isCompleted: true },
//   { id: 2, text: "Meeting with boss", isCompleted: true },
//   { id: 3, text: "Dentis appt", isCompleted: false },
// ];

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

// ===========================================================

// For
// for (let i = 0; i <= 10; i++) {
//   console.log(`For loop Number ${i}`);
// }

// ===========================================================

//  While
// let i = 0;
// while (i < 10) {
//   console.log(`While loop Number ${i}`);
//   i++;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// forEach, map, filter
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

// =============================================================

// If
// const x = 20;
// const y = 10;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// if (x > 5 || y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// if (x > 5 && y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// const x = 10;

// const color = x > 10 ? "red" : "blue";

// console.log(color);

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
// }

// ========================================================

// Function
// function addNums(num1 = 1, num2 = 1) {
//   console.log(num1 + num2);
// }

// const addNums = (num1 = 1, num2 = 1) => {
//   console.log(num1 + num2);
// };

// const addNums = (num1) => num1 + 5;

// console.log(addNums(3));

// ==========================================================

// Object Oriented Programming
// Constructor function
// function Person(firstName, lastname, dob) {
//   this.firstName = firstName;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
// this.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// this.getFullName = function () {
//   return `${this.firstName} ${this.lastname}`;
// };
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastname}`;
// };

// Class
// class Person {
//   constructor(firstName, lastname, dob) {
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastname}`;
//   }
// }

// Instantiate object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// console.log(person2.getFullName());

// ===========================================================================

// DOM
// console.log(window);
// Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector("h1"));

// Multiple element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Nur";
// ul.lastElementChild.innerHTML = "<h4>Hello</h4>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// const btn = document.querySelector(".btn");

// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   // console.log(e.target);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    // alert("Please enter fields");
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
