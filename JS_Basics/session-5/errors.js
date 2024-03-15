// Syntx --> unexpected identifier

// Runtime --> Refrence error, Range Error, Type Error 

// Unexpected Identifier..
// lt a=4;

// // Illigal Shadowing
// let a = 10; // redeclare using let keyword
// {
//     var a = 20; 
//     console.log(a);
// }




// RunTime Errors.

// Ref errors 
// 1. TDZ Errors -> Temporal dead zone caused Ref error
// console.log(a); //tDZ 
// let a = 10;

// ReferenceError
// console.log("asasdsa");
// fn();

// ReferenceError
// "use strict"
// a = 10;
// console.log(a);

//  Range Errors
// Whenever maximum call stack get used or overflowed. 
// function sum () {
//     sum();
// }
// sum();

// let a = [];
// a.length = 100 ** 100;
// console.log(a);

// type Error
let num = 10;
console.log(num.toUpperCase());

// function fn() {
//     let str = "Hello";
//     console.log(str.abc.def);
// }
// fn();


// debouncing, and throttling






