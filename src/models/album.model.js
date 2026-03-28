const mongoose=require('mongoose')

const albumSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  coverPhoto: { type: Schema.Types.ObjectId, ref: "gallery", default: null },
  photos:     [{ type: Schema.Types.ObjectId, ref: "gallery" }]
}, { timestamps: true })


const albumModel=new mongoose.model(albumSchema,"album")


module.exports=albumModel