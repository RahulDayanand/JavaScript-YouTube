/* 
   Stack Memory(Call By Value) - All primitive data types are stack memory,
   the variables declared will have a copy of it.
   All values of stack are given by copy of the value/variable
   where a change in the 2nd variable won't change the value of the original variable

   Heap Memory(Call By Reference) - All non-primitive data types are heap memory,
   a reference of the original value will be there.
   All values of heap are given by reference of the value/variable
   where a change in the 2nd variable will change the value of the original variable as well

*/

let username = "Rahul";

let username2 = username;   //takes only copy of username and not reference of username
username2 = "Harsha";

console.log(username);

console.log(username2);

let user1 = {
   name : "Harsha",
   age :24,
}

let user2 = user1;

user2.name = "Rahul"

console.log(user1);
console.log(user2);