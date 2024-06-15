
const mongoose = require('mongoose');
const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://ishadixit1997:12345@cluster0.quxobin.mongodb.net/blogs"

        )
    } catch (err) {
        console.log("err");
    }
}
module.exports = db;
