function basic(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

basic();

function addition(number1,number2){
    return number1 + number2;
    console.log(number1 + number2); //anything declared under return statement will be ignored
}

const result = addition(2,5);
console.log(result);

// function LoginUserMessage(username){
//     return `${username} just logged in`;
// }

// console.log(LoginUserMessage("Rahul"));

// function LoginUserMessage(username){

//     if(username === undefined){
//        console.log("Please enter the username");
//        return;
//     }
//     return `${username} just logged in`;
// }

// console.log(LoginUserMessage());

function LoginUserMessage(username = "User"){

    if(!username){
       console.log("Please enter the username");
       return;
    }
    return `${username} just logged in`;
}

console.log(LoginUserMessage("Rahul"));  //It will override the "username = "user" and will print Rahul"
