import React ,{Component} from 'react'
import {Input,Button,message} from 'antd'
import {connect} from 'react-redux'
import  {initPwd} from '../../ajax/initPwd'
class Password extends Component{
  submit(){
    let pwd = this.pwd.state.value,
        qpwd = this.qpwd.state.value;
    if(!pwd||!qpwd){
      message.warn('密码不能为空');
    }else if(pwd !== qpwd){
        message.warn('两次输入的密码不一致');
    }else if(pwd.length<8){
      message.warn('密码吗错误');
    }else{
      initPwd('/add',this.props.phone,pwd).then(res=>{
        if(res){
          this.props.submitPwd(pwd);
          this.props.forUpdate();
        }else{
          message.error('注册失败');
          
        }
      })
     
    }
}
    render(){
        return (
            <div className="reg_user">
            {/* 头部注册信息 */}
            <div className="reg_title">
              <span>手机注册</span> 
            </div>
            <div className="reg_footer">
            {/* 步骤 */}
               <div className="password_progress">
               </div>
               {/* 表单 */}
               <div className="reg_input">
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
                     className="input_width"
                     type="password"
                     placeholder="请输入密码"
                     ref={input=>this.qpwd = input}
                     ></Input>
                     <p className="password_txt">密码需至少由8位数字、字母或符号组成。</p>
                 </div>
                 <div className="button">
                   <Button 
                   type="primary" 
                   style={{width:'40%'}}
                   onClick={()=>{this.submit()}}
                   >下一步</Button>
                 </div>
                 
               </div>
            </div>
         </div>
       
        )
    }
}
const mapStateToProps = (state)=>{
  return {
     phone:state.login.telephone
  }
}
const mapDispatchToProps = (dispatch)=>({
  submitPwd(pwd){
    const action = {
      type :'init_password',
      pwd
    }
    dispatch(action)
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Password);