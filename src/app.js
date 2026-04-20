const express=require('express')
const imageRouter = require('./features/images/images.router')
const multer=require('multer')
const cors=require('cors')
//const authRouter = require('./features/auth/auth.router')
const app=express()
app.use(cors())
const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:50*1024*1024
    }
})
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server running fine"
    })
})
app.use('/api',upload.single("image"),imageRouter)
module.exports=app