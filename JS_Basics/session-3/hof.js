
let arr = [1,2,3,4];
// example of higher order function
let multiplyBy5 = arr.map(function(val, index){
    return val * 5;
});

// console.log(multiplyBy5);

// callbacks : function we pass as an argument into another function 

console.log("i am  fist");

setTimeout(function(){
    console.log("i am second")
},0);// async programming 

console.log("i am third");
