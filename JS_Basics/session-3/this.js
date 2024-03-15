



// ES6 

// let arrowSumFun = (a, b) =>{
//     return a+b; 
// }

// let someFun = function(a, b){
//     return a+b; 
// }

// "this"  in Node & browser  using strict  and non-strict mode 
//'use strict'
//console.log(this); // 


let obj =  {
    name: "Alex",
    sayHellow : () =>{
        console.log(this);
    }
};

obj.sayHellow(); // method invocation

let directInvocation = obj.sayHellow;
//console.log(directInvocation)
directInvocation();
// console.log(directInvocation())