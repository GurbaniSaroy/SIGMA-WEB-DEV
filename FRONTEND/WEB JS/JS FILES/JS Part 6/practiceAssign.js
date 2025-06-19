//Question1. 
// let array=[5,7,96,11,15,1,60];
// let no=8;
// function compareElements(array, no){
//     for(let i=0;i<array.length;i++){
//         if(array[i]>no){
//             console.log(array[i]);
//         }
//     }
// }
// compareElements(array, no);

//Question2
//let str2="Ggurbanini";
// function extractChar(str2){
//     for(let i=0;i<str2.length;i++){
//         for(let j=1;j<i;j++){
//             if(str2[i]===str2[j]){
//                 console.log(str2.splice(i,1));
//                 i--;
//             }
//         }
//     }
// }
// extractChar(str2);

//Question3.
let country=["Australia","Germany","United States of American"];
let longest="";
let count3=0;
console.log(country.length);
// function longestCountryName(country){
//     for(let i=1; i<=country.length;i++){
    for(let j=0;j<i;j++){
        let iteration=country[j];
        count3++;
    }
//     }
// }

//Question4.
// let str = "Gurbani";
// let count = 0;
// function countVowel(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == "a" ||
//             str.charAt(i) == "A" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "E" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "I" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "O" ||
//             str.charAt(i) == "u" ||
//             str.charAt(i) == "U"
//         ){   count++;
//     }
    
// }
// console.log(count);
// }
// countVowel(str);

// //Question5.
// let random;
// function randomNumber(start, end){
//     let diff=end-start;
//     random=Math.floor(Math.random()*diff)+start;
//     return random;
// }
// randomNumber(2,10);
// console.log(random);