console.log("Hello");
let firstNum = 4;
let secondNum = 6;

// Simple string
console.log("The sum of the two numbers, a=", firstNum, "b=", secondNum, "is=", firstNum + secondNum);

// string using back tick
console.log(`The sum of two numbers a=${firstNum}, b=${secondNum} is =${firstNum + secondNum}`);

// arihmetic operations
/*let a=45;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);*/

// Unary operations
/*console.log(a++);
console.log(++a);
console.log(b++);
console.log(++b);*/

// assignment operator
/*console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);*/

// conditional statement
let age = 23;
if (age >= 18) {
    console.log("You can vote");
}

//create a traffic light system that shows what to do based on the color using (if statement)
let color = "green";
if (color === "red") {
    console.log("Stop");
}
if (color === "yellow") {
    console.log("Slow Down");
}
if (color === "green") {
    console.log("Go");
}

//grading marks using else if
let marks = 40;
if (marks >= 80) {
    console.log("You have a 'A+'");
}
else if (marks >= 60) {
    console.log("You have a 'A'");
}
else if (marks >= 33) {
    console.log("You have a 'B'");
}
else if (marks < 33) {
    console.log("You have a 'F'");
}

//create a system that calculates popcorn price based on the size coustomer asks for
let size = "M";
if (size === "XL") {
    console.log("Price is Rs. 250");
}
else if (size === "L") {
    console.log("Price is Rs. 200");
}
else if (size === "M") {
    console.log("Price is Rs. 100");
}
else {
    console.log("Price is Rs. 50");
}

//create a nested if-else 
let Marks = 50;
if (Marks >= 33) {
    if (marks >= 50) {
        console.log("You have successfully passed your exams by scoring 50%+");
    }
    else {
        console.log("You have cleared your exam! Improve next time")
    }
}
else {
    console.log("you failed!!")
}


//Qs. A "good string" is a string that starts with letter "a" & has length >3. Check if a string is good or not.
//using nested if-else
let str = "Aurbani"
if (str.length > 3) {
    console.log("The string entered is greater than 3")
    if (str[0] === "A") {
        console.log("The first letter of the string is 'a'. The string is a good string!!");
    }
    else {
        console.log("The first letter of the string is not equal to 'a'");
        console.log("Thus, the string entered is not a good string");
    }
}
else {
    console.log("String is not greater than 3")
}

//using logical operator and if-else
if (str.length > 3 && str[0] === "A") {
    console.log("The string is a good string");
}
else {
    console.log("The string is not a good string");
}

//use switch statement to print the day of the week.
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
        case 7:
            console.log("Sunday")
            break;
    default:
        console.log("It is not a day of the week")
}

//alert
// alert("Something is wrong!");

//error message
console.error("This is an error message");
//warning message
console.warn("This is a warning message");
//prompt
let rollno=prompt("Enter your roll no");
console.log(rollno);