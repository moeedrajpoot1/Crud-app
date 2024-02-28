const express = require('express')
const { Registeruser, Login, Testingjwt } = require('../Controllers/authControllers')
// const verifytoken = require('../Middlewares/verifytoken')
const { Users, Deleteusers ,UsersgetonId, Editusers } = require('../Controllers/userController')


const {verifytoken , authorizedRoles} = require('../Middlewares/verifytoken')

const multer = require('multer')


const router = express.Router()

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function(req , file , cb){
        cb(null , file.originalname)
    }
})

const uplaod = multer({storage : storage})

router.post('/register' , uplaod.single('Profilepicture') , Registeruser) 
router.post('/login' , Login) 
router.get('/users' , Users)
router.get('/usergetonid/:id' , UsersgetonId)
router.put('/editusers/:id' , Editusers)
router.delete('/deleteusers/:id' , Deleteusers)


router.post('/test' , verifytoken , authorizedRoles('Admin'), Testingjwt)






module.exports = router