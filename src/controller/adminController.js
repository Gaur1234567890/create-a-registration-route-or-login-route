const {  register} = require("../model/User");
const  bcrypt = require('bcrypt')

let adminController = (req,res)=>{

console.log(req.body.Password);
const number =10;
let encryptedPassword = bcrypt.hashSync(req.body.Password,number);

req.body.Password = encryptedPassword;
    console.log(req.body);
    const obj = new register(req.body);
    obj.save().then(d=>{
        console.log('save the data successfully')
        res.status(200).json({msg : 'registration successfully'})
    }).catch(e=>{
        console.log('not save the data successfully')
        res.status(200).json({msg : 'error to save data',e})
    })
}

module.exports = {adminController : adminController};