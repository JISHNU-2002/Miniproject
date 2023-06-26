const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/takepartbeta')
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("user-beta collection Connected successfully")
})

//user register
const userReg = (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/03_user_registration.html');
}

const userRegistration = (req,res) => {
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

    db.collection('userbeta').insertOne(data,(err,collection) => {
        if(err){
            console.log(err)
            return res.status(404).redirect('/public/03_user_registration.html')
        }else{
            console.log(data)
            console.log("User Record Inserted Succesfully");
            return res.redirect('/public/00_reg_success.html');
        }
    });
}

//user login
const userLog = (req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/public/03_user_login.html');
}

const userLogin = (req,res)=>{
    db.collection('userbeta').findOne({
        email : req.body.email,
        password : req.body.password
    },(err, result)=>{
        if(err){
            throw err;
            //return res.status(404).redirect('/public/03_user_login.html')
        }else{
            console.log(result);
            console.log('User login successfull')
            return res.status(201).redirect('/public/05_user_profile.html')
        }
    })
}

//view users
const viewUsers = async (req,res)=>{
    let results = await db.collection('userbeta').find({}).toArray((err,data)=>{
        if(err){
            console.log(err)
            throw err
        }else{
            console.log(results)
            res.status(201).json(data)
        }
    })
}

const viewUsersonly = (req,res)=>{
    return res.redirect('/public/08_view_users.html')
}

module.exports = {
    userReg,
    userRegistration,
    userLog,
    userLogin,
    viewUsers,
    viewUsersonly
}