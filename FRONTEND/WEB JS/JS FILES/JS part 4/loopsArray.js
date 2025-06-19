console.log("Forward printing");
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

console.log("backward printing");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}

// nested loop arrays
let heros = [["ironman", "spiderman", "thor"],
["superman", "wonder woman", "flash"]];
for (let i = 0; i < heros.length; i++) {
    console.log(`list #${i}`);
    for (let j = 0; j < heros[i].length; j++) {
        console.log(heros[i][j]);
    }
}

//for of loop
console.log("Using of for-of loop");
//using arrays
let fruit=["apple", "mango", "litchie", "orange", "banana"];
for (fruit  of fruit)
{
    console.log(fruit);
}
//using string
//method1
let fruitStr="Gurbani Saroy is my name";
for(fruitString of fruitStr)
{
    console.log(fruitString);
}
//method2
for(char of "gurbanisaroy")
{
    console.log(char);
}