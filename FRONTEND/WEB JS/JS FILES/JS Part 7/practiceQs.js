//Qs1. write an arrow function that returns the square of a number n
const square=(n)=>{
    return(n*n)
};
console.log(square(2));

//Qs2. write a function that prints hello world 5 times at intervals of 2s each.
let id1=setInterval(()=>{
    console.log("Hello world");
},2000);
setTimeout(()=>{
    clearInterval(id1);
},10000);