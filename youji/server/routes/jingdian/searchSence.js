var express = require('express');
var router = express.Router();
const Scenic = require('./schema');
router.post('/', function(req, res, next) {
    const {sence} = req.body;
    Scenic.find({$or:[{province:new RegExp(sence)},{city:new RegExp(sence)},{
        scence:new RegExp(sence)
    }]},(err,suc)=>{
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
});



module.exports = router;