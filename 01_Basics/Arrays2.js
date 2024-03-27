
const MCU = ["IronMan","Thor","Captain America","SpiderMan","Quick Silver","Scarlet Witch","Doctor Strange"];

const DCU = ["Cyborg","SuperMan","Captain Atom","BatMan","Flash","Wonder Woman","Doctor Fate"];

// MCU.push(DCU);
// console.log(MCU);

//ConCat - Have to use extra variable as concat method have a return value 

const Super_Heroes_United = MCU.concat(DCU);
console.log(Super_Heroes_United);

//Spread Operator

const Heroes_United = [...DCU , ...MCU];
console.log(Heroes_United);

const arr = [1,2,3,[4,5],[6,7,[8,9]],10];

const arr1 = arr.flat(Infinity); 
console.log(arr1);

/* 
    Flat - Returns a new array with all sub array elements
    concatenated into it recursively upto the specified depth
*/

console.log(Array.isArray("Rahul"));  //To check is it's array or not
console.log(Array.isArray([1,2,3]));  
console.log(Array.from("Rahul"));  //Converts it into Array
console.log(Array.from({name : "Rahul"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  

//Array.of - Returns a new array from the given set of elements