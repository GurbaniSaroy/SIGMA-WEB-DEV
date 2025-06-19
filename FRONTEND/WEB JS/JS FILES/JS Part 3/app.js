let Msg="    helloo    ";
console.log(Msg);

//-----------string method-------------
//trim method
console.log(Msg.trim());
// let password=prompt("Enter your password");
// console.log(password.trim());

//indexOf string method
let str="IloveCoding";
console.log(str.indexOf("I"));
console.log(str.indexOf("C"));
console.log(str.indexOf("o"));
console.log(str.indexOf("i"));
console.log(str.indexOf("f"));

//method chaining
console.log(Msg.toUpperCase().trim());
let newStr="Gurbani Saroy";
console.log(newStr.slice(-2));
console.log(newStr.slice(5,8));

//replacing in string method
console.log(str.replace("o","x"));

//repeat in string method
console.log(str.repeat(3));

//------------PracticeQs--------------
//Qs.1 trim and convert it to uppercase
let msg="help!";
console.log(msg.trim().toUpperCase());

//Qs2. predict O/Ps
let name="ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

//Qs3. separate college and replace"I" with "t"
console.log(name.slice(4).replace("l", "t"));

//---------------array--------------------
//defining array
let students=["gurbani", "sukhmannat", "yuvraj"];
console.log(students);
//accessing index 0
console.log(students[0]);
//mixed array
let mixed=["gurbani", 19, "CSE"];
//chaining in array
console.log(mixed[0][2]);

//-------------methods in array-----------------
//push()
students.push("Pushed student")
console.log(students);

//pop()
students.pop();//deletes the last element
console.log(students);

//unshift()
students.unshift("First pushed ele");
console.log(students);

//shift()
students.shift();
console.log(students);

//blocking a follower
let follower=["a", "b", "c"];
let blocked=follower.shift();
console.log(blocked);

//-------------Practice Qs---------
let start=["january", "june", "march", "august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);

//indexOf in array
let cars=["audi", "alto", "suv"];
console.log(cars.indexOf("alto"));
//includes in array
console.log(cars.includes("xuv"));
//concat in array
let primary=["red", "green", "blue"];
let secondary=["orange", "pink", "magenta"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
//reverse in array
console.log(primary.reverse());//it makes changes in the original array
console.log(primary);
//slice method in array
let colors=["red", "green", "blue", "yellow", "orange", "white"];
console.log(colors.slice(2,5));
console.log(colors.slice(4));
console.log(colors.slice(-5));

//-------------Practice Qs-------------------
let months=["january","july","march", "august"];
//convert into ["july", "june","march", "august"];
months.splice(0,2,"july","june");
console.log(months);

//Qs.2 return the index of JS if the array was reversed
let lang=["C", "C++", "HTML", "Javascript","python", "java", "C#", "sql"];
console.log(lang.reverse().indexOf("Javascript"));

//reference variables in array
let refVar=[1,2,3];
let newRefVar=refVar;
console.log(newRefVar);

//const array
const array=[1,2,3];
array.push(5);
console.log(array);
// array=refVar;//will give error as a new array can't be assigned to a const array

//---------------------Practice Qs-------------------
//replicate the state of tic-tac-toe
let game=[["X",null ,"O"],[null,"X",null],["O",null,"X"]];
console.log(game);