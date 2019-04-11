var express = require('express');
var router = express.Router();
const User = require('./user')
/* GET home page. */
router.post('/', function(req, res, next) {
   let {telephone,pwd} = req.body;
   User.find({telephone,pwd},(err,re)=>{
    if(re[0]){
       res.json({
           code:1
       })
    }else{
        res.json({
            code:0
        })
    } 
})
})

module.exports = router;