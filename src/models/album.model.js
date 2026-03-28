const mongoose=require('mongoose')

const albumSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  coverPhoto: { type: Schema.Types.ObjectId, ref: "gallery", default: null },
  photos:     [{ type: Schema.Types.ObjectId, ref: "gallery" }]
})


const albumModel=new mongoose.model("album",albumSchema)


module.exports=albumModel