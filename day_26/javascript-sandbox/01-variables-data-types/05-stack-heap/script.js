// Values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap
const person = {
  name: "Nur",
  age: 20,
};

let newName = name;
newName = "Johnathan";

let newPerson = person;
newPerson.name = "Nuro";

console.log(name, newName);
console.log(person, newPerson);
