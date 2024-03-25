const score = 100;
console.log(score);

const score1 = new Number(100);
console.log(score1); 

console.log(score1.toString().length);
console.log(score1.toFixed(1));

const otherNumber = 123.89666;
const number1 = 4321.7886;
console.log(otherNumber.toPrecision(3));  
console.log(number1.toPrecision(3));
console.log(number1.toPrecision(4));

/* 
   toPrecision - Returns a string containing a number represented either in exponential
   or fixed point notation with a specified number of digits.

   @param precision - Number of significant digits.Must be in the range 1-21,inclusive  
*/

const hundreds = 1000000;
console.log(hundreds.toLocaleString())   
console.log(hundreds.toLocaleString('en-IN'))   

//LocaleString converts string to number by using the current/specified locale
//It makes a neat representation of currency,en-IN converts to Indian style of rupees instead of USA
