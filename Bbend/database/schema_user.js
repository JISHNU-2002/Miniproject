const express = require('express')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
    email : {
        type : mongoose.SchemaTypes.String,
        required : true,
        unique : true
    },
    phone : {
        type : mongoose.SchemaTypes.String,
        required : true,
    },
    password : {
        type : mongoose.SchemaTypes.String,
        required : true
    },
    createdAt :{
        type : mongoose.SchemaTypes.Date,
        required : true,
        default : new Date()
    }
})
//compile schema to actual-model
module.exports = mongoose.model('users',UserSchema)