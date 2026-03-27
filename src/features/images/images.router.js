const express=require('express')
const multer=require('multer')
const uploadImages = require('../../services/cloud.service')
const imageRouter=express.Router()

const upload=multer({
    storage:multer.memoryStorage()
})


imageRouter.post('/upload',upload.single("image"),async(req,res)=>{
    console.log(req.file.buffer)
    const upload=await uploadImages(req.file)
    console.log(upload)
})

module.exports=imageRouter