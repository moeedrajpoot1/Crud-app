const express = require('express')
const databasecoonection = require('./Database/db')
const router = require('./Routers/Routes')
const cors =require('cors')

const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()

databasecoonection()


app.use('/api/users'  , router)
app.use('/uploads' , express.static('uploads'))

PORT = process.env.PORT || 3000


app.listen(PORT , ()=> {
    console.log(`Server is running ${PORT}`)
})