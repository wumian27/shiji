const mongoose  = require('../shuju');
let userSchema = new mongoose.Schema({
   sid:{type:String},
   header:{type:String},
   title:{type:String},
   num:{type:String},
   bgsrc:{type:String},
   src:{type:String},
   location:{type:String},
   content:{type:Object}
})

let Strategy= mongoose.model('Strategy',userSchema);
module.exports = Strategy;