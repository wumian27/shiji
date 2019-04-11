var express = require('express');
var router = express.Router();
const Scenic = require('./schema');
router.post('/', function(req, res, next) {
    const {country} = req.body;
    Scenic.find({$or:[{country},{province:country},{city:country}]},(err,suc)=>{
        if(!err){
            res.json({
                code:1,
                suc
            })
        }else{
            res.json({
                code:0
            })
        }
    }).limit(4);
});
router.post('/detail',(req,res,next)=>{
    const {id} = req.body;
    Scenic.find({travelid:id},(err,re)=>{
      res.json({
          code:1,
          data:re
      })
})        
})

router.post('/many',(req,res,next)=>{
    const {name} = req.body;
    console.log(name);
    if(name){
        Scenic.find({$or:[{country:name}]},(err,re)=>{
            res.json({
                code:1,
                data:re
            })
      })      
    }else{
        Scenic.find({},(err,re)=>{
            res.json({
                code:1,
                data:re
            })
      })      
    }
  
})
module.exports = router;