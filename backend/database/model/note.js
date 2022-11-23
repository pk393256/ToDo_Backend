const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    workStatus:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    belongsToUser:{
        type:mongoose.Schema.Types.ObjectId , ref:"User"
    }
},{
    timestamps:true
});
const taskModel = mongoose.model('Task',taskSchema)
module.exports = {
    taskModel,
}