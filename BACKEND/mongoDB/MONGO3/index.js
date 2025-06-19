//require express
const express = require("express");
const app = express();

//require path
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs"); //rendering part is in the ejs 
app.use(express.static(path.join(__dirname, "public"))); //access public files 
app.use(express.urlencoded({ extended: true })); //to parese the data

//requiring the models
const Chat = require("./models/chat");
//require mongoose
const mongoose = require("mongoose");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main().then(() => {
    console.log("connected set");
}).catch((err) => {
    console.log(err);
});
//index route
app.get("/chats", async (req, res) => { //getting data
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats }); //{} multiple data
});

//basic route
app.get("/", (req, res) => {
    res.send("root is working");
});
//chat route
app.post("/chats", (req, res) => { //posting data
    let { from, to, msg } = req.body; //req.body consists {..., ... ,...}
    console.log(req.body);
    let newChat = new Chat({

        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save().then(()=>{
        console.log("chat was saved");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

//new route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//server setup
app.listen(3000, () => {
    console.log("Server is running on 3000");
});

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });