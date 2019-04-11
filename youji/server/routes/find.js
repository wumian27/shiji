var express = require('express');
var router = express.Router();
let url = require('url')
const User = require('./user');
router.get('/phone',(req,res,next)=>{
    let parseObj = url.parse(req.url, true);
    User.find({telephone:parseObj.query.telephone},(err,re)=>{
        if(re[0]){
           res.json({
               code:0
           })
        }else{
            res.json({
                code:1
            })
        } 
    })
})

module.exports = router