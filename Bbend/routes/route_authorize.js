const express = require('express')
const session = require('express-session')
const router = express.Router()
const user = require('../database/schema_user')
const {hashPassword,compareHash} = require('../utils/hash')

router.route('/login').post(async(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json({
            success : false,
            msg : 'please provide credentials'
        })
    }

    const userDB = await user.findOne({email})
    if(!userDB){
        return res.status(401).json({
            success : false,
            msg : 'user not found'
        })
    }

    const validated = compareHash(password,userDB.password)
    if(validated){
        req.session.user = {
            userDB
        }
        return res.status(200).json({
            success : true,
            msg : 'login success',
            sid : req.sessionID,
            session : req.session
        })
    }else{
        console.log("incorrect password")
        return res.status(401).json({
            success : true,
            msg : 'incorrect password'
        })
    }
})

router.route('/register').post(async(req,res)=>{
    //const {username,password,email} = req.body
    const {username,email} = req.body
    
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    res.redirect('home/deadpool/Desktop/JISHNU/PRJT/TAKE PART/Front-End/public/03_user_registration.html');

    const userDB = await user.findOne({email})
    if(userDB){
        res.status(400).json({
            success : false,
            msg : 'user already exists'
        })
    }else{
        const password = hashPassword(req.body.password)
        const newUser = await user.create({
            username,
            //password,
            email
        })
        res.status(201).json({
            success : true,
            msg : 'account created',
            data : newUser
        })
    }
})

/*router.route('/login').post((req,res)=>{
    const {username,password} = req.body
    if(username && password){
        if(req.session.user){
            res.status(201).json({
                success : true,
                msg : 'already logged in'
            })
        }else{
            req.session.user = {
                username : username
            }
            res.status(201).json({
                success : true,
                data : req.session,
                msg : 'login success'
            })
        }
    }else{
        res.status(400).json({
            success : false,
            msg : 'please provide credentials'
        })
    }
})*/

module.exports = router