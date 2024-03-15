var fs = require('fs');

let readFileCB = function(err, data){
    if(err){
        console.log(err)
    }
    console.log("data *******", data)
}

// let readFile = fs.readFile('./text1.txt', "utf-8", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log("data *******", data)
// });


// let readFile = fs.readFile('./text1.txt', "utf-8", readFileCB);


// call back hell 
let readFile = fs.readFile('./text1.txt', "utf-8", function(err, data){
    if(err){
        console.log(err)
    }
    console.log("data *******", data);
    fs.readFile('./text2.txt', "utf-8", function(err, data){
        if(err){
            console.log(err)
        }
        console.log("data *******", data)
        fs.readFile('./text3.txt', "utf-8", function(err, data){
            if(err){
                console.log(err)
            }
            console.log("data *******", data);
        })
    });
});
