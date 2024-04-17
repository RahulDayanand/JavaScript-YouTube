function a(){
    
    const name = "Rahul";
    
    function b(){
        const email = "abc@gmail.com";
        console.log(name);
    }

//  console.log(email);  //This don't work as JS comes line by line and function b is declared after console log,hence reference error
    
    b();

}

a();

if(true){
    const username = "Harsha";
    if(username === "Harsha"){
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website);   //Referene Error
}

//console.log(username);  //Reference Error

console.log(addthree(3));
function addthree(num){
    return num + 3;
}

//console.log(addthree(3));

console.log(addfive(5));     //Hoisting - ReferenceError: Cannot access 'addfive' before initialization

const addfive = function(num){
   return num + 5;
}

//console.log(addfive(5));