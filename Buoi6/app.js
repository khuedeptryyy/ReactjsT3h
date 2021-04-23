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
let a = prompt("Nhập a");
let b = prompt("Nhập b");
let c = prompt("Nhập c");

if (a == 0) {
  if (b == 0) {
    if (c == 0) {
      alert("Phuong trinh vo so nghiem");
    }
  } else {
    alert("Phuong trinh co nghiem duy nhat: " + -c / b);
  }
} else {
  let delta = b * b - 4 * a * c;
  if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có 2 nghiệm phân biệt:\n x1 = " + x1 + "\n x2 = " + x2);
  } else if (delta == 0) {
    let result = (-b / 2) * a;
    alert("Phuong trinh co nghiem kep: x1 = x2 = " + result);
  } else {
    alert("Phuong trinh vo nghiem");
  }
}
