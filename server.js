const Thread = require("./models/Thread");



const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
app.use(express.static("public"))
app.use(express.json());

mongoose.connect("mongodb+srv://xiaomitenshi:xiaomitenshi8838@cluster0.1af8mkt.mongodb.net/threads?retryWrites=true&w=majority").then(() => console.log("DB connected")).catch((error) => console.log(error));

//get message

app.get("/api/v1/threads", async(req,res) => {
    try {
        const allThreads = await Thread.find({});
        res.status(200).json(allThreads);
    }catch {
        console.log(err);
    }
})

//post message

app.post("/api/v1/threads", async(req,res) => {
    try {
        const createThread = await Thread.create(req.body);
        res.status(200).json(createThread);
    }catch {
        console.log(err);
    }
})

app.listen(PORT, console.log("server runnning"))

