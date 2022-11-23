const userModel = require('../databse/model/user');



async function createUser(req,res){

    try {
        let {email} = req.body;
        // console.log('body',req.body)
        // console.log('email',email)
        let ifUserAlreadyPresent = await userModel.find({email});
        // console.log('ifPresent',ifUserAlreadyPresent);
        if(ifUserAlreadyPresent.length>0){
            res.send({status:'User already present'})
            return 
        }

    } catch (error) {
        res.send({status:"error occured checking user is present or not"})
        console.log(error);
        return
    }

    try {
        let userData = req.body;
        console.log('userData',userData)

        await userModel.create(userData)

        res.send({status:'User Created Successfully'})

    } catch (error) {
        res.send({status:'error occured while creating User'})
        console.log(error)
    }

}

async function getAllUser(req,res){

    try {
        let allUser = await userModel.find({})
        res.send(allUser);
    } catch (error) {
        console.log(error)
        res.send({status:'error occured while fetching user'})
    }
}



module.exports = {
    createUser,
    getAllUser,
}