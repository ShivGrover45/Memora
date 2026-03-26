require('dotenv').config()
const app = require("./src/app")



const PORT=process.env.PORT

app.listen(4500,()=>{
    console.log(`Server listening on PORT:${PORT}`)
})