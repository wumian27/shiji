import React, { Component } from 'react';
import './login.css'
import { Input ,Button,Icon,message} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginSucc} from '../../ajax/login'
class Login extends Component {
  submit(){
    console.log(this.props.state)
    let pwd = this.pwd.state.value,
        phone = this.phone.state.value;
    if(!pwd||!phone){
      message.warn('密码或账号不能为空');
      
    }else{
     loginSucc('/login',phone,pwd).then(res=>{
       if(res){
         message.success('登录成功');
         this.props.history.push('/')
       }else{
        message.error('密码或账户错误');
       }
     })
    }
}
  render() {
    return (
      <div className = "login_bc">
         <div className="login_mian">
            <div className="login_head">
              账号登录
            </div>
            <div className="login_input">
             <Input 
             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)',fontSize:"14px" }}/>}          
             placeholder = "手机号/昵称"
             size="large"
             className="input"
             ref={(input)=>{this.phone=input}}
             />
             <Input 
             placeholder = "密码"
             prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',fontSize:"14px" }}/>}
             size = "large"
             className = "input"
             type="password"
             ref={(input)=>{this.pwd=input}}
             />
             <Button 
              type="primary"
              size="large"
              className="login_btn"
              onClick={()=>{this.submit()}}
              >登录</Button>
              <div className="footer">
              <span className="password"><Link to="/password">忘记密码</Link></span>
              <span>新人送礼,<Link to="/regsiter" className = "reg_type"> 立即注册</Link></span>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
   return {
     state:state.login
   }
}
export default connect(mapStateToProps,null)(Login);
