const jwt = require("jsonwebtoken");
const { register } = require("../model/User");
const bcrypt = require('bcrypt')

let loginController = async(req,res)=>{

    // destructuring
    const{email,Password}=req.body;

// check if the username/email is available in db

try{
const {email} = req.body;
const id = await register.findOne({email:email});
if(id !== null){
    bcrypt.compare(Password,id.Password,(err,result)=>{
        if(err){
            res.status(400).json({err});
        }
        else{
            var token = jwt.sign(req.body,process.env.JWT_TOKEN);
            res.status(200).json({
                msg : 'login successfully',
                data: result,
                token:token
            })
        }
    })
}
else{
    res.status(404).json({msg : 'invalid credentials'})
}

}
catch(err){
    console.log(err);
res.status(404).json({error:err});
}

}
module.exports = {loginController};