const accoundId = 55555;
let emailId = "rahul@gmail.com";
var password = "asdasdasdas";
city="hyderabad";
let accountState;

console.log(accoundId);

city="bengaluru";
emailId = "rrrr@gmail.com";
password = "dsadasdasd";

console.log(city);

console.table([accoundId,emailId,password,city,accountState]);

/* 
   Prefer not to use var
   because of issues in block scope and function scope
*/