const mongoose  = require('../shuju');
let userSchema = new mongoose.Schema({
   aid:{type:String},
   start:{type:String},
   destination:{type:String},
   time:{type:Object},
   startTime:{type:String},
   endTime:{type:String},
   price:{type:String},
   startAirport:{type:String},
   endAirport:{type:String}
})

let Price = mongoose.model('Price',userSchema);
module.exports = Price;