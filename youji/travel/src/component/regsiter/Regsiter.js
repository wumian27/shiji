import React ,{Component} from 'react'
import Init from './Init'
import Password from './Password'
import Success from './Success'
import './regsiter.css'
import {connect} from 'react-redux'
class Regsiter extends Component{
  forEeach(){
    this.forceUpdate();
  }
  transfer(){
    this.props.history.push('/login');
    this.props.changeTransfer();
  }
    togg(){
      if(this.props.toggle.init){
        return <Init forUpdate={()=>{this.forEeach()}}></Init>;
      }else if(this.props.toggle.password){
        return <Password forUpdate={()=>{this.forEeach()}}></Password>
      }else{
         return <Success></Success>
      }
    }
    render(){
        return (
        <div className="regsiter">
            <div className="reg_content">
              <div className="reg_top">
                <div className="reg_top_r">
                  已有账号？
                  <a onClick={()=>{this.transfer()}}>登录</a>
                </div>
              </div>
             {this.togg()}
          </div>
        </div>
        )
    }
}
let mapStateToProps = (state)=>{
  return {
      toggle:state.login.toggle
  }
}
let mapDispatchToProps = (dispatch)=>({
       changeTransfer(){
         const action = {
           type:'pwd_succ'
         }
         dispatch(action)
       }
})
export default connect(mapStateToProps,mapDispatchToProps)(Regsiter);