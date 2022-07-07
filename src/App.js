// import "./App.css";

// function App() {
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;  // Change this line
// const player = testObj[playerNumber];   // Change this line
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
// Only change code below this line

// for (let i = 0; i < contacts.length; i++){
//   if(contacts[i].firstName == name) {
//     return contacts[i][prop] || "No such property"
//   }
// }
// return "No such contact"

// Only change code above this line
// }
// const X = contacts[0].likes
// console.log(lookUpProfile("kory", "likes"));
// console.log(X)
// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },
//   {
//   "artist": "Tarkan",
//   "title": "Kalben",
//   "release_year": 1999,
//   "formats": [
//     "CD",
//     "Flashback",
//   ]
//   }
// ];

// console.log(myMusic[1].formats[0]);

// let count = 0;
// let holdbet = "Hold";

// function cc(card) {

// Only change code below this line
// if(card == 2 || card == 3 || card == 4 || card==5 || card==6) {
// count++;
// }
// if (card == 10 || card=="J" || card=="Q" || card=="K" || card == "A") {
// count--;
// }
//   if(count > 0) {
//   holdbet = "Bet"
//   }
// return count + " " + holdbet;
// Only change code above this line
// }
// console.log(cc(10));
// cc(2); cc(3); cc(7); cc('K'); cc('A');

// function randomWholeNum() {

//   // Only change code below this line

//   return Math.floor(Math.random() * 10);
// }
// console.log(Math.random())

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// var myConcat = (arr1, arr2, arr3) => {
//   return arr1.concat(arr2).concat(arr3);
// };

// console.log(myConcat([1, 2], [3, 4, 5,12,15],[20,21]));

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2));
// console.log(length("string", null, [1, 2, 3], { },{},{},"",[]));
// const sum = (...args) => {

//   console.log(args.reduce((a, b) => a + b, 0));
// }
// const today = HIGH_TEMPERATURES.today;
// console.log(today)

// const user = { name: 'John Doe', age: 34 };

// const { name, age } = user;

// console.log(user)
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80

// };

// Only change code below this line

// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// console.log(HIGH_TEMPERATURES.yesterday)

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a,b, ...x] = list; // Change this line
//   // Only change code above this line
//   return x;
// }

// console.log(removeFirstTwo([1,2,3,4,5,6,7,8,9,10]))

// const array1 = [1, 2, 3, 90];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue, initialValue
// );

// let text = document.getElementById("practice");

// text.innerText = sumWithInitial

// console.log(sumWithInitial);

// const numbers = [7, 8, 10, 14];
// const newArr = numbers.map(x => x*10)

// document.getElementById("practice").innerHTML = newArr

// console.log(newArr);

// const months = ['y', 'o', 'r', 'a', 'K', 'bas', 'taci'];
// months.sort();
// console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// const items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });
// console.log(a.value - b.value)

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
//   console.log(sum);
// });

// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   const x = copyItems.push(items[i]);
// }
// console.log(x)
// // after
// items.forEach((item) => {
//   console.log(copyItems.push(item));
// });

// const arraySparse = [1, 3,, 7];
// let numCallbackRuns;

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });

// console.log({ numCallbackRuns });

// const words = ['one', 'two', 'three', 'four'];
// words.forEach((word) => {
//   console.log(word);

//   if (word === 'one') {
//     words.shift(); //'one' will delete from array
//   }
// }); // one // two // four

// console.log(words);
// document.getElementById("practice").innerHTML = words

// const persons = [
//   {firstname : "Malcom", lastname: "Reynolds"},
//   {firstname : "Kaylee", lastname: "Frye"},
//   {firstname : "Jayne", lastname: "Cobb"}
// ];

// persons.map(x => x(item)
//   [item.firstname, item.lastname].join(" ");

// )}

// var SpaceShuttle = function(targetPlanet){
//   this.targetPlanet = targetPlanet;
// }
// var zeus = new SpaceShuttle('Jupiter');
// console.log(zeus)

// Only change code below this line

// #############  TEMPERATURE CONVERT ######################
// ##########################################
// class Thermostat {
//   constructor(fahrenheit) {
//     this.fahrenheit = fahrenheit;
//   }
//   get temperature() {
//     return (5 / 9) * (this.fahrenheit - 32);
//   }
//   set temperature(celsius) {
//     this.fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(100); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp)
// #######################################################

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried of it.";
// let vowelRegex = /of/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// console.log(result)

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; // Change this line
// let result = quoteSample.match(myRegex);

// console.log(result)

// let difficultSpelling = "Mississippi";
// let myRegex = /m[a-d]*i/ig;
// let result = difficultSpelling.match(myRegex);
// console.log(result)

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);

// let rickyAndCal = "Cal and Ricky both like racing .";
// let calRegex = /.$/; // Change this line
// let result = calRegex.test(rickyAndCal);

// console.log(result)

// let shortHand = /\W/g;
// let numbers = "42%*****";
// let sentence = "Coding!";
// console.log(numbers.match(shortHand));
// console.log(sentence.match(shortHand));

// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/g; // Change this line
// let result = userCheck.test(username);

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// console.log(whiteSpace.match(nonSpaceRegex).length);

// console.log(result)

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// console.log(result)

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;

// console.log(rainbowRegex.test(american));
// console.log(rainbowRegex.test(british));

// ###################### Looks for 3-6 digits ######################
// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// console.log(checkPass.test(password));

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// let x = wrongText.replace(silverRegex, "blue!!!!");

// console.log(x)
// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 13;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue - currentValue
// );

// console.log(sumWithInitial);

// let x = 7;
// let y = 9;
// let result = "to come";

// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

// function myFunction() {
//   return "You rock!9999";
// }
// let varOne = myFunction;
// let varTwo = myFunction();
// console.log(varOne);
// console.log(varTwo);

// console.log(Math.pow(3, 2));

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   // console.log(alphabet[i]);
// }

// for (let j = 1; j < len; j++) {
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   console.log(alphabet[k]);
// }

// function countToFive() {
//   let firstFive = "12345a";
//   let len = firstFive.length;

//   for (let i = 0; i < len; i++) {

//     console.log(firstFive[i]);
//   }
// }
// countToFive();

// function zeroArray(m, n) {

//   let newArray = [];

//   for (let i = 0; i < m; i++) {
//     let row = [];

//     for (let j = 0; j < n; j++) {

//       row.push("+");
//     }

//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(7, 3);
// console.log(matrix);

// function popShift(arr) {
//   let popped = arr.shift();
//   let shifted = arr.pop();
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// let array = ['I', 'am', 'feeling', 'really', 'happy'];

// let newArray = array.splice(4, 1);

// console.log(newArray)

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// arr.splice(2,4)

// console.log(arr);

// function filteredArray(arr, elem) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].indexOf(elem) == -1) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// let nestedArray = [
//   ['deep'],
//   [
//     ['deeper'], ['deeper']
//   ],
//   [
//     [
//       ['deepest'], ['deepest']
//     ],
//     [
//       [
//         ['deepest-est?']
//       ]
//     ]
//   ]
// ];

// console.log(nestedArray[2][1][0][0][0]);

// const users = {
//   Alan: {
//     online: true
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: true
//   }
// }

// function countOnline(usersObj) {

// let result = 0;
// for (let user in usersObj) {
//   if (usersObj[user].online === true) {
//     result++;
//   }
// }
// return result;

// }

// console.log(countOnline(users));

// CELSIUS TO FAHRENHEIT ##############################

// function convertToF(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }

// console.log(convertToF(42));

// function reverseString(str) {
//   return str.split("").reverse();
// }

// console.log(reverseString("Koray"));

// LONGEST WORD ######################################

// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }

// console.log(findLongestWordLength("The quick brown fox 123456789 over the lazy dog"));

// LARGEST NUMBER #####################################

// function largestOfFour(arr) {

//     let gNumbers = [];

//   for (let i=0; i<arr.length; i++) {
//     max = arr[i][0];
//     for (let j=0; j<arr[i].length; j++) {
//       current = arr[i][j];
//       if(current >= max) {
//         max = current;
//       }
//     }
//     gNumbers.push(max);
//   }

//   return gNumbers;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// FIRST LETTER UPPER CASE #########################################

// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));

// FIRST LETTER UPPER CASE ######################################

// let sentence = "Austin is the most beautiful city in Texas";

// let capitalizedStr = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

// let word = sentence.split(" ").map(capitalizedStr);

// let news = word.join(" ");
// console.log(capitalizedStr(sentence));
// console.log(word);
// console.log(news);

// REMOVE ALL FALSY VALUES #####################################

// function bouncer(arr) {
//   let filtered = arr.filter(Boolean)
//   return filtered;
// }

// console.log(bouncer([7,0, "ate", "",true, false, 9]));

// RETURN OVER 6 LETTERS ######################################

// const words = ['spraySSSSS', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// ################# OBJECT ORIENTED PROGRAMMING ####################

//   let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {
//     return "This dog has " + this.numLegs + " legs.";
//   }
// };

// console.log(dog.sayLegs());

// ##############    CLASS OF CONSTRUCTORS  ##################

// function Dog(name, color) {
//   this.name = name,
//   this.color = color,
//   this.numLegs = 4
// }
// let terrier = new Dog("Golden","Yellow")

// ###############################

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// for(let prop in canary) {
//   if(canary.hasOwnProperty(prop)) {
//     ownProps.push(prop);
//   }
// }
// console.log(ownProps)

// ##########################################

// function House(numBedrooms, bath) {
//   this.numBedrooms = numBedrooms;
//   this.bath = bath;
// }
// let myHouse = new House("hotel", 5)

// function sentence(numBedrooms, bath) {
//   return "This a " +numBedrooms+ " and it has "+bath+" bathrooms."
// }

// let newStylesh = document.getElementById("practice").innerHTML = sentence("DreamHotel", 100);

// let colored = newStylesh.style.color = "red";

// console.log(newStylesh);

// ##################   Iterate Over All Properties   ##################

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let prop in beagle) {
//   if(beagle.hasOwnProperty(prop)) {
//     ownProps.push(prop)
//   } else {
//     prototypeProps.push(prop)
//   }
// }

// ############  Understand the Constructor Property  ###########

// function Dog(name) {
//   this.name = name;
// }

// function joinDogFraternity(candidate) {
//   if(candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false
//   }
// }

// ########## Understand Where an Object’s Prototype Comes From ######

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle)

// #############    Inheritance    ##############

// function Cat(name) {
//   this.name = name;
// }

// Cat.prototype = {
//   constructor: Cat
// };

// function Bear(name) {
//   this.name = name;
// }

// Bear.prototype = {
//   constructor: Bear
// };

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// ######### Reset an Inherited Constructor Property  ############

// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// ############# Remove Duplicate Numbers ################

// function removeDuplicate(arr){
//   var exists ={},
//       outArr = [],
//       elm;

//   for(var i =0; i<arr.length; i++){
//     elm = arr[i];
//     if(!exists[elm]){
//       outArr.push(elm);
//       exists[elm] = true;
//    }
//   }
//   return outArr;
// }

// > removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
//   = [1, 3, 5, 6, 7, 8]

// ########## Missing number in Array #################

// let arr = [1,2,3,4,5,6,7,8,10];
// const findMissingNum = (arr) => {
//   for(var i = 0; i < arr.length - 1; i++) {
//     if(arr[i] + 1 != arr[i+1] ) {
//       return arr[i] + 1;
//     }
//   }

//   return false;
// }
// console.log(findMissingNum(arr));

// ######### Find a largest and smallest number ###########

// const arr = [1, 2, 3, 4, 100];
// const findMaxMin = (arr) => {
//   let max = arr[0];
//   let min = arr[0];

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     } else if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return {
//     "max": max,
//     "min": min
//   };
// }
// console.log(findMaxMin(arr));

// ######### Return cumulative number ##############

// let arr = [1,3,5,7];
// const cumulativeSum = list => {
//   let result = [list[0]];

//   for(let i = 1; i < list.length; i++) {
//     result.push(list[i] + result[i-1]);
//   }

//   return result;
// }
// console.log(cumulativeSum(arr));

// ##########   Find all duplicate numbers in an array with multiple duplicates ########

// const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];
// const returnMultipleDupesArray = (arr) => {
//   let observed = {};
//   let dupesArray = [];

//   for(let i = 0; i < arr.length; i++) {

//     if(observed[arr[i]]) {
//       if(observed[arr[i]] === 1) {
//         dupesArray.push(arr[i]);
//       }

//       observed[arr[i]] = observed[arr[i]] + 1;
//     } else {
//       observed[arr[i]] = 1;
//     }
//   }

//   return dupesArray;
// }
// console.log(returnMultipleDupesArray(arr));

// #### Find all pairs in an array of integers whose sum is equal to a given number  ####

// let arr = [1,5,6,1,0,1];
// const findSumPairs = (arr, value) => {
//   let sumsLookup = {};
//   let output = [];

//   for(let i = 0; i < arr.length; i++) {
//     let targetVal = value - arr[i];

//     if(sumsLookup[targetVal]) {
//       output.push([arr[i], targetVal]);
//     }

//     sumsLookup[arr[i]] = true;
//   }

//   return output;
// }
// console.log(findSumPairs(arr, 6));

// ####### Prime Check ############

// function isPrime(n){
//   var divisor = 2;

//   while (n > divisor){
//     if(n % divisor == 0){
//      return false;
//     }
//     else
//       divisor++;
//   }
//   return true;
// }

// > isPrime(137);
//   = true
// > isPrime(237);
//   = false

// ##### Remove Duplicate ############

// function removeDuplicate(arr){
//   var exists ={},
//       outArr = [],
//       elm;

//   for(var i =0; i<arr.length; i++){
//     elm = arr[i];
//     if(!exists[elm]){
//       outArr.push(elm);
//       exists[elm] = true;
//    }
//   }
//   return outArr;
// }

// > removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
//   = [1, 3, 5, 6, 7, 8]

// ###### Swap Number #########

// function swapNumb(a, b){
//   console.log('before swap: ','a: ', a, 'b: ', b);
//   b = b -a;
//   a = a+ b;
//   b = a-b;
//   console.log('after swap: ','a: ', a, 'b: ', b);
// }

// > swapNumb(2, 3);
//    = before swap:  a:  2 b:  3
//    = after swap:  a:  3 b:  2

// #######  String reverse ######

// function reverse(str){
//   var rtnStr = '';
//   for(var i = str.length-1; i>=0;i--){
//     rtnStr +=str[i];
//   }
//   return rtnStr;
// }

// > reverse('you are a nice dude');
//   = "edud ecin a era uoy"

// ##### SUM OF TWO #############

// function sumFinder(arr, sum){
//   var len = arr.length;

//   for(var i =0; i<len-1; i++){
//      for(var j = i+1;j<len; j++){
//         if (arr[i] + arr[j] == sum)
//             return true;
//      }
//   }

//   return false;
// }

// > sumFinder([6,4,3,2,1,7], 9);
//   = true
// > sumFinder([6,4,3,2,1,7], 2);
//   = false

// ##### Largest Sum  ##########

// function topSum(arr){

//   var biggest = arr[0],
//       second = arr[1],
//       len = arr.length,
//       i = 2;

//   if (len<2) return null;

//   if (biggest<second){
//     biggest = arr[1];
//     second = arr[0];
//   }

//   for(; i<len; i++){

//    if(arr[i] > biggest){
//       second = biggest;
//       biggest = arr[i];
//     }
//    else if (arr[i]>second){
//       second = arr[i];
//    }

//  }
//  return biggest + second;
// }

// ####### Remove all even integers from an array #######

// const inputData = [4, 1, 9, 10, 15, 22, 5, 14]
// removeEvenNumbers (inputData) => {
//     let odds = []
//     for (let number of inputData) {
//         if (number % 2 != 0) odds.push(number)
//     }
//   return odds
// }
// console.log(removeEvenNumbers(inputData)))
// [4, 10, 22, 14]

// ##### Convert Max-Heap to Min-Heap #####

// minHeapify(heap, index) => {
//   let left = index * 2
//   let right = (index * 2) + 1
//   let smallest = index
//   if ((heap.length > left) && (heap[smallest] > heap[left])) {
//       smallest = left
//   }
//   if ((heap.length > right) && (heap[smallest] > heap[right]))
//       smallest = right
//   if (smallest != index) {
//       let tmp = heap[smallest]
//       heap[smallest] = heap[index]
//       heap[index] = tmp
//       minHeapify(heap, smallest)
//   }
//   return heap
// }
// convertMax(maxHeap) => {
//   for (let i = Math.floor((maxHeap.length) / 2); i > -1; i--)
//       maxHeap = minHeapify(maxHeap, i)
//   return maxHeap
// }
// let maxHeap = [9,4,7,1,-2,6,5]
// console.log(convertMax(maxHeap))

// ####### Print binary number up to N, where N can be any positive integer #####

// module.exports = class Queue {
//   constructor() {
//       this.items = []
//       this.front = null
//       this.back = null
//   }
//   isEmpty() {
//       return this.items.length == 0
//   }
//   getFront() {
//       if (this.items.length != 0) {
//           return this.items[0]
//       } else
//           return null
//   }
//   size() {
//       return this.items.length
//   }
//   enqueue(element) {
//       this.items.push(element)
//   }
//   dequeue() {
//       if (this.items.length == 0) {
//           return null
//       } else {
//           return this.items.shift()
//       }
//   }
// }

// generateBinaryNumbers(n) => {
//   let result = []
//   let myQueue = new Queue()
//   let s1, s2
//   myQueue.enqueue("1")
//   for (let i = 0 i < n i++) {
//       result.push(myQueue.dequeue())
//       s1 = result[i] + "0"
//       s2 = result[i] + "1"
//       myQueue.enqueue(s1)
//       myQueue.enqueue(s2)
//   }
//   return result
// }
// console.log(generateBinaryNumbers(3))

// ###### States in React ##########

// class User extends React.Component {
//   constructor(props) {
//      super(props);

//      this.state = {
//         message: "Welcome to React world",
//      }
//   }
//   render() {
//      return (
//         <div>
//            <h1>{this.state.message}</h1>
//         </div>
//      );
//   }
// }

// ####  Refs in React ########

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   render() {
//     return <div ref={this.myRef} />;
//   }
// }

// class UserForm extends Component {
//   handleSubmit = () => {
//     console.log("Input Value is: ", this.input.value)
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           ref={(input) => this.input = input} /> // Access DOM input in handle submit
//         <button type='submit'>Submit</button>
//       </form>
//     )
//   }
// }

// ###### Context API in React #########

// const ThemeContext = React.createContext('light');

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }
// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return <Button theme={this.context} />;
//   }
// }

// ########### Add Methods After Inheritance #########
// function Animal() {}
// Animal.prototype.eat = function() {
//   console.log("nom nom nom");
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };

// let beagle = new Dog();

// beagle.eat();
// beagle.bark();

// ###########################   Override Inherited Methods    ##############

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };

// let penguin = new Penguin();
// console.log(penguin.fly());

// ############ Functional Programming Terminology   #####################

// const prepareGreenTea = () => 'greenTea';
// const prepareBlackTea = () => 'blackTea';

// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );

// function higherOrder(fn) {
//   fn();
// }

// higherOrder(function() { console.log("Hello world") });

// function higherOrder2() {
//   return function() {
//     return "Do something";
//   }
// }
// var x = higherOrder2();
// x()

// var obj = {
//   name:  "vivek",
//   getName: function(){
//   console.log(this.name);
// }

// }

// var getName = obj.getName;

// var obj2 = {name:"akshay", getName };
// obj2.getName();

// var obj1 = {
//   address : "Mumbai,India",
//   getAddress: function(){
//   console.log(this.address);
// }
// }

// var getAddress = obj1.getAddress;
// var obj2 = {name:"akshay"};
// obj2.getAddress();

// ############# FILTER() METHODS #############

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersUnder30 = users.filter(user => user.age < 30);
// console.log(usersUnder30);

// ##### SLICE() and Splice() #####

// const arr = ["Cat", "Dog", "Tiger", "Zebra"];
// const newArray = arr.slice(1, 3);

// const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// cities.splice(3, 1);

// ###### Use the reduce Method to Analyze Data  ##########

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj);

// ########## map, filter, or reduce to Solve a Complex Problem #####

// const squareList = arr => {

//   return arr
//           .filter(num => num > 0 && num % parseInt(num) === 0)
//           .map(num => Math.pow(num, 2));

// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// Output would be [25, 9]

// ###############   Sort an Array Alphabetically using the sort Method   #########

// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }

// ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5].

// ######### Split a String into an Array Using the split Method #######

// const str = "Hello World";
// const bySpace = str.split(" ");

// output: ["Hello", "World"]

// const otherString = "How9are7you2today";
// const byDigits = otherString.split(/\d/);

// output: ["How", "are", "you", "today"]

// ###### Combine an Array into a String Using the join Method ####

// function sentensify(str) {

//  return str.split(/\W/).join(" ");
// }

// sentensify("May-the-force-be-with-you");

// [May the force be with you]

// #### Using the every Method to Check that Every Element in an Array Meets a Criteria ###

// function checkPositive(arr) {

//   return arr.every(val => val > 0);
// }

// checkPositive([1, 2, 3, -4, 5]);

// ##### Currying and Partial Application ######

// function add(x) {

//   return function(y) {
//     return function(z) {
//       return x + y + z;
//     };
//   };
// }

// add(10)(20)(30);

// ####### Sum All Numbers in a Range  ##########

// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;
//   for (let i = min; i <= max; i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

// sumAll([1, 4]);

// ####### Seek and Destroy ######

// function destroyer(arr) {
//   const valsToRemove = Object.values(arguments).slice(1);
//   const filteredArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     let removeElement = false;
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (arr[i] === valsToRemove[j]) {
//         removeElement = true;
//       }
//     }
//     if (!removeElement) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// function whatIsInAName(collection, source) {

//   const souceKeys = Object.keys(source);

//   return collection.filter(obj => {
//     for (let i = 0; i < souceKeys.length; i++) {
//       if (!obj.hasOwnProperty(souceKeys[i]) ||
//           obj[souceKeys[i]] !== source[souceKeys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// );

// ##### Spinal Tap Case #####

// function spinalCase(str) {
// Create a variable for the white space and underscores.
//   var regex = /\s+|_+/g;

// Replace low-upper case to low-space-uppercase
//   str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

// Replace space and underscore with
//   return str.replace(regex, "-").toLowerCase();
// }

// test here
// spinalCase("This Is Spinal Tap");

// #######  Search and Replace  ######

// function myReplace(str, before, after) {
// Finding index where before is on string

//   var index = str.indexOf(before);
// Checking to see if the first letter is uppercase or not

//   if (str[index] === str[index].toUpperCase()) {
// Changing the after word to be capitalized before we use it.
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   } else {
// Changing the after word to be uncapitalized before we use it.
//     after = after.charAt(0).toLowerCase() + after.slice(1);
//   }
// Now replacing the original str with the edited one.
//   str = str.replace(before, after);

//   return str;
// }

// testing here
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// ####### React Passing components #######

// function Blog() {
//   const post = { title: "My Blog Post!" };

//   return <BlogPost post={post} />;
// }

// function BlogPost(props) {
//   return <h1>{props.post.title}</h1>
// }

// function BlogPost({ post }) {
//   return <h1>{post.title}</h1>
// }

// import { createContext, useContext } from 'react';

// const PostContext = createContext()

// function App() {
//   const post = { title: "My Blog Post!" };

//   return (
//     <PostContext.Provider value={post}>
//       <Blog />
//     </PostContext.Provider>
//   );
// }

// function Blog() {
//   return <BlogPost />
// }

// function BlogPost() {
//   const post = useContext(PostContext)

//   return <h1>{post.title}</h1>
// }
// posts.map(post => <li key={post.id}>{post.title}</li>)
// posts.map(post => <li key={post.id}>{post.title}</li>)

//   import { useRef } from 'react'

// function MyComponent() {
//   const ref = useRef();

//   useEffect(() => {
//     console.log(ref.current) // reference to div element
//   }, [])

//   return <div ref={ref} />
// }
//   return (
//     <>
//       <div className="App">
//         <h1>Algo and Data Instruction</h1>
//       </div>
//       <div></div>
//     </>
//   );
// }
// export default App;
