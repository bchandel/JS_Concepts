// object literal 
let obj ={
    "key" : "value"
}


// Object constructor
let obj1 = new Object();


obj1.a = "hello";

function sum(a, b){
    return a+b;
}

// console.log(sum(5,10));

// Array.prototype.myMap = function(){
    
// }

// Object 

let arr = [1,2,3]
console.log(sum.__proto__ == Function.prototype)// 
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

