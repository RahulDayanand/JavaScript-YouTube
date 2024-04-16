//var a=300;
let b = 200;       //Global Scope

if(true){
    var a = 10;
    let b = 20;                            //Block Scope   
    const c = 30;
    console.log("Inside Block Scope = ",b)
}

//console.log(c);
console.log(b);
//console.log(a)

//Var is not used ahead of let & const because var will give lot of debugging issues,it modifies the values inside block scope as well