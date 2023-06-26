const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/takepartbeta')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("donate-beta collection Connected successfully")
});

const donate = (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/06_donate_form.html');
}

const doDonate = (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    var location = req.body.location;
    var contact = req.body.contact;
    var foodname = req.body.foodname;
    var quantity = req.body.quantity;
    var description = req.body.description;

    var data = {
        "username" : username,
        "email" : email,
        "location" : location,
        "contact" : contact,
        "foodname" : foodname,
        "quantity" : quantity,
        "description" : description
    }

    db.collection('donatebeta').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }else{
            console.log(data)
            console.log("donate Record Inserted Succesfully");
            return res.redirect('/public/00_donate_success.html');
        }
    });
}

module.exports = {donate,doDonate}