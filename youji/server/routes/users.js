var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shu',(req,res,next)=>{
     mongoose.connect('mongodb://localhost:27017/travel');
    //  console.log(mongoose)
     mongoose.connection.on('open',()=>{
       console.log('chenggong')
     })
     mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
res.json('成功');
 
})
module.exports = router;
