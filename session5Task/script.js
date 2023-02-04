///////////////////////////
//Anonymous function & IIFE
////////////////////////////
//let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let odd = function (arr) {
//   numArr.forEach((num) => {
//     if (num % 2 != 0) {
//       console.log(`These are all odd numbers ${num}`);
//     }
//   });
// };
//odd(numArr);
//IIFE of Odd
// (() => {
//   numArr.forEach((num) => {
//     if (num % 2 != 0) {
//       console.log(`This is aodd number ${num}`);
//     }
//   });
// })();
//Title to Caps
//let str = "hi! i am pavithran";
//let titleCap = function (str) {
//  let nam = str.split(" ");
//  let dummy = nam.map((ele) => ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase()));
//  let capStr = dummy.join(" ");
//  console.log(capStr);
//};
//titleCap(str);
//
// let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = function (arr) {
//   let sumOfAll = 0;
//   arr.reduce((start, next) => {});
// };
//sum(sumArr, 0);

let primeArr = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];

let prime = function (arr) {
  arr.forEach((num) => {
    if (num == 1 || num == 2 || num % 2 != 0) {
      console.log(num);
    }
  });
};
prime(primeArr);
