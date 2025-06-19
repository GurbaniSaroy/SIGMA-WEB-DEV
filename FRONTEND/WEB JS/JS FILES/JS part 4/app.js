//forward loop
for(let i=5;i>=1;i--)
{
    console.log(i);
}

// //backward loop
for(let i=10; i<=15;i++)
{
    console.log(i);
}

//print odd numbers(1-15)
//method-1
for(let i=1;i<=15;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}
//method-2
// for(let i=1; i<=15;i+2)
// {
//     // console.log(i);
// }

//Print even numbers (2 to 10)
//method-1
// for(let i=2; i<=10;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
//method-2
//  for(let i=2; i<=10;i+2)
//  {
//     console.log(i);
// }

// //table of 5
for(let i=1; i<=50;i++)
{
    if(i%5==0)
    {
        console.log(i);
    }
}

//taking input from the user
let n=prompt("Enter the table");
//input taken from prompt is in form of string
// n=parseInt(n);//to convert string into integer
// for(let i=n;i<=n*10;i+n)
// {
//     console.log(i);
// }