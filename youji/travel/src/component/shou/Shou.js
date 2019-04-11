import React, { Component } from 'react';
import { connect } from "react-redux"
import { shouAjax } from '../../ajax/shou/shouAjax'
import { priceAjax } from '../../ajax/shou/price'
import {withRouter} from 'react-router-dom'
import { message} from 'antd'
import Head from '../header/Head';
import axios from 'axios'
import './shou.css'
class Shou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {
        proxy: true,
        gd: false,
        fj: false,
      },
      hai: {
        proxy: true,
        maer: false,
        ba: false,
      }
    }
  }
  //时间格式
  formatTime(time){
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    return `${year}年${month}月${day}`
  }
  // 机票ajax
  getPriceAjax(){
     priceAjax('/price/query',"广州").then(res =>{
          if(res.code){
            this.props.getPrice(res.suc);
          } else {
            message.error('取数据失败');
            console.log('获取数据失败');
          }
     })
  }
  comon(name){
    shouAjax('/scenic/query', name).then(res => {
      if (res.code) {
        this.props.getCountryChense(res.suc);
      } else {
        message.error('获取数据失败');
      }
    });
} 
 componentWillMount() {
   this.getPriceAjax();
   this.comon('chense');
   shouAjax('/scenic/query', 'haiwai').then(res => {
    if (res.code) {
      this.props.getWai(res.suc);
      
    } else {
      message.error('获取数据失败');
    }
  });
  }
  change(name,num){
    this.comon(name);
    if(num === 0){
      this.setState({
        country: {
          proxy: true,
          gd: false,
          fj: false,
        }
      })
    }else if(num === 1){
      this.setState({
        country: {
          proxy: false,
          gd: true,
          fj: false
        }
      })
    }else{
      this.setState({
        country: {
          proxy: false,
          gd: false,
          fj: true
        }
      })
    }
  }
  changeHai(name,num){
    shouAjax('/scenic/query', name).then(res => {
      if (res.code) {
        this.props.getWai(res.suc);
      } else {
        message.error('获取数据失败');
      }
    });

    if(num === 0){
      this.setState({
       hai: {
          proxy: true,
          maer: false,
          ba: false,
        }
      })
    }else if(num === 1){
      this.setState({
        hai: {
          proxy: false,
          maer: true,
          ba: false
        }
      })
    }else{
      this.setState({
        hai: {
          proxy: false,
          maer: false,
          ba: true
        }
      })
    }
  }
  changeMany(name){
    // console.log(name);
    this.props.history.push({pathname:"/target",query: { name }});
    
  }
  priceMany(){
    this.props.history.push('/airport')
  }
  transferDetail(id){
  this.props.history.push({pathname:"/scencedetail",query:{id}})
  
  }
  transferPrice(v){
    this.props.history.push({pathname:"/airport",query:{v}})
    
  }

  searchScence(){
   this.searchFun();
  }

  keyHandler(e){
   if(e.which === 13){
      this.searchFun();
   }
  }
  
  searchFun(){
    let value = this.scence.value.trim();
    if(value){
        axios.post("http://localhost:3001/sencesearch",{
          sence:value
        }).then(res =>{
          if(res.data.code){
              if(res.data.suc.length){
                let data = res.data.suc;
               this.props.history.push({pathname:"/target",query: {name:data}});
              }else{
                message.warn('找不到你搜索的景区');
              }
          }else{
           message.error('找服务器错误');
          }
        })
    }else{
      message.error('请输入景点或城市');
    }
  }
   
  render() {
    return (
      <div >
        <Head></Head>
        <div id="search">
          <div className="center"></div>
          <input 
          ref={input=>this.scence=input}
          type="text" 
          onKeyPress= {(e)=>{this.keyHandler(e)}}
          className="search" placeholder="请输入旅游景点或城市" />
          <button className="button" 
          onClick = {()=>{this.searchScence()}}
          
          >搜索</button>
        </div>
        <div id="tour">
          <section className="center">
            <h2>热门旅游</h2>
            {/* <p>国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种最新热门旅游推荐</p> */}
          </section>
          <div className="scen_header">
            <div className="title_header">
              <h3 className="titleh">境内自由行</h3>
              <ul>
                <li ><a onMouseOver={()=>{this.change('haiwai',0)}} className={this.state.country.proxy ? "shou_active" : ""}>精选路线</a></li>
                <li><a onMouseOver={()=>{this.change('广东',1)}} className={this.state.country.gd ? "shou_active" : ""}>广东</a></li>
                <li><a onMouseOver={()=>{this.change('福建',2)}} className={this.state.country.fj ? "shou_active" : ""}>福建</a></li>
              </ul>
              <span onClick={()=>{this.changeMany('chense')}} href="" className="right">更多</span>
            </div>

            {
              this.props.shou.coutry.map((v, index) => {
                return (

                  <figure key={v._id} onClick={()=>{this.transferDetail(v.travelid)}}>
                    <img src={"/img/shou/" + v.src} alt="" />
                    <figcaption>
                      <div className="scence">
                        <strong className="title">{v.title}</strong> 
                        {v.content}
                      </div>
                      <div className="info">
                        <em className="sat">满意度 {v.sat}%</em>
                        <span className="price">￥ <strong>{v.price}</strong> 起</span>
                      </div>
                      {/* <div className="type">国内长线</div> */}
                    </figcaption>
                  </figure>
                )
              })
            }
          </div>
          <div className="scen_header">
            <div className="title_header">
              <h3 className="titleh">海外旅游</h3>
              <ul>
                <li><a onMouseOver={()=>{this.changeHai('chense',0)}} className={this.state.hai.proxy ? "shou_active" : ""}>精选路线</a></li>
                <li><a onMouseOver={()=>{this.changeHai('马尔代夫',1)}} className={this.state.hai.maer ? "shou_active" : ""}>马尔代夫</a></li>
                <li><a onMouseOver={()=>{this.changeHai('巴厘岛',2)}} className={this.state.hai.ba ? "shou_active" : ""}>巴厘岛</a></li>
              </ul>
              <span onClick={()=>{this.changeMany('haiwai')}} href="" className="right">更多</span>
            </div>
            {
              this.props.shou.wai.map((v, index) => {
                return (

                  <figure key={v._id} onClick={()=>{this.transferDetail(v.travelid)}}>
                    <img src={"/img/shou/" + v.src}  alt="" />
                    <figcaption>
                      <div className="scence">
                        <strong className="title">{v.title}</strong> 
                        {v.content}
                      </div>
                      <div className="info">
                        <em className="sat">满意度 {v.sat}%</em>
                        <span className="price">￥ <strong>{v.price}</strong> 起</span>
                      </div>
                      {/* <div className="type">国内长线</div> */}
                    </figcaption>
                  </figure>
                )
              })
            }
            
          </div>
        </div>



        <div id="tour">
          <section className="center">
            <h2>出游攻略</h2>
            {/* <p>国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种最新热门旅游推荐</p> */}
          </section>
          <div className="scen_header">
            <div className="title_header">
              <h3 className="titleh">目的攻略</h3>
              <a href="" className="right">更多</a>
            </div>

            <div className="bigpuduct">
              <div className="puduct_left">
                <h3>当季推荐</h3>
                <ul>
                  <li><a>圣托里尼：永恒的蓝白世界</a></li>
                  <li><a>哥本哈根：走进安徒生的童话世界</a></li>
                  <li><a>圣彼得堡：风光迤逦的北方威尼斯</a></li>
                  <li><a>清迈：文艺清新的泰北明珠</a></li>
                  <li><a> 柏林：啤酒相约猪肘</a></li>
                </ul>
              </div>

              <div className="puduct_right">
                <div className="puduct_item">
                  <p className="puduct_img">
                    <img src="https://dimg06.c-ctrip.com/images/100k0w000000kgkgfC8BA_R_220_160.jpg" alt="特工王牌的终极度假地" />
                  </p>
                  <div className="img_footer">
                    <p className="item_name">特工王牌的终极度假地</p>
                  </div>
                </div>

                <div className="puduct_item">
                  <p className="puduct_img">
                    <img src="https://dimg06.c-ctrip.com/images/100k0w000000kgkgfC8BA_R_220_160.jpg" alt="特工王牌的终极度假地" />
                  </p>
                  <div className="img_footer">
                    <p className="item_name">特工王牌的终极度假地</p>
                  </div>
                </div>
                <div className="puduct_item">
                  <p className="puduct_img">
                    <img src="https://dimg06.c-ctrip.com/images/100k0w000000kgkgfC8BA_R_220_160.jpg" alt="特工王牌的终极度假地" />
                  </p>
                  <div className="img_footer">
                    <p className="item_name">特工王牌的终极度假地</p>
                  </div>
                </div>
                <div className="puduct_item">
                  <p className="puduct_img">
                    <img src="https://dimg06.c-ctrip.com/images/100k0w000000kgkgfC8BA_R_220_160.jpg" alt="特工王牌的终极度假地" />
                  </p>
                  <div className="img_footer">
                    <p className="item_name">特工王牌的终极度假地</p>
                  </div>
                </div>
              </div>
              <div className="puduct">
              </div>
            </div>
          </div>
        </div>

        <div id="tour">
          <section className="center">
            <h2>机票预订</h2>
            {/* <p>国内旅游、国外旅游、自助旅游、自驾旅游、油轮签证、主题旅游等各种最新热门旅游推荐</p> */}
          </section>
          <div className="scen_header">
            <div className="title_header">
              <h3 className="titleh">机票预订</h3>
              <span className="right" onClick={()=>{this.priceMany()}}>更多</span>
            </div>
            <div className="bigprice">
              <div className="piao">
               
             {this.props.shou.price.map(v=>{
                 return <div 
                 className="piao_left"
                  key={v._id} 
                  onClick={()=>{this.transferPrice(v)}}>
                 <p className="item-name">{v.start}--{v.destination}</p>
                 <p className="item-info">
                   <span className="date">{this.formatTime(v.time)}</span>
                 </p>
                 <p className="item-info">
                   <span className="price">
                     <dfn>¥</dfn>{v.price}
                            <i className="price_info">起</i>
                   </span>
                   <span className="button-yellow">立抢</span>
                 </p>
               </div>
             })}
                

      

          

           

                

              </div>

              <div className="price_r">

              </div>
            </div>
          </div>
        </div>
      </div>

    );



  }
}
const mapStateToProps = (state) => {
  return {
    shou: state.shou
  }
}
const mapDispatchToProps = (dispatch) => ({
  getCountryChense(data) {
 const action = {
      type: 'shou_contry',
      data
    }
    dispatch(action)
  },
  getWai(data){
    const action = {
        type:'shou_hai',
        data
    }
    dispatch(action)
  },
  getPrice(data){
    const action = {
        type:'shou_price',
        data
    }
    dispatch(action)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Shou));
