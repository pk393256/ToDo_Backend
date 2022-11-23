const mongoose = require('mongoose');
const taskModel = require('../databse/model/note');


async function getAllUserNotePopulate(req,res){
    let userId = req.context.user[0]._id;
    try {
        // {'belongsToUser':userId}
        let userNote = await taskModel.find().populate('belongsToUser')
        //  .then(res=>{console.log('res',res);return})
        //  .then(data=>console.log('populate data',data))
        
        // res.send(userNotes)
        res.send({userNote})
        return
    } catch (error) {
        console.log('error',error)
        // res.send({error})
        res.send({status:'error occured in fetching user all notes'})
    }

}


async function getAllUserNote(req,res){
    let userId = req.context.user[0]._id;
    try {
        let userNotes = await taskModel.find({'belongsToUser':userId})

        res.send(userNotes)
        return
    } catch (error) {
        res.send({status:'error occured in fetching user all notes'})
    }

}

async function createNote(req,res){
    let noteToBeCreated = req.body; 
    console.log(req.context.user)
    let belongsToUser = mongoose.Types.ObjectId(req.context.user[0]._id);
    try {
        let title = noteToBeCreated.title;
        let ifTaskPresent = await taskModel.find({title,belongsToUser})
        if(ifTaskPresent.length!=0){
            res.send({status:'task already present'})
            return
        }
    } catch (error) {
        res.send({status:'error occured during fetching task to check if it is already present or not'})
        return
    }
    try {
        await taskModel.create({...noteToBeCreated,belongsToUser})
        res.send({status:'Note created'})

    } catch (error) {
        res.send({status:'error occured during creating note'})
    }
}

async function updateUserNote(req,res){
    let {_id} = req.params;
    let belongsToUser = req.context.user[0]._id;
    let {workStatus} = req.body;
    console.log('workStatus',workStatus)

    try {
        let ifPresentUpdate = await taskModel.findOneAndUpdate({_id,belongsToUser},{workStatus});
        console.log('ifPresentUpdate',ifPresentUpdate)
        if(ifPresentUpdate){
            res.send({status:'Note has been updated'})
            return
        }else{
            res.send({status:'Note does not exist'})
            return
        }
        // if(ifPresentUpdate.updateCount)
    } catch (error) {
        res.send({status:'error occured during update request'});
        return 
    }
}

async function deleteUserNote(req,res){
    let {_id} = req.params;
    let belongsToUser = req.context.user[0]._id;
    console.log('query id',req.params);
    try {
        
        let ifPresentAndDeleted = await taskModel.deleteOne({_id,belongsToUser});
        // console.log('ifPresent',ifPresentAndDeleted)
        if(ifPresentAndDeleted.deletedCount!=0){
        res.send({status:'User note deleted'})
        return
        }else{
            res.send({status:'This Note doesnt belongs to you'})
        }
    } catch (error) {
        res.send({status:'error occured during delete request'});
        return;
    }
}

module.exports = {
    getAllUserNote,
    createNote,
    getAllUserNotePopulate,
    deleteUserNote,
    updateUserNote,


}