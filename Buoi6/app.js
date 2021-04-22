// function myFunction() {
//   document.getElementById("demo").innerHTML = Date();
// }
// console.log("hello");

//Chuoi
// Var
//let
//const - gan gtri khong the thay doi - obj va array

// var a = 20.5;
// var b = "Chuoi 1";
// var c = "chuoi 2";
// var d = `day la ${b} `;

// object
// var car = {
//   color: "red",
//   prince: "1000",
//   isBuy: true,
// };
//mang
// var array = [1, 2, "chuoi ", car, 5];
// console.log(array);

// Giai phuong trinh bac 2: ax^2 + bx + c = 0

const a = 1;
const b = 1;
const c = -6;
const x = -c / b;
const delta = b * b - 4 * a * c;
const x1 = ((-b + Math.sqrt(delta)) / 2) * a;
const x2 = ((-b - Math.sqrt(delta)) / 2) * a;

if (a == 0) {
  if (b == 0) {
    if (c == 0) {
      console.log("Phuong trinh vo so nghiem");
    } else {
      console.log("Phuong trinh vo nghiem");
    }
  } else {
    console.log("Phuong trinh co 1 nghiem duy nhat la: x=", x);
  }
} else {
  console.log("Phuong trinh se co 2 nghiem kep:\nx1=", x1);
  console.log("x2=", x2);
}
