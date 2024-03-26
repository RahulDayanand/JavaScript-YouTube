let date = new Date();

console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.getDate());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.getDay());

// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// console.log(date.getTimezoneOffset());

console.log(typeof date);  //Date is an object in JavaScript

let date1 = new Date(2024,2,26);  //Month start from 0 in JS
console.log(date1.toDateString());

let date2 = new Date(2024,2,26,16,3,2);  //Month start from 0 in JS
console.log(date2.toLocaleString());
console.log(date2.toLocaleDateString());

let date3 = new Date("2024-01-25");
console.log(date3.toLocaleString());

let date4 = new Date("01-25-2024");
console.log(date4.toLocaleString());

let timestamp = Date.now();  //gives output completely in milliseconds
console.log(timestamp);
console.log(date4.getTime()); //conversion of date into completely milliseconds

// Common Interview Question

console.log(Date.now()/1000) //converting milliseconds to seconds 
console.log(Math.floor(Date.now()/1000)) //to remove decimals

let date5 = new Date();
console.log(new Date());
console.log(date5.getMonth() + 1);
console.log(date5.getDay());

date5.toLocaleString('default',{
    weekday : "long",
})

console.log(date5);