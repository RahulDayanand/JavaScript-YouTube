//Singleton
//Eg - Object.create

//Object Literals

//Objects declared as literals cannot be singleton but objects declared as constructors is

const key = Symbol("key1");

const JSUser = {
    name : "Rahul D",
    age : 24,
    [key] : "key2",  //[] so that it can be referred as Symbol instead of String
    location : "Bengaluru",
    email : "abc@gmail.com",
    isLoggedIn : false,
}

console.log(JSUser.name);
console.log(JSUser["name"]);
console.log(typeof key);
console.log(key);
console.log(JSUser[key]);

JSUser.email = "rahul@gmail.com";
console.log(JSUser);

//Object.freeze(JSUser); //It freezes the object so that no changes can be made here after

// JSUser.email = "Rahul@gmail.com";
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS User");
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());