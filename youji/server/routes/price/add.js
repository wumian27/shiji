var express = require('express');
var router = express.Router();
const Price = require('./schema');
const data = require('./data');


router.get('/',(req,res,next)=>{
     Price.insertMany(data,(err,suc)=>{
         if(!err){
             res.json({
                 code:1
             })
         }
     })
})
router.get('/time',(req,res,next)=>{
    Price.find({},(err,suc)=>{
        if(!err){
            res.json({
                suc
            })
        }
    })
})
router.get('/d',(req,res,next)=>{
    Price.remove({},(err,re)=>{
      res.json({
          data:re
      })
})        
})
module.exports = router;