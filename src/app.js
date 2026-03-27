const express=require('express')
const imageRouter = require('./features/images/images.router')

const app=express()

app.use('/api',imageRouter)
module.exports=app