// My Solve
// const calculator = (num1, num2, operator) => {
//   let total = 0;
//   switch (true) {
//     case operator === "+":
//       total = num1 + num2;
//       break;
//     case operator === "-":
//       total = num1 - num2;
//       break;
//     case operator === "*":
//       total = num1 * num2;
//       break;
//     case operator === "/":
//       total = num1 / num2;
//       break;
//     default:
//       console.log("returns an error");
//       break;
//   }

//   return total;
// };

// console.log(calculator(5, 2, "+"));
// console.log(calculator(5, 2, "-"));
// console.log(calculator(5, 2, "*"));
// console.log(calculator(5, 2, "/"));
// console.log(calculator(5, 2, "&"));

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      result = "Invalid Operator";
      break;
  }

  console.log(result);
  return result;
}

calculator(5, 2, "&");
