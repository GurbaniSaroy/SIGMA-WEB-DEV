//Question1 
let arr = [1, 2, 3, 4, 5, 6, 2, 2, 2, 2, 5, 3, 1];
let num1 = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num1) {
        arr.splice(i, 1);
        i--;
    }
}

//Question2. find the number of digits in a number
//method1
let num2 = 287152;
let count1 = num2.toString().length;
console.log(count1);

//method2
let copy=num2;
let count2=0;
while (copy >0)//copy is greater than 0 because we will use mod method(basic maths) and can't divide if the value is =0
{
    copy = Math.floor(copy/10);
    console.log(copy);
    count2++;
}
console.log(count2);

//Question3. sum of digits in a number
//method1
let num3=287152;
let copy3=num3;
let sum3=0;
let rem;
while(copy3>0){
    rem=(copy3%10);
    copy3=Math.floor(copy3/10);
    sum3=sum3+rem;
}
console.log(sum3);

//Question4. program for factorial
let num4=7;
let fac=1;
for(let i=1;i<=num4; i++){
    fac=fac*i;
}
console.log(fac);

//Question5. find largest no in an array(only +ve numbers)
let array5=[1,2,7,4,6,99];
let largest=array5[0];//initializing with the first index of the array
for(let i=0; i<array5.length;i++){
    if(array5[i]<0){
        console.log("Your array must not contain any of the negative number");
        break;
    }
    if(array5[i]>largest){
        largest=array5[i];
    }
}
console.log(largest);