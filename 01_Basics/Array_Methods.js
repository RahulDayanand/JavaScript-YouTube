 const arr = [0,1,2,3,4,5];

// arr.push(6);
// arr.push(7);
// arr.push(8);

// console.log(arr);

// arr.pop();  //Removes/Deletes last element of the array - Last In First Out(LIFO)

// console.log(arr);

// arr.unshift(8);  //Adds the element at the 0th index
// console.log(arr);

// arr.shift(); //Removes/Deletes the first element of the array
// console.log(arr);

// arr.shift(); 
// console.log(arr);

// arr.unshift(0); 
// console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.indexOf(4));

// const arr3 = arr.join();  //Join - convert elements of arrays into string
// console.log(arr3);
// console.log(typeof arr3);

//Interview Question - Difference Between Slice And Splice 

console.log("A ",arr);

const a1 = arr.slice(1,3);
console.log(a1);
console.log("B ",arr);

const a2 = arr.splice(1,3);
console.log(a2);
console.log("C ",arr);

//So,in Slice the first range gets printed but not the last range value and no changes in the array.

//In splice both the first and last range value gets printed and the array also changes as the range values are taken out.
