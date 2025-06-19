let student={
    name:"Gurbani",
    age:19,
    marks: 99.9,
    city:"Bathinda"
};
//array replication of object
let student2=["Gurbani", 19, 99.9,"Bathinda"];

//twitter/threads post
const post={
    username: "@gurbanisaroy",
    content: "This is my first post",
    likes: 150,
    reposts: 4,
    tags: ["@sukhamannat1509", "@yuvraj123"]
};
//accessing value
post.username;   

//add/update the key-value pair
student.city="Mumbai";
student.gender="Female";
student.marks="O";
student.marks=[99,89,100];
//delete marks
delete student.marks;

//nested objects
const classInfo={
    gurbani:{
        grade:"O",
        city:"Bathinda"
    },
    sukhmannat:{
        grade:"A+",
        city:"Mumbai"
    },
    yuvraj:{
        grade:"A+",
        city:"Pune"
    },
};
classInfo.gurbani.city="Banglore";//for updating
classInfo.sukhmannat;//for getting the values of sukhamannat

//array of objects
const classInfo1=[
    {
        name:"Gurbani",
        grade: "O",
        city:"Banglore"
    },
    {
        name:"Sukhmannat",
        grade: "A+",
        city:"Delhi"
    },
    {
        name:"Yuvraj",
        grade: "A+",
        city:"Pune"
    },
];

//math object
console.log(Math.PI);