const a = new Object();  //It is a singleton
const a1 = {};          //It is non-singleton

console.log(a);
console.log(a1);

a1.id = "555";
a1.name = "baton";
a1.isLoggedIn = false;

console.log(a1);

const user = {
    email : "rahul@gmail.com",
    fullname : {
        username : "Rahul",
        lastname : "D"
    }
}

console.log(user.fullname.username);

const obj1 = {1 : "a",2 : "s",3 : "t"};
const obj2 = {4 : "x",5 : "q",6 : "e"};

//const object3 = { obj1 , obj2 };

//Syntax - const returnedTarget = Object.assign(target, source);

const object3 = Object.assign({},obj1,obj2);
console.log(object3);

const object4 = {...obj1,...obj2};
console.log(object4);

const users = [{
    email : "abc@gmail.com"
},
{
   email : "xyz@gmail.com"
},
{

}]

console.log(users[1].email);

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('email'));