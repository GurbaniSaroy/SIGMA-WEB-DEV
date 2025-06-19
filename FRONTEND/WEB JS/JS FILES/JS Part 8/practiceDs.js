let arr=[10,20,30,50,80,80];
//Qs1. Check if all the numbers in our array are multiples of 10 or not
let ans=arr.every((ele)=>(
    ele%10==0
));
console.log(ans);

//Qs2. Create a function to find the min number in an array
function getMin(arr){
    let min= arr.reduce((min, ele)=>{
        if(min<ele){
            return min;
        } else{
            return ele;
        }
    });
    console.log(min);
}
getMin(arr);