//-------------------------arrow functions----------------------
const sum = (a, b) => {
    console.log(a + b);
}
sum(5, 2);

//-------------------------this keyword----------------------
const student = {
    name: "Gurbani",
    age: 19,
    eng: 80,
    math: 80,
    phy: 80,
    // let avg=(eng+math+phy)/3; here this statement will give error because this avg will not recognize eng, math and phy.
    //"this" keyword will let avg know about the eng, etc variable 
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}
//calling the getAvg function using the object student
student.getAvg();

//--------------------- window object for this------------------
function average() {
    console.log(this);
}
average();

//------------------------try & catch----------------------
try {
    console.log(a);
}
catch {
    console.log("a is not defined");
}
//------------------------arrow function-----------------------
const addition = (arg1, arg2) => {
    console.log(arg1 + arg2);
}
addition(10, 6);

//------------------------ arrow function implicit return-------------
const multiply = a1 => (
    a1 * a1
);
multiply(20);
//------------------------ setTimeout function -----------
setTimeout( ()=>{
    console.log("hello there");
}, 4000);
//-------------------------- setInterval function---------
let id=setInterval(()=>{
    console.log("your name");
},2000);
//to stop the interval function
setTimeout(()=>{
    clearInterval(id);
},10000)











