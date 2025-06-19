// Qs1
let num=20;
if(num%10==0)
{
    console.log("good");
}
else{
    console.log("Bad");
}
//Qs2
// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// console.log(`${name} is ${age} years old`);
//Qs3
let quarter=1;
switch(quarter)
{
    case 1:console.log("January, Februray, March");
    break;
    case 2: console.log("April, May, June");
    break;
    case 3: console.log("July, August, September");
    break;
    default:console.log("October, November, December");
    break;
}
//Qs4
let str="Appleee";
if(str.length>5 && (str[0]==="a"|| str[0]==="A"))
{
    console.log("The string is golden");
}
else{
    console.log("The string is not golden");
}
//Qs5
let num1=13;
let num2=9;
let num3=50;
if(num1>=num2&& num1>=num3)
{console.log("Num1 is largest");
}
else if(num>=num3){
    console.log("Num2 is largest");
}
else{
    console.log("Num3 is largest");
}
//Qs6.
let firstNum=32;
let secondNum=47852;
if(firstNum%10===secondNum%10)
{
    console.log("The last number is same");
}
else
{
    console.log("The last number is not same");
}