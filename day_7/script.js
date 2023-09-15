// Challege 1
// function countBy(x, n) {
//   let z = [];

//   let i = 1;
//   while (i <= n) {
//     let a = i * x;
//     z.push(a);
//     i++;
//   }

//   return z;
// }
// console.log(countBy(2, 5));

// ===========================================================================

// Challenge 2
// function simpleMultiplication(number) {
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(2));

// ===========================================================================

// Challenge 3
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// const makeUpperCase = (str) => str.toUpperCase();

// console.log(makeUpperCase("Hello"));

// ===========================================================================

// Challenge 4
// function testEven(n) {
//   return n % 2 === 0 ? true : false;
// }

// const testEven = (n) => n % 2 === 0 ? true : false

// ===========================================================================

// Challenge 5
// const numberToString = (num) => num.toString()

// ===========================================================================

// Challenge 6
// const checkForFactor = (base, factor) => base % factor === 0 ? true : false

// ===========================================================================

// Challenge 7
// const doubleInteger = (i) => i * 2;

// ===========================================================================

// Challenge 8
// let arr = [1, 1, 1];
// function findAverage(array) {
//   let total = 0;
//   let average;
//   if (array.length === 0 || array.length === undefined) {
//     average = 0;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       total += array[i];
//       average = total / array.length;
//     }
//   }
//   console.log(average);
// }

// findAverage(arr);

// ===========================================================================

// Challenge 9
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height
//     }
//   }

// ===========================================================================

// Challenge 10
// let a = [3, 2, 5];
// let b = [1, 4, 4];
// function findDifference(a, b) {
//   let i = 0;
//   let count1 = 1;
//   let count2 = 1;
//   while (i < a.length) {
//     count1 *= a[i];
//     i++;
//   }

//   i = 0;
//   while (i < b.length) {
//     count2 *= b[i];
//     // console.log(b[i]);
//     i++;
//   }

//   let dif = count1 - count2;
//   dif < 0 ? console.log(count2 - count1) : console.log(dif);
// }

// findDifference(a, b);
