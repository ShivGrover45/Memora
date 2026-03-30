const uploadImages=require('../../services/cloud.service')
const galleryModel=require('../../models/gallery.model')
const getImages=async(req,res)=>{
    console.log(req.file)
    const upload=await uploadImages(req.file)
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
}

module.exports=getImages