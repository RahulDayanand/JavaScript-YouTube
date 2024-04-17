const user = {
    username : "Rahul D",
    price : 555,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to our website`);
        console.log(this);
    }

}

user.welcomeMessage();

user.username = "Harsha";
user.welcomeMessage();

// console.log(this);

//The global object for JS in browser is Window Object and in github codespace it's empty object

// function something(){
//     let user = "Rahul";
//     console.log(this);   //this doesn't work under functions
// }

// something();

const some = () => {
    let user = "Rahul";
    console.log(this);   //this works in arrow functions and objects
}

some();

const add = (num1,num2) => {
    return num1 + num2;
}

console.log(add(3,5));

const add1 = (num1,num2) => num1 + num2; //Implicit Return

console.log(add1(3,5));

const add2 = (num1,num2) => ({ username : "Rahul D" });  //Object

console.log(add2(3,5));