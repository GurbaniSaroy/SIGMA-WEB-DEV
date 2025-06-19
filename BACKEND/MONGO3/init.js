//requiring the models
const Chat = require("./models/chat")

const mongoose = require("mongoose");
main().then(() => {
    console.log("worked");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "bani",
        to: "sak",
        msg: "You are a dumbass",
        created_at: new Date(),
    },
    {
        from: "mannu",
        to: "gurbani",
        msg: "when are you coming home",
        created_at: new Date(),
    },
    {
        from: "mannu",
        to: "mom",
        msg: "Bring a ice cream for me",
        created_at: new Date(),
    },
    {
        from: "gurbani",
        to: "dad",
        msg: "print these notes for me",
        created_at: new Date(),
    },
    {
        from: "dad",
        to: "gurbani",
        msg: "Okay done!",
        created_at: new Date(),
    }
]
Chat.insertMany(allChats);