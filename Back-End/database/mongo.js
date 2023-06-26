var mongoose = require("mongoose")
mongoose.set('strictQuery', false)
require("dotenv").config()

mongoose.connect('mongodb://127.0.0.1:27017/takepartbeta')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("Connection to takepart-beta : database Successfull")
});

module.exports = mongoose