let fs = require('fs');

// let readFile = fs.readFile('./text1.txt', "utf-8", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log("data *******", data);
//     fs.readFile('./text2.txt', "utf-8", function(err, data){
//         if(err){
//             console.log(err)
//         }
//         console.log("data *******", data)
//         fs.readFile('./text3.txt', "utf-8", function(err, data){
//             if(err){
//                 console.log(err)
//             }
//             console.log("data *******", data);
//         })
//     });
// });


// Promise is class // Object
// f1 -> f2 -> f3
const prom1 = fs.promises.readFile('./text1.txt', "utf-8");

prom1
.then(function(data){
    console.log(data)
    return  fs.promises.readFile('./text2.txt', "utf-8");
})
.then(function(data){
    console.log(data)
    return  fs.promises.readFile('./text3.txt', "utf-8");
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
});