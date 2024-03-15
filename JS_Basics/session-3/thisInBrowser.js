

'use strict'

console.log(this); // 


let obj =  {
    name: "Alex",
    sayHellow : function(){
        console.log(this)
    }
};

// obj.sayHellow(); // method invocation

let directInvocation = obj.sayHellow;
//console.log(directInvocation)
directInvocation();
// console.log(directInvocation())