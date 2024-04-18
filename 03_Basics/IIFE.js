//Immediately Invoked Function Expressions

(function sample(){
    console.log("Yeno Ondu");
})();   //without this statement termination/semi colon the continous IIFE won't work

(() => {
    console.log("Yeno Ondu Yeradu")
})();

((name) => {
    console.log(`Yeno Ondu Yeradu ${name}`)
})('Mooru');

/* 

IIFE is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1.The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

2.The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

Usecases - To prevent/avoid polluting Global Namespace

*/