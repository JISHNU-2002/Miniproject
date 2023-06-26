const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/takepartbeta')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("request-beta collection Connected successfully")
});

const getReq = (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/07_request_form.html');
}

const request = (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    var location = req.body.location;
    var contact = req.body.contact;
    var description = req.body.description;

    var data = {
        "username" : username,
        "email" : email,
        "location" : location,
        "contact" : contact,
        "description" : description
    }

    db.collection('requestbeta').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }else{
            console.log(data)
            console.log("Request Record Inserted Succesfully");
            return res.redirect('/public/00_reqform_success.html');
        }
    });
}

module.exports = {getReq,request}