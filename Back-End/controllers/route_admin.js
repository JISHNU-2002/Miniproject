const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/takepartbeta')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("admin-beta collection Connected successfully")
});

//admin register
const adminReg= (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/02_admin_registration.html');
}

const adminRegistration = (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;

    var data = {
        "username" : username,
        "email" : email,
        "phone" : phone,
        "password" : password
    }

    db.collection('adminbeta').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }else{
            console.log(data)
            console.log("Admin Record Inserted Succesfully");
        }
    });

    return res.redirect('/public/00_reg_success.html');
}

//admin login
const adminLog = (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/02_admin_login.html');
}

const adminLogin = (req,res) => {
    var username = req.body.username;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;

    var data = {
        "username" : username,
        "email" : email,
        "phone" : phone,
        "password" : password
    }

    db.collection('adminbeta').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }else{
            console.log(data)
            console.log("Admin Login Succesful");
            return res.redirect('/public/04_admin_profile.html');
        }
    });
}

//view admins
const viewAdmins = (req,res)=>{
    db.collection('adminbeta').find({}).toArray((err,data)=>{
        if(err){
            console.log(err)
            throw err
        }else{
            console.log(data)
            res.status(201).json(data)
        }
    })
}

module.exports = {
    adminReg,
    adminRegistration,
    adminLog,
    adminLogin,
    viewAdmins
}
