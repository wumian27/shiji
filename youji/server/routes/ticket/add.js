var express = require('express');
var router = express.Router();
const Ticket= require('./schema');
// const data = require('./data');


router.post('/',(req,res,next)=>{
    console.log(req.body)
    let {did,uid,travelid,aid,num,money} = req.body;
    // console.log(travelid);
    if(!travelid){
        travelid=""
    }
    if(!aid){
        aid=""
    }
    Ticket.find({did,uid,aid,travelid},(err,re) =>{
        if(!err){
            if(!re.length){
                Ticket.insertMany({did,uid,travelid,aid,num,money} ,(err,suc)=>{
                    if(!err){
                        res.json({
                            code:1
                        })
                    }
                })
            }else{
               let n = Number(re[0].num)+Number(num);
               let p = n*money;
                Ticket.update({did,uid,aid,travelid},{num:n,money:p},{upsert:true},(err,re)=>{
                    if(!err){
                        res.json({
                            code:1
                        })
                    }
                })
            }
        }
    })
     
})

router.post('/dele/airport',(req,res,next)=>{
    let {uid,_id} = req.body;
    Ticket.remove({uid,_id},(err,suc)=>{
         if(!err){
             res.json({
                 code:1
             })
         }
     })
 })

router.get('/b',(req,res,next)=>{
   Ticket.find({},(err,suc)=>{
        if(!err){
            res.json({
                suc
            })
        }
    })
})
router.get('/d',(req,res,next)=>{
    Ticket.remove({},(err,re)=>{
      res.json({
          data:re
      })
})        
})
module.exports = router;