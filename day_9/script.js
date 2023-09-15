// Synchronous
// Load one by one
// console.log("I");
// console.log("eat");
// console.log("spoon");
// console.log("ice cream");
// console.log("with a");

// =============================================================================

// Asynchronous
// console.log("I");
// console.log("eat");
// setTimeout(() => {
//   console.log("ice cream");
// }, 4000);

// console.log("with a");
// console.log("spoon");

// =============================================================================

// Callbacks
// function one(call_two) {
//   console.log("step 1 complete, please call step 2");
//   call_two();
// }

// function two() {
//   console.log("step 2");
// }

// two();
// one(two);

// =============================================================================

// Example with callbacks
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// console.log(stocks.Fruits[2]);

// let order = (Fruits_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruits_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started!");

//     setTimeout(() => {
//       console.log("the food has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {}, 2000);
//           console.log(`ice cream was placed on ${stocks.holder[0]}`);

//           setTimeout(() => {
//             console.log(`${stocks.toppings[0]} was added as toppings`);

//             setTimeout(() => {
//               console.log("serve ice cream");
//             }, 2000);
//           }, 3000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// =============================================================================

// Promise
// let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => console.log("production has started"));
//   })
//   .then(() => {
//     return order(2000, () => console.log("the fruit was chopped"));
//   })
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
//     );
//   })
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[0]}`)
//     );
//   })
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
//   })
//   .then(() => {
//     return order(1000, () => console.log("ice cream was served"));
//   })
//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended, shop is closed");
//   });

// =============================================================================

// Async / await
// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// order().then(() => {
//   console.log("sdfnksd");
// });

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?"));
//     }, 3000);
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");

//   await toppings_choice();

//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");

// function time(ms) {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(resolve, ms);
//     } else {
//       reject(console.log("shop is closed"));
//     }
//   });
// }

// async function kitchen() {
//   try {
//     await time(2000);
//     console.log(`${stocks.Fruits[0]} was selected`);

//     await time(0);
//     console.log("start the production");

//     await time(2000);
//     console.log("cut the fruit");

//     await time(1000);
//     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//     await time(1000);
//     console.log("start the machine");

//     await time(2000);
//     console.log(`ice cream placed on ${stocks.holder[0]}`);

//     await time(3000);
//     console.log(`${stocks.toppings[0]} was selected`);

//     await time(2000);
//     console.log("serve ice cream");
//   } catch (error) {
//     console.log("customer left", error);
//   } finally {
//     console.log("day ended, shop is closed");
//   }
// }

// kitchen();

// =============================================================================
// WPU
// setTimeout()

// setTimeout(tampilkanPesan, 3000);

// function tampilkanPesan() {
//   console.log("Hello World");
// }

// const tes = setTimeout(function () {
//   console.log("ok");
// }, 5000);

// const tombol = document.getElementById("tombol");
// tombol.addEventListener("click", function () {
//   clearTimeout(tes);
//   console.log("selesai");
// });

// setInterval()
// const tes = setInterval(function () {
//   console.log("ok");
// }, 2000);

// const tombol = document.getElementById("tombol");
// tombol.addEventListener("click", function () {
//   clearInterval(tes);
//   console.log("selesai");
// });

// Program hitung mundur
// const tanggalTujuan = new Date("Jul 22, 2023 13:16:00").getTime();

// const hitungMundur = setInterval(function () {
//   const sekarang = new Date().getTime();

//   const selisih = tanggalTujuan - sekarang;

//   const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
//   const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
//   const detik = Math.floor((selisih % (1000 * 60)) / 1000);

//   const teks = document.getElementById("teks");
//   teks.innerHTML = `Waktu anda tinggal : ${hari} hari ${jam} jam ${menit} menit ${detik} detik lagi!`;

//   if (selisih < 0) {
//     clearInterval(hitungMundur);
//     teks.innerHTML = `Waktu anda habis!`;
//   }
// }, 1000);

// console.log(sekarang);
// console.log(tanggalTujuan);
// console.log(selisih);
// console.log(hari);
// console.log(jam);
// console.log(menit);
// console.log(detik);
