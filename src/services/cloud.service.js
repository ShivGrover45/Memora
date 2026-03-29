const imagekit=require('@imagekit/nodejs')

const client=new imagekit({
    privatekey:process.env.IMAGEKIT_PRIVATE_KEY 
})
async function upload(buffer){
    const result=await client.files.upload({
        file:buffer.toString('base64'),
        fileName:"Shikha.jpg"
    })
    return result;
}

module.exports=upload