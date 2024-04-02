/* Array - It is an collection of multiple items under a single variable name,
it has members which can perform many common array operations */

/* JS Arrays are resizeable and can contain mix of different data types
   and JS arrays are not associative array,
   so array elements cannot be accessed arbitrary stings as indexs,
   JS Arrays are also zero indexed
*/

//Eg -
  
const arr = [1,2,3,4,5,"Rahul",true];

console.log(arr[0]); //zero-indexed element.

//console.log(arr["one"]) //cannot be accessed arbitrary strings as index

/* 
   JS Arrays - copy operations create shallow copies instead of deep copies.
   
   Shallow copies are copy of an object where properties share the references those of 
   source object from which the copy was made instead of call by value(deep copies),
   (shallow copies) where changes in the 2nd element also changes the original element 
  
*/

let arr1 = [0,1,2,3,4,5];
console.log(arr1[5]);

let arr2 = ["GuruDev","Pratapavate"];
console.log(arr2[0]);