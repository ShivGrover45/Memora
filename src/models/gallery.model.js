const mongoose=require('mongoose')

const gallerySchema=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    memory:{
        type:String,
        default:""
    },
    albumId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"album",
        default:null
    },
    isFavourite:{
        type:Boolean,
        default:false
    },
    occassion:{
        type:String,
        default:""
    },
})

const galleryModel=mongoose.model("gallery",gallerySchema)


module.exports=galleryModel