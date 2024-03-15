let arr = [1,2,3,4,5,6] ;

console.log(arr)

// arr.sum = function(){
//     let sum =0;
//     for(let i=0; i< this.length; i++){
//         sum += this[i];
//     }
//     return sum;
// }

// console.log(arr.sum());

let arr2 = [34,56,34];

//console.log(arr2.sum());


Array.prototype.sum = function(){
    let sum =0;
    for(let i=0; i< this.length; i++){
        sum += this[i];
    }
    return sum;
}

console.log(arr.sum());
console.log(arr2.sum());