var express = require("express")
var bodyParser = require("body-parser")
require('./Back-End/database/mongo')
const app = express()
const {adminReg,adminRegistration,adminLog,adminLogin,viewAdmins} = require('./Back-End/controllers/route_admin')
const {userReg,userRegistration,userLog,userLogin,viewUsers,viewUsersonly} = require('./Back-End/controllers/route_user')
const {getReq,request} = require('./Back-End/controllers/route_request')
const {donate,doDonate} = require('./Back-End/controllers/route_donate')

app.use(bodyParser.json())
app.use(express.static('./Front-End'))
app.use(express.static("Front-End"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/", function (req, res) {
    return res.redirect("/public/01_home.html");
});

//admin registration
app.get("/adminreg",adminReg)
app.post("/adminreg",adminRegistration)

//admin login
app.get("/adminlogin",adminLog)
app.post("/adminlogin",adminLogin)

//user registration
app.get("/userreg",userReg)
app.post("/userreg",userRegistration)

//user login
app.get("/userlogin",userLog)
app.post("/userlogin",userLogin)

//request form reg
app.get("/request",getReq)
app.post("/request",request)

//donate for reg
app.get("/donate",donate)
app.post("/donate",doDonate)

//other routes
app.get("/home",(req,res)=>{
    console.log('home ejs')
    res.render("home.ejs");
})

//view route admin exclusive
app.get("/adminlogin/view/users",viewUsersonly)
app.get("/admin/viewusers",viewUsers)
app.get("admin/viewadmin",viewAdmins)

app.listen(3000,()=>{
    console.log("Server started on PORT 3000");
});



