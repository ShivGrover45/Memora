const imagekit=require('@imagekit/nodejs')
const { toFile } = require('@imagekit/nodejs')

const client=new imagekit({
    privatekey:process.env.IMAGEKIT_PRIVATE_KEY 
})
async function upload(file){

    const result=await client.files.upload({
        file:await toFile(file.buffer, file.originalname),
        fileName:file.originalname,
        folder:"/memora/gallery"
    })
    return result;
}

module.exports=upload