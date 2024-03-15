// Async/await these are syntactic sugar 
// They are wrapper on top of the promiuses
// async/await keywords, used together (if you are using await then you have crate fucntion with async keyword)

// async function someFunc(){


// }


async function sum(a,b){
    return a+b;
}


// console.log(sum(4,5));

// sum(2,4)
// .then(function(data){
//     console.log(data)
// })

async function calculateSum(){
    let res = await sum(2, 5);
    console.log(res)
}

// calculateSum();



// Promise is class // Object
// f1 -> f2 -> f3

const fs = require('fs');
// const prom1 = fs.promises.readFile('./text1.txt', "utf-8");

// prom1
// .then(function(data){
//     console.log(data)
//     return  fs.promises.readFile('./text2.txt', "utf-8");
// })
// .then(function(data){
//     console.log(data)
//     return  fs.promises.readFile('./text3.txt', "utf-8");
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// });


async function readFiles(filepath){
    return fs.promises.readFile(filepath, "utf-8");
}

async function fileRead(filepath){
    try{
        let data = await readFiles(filepath);
        console.log(data);
    }
    catch(err){
        console.error(err);
    }
}

// fileRead('./text1.txt');


try{
    setTimeout(function(){
        console.log("i am getting exicuted");
        console.log(a);
    },100)
}
catch(err){
    console.error(err);
}