import React, { Component } from 'react'
import Header from '../header/Head'
import axios from 'axios'
import './strategy.css'
import { Carousel } from "antd"
class Strategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strategyList: [],
      youjiList: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/strategy/query').then(res => {
      if (res.data.code) {
        this.setState({
          strategyList: res.data.suc,
        })
      }
    })

    
    //获取游记
    axios.get('http://localhost:3001/youji/query').then(res => {
      console.log(res);

      if (res.data.code) {
        this.setState({
          youjiList: res.data.suc,
        }, () => {
          console.log(this.state.youjiList)
        })
      }
    })
  }
  
  //跳转到游记详情
  troggleDetail(v){
    this.props.history.push({ pathname: "/strategydetail", query: { v } })
  }
  // 跳转到攻略详情
  troggle(v) {
    this.props.history.push({ pathname: "/gongluexiang", query: { v } })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="strategy">
          <div className="header_bg">
            <Carousel autoplay >
              <div><img src="/img/luxian/target_header.jpeg" alt="" /></div>
              <div><img src="/img/luxian/target_header2.jpeg" alt="" />></div>
              <div><img src="/img/luxian/target_header3.jpeg" alt="" /></div>
            </Carousel>
          </div>
          <div className="strategy-center">
            <div className="strategy-center-header">
              推荐攻略
            </div>
            <div className="strategy-show">
              {this.state.strategyList.map(v => {
                return <figure
                  className="footer-figure"
                  key={v._id}
                  onClick={() => { this.troggle(v) }}
                >
                  <img src={v.src} alt="" className="footer-img" />
                  <figcaption>
                    <div className="footer-scence">
                      <div className="footer-tit">{v.header}</div>
                      <p className="footer-show-title">{v.title}</p>
                    </div>
                    <div className="footer-info">
                      <div className="show-location">
                        {v.location}
                      </div>
                      <div className="show-kan">
                        {v.num}浏览
                                  </div>
                    </div>
                  </figcaption>
                </figure>
              })}


            </div>
          </div>

          <div className="strategy-center">
            <div className="strategy-center-header">
              游记和榜单
              </div>
            <div className="strategy-footer">
            {
              this.state.youjiList.map(v =>{
                return <figure className="figure" key={v._id} onClick={()=>{this.troggleDetail(v)}}>
                <img src={v.headerImg} alt="" className="show-img" />
                <figcaption>
                  <div className="scence">
                    <p className="show-title">{v.header}</p>
                  </div>
                  <div className="show-info">
                    <div className="show-location">
                      <img src={v.avatar} alt="" className="show-avatar" />
                      <span>{v.uid}</span>
                    </div>
                    <div className="show-kan">
                     {v.num}浏览
                                           </div>
                  </div>
                </figcaption>
              </figure>
              })
            }
              
{/* 

              <figure className="figure">
                <img src="/img/luxian/hainan.jpg" alt="" className="show-img" />
                <figcaption>
                  <div className="scence">
                    <p className="show-title">#首发##猎艳行动#不走寻常路，
                                          12小时带你玩转不一样的厦门</p>
                  </div>
                  <div className="show-info">
                    <div className="show-location">
                      <img src="/img/luxian/hainan.jpg" alt="" className="show-avatar" />
                      <span>北斗星云</span>
                    </div>
                    <div className="show-kan">
                      8947浏览
                                           </div>
                  </div>
                </figcaption>
              </figure>

              <figure className="figure">
                <img src="/img/luxian/hainan.jpg" alt="" className="show-img" />
                <figcaption>
                  <div className="scence">
                    <p className="show-title">#首发##猎艳行动#不走寻常路，
                                          12小时带你玩转不一样的厦门</p>
                  </div>
                  <div className="show-info">
                    <div className="show-location">
                      <img src="/img/luxian/hainan.jpg" alt="" className="show-avatar" />
                      <span>北斗星云</span>
                    </div>
                    <div className="show-kan">
                      8947浏览
                                           </div>
                  </div>
                </figcaption>
              </figure>

              <figure className="figure">
                <img src="/img/luxian/hainan.jpg" alt="" className="show-img" />
                <figcaption>
                  <div className="scence">
                    <p className="show-title">#首发##猎艳行动#不走寻常路，
                                          12小时带你玩转不一样的厦门</p>
                  </div>
                  <div className="show-info">
                    <div className="show-location">
                      <img src="/img/luxian/hainan.jpg" alt="" className="show-avatar" />
                      <span>北斗星云</span>
                    </div>
                    <div className="show-kan">
                      8947浏览
                                           </div>
                  </div>
                </figcaption>
              </figure>
              <figure className="figure">
                <img src="/img/luxian/hainan.jpg" alt="" className="show-img" />
                <figcaption>
                  <div className="scence">
                    <p className="show-title">#首发##猎艳行动#不走寻常路，
                                          12小时带你玩转不一样的厦门</p>
                  </div>
                  <div className="show-info">
                    <div className="show-location">
                      <img src="/img/luxian/hainan.jpg" alt="" className="show-avatar" />
                      <span>北斗星云</span>
                    </div>
                    <div className="show-kan">
                      8947浏览
                                           </div>
                  </div>
                </figcaption>
              </figure> */}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Strategy;