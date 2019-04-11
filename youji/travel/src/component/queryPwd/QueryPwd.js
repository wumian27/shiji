import React ,{Component} from 'react'
import {Input,Button,message} from 'antd'
import {Link} from 'react-router-dom'
import {update} from '../../ajax/update'
class QueryPwd extends Component{
  submit(){
    let pwd = this.pwd.state.value,
        phone = this.phone.state.value,
        qpwd = this.qpwd.state.value;
    if(!pwd||!qpwd||!phone){
      message.warn('密码或账号不能为空');
    }else if(phone.length!==11){
      message.warn('密手机格式不对');
    }else if(pwd !== qpwd){
        message.warn('两次输入的密码不一致');
    }else if(pwd.length<8){
      message.warn('密码长度不小于8位');
    }else{
      update('/pwd',phone,pwd).then(res=>{
        if(res){
          message.success('修改成功');
          this.props.history.push('/login')
        }else{
          message.error('用户不存在');
        }
      })
    }
}
    render(){
        return (
            <div className="regsiter">
            <div className="reg_content">
              <div className="reg_top">
                <div className="reg_top_r">
                  已有账号？
                  <Link to="/login">登录</Link>
                </div>
              </div>
              {/* <Init></Init> */}
              <div className="reg_user">
            {/* 头部注册信息 */}
            <div className="reg_title">
              <span>找回密码</span> 
            </div>
            <div className="reg_footer">
               {/* 表单 */}
               <div className="reg_input xiugai">
               <div className="r_input">
                   <label className="require_input">手机号码：</label>
                    <Input 
                     className="input_width"
                     placeholder="请输入手机号码"
                     ref={input => this.phone=input}
                     ></Input>
                 </div>
                 <div className="r_input">
                   <label className="require_input">登录密码：</label>
                    <Input 
                    className="input_width"
                    type="password"
                     placeholder="请输入密码"
                     ref={input => this.pwd = input}
                     ></Input>
                    <p className="password_txt">密码需至少由8位数字、字母或符号组成</p>
                 </div>
                 <div className="r_input">
                   <label className="require_input">确认密码：</label>
                    <Input 
                    type="password"
                     className="input_width"
                     placeholder="请输入密码"
                     ref={input=>this.qpwd=input}
                     ></Input>
                       <p className="password_txt">密码需至少由8位数字、字母或符号组成</p>
                 </div>
                 <div className="button">
                   <Button 
                   type="primary" 
                   style={{width:'40%'}}
                   onClick = {()=>{this.submit()}}
                   >下一步</Button>
                 </div>
                 
               </div>
            </div>
         </div>
          </div>
        </div>
          
       
        )
    }
}
export default QueryPwd;
