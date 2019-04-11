var express = require('express');
var router = express.Router();
const Scenic = require('./schema');
// const mongoose  = require('../shuju');
const data = require('./data')
// let userSchema = new mongoose.Schema({
//     provice : { type: String },               
//     country: {type: String},
//     city: {type: String},
//     content: {type: String},
//     program:{type: String},
//     price: {type: String},
//     time: {type: String},
//     sat: {type: String},
//     src: {type: String},
// })   

// let Scenic = mongoose.model('Scenic',userSchema);
router.get('/', function(req, res, next) {
     Scenic.insertMany(data,(err,suc)=>{
         if(!err){
             res.json({
                 code:1
             })
         }
     });
  });

  router.get('/d',(req,res,next)=>{
    Scenic.remove({},(err,re)=>{
      res.json({
          data:re
      })
})        
})
router.get('/b',(req,res,next)=>{
    Scenic.find({},(err,re)=>{
      res.json({
         re
      })
})        
})
  module.exports = router;