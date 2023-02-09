////////////////////////
////All About Functions
///////////////////////

//Find Odd in Array
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findOdd = function (arr) {
  arr.forEach((num) => {
    if (num % 2 != 0) {
      console.log(`These are all odd numbers ${num}`);
    }
  });
};
findOdd(numArr);

//IIFE
((arr) => {
  arr.forEach((num) => {
    if (num % 2 != 0) {
      console.log(`This is aodd number ${num}`);
    }
  });
})(numArr);

//Title to Caps
let str = "hi! i am pavithran";
let titleCap = function (str) {
  let nam = str.split(" ");
  let dummy = nam.map((ele) => ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase()));
  let capStr = dummy.join(" ");
  console.log(capStr);
};
titleCap(str);
//IIFE
((str) => {
  let nam = str.split(" ");
  let dummy = nam.map((ele) => ele.replace(ele.charAt(0), ele.charAt(0).toUpperCase()));
  let capStr = dummy.join(" ");
  console.log(capStr);
})(str);

//Sum of Array
let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = function (arr) {
  console.log(arr.reduce((acc, curtvalue) => acc + curtvalue));
};
sum(sumArr);

//IIFE
((arr) => {
  console.log(arr.reduce((acc, curtvalue) => acc + curtvalue));
})(sumArr);

//Prime in a Array
let primeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let prime = function (arr) {
  arr.forEach((num) => {
    let isPrime = true;
    if (num == 1 || num == 2) {
      console.log(num);
    } else if (num % 2 == 0) {
      isPrime = false;
    } else if (isPrime) {
      console.log(num);
    }
  });
};
prime(primeArr);
//IIFE
(function (arr) {
  arr.forEach((num) => {
    let isPrime = true;
    if (num == 1 || num == 2) {
      console.log(num);
    } else if (num % 2 == 0) {
      isPrime = false;
    } else if (isPrime) {
      console.log(num);
    }
  });
})(primeArr);

//Palidrome
let wrd = "stressed desserts";
let ispalindrome = function (word) {
  if (word.includes(" ")) {
    let strCorrection = word.split(" ").join("").split(""),
      orginalStr = strCorrection.join("").toUpperCase(),
      reversedStr = strCorrection.reverse().join("").toUpperCase();
    if (orginalStr === reversedStr) {
      console.log(`${word} is a Palendindrome`);
    } else {
      console.log(`${word} is a NOT Palendindrome`);
    }
  } else {
    let orginalStr = word.toUpperCase(),
      reversedStr = word.split("").reverse().join("").toUpperCase();
    if (orginalStr === reversedStr) {
      console.log(`${word} is a Palendindrome`);
    } else {
      console.log(`${word} is a NOT Palendindrome`);
    }
  }
};
ispalindrome(wrd);
//IIFE
(function (word) {
  if (word.includes(" ")) {
    let strCorrection = word.split(" ").join("").split(""),
      orginalStr = strCorrection.join("").toUpperCase(),
      reversedStr = strCorrection.reverse().join("").toUpperCase();
    if (orginalStr === reversedStr) {
      console.log(`${word} is a Palendindrome`);
    } else {
      console.log(`${word} is a NOT Palendindrome`);
    }
  } else {
    let orginalStr = word.toUpperCase(),
      reversedStr = word.split("").reverse().join("").toUpperCase();
    if (orginalStr === reversedStr) {
      console.log(`${word} is a Palendindrome`);
    } else {
      console.log(`${word} is a NOT Palendindrome`);
    }
  }
})(wrd);

//Remove Duplicates in array
let duplicateArr = [2, 3, 4, 4, 5, 7, "a", "b", "c", "a", "d"];
let rmDupl = function (arr) {
  let uniqueSet = new Set(),
    uniqueArr = [];
  arr.forEach((ele) => {
    uniqueSet.add(ele);
  });
  uniqueSet.forEach((value) => {
    uniqueArr.push(value);
  });
  console.log(uniqueArr);
};
rmDupl(duplicateArr);
//IIFE
(function (arr) {
  let uniqueSet = new Set(),
    uniqueArr = [];
  arr.forEach((ele) => {
    uniqueSet.add(ele);
  });
  uniqueSet.forEach((value) => {
    uniqueArr.push(value);
  });
  console.log(uniqueArr);
})(duplicateArr);

//Rotate Array by K times
let arrForK = ["a", "b", "c", 1, 2, 3, 4, 5, 6,95,898,73,15,564,889,121,46,064,05456,76,3,49,16,];

let rotateArr = function (arr, k) {
  let rotateArr;
  for (let i = 1; i <= k; i++) {
    rotateArr = arr.reverse();
  }
  console.log(arr);
};
//IIFE
rotateArr(arrForK, 4);
(function (arr, k) {
  let rotateArr;
  for (let i = 1; i <= k; i++) {
    rotateArr = arr.reverse();
  }
  console.log(arr);
})(arrForK, 5);
