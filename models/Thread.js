const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 20,
    },
    content: {
        type: String,
        requiredPath: true,
    }
})

module.exports = mongoose.model("Thread", ThreadSchema);