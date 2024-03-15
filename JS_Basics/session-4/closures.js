const { count } = require("console");

let fun = function(){
    let i=20;
    return function(){
        console.log(i)
    }
}

let someFun = fun();

// console.log(someFun());


function outerFunc(){
    let cont =0; 
    return function(){
        cont++;
        console.log(cont);
    }
}


let inner = outerFunc();
let inner2 = outerFunc();

console.log(inner())// 
console.log(inner())
console.log(inner())

console.log(inner2())
console.log(inner2())

// IIFE immediatly invoked function expression
var counter = (function(){
    var privateCounter = 0;
    function changeBy(value) {
        privateCounter += value;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        displayValue: function() {
            return privateCounter;
        }
    }
})();

// (functuion(){

// })()

console.log(count.displayValue()) // 0
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement()) //4
console.log(count.displayValue()) //3
