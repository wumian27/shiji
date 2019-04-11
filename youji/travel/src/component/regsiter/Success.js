import React,{Component} from 'react';
import {Button} from 'antd'
import { withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
let timer="";
class Success extends Component{
  constructor(props){
    super(props);
    this.state = {
      num:60
    }
  }
  componentWillMount(){
    timer=setInterval(()=>{
      let num = this.state.num;
      num--;
      this.setState({
        num
      },()=>{
        if(this.state.num === -1){
          this.toggle();
        }
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(timer)
  }
  toggle(){
   this.props.history.push('/login');
   this.props.changeStore();
  }
 
    render(){
        return(
            <div className="reg_user">
            {/* 头部注册信息 */}
            <div className="reg_title">
              <span>手机注册</span> 
            </div>
            <div className="reg_footer">
            {/* 步骤 */}
               <div className="success_progress">
               </div>
               {/* 表单 */}
               <div className="reg_input">
                 <h3 className="success_h">恭喜，已注册成功!</h3>
                 <div className="success_change">{this.state.num}s 后自动跳转到您之前浏览得页面，您也可以点击 <Button type="ghost" size="small" style={{color:'#f40'}}>
                <a onClick={()=>{this.toggle()}}>立即跳转</a> </Button> </div>  
               </div>
            </div>
         </div>
           
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    changeStore(){
        const action = {
          type:'pwd_succ'
        }
        dispatch(action)
    }
})
export default connect(null,mapDispatchToProps)(withRouter(Success));