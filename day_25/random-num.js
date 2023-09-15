const min = 1;
const max = 10;
let rand = Math.floor(Math.random() * max) + min;
// console.log("Random number : " + rand);
// console.log("Floor number : " + Math.floor(rand));
// console.log("Ceil number : " + Math.ceil(rand));
// console.log("Round number : " + Math.round(rand));

// let ulang = 3;
for (let i = 3; i >= 0; i--) {
  const p = prompt("Pilih angka 1 - 10");
  if (p != rand) {
    if (p < rand) {
      // ulang -= 1;
      alert("Terlalu RENDAH!\nAnda masih punya " + i + " kesempatan");
    } else if (p > rand) {
      // ulang -= 1;
      alert("Terlalu TINGGI!\nAnda masih punya " + i + " kesempatan");
    } else if (p < 1 || p > 10) {
      alert("Angka tidak sesuai");
    } else {
      alert("Input tidak sesuai");
    }
  } else {
    alert("Anda benar!\nAngka yang dicari adalah " + rand);
  }
}
alert("Kesempatan HABIS! Angka yang dicari adalah " + rand);
