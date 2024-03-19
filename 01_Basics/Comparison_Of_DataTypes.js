// console.log(2 >= 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* 
  The reason is that an equality check == and comparisons > < >= <=
  work differently
  Comparisons convert null to a number ,treatint it as 0.
  That's why Line 13 - null >= 0 is true and Line 11 - null > 0 is false
*/

console.log(undefined > 1);
console.log(2 > undefined);
console.log(undefined == 0);
console.log(undefined < 0);

// ===

console.log(2 === "2");
console.log(2 == "2");




