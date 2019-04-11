const mongoose  = require('../shuju');
let userSchema = new mongoose.Schema({
    province : { type: String },               
    country: {type: String},
    city: {type: String},
    content: {type: String},
    program:{type: String},
    price: {type: String},
    time: {type: String},
    sat: {type: String},
    src: {type: String},
    title:{type:String},
    travelid:{type:String},
    scence:{type:String}
})

let Scenic = mongoose.model('Scenic',userSchema);
module.exports = Scenic;