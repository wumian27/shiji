var express = require('express');
var router = express.Router();
const User = require('./user')
/* GET home page. */
router.post('/', function(req, res, next) {
  let  user = new User({
           telephone : req.body.telephone,                 //用户账号
           pwd: req.body.pwd,                            //密码
        });
        user.save(function (err, re) {
            if (err) {
               res.json({
                   "code":0
               })
            }
            else {
                res.json({
                    "code":1
                })
            }
        })
});
router.get('/b',(req,res,next)=>{
    User.find({},(err,re)=>{
      res.json({
          data:re
      })
})       
})

router.get('/d',(req,res,next)=>{
    User.remove({},(err,re)=>{
      res.json({
          data:re
      })
})        
})
module.exports = router;