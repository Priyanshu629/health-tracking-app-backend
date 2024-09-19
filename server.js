require("dotenv").config()
const express=require('express')
const app= express()
const PORT = process.env.PORT || 5000
const healthRouter=require("./routes/health.routes")
const databseConnection=require("./config/database.connection")
const cors=require("cors")

//connection to database
databseConnection()


//setting middlewares
app.use(cors(
    {
        origin: ["https://health-tracking-app.netlify.app/","http://localhost:5173"],
        methods:["GET","POST","PUT","DELETE"]
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//setting router
app.use("/api/v1",healthRouter)



// listening to server
app.listen(PORT,()=> console.log(`listening to the port ${PORT}`))