import React, { Component } from 'react'
import Header from '../header/Head'
import './stategydetail.css'
class Stategydetail extends Component {
    // onScrollHandle(event) {
    //     const clientHeight = event.target.clientHeight
    //     const scrollHeight = event.target.scrollHeight
    //     const scrollTop = event.target.scrollTop
    //     const isBottom = (clientHeight + scrollTop === scrollHeight)
    //     console.log('is bottom:' + isBottom)
    //   }
   
    // componentDidMount() {
    //     // if (this.contentNode) {
    //     //   this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
    //     // }
    //     console.log(window);
    //     console.log(22);
        
        
    //     this.contentNode.scrollIntoView(0)
    //   }
    //   componentWillUnmount() {
    //     // if (this.contentNode) {
    //     //   this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
    //     // }
    //   }
    render() {
        return (
            <div >
                <Header></Header>
                <div className="strategydetail">
                    <div className="detail-bg">
                        <div className="avatar">
                            <div className="detail-avatar" />
                            <div className="avatar_left">
                                <h3 className="avatar-lu">首发猎艳行动不走寻常路</h3>
                                <p className="avatar-name">duck_ye</p>
                                <p className="detail-time">分表于2018-05-23</p>
                            </div>
                        </div>
                    </div>
                    <div className="shape_star">
                        <ul>
                            <li>点赞</li>
                            <li>收藏</li>
                            <li>评论</li>
                        </ul>
                    </div>
                </div>

                <div className="detail-content">
                    <div className="detail-left">
                        <p className="detail-text">
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
                       </p>
                        <div className="text-footer">本游记著作权归@duck_ye所有，转载请联系作者！</div>

                        
                        <div className="detail-comment">
                            <h3 className="detail-comment-header">
                                发表评论
                         </h3>
                            <div className="com-content">
                                <img src="/img/luxian/detail-img.jpg" alt="" className="com-content-img" />
                                <div>
                                    <textarea name="text" id="" className="detail-textarea" placeholder="说两句，撩一撩"></textarea>
                                    <button className="detail-btn">发布</button>
                                </div>
                            </div>

                            <div className="wang-comment">
                                <h3 className="detail-comment-header">
                                    网友评论
                               </h3>
                                <div className="com-content">
                                    <img src="/img/luxian/detail-img.jpg" alt="" className="com-content-img" />
                                    <div>
                                        <h3 className="wang-name">哪我都想去</h3>
                                        <div>感谢分享。景色真的美</div>
                                        <div className="det-time">
                                            <div>2019-02-16</div>
                                            <div>赞 回复</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="com-content">
                                    <img src="/img/luxian/detail-img.jpg" alt="" className="com-content-img" />
                                    <div>
                                        <h3 className="wang-name">哪我都想去</h3>
                                        <div>感谢分享。景色真的美</div>
                                        <div className="det-time">
                                            <div>2019-02-16</div>
                                            <div>赞 回复</div>
                                        </div>
                                    </div>
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