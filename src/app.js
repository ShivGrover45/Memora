const express=require('express')
const imageRouter = require('./features/images/images.router')
const multer=require('multer')
const authRouter = require('./features/auth/auth.router')
const app=express()

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:50*1024*1024
    }
})


app.use('/auth',authRouter)
app.use('/api',upload.single("image"),imageRouter)
module.exports=app