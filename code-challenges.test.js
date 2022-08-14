// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// Pseudocode: Make a test that takes an array and multiples all the values in the array so that the 
// expected output = [18, 21, 24, 27, 30]
// describe("mult3", () => {
//// a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       const numbersArray1 = [6, 7, 8, 9, 10]
//       // Expected output: [18, 21, 24, 27, 30]
//       const numbersArray2 = [24, 27, 30, 33, 36]
//       // Expected output: [72, 81, 90, 99, 108]
//       expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30]);
//       expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108]);
//     });
//   });
//   const mult3 = (array) => {
//     return array.map(value => value * 3)
//    }
// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// // a) Create a test with expect statements for each of the variables provided.
// // Pseudocode:
// //// test template
// // a describe method that lists the name of the function OR naming of the particular test.
// //declare a function that 
// // takes an object as an argument and decides  if the number inside it is evenly divisible by three or not.
// //input will be a number and out put will say if the number is equally divisible by t
// //output : a a string that says  15 is divisible by three", or 15 is divisible by three", or "-7 is not divisible by three"
// const object1 = { number: 15 };
// // Expected output: "15 is divisible by three"
// const object2 =  { number: 0 };
// // Expected output: 0 is divisible by three"
// const object3 = { number: -7 };
// // Expected output: "-7 is not divisible by three"
// describe("divByThree", () => {
//   it("takes an object as an argument and decides  if the number inside it is evenly divisible by three or not",()=>{    
// expect(divByThree(object1.number)).toEqual("15 is divisible by three")
// expect(divByThree(object2.number)).toEqual("0 is divisible by three")
// expect(divByThree(object3.number)).toEqual("-7 is not divisible by three")
// });
// });
// // b) Create the function that makes the test pass.
// //Pseudocode:
// //declare a function that takes an object as an argument 
// //decides if number inside is evenly divisible by three or not.
// //input will be a number 
// //output : a a string that says  15 is divisible by three", or 15 is not divisible by three".
// const divByThree = (object) => {
// if(object % 3 === 0){
// return `${object} is divisible by three`
// } else {
//   return `${object} is not divisible by three`
// }
// }
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
//Pseudocode: declare a describe test makeCaps that iterates through an array and returns the array with all the words capitalized check to see if the array is returned 
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

// describe("makeCaps", () => { 
//   it("takes an array and returns the array with  the words capitalized",()=>{    
// expect(makeCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// expect(makeCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
// });
// });
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// // b) Create the function that makes the test pass.
// //Tried some approach I found online below, it did not work but I think it could with more refactoring 
// // const makeCaps = (arr) => {
// //   let calc = arr.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('')
// //   return calc;
// // }
// //Pseudocode: 
// //declare a function that takes an array 
// //create a local variable that maps thru the array
// //with each value access the first index and capitalize the letter 
// //then concatenate the remainder of the word
// //my test kept failing. It seems to return randomNums1 to cap the first letter but not randNums2. Why would it work on one array and not the other.?...well I had toUppercase()instead of toUpperCase() then I removed the join method and it worked
// const makeCaps = (array) => {                         
//   let eachItem = array.map((value) => {               
//     return value[0].toUpperCase() + value.substring(1)
//   })                                                   
//     return eachItem
// }

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.
// //Pseudocode: describe  a function that takes in a string and logs the index of the first vowel.
// //iterate through a string .map() and 
// //return the location of the first vowel. 
// // a describe method that lists the name of the function OR naming of the particular test.
describe("spellCheck", () => {
// a test/it method, that checks if the function spellCheck returns the index of the first vowel
// Ran test and was a good Red LIght at the expect statement FAIL  ./code-challenges.test.js

  it("function that takes in a string and logs the index of the first vowel.", () => {
    
    expect(spellCheck(vowelTester1)).toEqual(1);
    expect(spellCheck(vowelTester2)).toEqual(0);
    expect(spellCheck(vowelTester3)).toEqual(2);
  });
});

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
// b) Create the function that makes the test pass.
//Pseudocode: function that takes in an string and iterates thru to find the first instance of a vowel and returns the index of that vowel
//declare a local variable to store the vowels. 
//for loop iterate thru the string to find the index of the matching string to the array
//Refactor ideas: turn the vowels into an array and iterate 
// const spellCheck = (string) => {
// // return string.indefOf((value) => value == firstVowel)
// let littles = string.split('');
// for(i=0; i<littles.length; i++){
//   if(littles[i] == 'a' || littles[i] == 'e' || littles[i] == 'i' || littles[i] == 'o' ||littles[i] == 'u'){
//     return i;
//   }}
// }



//// function spellCheck(str){
//   let test = str.search(/[a,e,i,o,u]/g)
//   console.log("flag",test)
//// }

//// spellCheck(vowelTester1)         attempted Regex did not work, yet....