import React ,{Component} from 'react'
import {Input,Checkbox,Button,message} from 'antd'
import {connect} from 'react-redux'
import {find} from '../../ajax/findPhone'
class Init extends Component{
  constructor(props){
    super(props);
    this.state={
      randomNum:'',
      flag:false
    }
  }
  componentDidMount(){
    this.random();
  }
  // 产生验证码
  random(){
    let arr = ['a','b','c','d','e','f',1,2,3,5,6,8,4,6,9,0];
    let len= 6,
        str=""
    for(let i = 1;i < len;i++){
      let num = Math.floor(Math.random()*16);
      str += arr[num]
    }
    this.setState({
      randomNum:str
    })
  }
  // 获取复选框
  handlerBox(e){
        this.setState({
          flag:e.target.checked
        })
  }
  // 提交数据
  submit(){
      let phone = this.phone.state.value,
          validate = this.validate.state.value;
      if(!phone||!validate||!this.state.flag){
        message.warn('账号或密码复选框不能为空');
      }else if(phone.length!==11){
            message.warn('手机格式不对');
      }else if(validate!==this.state.randomNum){
        message.warn('验证码有错');
      }else{
        find('/find/phone',phone).then(res=>{
          if(res){
            console.log(this.props)
            this.props.sumbitPhone(phone);
            this.props.forUpdate();
          }else{
            message.error('该账号已经注册');
            this.random();
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
               <div className="reg_progress">
               </div>
               {/* 表单 */}
               <div className="reg_input">
                 <div className="r_input">
                   <label className="require_input">手机号码：</label>
                    <Input 
                    className="input_width"
                     placeholder={this.props.phone?'':"请输入手机号"}
                     ref={(input)=>this.phone = input}
                     ></Input>
                 </div>
                 <div className="r_input">
                   <label className="require_input">验证码：</label>
                    <Input 
                     className="input_width"
                     placeholder="输入下面验证码"
                     ref={(input)=>this.validate = input}
                     ></Input>
                 </div>
                 <div className="r_input">
                   <input 
                    type="text" 
                    className="input_yan"
                    disabled={true} 
                    value={this.state.randomNum}/>
                    <span >看不见，<span className="input_kan" onClick={()=>{this.random()}}>换一张</span></span>
                 </div>
                 <div className="r_input">
                   <Checkbox onChange={(e)=>{this.handlerBox(e)}}></Checkbox>
                   <span>
                   同意 网站会员协议 和 网站隐私政策 并且愿意接受旅游咨询免费信息 
                   </span>
                 </div>
                 <div className="button">
                   <Button 
                   type="primary" 
                   onClick = {()=>{this.submit()}}
                   style={{width:'40%'}}
                   >下一步</Button>
                 </div>
                 
               </div>
            </div>
         </div>
       
        )
    }
}
let mapStateToProps = (state)=>{
  return {
      phone:state.login.phone,
  }
}
let mapDispatchToProps = (dispatch)=>({
      sumbitPhone(phone){
        let action = {
          type:"reg_info",
          phone
        }
        dispatch(action)
      }
})
export default connect(mapStateToProps,mapDispatchToProps)(Init);