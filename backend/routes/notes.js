const express = require("express")
const { NoteModel } = require("../model/note")
const app = express()
const { authenticator } = require("../middleware/authenticator")
const bcrypt = require("bcrypt")
const noteRouter = express.Router()
const jwt = require("jsonwebtoken");

noteRouter.use(authenticator)


noteRouter.post("/create", async (req, res) => {
    try{
        let note = new NoteModel(req.body)
        await note.save()
        res.send({
            message: "note created",
            status: 1
        })
    }
    catch(error){
        res.send({message:error.message,status:0})

    }
   
})
noteRouter.get("/",async(req,res)=>{
    let token=req.headers.authorization
    jwt.verify(token,"jwt",async(err,decode)=>{
        try{
     let data=await NoteModel.find({user:decode.userId})
     res.send({
        data:data,
        message:"success",
        status:1
     })
        }
        catch(error){
        res.send({message:error.message,status:0})

        }
    })
})
noteRouter.post("/",async(req,res)=>{
    let {id}=req.headers
    try{
        await NoteModel.findByIdAndUpdate({_id:id},req.body)
        res.send({
            message: "note updated",
            status: 1
        })
    }
    catch(error){
        res.send({message:error.message,status:0})
       

    }
   
})
noteRouter.delete("/",async(req,res)=>{
    let {id}=req.headers
    try{
        await NoteModel.findByIdAndDelete({_id:id})
        res.send({
            message: "note deleted",
            status: 1
        })
    }
    catch(error){
        res.send({message:error.message,status:0})

    }
})

module.exports =  noteRouter ;