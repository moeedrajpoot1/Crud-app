const mongoose  = require( 'mongoose')
const colors=require("colors")

const databasecoonection = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log(`DataBase IS Connected`.bgBlue)
    } catch (error) {
        console.log(`dataBase Failed${error}`.bgRed)
    }
}

module.exports = databasecoonection