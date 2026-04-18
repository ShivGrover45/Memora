const uploadImages=require('../../services/cloud.service')
const galleryModel=require('../../models/gallery.model')
const postImages=async(req,res)=>{
    console.log(req.file)
    const upload=await uploadImages(req.file)
    console.log(upload)
    const optimizedUrl = `${upload.url}?tr=w-1920,q-100`
    console.log(optimizedUrl)
    const gallery=await galleryModel.create({
        image:optimizedUrl
    })
    console.log(
        gallery
    )
    res.status(201).json({
        message:"uploaded Successfull",
        gallery
    })
}

const getImages=async(req,res)=>{
    try
  {  const result=await galleryModel.find()
    res.status(200).json({
        message:"fetched successfully",
        result
    })
}catch(err){
    console.log(err)
    return res.status(500).json({
        message:"Internal Server error"
    })
}
}

const getImageById=async(req,res)=>{
    const id=req.params.id
    try
  {  const result=await galleryModel.findById({
        id
    })
    res.status(200).json({
        message:"image fetched",
        result
    })
}catch(err){
    console.log(err)
    return res.status(500).json({
        message:"Internal Server error"
    })
}
}

module.exports={postImages,getImageById,getImages}