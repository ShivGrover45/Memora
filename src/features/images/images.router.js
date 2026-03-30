const express=require('express')
//const multer=require('multer')
const getImages = require('./images.controller')
const imageRouter=express.Router()




imageRouter.post('/upload',getImages)

module.exports=imageRouter