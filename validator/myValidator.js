
let myValidator = (req,res,next)=>{
    if(req.body.email == undefined)
    {
        res.status(400).json({
            msg: 'please fill email id'
        })
    }
    else{
        next();
    }
}

module.exports = {myValidator};