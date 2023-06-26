var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/",(req,res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('index.html');
}).listen(3000);

mongoose.connect('mongodb://0.0.0.0:27017/mydb');

var db = mongoose.connection;

db.on('error',() => console.log("Error connecting to Database"));
db.once('open',() => console.log("Connected to Database"))

app.post("/regform",(req,res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = {
        "name" : name,
        "email" : email,
        "phno" : phno,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully");
    });

    return res.redirect('success.html');
})

console.log("Listening on PORT 3000");