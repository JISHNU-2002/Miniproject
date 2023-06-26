const express = require('express')
const bcrypt = require('bcryptjs')

const hashPassword = (password)=>{
    const salt = bcrypt.genSaltSync()
    console.log(`password : ${password}\nbcrypt password : ${salt}`)
    return bcrypt.hashSync(password,salt)
}

const compareHash = (raw,hash)=>{
    return bcrypt.compareSync(raw,hash)
}

module.exports = {
    hashPassword,
    compareHash
}