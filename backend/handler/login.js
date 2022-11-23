
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userModel = require('../databse/model/user');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;


async function login(req,res){
    const data={email,password} = req.body;
    // console.log({email,password})

    try {
        let isPresent = await userModel.find(data)
        // console.log('data fetch while login',isPresent)
        
        // let 
        if(isPresent.length==0){
            res.status(404).send({status:'invalid email or password'});
            return
        }else{
            let {name,email} = isPresent[0];
            let dataToEncoded={name,email}
        // console.log('dataToEncoded',dataToEncoded)
            let encodedData = jwt.sign(dataToEncoded,SECRET_KEY)
            res.status(200).send({token:encodedData});
            return
        }
    } catch (error) {
        console.log('error while login',error)
        res.send({status:'error occured while login'})
    }
}
module.exports = {
    login,
}