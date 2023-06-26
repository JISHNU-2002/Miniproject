const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/express')
.then(()=>{
    console.log('connected to mongodb')
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose