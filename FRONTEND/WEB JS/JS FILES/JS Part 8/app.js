//------------ARRAY METHODS------------------
//----------forEach method--------------
let arr=[11,12,13,14];
function print(ele){
    // console.log(ele);
}
arr.forEach(print);
//OR

//---------reduce method-------------
let nums=[1,2,3,4];
let finalVal=nums.reduce((res, ele)=>{
    // console.log(res);
    return res+ele;
});
// console.log(finalVal);

//----------find max using reduce method-----------
let array=[10,20,30,40,50,1];
let ans=arr.reduce((max, ele)=>{
    if(max< ele){
        // return ele;
    } else{
        // return max;
    }
})
//OR
// let max=0;//global scope
// for(let i=0; i<array.length;i++){
//     if(max<array[i]) //function scope
// {
//         max=array[i];
//     }
// }
// console.log(max);

//-------------------Default Parameters------------
function sum(a, b=2){
    // console.log(a+b);
}
sum(1);

let array1=[8,1,80,60,65,70,5,100,700];
console.log(Math.min(...array1));

//---------------spread with array literals---------
let arr1=[11,12,13,14,15];
let newArr=[...arr1];
console.log("spread operator ");
console.log(newArr); //works in console

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums1=[...odd, ...even];
console.log(nums1);

//-------------- spread with object literals-------------
let data={
    email: "gurbanisaroy@gmail.com",
    password: "gurbani123"
};

const dataCopy={...data, id: 12345, country: "India"};//adding additional data in it 
console.log(dataCopy);

//TO CONVERT AN ARRAY ITEMS INTO OBJECT
let obj1={...arr1};
console.log(obj1);

//TO CONVERT A STRING INTO OBJECT
let string="Gurbani";
let obj2={...string};
console.log(obj2);

//--------------------REST------------------
function summ(...args){
    for(let i=0; i<args.length; i++){
        console.log("You gave us:",args[i]);
    }
}
//COLLECTION -> arguments
function min(){
    console.log(arguments);//no error thrown
    console.log(arguments.length);
}

//----------------Destructuring--------------
//DESTRUCTURING USING ARRAYS
let names=["tony", "bruce","peter", "steve", "abcd","man","sar", "bani"];
let [winner, runnerUp, secondRunnerUp, ...others]= names;// to get the other pending names we can use the concept of rest.
console.log(winner);
console.log(secondRunnerUp);
console.log(others);

//DESTRUCTURING USING OBJECTS
const student={
    name:"gurbani",
    age: 21,
    class:17,
    subjects:["hindi", "punjabi", "dsa", "cpi"],
    username: "gurbani@123",
    password: "starmoon"
};
let { username, password}= student;
console.log(username);
console.log(password);
//OR (if I want to change the value of the keys)
let {username: user, password: secret}= student;//here username will not work but user will work similarly with password
