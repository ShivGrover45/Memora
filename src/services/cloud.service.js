const cloudinary=require('cloudinary').v2
const fs=require('fs')
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})



const uploadImages=async(file)=>{
    try{
        if(!file){
            return null
        }
        const base64 = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
        const resp=await cloudinary.uploader.upload(base64,{
            resource_type:'auto'
        })
        console.log("file has been uploaded")
        console.log(resp)
        return resp
    }catch(err){
        console.log(err.message)
    }
}

module.exports=uploadImages