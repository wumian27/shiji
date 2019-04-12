var express = require('express');
var router = express.Router();
let util = require('util');
var formidable = require('formidable');
let uuidv1 = require('uuid/v1');
let path = require('path');
let fs = require('fs')
/* GET home page. */
router.post('/', function(req, res, next) {
// console.log(uuidv1());

    var form = new formidable.IncomingForm();
    form.uploadDir = "../server/public/images";
    form.encoding = 'utf-8';
    // console.log('22');
    
    form.parse(req, function(err, fields, files) {
        // console.log(files);
        
        const png = path.extname(files.file.name);
        const uuidiv = uuidv1();
        
        let all = uuidiv + png;
          
        let old = files.file.path;
       let n = '..\\server\\public\\images\\'+all;
       fs.rename(old,n,(err,re)=>{
           res.json({
               code:1,
              path:all
           })
       })
    // res.json({
    //     code:1
    // })
      
    });
  
})

module.exports = router;