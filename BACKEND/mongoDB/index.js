const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
main().then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model("User", userSchema);
// const user2 = new User( {
//     name:"bani saroy",
//     age: 20,
//     email:"gurbanisaroy@gmail.com"
// });
// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"gurbani", age:20, email:"gurbani@gmail.com"},
//     {name:"mannu", age:14, email:"mannu@gmail.com"},
//     {name:"yuvi", age:10, email:"yuvi@gmail.com"},
// ]).then((data) => {
//     console.log(data);
// });

User.find(
    {age: {$gte: 12}}
).then((data) => {
    console.log(data);
});
