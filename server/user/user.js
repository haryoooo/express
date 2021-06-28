const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nama: String,
    usia: Number
})

const User = mongoose.model("user", userSchema) 

module.exports = User