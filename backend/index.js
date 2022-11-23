const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const { connectDatabase } = require('./database')
const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8080
connectDatabase().then(() => {
        app.listen(PORT, (req, res) => {
            console.log('app running on port',PORT)
        })
    }
)