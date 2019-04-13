const mongoose  = require('../shuju');
let userSchema = new mongoose.Schema({
   uid:{type:String},
   content:{type:String},
   date:{type:String,default:""},
   header:{type:String},
   headerImg:{type:String},
   comment:{type:Array,default:[]},
   zan:{type:String,default:'0'},
   num:{type:String,default:'0'},
   avatar:{type:String,default:'/img/luxian/hainan.jpg'}
  
})

let Youji= mongoose.model('Youji',userSchema);
module.exports = Youji;