var express = require('express');
var router = express.Router();
const Youji = require('./schema');
// const data = require('./data');


router.post('/add',(req,res,next)=>{
    let {uid,content,date,header,headerImg} = req.body;
    // console.log(content)
    Youji.insertMany({uid,content,date,header,headerImg},(err,re)=>{
        if(!err){
            res.json({
                code:1
            })
        }else{
            res.json({
                code:0
            })
        }
    }
    
        
    )
})
router.get('/query',(req,res,next)=>{
    Youji.find({},(err,suc)=>{
        if(!err){
            res.json({
                code:1,
                suc
            })
        }
    })
})
router.get('/d',(req,res,next)=>{
    Youji.remove({},(err,re)=>{
      res.json({
          code:1,
          data:re
      })
})        
})
module.exports = router;