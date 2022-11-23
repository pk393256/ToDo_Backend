const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const DB_Uri = process.env.DB_Uri;

async function connectDatabase(){
    try{
        await mongoose.connect(DB_Uri);
        console.log('connection to Database successful')
    }
    catch(error){
        console.log('error occured during connecting to database')
        console.log('error while connecting to databse',error)
    }
}

module.exports = {
    connectDatabase,
}