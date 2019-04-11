var express = require('express');
var router = express.Router();
const Price = require('./schema');
router.post('/',(req,res,next)=>{
    const {start} = req.body;//起飞地点
    Price.find({start},(err,suc)=>{
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
})
router.get('/show',(req,res,next)=>{
    Price.find({},(err,suc)=>{
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
    });
})

router.post('/one',(req,res,next)=>{
    const {aid} = req.body;//起飞地点
    Price.find({aid},(err,suc)=>{
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
})

router.post('/ticket',(req,res,next)=>{
    const {start,destination,time} = req.body;
    let t = time.replace(/-/ig,"/");
    console.log(t);
    
    Price.find({start,destination,time:new Date(t)},(err,suc)=>{
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
    })
})


module.exports = router;