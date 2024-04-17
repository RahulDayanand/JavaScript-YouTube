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