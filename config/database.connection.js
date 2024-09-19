const mongoose = require("mongoose")
const DB_URL=process.env.DB_URL

const dbConnect=()=> mongoose.connect(DB_URL).then(()=>{
    console.log("Database connected successfully")
}).catch(error=>{
    console.log(error.message)
})

module.exports=dbConnect