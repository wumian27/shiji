import React, { Component } from 'react'
import Header from '../header/Head'
import {message} from 'antd'
import './stategydetail.css'
import { log } from 'util';

class Stategydetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v: {
                headerImg: "/img/luxian/strategy_header.jpg",
                content: '',
                div: {},
                comment:[]
            },
            textarea: ''
        }
    }
    componentDidMount() {
        document.documentElement.scrollTo(0, 0)
        let query = this.props.history.location.query;
        if (query) {
            this.setState({
                v: query.v
            }, () => {
                this.div();
            })
        }
    }
    formatTime(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`

    }
    div() {
        let div = document.getElementById('reft');
        div.innerHTML = this.state.v.content;
    }

    changeTextarea(e) {
        this.setState({
            textarea: e.target.value
        })
    }

    fabu(){
        if(this.state.textarea.trim() === ''){
            message.warn('评论内容不能为空')
        }else{
        var com  = this.state.v.comment;
         var obj = {};
         obj.name='18718080036';
         obj.content = this.state.textarea;
         obj.time= new Date();
         com.push(obj);
         this.setState({
             v:{...this.state.v,com},
             textarea:''
         })
        }
    }
    handlerKey(e){
          if(e.keyCode === 13){
              this.fabu();
          }
          
    }
    render() {
        return (
            <div >
                <Header></Header>
                <div className="strategydetail" >
                    <div className="detail-bg" style={{ background: `url(${this.state.v.headerImg}) no-repeat center center` }}>
                        <div className="avatar">
                            <div className="detail-avatar">
                                <img src={this.state.v.avatar} alt="" className="detail-avatar" />
                            </div>
                            <div className="avatar_left">
                                <h3 className="avatar-lu">{this.state.v.header}</h3>
                                <p className="avatar-name">{this.state.v.uid}</p>
                                <p className="detail-time">分表于{this.formatTime(this.state.v.date)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="shape_star">
                        <ul>
                            <li>点赞</li>
                            <li>收藏</li>
                            <li><a href="#foo">评论</a></li>
                        </ul>
                    </div>
                </div>

                <div className="detail-content">
                    <div className="detail-left" >
                        <div id="reft">
                            {this.state.div}
                        </div>

                        {/* <p className="detail-text">
                            提起厦门，她有着多重标签。有人说厦门适合无主题的城市徒步，有人说厦门适合情侣约会，有人说厦门适合美食吃货，当然也有人说厦门的房价高得吓人。
                            你眼中的厦门，又是什么样的呢？
                       </p>
                        <img src="/img/luxian/detail-img.jpg" alt="" className="detail-img" />
                        <p className="detail-text">
                            作为一个厦门人，可以说是伴随着厦门经济特区的成长，看着厦门从一个小渔村发展到如今东南沿海重要的中心城市、港口及风景旅游城市。并且常年霸屏旅游城市前几位，可以说是红翻天了。当然，幸与不幸，旅游的发展带来了城市经济的发达，服务业的亨通，也带来了诸如房价虚高等等种种问题，以及全国旅游景点的一样化，比如在哪里你都能看到义乌出产的纪念品，
                            在厦门，在中山路，在鼓浪屿，也同样不可避免。
                       </p>
                        <h3 className="detail-header">二、9:30，鸿山公园泡茶讲古</h3>
                        <p className="detail-text">
                            作为一个厦门人，可以说是伴随着厦门经济特区的成长，看着厦门从一个小渔村发展到如今东南沿海重要的中心城市、港口及风景旅游城市。并且常年霸屏旅游城市前几位，可以说是红翻天了。当然，幸与不幸，旅游的发展带来了城市经济的发达，服务业的亨通，也带来了诸如房价虚高等等种种问题，以及全国旅游景点的一样化，比如在哪里你都能看到义乌出产的纪念品，
                            在厦门，在中山路，在鼓浪屿，也同样不可避免。
                       </p> */}
                        <div className="text-footer">本游记著作权归{this.state.v.uid}所有，转载请联系作者！</div>


                        <div className="detail-comment">
                            <h3 className="detail-comment-header">
                                发表评论
                         </h3>
                            <div className="com-content">
                                <img src="/img/luxian/detail-img.jpg" alt="" className="com-content-img" />
                                <div>
                                    <textarea
                                        onChange={(e) => { this.changeTextarea(e) }}
                                        onKeyDown={(e)=>{this.handlerKey(e)}}
                                        value={this.state.textarea}
                                        name="text"
                                        className="detail-textarea"
                                        placeholder="说两句，撩一撩"></textarea>
                                    <button className="detail-btn" onClick={()=>{this.fabu()}}>评论</button>
                                </div>
                            </div>

                            <div className="wang-comment" id="foo">
                                <h3 className="detail-comment-header">
                                    网友评论
                               </h3>

                                <div >
                                    {this.state.v.comment.map((v,index) => {
                                        return <div className="com-content"  key ={index}>
                                            <img src="/img/luxian/detail-img.jpg" alt="" className="com-content-img" />
                                            <div>
                                                <h3 className="wang-name">{v.name}</h3>
                                                <div>{v.content}</div>
                                                <div className="det-time">
                                                    <div>{this.formatTime(v.time)}</div>
                                                    <div>赞 回复</div>
                                                </div>
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="detail-right">
                        <h3 className="right-header">旅游目录</h3>
                        <ul>
                            <li>01 <a>西安美食篇</a></li>
                            <li>02 <a>西安美食篇现场版</a></li>
                            <li>03 <a>西安游玩篇</a></li>
                            <li>04 <a>西安特产篇</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Stategydetail;