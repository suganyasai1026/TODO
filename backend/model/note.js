const mongoose= require("mongoose")

const noteSchema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    color:{type:String,default:"#9acd35"},
    user:{type:String,required:true}

})

const NoteModel =mongoose.model("note",noteSchema);

module.exports ={
    NoteModel,
}