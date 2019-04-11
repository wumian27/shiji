const mongoose  = require('../shuju');
let userSchema = new mongoose.Schema({
   did:{type:String},
   uid:{type:String},
   travelid:{type:String,default:""},
   aid:{type:String,default:""},
   money:{type:String},
   num:{type:String}
})

let Ticket= mongoose.model('Ticket',userSchema);
module.exports = Ticket;