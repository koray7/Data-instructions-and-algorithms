// function sumPrimes(num) {
//   function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i == 0) return false;
//     }
//     return true;
//   }

//   let sum = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) sum += i;
//   }
//   return sum;
// }
// console.log(sumPrimes(5));

// function smallestCommons(arr) {
//   const [min, max] = arr.sort((a, b) => a - b);
//   const numberDivisors = max - min + 1;

//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }

//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }

// console.log(smallestCommons([1, 5]));

// function dropElements(arr, func) {
//     while (arr.length > 0 && !func(arr[0])) {
//       arr.shift();
//     }
//     return arr;
//   }

//   dropElements([1, 2, 3, 4], function(n) {
//     return n >= 3;
//   });
// function binaryAgent(str) {
//     var biString = str.split(" ");
//     var uniString = [];

//     /*using the radix (or base) parameter in parseInt, we can convert the binary
//         number to a decimal number while simultaneously converting to a char*/

//     for (var i = 0; i < biString.length; i++) {
//       uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
//     }

//     return uniString.join("");
//   }

//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   );
// function truthCheck(collection, pre) {
//   let counter = 0;

//   for (let c in collection) {
//     if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
//       counter++;
//     }
//   }

//   return counter == collection.length;
// }

// truthCheck(
//   [
//     { name: "Quincy", role: "Founder", isBot: false },
//     { name: "Naomi", role: "", isBot: false },
//     { name: "Camperbot", role: "Bot", isBot: true },
//   ],
//   "isBot"
// );
