var someVar = 10;

function b(){
    console.log(" i am from b" + someVar)
}

function c(){
    var someVar = 20
    b();
    console.log(" i am from c" + someVar)
}

c();

// GEC 

// Lexical scope means wherever fun is created or fun defination is pr
// Here b in global 
// no matter where it is getting called 