const express=require('express')
//const multer=require('multer')
const {postImages, getImages, getImageById} = require('./images.controller')
const imageRouter=express.Router()




imageRouter.post('/upload',postImages)
imageRouter.get('/',getImages),
imageRouter.get('/:id',getImageById)

module.exports=imageRouter