// My solve
// Challenge 1
// const getCelsius = (f) =>
//   console.log(`The temperature is ${((f - 32) * 5) / 9} \xB0C`);
// getCelsius(68);

// Challenge 2
// const arr = [1, 2, 3, 4, 5];
// const minMax = (numbers) =>
//   console.log(`min: ${Math.min(...numbers)}, max: ${Math.max(...numbers)}`);
// minMax(arr);

// ======================================================
// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(50)} \xB0C`);

// Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`;

  console.log(output);
})(10, 5);
