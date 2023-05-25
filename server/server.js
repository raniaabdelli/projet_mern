const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const port=process.env.PORT || 8081
const cors=require("cors")
app.use(cors())
app.use(express.json())
const connectDB=require("./config/connectDB")
connectDB()
app.use('/',require('./routes/userRoutes'))
app.listen(port,() => console.log("server running on port:",port))
 



