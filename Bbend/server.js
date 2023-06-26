const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const authRouter = require('./routes/route_authorize')
require('./database/mongo')

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000')
})

app.use(express.urlencoded({
    extended : false
}))
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret : 'jishnujsisjishnujs',
    resave : false,
    saveUninitialized : false
}))
app.use((req,res,next)=>{
    console.log(`${req.method} : ${req.url}`)
    next()
})
app.use(express.static('/home/deadpool/Desktop/JISHNU/PRJT/TAKE PART/Front-End/public'))
app.use('/authorize',authRouter)
app.use((req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.status(401).json({
            success : false,
            msg : 'you are not logged in'
        })
    }
})

