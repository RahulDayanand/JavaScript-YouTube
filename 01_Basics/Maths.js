console.log(Math);

console.log(Math.abs(-5));  //Absolute - converts negative value to positive ,but positive value remains positive
console.log(Math.abs(5));

console.log(Math.round(5.4));
console.log(Math.round(5.7));

console.log(Math.ceil(5.2)); 
console.log(Math.floor(5.9));

console.log(Math.min(5,8,0,10));
console.log(Math.max(5,6,3,4,2,9));

console.log(Math.random()); //random - value always range from 0 to 1.
console.log((Math.random() * 10) + 1 );  // + 1 is added so that value always start from 1 and above.
console.log(Math.floor((Math.random() *10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()  * (max-min+1)));
console.log(Math.floor(Math.random()  * (max-min+1) + min)); 

// +min is to make sure minimum value always starts from 1 and above