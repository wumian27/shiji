const mongoose = require('./shuju')
let userSchema = new mongoose.Schema({
        telephone : { type: String },                    //用户账号
        pwd: {type: String},
        name:{type:String,default:""},
        sex:{type:String,default:""},
        address:{type:String,default:""},
        nc:{type:String,default:""},
        birthday:{type:String,default:""},
        urlavatar:{
            type:String,
            default:"/img/luxian/bjs.jpg"
        }
    })   
let User = mongoose.model('User',userSchema);
module.exports = User;