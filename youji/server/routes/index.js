var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.name);
  
  res.json({
    code:'2'
  })
});

module.exports = router;
