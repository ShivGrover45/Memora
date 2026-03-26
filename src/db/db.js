const mongoose=require('mongoose')

const connectDb=async()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected")
}

module.exports=connectDb