var express = require('express');
var router = express.Router();
const Strategy= require('./schema');
router.get('/',(req,res,next)=>{
    Strategy.find({},(err,suc)=>{
        if(!err){
            res.json({
                code:1,
                suc
            })
        }
    }).limit(4)
})
// router.get('/d',(req,res,next)=>{
//     Price.remove({},(err,re)=>{
//       res.json({
//           data:re
//       })
// })        
// })
module.exports = router;