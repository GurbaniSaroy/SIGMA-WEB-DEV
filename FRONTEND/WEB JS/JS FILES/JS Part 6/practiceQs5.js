//function that returns sum of nmbrs from 1 to n
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
}
getSum(10);