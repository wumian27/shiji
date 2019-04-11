var express = require('express');
var router = express.Router();
const Strategy= require('./schema');
const data = require('./data');


router.get('/',(req,res,next)=>{
     Strategy.insertMany(data,(err,suc)=>{
         if(!err){
             res.json({
                 code:1
             })
         }
     })
})
router.get('/b',(req,res,next)=>{
    Strategy.find({},(err,suc)=>{
        if(!err){
            res.json({
                suc
            })
        }
    })
})
router.get('/d',(req,res,next)=>{
    Strategy.remove({},(err,re)=>{
      res.json({
          data:re
      })
})        
})
module.exports = router;