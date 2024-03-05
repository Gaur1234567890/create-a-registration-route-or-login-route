const { mongoose } = require("../config/db")

let studentSchema = new mongoose.Schema({
     firstName: {type:String, required:true},
     lastName:{type:String},
     email:{type:String,required:true,unique:true},
     username:{type:String,required:true},
     mobileno:Number,
     Password : String,
     role : {type:String,
          enum : ['admin','teacher','student'],
          default:'student'
        }
},
{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})
const register = mongoose.model('Student',studentSchema);

module.exports = {register};

