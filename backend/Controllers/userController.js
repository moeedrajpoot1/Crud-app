const userschema = require('../Models/userschema')

const Users = async(req , res)=> {
    const allusers = await userschema.find()

    if (allusers.length > 0){
        return res.send(allusers)
    }else{
        return res.send({Message  : "No user Found"})
    }
}

const Deleteusers = async(req , res)=>{
    const id   = req.params.id

    const checkuser = await userschema.findById({_id : id})

    if (!checkuser){
        return res.send({Message: "User not Found"})
    }

    const deletedata = await userschema.findByIdAndDelete(id)

    if (deletedata){
        return res.send({Message: "User Deleted Successfully"})
    }else{
        return res.send({Message: "User Deleted Failed"})
    }
}


const UsersgetonId = async(req ,res)=>{
    const id = req.params.id ;

    const checkuser = await userschema.findById(id)

    if (checkuser){
        return res.send(checkuser)
    }else{
        return res.send({Message: "Data Not found"})
    }
}




const Editusers = async(req , res)=>{ 
    const id = req.params.id ;
    const update = req.body;

    const updateuserdata = await userschema.findByIdAndUpdate(id , update , {
        new:true
    })

    if (updateuserdata){
        return res.send({Message: "Data Updated Successfully"})
    }else{
        return res.send({Message: "Updated Failed"})
    }
}


module.exports = {Users , Deleteusers , UsersgetonId , Editusers}