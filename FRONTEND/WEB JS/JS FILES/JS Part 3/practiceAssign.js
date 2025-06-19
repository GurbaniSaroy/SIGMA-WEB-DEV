//Question1. 
let array=[2,3,4,5,6,7,8];
let n1=3;
console.log(array.slice(0,n1));

//Question2.
let n2=3;
console.log(array.slice((array.length)-n2));

//Question3.
let string="";
if(string.length==0)
{
    console.log("The string is empty");
}
else
{
    console.log("The string is not empty");
}

//Question4.
let charString="gurbAni";
let index=3;
if(charString[index]==charString[index].toLowerCase())
{
    console.log("It is a lower character");
}
else
{
    console.log("Not a lower character");
}

//Question5.
let stripChar="     gurbani    ";
console.log(stripChar.trim());

//Question6.
let elementArray=[1,"a","A"];
let element="A";
if(elementArray.indexOf(element)!=-1)
{
    console.log("Exists!");
}
else{
    console.log("Doesnot exists!");
}