const jwt = require('jsonwebtoken')

const verifytoken = (req , res , next) => {
    const token = req.headers.authorization.split(' ')[1]

   try {
    if (!token){
        return res.send({Message: "Token is required"})
    }

    const decoded = jwt.verify(token , process.env.JWT_KEY)

    req.user = decoded
    next()
   } catch (error) {
    console.log(error)
   }
}

const authorizedRoles = (allowedroles) =>{
    return (req , res , next)=>{
        if (!allowedroles.includes(req.user.role)){
            return res.send({Message : "Sorry you dont have permission to access this route"})
        }

        next()
    }
}



module .exports = {verifytoken , authorizedRoles};