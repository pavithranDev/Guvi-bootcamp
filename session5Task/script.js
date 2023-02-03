//Anonymous function & IIFE
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let odd = function () {
//   numArr.forEach((num) => {
//     if (num % 2 != 0) {
//       console.log(`These are all odd numbers ${num}`);
//     }
//   });
// };
// odd(numArr);
let str = "hi i am pavithran";

let titleCap = function (string) {
  let capStr = "";
  string.split(" ").forEach((element) => {
    let templetter = element[0].toUpperCase();
    capStr += element.replace(element[0], ` ${templetter}`);
  });
};
titleCap(str);
