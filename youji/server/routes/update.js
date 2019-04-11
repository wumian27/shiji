var express = require('express');
var router = express.Router();
let url = require('url')
const User = require('./user');
router.get('/pwd',(req,res,next)=>{
    let parseObj = url.parse(req.url, true);
    let  {telephone,pwd} = parseObj.query;
    User.find({telephone},(err,re)=>{
        if(re[0]){
           //修改密码
           User.update({telephone},{pwd:pwd},(err,ress)=>{
            res.json({
                code:1
            })
           })
        }else{
            res.json({
                code:0
            })
        } 
    })
})
//修改用户信息
router.post('/update/person',(req,res,next)=>{
    let {name,nc,birthday,address,telephone,sex} = req.body
    User.find({telephone},(err,re)=>{
        if(re[0]){
           User.update({telephone},{name,nc,birthday,address,sex},(err,ress)=>{
            res.json({
                code:1
            })
           })
        }else{
            res.json({
                code:0
            })
        } 
    })
})
// 获取用户信息
router.post('/query',(req,res,next)=>{
    let {telephone} = req.body
    User.find({telephone},(err,re)=>{
      res.json({
          code:1,
          su:re
      })
    })
})
// 修改个人中心的密码
router.post('/update/pwd',(req,res,next)=>{
    let {telephone,pwd,quePwd} = req.body;
    User.find({telephone,pwd},(err,re)=>{
        if(re[0]){
           User.update({telephone},{pwd:quePwd},(err,ress)=>{
            res.json({
                code:1
            })
           })
        }else{
            res.json({
                code:0
            })
        } 
    })
})
module.exports = router