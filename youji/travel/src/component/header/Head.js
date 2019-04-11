import React ,{ Component } from 'react'
import  '../../css/basic.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
 class Head extends Component{
   
    render(){
       return (
         <header id="header">
            <div className="center">
                <h1 className="logo">个人旅行社</h1>
                <nav className="link">
                    <h2 className="none">网站导航</h2>
                    <ul>
                        <li onClick={()=>this.props.selectActive('shou')} className={this.props.header.activeObject.shou?"active" :""}><Link to="/">首页</Link></li>
                        <li onClick={()=>this.props.selectActive('target')} className={this.props.header.activeObject.target?"active" :""}><Link to="/target">旅游资讯</Link></li>
                        <li onClick={()=>this.props.selectActive('strategy')} className={this.props.header.activeObject.strategy?"active" :""}><Link to="/strategy">出旅攻略</Link></li>
                        <li onClick={()=>this.props.selectActive('airport')} className={this.props.header.activeObject.airport?"active" :""}><Link to="/airport">机票预订</Link></li>
                        <li onClick={()=>this.props.selectActive('center')} className={this.props.header.activeObject.center?"active" :""}><Link to="center">个人中心</Link></li>
                        <li ><span className="log_resi"><Link to="/login">登录 </Link>/<Link to="/regsiter"> 注册</Link></span></li>
                    </ul>
                </nav>
            </div>
         </header>
       )
    }
}
const mapStateToProps = (state)=>{
      return {
          header:state.header
      }
}
const mapDispatchToProps = (dispatch)=>({
    selectActive(num){
          let action ={
              type:'change_flag',
              num
          }
          dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Head);