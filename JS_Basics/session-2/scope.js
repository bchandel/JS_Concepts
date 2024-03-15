//{} => block sope


// let & const are blocked scope

// let a =10;

// {

//     let a = 23;
//     console.log(a);
//     {
//         let a =30;
//         console.log(a)
//     }
// }

// console.log(a);



// let a =10;
// console.log("line 23", a); // 10 
// function fn(){
//     console.log("line 25", a); //10 , error 
//     // let a =20;
//     console.log("line 27", a); //20
//     a++;
//     if(a){
//         let a =30;
//         console.log("line 31",a) // 30
//         a++
//     }
//     console.log("line 3", a); //21
// }
// console.log("line 36", a);  // 10

// fn();


// functional scope 


var a =10;
console.log("line 23", a); // 10
function fn(){
    console.log("line 25", a);  // 10 , 20
    var a =20;
    console.log("line 27", a); //20
    a++;
    if(a){
        var a =30;
        console.log("line 31",a) // 30
        a++
    }
    console.log("line 3", a); //21 31
}
console.log("line 36", a);  // 10

fn();