require('dotenv').config()
const app = require("./src/app")
const connectDb = require('./src/db/db')


connectDb()
const PORT=process.env.PORT

app.listen(4500,()=>{
    console.log(`Server listening on PORT:${PORT}`)
})