const express= require('express')
const app=express()
require("dotenv").config()
const port=process.env.PORT
const {connection}=require("./db")
const hostname = 'localhost';
const bodyparser =require('body-parser')
const cors=require('cors');
const path =require("path")
app.use(bodyparser.json())
app.use(cors())
app.use('/user',require("./routes/user"))
app.use('/notes',require("./routes/notes"))

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")))
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
  
})
app.listen(port,async()=>{
   try{
    await connection
   console.log("db connected")
   } 
   catch(error){
    console.log(error)
   }
   
   console.log("server connected")

})