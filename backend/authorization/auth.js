const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const userModel = require('../databse/model/user');
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY;

async function auth(req,res,next){
    let token = req.headers.token;
    // console.log('token',token);
    if(token){
        let encoded_data = jwt.verify(token,SECRET_KEY)
        if(encoded_data){
            let {name,email}=encoded_data
            try {
               let userDataPresent = await userModel.find({name,email});
                // if(userDataPresent.length==0){
                //     res.send
                // }
                req.context.user=userDataPresent;

            } catch (error) {
                res.send({status:'error occured during fetching data in auth handler'})
                return 
            }
        }else{
            res.send({status:'Invalid token'})
            return
        }
        
        
    }else{
        res.send({status:'token is not available'})
        return
    }
next()
}

module.exports = {
    auth,
}