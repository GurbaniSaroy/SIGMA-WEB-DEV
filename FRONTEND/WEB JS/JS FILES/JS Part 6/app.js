//------------function without arguments---------------
//function defination
function hello() {
    console.log("hello");
}
//function calling
hello();

//------------fuction with arguments---------------
//function defination
function printName(name, age) {
    console.log(name, age);
}
//function calling
printName("Gurbani", 19);

//-----------function with return----------------
function sum(a, b) {
    return a + b;
}
//sum of three numbers using a function with 2 args
console.log(sum(sum(5, 2), 3));

//------------function expression----------------
let e;//global scope
const sum1 = function (c, d) {
    e = c + d;//c and d have function scope
    return e;
}
sum1(2, 3);
console.log(e);

//----------Higher Order Functions--------------
//--- Part1 takes functions as an argument---
let greet = function ()//function expression
{
    console.log("Hello");//fxn defination
}
function multipleGreet(func, n)//takes function as an input
{
    for (let i = 0; i <= n; i++) {
        greet();
    }
}
multipleGreet(greet, 2);//function calling and giving a fxn as an I/O

//----------Part2 returns a function---------
let request = "odd";
function oddEvenFactory(request)//factory fxn
{
    if (request == "odd") {
        let odd = function (n)//a fxn to return true if the fxn is odd
        {
            console.log(!(n % 2 == 0));
        }
        return odd;
    }
    else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);//a fxn to return true if the fxn is even
        }
        return even;
    }
    else {
        console.log("Wrong request");
    }
}
let func=oddEvenFactory(request);
func(10);

//--------------methods----------
const calculator={
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
console.log(calculator.add(2,5));
console.log(calculator.sub(2,5));
console.log(calculator.mul(2,5));




