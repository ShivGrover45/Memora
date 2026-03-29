const express=require('express')
const multer=require('multer')
const uploadImages = require('../../services/cloud.service')
const galleryModel = require('../../models/gallery.model')
const imageRouter=express.Router()

const upload=multer({
    storage:multer.memoryStorage()
})


imageRouter.post('/upload',upload.single("image"),async(req,res)=>{
    console.log(req.file.buffer)
    const upload=await uploadImages(req.file.buffer)
    const gallery=await galleryModel.create({
        image:upload.url
    })
    console.log(
        gallery
    )
    res.status(201).json({
        message:"uploaded Successfull",
        gallery
    })
})

module.exports=imageRouter