//Primitive Data Types

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let username;

const name = "Rahul";

const symbolId = Symbol("005");
const symbolId2 = Symbol("005");

console.log(symbolId === symbolId2);

const bigNumber = 5632109874n;

//Non Primitive Data Types

const heroes = ["GuruDev","Pratapavate","Virika","Inspector Bhairava","Detective Bhargava","Yodeya"];

let myObj = {
    Director : "Rahul",
    Age : 24,
}

const myFunction = () => {
    console.log("Welcome To Our World");
}

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heroes);
console.log(typeof bigNumber);
console.log(typeof symbolId);
console.log(typeof symbolId2);